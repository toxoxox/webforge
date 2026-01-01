/**
 * Website Selector Service - Manages website type selection and component recommendations
 */

const WebsiteSelectorService = {
    // Current selected website type
    selectedWebsite: null,

    // Website type definitions
    websiteTypes: {
        salon: {
            id: 'salon',
            name: 'Salon Website',
            icon: 'scissors',
            recommendedComponents: [
                'responsive-navbar',
                'hero-section',
                'card-component',
                'pricing-table',
                'testimonials',
                'image-gallery',
                'contact-form',
                'footer',
                'before-after-slider',
                'appointment-selector'
            ]
        },
        games: {
            id: 'games',
            name: 'History of Games Website',
            icon: 'gamepad-2',
            recommendedComponents: [
                'responsive-navbar',
                'hero-section',
                'timeline',
                'image-gallery',
                'card-component',
                'footer',
                'genre-filter-tabs',
                'expandable-timeline',
                'game-info-modal'
            ]
        },
        pets: {
            id: 'pets',
            name: 'Pet Adoption Website',
            icon: 'heart',
            recommendedComponents: [
                'responsive-navbar',
                'hero-section',
                'image-gallery',
                'card-component',
                'contact-form',
                'footer',
                'adoption-status-badge',
                'pet-type-filter'
            ]
        },
        city: {
            id: 'city',
            name: 'City Website',
            icon: 'building-2',
            recommendedComponents: [
                'responsive-navbar',
                'hero-section',
                'image-gallery',
                'timeline',
                'card-component',
                'footer',
                'city-statistics',
                'announcement-banner'
            ]
        },
        indigenous: {
            id: 'indigenous',
            name: 'Indigenous People of the Philippines Website',
            icon: 'users',
            recommendedComponents: [
                'responsive-navbar',
                'hero-section',
                'timeline',
                'image-gallery',
                'card-component',
                'footer',
                'tribe-profile',
                'cultural-artifact',
                'quote-highlight'
            ]
        },
        pba: {
            id: 'pba',
            name: 'PBA History Website',
            icon: 'trophy',
            recommendedComponents: [
                'responsive-navbar',
                'hero-section',
                'timeline',
                'image-gallery',
                'card-component',
                'footer',
                'team-history-table',
                'player-stats-panel'
            ]
        },
        music: {
            id: 'music',
            name: 'Music Tutorial Website',
            icon: 'music',
            recommendedComponents: [
                'responsive-navbar',
                'hero-section',
                'card-component',
                'pricing-table',
                'testimonials',
                'contact-form',
                'footer',
                'lesson-progress',
                'difficulty-badge'
            ]
        },
        fitness: {
            id: 'fitness',
            name: 'Fitness Website',
            icon: 'dumbbell',
            recommendedComponents: [
                'responsive-navbar',
                'hero-section',
                'card-component',
                'pricing-table',
                'testimonials',
                'image-gallery',
                'contact-form',
                'footer',
                'workout-schedule',
                'progress-bar',
                'bmi-calculator'
            ]
        },
        other: {
            id: 'other',
            name: 'Other / Show All',
            icon: 'grid-3x3',
            recommendedComponents: [] // No recommendations for "other"
        }
    },

    /**
     * Initialize the website selector
     */
    init() {
        // Setup event listeners first
        this.setupEventListeners();
        
        // Check if website type is already selected
        const saved = localStorage.getItem('webforge_selected_website_type');
        if (saved && this.websiteTypes[saved]) {
            this.selectedWebsite = saved;
            this.updateUI();
        } else {
            // Show modal on first visit (with small delay to ensure DOM is ready)
            setTimeout(() => {
                this.showModal();
            }, 100);
        }
    },

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Website option buttons
        const options = document.querySelectorAll('.website-option');
        options.forEach(option => {
            option.addEventListener('click', () => {
                const websiteType = option.dataset.website;
                this.selectWebsite(websiteType);
            });
        });

        // Change website button (in banner)
        const changeBtn = document.getElementById('change-website-btn');
        if (changeBtn) {
            changeBtn.addEventListener('click', () => {
                this.showModal();
            });
        }

        // Website type selector button (always visible in filters)
        const selectorBtn = document.getElementById('website-type-selector-btn');
        if (selectorBtn) {
            selectorBtn.addEventListener('click', () => {
                this.showModal();
            });
        }

        // Close modal when clicking overlay
        const modal = document.getElementById('website-selector-modal');
        const overlay = modal?.querySelector('.website-selector-overlay');
        if (overlay) {
            overlay.addEventListener('click', () => {
                // Only close if a website has already been selected
                if (this.selectedWebsite) {
                    this.hideModal();
                }
            });
        }
    },

    /**
     * Show the website selector modal
     */
    showModal() {
        const modal = document.getElementById('website-selector-modal');
        if (modal) {
            modal.classList.add('active');
            // Reinitialize icons for modal
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }
    },

    /**
     * Hide the website selector modal
     */
    hideModal() {
        const modal = document.getElementById('website-selector-modal');
        if (modal) {
            modal.classList.remove('active');
        }
    },

    /**
     * Select a website type
     */
    selectWebsite(websiteType) {
        if (!this.websiteTypes[websiteType]) return;

        this.selectedWebsite = websiteType;
        localStorage.setItem('webforge_selected_website_type', websiteType);
        
        this.hideModal();
        this.updateUI();
        
        // Trigger component gallery refresh
        if (typeof ComponentService !== 'undefined') {
            ComponentService.applyFilters();
            ComponentService.renderGallery();
        }
    },

    /**
     * Update UI based on selected website
     */
    updateUI() {
        const banner = document.getElementById('selected-website-banner');
        const text = document.getElementById('website-type-text');
        const recommendedFilter = document.getElementById('recommended-filter-group');
        const selectorBtnText = document.getElementById('current-website-type-text');

        if (!this.selectedWebsite || this.selectedWebsite === 'other') {
            // Hide banner and recommended filter for "other"
            if (banner) banner.style.display = 'none';
            if (recommendedFilter) recommendedFilter.style.display = 'none';
            
            // Update selector button to show "Show All"
            if (selectorBtnText) {
                selectorBtnText.textContent = 'Show All Components';
            }
            return;
        }

        const websiteInfo = this.websiteTypes[this.selectedWebsite];
        
        // Show and update banner
        if (banner && text) {
            banner.style.display = 'flex';
            text.textContent = `Building a ${websiteInfo.name}`;
        }

        // Show recommended filter
        if (recommendedFilter) {
            recommendedFilter.style.display = 'block';
        }

        // Update selector button text
        if (selectorBtnText) {
            selectorBtnText.textContent = websiteInfo.name;
        }

        // Reinitialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    },

    /**
     * Check if a component is recommended for current website
     */
    isRecommended(componentId) {
        if (!this.selectedWebsite || this.selectedWebsite === 'other') {
            return false;
        }

        const websiteInfo = this.websiteTypes[this.selectedWebsite];
        return websiteInfo.recommendedComponents.includes(componentId);
    },

    /**
     * Get recommended components for current website
     */
    getRecommendedComponents() {
        if (!this.selectedWebsite || this.selectedWebsite === 'other') {
            return [];
        }

        const websiteInfo = this.websiteTypes[this.selectedWebsite];
        return websiteInfo.recommendedComponents;
    },

    /**
     * Get current website name
     */
    getCurrentWebsiteName() {
        if (!this.selectedWebsite) return null;
        return this.websiteTypes[this.selectedWebsite].name;
    }
};
