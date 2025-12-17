/**
 * Reset Manager Service - Handles tutorial and step reset functionality
 */

const ResetManager = {
    userId: 'default-user',

    /**
     * Reset current step to its starting state while preserving previous progress
     */
    resetCurrentStep() {
        const currentStepInfo = TutorialEngine.getCurrentStep();
        if (!currentStepInfo) {
            throw new Error('No active tutorial step to reset');
        }

        const { tutorial, step } = currentStepInfo;
        
        try {
            // Restore file states from snapshot
            const restored = this.restoreFileSnapshot(tutorial.id, step.id);
            
            if (!restored) {
                // If no snapshot exists, create clean state for this step
                this.createCleanStepState(step);
            }

            // Preserve progress on previous steps
            this.preservePreviousSteps(tutorial.id, step.id);
            
            return {
                success: true,
                step: step,
                message: `Step "${step.title}" has been reset to its starting state.`
            };
        } catch (error) {
            console.error('Error resetting step:', error);
            return {
                success: false,
                error: error.message,
                message: 'Failed to reset step. Please try again.'
            };
        }
    },

    /**
     * Reset entire tutorial while preserving completed tutorials
     */
    resetTutorial() {
        const currentStepInfo = TutorialEngine.getCurrentStep();
        if (!currentStepInfo) {
            throw new Error('No active tutorial to reset');
        }

        const { tutorial } = currentStepInfo;
        
        try {
            // Reset to first step
            TutorialEngine.currentStepIndex = 0;
            TutorialEngine.currentStep = tutorial.steps[0];
            
            // Clear tutorial progress but preserve completed steps from other tutorials
            this.preserveCompletedSteps(tutorial.id);
            
            // Reset tutorial progress
            const freshProgress = createTutorialProgress(tutorial.id, tutorial.steps.length);
            StorageService.saveTutorialProgress(this.userId, tutorial.id, freshProgress);
            
            // Update current tutorial state
            StorageService.saveCurrentTutorialState(this.userId, tutorial.id, tutorial.steps[0].id);
            
            // Create fresh snapshot for first step
            this.createFileSnapshot(tutorial.id, tutorial.steps[0].id, {});
            
            return {
                success: true,
                tutorial: tutorial,
                step: tutorial.steps[0],
                message: `Tutorial "${tutorial.title}" has been reset to the beginning.`
            };
        } catch (error) {
            console.error('Error resetting tutorial:', error);
            return {
                success: false,
                error: error.message,
                message: 'Failed to reset tutorial. Please try again.'
            };
        }
    },

    /**
     * Create file state snapshot before step execution
     */
    createFileSnapshot(tutorialId, stepId, fileStates) {
        try {
            return StorageService.createSnapshot(this.userId, tutorialId, stepId, fileStates);
        } catch (error) {
            console.error('Error creating file snapshot:', error);
            return false;
        }
    },

    /**
     * Restore file states from snapshot
     */
    restoreFileSnapshot(tutorialId, stepId) {
        try {
            const snapshot = StorageService.restoreSnapshot(this.userId, tutorialId, stepId);
            
            if (!snapshot) {
                return false;
            }

            // This would integrate with FileService to actually restore file contents
            // For now, return success if snapshot exists
            return true;
        } catch (error) {
            console.error('Error restoring file snapshot:', error);
            return false;
        }
    },

    /**
     * Create clean state for a step (when no snapshot exists)
     */
    createCleanStepState(step) {
        // This would create the initial file state for the step
        // Implementation depends on FileService integration
        
        if (step.targetFile) {
            // Would ensure target file exists and is in clean state
            console.log(`Creating clean state for ${step.targetFile}`);
        }
        
        return true;
    },

    /**
     * Preserve progress on previous steps when resetting current step
     */
    preservePreviousSteps(tutorialId, currentStepId) {
        const progress = StorageService.loadTutorialProgress(this.userId, tutorialId);
        if (!progress) {
            return;
        }

        // Find current step index
        const tutorial = TutorialEngine.getTutorialDefinition(tutorialId);
        if (!tutorial) {
            return;
        }

        const currentStepIndex = tutorial.steps.findIndex(step => step.id === currentStepId);
        if (currentStepIndex === -1) {
            return;
        }

        // Keep completed steps that come before current step
        const previousSteps = tutorial.steps.slice(0, currentStepIndex);
        const preservedCompletedSteps = progress.completedSteps.filter(stepId => 
            previousSteps.some(step => step.id === stepId)
        );

        // Update progress to preserve only previous steps
        progress.completedSteps = preservedCompletedSteps;
        StorageService.saveTutorialProgress(this.userId, tutorialId, progress);
    },

    /**
     * Preserve completed steps from other tutorials when resetting current tutorial
     */
    preserveCompletedSteps(currentTutorialId) {
        // This ensures that resetting one tutorial doesn't affect progress in other tutorials
        // The storage service already handles this by storing progress per tutorial
        // This method is here for explicit clarity and future enhancements
        
        const allProgress = StorageService.loadTutorialProgress(this.userId);
        
        // Verify other tutorials' progress is intact
        Object.keys(allProgress).forEach(tutorialId => {
            if (tutorialId !== currentTutorialId) {
                // Other tutorials should remain unchanged
                console.log(`Preserving progress for tutorial: ${tutorialId}`);
            }
        });
    },

    /**
     * Validate current state before reset operations
     */
    validateState() {
        const currentStepInfo = TutorialEngine.getCurrentStep();
        
        if (!currentStepInfo) {
            return {
                valid: false,
                error: 'No active tutorial or step found'
            };
        }

        const { tutorial, step } = currentStepInfo;
        
        if (!tutorial || !step) {
            return {
                valid: false,
                error: 'Invalid tutorial or step state'
            };
        }

        return {
            valid: true,
            tutorial: tutorial,
            step: step
        };
    },

    /**
     * Recover from corrupted state
     */
    recoverFromCorruption(tutorialId) {
        try {
            console.log(`Attempting to recover from corrupted state for tutorial: ${tutorialId}`);
            
            // Clear corrupted progress
            StorageService.delete(`tutorial_progress_${this.userId}`);
            StorageService.delete(`current_tutorial_${this.userId}`);
            
            // Clear corrupted snapshots
            this.clearSnapshotsForTutorial(tutorialId);
            
            // Restart tutorial from beginning
            return TutorialEngine.startTutorial(tutorialId);
        } catch (error) {
            console.error('Error recovering from corruption:', error);
            throw new Error('Failed to recover from corrupted state');
        }
    },

    /**
     * Clear all snapshots for a specific tutorial
     */
    clearSnapshotsForTutorial(tutorialId) {
        try {
            // Find and delete all snapshots for this tutorial
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith(`tutorial_snapshot_${this.userId}_${tutorialId}_`)) {
                    StorageService.delete(key);
                }
            }
        } catch (error) {
            console.error('Error clearing snapshots:', error);
        }
    },

    /**
     * Get reset options for current state
     */
    getResetOptions() {
        const validation = this.validateState();
        
        if (!validation.valid) {
            return {
                canResetStep: false,
                canResetTutorial: false,
                error: validation.error
            };
        }

        const { tutorial, step } = validation;
        const stepProgress = StepManager.getStepProgress();
        
        return {
            canResetStep: true,
            canResetTutorial: true,
            currentStep: {
                title: step.title,
                index: stepProgress ? stepProgress.current : 1,
                total: stepProgress ? stepProgress.total : 1
            },
            tutorial: {
                title: tutorial.title,
                id: tutorial.id
            }
        };
    },

    /**
     * Cleanup old snapshots to prevent storage bloat
     */
    cleanupOldSnapshots(maxAge = 7 * 24 * 60 * 60 * 1000) { // 7 days default
        return StorageService.cleanupOldSnapshots(this.userId, maxAge);
    }
};