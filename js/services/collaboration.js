/**
 * Collaboration Service
 * Handles real-time collaborative editing using Firebase Realtime Database
 */

const CollaborationService = {
    db: null,
    sessionRef: null,
    currentSessionId: null,
    isHost: false,
    collaborators: new Map(),
    localChanges: false,

    /**
     * Initialize Firebase connection
     * @param {Object} firebaseConfig - Firebase configuration object
     */
    initialize(firebaseConfig) {
        if (!firebaseConfig || !window.firebase) {
            console.warn('Firebase not configured or loaded');
            return false;
        }

        try {
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            this.db = firebase.database();
            return true;
        } catch (error) {
            console.error('Failed to initialize Firebase:', error);
            return false;
        }
    },

    /**
     * Create a new collaboration session
     * @param {Object} project - Project to share
     * @returns {string} Session ID
     */
    async createSession(project) {
        if (!this.db) {
            throw new Error('Firebase not initialized');
        }

        const sessionId = generateId();
        const sessionData = {
            projectId: project.id,
            projectName: project.name,
            files: project.files,
            host: this.getUserId(),
            createdAt: Date.now(),
            collaborators: {
                [this.getUserId()]: {
                    name: this.getUserName(),
                    joinedAt: Date.now(),
                    color: this.getRandomColor()
                }
            }
        };

        await this.db.ref(`sessions/${sessionId}`).set(sessionData);
        this.currentSessionId = sessionId;
        this.isHost = true;
        this.listenToSession(sessionId);

        return sessionId;
    },

    /**
     * Join an existing collaboration session
     * @param {string} sessionId - Session ID to join
     * @returns {Object} Session data
     */
    async joinSession(sessionId) {
        if (!this.db) {
            throw new Error('Firebase not initialized');
        }

        const sessionRef = this.db.ref(`sessions/${sessionId}`);
        const snapshot = await sessionRef.once('value');

        if (!snapshot.exists()) {
            throw new Error('Session not found');
        }

        const userId = this.getUserId();
        await sessionRef.child(`collaborators/${userId}`).set({
            name: this.getUserName(),
            joinedAt: Date.now(),
            color: this.getRandomColor()
        });

        this.currentSessionId = sessionId;
        this.isHost = false;
        this.listenToSession(sessionId);

        return snapshot.val();
    },

    /**
     * Listen to session changes
     * @param {string} sessionId - Session ID
     */
    listenToSession(sessionId) {
        this.sessionRef = this.db.ref(`sessions/${sessionId}`);

        // Listen to file changes
        this.sessionRef.child('files').on('value', (snapshot) => {
            if (!this.localChanges) {
                const files = snapshot.val();
                if (files && window.onCollaborativeUpdate) {
                    window.onCollaborativeUpdate(files);
                }
            }
            this.localChanges = false;
        });

        // Listen to collaborators
        this.sessionRef.child('collaborators').on('value', (snapshot) => {
            const collaborators = snapshot.val() || {};
            this.collaborators.clear();
            Object.entries(collaborators).forEach(([id, data]) => {
                this.collaborators.set(id, data);
            });
            if (window.onCollaboratorsUpdate) {
                window.onCollaboratorsUpdate(Array.from(this.collaborators.values()));
            }
        });

        // Listen to cursor positions
        this.sessionRef.child('cursors').on('value', (snapshot) => {
            const cursors = snapshot.val() || {};
            if (window.onCursorsUpdate) {
                window.onCursorsUpdate(cursors);
            }
        });
    },

    /**
     * Update file content in session
     * @param {string} fileId - File ID
     * @param {string} content - File content
     */
    async updateFile(fileId, content) {
        if (!this.sessionRef) return;

        this.localChanges = true;
        await this.sessionRef.child(`files`).transaction((files) => {
            if (!files) return files;
            const fileIndex = files.findIndex(f => f.id === fileId);
            if (fileIndex !== -1) {
                files[fileIndex].content = content;
                files[fileIndex].lastModified = Date.now();
                files[fileIndex].lastModifiedBy = this.getUserId();
            }
            return files;
        });
    },

    /**
     * Update cursor position
     * @param {string} fileId - File ID
     * @param {Object} position - Cursor position {line, column}
     */
    async updateCursor(fileId, position) {
        if (!this.sessionRef) return;

        const userId = this.getUserId();
        await this.sessionRef.child(`cursors/${userId}`).set({
            fileId,
            position,
            timestamp: Date.now()
        });
    },

    /**
     * Leave current session
     */
    async leaveSession() {
        if (!this.sessionRef) return;

        const userId = this.getUserId();
        await this.sessionRef.child(`collaborators/${userId}`).remove();
        await this.sessionRef.child(`cursors/${userId}`).remove();

        // If host is leaving, transfer host or close session
        if (this.isHost) {
            const snapshot = await this.sessionRef.child('collaborators').once('value');
            const collaborators = snapshot.val();
            if (collaborators && Object.keys(collaborators).length > 0) {
                // Transfer host to first remaining collaborator
                const newHost = Object.keys(collaborators)[0];
                await this.sessionRef.child('host').set(newHost);
            } else {
                // No collaborators left, delete session
                await this.sessionRef.remove();
            }
        }

        this.sessionRef.off();
        this.sessionRef = null;
        this.currentSessionId = null;
        this.isHost = false;
        this.collaborators.clear();
    },

    /**
     * Get or create user ID
     * @returns {string} User ID
     */
    getUserId() {
        let userId = localStorage.getItem('webforge_user_id');
        if (!userId) {
            userId = generateId();
            localStorage.setItem('webforge_user_id', userId);
        }
        return userId;
    },

    /**
     * Get user name from localStorage
     * @returns {string|null} User name or null if not set
     */
    getUserName() {
        return localStorage.getItem('webforge_user_name');
    },

    /**
     * Set user name in localStorage
     * @param {string} name - User name
     */
    setUserName(name) {
        if (name && name.trim()) {
            localStorage.setItem('webforge_user_name', name.trim());
        }
    },

    /**
     * Generate random color for user cursor
     * @returns {string} Hex color
     */
    getRandomColor() {
        const colors = [
            '#3498db', '#e74c3c', '#2ecc71', '#f39c12', 
            '#9b59b6', '#1abc9c', '#e67e22', '#34495e'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    },

    /**
     * Get session share URL
     * @returns {string} Shareable URL
     */
    getShareUrl() {
        if (!this.currentSessionId) return null;
        return `${window.location.origin}${window.location.pathname}?session=${this.currentSessionId}`;
    },

    /**
     * Check if currently in a session
     * @returns {boolean}
     */
    isInSession() {
        return this.currentSessionId !== null;
    }
};
