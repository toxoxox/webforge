/**
 * Error Display Service - UI components for showing beginner-friendly error messages
 * 
 * Handles the visual presentation of errors with clear, educational formatting
 * and interactive elements for learning and fixing issues.
 */

const ErrorDisplayService = {
    // Configuration
    config: {
        maxVisibleErrors: 3,
        autoRefresh: true,
        showLineNumbers: true,
        enableQuickFix: true,
        animateErrors: true
    },

    // Current state
    currentErrors: [],
    isVisible: false,
    refreshInterval: null,

    /**
     * Initialize the error display system
     */
    init() {
        this.createErrorPanel();
        this.setupEventListeners();
        
        if (this.config.autoRefresh) {
            this.startAutoRefresh();
        }
    },

    /**
     * Create the error panel UI
     */
    createErrorPanel() {
        // Check if panel already exists
        if (document.getElementById('error-panel')) {
            return;
        }

        const panelHTML = `
            <div id="error-panel" class="error-panel hidden">
                <div class="error-panel-header">
                    <div class="error-panel-title">
                        <i data-lucide="alert-triangle" class="error-panel-icon"></i>
                        <span>Code Helper</span>
                        <span id="error-count-badge" class="error-count-badge">0</span>
                    </div>
                    <div class="error-panel-controls">
                        <button id="error-refresh-btn" class="error-control-btn" title="Check for errors">
                            <i data-lucide="refresh-cw"></i>
                        </button>
                        <button id="error-settings-btn" class="error-control-btn" title="Settings">
                            <i data-lucide="settings"></i>
                        </button>
                        <button id="error-close-btn" class="error-control-btn" title="Close">
                            <i data-lucide="x"></i>
                        </button>
                    </div>
                </div>
                
                <div class="error-panel-content">
                    <div id="error-summary" class="error-summary hidden">
                        <div class="error-summary-stats">
                            <div class="error-stat critical">
                                <span class="error-stat-count" id="critical-count">0</span>
                                <span class="error-stat-label">Critical</span>
                            </div>
                            <div class="error-stat structural">
                                <span class="error-stat-count" id="structural-count">0</span>
                                <span class="error-stat-label">Structure</span>
                            </div>
                            <div class="error-stat syntax">
                                <span class="error-stat-count" id="syntax-count">0</span>
                                <span class="error-stat-label">Syntax</span>
                            </div>
                            <div class="error-stat style">
                                <span class="error-stat-count" id="style-count">0</span>
                                <span class="error-stat-label">Style</span>
                            </div>
                            <div class="error-stat suggestion">
                                <span class="error-stat-count" id="suggestion-count">0</span>
                                <span class="error-stat-label">Tips</span>
                            </div>
                        </div>
                    </div>
                    
                    <div id="error-list" class="error-list">
                        <!-- Errors will be populated here -->
                    </div>
                    
                    <div id="error-empty-state" class="error-empty-state">
                        <div class="error-empty-icon">
                            <i data-lucide="check-circle"></i>
                        </div>
                        <h3>Great job! No issues found</h3>
                        <p>Your code looks good. Keep up the excellent work!</p>
                    </div>
                </div>
                
                <div class="error-panel-footer">
                    <button id="error-beginner-mode-toggle" class="error-footer-btn">
                        <i data-lucide="graduation-cap"></i>
                        <span>Beginner Mode: ON</span>
                    </button>
                    <button id="error-show-all-btn" class="error-footer-btn hidden">
                        <span>Show All Errors</span>
                    </button>
                </div>
            </div>
        `;

        // Add to page
        document.body.insertAdjacentHTML('beforeend', panelHTML);
        
        // Initialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    },

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Panel controls
        document.getElementById('error-refresh-btn')?.addEventListener('click', () => {
            this.refreshErrors();
        });

        document.getElementById('error-close-btn')?.addEventListener('click', () => {
            this.hide();
        });

        document.getElementById('error-settings-btn')?.addEventListener('click', () => {
            this.showSettings();
        });

        // Beginner mode toggle
        document.getElementById('error-beginner-mode-toggle')?.addEventListener('click', () => {
            this.toggleBeginnerMode();
        });

        // Show all errors button
        document.getElementById('error-show-all-btn')?.addEventListener('click', () => {
            this.showAllErrors();
        });

        // Listen for file changes to auto-refresh
        if (typeof editor !== 'undefined' && editor) {
            editor.onDidChangeModelContent(() => {
                if (this.config.autoRefresh && this.isVisible) {
                    this.debounceRefresh();
                }
            });
        }
    },

    /**
     * Display errors in the panel
     */
    displayErrors(errorResult) {
        this.currentErrors = errorResult.errors || [];
        
        // Update summary
        this.updateSummary(errorResult.summary);
        
        // Update error count badge
        const badge = document.getElementById('error-count-badge');
        if (badge) {
            badge.textContent = errorResult.totalFound || 0;
            badge.className = `error-count-badge ${this.getCountBadgeClass(errorResult.totalFound)}`;
        }

        // Show/hide empty state
        const emptyState = document.getElementById('error-empty-state');
        const errorList = document.getElementById('error-list');
        const summary = document.getElementById('error-summary');

        if (this.currentErrors.length === 0) {
            emptyState?.classList.remove('hidden');
            errorList?.classList.add('hidden');
            summary?.classList.add('hidden');
        } else {
            emptyState?.classList.add('hidden');
            errorList?.classList.remove('hidden');
            summary?.classList.remove('hidden');
            
            this.renderErrorList();
        }

        // Show "Show All" button if there are more errors
        const showAllBtn = document.getElementById('error-show-all-btn');
        if (showAllBtn) {
            if (errorResult.hasMoreErrors) {
                showAllBtn.classList.remove('hidden');
                showAllBtn.innerHTML = `<span>Show All ${errorResult.totalFound} Errors</span>`;
            } else {
                showAllBtn.classList.add('hidden');
            }
        }

        // Auto-show panel if there are critical errors
        if (this.currentErrors.some(error => error.category === 'CRITICAL')) {
            this.show();
        }
    },

    /**
     * Render the list of errors
     */
    renderErrorList() {
        const errorList = document.getElementById('error-list');
        if (!errorList) return;

        const visibleErrors = this.currentErrors.slice(0, this.config.maxVisibleErrors);
        
        errorList.innerHTML = visibleErrors.map((error, index) => {
            const formattedError = ErrorCheckerService.formatError(error);
            return this.renderErrorItem(formattedError, index);
        }).join('');

        // Re-initialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Setup error item interactions
        this.setupErrorItemListeners();
    },

    /**
     * Render individual error item
     */
    renderErrorItem(error, index) {
        const categoryInfo = error.categoryInfo;
        const isExpanded = false; // Could be tracked in state
        
        return `
            <div class="error-item ${error.category.toLowerCase()}" data-error-index="${index}">
                <div class="error-item-header" onclick="ErrorDisplayService.toggleErrorDetails(${index})">
                    <div class="error-item-icon">
                        <i data-lucide="${categoryInfo.icon}" style="color: ${categoryInfo.color}"></i>
                    </div>
                    <div class="error-item-main">
                        <div class="error-item-title">${error.displayTitle}</div>
                        <div class="error-item-location">
                            ${error.file}${error.line > 0 ? `:${error.line}` : ''}
                        </div>
                    </div>
                    <div class="error-item-controls">
                        ${error.canAutoFix ? `
                            <button class="error-quick-fix-btn" onclick="ErrorDisplayService.quickFix(${index})" title="Quick fix">
                                <i data-lucide="zap"></i>
                            </button>
                        ` : ''}
                        <button class="error-expand-btn" title="Show details">
                            <i data-lucide="chevron-down"></i>
                        </button>
                    </div>
                </div>
                
                <div class="error-item-details ${isExpanded ? '' : 'hidden'}">
                    <div class="error-message">
                        ${this.formatErrorMessage(error.displayMessage)}
                    </div>
                    
                    ${error.fix ? `
                        <div class="error-fix-section">
                            <h4>
                                <i data-lucide="wrench"></i>
                                How to fix:
                            </h4>
                            <p>${error.fix}</p>
                        </div>
                    ` : ''}
                    
                    ${error.learnMoreUrl ? `
                        <div class="error-learn-more">
                            <a href="${error.learnMoreUrl}" target="_blank" class="error-learn-link">
                                <i data-lucide="external-link"></i>
                                Learn more about this
                            </a>
                        </div>
                    ` : ''}
                    
                    <div class="error-actions">
                        ${error.canAutoFix ? `
                            <button class="btn btn-primary btn-small" onclick="ErrorDisplayService.quickFix(${index})">
                                <i data-lucide="zap"></i>
                                <span>Quick Fix</span>
                            </button>
                        ` : ''}
                        <button class="btn btn-small" onclick="ErrorDisplayService.goToError(${index})">
                            <i data-lucide="arrow-right"></i>
                            <span>Go to Code</span>
                        </button>
                        <button class="btn btn-small" onclick="ErrorDisplayService.dismissError(${index})">
                            <i data-lucide="x"></i>
                            <span>Dismiss</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    /**
     * Format error message with proper line breaks and styling
     */
    formatErrorMessage(message) {
        return message
            .replace(/\n\n💡/g, '<div class="error-explanation"><i data-lucide="lightbulb"></i>')
            .replace(/\n\n🎯/g, '</div><div class="error-tip"><i data-lucide="target"></i>')
            .replace(/\n/g, '<br>')
            + (message.includes('💡') || message.includes('🎯') ? '</div>' : '');
    },

    /**
     * Update error summary statistics
     */
    updateSummary(summary) {
        if (!summary) return;

        Object.keys(summary).forEach(category => {
            const countElement = document.getElementById(`${category}-count`);
            if (countElement) {
                countElement.textContent = summary[category];
            }
        });
    },

    /**
     * Get CSS class for error count badge
     */
    getCountBadgeClass(count) {
        if (count === 0) return 'success';
        if (count <= 2) return 'warning';
        return 'error';
    },

    /**
     * Toggle error item details
     */
    toggleErrorDetails(index) {
        const errorItem = document.querySelector(`[data-error-index="${index}"]`);
        if (!errorItem) return;

        const details = errorItem.querySelector('.error-item-details');
        const expandBtn = errorItem.querySelector('.error-expand-btn i');
        
        if (details.classList.contains('hidden')) {
            details.classList.remove('hidden');
            expandBtn.setAttribute('data-lucide', 'chevron-up');
        } else {
            details.classList.add('hidden');
            expandBtn.setAttribute('data-lucide', 'chevron-down');
        }

        // Re-initialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    },

    /**
     * Quick fix for errors that support it
     */
    quickFix(index) {
        const error = this.currentErrors[index];
        if (!error || !error.canAutoFix) return;

        // Implement quick fixes based on error type
        switch (error.title) {
            case 'Missing Semicolon':
                this.fixMissingSemicolon(error);
                break;
            case 'Missing DOCTYPE Declaration':
                this.fixMissingDoctype(error);
                break;
            case 'Unclosed HTML Tag':
                this.fixUnclosedTag(error);
                break;
            default:
                this.showToast('Quick fix not available for this error', 'info');
        }
    },

    /**
     * Navigate to error location in editor
     */
    goToError(index) {
        const error = this.currentErrors[index];
        if (!error || !editor) return;

        // Switch to the correct file if needed
        if (currentProject && error.file !== currentFile?.name) {
            const targetFile = currentProject.files.find(f => f.name === error.file);
            if (targetFile) {
                openFile(targetFile.id);
            }
        }

        // Navigate to line
        if (error.line > 0) {
            editor.revealLineInCenter(error.line);
            editor.setPosition({ lineNumber: error.line, column: 1 });
            editor.focus();
        }

        this.showToast(`Navigated to ${error.file}:${error.line}`, 'success');
    },

    /**
     * Dismiss an error (hide it temporarily)
     */
    dismissError(index) {
        this.currentErrors.splice(index, 1);
        this.renderErrorList();
        
        // Update count badge
        const badge = document.getElementById('error-count-badge');
        if (badge) {
            badge.textContent = this.currentErrors.length;
        }

        this.showToast('Error dismissed', 'info');
    },

    /**
     * Show/hide the error panel
     */
    show() {
        const panel = document.getElementById('error-panel');
        if (panel) {
            panel.classList.remove('hidden');
            this.isVisible = true;
        }
    },

    hide() {
        const panel = document.getElementById('error-panel');
        if (panel) {
            panel.classList.add('hidden');
            this.isVisible = false;
        }
    },

    toggle() {
        if (this.isVisible) {
            this.hide();
        } else {
            this.show();
        }
    },

    /**
     * Refresh errors
     */
    async refreshErrors() {
        if (!currentProject || !currentProject.files) {
            return;
        }

        const refreshBtn = document.getElementById('error-refresh-btn');
        if (refreshBtn) {
            refreshBtn.classList.add('spinning');
        }

        try {
            const errorResult = await ErrorCheckerService.checkForErrors(
                currentProject.files, 
                currentFile
            );
            
            this.displayErrors(errorResult);
        } catch (error) {
            console.error('Error checking failed:', error);
            this.showToast('Error checking failed', 'error');
        } finally {
            if (refreshBtn) {
                refreshBtn.classList.remove('spinning');
            }
        }
    },

    /**
     * Debounced refresh for auto-refresh
     */
    debounceRefresh() {
        clearTimeout(this.refreshTimeout);
        this.refreshTimeout = setTimeout(() => {
            this.refreshErrors();
        }, 1000);
    },

    /**
     * Start auto-refresh interval
     */
    startAutoRefresh() {
        if (this.refreshInterval) {
            clearInterval(this.refreshInterval);
        }
        
        this.refreshInterval = setInterval(() => {
            if (this.isVisible && currentProject) {
                this.refreshErrors();
            }
        }, 10000); // Check every 10 seconds
    },

    /**
     * Toggle beginner mode
     */
    toggleBeginnerMode() {
        const currentMode = ErrorCheckerService.config.beginnerMode;
        ErrorCheckerService.setBeginnerMode(!currentMode);
        
        const toggleBtn = document.getElementById('error-beginner-mode-toggle');
        if (toggleBtn) {
            const span = toggleBtn.querySelector('span');
            span.textContent = `Beginner Mode: ${!currentMode ? 'ON' : 'OFF'}`;
        }

        // Refresh to show updated error messages
        this.refreshErrors();
        
        this.showToast(`Beginner mode ${!currentMode ? 'enabled' : 'disabled'}`, 'success');
    },

    /**
     * Show all errors (expand limit)
     */
    showAllErrors() {
        this.config.maxVisibleErrors = this.currentErrors.length;
        this.renderErrorList();
        
        const showAllBtn = document.getElementById('error-show-all-btn');
        if (showAllBtn) {
            showAllBtn.classList.add('hidden');
        }
    },

    /**
     * Show settings modal
     */
    showSettings() {
        // Implementation for settings modal
        this.showToast('Settings coming soon!', 'info');
    },

    /**
     * Setup error item event listeners
     */
    setupErrorItemListeners() {
        // Event delegation is handled by onclick attributes in the HTML
        // This method can be used for additional event setup if needed
    },

    /**
     * Quick fix implementations
     */
    fixMissingSemicolon(error) {
        if (!editor || !error.line) return;
        
        const line = editor.getModel().getLineContent(error.line);
        const updatedLine = line.trim() + (line.trim().endsWith(';') ? '' : ';');
        
        editor.executeEdits('fix-semicolon', [{
            range: new monaco.Range(error.line, 1, error.line, line.length + 1),
            text: updatedLine
        }]);
        
        this.showToast('Added missing semicolon', 'success');
        this.refreshErrors();
    },

    fixMissingDoctype(error) {
        if (!editor) return;
        
        const model = editor.getModel();
        const firstLine = model.getLineContent(1);
        
        if (!firstLine.toLowerCase().includes('<!doctype')) {
            editor.executeEdits('fix-doctype', [{
                range: new monaco.Range(1, 1, 1, 1),
                text: '<!DOCTYPE html>\n'
            }]);
            
            this.showToast('Added DOCTYPE declaration', 'success');
            this.refreshErrors();
        }
    },

    fixUnclosedTag(error) {
        // This would be more complex in a real implementation
        this.showToast('Please manually close the HTML tag', 'info');
    },

    /**
     * Show toast notification
     */
    showToast(message, type = 'info') {
        if (typeof showToast === 'function') {
            showToast(message, type);
        } else {
            console.log(`${type.toUpperCase()}: ${message}`);
        }
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        ErrorDisplayService.init();
    });
} else {
    ErrorDisplayService.init();
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ErrorDisplayService;
}