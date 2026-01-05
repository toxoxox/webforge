/**
 * Component Service - Manages the component forge system
 * 
 * Dependencies:
 * - component-data.js (ComponentData)
 * - component-previews.js (ComponentPreviews)
 */

const ComponentService = {
    // Component data
    components: [],
    filteredComponents: [],
    currentFilters: {
        type: 'all',
        difficulty: 'all',
        recommended: false,
        layout: false,
        interactive: false,
        beginner: false,
        search: ''
    },

    /**
     * Initialize the component gallery
     */
    initializeGallery() {
        this.loadComponents();
        this.setupFilters();
        this.renderGallery();
    },

    /**
     * Load component definitions from ComponentData
     */
    loadComponents() {
        // Load components from external data file
        if (typeof ComponentData !== 'undefined' && ComponentData.components) {
            this.components = ComponentData.components;
        } else {
            console.error('ComponentData not loaded!');
            this.components = [];
        }
        
        // Assign preview generators to components that don't have preview HTML
        this.components.forEach(component => {
            // Skip if component already has preview HTML defined in data
            if (component.preview) {
                return;
            }
            
            // Try to get preview from ComponentPreviews
            if (typeof ComponentPreviews !== 'undefined') {
                const previewMethod = `generate${this.toPascalCase(component.id)}Preview`;
                if (ComponentPreviews[previewMethod]) {
                    component.preview = ComponentPreviews[previewMethod]();
                }
            }
            
            // If still no preview assigned, create a generic one
            if (!component.preview) {
                component.preview = this.generateGenericPreview(component);
            }
        });
        
        this.filteredComponents = [...this.components];
    },

    /**
     * Generate a generic preview for components without custom previews
     */
    generateGenericPreview(component) {
        const typeColors = {
            'navigation': '#667eea',
            'layout': '#10b981',
            'forms': '#f59e0b',
            'ui-elements': '#3b82f6',
            'interactions': '#8b5cf6'
        };
        
        const color = typeColors[component.type] || '#6b7280';
        
        // Choose appropriate icon based on component type and JS requirement
        const iconSvg = component.hasJS 
            ? `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
               </svg>`
            : `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
               </svg>`;
        
        return `
            <div class="component-preview-placeholder">
                <div style="background: ${color}; color: white; padding: 2rem; border-radius: 12px; text-align: center; min-height: 150px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                    <div style="margin-bottom: 0.75rem;">
                        ${iconSvg}
                    </div>
                    <div style="font-weight: 700; font-size: 0.9rem; margin-bottom: 0.25rem;">
                        ${component.name}
                    </div>
                    <div style="font-size: 0.75rem; opacity: 0.9;">
                        ${component.type.replace('-', ' ')}
                    </div>
                </div>
            </div>
        `;
    },

    /**
     * Convert kebab-case to PascalCase
     */
    toPascalCase(str) {
        return str.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join('');
    },

    /**
     * Setup filter event listeners
     */
    setupFilters() {
        // Search input
        this.setupSearchFilter();

        // Type filters (radio-style)
        document.querySelectorAll('[data-filter]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.closest('[data-filter]').dataset.filter;
                this.setFilter('type', filter);
                this.updateFilterButtons(e.target.closest('[data-filter]'), '[data-filter]');
            });
        });

        // Difficulty filters (radio-style)
        document.querySelectorAll('[data-difficulty]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.closest('[data-difficulty]').dataset.difficulty;
                this.setFilter('difficulty', filter);
                this.updateFilterButtons(e.target.closest('[data-difficulty]'), '[data-difficulty]');
            });
        });

        // Checkbox-style filters
        this.setupToggleFilter('[data-recommended]', 'recommended');
        this.setupToggleFilter('[data-layout]', 'layout');
        this.setupToggleFilter('[data-interactive]', 'interactive');
        this.setupToggleFilter('[data-beginner]', 'beginner');

        // Clear all filters button
        const clearAllBtn = document.getElementById('clear-all-filters-btn');
        if (clearAllBtn) {
            clearAllBtn.addEventListener('click', () => {
                this.clearAllFilters();
            });
        }
    },

    /**
     * Setup search filter functionality
     */
    setupSearchFilter() {
        const searchInput = document.getElementById('component-search');
        const clearBtn = document.getElementById('search-clear-btn');
        
        if (!searchInput) return;

        // Debounced search function
        let searchTimeout;
        const performSearch = (query) => {
            this.setFilter('search', query.trim());
        };

        // Search input event listener
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            
            // Show/hide clear button
            if (clearBtn) {
                clearBtn.style.display = query.length > 0 ? 'flex' : 'none';
            }
            
            // Debounce search
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => performSearch(query), 300);
        });

        // Clear button event listener
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                searchInput.value = '';
                clearBtn.style.display = 'none';
                this.setFilter('search', '');
                searchInput.focus();
            });
        }

        // Handle Enter key
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                clearTimeout(searchTimeout);
                performSearch(searchInput.value);
            }
        });
    },

    /**
     * Setup toggle filter (checkbox-style)
     */
    setupToggleFilter(selector, filterName) {
        document.querySelectorAll(selector).forEach(btn => {
            btn.addEventListener('click', (e) => {
                const button = e.target.closest(selector);
                button.classList.toggle('active');
                this.currentFilters[filterName] = button.classList.contains('active');
                this.applyFilters();
                this.renderGallery();
            });
        });
    },

    /**
     * Set filter and update gallery
     */
    setFilter(type, value) {
        this.currentFilters[type] = value;
        this.applyFilters();
        this.renderGallery();
    },

    /**
     * Update filter button states
     */
    updateFilterButtons(activeBtn, selector) {
        document.querySelectorAll(selector).forEach(btn => {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    },

    /**
     * Apply current filters to components
     */
    applyFilters() {
        this.filteredComponents = this.components.filter(component => {
            // Search filter
            if (this.currentFilters.search) {
                const searchTerm = this.currentFilters.search.toLowerCase();
                const searchableText = [
                    component.name,
                    component.description || '',
                    ...component.tags,
                    component.type.replace('-', ' ')
                ].join(' ').toLowerCase();
                
                if (!searchableText.includes(searchTerm)) {
                    return false;
                }
            }

            // Recommended filter (only if website type is selected and filter is active)
            if (this.currentFilters.recommended) {
                const hasWebsiteType = typeof WebsiteSelectorService !== 'undefined' && 
                                       WebsiteSelectorService.selectedWebsite && 
                                       WebsiteSelectorService.selectedWebsite !== 'other';
                
                if (hasWebsiteType && !WebsiteSelectorService.isRecommended(component.id)) {
                    return false;
                }
            }

            // Layout filter
            if (this.currentFilters.layout && component.type !== 'layout') {
                return false;
            }

            // Interactive filter
            if (this.currentFilters.interactive && !component.hasJS) {
                return false;
            }

            // Beginner filter
            if (this.currentFilters.beginner && component.difficulty !== 'beginner') {
                return false;
            }

            // Type filter
            if (this.currentFilters.type !== 'all' && component.type !== this.currentFilters.type) {
                return false;
            }

            // Difficulty filter
            if (this.currentFilters.difficulty !== 'all' && component.difficulty !== this.currentFilters.difficulty) {
                return false;
            }

            return true;
        });

        // Sort recommended components to top
        if (typeof WebsiteSelectorService !== 'undefined' && 
            WebsiteSelectorService.selectedWebsite && 
            WebsiteSelectorService.selectedWebsite !== 'other') {
            this.filteredComponents.sort((a, b) => {
                const aRec = WebsiteSelectorService.isRecommended(a.id);
                const bRec = WebsiteSelectorService.isRecommended(b.id);
                if (aRec && !bRec) return -1;
                if (!aRec && bRec) return 1;
                return 0;
            });
        }
    },

    /**
     * Render the component gallery
     */
    renderGallery() {
        const gallery = document.getElementById('component-gallery');
        
        if (this.filteredComponents.length === 0) {
            // Check if it's a search with no results
            if (this.currentFilters.search) {
                gallery.innerHTML = this.renderSearchEmptyState();
            } else {
                gallery.innerHTML = `
                    <div class="component-gallery-empty">
                        <h3>No components found</h3>
                        <p>Try adjusting your filters to see more components.</p>
                    </div>
                `;
            }
            return;
        }

        // Check if we should show recommended badges
        const showRecommended = typeof WebsiteSelectorService !== 'undefined' && 
                                WebsiteSelectorService.selectedWebsite && 
                                WebsiteSelectorService.selectedWebsite !== 'other';

        gallery.innerHTML = this.filteredComponents.map(component => {
            const isRecommended = showRecommended && WebsiteSelectorService.isRecommended(component.id);
            const recommendedClass = isRecommended ? 'recommended' : '';
            const searchMatchClass = this.currentFilters.search ? 'search-match' : '';
            const recommendedBadge = isRecommended ? `
                <div class="recommended-badge">
                    <i data-lucide="star"></i>
                    <span>Recommended</span>
                </div>
            ` : '';

            // Highlight search terms in title and tags
            const highlightedTitle = this.highlightSearchTerm(component.name, this.currentFilters.search);
            const highlightedTags = component.tags.map(tag => 
                this.highlightSearchTerm(tag, this.currentFilters.search)
            );

            return `
                <div class="component-card ${recommendedClass} ${searchMatchClass}" data-component="${component.id}">
                    ${recommendedBadge}
                    <div class="component-preview">
                        ${component.preview}
                    </div>
                    <div class="component-info">
                        <div class="component-header">
                            <h3 class="component-title">${highlightedTitle}</h3>
                            <span class="component-difficulty ${component.difficulty}">${component.difficulty}</span>
                        </div>
                        <div class="component-tags">
                            ${highlightedTags.map(tag => `
                                <span class="component-tag ${tag.toLowerCase().replace(/[^a-z0-9]/g, '-')}">${tag}</span>
                            `).join('')}
                        </div>
                        <div class="component-actions">
                            <button class="component-btn" onclick="ComponentService.startWorkshop('${component.id}')">
                                <i data-lucide="hammer"></i>
                                <span>Build This</span>
                            </button>
                            <button class="component-btn primary" onclick="ComponentService.previewComponent('${component.id}')">
                                <i data-lucide="eye"></i>
                                <span>Preview</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Re-initialize Lucide icons
        lucide.createIcons();
    },

    /**
     * Render search empty state with suggestions
     */
    renderSearchEmptyState() {
        const searchTerm = this.currentFilters.search;
        const suggestions = this.getSearchSuggestions();
        
        return `
            <div class="search-empty-state">
                <h3>
                    <i data-lucide="search-x"></i>
                    No components found for "${this.escapeHtml(searchTerm)}"
                </h3>
                <p>We couldn't find any components matching your search. Try different keywords or browse our suggestions below.</p>
                ${suggestions.length > 0 ? `
                    <div class="search-suggestions">
                        ${suggestions.map(suggestion => `
                            <button class="search-suggestion" onclick="ComponentService.applySuggestion('${suggestion}')">
                                ${suggestion}
                            </button>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    },

    /**
     * Get search suggestions based on available components
     */
    getSearchSuggestions() {
        const allTags = [...new Set(this.components.flatMap(c => c.tags))];
        const allTypes = [...new Set(this.components.map(c => c.type.replace('-', ' ')))];
        const popularTerms = ['responsive', 'navigation', 'card', 'form', 'button', 'layout'];
        
        return [...allTypes, ...popularTerms, ...allTags.slice(0, 5)]
            .filter(term => term.toLowerCase() !== this.currentFilters.search.toLowerCase())
            .slice(0, 8);
    },

    /**
     * Apply a search suggestion
     */
    applySuggestion(suggestion) {
        const searchInput = document.getElementById('component-search');
        if (searchInput) {
            searchInput.value = suggestion;
            searchInput.focus();
            this.setFilter('search', suggestion);
            
            // Show clear button
            const clearBtn = document.getElementById('search-clear-btn');
            if (clearBtn) {
                clearBtn.style.display = 'flex';
            }
        }
    },

    /**
     * Highlight search terms in text
     */
    highlightSearchTerm(text, searchTerm) {
        if (!searchTerm || !text) return this.escapeHtml(text);
        
        const escapedText = this.escapeHtml(text);
        const escapedSearchTerm = this.escapeHtml(searchTerm);
        const regex = new RegExp(`(${escapedSearchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        
        return escapedText.replace(regex, '<span class="search-highlight">$1</span>');
    },

    /**
     * Start a component building workshop
     */
    startWorkshop(componentId) {
        console.log('=== START WORKSHOP CLICKED ===');
        console.log('Component ID:', componentId);
        
        const component = this.components.find(c => c.id === componentId);
        console.log('Found component:', component ? component.name : 'NOT FOUND');
        console.log('Has workshop:', component ? !!component.workshop : 'N/A');
        
        if (!component || !component.workshop) {
            console.error('Workshop not available!');
            this.showToast('Workshop not available for this component', 'error');
            return;
        }

        // Store workshop data for editor
        const workshopData = {
            id: componentId,
            name: component.name,
            workshop: component.workshop,
            type: 'workshop'
        };

        console.log('Storing workshop data:', workshopData);
        localStorage.setItem('webforge-workshop-start', JSON.stringify(workshopData));
        console.log('Workshop data stored in localStorage');
        
        // Navigate to editor in workshop mode
        const url = 'editor.html?mode=workshop&component=' + componentId;
        console.log('Navigating to:', url);
        window.location.href = url;
    },

    /**
     * Preview component (show finished result)
     */
    previewComponent(componentId) {
        const component = this.components.find(c => c.id === componentId);
        if (!component) return;

        // Show preview modal with finished component
        this.showPreviewModal(component);
    },

    /**
     * Show preview modal
     */
    showPreviewModal(component) {
        const modalHTML = `
            <div class="modal-overlay" id="preview-modal-overlay">
                <div class="modal component-preview-modal" id="preview-modal">
                    <div class="preview-modal-header">
                        <h2>${component.name} - Preview</h2>
                        <p>This is what you'll build in the workshop</p>
                    </div>
                    
                    <div class="preview-modal-content">
                        <div class="preview-frame-large">
                            ${this.generateFullPreview(component)}
                        </div>
                        
                        <div class="preview-info">
                            <div class="workshop-overview">
                                <h3>
                                    <i data-lucide="target"></i>
                                    Workshop Goal
                                </h3>
                                <p>${component.workshop ? component.workshop.goal : 'Learn to build this component step by step'}</p>
                            </div>
                            
                            <div class="workshop-duration">
                                <h3>
                                    <i data-lucide="clock"></i>
                                    Duration
                                </h3>
                                <p>${component.workshop ? component.workshop.duration : '20-30 minutes'}</p>
                            </div>
                            
                            ${component.workshop ? `
                            <div class="learning-objectives">
                                <h3>
                                    <i data-lucide="check-circle"></i>
                                    What You'll Learn
                                </h3>
                                <ul>
                                    ${component.workshop.learningObjectives.map(obj => `<li>${obj}</li>`).join('')}
                                </ul>
                            </div>
                            ` : ''}
                            
                            <div class="workshop-actions">
                                <button class="btn btn-primary" onclick="ComponentService.startWorkshop('${component.id}')">
                                    <i data-lucide="hammer"></i>
                                    <span>Start Building</span>
                                </button>
                                <button class="btn" onclick="ComponentService.closePreviewModal()">
                                    <span>Maybe Later</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <button class="btn cancel-btn" onclick="ComponentService.closePreviewModal()" style="position: absolute; top: 1rem; right: 1rem;">
                        <i data-lucide="x"></i>
                    </button>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Close modal on overlay click
        document.getElementById('preview-modal-overlay').addEventListener('click', (e) => {
            if (e.target.id === 'preview-modal-overlay') {
                this.closePreviewModal();
            }
        });
        
        lucide.createIcons();
    },

    /**
     * Close preview modal
     */
    closePreviewModal() {
        const modal = document.getElementById('preview-modal-overlay');
        if (modal) {
            modal.remove();
        }
    },

    /**
     * Generate full preview for modal
     */
    generateFullPreview(component) {
        // Use ComponentPreviews if available
        if (typeof ComponentPreviews !== 'undefined') {
            const previewMethod = `generate${this.toPascalCase(component.id)}Preview`;
            if (ComponentPreviews[previewMethod]) {
                return ComponentPreviews[previewMethod]();
            }
        }
        
        // Fallback: use component.preview if available
        if (component.preview) {
            return component.preview;
        }
        
        // Final fallback: generic preview
        return `
            <div class="component-preview-placeholder">
                <div style="padding: 2rem; text-align: center; color: #6b7280;">
                    <p>Preview for ${component.name}</p>
                    <p style="font-size: 0.875rem; margin-top: 0.5rem;">Click "Build This" to start the workshop!</p>
                </div>
            </div>
        `;
    },

    /**
     * Get a specific component by ID
     */
    getComponent(componentId) {
        return this.components.find(c => c.id === componentId);
    },

    /**
     * Show toast notification
     */
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 2rem;
            right: 2rem;
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 5px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            animation: toast-slide-in 0.3s ease-out;
        `;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'toast-slide-out 0.3s ease-out forwards';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },

    /**
     * Clear all filters and reset to default state
     */
    clearAllFilters() {
        // Reset all filters to default
        this.currentFilters = {
            type: 'all',
            difficulty: 'all',
            recommended: false,
            layout: false,
            interactive: false,
            beginner: false,
            search: ''
        };

        // Clear search input
        const searchInput = document.getElementById('component-search');
        const clearBtn = document.getElementById('search-clear-btn');
        if (searchInput) {
            searchInput.value = '';
        }
        if (clearBtn) {
            clearBtn.style.display = 'none';
        }

        // Reset filter buttons
        document.querySelectorAll('[data-filter]').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === 'all') {
                btn.classList.add('active');
            }
        });

        document.querySelectorAll('[data-difficulty]').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.difficulty === 'all') {
                btn.classList.add('active');
            }
        });

        // Reset toggle filters
        document.querySelectorAll('[data-recommended], [data-layout], [data-interactive], [data-beginner]').forEach(btn => {
            btn.classList.remove('active');
        });

        // Apply filters and re-render
        this.applyFilters();
        this.renderGallery();
    },

    /**
     * Escape HTML for safe display
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};

// Add toast animations to page
const toastStyles = document.createElement('style');
toastStyles.textContent = `
    @keyframes toast-slide-in {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes toast-slide-out {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(toastStyles);
