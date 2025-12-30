/**
 * Code Validator Service - Validates user code against workshop requirements
 */

const CodeValidator = {
    /**
     * Validate code for a specific workshop step
     * @param {string} code - The user's code
     * @param {object} step - The workshop step with validation rules
     * @param {string} fileType - The file type (html, css, js)
     * @returns {object} - { valid: boolean, errors: [], suggestions: [] }
     */
    validateStep(code, step, fileType) {
        if (!step.validation) {
            // No validation rules, allow to proceed
            return { valid: true, errors: [], suggestions: [] };
        }

        const validation = step.validation;
        const errors = [];
        const suggestions = [];

        // Check required elements/patterns
        if (validation.required) {
            validation.required.forEach(requirement => {
                const found = this.checkRequirement(code, requirement, fileType);
                if (!found.valid) {
                    errors.push(found.error);
                    if (found.suggestion) {
                        suggestions.push(found.suggestion);
                    }
                }
            });
        }

        // Check forbidden elements/patterns
        if (validation.forbidden) {
            validation.forbidden.forEach(forbidden => {
                const found = this.checkForbidden(code, forbidden, fileType);
                if (!found.valid) {
                    errors.push(found.error);
                    if (found.suggestion) {
                        suggestions.push(found.suggestion);
                    }
                }
            });
        }

        // Check custom validation function
        if (validation.custom && typeof validation.custom === 'function') {
            const customResult = validation.custom(code, fileType);
            if (!customResult.valid) {
                errors.push(...customResult.errors);
                suggestions.push(...customResult.suggestions);
            }
        }

        return {
            valid: errors.length === 0,
            errors,
            suggestions
        };
    },

    /**
     * Check if required element/pattern exists in code
     */
    checkRequirement(code, requirement, fileType) {
        const { type, value, message, hint } = requirement;

        switch (type) {
            case 'tag':
                return this.checkTag(code, value, message, hint);
            case 'class':
                return this.checkClass(code, value, message, hint);
            case 'id':
                return this.checkId(code, value, message, hint);
            case 'attribute':
                return this.checkAttribute(code, value, message, hint);
            case 'property':
                return this.checkCSSProperty(code, value, message, hint);
            case 'selector':
                return this.checkCSSSelector(code, value, message, hint);
            case 'text':
                return this.checkText(code, value, message, hint);
            case 'pattern':
                return this.checkPattern(code, value, message, hint);
            default:
                return { valid: true };
        }
    },

    /**
     * Check if forbidden element/pattern exists in code
     */
    checkForbidden(code, forbidden, fileType) {
        const { type, value, message, hint } = forbidden;
        
        // Invert the logic - if found, it's invalid
        const result = this.checkRequirement(code, { type, value, message: '', hint: '' }, fileType);
        
        if (result.valid) {
            // Found the forbidden element
            return {
                valid: false,
                error: message || `Please don't use ${value}`,
                suggestion: hint
            };
        }
        
        return { valid: true };
    },

    /**
     * Check for HTML tag
     */
    checkTag(code, tagName, message, hint) {
        const regex = new RegExp(`<${tagName}[\\s>]`, 'i');
        const found = regex.test(code);

        if (!found) {
            return {
                valid: false,
                error: message || `Missing <${tagName}> tag`,
                suggestion: hint || `Add a <${tagName}> tag to your HTML`
            };
        }

        return { valid: true };
    },

    /**
     * Check for CSS class
     */
    checkClass(code, className, message, hint) {
        const regex = new RegExp(`class=["'][^"']*${className}[^"']*["']`, 'i');
        const found = regex.test(code);

        if (!found) {
            return {
                valid: false,
                error: message || `Missing class="${className}"`,
                suggestion: hint || `Add class="${className}" to an element`
            };
        }

        return { valid: true };
    },

    /**
     * Check for HTML id
     */
    checkId(code, idName, message, hint) {
        const regex = new RegExp(`id=["']${idName}["']`, 'i');
        const found = regex.test(code);

        if (!found) {
            return {
                valid: false,
                error: message || `Missing id="${idName}"`,
                suggestion: hint || `Add id="${idName}" to an element`
            };
        }

        return { valid: true };
    },

    /**
     * Check for HTML attribute
     */
    checkAttribute(code, attrName, message, hint) {
        const regex = new RegExp(`${attrName}=`, 'i');
        const found = regex.test(code);

        if (!found) {
            return {
                valid: false,
                error: message || `Missing ${attrName} attribute`,
                suggestion: hint || `Add the ${attrName} attribute to an element`
            };
        }

        return { valid: true };
    },

    /**
     * Check for CSS property
     */
    checkCSSProperty(code, property, message, hint) {
        const regex = new RegExp(`${property}\\s*:`, 'i');
        const found = regex.test(code);

        if (!found) {
            return {
                valid: false,
                error: message || `Missing CSS property: ${property}`,
                suggestion: hint || `Add ${property}: value; to your CSS`
            };
        }

        return { valid: true };
    },

    /**
     * Check for CSS selector
     */
    checkCSSSelector(code, selector, message, hint) {
        const regex = new RegExp(`${selector.replace('.', '\\.').replace('#', '\\#')}\\s*{`, 'i');
        const found = regex.test(code);

        if (!found) {
            return {
                valid: false,
                error: message || `Missing CSS selector: ${selector}`,
                suggestion: hint || `Add ${selector} { } to your CSS`
            };
        }

        return { valid: true };
    },

    /**
     * Check for specific text content
     */
    checkText(code, text, message, hint) {
        const found = code.includes(text);

        if (!found) {
            return {
                valid: false,
                error: message || `Missing text: "${text}"`,
                suggestion: hint || `Add "${text}" to your code`
            };
        }

        return { valid: true };
    },

    /**
     * Check for regex pattern
     */
    checkPattern(code, pattern, message, hint) {
        const regex = new RegExp(pattern, 'i');
        const found = regex.test(code);

        if (!found) {
            return {
                valid: false,
                error: message || `Code doesn't match the required pattern`,
                suggestion: hint || `Make sure your code follows the step instructions`
            };
        }

        return { valid: true };
    },

    /**
     * Get friendly error message for beginners
     */
    getFriendlyMessage(error) {
        // Convert technical errors to kid-friendly messages
        const friendlyMessages = {
            'Missing <nav> tag': 'Oops! We need a <nav> tag. That\'s like making a sign that says "This is a menu!"',
            'Missing class="navbar"': 'Don\'t forget to add class="navbar" - it\'s like giving your menu a name!',
            'Missing CSS property: display': 'We need to add display in our CSS - it tells the computer how to show things!',
            'Missing CSS selector: .navbar': 'We need to style .navbar in CSS - that\'s how we make it look pretty!'
        };

        return friendlyMessages[error] || error;
    },

    /**
     * Validate all files for current step
     */
    async validateCurrentStep(step, projectFiles) {
        console.log('=== CODE VALIDATOR ===');
        console.log('Validating step with', step.validation?.required?.length || 0, 'requirements');
        
        const results = {
            html: { valid: true, errors: [], suggestions: [] },
            css: { valid: true, errors: [], suggestions: [] },
            js: { valid: true, errors: [], suggestions: [] }
        };

        // Find the files to validate
        const htmlFile = projectFiles.find(f => f.name === 'index.html');
        const cssFile = projectFiles.find(f => f.name === 'styles.css');
        const jsFile = projectFiles.find(f => f.name === 'script.js');

        console.log('Files found:', {
            html: !!htmlFile,
            css: !!cssFile,
            js: !!jsFile
        });

        // Split validation rules by file type
        if (step.validation && step.validation.required) {
            const htmlRequirements = step.validation.required.filter(r => 
                ['tag', 'class', 'id', 'attribute'].includes(r.type)
            );
            const cssRequirements = step.validation.required.filter(r => 
                ['property', 'selector'].includes(r.type)
            );
            const jsRequirements = step.validation.required.filter(r => 
                r.type === 'pattern' && step.codeFile === 'script.js'
            );

            console.log('Requirements by type:', {
                html: htmlRequirements.length,
                css: cssRequirements.length,
                js: jsRequirements.length
            });

            // Validate HTML if there are HTML requirements
            if (htmlRequirements.length > 0 && htmlFile) {
                console.log('Validating HTML with', htmlRequirements.length, 'requirements');
                const htmlStep = {
                    ...step,
                    validation: {
                        required: htmlRequirements,
                        forbidden: step.validation.forbidden?.filter(f => 
                            ['tag', 'class', 'id', 'attribute'].includes(f.type)
                        ) || []
                    }
                };
                results.html = this.validateStep(htmlFile.content, htmlStep, 'html');
                console.log('HTML validation result:', results.html);
            }

            // Validate CSS if there are CSS requirements
            if (cssRequirements.length > 0 && cssFile) {
                console.log('Validating CSS with', cssRequirements.length, 'requirements');
                console.log('CSS content length:', cssFile.content.length);
                console.log('CSS content preview:', cssFile.content.substring(0, 200));
                const cssStep = {
                    ...step,
                    validation: {
                        required: cssRequirements,
                        forbidden: step.validation.forbidden?.filter(f => 
                            ['property', 'selector'].includes(f.type)
                        ) || []
                    }
                };
                results.css = this.validateStep(cssFile.content, cssStep, 'css');
                console.log('CSS validation result:', results.css);
            }

            // Validate JS if there are JS requirements
            if (jsRequirements.length > 0 && jsFile) {
                console.log('Validating JS with', jsRequirements.length, 'requirements');
                const jsStep = {
                    ...step,
                    validation: {
                        required: jsRequirements,
                        forbidden: step.validation.forbidden?.filter(f => 
                            f.type === 'pattern'
                        ) || []
                    }
                };
                results.js = this.validateStep(jsFile.content, jsStep, 'js');
                console.log('JS validation result:', results.js);
            }
        }

        // Combine results
        const allValid = results.html.valid && results.css.valid && results.js.valid;
        const allErrors = [...results.html.errors, ...results.css.errors, ...results.js.errors];
        const allSuggestions = [...results.html.suggestions, ...results.css.suggestions, ...results.js.suggestions];

        console.log('Final validation result:', {
            valid: allValid,
            errorCount: allErrors.length,
            errors: allErrors
        });

        return {
            valid: allValid,
            errors: allErrors,
            suggestions: allSuggestions,
            details: results
        };
    }
};
