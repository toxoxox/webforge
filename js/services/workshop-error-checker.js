/**
 * Workshop Error Checker - Integrates beginner-friendly error checking with the workshop panel
 * 
 * Enhances the existing workshop validation system with educational error messages
 * and displays errors within the workshop panel instead of a separate floating panel.
 */

const WorkshopErrorChecker = {
    // Configuration
    config: {
        beginnerMode: true,
        showInWorkshopPanel: true,
        maxErrorsToShow: 5
    },

    // Current state
    currentErrors: [],
    isActive: false,

    /**
     * Initialize workshop error checking
     */
    init() {
        // Wait for workshop manager and all dependencies to be fully loaded and initialized
        this.waitForWorkshopReady().then(() => {
            this.integrateWithWorkshop();
        });
    },

    /**
     * Wait for workshop system to be fully ready
     */
    async waitForWorkshopReady() {
        return new Promise((resolve) => {
            const checkReady = () => {
                // Check if all required services are available
                const requiredServices = [
                    'WorkshopManager',
                    'currentProject',
                    'editor'
                ];
                
                const allReady = requiredServices.every(service => 
                    typeof window[service] !== 'undefined' && window[service] !== null
                );
                
                // Also check if WorkshopManager has finished any state restoration
                const workshopReady = WorkshopManager && 
                                   typeof WorkshopManager.integrateWithWorkshop === 'function';
                
                if (allReady && workshopReady) {
                    // Wait a bit more to ensure workshop state restoration is complete
                    setTimeout(resolve, 1000);
                } else {
                    setTimeout(checkReady, 200);
                }
            };
            
            checkReady();
        });
    },

    /**
     * Integrate with existing workshop system
     */
    integrateWithWorkshop() {
        // Only integrate if WorkshopManager is ready and not in the middle of restoration
        if (!WorkshopManager || !WorkshopManager.showValidationErrors) {
            console.log('WorkshopManager not ready, retrying...');
            setTimeout(() => this.integrateWithWorkshop(), 500);
            return;
        }

        // Store original method
        const originalShowValidationErrors = WorkshopManager.showValidationErrors;
        
        // Override with enhanced version
        WorkshopManager.showValidationErrors = (errors, suggestions) => {
            // Use our enhanced error display
            this.showEnhancedValidationErrors(errors, suggestions);
        };

        // Listen for workshop state changes (but don't interfere with restoration)
        document.addEventListener('workshop:started', () => {
            this.isActive = true;
        });

        document.addEventListener('workshop:completed', () => {
            this.isActive = false;
            this.clearErrors();
        });

        // Listen for workshop restoration completion
        document.addEventListener('workshop:restored', () => {
            console.log('Workshop state restored, error checker ready');
        });

        console.log('Workshop Error Checker integrated successfully');
    },

    /**
     * Check for workshop-specific errors
     */
    async checkWorkshopErrors(projectFiles, currentStep) {
        const errors = [];
        const suggestions = [];

        // 1. Check step-specific requirements
        const stepErrors = this.checkStepRequirements(projectFiles, currentStep);
        errors.push(...stepErrors);

        // 2. Check for common beginner mistakes
        const beginnerErrors = this.checkBeginnerMistakes(projectFiles, currentStep);
        errors.push(...beginnerErrors);

        // 3. Check HTML structure
        const htmlErrors = this.checkHTMLStructure(projectFiles);
        errors.push(...htmlErrors);

        // 4. Check CSS issues
        const cssErrors = this.checkCSSIssues(projectFiles);
        errors.push(...cssErrors);

        // 5. Check JavaScript safety
        const jsErrors = this.checkJavaScriptSafety(projectFiles);
        errors.push(...jsErrors);

        // Generate suggestions based on errors
        const generatedSuggestions = this.generateSuggestions(errors, currentStep);
        suggestions.push(...generatedSuggestions);

        return {
            errors: errors.slice(0, this.config.maxErrorsToShow),
            suggestions: suggestions,
            totalFound: errors.length
        };
    },

    /**
     * Check step-specific requirements
     */
    checkStepRequirements(projectFiles, step) {
        const errors = [];
        
        if (!step.validation || !step.validation.required) {
            return errors;
        }

        // Check each validation rule
        step.validation.required.forEach(rule => {
            const file = projectFiles.find(f => f.name === rule.file);
            if (!file) {
                errors.push({
                    type: 'missing-file',
                    title: `Missing ${rule.file}`,
                    message: `This step requires a file called ${rule.file}`,
                    explanation: `The workshop step expects you to have a ${rule.file} file to work with.`,
                    fix: `Create a new ${rule.file} file in your project`,
                    beginnerTip: `Each workshop step builds on previous work - make sure you have all the required files!`
                });
                return;
            }

            // Check specific rule types
            switch (rule.type) {
                case 'element':
                    if (!file.content.includes(`<${rule.value}`)) {
                        errors.push({
                            type: 'missing-element',
                            title: `Missing ${rule.value} Element`,
                            message: `Your ${rule.file} should contain a <${rule.value}> element`,
                            explanation: `This step requires you to add a ${rule.value} element to structure your content properly.`,
                            fix: `Add <${rule.value}></${rule.value}> to your ${rule.file}`,
                            beginnerTip: `HTML elements are like building blocks - each one has a specific purpose!`
                        });
                    }
                    break;

                case 'class':
                    if (!file.content.includes(`class="${rule.value}"`)) {
                        errors.push({
                            type: 'missing-class',
                            title: `Missing CSS Class`,
                            message: `Your ${rule.file} should use the class "${rule.value}"`,
                            explanation: `CSS classes help you apply styles to specific elements.`,
                            fix: `Add class="${rule.value}" to an element in your ${rule.file}`,
                            beginnerTip: `Classes are like labels that help CSS find the right elements to style!`
                        });
                    }
                    break;

                case 'css-property':
                    if (!file.content.includes(`${rule.property}:`)) {
                        errors.push({
                            type: 'missing-css-property',
                            title: `Missing CSS Property`,
                            message: `Your ${rule.file} should use the ${rule.property} property`,
                            explanation: `This CSS property is needed to achieve the visual effect for this step.`,
                            fix: `Add ${rule.property}: ${rule.value || 'value'} to your CSS`,
                            beginnerTip: `CSS properties are like instructions that tell the browser how to style elements!`
                        });
                    }
                    break;
            }
        });

        return errors;
    },

    /**
     * Check for common beginner mistakes
     */
    checkBeginnerMistakes(projectFiles, step) {
        const errors = [];

        projectFiles.forEach(file => {
            // Check for CSS in HTML file
            if (file.type === 'html' && file.content.includes('color:') && file.content.includes('{')) {
                errors.push({
                    type: 'css-in-html',
                    title: 'CSS Code in HTML File',
                    message: 'It looks like you have CSS styling in your HTML file',
                    explanation: 'CSS should go in a separate .css file or inside <style> tags for better organization.',
                    fix: 'Move your CSS to the styles.css file or wrap it in <style> tags',
                    beginnerTip: 'Keep HTML and CSS separate - HTML for structure, CSS for styling!'
                });
            }

            // Check for HTML in CSS file
            if (file.type === 'css' && file.content.includes('<') && file.content.includes('>')) {
                errors.push({
                    type: 'html-in-css',
                    title: 'HTML Code in CSS File',
                    message: 'It looks like you have HTML code in your CSS file',
                    explanation: 'CSS files should only contain styling rules, not HTML elements.',
                    fix: 'Move your HTML code to the index.html file',
                    beginnerTip: 'Remember: HTML for content, CSS for styling - each file has its own job!'
                });
            }

            // Check for unclosed tags
            if (file.type === 'html') {
                const openTags = (file.content.match(/<[^/][^>]*>/g) || []).length;
                const closeTags = (file.content.match(/<\/[^>]*>/g) || []).length;
                const selfClosingTags = (file.content.match(/<[^>]*\/>/g) || []).length;
                
                if (openTags - selfClosingTags > closeTags) {
                    errors.push({
                        type: 'unclosed-tags',
                        title: 'Unclosed HTML Tags',
                        message: 'Some of your HTML tags are not properly closed',
                        explanation: 'Every opening HTML tag needs a matching closing tag (except self-closing tags like <img>).',
                        fix: 'Check your HTML and add closing tags where needed',
                        beginnerTip: 'HTML tags are like parentheses - every opening tag needs a closing tag!'
                    });
                }
            }

            // Check for missing semicolons in CSS
            if (file.type === 'css') {
                const lines = file.content.split('\n');
                lines.forEach((line, index) => {
                    const trimmed = line.trim();
                    if (trimmed.includes(':') && !trimmed.endsWith(';') && !trimmed.endsWith('{') && !trimmed.endsWith('}') && trimmed !== '') {
                        errors.push({
                            type: 'missing-semicolon',
                            title: 'Missing Semicolon',
                            message: `Line ${index + 1} in ${file.name} is missing a semicolon`,
                            explanation: 'CSS properties should end with a semicolon to separate them from other properties.',
                            fix: 'Add a semicolon (;) at the end of the line',
                            beginnerTip: 'Think of semicolons as periods at the end of CSS sentences!'
                        });
                        return; // Only show first missing semicolon to avoid overwhelming
                    }
                });
            }
        });

        return errors;
    },

    /**
     * Check HTML structure issues
     */
    checkHTMLStructure(projectFiles) {
        const errors = [];
        const htmlFile = projectFiles.find(f => f.type === 'html');
        
        if (!htmlFile) return errors;

        const content = htmlFile.content.toLowerCase();

        // Check for DOCTYPE
        if (!content.includes('<!doctype html>')) {
            errors.push({
                type: 'missing-doctype',
                title: 'Missing DOCTYPE Declaration',
                message: 'Your HTML file should start with <!DOCTYPE html>',
                explanation: 'DOCTYPE tells the browser what version of HTML you\'re using.',
                fix: 'Add <!DOCTYPE html> as the very first line of your HTML file',
                beginnerTip: 'Think of DOCTYPE as introducing yourself to the browser!'
            });
        }

        // Check for basic structure
        if (!content.includes('<html')) {
            errors.push({
                type: 'missing-html-tag',
                title: 'Missing HTML Tag',
                message: 'Your HTML file needs an <html> tag',
                explanation: 'The <html> tag wraps all content on your page.',
                fix: 'Add <html> and </html> tags around your content',
                beginnerTip: 'The <html> tag is like a container that holds your entire webpage!'
            });
        }

        return errors;
    },

    /**
     * Check CSS issues
     */
    checkCSSIssues(projectFiles) {
        const errors = [];
        const cssFile = projectFiles.find(f => f.type === 'css');
        const htmlFile = projectFiles.find(f => f.type === 'html');
        
        if (!cssFile || !htmlFile) return errors;

        // Check for selectors that don't match HTML
        const selectors = cssFile.content.match(/\.[a-zA-Z][a-zA-Z0-9-_]*/g) || [];
        selectors.forEach(selector => {
            const className = selector.substring(1);
            if (!htmlFile.content.includes(`class="${className}"`)) {
                errors.push({
                    type: 'orphaned-selector',
                    title: 'CSS Class Not Found',
                    message: `The CSS class "${className}" doesn't match any HTML elements`,
                    explanation: 'CSS selectors need to match HTML elements to apply styles.',
                    fix: `Add class="${className}" to an HTML element, or remove the CSS rule`,
                    beginnerTip: 'CSS is like giving instructions - make sure the element you\'re talking to exists!'
                });
            }
        });

        return errors;
    },

    /**
     * Check JavaScript safety
     */
    checkJavaScriptSafety(projectFiles) {
        const errors = [];
        const jsFile = projectFiles.find(f => f.type === 'javascript');
        const htmlFile = projectFiles.find(f => f.type === 'html');
        
        if (!jsFile || !htmlFile) return errors;

        // Check for getElementById calls with non-existent elements
        const getElementCalls = jsFile.content.match(/getElementById\(['"]([^'"]+)['"]\)/g) || [];
        getElementCalls.forEach(call => {
            const idMatch = call.match(/['"]([^'"]+)['"]/);
            if (idMatch) {
                const id = idMatch[1];
                if (!htmlFile.content.includes(`id="${id}"`)) {
                    errors.push({
                        type: 'missing-element-id',
                        title: 'Element Not Found',
                        message: `JavaScript is looking for an element with id="${id}" but it doesn't exist`,
                        explanation: 'JavaScript can\'t find the HTML element you\'re trying to use.',
                        fix: `Add id="${id}" to an HTML element, or change the JavaScript to use a different id`,
                        beginnerTip: 'Make sure the HTML element exists before trying to use it in JavaScript!'
                    });
                }
            }
        });

        return errors;
    },

    /**
     * Generate helpful suggestions based on errors
     */
    generateSuggestions(errors, step) {
        const suggestions = [];

        if (errors.length === 0) {
            suggestions.push('Great job! Your code looks good for this step.');
            return suggestions;
        }

        // Group errors by type for better suggestions
        const errorTypes = [...new Set(errors.map(e => e.type))];

        if (errorTypes.includes('missing-element')) {
            suggestions.push('Try adding the required HTML elements one at a time');
            suggestions.push('Use the code snippet provided in the workshop step as a guide');
        }

        if (errorTypes.includes('missing-class')) {
            suggestions.push('Remember to add class attributes to your HTML elements');
            suggestions.push('Classes help CSS find the right elements to style');
        }

        if (errorTypes.includes('css-in-html') || errorTypes.includes('html-in-css')) {
            suggestions.push('Keep your HTML and CSS in separate files for better organization');
            suggestions.push('HTML goes in index.html, CSS goes in styles.css');
        }

        if (errorTypes.includes('unclosed-tags')) {
            suggestions.push('Check that every opening tag has a matching closing tag');
            suggestions.push('Use proper indentation to make it easier to spot unclosed tags');
        }

        if (errorTypes.includes('missing-semicolon')) {
            suggestions.push('Add semicolons at the end of each CSS property');
            suggestions.push('Semicolons help separate CSS properties from each other');
        }

        return suggestions;
    },

    /**
     * Show enhanced validation errors in workshop panel
     */
    showEnhancedValidationErrors(errors, suggestions) {
        const content = document.querySelector('.workshop-content');
        if (!content) return;

        // Remove existing error display
        const existingError = content.querySelector('.workshop-validation-error');
        if (existingError) {
            existingError.remove();
        }

        // Create enhanced error display
        const errorContainer = document.createElement('div');
        errorContainer.className = 'workshop-validation-error';
        
        errorContainer.innerHTML = `
            <div class="validation-error-header">
                <i data-lucide="alert-triangle"></i>
                <h3>Let's Fix These Issues</h3>
            </div>
            <div class="validation-error-content">
                <div class="validation-intro">
                    ${this.config.beginnerMode ? 
                        'Don\'t worry! These are common issues that every developer encounters. Let\'s work through them together:' :
                        'Please fix the following issues before continuing:'
                    }
                </div>
                <ul class="validation-error-list">
                    ${errors.map(error => `
                        <li>
                            <strong>${error.title || error}</strong>
                            ${error.message ? `<br><span style="opacity: 0.9;">${error.message}</span>` : ''}
                            ${error.explanation && this.config.beginnerMode ? `<br><span style="opacity: 0.8; font-style: italic;"><i data-lucide="lightbulb" style="width: 14px; height: 14px; display: inline; margin-right: 4px;"></i>${error.explanation}</span>` : ''}
                            ${error.fix ? `<br><span style="color: #4CAF50;"><i data-lucide="wrench" style="width: 14px; height: 14px; display: inline; margin-right: 4px;"></i>${error.fix}</span>` : ''}
                            ${error.beginnerTip && this.config.beginnerMode ? `<br><span style="color: #2196F3;"><i data-lucide="target" style="width: 14px; height: 14px; display: inline; margin-right: 4px;"></i>${error.beginnerTip}</span>` : ''}
                        </li>
                    `).join('')}
                </ul>
                ${suggestions && suggestions.length > 0 ? `
                    <div class="validation-suggestions">
                        <h4><i data-lucide="lightbulb"></i>Helpful Tips</h4>
                        <ul class="validation-suggestion-list">
                            ${suggestions.map(suggestion => `<li>${suggestion}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                <button class="validation-try-again-btn" onclick="WorkshopManager.validateCurrentStep()">
                    <i data-lucide="refresh-cw"></i>
                    Check Again
                </button>
            </div>
        `;

        // Insert at the top of workshop content
        content.insertBefore(errorContainer, content.firstChild);

        // Initialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Store current errors
        this.currentErrors = errors;
    },

    /**
     * Show workshop-specific errors (called by validation system)
     */
    async showWorkshopErrors(errors, suggestions) {
        // Run enhanced error checking when validation fails
        if (!this.isActive || !WorkshopManager.currentComponent || !currentProject) {
            return;
        }

        try {
            // Get current step
            const currentStep = WorkshopManager.currentComponent.steps[WorkshopManager.currentStep];
            if (!currentStep) return;

            // Run enhanced error checking
            const errorResult = await this.checkWorkshopErrors(currentProject.files, currentStep);
            
            // Combine original errors with enhanced errors
            const allErrors = [...errors, ...errorResult.errors];
            const allSuggestions = [...(suggestions || []), ...errorResult.suggestions];
            
            // Show enhanced error display
            this.showEnhancedValidationErrors(allErrors, allSuggestions);

        } catch (error) {
            console.error('Workshop error checking failed:', error);
            // Fallback to original error display
            this.showEnhancedValidationErrors(errors, suggestions);
        }
    },

    /**
     * Clear workshop errors
     */
    clearWorkshopErrors() {
        const content = document.querySelector('.workshop-content');
        if (!content) return;

        const existingError = content.querySelector('.workshop-validation-error');
        if (existingError) {
            existingError.remove();
        }

        this.currentErrors = [];
    },

    /**
     * Clear all errors
     */
    clearErrors() {
        this.clearWorkshopErrors();
    },

    /**
     * Toggle beginner mode
     */
    toggleBeginnerMode() {
        this.config.beginnerMode = !this.config.beginnerMode;
        return this.config.beginnerMode;
    }
};

// Initialize after all other systems are ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Wait for other systems to initialize first
        setTimeout(() => {
            WorkshopErrorChecker.init();
        }, 2000);
    });
} else {
    // Page already loaded, wait a bit then initialize
    setTimeout(() => {
        WorkshopErrorChecker.init();
    }, 2000);
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WorkshopErrorChecker;
}