/**
 * Analytics Service for WebForge
 * Tracks user engagement, feature usage, and session metrics
 * Uses Firebase Analytics (Google Analytics 4)
 */

const AnalyticsService = {
    initialized: false,
    sessionStart: null,
    lastActivity: null,
    pageLoadTime: null,
    
    /**
     * Initialize Firebase Analytics
     */
    init() {
        if (this.initialized) return;
        
        try {
            // Check if Firebase is available
            if (typeof firebase === 'undefined') {
                console.warn('Analytics: Firebase not loaded');
                return;
            }
            
            // Check if Firebase app is initialized
            if (!firebase.apps || firebase.apps.length === 0) {
                console.warn('Analytics: Firebase app not initialized');
                return;
            }
            
            // Initialize Firebase Analytics
            if (typeof firebase.analytics === 'function') {
                this.analytics = firebase.analytics();
                this.initialized = true;
                this.sessionStart = Date.now();
                this.lastActivity = Date.now();
                this.pageLoadTime = performance.now();
                
                // Track initial page view
                this.trackPageView();
                
                // Set up session tracking
                this.setupSessionTracking();
                
                // Track page visibility changes
                this.setupVisibilityTracking();
                
                console.log('Analytics: Initialized successfully');
            } else {
                console.warn('Analytics: firebase.analytics is not available');
            }
        } catch (error) {
            console.warn('Analytics: Failed to initialize', error);
        }
    },
    
    /**
     * Track page views
     */
    trackPageView(pageName = null) {
        if (!this.initialized) return;
        
        const page = pageName || this.getCurrentPage();
        
        this.analytics.logEvent('page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname,
            page_name: page
        });
    },
    
    /**
     * Get current page name from URL or DOM
     */
    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('editor')) return 'editor';
        if (path.includes('components')) return 'components';
        if (path.includes('tutorial')) return 'tutorials';
        if (path === '/' || path.includes('index')) return 'home';
        return path.replace(/\//g, '') || 'home';
    },
    
    /**
     * Track custom events
     */
    trackEvent(eventName, params = {}) {
        if (!this.initialized) return;
        
        this.lastActivity = Date.now();
        
        this.analytics.logEvent(eventName, {
            ...params,
            timestamp: new Date().toISOString(),
            session_duration: this.getSessionDuration()
        });
    },
    
    /**
     * Track feature usage
     */
    trackFeature(featureName, action = 'used', details = {}) {
        this.trackEvent('feature_usage', {
            feature_name: featureName,
            action: action,
            ...details
        });
    },
    
    // ===== EDITOR TRACKING =====
    
    trackEditorOpen() {
        this.trackEvent('editor_opened', {
            page: this.getCurrentPage()
        });
    },
    
    trackProjectCreated(projectName, fromTemplate = false) {
        this.trackEvent('project_created', {
            project_name: projectName,
            from_template: fromTemplate
        });
    },
    
    trackProjectExported(projectName) {
        this.trackEvent('project_exported', {
            project_name: projectName
        });
    },
    
    trackFileSaved(fileType) {
        this.trackEvent('file_saved', {
            file_type: fileType
        });
    },
    
    trackCodeWritten(language, lineCount) {
        this.trackEvent('code_written', {
            language: language,
            line_count: lineCount
        });
    },
    
    // ===== TUTORIAL/WORKSHOP TRACKING =====
    
    trackTutorialStarted(tutorialId, tutorialName) {
        this.trackEvent('tutorial_started', {
            tutorial_id: tutorialId,
            tutorial_name: tutorialName
        });
    },
    
    trackTutorialStepCompleted(tutorialId, stepNumber, totalSteps) {
        this.trackEvent('tutorial_step_completed', {
            tutorial_id: tutorialId,
            step_number: stepNumber,
            total_steps: totalSteps,
            progress_percent: Math.round((stepNumber / totalSteps) * 100)
        });
    },
    
    trackTutorialCompleted(tutorialId, tutorialName, duration) {
        this.trackEvent('tutorial_completed', {
            tutorial_id: tutorialId,
            tutorial_name: tutorialName,
            duration_seconds: Math.round(duration / 1000)
        });
    },
    
    trackWorkshopStarted(componentId, componentName) {
        this.trackEvent('workshop_started', {
            component_id: componentId,
            component_name: componentName
        });
    },
    
    trackWorkshopCompleted(componentId, componentName, duration) {
        this.trackEvent('workshop_completed', {
            component_id: componentId,
            component_name: componentName,
            duration_seconds: Math.round(duration / 1000)
        });
    },
    
    // ===== COMPONENT TRACKING =====
    
    trackComponentViewed(componentId, componentName, category) {
        this.trackEvent('component_viewed', {
            component_id: componentId,
            component_name: componentName,
            category: category
        });
    },
    
    trackComponentCopied(componentId, componentName) {
        this.trackEvent('component_copied', {
            component_id: componentId,
            component_name: componentName
        });
    },
    
    // ===== USER ENGAGEMENT =====
    
    trackSearch(query, resultsCount, context = 'components') {
        this.trackEvent('search', {
            search_term: query,
            results_count: resultsCount,
            search_context: context
        });
    },
    
    trackFilterUsed(filterType, filterValue) {
        this.trackEvent('filter_used', {
            filter_type: filterType,
            filter_value: filterValue
        });
    },
    
    trackHelpRequested(helpType) {
        this.trackEvent('help_requested', {
            help_type: helpType
        });
    },
    
    trackError(errorType, errorMessage, context = '') {
        this.trackEvent('error_occurred', {
            error_type: errorType,
            error_message: errorMessage.substring(0, 100),
            context: context
        });
    },
    
    // ===== SESSION TRACKING =====
    
    setupSessionTracking() {
        // Track session end on page unload
        window.addEventListener('beforeunload', () => {
            this.trackSessionEnd();
        });
        
        // Track activity for engagement metrics
        ['click', 'keydown', 'scroll'].forEach(event => {
            document.addEventListener(event, () => {
                this.lastActivity = Date.now();
            }, { passive: true });
        });
        
        // Periodic engagement ping (every 30 seconds of activity)
        setInterval(() => {
            const inactiveTime = Date.now() - this.lastActivity;
            if (inactiveTime < 60000) { // Active in last minute
                this.trackEngagementPing();
            }
        }, 30000);
    },
    
    setupVisibilityTracking() {
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.trackEvent('tab_hidden', {
                    session_duration: this.getSessionDuration()
                });
            } else {
                this.trackEvent('tab_visible', {
                    away_duration: Date.now() - this.lastActivity
                });
                this.lastActivity = Date.now();
            }
        });
    },
    
    trackEngagementPing() {
        if (!this.initialized) return;
        
        this.analytics.logEvent('user_engagement', {
            engagement_time_msec: this.getSessionDuration(),
            page: this.getCurrentPage()
        });
    },
    
    trackSessionEnd() {
        if (!this.initialized) return;
        
        const duration = this.getSessionDuration();
        
        this.analytics.logEvent('session_end', {
            session_duration_seconds: Math.round(duration / 1000),
            pages_viewed: this.getCurrentPage(),
            page_load_time_ms: Math.round(this.pageLoadTime)
        });
    },
    
    getSessionDuration() {
        return Date.now() - this.sessionStart;
    },
    
    // ===== USER PROPERTIES =====
    
    setUserProperties(properties) {
        if (!this.initialized) return;
        
        this.analytics.setUserProperties(properties);
    },
    
    /**
     * Set user skill level for segmentation
     */
    setUserLevel(level) {
        this.setUserProperties({
            skill_level: level
        });
    },
    
    /**
     * Track returning vs new user
     */
    trackUserType() {
        const isReturning = localStorage.getItem('webforge_returning_user');
        
        if (!isReturning) {
            localStorage.setItem('webforge_returning_user', 'true');
            this.trackEvent('new_user');
            this.setUserProperties({ user_type: 'new' });
        } else {
            this.setUserProperties({ user_type: 'returning' });
        }
    }
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Enable debug mode for testing (remove in production)
    // To enable: localStorage.setItem('analytics_debug', 'true')
    if (localStorage.getItem('analytics_debug') === 'true') {
        console.log('Analytics: Debug mode enabled');
    }
    
    AnalyticsService.init();
    AnalyticsService.trackUserType();
});

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.AnalyticsService = AnalyticsService;
}
