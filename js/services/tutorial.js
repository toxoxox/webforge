/**
 * Tutorial Engine - Core service for guided tutorial system
 */

const TutorialEngine = {
    // Current tutorial state
    currentTutorial: null,
    currentStep: null,
    currentStepIndex: 0,
    tutorialMode: 'tutorial', // 'tutorial' or 'project'
    userId: 'default-user',

    /**
     * Load tutorial definition and parse it
     */
    loadTutorial(tutorialId) {
        const tutorial = this.getTutorialDefinition(tutorialId);
        if (!tutorial) {
            throw new Error(`Tutorial not found: ${tutorialId}`);
        }
        
        if (!validateTutorial(tutorial)) {
            throw new Error(`Invalid tutorial format: ${tutorialId}`);
        }
        
        return tutorial;
    },

    /**
     * Start a tutorial in specified mode
     */
    startTutorial(tutorialId, mode = 'tutorial') {
        try {
            const tutorial = this.loadTutorial(tutorialId);
            
            this.currentTutorial = tutorial;
            this.currentStepIndex = 0;
            this.currentStep = tutorial.steps[0];
            this.tutorialMode = mode;
            
            // Initialize progress tracking
            const progress = createTutorialProgress(tutorialId, tutorial.steps.length);
            StorageService.saveTutorialProgress(this.userId, tutorialId, progress);
            StorageService.saveCurrentTutorialState(this.userId, tutorialId, this.currentStep.id);
            
            // Create initial snapshot
            this.createStepSnapshot();
            
            return {
                tutorial: this.currentTutorial,
                step: this.currentStep,
                stepIndex: this.currentStepIndex,
                mode: this.tutorialMode
            };
        } catch (error) {
            console.error('Error starting tutorial:', error);
            throw error;
        }
    },

    /**
     * Advance to next step
     */
    nextStep() {
        if (!this.currentTutorial || !this.currentStep) {
            throw new Error('No active tutorial');
        }
        
        // Mark current step as completed
        this.markStepCompleted(this.currentStep.id);
        
        // Move to next step
        if (this.currentStepIndex < this.currentTutorial.steps.length - 1) {
            this.currentStepIndex++;
            this.currentStep = this.currentTutorial.steps[this.currentStepIndex];
            
            // Save progress
            StorageService.saveCurrentTutorialState(this.userId, this.currentTutorial.id, this.currentStep.id);
            
            // Create snapshot for new step
            this.createStepSnapshot();
            
            return {
                step: this.currentStep,
                stepIndex: this.currentStepIndex,
                isLastStep: this.currentStepIndex === this.currentTutorial.steps.length - 1
            };
        } else {
            // Tutorial completed
            this.completeTutorial();
            return {
                completed: true,
                tutorial: this.currentTutorial
            };
        }
    },

    /**
     * Go to previous step
     */
    previousStep() {
        if (!this.currentTutorial || this.currentStepIndex <= 0) {
            return null;
        }
        
        this.currentStepIndex--;
        this.currentStep = this.currentTutorial.steps[this.currentStepIndex];
        
        StorageService.saveCurrentTutorialState(this.userId, this.currentTutorial.id, this.currentStep.id);
        
        return {
            step: this.currentStep,
            stepIndex: this.currentStepIndex
        };
    },

    /**
     * Get current step information
     */
    getCurrentStep() {
        if (!this.currentStep) {
            return null;
        }
        
        return {
            step: this.currentStep,
            stepIndex: this.currentStepIndex,
            totalSteps: this.currentTutorial ? this.currentTutorial.steps.length : 0,
            tutorial: this.currentTutorial
        };
    },

    /**
     * Switch between tutorial and project modes
     */
    switchToProjectMode() {
        this.tutorialMode = 'project';
        return this.tutorialMode;
    },

    switchToTutorialMode() {
        this.tutorialMode = 'tutorial';
        return this.tutorialMode;
    },

    /**
     * Pause current tutorial
     */
    pauseTutorial() {
        if (this.currentTutorial && this.currentStep) {
            StorageService.saveCurrentTutorialState(this.userId, this.currentTutorial.id, this.currentStep.id);
        }
    },

    /**
     * Resume tutorial from saved state
     */
    resumeTutorial(tutorialId) {
        const savedState = StorageService.loadCurrentTutorialState(this.userId);
        
        if (savedState && savedState.tutorialId === tutorialId) {
            const tutorial = this.loadTutorial(tutorialId);
            const stepIndex = tutorial.steps.findIndex(step => step.id === savedState.stepId);
            
            if (stepIndex !== -1) {
                this.currentTutorial = tutorial;
                this.currentStepIndex = stepIndex;
                this.currentStep = tutorial.steps[stepIndex];
                
                return {
                    tutorial: this.currentTutorial,
                    step: this.currentStep,
                    stepIndex: this.currentStepIndex,
                    resumed: true
                };
            }
        }
        
        // If no saved state or invalid state, start from beginning
        return this.startTutorial(tutorialId);
    },

    /**
     * Mark step as completed
     */
    markStepCompleted(stepId) {
        if (!this.currentTutorial) return;
        
        const progress = StorageService.loadTutorialProgress(this.userId, this.currentTutorial.id);
        if (progress && !progress.completedSteps.includes(stepId)) {
            progress.completedSteps.push(stepId);
            StorageService.saveTutorialProgress(this.userId, this.currentTutorial.id, progress);
        }
    },

    /**
     * Complete entire tutorial
     */
    completeTutorial() {
        if (!this.currentTutorial) return;
        
        // Mark tutorial as completed
        StorageService.markTutorialComplete(this.userId, this.currentTutorial.id);
        
        // Unlock related tutorials
        if (this.currentTutorial.unlocksTutorials) {
            this.currentTutorial.unlocksTutorials.forEach(tutorialId => {
                StorageService.unlockTutorial(this.userId, tutorialId);
            });
        }
        
        // Clear current tutorial state
        this.currentTutorial = null;
        this.currentStep = null;
        this.currentStepIndex = 0;
    },

    /**
     * Create snapshot for reset functionality
     */
    createStepSnapshot() {
        if (!this.currentTutorial || !this.currentStep) return;
        
        // This would capture current file states - implementation depends on file system
        const fileStates = {}; // TODO: Capture actual file states from FileService
        
        StorageService.createSnapshot(
            this.userId, 
            this.currentTutorial.id, 
            this.currentStep.id, 
            fileStates
        );
    },

    /**
     * Get tutorial definition by ID
     */
    getTutorialDefinition(tutorialId) {
        // This will be replaced with actual tutorial definitions
        const tutorials = this.getAllTutorialDefinitions();
        return tutorials.find(t => t.id === tutorialId);
    },

    /**
     * Get all tutorial definitions
     */
    getAllTutorialDefinitions() {
        return [
            // Navigation Tutorials
            createTutorial(
                'Build a Navigation Bar',
                TutorialCategory.NAVIGATION,
                DifficultyLevel.BEGINNER,
                '15 minutes',
                'Learn to create a responsive navigation bar with HTML and CSS',
                [
                    createTutorialStep(
                        'Create HTML structure',
                        'Add the basic navigation container to your HTML.',
                        'index.html',
                        'body',
                        '<nav class="navbar">\n  <div class="nav-brand">My Site</div>\n  <ul class="nav-links">\n    <li><a href="#home">Home</a></li>\n    <li><a href="#about">About</a></li>\n    <li><a href="#contact">Contact</a></li>\n  </ul>\n</nav>',
                        'The nav element provides semantic structure for navigation.',
                        'Add the nav element inside the body tag.'
                    ),
                    createTutorialStep(
                        'Style the navigation',
                        'Add CSS to make the navigation look professional.',
                        'styles.css',
                        '/* Navigation styles */',
                        '.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background: #333;\n  color: white;\n}',
                        'Flexbox makes it easy to align navigation items.',
                        'Use display: flex to make the navbar a flex container.'
                    ),
                    createTutorialStep(
                        'Style the navigation links',
                        'Make the navigation links look clickable and organized.',
                        'styles.css',
                        '/* Navigation styles */',
                        '.nav-links {\n  display: flex;\n  list-style: none;\n  gap: 2rem;\n  margin: 0;\n  padding: 0;\n}\n\n.nav-links a {\n  color: white;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n\n.nav-links a:hover {\n  color: #4CAF50;\n}',
                        'Remove default list styling and add hover effects.',
                        'Use list-style: none to remove bullet points.'
                    )
                ],
                [],
                ['navbar-responsive']
            ),

            createTutorial(
                'Responsive Navigation',
                TutorialCategory.NAVIGATION,
                DifficultyLevel.INTERMEDIATE,
                '20 minutes',
                'Make your navigation work perfectly on mobile devices',
                [
                    createTutorialStep(
                        'Add mobile menu button',
                        'Create a hamburger menu button for mobile devices.',
                        'index.html',
                        'nav',
                        '<button class="mobile-menu-btn">\n  <span></span>\n  <span></span>\n  <span></span>\n</button>',
                        'Mobile menu buttons help save space on small screens.',
                        'Add the button inside the nav element.'
                    ),
                    createTutorialStep(
                        'Style the hamburger menu',
                        'Make the mobile menu button look like a hamburger icon.',
                        'styles.css',
                        '/* Mobile menu styles */',
                        '.mobile-menu-btn {\n  display: none;\n  flex-direction: column;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n\n.mobile-menu-btn span {\n  width: 25px;\n  height: 3px;\n  background: white;\n  margin: 3px 0;\n  transition: 0.3s;\n}',
                        'The hamburger icon is made of three horizontal lines.',
                        'Use flexbox to stack the spans vertically.'
                    ),
                    createTutorialStep(
                        'Add responsive behavior',
                        'Hide and show navigation elements based on screen size.',
                        'styles.css',
                        '/* Responsive styles */',
                        '@media (max-width: 768px) {\n  .mobile-menu-btn {\n    display: flex;\n  }\n  \n  .nav-links {\n    display: none;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    width: 100%;\n    background: #333;\n    flex-direction: column;\n    padding: 1rem;\n  }\n}',
                        'Media queries let you apply different styles for different screen sizes.',
                        'Use max-width: 768px to target mobile devices.'
                    )
                ],
                ['navbar-basic'],
                ['dropdown-menu']
            ),

            // Layout Tutorials
            createTutorial(
                'Hero Section',
                TutorialCategory.LAYOUT,
                DifficultyLevel.BEGINNER,
                '12 minutes',
                'Create an eye-catching hero section for your website',
                [
                    createTutorialStep(
                        'Create hero HTML',
                        'Add a hero section with heading and call-to-action.',
                        'index.html',
                        'body',
                        '<section class="hero">\n  <div class="hero-content">\n    <h1>Welcome to My Website</h1>\n    <p>Building amazing things with code</p>\n    <button class="cta-button">Get Started</button>\n  </div>\n</section>',
                        'Hero sections grab visitor attention immediately.',
                        'Place the hero section prominently on your page.'
                    ),
                    createTutorialStep(
                        'Style the hero section',
                        'Make the hero section visually appealing with CSS.',
                        'styles.css',
                        '/* Hero styles */',
                        '.hero {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  text-align: center;\n}',
                        'Full viewport height and centering create impact.',
                        'Use min-height: 100vh for full screen height.'
                    ),
                    createTutorialStep(
                        'Style the call-to-action button',
                        'Make the button stand out and look clickable.',
                        'styles.css',
                        '/* Hero styles */',
                        '.cta-button {\n  background: #4CAF50;\n  color: white;\n  border: none;\n  padding: 1rem 2rem;\n  font-size: 1.1rem;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n\n.cta-button:hover {\n  background: #45a049;\n}',
                        'Good buttons have clear visual feedback.',
                        'Use transitions for smooth hover effects.'
                    )
                ]
            ),

            // UI Components Tutorials
            createTutorial(
                'Card Component',
                TutorialCategory.UI_COMPONENTS,
                DifficultyLevel.BEGINNER,
                '10 minutes',
                'Build reusable card components for displaying content',
                [
                    createTutorialStep(
                        'Create card HTML',
                        'Build the basic structure of a content card.',
                        'index.html',
                        'body',
                        '<div class="card">\n  <img src="https://via.placeholder.com/300x200" alt="Card image">\n  <div class="card-content">\n    <h3>Card Title</h3>\n    <p>This is some sample content for the card.</p>\n    <button class="card-button">Learn More</button>\n  </div>\n</div>',
                        'Cards are perfect for organizing related information.',
                        'Include an image, title, description, and action.'
                    ),
                    createTutorialStep(
                        'Style the card',
                        'Add CSS to make the card look professional.',
                        'styles.css',
                        '/* Card styles */',
                        '.card {\n  max-width: 300px;\n  border-radius: 10px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  background: white;\n  transition: transform 0.3s;\n}\n\n.card:hover {\n  transform: translateY(-5px);\n}',
                        'Box shadows and hover effects make cards interactive.',
                        'Use border-radius for rounded corners.'
                    ),
                    createTutorialStep(
                        'Style card content',
                        'Format the text and button inside the card.',
                        'styles.css',
                        '/* Card styles */',
                        '.card img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n\n.card-content {\n  padding: 1.5rem;\n}\n\n.card-button {\n  background: #2196F3;\n  color: white;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 5px;\n  cursor: pointer;\n}',
                        'Consistent padding and styling create visual harmony.',
                        'Use object-fit: cover for responsive images.'
                    )
                ]
            ),

            // Forms Tutorials  
            createTutorial(
                'Contact Form',
                TutorialCategory.FORMS,
                DifficultyLevel.INTERMEDIATE,
                '18 minutes',
                'Create a professional contact form with validation',
                [
                    createTutorialStep(
                        'Create form HTML',
                        'Build the basic structure of a contact form.',
                        'index.html',
                        'body',
                        '<form class="contact-form">\n  <div class="form-group">\n    <label for="name">Name:</label>\n    <input type="text" id="name" name="name" required>\n  </div>\n  <div class="form-group">\n    <label for="email">Email:</label>\n    <input type="email" id="email" name="email" required>\n  </div>\n  <div class="form-group">\n    <label for="message">Message:</label>\n    <textarea id="message" name="message" rows="5" required></textarea>\n  </div>\n  <button type="submit">Send Message</button>\n</form>',
                        'Forms collect user input in an organized way.',
                        'Use proper input types and labels for accessibility.'
                    ),
                    createTutorialStep(
                        'Style the form',
                        'Make the form look clean and professional.',
                        'styles.css',
                        '/* Form styles */',
                        '.contact-form {\n  max-width: 500px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.form-group {\n  margin-bottom: 1.5rem;\n}',
                        'Good forms have clear structure and spacing.',
                        'Use consistent margins for visual rhythm.'
                    ),
                    createTutorialStep(
                        'Style form inputs',
                        'Make the input fields look modern and accessible.',
                        'styles.css',
                        '/* Form styles */',
                        '.form-group label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: #333;\n}\n\n.form-group input,\n.form-group textarea {\n  width: 100%;\n  padding: 0.75rem;\n  border: 2px solid #ddd;\n  border-radius: 5px;\n  font-size: 1rem;\n}\n\n.form-group input:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #4CAF50;\n}',
                        'Focus states help users understand where they are.',
                        'Use consistent padding and border styles.'
                    )
                ]
            ),

            // JavaScript Features Tutorials
            createTutorial(
                'Interactive Button',
                TutorialCategory.JAVASCRIPT_FEATURES,
                DifficultyLevel.BEGINNER,
                '8 minutes',
                'Add interactivity to your website with JavaScript',
                [
                    createTutorialStep(
                        'Create button HTML',
                        'Add a button that we can make interactive.',
                        'index.html',
                        'body',
                        '<button id="interactive-btn" class="interactive-button">Click Me!</button>\n<p id="click-count">Clicks: 0</p>',
                        'Interactive elements make websites engaging.',
                        'Use IDs to target elements with JavaScript.'
                    ),
                    createTutorialStep(
                        'Add click functionality',
                        'Use JavaScript to respond to button clicks.',
                        'script.js',
                        '// Interactive button code',
                        'let clickCount = 0;\nconst button = document.getElementById(\'interactive-btn\');\nconst counter = document.getElementById(\'click-count\');\n\nbutton.addEventListener(\'click\', function() {\n  clickCount++;\n  counter.textContent = `Clicks: ${clickCount}`;\n  \n  if (clickCount === 5) {\n    button.textContent = \'Great job!\';\n    button.style.background = \'#4CAF50\';\n  }\n});',
                        'Event listeners let you respond to user actions.',
                        'Use addEventListener to handle click events.'
                    )
                ]
            )
        ];
    }
};

// Legacy TutorialService for backward compatibility
const TutorialService = {
    listTutorials() {
        return TutorialEngine.getAllTutorialDefinitions();
    },

    getTutorial(tutorialId) {
        return TutorialEngine.getTutorialDefinition(tutorialId);
    }
};
