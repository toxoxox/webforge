/**
 * Error Integration Service - Connects error checking with WebForge architecture
 * 
 * Integrates the error checking system with Monaco Editor, file management,
 * tutorial system, and other WebForge components for seamless operation.
 */

const ErrorIntegrationService = {
    // Integration state
    isInitialized: false,
    editorDecorations: [],
    errorCheckTimeout: null,
    lastCheckTime: 0,
    
    // Configuration
    config: {
        autoCheckDelay: 2000,
        enableEditorDecorations: true,
        enableTutorialIntegration: true,
        enableRealTimeChecking: true,
        showErrorsInStatusBar: true
    },

    /**
     * Initialize error checking integration
     */
    init() {
        if (this.isInitialized) return;

        // Wait for core services to be available
        this.waitForServices().then(() => {
            this.setupEditorIntegration();
            this.setupFileSystemIntegration();
            this.setupTutorialIntegration();
            this.setupUIIntegration();
            this.isInitialized = true;
            
            console.log('Error Integration Service initialized');
        });
    },

    /**
     * Wait for required services to be available
     */
    async waitForServices() {
        return new Promise((resolve) => {
            const checkServices = () => {
                const requiredServices = [
                    'ErrorCheckerService',
                    'ErrorDisplayService'
                ];
                
                const availableServices = requiredServices.filter(service => 
                    typeof window[service] !== 'undefined'
                );
                
                if (availableServices.length === requiredServices.length) {
                    resolve();
                } else {
                    setTimeout(checkServices, 100);
                }
            };
            
            checkServices();
        });
    },

    /**
     * Setup Monaco Editor integration
     */
    setupEditorIntegration() {
        // Wait for editor to be available
        const setupEditor = () => {
            if (typeof editor !== 'undefined' && editor) {
                this.integrateWithMonaco();
            } else {
                setTimeout(setupEditor, 500);
            }
        };
        
        setupEditor();
    },

    /**
     * Integrate with Monaco Editor
     */
    integrateWithMonaco() {
        if (!editor) return;

        // Listen for content changes
        editor.onDidChangeModelContent(() => {
            if (this.config.enableRealTimeChecking) {
                this.scheduleErrorCheck();
            }
        });

        // Listen for cursor position changes
        editor.onDidChangeCursorPosition((e) => {
            this.updateErrorHighlighting(e.position);
        });

        // Add error checking command
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyE, () => {
            this.runErrorCheck();
        });

        // Register error checking action
        editor.addAction({
            id: 'check-errors',
            label: 'Check for Errors',
            keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyE],
            contextMenuGroupId: 'navigation',
            contextMenuOrder: 1.5,
            run: () => {
                this.runErrorCheck();
            }
        });

        console.log('Monaco Editor integration complete');
    },

    /**
     * Setup file system integration
     */
    setupFileSystemIntegration() {
        // Override file operations to trigger error checking
        if (typeof FileService !== 'undefined') {
            const originalUpdateFile = FileService.updateFile;
            FileService.updateFile = (...args) => {
                const result = originalUpdateFile.apply(FileService, args);
                this.scheduleErrorCheck();
                return result;
            };
        }

        // Listen for file switches
        const originalOpenFile = window.openFile;
        if (originalOpenFile) {
            window.openFile = (...args) => {
                const result = originalOpenFile.apply(window, args);
                this.scheduleErrorCheck();
                return result;
            };
        }
    },

    /**
     * Setup tutorial system integration
     */
    setupTutorialIntegration() {
        if (!this.config.enableTutorialIntegration) return;

        // Enhanced error checking for tutorial mode
        if (typeof TutorialEngine !== 'undefined') {
            const originalNextStep = TutorialEngine.nextStep;
            TutorialEngine.nextStep = (...args) => {
                // Check for errors before advancing
                this.runTutorialErrorCheck().then((hasBlockingErrors) => {
                    if (!hasBlockingErrors) {
                        return originalNextStep.apply(TutorialEngine, args);
                    } else {
                        this.showTutorialErrorGuidance();
                    }
                });
            };
        }
    },

    /**
     * Setup UI integration
     */
    setupUIIntegration() {
        // Add error checking button to toolbar
        this.addErrorCheckButton();
        
        // Add status bar integration
        if (this.config.showErrorsInStatusBar) {
            this.setupStatusBarIntegration();
        }

        // Listen for theme changes
        document.addEventListener('themechange', () => {
            this.updateErrorDecorations();
        });
    },

    /**
     * Add error checking button to editor toolbar
     */
    addErrorCheckButton() {
        const toolbar = document.querySelector('.editor-toolbar') || 
                       document.querySelector('.header-actions');
        
        if (!toolbar) return;

        const errorButton = document.createElement('button');
        errorButton.id = 'error-check-btn';
        errorButton.className = 'btn btn-secondary';
        errorButton.title = 'Check for Errors (Ctrl+E)';
        errorButton.innerHTML = `
            <i data-lucide="alert-triangle"></i>
            <span>Check Errors</span>
        `;
        
        errorButton.addEventListener('click', () => {
            this.runErrorCheck();
            ErrorDisplayService.show();
        });

        toolbar.appendChild(errorButton);
        
        // Initialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    },

    /**
     * Setup status bar integration
     */
    setupStatusBarIntegration() {
        // Create status bar element if it doesn't exist
        let statusBar = document.getElementById('editor-status-bar');
        if (!statusBar) {
            statusBar = document.createElement('div');
            statusBar.id = 'editor-status-bar';
            statusBar.className = 'editor-status-bar';
            
            const editorContainer = document.querySelector('.editor-container');
            if (editorContainer) {
                editorContainer.appendChild(statusBar);
            }
        }

        // Add error status element
        const errorStatus = document.createElement('div');
        errorStatus.id = 'error-status';
        errorStatus.className = 'status-item error-status';
        errorStatus.innerHTML = `
            <i data-lucide="check-circle"></i>
            <span>No errors</span>
        `;
        
        errorStatus.addEventListener('click', () => {
            ErrorDisplayService.toggle();
        });

        statusBar.appendChild(errorStatus);
        
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    },

    /**
     * Schedule error checking with debouncing
     */
    scheduleErrorCheck() {
        clearTimeout(this.errorCheckTimeout);
        
        this.errorCheckTimeout = setTimeout(() => {
            this.runErrorCheck();
        }, this.config.autoCheckDelay);
    },

    /**
     * Run error checking
     */
    async runErrorCheck() {
        if (!currentProject || !currentProject.files) {
            return;
        }

        const startTime = Date.now();
        this.lastCheckTime = startTime;

        try {
            // Update UI to show checking state
            this.updateCheckingState(true);

            // Run error checking
            const errorResult = await ErrorCheckerService.checkForErrors(
                currentProject.files,
                currentFile
            );

            // Only update if this is the most recent check
            if (this.lastCheckTime === startTime) {
                this.handleErrorResults(errorResult);
            }

        } catch (error) {
            console.error('Error checking failed:', error);
            this.updateCheckingState(false);
        }
    },

    /**
     * Run tutorial-specific error checking
     */
    async runTutorialErrorCheck() {
        if (!currentProject || !TutorialEngine.currentTutorial) {
            return false;
        }

        const errorResult = await ErrorCheckerService.checkForErrors(
            currentProject.files,
            currentFile
        );

        // Check for blocking errors in tutorial context
        const blockingErrors = errorResult.errors.filter(error => 
            error.category === 'CRITICAL' || 
            (error.category === 'STRUCTURAL' && TutorialEngine.currentStep)
        );

        return blockingErrors.length > 0;
    },

    /**
     * Handle error checking results
     */
    handleErrorResults(errorResult) {
        // Update error display
        ErrorDisplayService.displayErrors(errorResult);

        // Update editor decorations
        if (this.config.enableEditorDecorations) {
            this.updateEditorDecorations(errorResult.errors);
        }

        // Update status bar
        this.updateStatusBar(errorResult);

        // Update error check button
        this.updateErrorCheckButton(errorResult);

        // Update checking state
        this.updateCheckingState(false);

        // Trigger custom event
        this.dispatchErrorEvent(errorResult);
    },

    /**
     * Update editor decorations for errors
     */
    updateEditorDecorations(errors) {
        if (!editor || !this.config.enableEditorDecorations) return;

        // Clear existing decorations
        this.editorDecorations = editor.deltaDecorations(this.editorDecorations, []);

        // Create new decorations
        const decorations = errors
            .filter(error => error.file === currentFile?.name && error.line > 0)
            .map(error => ({
                range: new monaco.Range(error.line, 1, error.line, 1),
                options: {
                    isWholeLine: true,
                    className: `error-line-decoration ${error.category.toLowerCase()}`,
                    glyphMarginClassName: `error-glyph ${error.category.toLowerCase()}`,
                    hoverMessage: {
                        value: `**${error.title}**\n\n${error.message}`
                    },
                    minimap: {
                        color: this.getErrorColor(error.category),
                        position: monaco.editor.MinimapPosition.Inline
                    }
                }
            }));

        this.editorDecorations = editor.deltaDecorations([], decorations);
    },

    /**
     * Get error color for decorations
     */
    getErrorColor(category) {
        const colors = {
            CRITICAL: '#dc2626',
            STRUCTURAL: '#ea580c',
            SYNTAX: '#d97706',
            STYLE: '#2563eb',
            SUGGESTION: '#16a34a'
        };
        return colors[category] || '#6b7280';
    },

    /**
     * Update status bar with error information
     */
    updateStatusBar(errorResult) {
        const errorStatus = document.getElementById('error-status');
        if (!errorStatus) return;

        const totalErrors = errorResult.totalFound || 0;
        const icon = errorStatus.querySelector('i');
        const text = errorStatus.querySelector('span');

        if (totalErrors === 0) {
            icon.setAttribute('data-lucide', 'check-circle');
            text.textContent = 'No errors';
            errorStatus.className = 'status-item error-status success';
        } else {
            icon.setAttribute('data-lucide', 'alert-triangle');
            text.textContent = `${totalErrors} error${totalErrors !== 1 ? 's' : ''}`;
            
            const hasCritical = errorResult.errors.some(e => e.category === 'CRITICAL');
            errorStatus.className = `status-item error-status ${hasCritical ? 'critical' : 'warning'}`;
        }

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    },

    /**
     * Update error check button state
     */
    updateErrorCheckButton(errorResult) {
        const button = document.getElementById('error-check-btn');
        if (!button) return;

        const totalErrors = errorResult.totalFound || 0;
        const hasErrors = totalErrors > 0;

        button.className = `btn ${hasErrors ? 'btn-warning' : 'btn-secondary'}`;
        
        if (hasErrors) {
            button.title = `${totalErrors} error${totalErrors !== 1 ? 's' : ''} found - Click to view`;
        } else {
            button.title = 'No errors found - Click to check again';
        }
    },

    /**
     * Update checking state UI
     */
    updateCheckingState(isChecking) {
        const button = document.getElementById('error-check-btn');
        const statusBar = document.getElementById('error-status');

        if (isChecking) {
            if (button) {
                button.disabled = true;
                button.classList.add('checking');
            }
            if (statusBar) {
                statusBar.classList.add('checking');
            }
        } else {
            if (button) {
                button.disabled = false;
                button.classList.remove('checking');
            }
            if (statusBar) {
                statusBar.classList.remove('checking');
            }
        }
    },

    /**
     * Show tutorial error guidance
     */
    showTutorialErrorGuidance() {
        if (typeof showToast === 'function') {
            showToast(
                'Please fix the errors in your code before continuing to the next step.',
                'warning',
                'Errors Found',
                5000
            );
        }

        // Show error panel
        ErrorDisplayService.show();

        // Highlight tutorial-related errors
        this.highlightTutorialErrors();
    },

    /**
     * Highlight errors related to current tutorial step
     */
    highlightTutorialErrors() {
        if (!TutorialEngine.currentStep) return;

        const currentStep = TutorialEngine.currentStep;
        const relevantErrors = ErrorDisplayService.currentErrors.filter(error => 
            error.file === currentStep.targetFile ||
            error.message.toLowerCase().includes(currentStep.title.toLowerCase())
        );

        // Add special highlighting for tutorial-relevant errors
        relevantErrors.forEach((error, index) => {
            const errorElement = document.querySelector(`[data-error-index="${index}"]`);
            if (errorElement) {
                errorElement.classList.add('tutorial-relevant');
            }
        });
    },

    /**
     * Update error highlighting based on cursor position
     */
    updateErrorHighlighting(position) {
        if (!editor || !position) return;

        // Find errors on current line
        const currentLineErrors = ErrorDisplayService.currentErrors.filter(error => 
            error.file === currentFile?.name && error.line === position.lineNumber
        );

        // Update hover information or inline suggestions
        if (currentLineErrors.length > 0) {
            this.showInlineErrorInfo(currentLineErrors[0], position);
        }
    },

    /**
     * Show inline error information
     */
    showInlineErrorInfo(error, position) {
        // This could show a tooltip or inline widget with error details
        // Implementation would depend on Monaco Editor's widget system
        console.log('Inline error info:', error.title, 'at line', position.lineNumber);
    },

    /**
     * Dispatch custom error event
     */
    dispatchErrorEvent(errorResult) {
        const event = new CustomEvent('webforge:errorsChecked', {
            detail: {
                errors: errorResult.errors,
                totalFound: errorResult.totalFound,
                hasMoreErrors: errorResult.hasMoreErrors,
                summary: errorResult.summary
            }
        });

        document.dispatchEvent(event);
    },

    /**
     * Enable/disable real-time checking
     */
    setRealTimeChecking(enabled) {
        this.config.enableRealTimeChecking = enabled;
        
        if (enabled) {
            this.scheduleErrorCheck();
        } else {
            clearTimeout(this.errorCheckTimeout);
        }
    },

    /**
     * Enable/disable editor decorations
     */
    setEditorDecorations(enabled) {
        this.config.enableEditorDecorations = enabled;
        
        if (!enabled && this.editorDecorations.length > 0) {
            this.editorDecorations = editor.deltaDecorations(this.editorDecorations, []);
        } else if (enabled) {
            this.scheduleErrorCheck();
        }
    },

    /**
     * Get current error statistics
     */
    getErrorStats() {
        const errors = ErrorDisplayService.currentErrors || [];
        
        return {
            total: errors.length,
            critical: errors.filter(e => e.category === 'CRITICAL').length,
            structural: errors.filter(e => e.category === 'STRUCTURAL').length,
            syntax: errors.filter(e => e.category === 'SYNTAX').length,
            style: errors.filter(e => e.category === 'STYLE').length,
            suggestion: errors.filter(e => e.category === 'SUGGESTION').length
        };
    },

    /**
     * Export error report
     */
    exportErrorReport() {
        const errors = ErrorDisplayService.currentErrors || [];
        const stats = this.getErrorStats();
        
        const report = {
            timestamp: new Date().toISOString(),
            project: currentProject?.name || 'Unknown',
            file: currentFile?.name || 'Unknown',
            statistics: stats,
            errors: errors.map(error => ({
                category: error.category,
                title: error.title,
                message: error.message,
                file: error.file,
                line: error.line,
                fix: error.fix
            }))
        };

        return report;
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        ErrorIntegrationService.init();
    });
} else {
    ErrorIntegrationService.init();
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ErrorIntegrationService;
}