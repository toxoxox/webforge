/**
 * Error Checker Service - Beginner-friendly error detection and guidance
 * 
 * Detects, predicts, and explains common beginner mistakes in HTML, CSS, and JavaScript
 * with clear, educational feedback focused on learning rather than just fixing.
 */

const ErrorCheckerService = {
    // Configuration
    config: {
        beginnerMode: true,
        maxErrorsToShow: 5,
        enablePredictiveChecks: true,
        enableStructuralValidation: true,
        enableComponentIntegrity: true
    },

    // Error categories and their priorities
    errorCategories: {
        CRITICAL: { priority: 1, color: '#e74c3c', icon: 'x-circle' },
        STRUCTURAL: { priority: 2, color: '#e67e22', icon: 'alert-triangle' },
        SYNTAX: { priority: 3, color: '#f39c12', icon: 'alert-circle' },
        STYLE: { priority: 4, color: '#3498db', icon: 'info' },
        SUGGESTION: { priority: 5, color: '#27ae60', icon: 'lightbulb' }
    },

    // Required components for different website types
    requiredComponents: {
        portfolio: ['header', 'nav', 'main', 'section', 'footer'],
        blog: ['header', 'nav', 'main', 'article', 'aside', 'footer'],
        business: ['header', 'nav', 'main', 'section', 'footer'],
        landing: ['header', 'main', 'section', 'footer']
    },

    // Common beginner mistakes patterns
    commonMistakes: {
        html: [
            {
                pattern: /<div class="nav">/gi,
                issue: 'Using div instead of semantic nav element',
                suggestion: 'Use <nav> instead of <div class="nav"> for better accessibility',
                fix: 'Replace <div class="nav"> with <nav>'
            },
            {
                pattern: /<div class="header">/gi,
                issue: 'Using div instead of semantic header element',
                suggestion: 'Use <header> instead of <div class="header"> for better structure',
                fix: 'Replace <div class="header"> with <header>'
            },
            {
                pattern: /<h1>.*<h1>/gi,
                issue: 'Multiple H1 tags found',
                suggestion: 'Use only one H1 per page for proper heading hierarchy',
                fix: 'Change additional H1 tags to H2, H3, etc.'
            }
        ],
        css: [
            {
                pattern: /\.nav\s*{[^}]*}/gi,
                issue: 'Styling navigation with class instead of element',
                suggestion: 'Consider using nav { } instead of .nav { } for semantic styling',
                fix: 'Use element selectors for semantic HTML elements'
            },
            {
                pattern: /position:\s*absolute[^;]*;/gi,
                issue: 'Using absolute positioning',
                suggestion: 'Absolute positioning can break layouts. Consider flexbox or grid instead',
                fix: 'Try display: flex or display: grid for better layout control'
            }
        ],
        javascript: [
            {
                pattern: /document\.getElementById\(['"]([^'"]+)['"]\)/gi,
                issue: 'Targeting element that might not exist',
                suggestion: 'Always check if element exists before using it',
                fix: 'Add null check: const element = document.getElementById("id"); if (element) { ... }'
            }
        ]
    },

    /**
     * Main error checking function
     */
    async checkForErrors(projectFiles, currentFile = null) {
        const errors = [];
        
        try {
            // 1. Structural HTML Error Detection
            if (this.config.enableStructuralValidation) {
                const structuralErrors = await this.checkStructuralErrors(projectFiles);
                errors.push(...structuralErrors);
            }

            // 2. Component Integrity Checking
            if (this.config.enableComponentIntegrity) {
                const componentErrors = await this.checkComponentIntegrity(projectFiles);
                errors.push(...componentErrors);
            }

            // 3. Syntax and Common Mistakes
            const syntaxErrors = await this.checkSyntaxErrors(projectFiles);
            errors.push(...syntaxErrors);

            // 4. CSS Error Guidance
            const cssErrors = await this.checkCSSErrors(projectFiles);
            errors.push(...cssErrors);

            // 5. JavaScript DOM Safety Checks
            const jsErrors = await this.checkJavaScriptErrors(projectFiles);
            errors.push(...jsErrors);

            // 6. Beginner Mistake Prediction
            if (this.config.enablePredictiveChecks) {
                const predictiveErrors = await this.predictBeginnerMistakes(projectFiles, currentFile);
                errors.push(...predictiveErrors);
            }

            // Sort by priority and limit results
            const sortedErrors = this.prioritizeErrors(errors);
            const limitedErrors = sortedErrors.slice(0, this.config.maxErrorsToShow);

            return {
                errors: limitedErrors,
                totalFound: errors.length,
                hasMoreErrors: errors.length > this.config.maxErrorsToShow,
                summary: this.generateErrorSummary(errors)
            };

        } catch (error) {
            console.error('Error in error checking:', error);
            return {
                errors: [{
                    category: 'CRITICAL',
                    title: 'Error Checker Failed',
                    message: 'The error checker encountered an issue. Please try again.',
                    file: 'system',
                    line: 0,
                    fix: 'Refresh the page and try again'
                }],
                totalFound: 1,
                hasMoreErrors: false,
                summary: { critical: 1, structural: 0, syntax: 0, style: 0, suggestion: 0 }
            };
        }
    },

    /**
     * Check for structural HTML errors
     */
    async checkStructuralErrors(projectFiles) {
        const errors = [];
        const htmlFile = projectFiles.find(f => f.type === FileType.HTML);
        
        if (!htmlFile) {
            return [{
                category: 'CRITICAL',
                title: 'No HTML File Found',
                message: 'Your project needs an HTML file to display content.',
                file: 'project',
                line: 0,
                explanation: 'HTML files contain the structure and content of your webpage.',
                fix: 'Create an HTML file (like index.html) to get started',
                beginnerTip: 'HTML is like the skeleton of your webpage - it holds everything together!'
            }];
        }

        const content = htmlFile.content.toLowerCase();
        
        // Check for basic HTML structure
        if (!content.includes('<!doctype html>') && !content.includes('<!doctype')) {
            errors.push({
                category: 'STRUCTURAL',
                title: 'Missing DOCTYPE Declaration',
                message: 'Your HTML file should start with <!DOCTYPE html>',
                file: htmlFile.name,
                line: 1,
                explanation: 'DOCTYPE tells the browser what version of HTML you\'re using.',
                fix: 'Add <!DOCTYPE html> as the very first line of your HTML file',
                beginnerTip: 'Think of DOCTYPE as introducing yourself to the browser!'
            });
        }

        // Check for html, head, and body tags
        const requiredTags = ['<html', '<head', '<body'];
        requiredTags.forEach(tag => {
            if (!content.includes(tag)) {
                const tagName = tag.replace('<', '').replace('>', '');
                errors.push({
                    category: 'STRUCTURAL',
                    title: `Missing ${tagName.toUpperCase()} Tag`,
                    message: `Every HTML page needs a ${tagName} element.`,
                    file: htmlFile.name,
                    line: this.findLineNumber(htmlFile.content, tag),
                    explanation: this.getTagExplanation(tagName),
                    fix: `Add a ${tag}> element to your HTML structure`,
                    beginnerTip: this.getTagTip(tagName)
                });
            }
        });

        // Check for proper nesting
        const nestingErrors = this.checkNesting(htmlFile.content);
        errors.push(...nestingErrors.map(error => ({
            ...error,
            category: 'STRUCTURAL',
            file: htmlFile.name
        })));

        return errors;
    },

    /**
     * Check component integrity
     */
    async checkComponentIntegrity(projectFiles) {
        const errors = [];
        const htmlFile = projectFiles.find(f => f.type === FileType.HTML);
        
        if (!htmlFile) return errors;

        // Detect website type (if website selector is available)
        let websiteType = 'general';
        if (typeof WebsiteSelectorService !== 'undefined' && WebsiteSelectorService.selectedWebsite) {
            websiteType = WebsiteSelectorService.selectedWebsite;
        }

        // Check for required components based on website type
        const requiredComponents = this.requiredComponents[websiteType] || this.requiredComponents.portfolio;
        const content = htmlFile.content.toLowerCase();

        requiredComponents.forEach(component => {
            const hasComponent = content.includes(`<${component}`) || content.includes(`class="${component}"`);
            
            if (!hasComponent) {
                errors.push({
                    category: 'STRUCTURAL',
                    title: `Missing ${component.toUpperCase()} Component`,
                    message: `${websiteType} websites typically need a ${component} section.`,
                    file: htmlFile.name,
                    line: 0,
                    explanation: this.getComponentExplanation(component, websiteType),
                    fix: `Add a <${component}> element to your HTML`,
                    beginnerTip: `The ${component} helps organize your content and makes it easier for visitors to navigate.`
                });
            }
        });

        // Check for components placed outside their intended containers
        const containerErrors = this.checkContainerPlacement(htmlFile.content);
        errors.push(...containerErrors.map(error => ({
            ...error,
            category: 'STRUCTURAL',
            file: htmlFile.name
        })));

        return errors;
    },

    /**
     * Check for syntax errors
     */
    async checkSyntaxErrors(projectFiles) {
        const errors = [];

        for (const file of projectFiles) {
            if (file.type === FileType.HTML) {
                const htmlErrors = this.checkHTMLSyntax(file);
                errors.push(...htmlErrors);
            } else if (file.type === FileType.CSS) {
                const cssErrors = this.checkCSSSyntax(file);
                errors.push(...cssErrors);
            } else if (file.type === FileType.JAVASCRIPT) {
                const jsErrors = this.checkJSSyntax(file);
                errors.push(...jsErrors);
            }
        }

        return errors;
    },

    /**
     * Check CSS-specific errors
     */
    async checkCSSErrors(projectFiles) {
        const errors = [];
        const cssFile = projectFiles.find(f => f.type === FileType.CSS);
        const htmlFile = projectFiles.find(f => f.type === FileType.HTML);
        
        if (!cssFile) return errors;

        // Check for selectors that match no elements
        if (htmlFile) {
            const orphanedSelectors = this.findOrphanedSelectors(cssFile.content, htmlFile.content);
            orphanedSelectors.forEach(selector => {
                errors.push({
                    category: 'STYLE',
                    title: 'CSS Selector Not Found',
                    message: `The selector "${selector}" doesn't match any HTML elements.`,
                    file: cssFile.name,
                    line: this.findLineNumber(cssFile.content, selector),
                    explanation: 'CSS selectors need to match HTML elements to apply styles.',
                    fix: `Check if "${selector}" exists in your HTML, or remove this CSS rule`,
                    beginnerTip: 'CSS is like giving instructions - make sure the element you\'re talking to actually exists!'
                });
            });
        }

        // Check for common CSS mistakes
        const cssPatterns = [
            {
                pattern: /width:\s*100%.*height:\s*100%/gi,
                title: 'Potential Layout Issue',
                message: 'Setting both width and height to 100% can cause overflow issues.',
                fix: 'Consider using min-height: 100vh instead of height: 100%'
            },
            {
                pattern: /position:\s*fixed.*top:\s*0.*left:\s*0.*right:\s*0.*bottom:\s*0/gi,
                title: 'Full Screen Fixed Element',
                message: 'This element will cover the entire screen.',
                fix: 'Make sure this is intentional, or adjust the positioning values'
            }
        ];

        cssPatterns.forEach(pattern => {
            const matches = cssFile.content.match(pattern.pattern);
            if (matches) {
                errors.push({
                    category: 'STYLE',
                    title: pattern.title,
                    message: pattern.message,
                    file: cssFile.name,
                    line: this.findLineNumber(cssFile.content, matches[0]),
                    explanation: 'This CSS pattern might cause unexpected behavior.',
                    fix: pattern.fix,
                    beginnerTip: 'When in doubt, test your changes in the preview!'
                });
            }
        });

        return errors;
    },

    /**
     * Check JavaScript DOM safety
     */
    async checkJavaScriptErrors(projectFiles) {
        const errors = [];
        const jsFile = projectFiles.find(f => f.type === FileType.JAVASCRIPT);
        const htmlFile = projectFiles.find(f => f.type === FileType.HTML);
        
        if (!jsFile) return errors;

        // Check for getElementById calls with non-existent elements
        if (htmlFile) {
            const getElementCalls = jsFile.content.match(/document\.getElementById\(['"]([^'"]+)['"]\)/gi);
            if (getElementCalls) {
                getElementCalls.forEach(call => {
                    const idMatch = call.match(/['"]([^'"]+)['"]/);
                    if (idMatch) {
                        const id = idMatch[1];
                        const htmlContent = htmlFile.content.toLowerCase();
                        
                        if (!htmlContent.includes(`id="${id}"`) && !htmlContent.includes(`id='${id}'`)) {
                            errors.push({
                                category: 'SYNTAX',
                                title: 'Element Not Found',
                                message: `JavaScript is looking for an element with id="${id}" but it doesn't exist in your HTML.`,
                                file: jsFile.name,
                                line: this.findLineNumber(jsFile.content, call),
                                explanation: 'JavaScript can\'t find the HTML element you\'re trying to use.',
                                fix: `Add id="${id}" to an HTML element, or change the JavaScript to use a different id`,
                                beginnerTip: 'Make sure the HTML element exists before trying to use it in JavaScript!'
                            });
                        }
                    }
                });
            }
        }

        // Check for event listeners on potentially missing elements
        const eventListenerCalls = jsFile.content.match(/\.addEventListener\s*\(/gi);
        if (eventListenerCalls) {
            // This is a simplified check - in a real implementation, you'd parse the JS more thoroughly
            errors.push({
                category: 'SUGGESTION',
                title: 'Event Listener Safety',
                message: 'Make sure elements exist before adding event listeners.',
                file: jsFile.name,
                line: this.findLineNumber(jsFile.content, eventListenerCalls[0]),
                explanation: 'Adding event listeners to non-existent elements will cause errors.',
                fix: 'Check if the element exists: if (element) { element.addEventListener(...) }',
                beginnerTip: 'Always check if an element exists before using it!'
            });
        }

        return errors;
    },

    /**
     * Predict common beginner mistakes
     */
    async predictBeginnerMistakes(projectFiles, currentFile) {
        const errors = [];
        
        if (!currentFile) return errors;

        // Check if user is adding code at the bottom instead of inside containers
        if (currentFile.type === FileType.HTML) {
            const lines = currentFile.content.split('\n');
            const lastNonEmptyLine = lines.reverse().find(line => line.trim() !== '');
            
            if (lastNonEmptyLine && lastNonEmptyLine.includes('<div') && !lastNonEmptyLine.includes('</div>')) {
                errors.push({
                    category: 'SUGGESTION',
                    title: 'Code Placement Tip',
                    message: 'It looks like you might be adding content at the bottom of your file.',
                    file: currentFile.name,
                    line: lines.length,
                    explanation: 'New content usually goes inside existing containers like <main> or <section>.',
                    fix: 'Try adding your new content inside the <body> or <main> section',
                    beginnerTip: 'Think of HTML like nesting boxes - put new content inside existing containers!'
                });
            }
        }

        // Check for editing wrong file type
        if (currentFile.type === FileType.CSS && currentFile.content.includes('<')) {
            errors.push({
                category: 'CRITICAL',
                title: 'Wrong File Type',
                message: 'It looks like you\'re writing HTML code in a CSS file.',
                file: currentFile.name,
                line: this.findLineNumber(currentFile.content, '<'),
                explanation: 'CSS files are for styling, HTML files are for content structure.',
                fix: 'Move this HTML code to your HTML file (like index.html)',
                beginnerTip: 'Remember: HTML for structure, CSS for styling, JavaScript for interactivity!'
            });
        }

        if (currentFile.type === FileType.HTML && currentFile.content.includes('color:') && currentFile.content.includes('{')) {
            errors.push({
                category: 'STRUCTURAL',
                title: 'CSS in HTML File',
                message: 'It looks like you\'re writing CSS code in an HTML file.',
                file: currentFile.name,
                line: this.findLineNumber(currentFile.content, 'color:'),
                explanation: 'CSS styling should go in a separate CSS file or inside <style> tags.',
                fix: 'Move this CSS to your CSS file, or wrap it in <style> tags',
                beginnerTip: 'Keep your HTML and CSS separate for better organization!'
            });
        }

        return errors;
    },

    /**
     * Check HTML syntax
     */
    checkHTMLSyntax(file) {
        const errors = [];
        const content = file.content;
        
        // Check for unclosed tags
        const openTags = content.match(/<[^/][^>]*>/g) || [];
        const closeTags = content.match(/<\/[^>]*>/g) || [];
        
        // Simple tag matching (this is a basic implementation)
        const tagCounts = {};
        
        openTags.forEach(tag => {
            const tagName = tag.match(/<([^\s>]+)/);
            if (tagName && !tag.includes('/>') && !['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName[1])) {
                tagCounts[tagName[1]] = (tagCounts[tagName[1]] || 0) + 1;
            }
        });
        
        closeTags.forEach(tag => {
            const tagName = tag.match(/<\/([^>]+)/);
            if (tagName) {
                tagCounts[tagName[1]] = (tagCounts[tagName[1]] || 0) - 1;
            }
        });
        
        Object.keys(tagCounts).forEach(tagName => {
            if (tagCounts[tagName] > 0) {
                errors.push({
                    category: 'SYNTAX',
                    title: 'Unclosed HTML Tag',
                    message: `The <${tagName}> tag is not properly closed.`,
                    file: file.name,
                    line: this.findLineNumber(content, `<${tagName}`),
                    explanation: 'Every opening HTML tag needs a matching closing tag.',
                    fix: `Add </${tagName}> to close the tag`,
                    beginnerTip: 'HTML tags are like parentheses - every opening tag needs a closing tag!'
                });
            }
        });

        return errors;
    },

    /**
     * Check CSS syntax
     */
    checkCSSSyntax(file) {
        const errors = [];
        const content = file.content;
        
        // Check for missing semicolons
        const rules = content.match(/[^{}]+{[^{}]*}/g) || [];
        rules.forEach(rule => {
            const properties = rule.match(/{([^}]*)}/);
            if (properties) {
                const props = properties[1].split('\n').filter(line => line.trim() && !line.trim().startsWith('/*'));
                props.forEach(prop => {
                    if (prop.includes(':') && !prop.trim().endsWith(';') && !prop.trim().endsWith('}')) {
                        errors.push({
                            category: 'SYNTAX',
                            title: 'Missing Semicolon',
                            message: 'CSS properties should end with a semicolon.',
                            file: file.name,
                            line: this.findLineNumber(content, prop.trim()),
                            explanation: 'Semicolons separate CSS properties from each other.',
                            fix: 'Add a semicolon (;) at the end of this line',
                            beginnerTip: 'Think of semicolons as periods at the end of CSS sentences!'
                        });
                    }
                });
            }
        });

        return errors;
    },

    /**
     * Check JavaScript syntax (basic)
     */
    checkJSSyntax(file) {
        const errors = [];
        const content = file.content;
        
        // Check for common syntax issues
        const lines = content.split('\n');
        lines.forEach((line, index) => {
            // Check for missing quotes
            if (line.includes('getElementById(') && !line.includes('"') && !line.includes("'")) {
                errors.push({
                    category: 'SYNTAX',
                    title: 'Missing Quotes',
                    message: 'getElementById needs quotes around the element ID.',
                    file: file.name,
                    line: index + 1,
                    explanation: 'JavaScript strings need to be wrapped in quotes.',
                    fix: 'Add quotes around the element ID: getElementById("myId")',
                    beginnerTip: 'JavaScript is picky about quotes - always wrap text in quotes!'
                });
            }
        });

        return errors;
    },

    /**
     * Helper functions
     */
    findLineNumber(content, searchText) {
        const lines = content.split('\n');
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes(searchText)) {
                return i + 1;
            }
        }
        return 1;
    },

    getTagExplanation(tagName) {
        const explanations = {
            html: 'The html tag wraps all content on your page.',
            head: 'The head contains information about your page (like the title).',
            body: 'The body contains all the visible content of your page.'
        };
        return explanations[tagName] || `The ${tagName} tag is important for page structure.`;
    },

    getTagTip(tagName) {
        const tips = {
            html: 'Think of <html> as the container that holds your entire webpage!',
            head: 'The <head> is like the backstage area - visitors don\'t see it, but it\'s important!',
            body: 'The <body> is where all your visible content lives - text, images, buttons, everything!'
        };
        return tips[tagName] || `The <${tagName}> tag helps organize your content.`;
    },

    getComponentExplanation(component, websiteType) {
        const explanations = {
            header: `The header typically contains your site title, logo, and main navigation.`,
            nav: `Navigation helps visitors move around your ${websiteType} easily.`,
            main: `The main section contains the primary content of your page.`,
            section: `Sections help organize different parts of your content.`,
            footer: `The footer usually contains contact info, links, and copyright information.`,
            article: `Articles are perfect for blog posts and standalone content.`,
            aside: `Aside elements are great for sidebars and related information.`
        };
        return explanations[component] || `The ${component} element helps structure your ${websiteType}.`;
    },

    checkNesting(htmlContent) {
        const errors = [];
        // Basic nesting check - this would be more sophisticated in a real implementation
        
        // Check for common nesting mistakes
        if (htmlContent.includes('<p><div')) {
            errors.push({
                title: 'Invalid Nesting',
                message: 'Block elements like <div> cannot be nested inside <p> tags.',
                explanation: 'Paragraph tags can only contain inline elements.',
                fix: 'Move the <div> outside the <p> tag, or use <span> instead',
                beginnerTip: 'Think of <p> tags as containers for text only!'
            });
        }

        return errors;
    },

    checkContainerPlacement(htmlContent) {
        const errors = [];
        
        // Check if navigation is outside header
        if (htmlContent.includes('<nav') && htmlContent.includes('<header') && 
            htmlContent.indexOf('<nav') < htmlContent.indexOf('<header')) {
            errors.push({
                title: 'Navigation Placement',
                message: 'Navigation is typically placed inside the header element.',
                explanation: 'Grouping related elements helps with organization and accessibility.',
                fix: 'Move the <nav> element inside the <header>',
                beginnerTip: 'Think of the header as a container for your site\'s top section!'
            });
        }

        return errors;
    },

    findOrphanedSelectors(cssContent, htmlContent) {
        const orphaned = [];
        
        // Extract CSS selectors (simplified)
        const selectors = cssContent.match(/[.#][\w-]+/g) || [];
        
        selectors.forEach(selector => {
            const selectorType = selector.startsWith('.') ? 'class' : 'id';
            const selectorName = selector.substring(1);
            
            const htmlLower = htmlContent.toLowerCase();
            const hasMatch = selectorType === 'class' 
                ? htmlLower.includes(`class="${selectorName}"`) || htmlLower.includes(`class='${selectorName}'`)
                : htmlLower.includes(`id="${selectorName}"`) || htmlLower.includes(`id='${selectorName}'`);
                
            if (!hasMatch) {
                orphaned.push(selector);
            }
        });

        return orphaned;
    },

    prioritizeErrors(errors) {
        return errors.sort((a, b) => {
            const aPriority = this.errorCategories[a.category]?.priority || 999;
            const bPriority = this.errorCategories[b.category]?.priority || 999;
            return aPriority - bPriority;
        });
    },

    generateErrorSummary(errors) {
        const summary = {
            critical: 0,
            structural: 0,
            syntax: 0,
            style: 0,
            suggestion: 0
        };

        errors.forEach(error => {
            const category = error.category.toLowerCase();
            if (summary.hasOwnProperty(category)) {
                summary[category]++;
            }
        });

        return summary;
    },

    /**
     * Format error for display
     */
    formatError(error) {
        const category = this.errorCategories[error.category] || this.errorCategories.SUGGESTION;
        
        return {
            ...error,
            categoryInfo: category,
            displayTitle: error.title,
            displayMessage: this.config.beginnerMode ? this.formatBeginnerMessage(error) : error.message,
            actionable: true,
            canAutoFix: this.canAutoFix(error),
            learnMoreUrl: this.getLearnMoreUrl(error)
        };
    },

    formatBeginnerMessage(error) {
        let message = error.message;
        
        if (error.explanation) {
            message += `\n\n💡 ${error.explanation}`;
        }
        
        if (error.beginnerTip) {
            message += `\n\n🎯 ${error.beginnerTip}`;
        }
        
        return message;
    },

    canAutoFix(error) {
        // Define which errors can be automatically fixed
        const autoFixable = [
            'Missing Semicolon',
            'Missing DOCTYPE Declaration',
            'Unclosed HTML Tag'
        ];
        
        return autoFixable.includes(error.title);
    },

    getLearnMoreUrl(error) {
        // Map error types to learning resources
        const urlMap = {
            'Missing DOCTYPE Declaration': 'https://developer.mozilla.org/en-US/docs/Glossary/Doctype',
            'Unclosed HTML Tag': 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element',
            'CSS Selector Not Found': 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors'
        };
        
        return urlMap[error.title] || null;
    },

    /**
     * Enable/disable beginner mode
     */
    setBeginnerMode(enabled) {
        this.config.beginnerMode = enabled;
    },

    /**
     * Update configuration
     */
    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ErrorCheckerService;
}