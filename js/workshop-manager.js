/**
 * Workshop Manager - Handles workshop panel, resizing, and collapsing
 */

const WorkshopManager = {
    // Panel states
    workshopCollapsed: false,
    editorCollapsed: false,
    previewCollapsed: false,
    
    // Panel widths
    workshopWidth: 320,
    
    // Current workshop data
    currentComponent: null,
    currentStep: 0,
    totalSteps: 0,
    
    // Resize state
    isResizing: false,
    resizingPanel: null,
    startX: 0,
    startWidth: 0,
    
    /**
     * Initialize workshop manager
     */
    init() {
        this.loadPanelStates();
        this.setupEventListeners();
        this.applyPanelStates();
        
        // Try to restore active workshop on page load
        setTimeout(() => {
            this.restoreWorkshopIfActive();
        }, 500);
    },
    
    /**
     * Restore workshop if there's an active one
     */
    restoreWorkshopIfActive() {
        // Check URL parameters first (takes priority)
        const urlParams = new URLSearchParams(window.location.search);
        const mode = urlParams.get('mode');
        const componentId = urlParams.get('component');
        
        if (mode === 'workshop' && componentId) {
            // Workshop mode from URL, already handled by editor-init.js
            return;
        }
        
        // Check for saved workshop state
        const savedState = this.loadWorkshopState();
        if (savedState && savedState.componentId) {
            console.log('Restoring workshop from saved state:', savedState);
            
            // Load the component
            this.loadComponent(savedState.componentId);
            
            // Restore the step position
            if (savedState.currentStep > 0 && savedState.currentStep < this.totalSteps) {
                this.currentStep = savedState.currentStep;
                this.renderStep();
            }
        }
    },
    
    /**
     * Setup event listeners for collapse/expand and resize
     */
    setupEventListeners() {
        // Workshop/Files tab switching
        const workshopTabBtn = document.getElementById('workshop-tab-btn');
        const filesTabBtn = document.getElementById('files-tab-btn');
        
        if (workshopTabBtn) {
            workshopTabBtn.onclick = () => this.switchTab('workshop');
        }
        
        if (filesTabBtn) {
            filesTabBtn.onclick = () => this.switchTab('files');
        }
        
        // Workshop collapse/expand
        const workshopCollapseBtn = document.getElementById('workshop-collapse-btn');
        const workshopExpandBtn = document.getElementById('workshop-expand-btn');
        
        if (workshopCollapseBtn) {
            workshopCollapseBtn.onclick = () => this.toggleWorkshop();
        }
        
        if (workshopExpandBtn) {
            workshopExpandBtn.onclick = () => this.toggleWorkshop();
        }
        
        // New project button in files tab
        const newProjectBtnSidebar = document.getElementById('new-project-btn-sidebar');
        if (newProjectBtnSidebar) {
            newProjectBtnSidebar.onclick = () => {
                if (typeof showModal === 'function') {
                    showModal('new-project-modal');
                }
            };
        }
        
        // Editor collapse/expand
        const editorCollapseBtn = document.getElementById('editor-collapse-btn');
        const editorExpandBtn = document.getElementById('editor-expand-btn');
        
        if (editorCollapseBtn) {
            editorCollapseBtn.onclick = () => this.toggleEditor();
        }
        
        if (editorExpandBtn) {
            editorExpandBtn.onclick = () => this.toggleEditor();
        }
        
        // Preview collapse/expand
        const previewCollapseBtn = document.getElementById('preview-collapse-btn');
        const previewExpandBtn = document.getElementById('preview-expand-btn');
        
        if (previewCollapseBtn) {
            previewCollapseBtn.onclick = () => this.togglePreview();
        }
        
        if (previewExpandBtn) {
            previewExpandBtn.onclick = () => this.togglePreview();
        }
        
        // Workshop navigation
        const workshopPrevBtn = document.getElementById('workshop-prev-btn');
        const workshopNextBtn = document.getElementById('workshop-next-btn');
        
        if (workshopPrevBtn) {
            workshopPrevBtn.onclick = () => this.previousStep();
        }
        
        if (workshopNextBtn) {
            workshopNextBtn.onclick = () => this.nextStep();
        }
        
        // Resize handles
        this.setupResizeHandles();
    },
    
    /**
     * Switch between Workshop and Files tabs
     */
    switchTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.workshop-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }
        
        // Update tab content
        document.querySelectorAll('.workshop-tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        const activeContent = document.querySelector(`[data-content="${tabName}"]`);
        if (activeContent) {
            activeContent.classList.add('active');
        }
        
        // Save active tab preference
        localStorage.setItem('webforge_active_tab', tabName);
    },
    
    /**
     * Setup resize handles for draggable panel resizing
     */
    setupResizeHandles() {
        const workshopHandle = document.getElementById('workshop-resize-handle');
        const editorHandle = document.getElementById('editor-resize-handle');
        
        if (workshopHandle) {
            workshopHandle.addEventListener('mousedown', (e) => this.startResize(e, 'workshop'));
        }
        
        if (editorHandle) {
            editorHandle.addEventListener('mousedown', (e) => this.startResize(e, 'editor'));
        }
        
        // Global mouse events for resizing
        document.addEventListener('mousemove', (e) => this.handleResize(e));
        document.addEventListener('mouseup', () => this.stopResize());
    },
    
    /**
     * Start resizing a panel
     */
    startResize(e, panel) {
        e.preventDefault();
        this.isResizing = true;
        this.resizingPanel = panel;
        this.startX = e.clientX;
        
        if (panel === 'workshop') {
            const workshopPanel = document.getElementById('workshop-panel');
            this.startWidth = workshopPanel.offsetWidth;
        } else if (panel === 'editor') {
            const editorContainer = document.querySelector('.editor-container');
            this.startWidth = editorContainer.offsetWidth;
        }
        
        document.body.classList.add('resizing');
        
        // Add resizing class to handle
        const handle = e.target;
        handle.classList.add('resizing');
    },
    
    /**
     * Handle panel resizing
     */
    handleResize(e) {
        if (!this.isResizing) return;
        
        const deltaX = e.clientX - this.startX;
        const newWidth = this.startWidth + deltaX;
        
        if (this.resizingPanel === 'workshop') {
            const workshopPanel = document.getElementById('workshop-panel');
            const minWidth = 280;
            const maxWidth = 500;
            
            if (newWidth >= minWidth && newWidth <= maxWidth) {
                workshopPanel.style.width = newWidth + 'px';
                this.workshopWidth = newWidth;
            }
        } else if (this.resizingPanel === 'editor') {
            const editorContainer = document.querySelector('.editor-container');
            const minWidth = 300;
            
            if (newWidth >= minWidth) {
                editorContainer.style.flex = `0 0 ${newWidth}px`;
            }
        }
    },
    
    /**
     * Stop resizing
     */
    stopResize() {
        if (!this.isResizing) return;
        
        this.isResizing = false;
        this.resizingPanel = null;
        document.body.classList.remove('resizing');
        
        // Remove resizing class from all handles
        document.querySelectorAll('.resize-handle').forEach(handle => {
            handle.classList.remove('resizing');
        });
        
        // Save panel states
        this.savePanelStates();
    },
    
    /**
     * Toggle workshop panel
     */
    toggleWorkshop() {
        this.workshopCollapsed = !this.workshopCollapsed;
        
        const workshopPanel = document.getElementById('workshop-panel');
        const workshopTab = document.getElementById('workshop-collapsed-tab');
        const resizeHandle = document.getElementById('workshop-resize-handle');
        
        if (this.workshopCollapsed) {
            workshopPanel.classList.add('collapsed');
            workshopTab.classList.remove('hidden');
            if (resizeHandle) {
                resizeHandle.style.display = 'none';
            }
        } else {
            workshopPanel.classList.remove('collapsed');
            workshopTab.classList.add('hidden');
            if (resizeHandle) {
                resizeHandle.style.display = '';
            }
        }
        
        this.savePanelStates();
    },
    
    /**
     * Toggle editor panel
     */
    toggleEditor() {
        this.editorCollapsed = !this.editorCollapsed;
        
        const editorContainer = document.querySelector('.editor-container');
        const editorCollapseBtn = document.getElementById('editor-collapse-btn');
        const editorCollapsedTab = document.getElementById('editor-collapsed-tab');
        
        if (this.editorCollapsed) {
            editorContainer.classList.add('collapsed');
            if (editorCollapsedTab) {
                editorCollapsedTab.classList.remove('hidden');
            }
        } else {
            editorContainer.classList.remove('collapsed');
            if (editorCollapsedTab) {
                editorCollapsedTab.classList.add('hidden');
            }
        }
        
        this.savePanelStates();
    },
    
    /**
     * Toggle preview panel
     */
    togglePreview() {
        this.previewCollapsed = !this.previewCollapsed;
        
        const previewContainer = document.querySelector('.preview-container');
        const previewCollapseBtn = document.getElementById('preview-collapse-btn');
        const previewCollapsedTab = document.getElementById('preview-collapsed-tab');
        
        if (this.previewCollapsed) {
            previewContainer.classList.add('collapsed');
            if (previewCollapsedTab) {
                previewCollapsedTab.classList.remove('hidden');
            }
        } else {
            previewContainer.classList.remove('collapsed');
            if (previewCollapsedTab) {
                previewCollapsedTab.classList.add('hidden');
            }
        }
        
        this.savePanelStates();
    },
    
    /**
     * Load a component workshop
     */
    loadComponent(componentId) {
        console.log('=== WORKSHOP MANAGER: loadComponent ===');
        console.log('Component ID:', componentId);
        
        // Get component data from ComponentService
        if (typeof ComponentService === 'undefined') {
            console.error('ComponentService not loaded');
            return;
        }
        
        console.log('ComponentService found, getting component...');
        const component = ComponentService.getComponent(componentId);
        
        if (!component) {
            console.error('Component not found:', componentId);
            console.log('Available components:', ComponentService.components.map(c => c.id));
            return;
        }
        
        console.log('Component found:', component.name);
        console.log('Component has workshop:', !!component.workshop);
        console.log('Workshop has steps:', component.workshop?.steps?.length || 0);
        
        if (!component.workshop || !component.workshop.steps) {
            console.error('Component has no workshop data:', componentId);
            return;
        }
        
        // Store component with workshop data
        this.currentComponent = {
            id: component.id,
            name: component.name,
            workshop: component.workshop,
            steps: component.workshop.steps
        };
        
        this.currentStep = 0;
        this.totalSteps = component.workshop.steps.length;
        
        console.log('Workshop loaded successfully!');
        console.log('- Name:', this.currentComponent.name);
        console.log('- Total steps:', this.totalSteps);
        console.log('- First step:', this.currentComponent.steps[0]?.title);
        
        // Save workshop state to localStorage for persistence
        this.saveWorkshopState();
        
        // Show workshop panel if collapsed
        if (this.workshopCollapsed) {
            console.log('Workshop panel is collapsed, expanding...');
            this.toggleWorkshop();
        }
        
        // Render first step
        console.log('Rendering first step...');
        this.renderStep();
    },
    
    /**
     * Save workshop state to localStorage
     */
    saveWorkshopState() {
        if (!this.currentComponent) return;
        
        const workshopState = {
            componentId: this.currentComponent.id,
            componentName: this.currentComponent.name,
            currentStep: this.currentStep,
            totalSteps: this.totalSteps,
            projectId: currentProject ? currentProject.id : null,
            timestamp: Date.now()
        };
        
        localStorage.setItem('webforge-active-workshop', JSON.stringify(workshopState));
        console.log('Workshop state saved:', workshopState);
    },
    
    /**
     * Load workshop state from localStorage
     */
    loadWorkshopState() {
        const saved = localStorage.getItem('webforge-active-workshop');
        if (!saved) return null;
        
        try {
            const state = JSON.parse(saved);
            
            // Check if state is recent (within 24 hours)       
            const hoursSinceLastActive = (Date.now() - state.timestamp) / (1000 * 60 * 60);
            if (hoursSinceLastActive > 24) {
                // State is too old, clear it
                localStorage.removeItem('webforge-active-workshop');
                return null;
            }
            
            return state;
        } catch (e) {
            console.error('Failed to load workshop state:', e);
            return null;
        }
    },
    
    /**
     * Clear workshop state from localStorage
     */
    clearWorkshopState() {
        localStorage.removeItem('webforge-active-workshop');
    },
    
    /**
     * Render current workshop step
     */
    renderStep() {
        if (!this.currentComponent || !this.currentComponent.steps) {
            console.error('No workshop steps to render');
            return;
        }
        
        const step = this.currentComponent.steps[this.currentStep];
        const content = document.getElementById('workshop-step-content');
        
        if (!content) {
            console.error('Workshop step content container not found');
            return;
        }
        
        if (!step) {
            console.error('Step not found:', this.currentStep);
            return;
        }
        
        console.log('Rendering step:', this.currentStep + 1, step.title);
        
        // Render step content
        content.innerHTML = `
            <div class="workshop-step">
                <div class="workshop-step-number">Step ${this.currentStep + 1} of ${this.totalSteps}</div>
                <h2 class="workshop-step-title">${step.title}</h2>
                <p class="workshop-step-description">${step.description}</p>
                
                ${step.instruction ? `
                    <div class="workshop-step-instruction">
                        <div class="workshop-step-instruction-title">What to do:</div>
                        <div class="workshop-step-instruction-text">${step.instruction}</div>
                    </div>
                ` : ''}
                
                ${step.code ? `
                    <div class="workshop-code-block">
                        <div class="workshop-code-block-header">
                            <span class="workshop-code-block-title">${step.codeFile || 'Code'}</span>
                        </div>
                        <pre><code>${this.escapeHtml(step.code)}</code></pre>
                    </div>
                ` : ''}
                
                ${step.tip ? `
                    <div class="workshop-tip">
                        <div class="workshop-tip-icon">
                            <i data-lucide="lightbulb"></i>
                            <span>Tip</span>
                        </div>
                        <div class="workshop-tip-text">${step.tip}</div>
                    </div>
                ` : ''}
                
                ${step.explanation ? `
                    <div class="workshop-explanation">
                        <div class="workshop-explanation-icon">
                            <i data-lucide="info"></i>
                            <span>Why?</span>
                        </div>
                        <div class="workshop-explanation-text">${step.explanation}</div>
                    </div>
                ` : ''}
                
                ${step.warning ? `
                    <div class="workshop-warning">
                        <div class="workshop-warning-icon">
                            <i data-lucide="alert-triangle"></i>
                            <span>Watch Out</span>
                        </div>
                        <div class="workshop-warning-text">${step.warning}</div>
                    </div>
                ` : ''}
            </div>
        `;
        
        // Update navigation
        this.updateNavigation();
        
        // Initialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    },
    
    /**
     * Update workshop navigation buttons
     */
    updateNavigation() {
        const prevBtn = document.getElementById('workshop-prev-btn');
        const nextBtn = document.getElementById('workshop-next-btn');
        const indicator = document.getElementById('workshop-step-indicator');
        
        if (prevBtn) {
            prevBtn.disabled = this.currentStep === 0;
        }
        
        if (nextBtn) {
            nextBtn.disabled = this.currentStep >= this.totalSteps - 1;
            
            if (this.currentStep >= this.totalSteps - 1) {
                nextBtn.innerHTML = '<i data-lucide="check"></i><span>Complete</span>';
            } else {
                nextBtn.innerHTML = '<span>Next</span><i data-lucide="chevron-right"></i>';
            }
            
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }
        
        if (indicator) {
            indicator.textContent = `Step ${this.currentStep + 1} of ${this.totalSteps}`;
        }
    },
    
    /**
     * Go to previous step
     */
    previousStep() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.renderStep();
            this.saveWorkshopState(); // Save state when navigating
        }
    },
    
    /**
     * Go to next step (with validation)
     */
    async nextStep() {
        // Validate current step before proceeding
        if (this.currentStep < this.totalSteps - 1) {
            const isValid = await this.validateCurrentStep();
            
            if (!isValid) {
                // Validation failed, don't proceed
                return;
            }
            
            // Validation passed, go to next step
            this.currentStep++;
            this.renderStep();
            this.saveWorkshopState(); // Save state when navigating
            
            // Show success message
            if (typeof showToast === 'function') {
                showToast('Great job! Moving to next step', 'success');
            }
        } else {
            // Last step, complete workshop
            this.completeWorkshop();
        }
    },
    
    /**
     * Validate current step before proceeding
     */
    async validateCurrentStep() {
        const step = this.currentComponent.steps[this.currentStep];
        
        console.log('=== VALIDATING STEP ===');
        console.log('Current step:', this.currentStep + 1);
        console.log('Step title:', step.title);
        
        // If no validation rules, allow to proceed
        if (!step.validation) {
            console.log('No validation rules, allowing to proceed');
            return true;
        }
        
        // Get current project files
        if (typeof ProjectService === 'undefined' || typeof currentProject === 'undefined') {
            console.error('ProjectService or currentProject not available');
            return true; // Allow to proceed if we can't validate
        }
        
        const project = currentProject;
        if (!project || !project.files) {
            console.error('No project files available for validation');
            return true;
        }
        
        console.log('Project files:', project.files.map(f => f.name));
        
        // Validate using CodeValidator
        if (typeof CodeValidator === 'undefined') {
            console.error('CodeValidator not loaded');
            return true;
        }
        
        // Collect validation rules from all previous steps + current step
        const allValidationRules = {
            required: [],
            forbidden: []
        };
        
        // Add validation rules from all steps up to and including current step
        for (let i = 0; i <= this.currentStep; i++) {
            const stepToValidate = this.currentComponent.steps[i];
            if (stepToValidate.validation) {
                if (stepToValidate.validation.required) {
                    console.log(`Adding ${stepToValidate.validation.required.length} validation rules from step ${i + 1}`);
                    allValidationRules.required.push(...stepToValidate.validation.required);
                }
                if (stepToValidate.validation.forbidden) {
                    allValidationRules.forbidden.push(...stepToValidate.validation.forbidden);
                }
            }
        }
        
        console.log('Total validation rules:', allValidationRules.required.length);
        console.log('Validation rules:', allValidationRules.required.map(r => `${r.type}: ${r.value}`));
        
        // Create a combined step with all validation rules
        const combinedStep = {
            ...step,
            validation: allValidationRules
        };
        
        const result = await CodeValidator.validateCurrentStep(combinedStep, project.files);
        
        console.log('Validation result:', result);
        
        if (!result.valid) {
            console.log('Validation failed!');
            console.log('Errors:', result.errors);
            // Show validation errors
            this.showValidationErrors(result.errors, result.suggestions);
            return false;
        }
        
        console.log('Validation passed!');
        return true;
    },
    
    /**
     * Show validation errors to the user
     */
    showValidationErrors(errors, suggestions) {
        const content = document.getElementById('workshop-step-content');
        if (!content) return;
        
        // Remove any existing validation errors first
        const existingError = content.querySelector('.workshop-validation-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Create error message HTML
        let errorHTML = `
            <div class="workshop-validation-error">
                <div class="validation-error-header">
                    <i data-lucide="alert-circle"></i>
                    <h3>Oops! Let's fix a few things first</h3>
                </div>
                <div class="validation-error-content">
                    <p class="validation-intro">Don't worry! Everyone makes mistakes. Here's what we need to fix:</p>
                    <ul class="validation-error-list">
        `;
        
        errors.forEach(error => {
            const friendlyError = CodeValidator.getFriendlyMessage(error);
            errorHTML += `<li>${friendlyError}</li>`;
        });
        
        errorHTML += `</ul>`;
        
        if (suggestions.length > 0) {
            errorHTML += `
                <div class="validation-suggestions">
                    <h4>
                        <i data-lucide="lightbulb"></i>
                        Here's how to fix it:
                    </h4>
                    <ul class="validation-suggestion-list">
            `;
            
            suggestions.forEach(suggestion => {
                errorHTML += `<li>${suggestion}</li>`;
            });
            
            errorHTML += `
                    </ul>
                </div>
            `;
        }
        
        errorHTML += `
                    <button class="btn btn-primary validation-try-again-btn" onclick="WorkshopManager.hideValidationErrors()">
                        <i data-lucide="refresh-cw"></i>
                        <span>I Fixed It! Try Again</span>
                    </button>
                </div>
            </div>
        `;
        
        // Insert error message at the top of the step content
        const stepContent = content.querySelector('.workshop-step');
        if (stepContent) {
            stepContent.insertAdjacentHTML('afterbegin', errorHTML);
        }
        
        // Initialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        // Scroll to error
        const errorElement = content.querySelector('.workshop-validation-error');
        if (errorElement) {
            errorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },
    
    /**
     * Hide validation errors
     */
    hideValidationErrors() {
        const errorElement = document.querySelector('.workshop-validation-error');
        if (errorElement) {
            errorElement.remove();
        }
    },
    
    /**
     * Complete workshop
     */
    completeWorkshop() {
        if (typeof showToast === 'function') {
            showToast('Great job! You completed the workshop!', 'success', 'Workshop Complete');
        }
        
        // Show completion message
        const content = document.getElementById('workshop-step-content');
        if (content) {
            content.innerHTML = `
                <div class="workshop-welcome">
                    <div class="workshop-welcome-icon">
                        <i data-lucide="trophy"></i>
                    </div>
                    <h3>Workshop Complete!</h3>
                    <p>You've successfully built the ${this.currentComponent.name}. Keep building!</p>
                    <button class="btn btn-primary" onclick="window.location.href='components.html'">
                        <i data-lucide="grid-3x3"></i>
                        <span>Browse More Components</span>
                    </button>
                </div>
            `;
            
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }
        
        // Reset navigation
        const prevBtn = document.getElementById('workshop-prev-btn');
        const nextBtn = document.getElementById('workshop-next-btn');
        
        if (prevBtn) prevBtn.disabled = true;
        if (nextBtn) nextBtn.disabled = true;
        
        // Clear ALL workshop data from localStorage
        this.clearWorkshopState();
        localStorage.removeItem('webforge-workshop-start');
        console.log('Workshop completed - all workshop data cleared');
    },
    
    /**
     * Copy code to clipboard
     */
    copyCode(button) {
        const codeBlock = button.closest('.workshop-code-block');
        const code = codeBlock.querySelector('code').textContent;
        
        navigator.clipboard.writeText(code).then(() => {
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = 'Copy';
            }, 2000);
            
            if (typeof showToast === 'function') {
                showToast('Code copied to clipboard', 'success');
            }
        }).catch(err => {
            console.error('Failed to copy:', err);
            if (typeof showToast === 'function') {
                showToast('Failed to copy code', 'error');
            }
        });
    },
    
    /**
     * Escape HTML for safe rendering
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },
    
    /**
     * Save panel states to localStorage
     */
    savePanelStates() {
        const states = {
            workshopCollapsed: this.workshopCollapsed,
            editorCollapsed: this.editorCollapsed,
            previewCollapsed: this.previewCollapsed,
            workshopWidth: this.workshopWidth,
            activeTab: document.querySelector('.workshop-tab.active')?.dataset.tab || 'workshop'
        };
        
        localStorage.setItem('webforge_panel_states', JSON.stringify(states));
    },
    
    /**
     * Load panel states from localStorage
     */
    loadPanelStates() {
        const saved = localStorage.getItem('webforge_panel_states');
        if (saved) {
            try {
                const states = JSON.parse(saved);
                this.workshopCollapsed = states.workshopCollapsed || false;
                this.editorCollapsed = states.editorCollapsed || false;
                this.previewCollapsed = states.previewCollapsed || false;
                this.workshopWidth = states.workshopWidth || 320;
                
                // Restore active tab
                if (states.activeTab) {
                    setTimeout(() => this.switchTab(states.activeTab), 100);
                }
            } catch (e) {
                console.error('Failed to load panel states:', e);
            }
        }
    },
    
    /**
     * Apply saved panel states to UI
     */
    applyPanelStates() {
        // Apply workshop state
        const workshopPanel = document.getElementById('workshop-panel');
        const workshopTab = document.getElementById('workshop-collapsed-tab');
        const resizeHandle = document.getElementById('workshop-resize-handle');
        
        if (workshopPanel) {
            workshopPanel.style.width = this.workshopWidth + 'px';
            
            if (this.workshopCollapsed) {
                workshopPanel.classList.add('collapsed');
                if (workshopTab) workshopTab.classList.remove('hidden');
                if (resizeHandle) resizeHandle.style.display = 'none';
            }
        }
        
        // Apply editor state
        const editorContainer = document.querySelector('.editor-container');
        const editorCollapsedTab = document.getElementById('editor-collapsed-tab');
        
        if (this.editorCollapsed && editorContainer) {
            editorContainer.classList.add('collapsed');
            if (editorCollapsedTab) {
                editorCollapsedTab.classList.remove('hidden');
            }
        }
        
        // Apply preview state
        const previewContainer = document.querySelector('.preview-container');
        const previewCollapsedTab = document.getElementById('preview-collapsed-tab');
        
        if (this.previewCollapsed && previewContainer) {
            previewContainer.classList.add('collapsed');
            if (previewCollapsedTab) {
                previewCollapsedTab.classList.remove('hidden');
            }
        }
        
        // Initialize icons after applying states
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
};

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        WorkshopManager.init();
    });
} else {
    WorkshopManager.init();
}
