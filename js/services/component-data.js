/**
 * Component Data - Main entry point for all components
 * Combines components from all difficulty levels
 */

const ComponentData = {
    // All components combined from different difficulty levels
    components: [],
    
    // Organize components by difficulty for easy filtering
    byDifficulty: {
        beginner: [],
        intermediate: [],
        advanced: []
    },
    
    // Initialize and load all components
    init() {
        // Load components from separate difficulty files
        if (typeof BeginnerComponentData !== 'undefined') {
            this.byDifficulty.beginner = BeginnerComponentData.components;
        }
        
        if (typeof IntermediateComponentData !== 'undefined') {
            this.byDifficulty.intermediate = IntermediateComponentData.components;
        }
        
        if (typeof AdvancedComponentData !== 'undefined') {
            this.byDifficulty.advanced = AdvancedComponentData.components;
        }
        
        // Combine all components
        this.components = [
            ...this.byDifficulty.beginner,
            ...this.byDifficulty.intermediate,
            ...this.byDifficulty.advanced
        ];
        
        console.log(`Loaded ${this.components.length} components:`, {
            beginner: this.byDifficulty.beginner.length,
            intermediate: this.byDifficulty.intermediate.length,
            advanced: this.byDifficulty.advanced.length
        });
    },
    
    // Get components by difficulty level
    getByDifficulty(difficulty) {
        return this.byDifficulty[difficulty] || [];
    },
    
    // Get components by type
    getByType(type) {
        // This would filter the actual component objects by type
        // Implementation depends on how components are structured
        return this.components.filter(component => {
            // Filter logic would go here
            return true;
        });
    },
    
    // Search components
    search(query) {
        // Implementation for searching components by name, tags, etc.
        return this.components.filter(component => {
            // Search logic would go here
            return true;
        });
    }
};

// Initialize the component data
ComponentData.init();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ComponentData;
}