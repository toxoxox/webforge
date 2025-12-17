/**
 * Step Manager Service - Handles individual tutorial step operations
 */

const StepManager = {
    /**
     * Get current step data with all necessary information
     */
    getCurrentStepData() {
        const currentStepInfo = TutorialEngine.getCurrentStep();
        if (!currentStepInfo) {
            return null;
        }

        const { step, stepIndex, totalSteps, tutorial } = currentStepInfo;
        
        return {
            step: step,
            stepIndex: stepIndex,
            totalSteps: totalSteps,
            tutorial: tutorial,
            progressPercentage: ((stepIndex + 1) / totalSteps) * 100,
            isFirstStep: stepIndex === 0,
            isLastStep: stepIndex === totalSteps - 1
        };
    },

    /**
     * Validate if current step requirements are met
     */
    validateStepCompletion() {
        const stepData = this.getCurrentStepData();
        if (!stepData || !stepData.step) {
            return false;
        }

        const step = stepData.step;
        
        // If no validation rules, consider step complete when code is typed
        if (!step.validation) {
            return this.hasCodeBeenTyped(step);
        }

        // Apply specific validation rules
        return this.applyValidationRules(step.validation);
    },

    /**
     * Check if code has been typed for the step
     */
    hasCodeBeenTyped(step) {
        if (!step.targetFile || !step.codeSnippet) {
            return true; // No code required
        }

        // This would check if the target file contains the expected code
        // Implementation depends on FileService integration
        // For now, return true as placeholder
        return true;
    },

    /**
     * Apply validation rules to check step completion
     */
    applyValidationRules(validation) {
        if (!validation || typeof validation !== 'object') {
            return true;
        }

        switch (validation.type) {
            case 'css-property':
                return this.validateCSSProperty(validation);
            case 'html-element':
                return this.validateHTMLElement(validation);
            case 'javascript-function':
                return this.validateJavaScriptFunction(validation);
            case 'file-content':
                return this.validateFileContent(validation);
            default:
                return true;
        }
    },

    /**
     * Validate CSS property exists
     */
    validateCSSProperty(validation) {
        // Placeholder - would check if CSS selector has specified property
        // Implementation depends on CSS parsing
        return true;
    },

    /**
     * Validate HTML element exists
     */
    validateHTMLElement(validation) {
        // Placeholder - would check if HTML contains specified element
        // Implementation depends on HTML parsing
        return true;
    },

    /**
     * Validate JavaScript function exists
     */
    validateJavaScriptFunction(validation) {
        // Placeholder - would check if JavaScript contains specified function
        // Implementation depends on JS parsing
        return true;
    },

    /**
     * Validate file content matches requirements
     */
    validateFileContent(validation) {
        // Placeholder - would check file content against requirements
        return true;
    },

    /**
     * Get code snippet with location guidance
     */
    getCodeSnippet() {
        const stepData = this.getCurrentStepData();
        if (!stepData || !stepData.step) {
            return null;
        }

        const step = stepData.step;
        
        return {
            code: step.codeSnippet || '',
            targetFile: step.targetFile || '',
            targetLocation: step.targetLocation || '',
            locationLabel: this.formatLocationLabel(step.targetFile, step.targetLocation),
            lineCount: step.codeSnippet ? step.codeSnippet.split('\n').length : 0
        };
    },

    /**
     * Get target location for code placement
     */
    getTargetLocation() {
        const stepData = this.getCurrentStepData();
        if (!stepData || !stepData.step) {
            return null;
        }

        const step = stepData.step;
        
        return {
            file: step.targetFile,
            location: step.targetLocation,
            instruction: this.formatLocationInstruction(step.targetFile, step.targetLocation)
        };
    },

    /**
     * Format location label for display
     */
    formatLocationLabel(targetFile, targetLocation) {
        if (!targetFile) {
            return 'Add this code:';
        }

        if (!targetLocation) {
            return `Add to ${targetFile}:`;
        }

        // Handle common location patterns
        if (targetLocation === 'body') {
            return `Add to <body> in ${targetFile}:`;
        } else if (targetLocation === 'head') {
            return `Add to <head> in ${targetFile}:`;
        } else if (targetLocation.startsWith('/*') && targetLocation.endsWith('*/')) {
            return `Add to ${targetFile} after ${targetLocation}:`;
        } else if (targetLocation.startsWith('.') || targetLocation.startsWith('#')) {
            return `Add CSS for ${targetLocation} in ${targetFile}:`;
        }

        return `Add to ${targetLocation} in ${targetFile}:`;
    },

    /**
     * Format location instruction for guidance
     */
    formatLocationInstruction(targetFile, targetLocation) {
        if (!targetFile || !targetLocation) {
            return 'Type the code snippet as shown.';
        }

        return `Open ${targetFile} and find ${targetLocation}, then add the code there.`;
    },

    /**
     * Provide hint for current step
     */
    provideHint() {
        const stepData = this.getCurrentStepData();
        if (!stepData || !stepData.step) {
            return null;
        }

        const step = stepData.step;
        
        return {
            hint: step.hint || 'Try following the step instructions carefully.',
            hasCustomHint: !!step.hint,
            stepTitle: step.title,
            goal: step.goal
        };
    },

    /**
     * Get step guidance without revealing complete solution
     */
    getStepGuidance() {
        const stepData = this.getCurrentStepData();
        if (!stepData || !stepData.step) {
            return null;
        }

        const step = stepData.step;
        const codeSnippet = this.getCodeSnippet();
        
        return {
            goal: step.goal,
            explanation: step.explanation || '',
            targetFile: step.targetFile,
            targetLocation: step.targetLocation,
            hint: step.hint,
            codeLineCount: codeSnippet ? codeSnippet.lineCount : 0,
            hasCode: !!step.codeSnippet
        };
    },

    /**
     * Insert completed code as fallback
     */
    insertCompletedCode() {
        const stepData = this.getCurrentStepData();
        if (!stepData || !stepData.step) {
            return null;
        }

        const step = stepData.step;
        const fallbackCode = step.fallbackCode || step.codeSnippet;
        
        if (!fallbackCode) {
            return null;
        }

        // This would integrate with FileService to actually insert the code
        // For now, return the code and explanation
        return {
            code: fallbackCode,
            targetFile: step.targetFile,
            targetLocation: step.targetLocation,
            explanation: this.explainInsertedCode(step),
            inserted: false // Would be true when actually inserted
        };
    },

    /**
     * Explain what code was added and why
     */
    explainInsertedCode(step) {
        let explanation = `Added code for: ${step.title}`;
        
        if (step.explanation) {
            explanation += `\n\n${step.explanation}`;
        }

        if (step.codeSnippet) {
            const lines = step.codeSnippet.split('\n');
            explanation += `\n\nThis code contains ${lines.length} line${lines.length !== 1 ? 's' : ''}`;
            
            // Add specific explanations based on code content
            if (step.codeSnippet.includes('<nav')) {
                explanation += ' and creates a navigation structure.';
            } else if (step.codeSnippet.includes('display: flex')) {
                explanation += ' and uses flexbox for layout.';
            } else if (step.codeSnippet.includes('function')) {
                explanation += ' and defines a JavaScript function.';
            } else {
                explanation += '.';
            }
        }

        return explanation;
    },

    /**
     * Check if step has code to type
     */
    hasCodeToType() {
        const stepData = this.getCurrentStepData();
        return stepData && stepData.step && !!stepData.step.codeSnippet;
    },

    /**
     * Get step progress information
     */
    getStepProgress() {
        const stepData = this.getCurrentStepData();
        if (!stepData) {
            return null;
        }

        return {
            current: stepData.stepIndex + 1,
            total: stepData.totalSteps,
            percentage: stepData.progressPercentage,
            isComplete: this.validateStepCompletion(),
            canAdvance: this.validateStepCompletion(),
            isFirstStep: stepData.isFirstStep,
            isLastStep: stepData.isLastStep
        };
    }
};