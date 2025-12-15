/**
 * Accessibility Service
 * Provides real-time accessibility checking using axe-core
 */

const AccessibilityService = {
    /**
     * Check accessibility of the preview iframe
     * @returns {Promise<Object>} Accessibility results
     */
    async checkAccessibility(iframeElement) {
        if (!iframeElement || !iframeElement.contentDocument) {
            return { violations: [], passes: [], incomplete: [] };
        }

        try {
            const iframeDoc = iframeElement.contentDocument || iframeElement.contentWindow.document;
            
            // Run axe-core on the iframe content
            const results = await axe.run(iframeDoc, {
                runOnly: {
                    type: 'tag',
                    values: ['wcag2a', 'wcag2aa', 'best-practice']
                }
            });

            return results;
        } catch (error) {
            console.error('Accessibility check error:', error);
            return { violations: [], passes: [], incomplete: [] };
        }
    },

    /**
     * Format violation for display
     * @param {Object} violation - Axe violation object
     * @returns {Object} Formatted violation
     */
    formatViolation(violation) {
        return {
            id: violation.id,
            impact: violation.impact, // critical, serious, moderate, minor
            description: violation.description,
            help: violation.help,
            helpUrl: violation.helpUrl,
            nodes: violation.nodes.map(node => ({
                html: node.html,
                target: node.target,
                failureSummary: node.failureSummary
            }))
        };
    },

    /**
     * Get severity color for impact level
     * @param {string} impact - Impact level
     * @returns {string} CSS color
     */
    getImpactColor(impact) {
        const colors = {
            critical: '#e74c3c',
            serious: '#e67e22',
            moderate: '#f39c12',
            minor: '#3498db'
        };
        return colors[impact] || '#95a5a6';
    },

    /**
     * Get icon for impact level
     * @param {string} impact - Impact level
     * @returns {string} Lucide icon name
     */
    getImpactIcon(impact) {
        const icons = {
            critical: 'alert-circle',
            serious: 'alert-triangle',
            moderate: 'info',
            minor: 'help-circle'
        };
        return icons[impact] || 'circle';
    }
};
