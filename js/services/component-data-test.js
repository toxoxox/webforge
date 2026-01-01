/**
 * Minimal test version of component data
 */

const ComponentData = {
    components: [
        {
            id: 'test-component',
            name: 'Test Component',
            type: 'ui-elements',
            difficulty: 'beginner',
            hasJS: false,
            mobileFirst: false,
            tags: ['Test'],
            description: 'Test component',
            workshop: {
                goal: 'Test',
                duration: '5 minutes',
                steps: [],
                learningObjectives: ['Test']
            },
            useCases: [
                { title: 'Test', description: 'Test' }
            ]
        }
    ]
};

console.log('Test ComponentData loaded:', ComponentData);
