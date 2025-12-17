/**
 * Storage Service - Handles browser storage operations
 */

const StorageService = {
    /**
     * Save data to localStorage
     */
    save(key, data) {
        try {
            const serialized = JSON.stringify(data);
            localStorage.setItem(key, serialized);
            return true;
        } catch (e) {
            if (e.name === 'QuotaExceededError') {
                console.error('Storage quota exceeded');
                if (typeof showToast === 'function') {
                    showToast('Storage is full. Please delete some projects or export your work.', 'error', 'Storage Full');
                }
            }
            return false;
        }
    },

    /**
     * Load data from localStorage
     */
    load(key) {
        try {
            const serialized = localStorage.getItem(key);
            return serialized ? JSON.parse(serialized) : null;
        } catch (e) {
            console.error('Error loading from storage:', e);
            return null;
        }
    },

    /**
     * Delete data from localStorage
     */
    delete(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Error deleting from storage:', e);
            return false;
        }
    },

    /**
     * Clear all storage
     */
    clear() {
        try {
            localStorage.clear();
            return true;
        } catch (e) {
            console.error('Error clearing storage:', e);
            return false;
        }
    },

    /**
     * Get storage information
     */
    getStorageInfo() {
        try {
            let total = 0;
            for (let key in localStorage) {
                if (localStorage.hasOwnProperty(key)) {
                    total += localStorage[key].length + key.length;
                }
            }
            
            // Approximate 5MB limit for localStorage
            const limit = 5 * 1024 * 1024;
            
            return {
                used: total,
                available: limit - total,
                percentage: (total / limit) * 100
            };
        } catch (e) {
            return { used: 0, available: 0, percentage: 0 };
        }
    },

    // Tutorial-specific storage methods

    /**
     * Save tutorial progress for a user
     */
    saveTutorialProgress(userId, tutorialId, progress) {
        const key = `tutorial_progress_${userId}`;
        const allProgress = this.load(key) || {};
        allProgress[tutorialId] = {
            ...progress,
            lastAccessedAt: new Date().toISOString()
        };
        return this.save(key, allProgress);
    },

    /**
     * Load tutorial progress for a user
     */
    loadTutorialProgress(userId, tutorialId = null) {
        const key = `tutorial_progress_${userId}`;
        const allProgress = this.load(key) || {};
        
        if (tutorialId) {
            return allProgress[tutorialId] || null;
        }
        
        return allProgress;
    },

    /**
     * Mark tutorial as completed
     */
    markTutorialComplete(userId, tutorialId) {
        const progress = this.loadTutorialProgress(userId, tutorialId);
        if (progress) {
            progress.completed = true;
            progress.completedAt = new Date().toISOString();
            return this.saveTutorialProgress(userId, tutorialId, progress);
        }
        return false;
    },

    /**
     * Get tutorial completion status
     */
    getTutorialStatus(userId, tutorialId) {
        const progress = this.loadTutorialProgress(userId, tutorialId);
        if (!progress) {
            return { started: false, completed: false, progress: 0 };
        }
        
        const progressPercentage = progress.totalSteps > 0 
            ? (progress.completedSteps.length / progress.totalSteps) * 100 
            : 0;
            
        return {
            started: progress.started,
            completed: progress.completed,
            progress: progressPercentage,
            completedSteps: progress.completedSteps.length,
            totalSteps: progress.totalSteps
        };
    },

    /**
     * Create a snapshot of current tutorial state for reset functionality
     */
    createSnapshot(userId, tutorialId, stepId, fileStates) {
        const key = `tutorial_snapshot_${userId}_${tutorialId}_${stepId}`;
        const snapshot = {
            tutorialId: tutorialId,
            stepId: stepId,
            fileStates: fileStates,
            createdAt: new Date().toISOString()
        };
        return this.save(key, snapshot);
    },

    /**
     * Restore tutorial state from snapshot
     */
    restoreSnapshot(userId, tutorialId, stepId) {
        const key = `tutorial_snapshot_${userId}_${tutorialId}_${stepId}`;
        return this.load(key);
    },

    /**
     * Save user's unlocked tutorials
     */
    saveUnlockedTutorials(userId, unlockedTutorials) {
        const key = `unlocked_tutorials_${userId}`;
        return this.save(key, unlockedTutorials);
    },

    /**
     * Load user's unlocked tutorials
     */
    loadUnlockedTutorials(userId) {
        const key = `unlocked_tutorials_${userId}`;
        return this.load(key) || [];
    },

    /**
     * Add tutorial to unlocked list
     */
    unlockTutorial(userId, tutorialId) {
        const unlocked = this.loadUnlockedTutorials(userId);
        if (!unlocked.includes(tutorialId)) {
            unlocked.push(tutorialId);
            return this.saveUnlockedTutorials(userId, unlocked);
        }
        return true;
    },

    /**
     * Save current tutorial state (which tutorial and step user is on)
     */
    saveCurrentTutorialState(userId, tutorialId, stepId) {
        const key = `current_tutorial_${userId}`;
        const state = {
            tutorialId: tutorialId,
            stepId: stepId,
            timestamp: new Date().toISOString()
        };
        return this.save(key, state);
    },

    /**
     * Load current tutorial state
     */
    loadCurrentTutorialState(userId) {
        const key = `current_tutorial_${userId}`;
        return this.load(key);
    },

    /**
     * Clean up old snapshots to prevent storage bloat
     */
    cleanupOldSnapshots(userId, maxAge = 7 * 24 * 60 * 60 * 1000) { // 7 days default
        const cutoffDate = new Date(Date.now() - maxAge);
        const keysToDelete = [];
        
        try {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith(`tutorial_snapshot_${userId}_`)) {
                    const snapshot = this.load(key);
                    if (snapshot && new Date(snapshot.createdAt) < cutoffDate) {
                        keysToDelete.push(key);
                    }
                }
            }
            
            keysToDelete.forEach(key => this.delete(key));
            return keysToDelete.length;
        } catch (e) {
            console.error('Error cleaning up snapshots:', e);
            return 0;
        }
    }
};
