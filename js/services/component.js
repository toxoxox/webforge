/**
 * Component Service - Manages the component forge system
 */

const ComponentService = {
    // Component data
    components: [],
    filteredComponents: [],
    currentFilters: {
        type: 'all',
        difficulty: 'all',
        js: 'all',
        mobile: 'all'
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
     * Load component definitions
     */
    loadComponents() {
        this.components = [
            // Navigation Components
            {
                id: 'responsive-navbar',
                name: 'Responsive Navbar',
                type: 'navigation',
                difficulty: 'intermediate',
                hasJS: true,
                mobileFirst: true,
                tags: ['Responsive', 'Mobile-first', 'Flexbox'],
                description: 'Learn to build a responsive navigation bar with mobile toggle from scratch.',
                preview: this.generateNavbarPreview(),
                workshop: {
                    goal: 'Build a professional navigation bar that works on all devices',
                    duration: '25 minutes',
                    steps: [
                        {
                            title: 'Let\'s Make a Menu Bar!',
                            description: 'We\'re going to make the menu bar you see at the top of websites. It\'s like the menu at a restaurant - it shows you all the places you can go!',
                            instruction: 'First, we need to tell the computer we\'re making a menu. Type this code in your HTML file:',
                            code: `<nav class="navbar">
  <div class="nav-brand">My Website</div>
</nav>`,
                            codeFile: 'index.html',
                            tip: 'The <nav> tag is like a sign that says "This is a menu!" to the computer.',
                            explanation: 'Think of <nav> like a lunchbox - it holds all your menu items together in one place!'
                        },
                        {
                            title: 'Add Menu Buttons',
                            description: 'Now let\'s add the buttons people can click on. These are like different rooms in your house - Home, About, Contact!',
                            instruction: 'Add these menu links inside your navbar (between the <nav> tags):',
                            code: `<ul class="nav-menu">
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>`,
                            codeFile: 'index.html',
                            tip: 'The <ul> tag makes a list, and each <li> is one item in that list - like a shopping list!',
                            explanation: 'Each <a> tag is a clickable link. When someone clicks it, they go to that page!'
                        },
                        {
                            title: 'Make It Look Pretty!',
                            description: 'Right now our menu looks boring. Let\'s paint it and make it look nice!',
                            instruction: 'Go to your CSS file and add this styling:',
                            code: `.navbar {
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
}`,
                            codeFile: 'styles.css',
                            tip: 'CSS is like choosing what clothes to wear - it makes things look good!',
                            explanation: 'background-color is like painting a wall. We picked dark gray (#333) and white text so it\'s easy to read!'
                        },
                        {
                            title: 'Line Up the Menu Items',
                            description: 'Let\'s make the menu items sit next to each other in a nice row, like kids sitting on a bench!',
                            instruction: 'Add this CSS to make the menu items line up:',
                            code: `.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-menu a {
  color: white;
  text-decoration: none;
}`,
                            codeFile: 'styles.css',
                            tip: 'display: flex makes things sit in a row. gap: 2rem puts space between them so they\'re not squished!',
                            explanation: 'list-style: none removes the bullet points. We don\'t need them for a menu!'
                        },
                        {
                            title: 'Make It Work on Phones!',
                            description: 'Phones have small screens, so we need to make our menu work on tiny screens too!',
                            instruction: 'Add this special code that only works on small screens:',
                            code: `@media (max-width: 768px) {
  .nav-menu {
    flex-direction: column;
  }
}`,
                            codeFile: 'styles.css',
                            tip: '@media is like a magic spell that only works when the screen is small!',
                            explanation: 'flex-direction: column makes items stack on top of each other instead of side-by-side. Perfect for phones!'
                        }
                    ],
                    learningObjectives: [
                        'Learn what a navigation bar is and why websites need them',
                        'Understand how to use HTML tags like <nav>, <ul>, and <a>',
                        'Make things look pretty with CSS colors and spacing',
                        'Learn how to make websites work on phones (responsive design)',
                        'Understand what Flexbox does (makes things line up nicely)'
                    ]
                },
                useCases: [
                    {
                        title: 'School Projects',
                        description: 'Perfect for student portfolio sites and class assignments'
                    },
                    {
                        title: 'Small Business Sites',
                        description: 'Professional navigation for local business websites'
                    },
                    {
                        title: 'Personal Blogs',
                        description: 'Clean navigation for personal websites and blogs'
                    }
                ]
            },

            {
                id: 'hero-section',
                name: 'Hero Section',
                type: 'layout',
                difficulty: 'beginner',
                hasJS: false,
                mobileFirst: true,
                tags: ['No JS', 'Responsive', 'Flexbox'],
                description: 'Eye-catching hero section with call-to-action button for landing pages.',
                preview: this.generateHeroPreview(),
                html: `<section class="hero">
  <div class="hero-content">
    <h1 class="hero-title">Welcome to My Website</h1>
    <p class="hero-subtitle">Building amazing things with code</p>
    <button class="hero-cta">Get Started</button>
  </div>
</section>`,
                css: `.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 2rem;
}

.hero-content {
  max-width: 600px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.5;
}

.hero-cta {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
}

.hero-cta:hover {
  background: #45a049;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-cta {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
}`,
                js: null,
                explanation: {
                    title: 'Under the Hood',
                    points: [
                        'Full viewport height using min-height: 100vh',
                        'Flexbox centers content both horizontally and vertically',
                        'CSS gradients create the background effect',
                        'Responsive typography scales on mobile devices',
                        'Hover effects provide visual feedback'
                    ]
                },
                useCases: [
                    {
                        title: 'Landing Pages',
                        description: 'Perfect first impression for business or personal sites'
                    },
                    {
                        title: 'Portfolio Headers',
                        description: 'Showcase your name and skills prominently'
                    },
                    {
                        title: 'Product Pages',
                        description: 'Highlight your main product or service offering'
                    }
                ]
            },

            {
                id: 'card-component',
                name: 'Card Component',
                type: 'ui-elements',
                difficulty: 'beginner',
                hasJS: false,
                mobileFirst: true,
                tags: ['No JS', 'Responsive', 'Flexbox'],
                description: 'Versatile card component for displaying content with image, title, and action.',
                preview: this.generateCardPreview(),
                html: `<div class="card">
  <img src="https://via.placeholder.com/300x200" alt="Card image" class="card-image">
  <div class="card-content">
    <h3 class="card-title">Card Title</h3>
    <p class="card-description">This is some sample content for the card. It can contain any type of information you want to display.</p>
    <button class="card-button">Learn More</button>
  </div>
</div>`,
                css: `.card {
  max-width: 300px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 1rem 0;
}

.card-description {
  color: #666;
  line-height: 1.5;
  margin: 0 0 1.5rem 0;
}

.card-button {
  background: #2196F3;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
  width: 100%;
}

.card-button:hover {
  background: #1976D2;
}

@media (max-width: 768px) {
  .card {
    max-width: 100%;
  }
}`,
                js: null,
                explanation: {
                    title: 'Forging Notes',
                    points: [
                        'Box shadow creates depth and visual hierarchy',
                        'Object-fit: cover ensures images maintain aspect ratio',
                        'Hover transforms provide interactive feedback',
                        'Flexible content area adapts to different text lengths',
                        'Mobile-responsive design works on all screen sizes'
                    ]
                },
                useCases: [
                    {
                        title: 'Product Showcases',
                        description: 'Display products, services, or portfolio items'
                    },
                    {
                        title: 'Blog Post Previews',
                        description: 'Show article summaries with featured images'
                    },
                    {
                        title: 'Team Member Profiles',
                        description: 'Present team members with photos and bios'
                    }
                ]
            },

            {
                id: 'contact-form',
                name: 'Contact Form',
                type: 'forms',
                difficulty: 'intermediate',
                hasJS: true,
                mobileFirst: true,
                tags: ['Responsive', 'Validation', 'Accessible'],
                description: 'Professional contact form with validation and user feedback.',
                preview: this.generateFormPreview(),
                html: `<form class="contact-form" id="contact-form">
  <div class="form-group">
    <label for="name">Name *</label>
    <input type="text" id="name" name="name" required>
    <span class="error-message" id="name-error"></span>
  </div>
  
  <div class="form-group">
    <label for="email">Email *</label>
    <input type="email" id="email" name="email" required>
    <span class="error-message" id="email-error"></span>
  </div>
  
  <div class="form-group">
    <label for="subject">Subject</label>
    <input type="text" id="subject" name="subject">
  </div>
  
  <div class="form-group">
    <label for="message">Message *</label>
    <textarea id="message" name="message" rows="5" required></textarea>
    <span class="error-message" id="message-error"></span>
  </div>
  
  <button type="submit" class="submit-btn">
    <span class="btn-text">Send Message</span>
    <span class="btn-loading hidden">Sending...</span>
  </button>
  
  <div class="form-status" id="form-status"></div>
</form>`,
                css: `.contact-form {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4CAF50;
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
}

.form-group input.error,
.form-group textarea.error {
  border-color: #f44336;
}

.error-message {
  display: block;
  color: #f44336;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  min-height: 1.2rem;
}

.submit-btn {
  width: 100%;
  background: #4CAF50;
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.submit-btn:hover:not(:disabled) {
  background: #45a049;
  transform: translateY(-1px);
}

.submit-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  transform: none;
}

.btn-loading {
  display: none;
}

.submit-btn.loading .btn-text {
  display: none;
}

.submit-btn.loading .btn-loading {
  display: inline;
}

.form-status {
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 5px;
  text-align: center;
  font-weight: 500;
  display: none;
}

.form-status.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  display: block;
}

.form-status.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  display: block;
}

@media (max-width: 768px) {
  .contact-form {
    margin: 1rem;
    padding: 1.5rem;
  }
}`,
                js: `// Contact form validation and submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const submitBtn = form.querySelector('.submit-btn');
  const formStatus = document.getElementById('form-status');
  
  // Validation rules
  const validators = {
    name: (value) => {
      if (!value.trim()) return 'Name is required';
      if (value.trim().length < 2) return 'Name must be at least 2 characters';
      return null;
    },
    email: (value) => {
      if (!value.trim()) return 'Email is required';
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (!emailRegex.test(value)) return 'Please enter a valid email address';
      return null;
    },
    message: (value) => {
      if (!value.trim()) return 'Message is required';
      if (value.trim().length < 10) return 'Message must be at least 10 characters';
      return null;
    }
  };
  
  // Validate field
  function validateField(field) {
    const value = field.value;
    const fieldName = field.name;
    const errorElement = document.getElementById(fieldName + '-error');
    
    if (validators[fieldName]) {
      const error = validators[fieldName](value);
      
      if (error) {
        field.classList.add('error');
        errorElement.textContent = error;
        return false;
      } else {
        field.classList.remove('error');
        errorElement.textContent = '';
        return true;
      }
    }
    return true;
  }
  
  // Add real-time validation
  ['name', 'email', 'message'].forEach(fieldName => {
    const field = document.getElementById(fieldName);
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) {
        validateField(field);
      }
    });
  });
  
  // Handle form submission
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Validate all fields
    const fields = ['name', 'email', 'message'];
    let isValid = true;
    
    fields.forEach(fieldName => {
      const field = document.getElementById(fieldName);
      if (!validateField(field)) {
        isValid = false;
      }
    });
    
    if (!isValid) {
      showStatus('Please fix the errors above', 'error');
      return;
    }
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    formStatus.style.display = 'none';
    
    try {
      // Simulate form submission (replace with actual endpoint)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success
      showStatus('Message sent successfully! We\\'ll get back to you soon.', 'success');
      form.reset();
      
    } catch (error) {
      // Error
      showStatus('Failed to send message. Please try again.', 'error');
    } finally {
      // Reset button state
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
    }
  });
  
  function showStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = \`form-status \${type}\`;
    formStatus.style.display = 'block';
  }
});`,
                explanation: {
                    title: 'How It Works',
                    points: [
                        'Real-time validation provides immediate feedback',
                        'Accessible form structure with proper labels',
                        'Loading states prevent double submissions',
                        'Error handling for both client and server issues',
                        'Responsive design works on all devices'
                    ]
                },
                useCases: [
                    {
                        title: 'Business Websites',
                        description: 'Let customers reach out with inquiries and feedback'
                    },
                    {
                        title: 'Portfolio Sites',
                        description: 'Enable potential clients to contact you directly'
                    },
                    {
                        title: 'Event Pages',
                        description: 'Collect RSVPs and questions from attendees'
                    }
                ]
            },

            {
                id: 'interactive-button',
                name: 'Interactive Button',
                type: 'interactions',
                difficulty: 'beginner',
                hasJS: true,
                mobileFirst: false,
                tags: ['JavaScript', 'Animation', 'Counter'],
                description: 'Engaging button with click counter and visual feedback effects.',
                preview: this.generateButtonPreview(),
                html: `<div class="button-demo">
  <button id="interactive-btn" class="interactive-button">
    Click Me!
  </button>
  <p class="click-counter">
    Clicks: <span id="click-count">0</span>
  </p>
</div>`,
                css: `.button-demo {
  text-align: center;
  padding: 2rem;
}

.interactive-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  position: relative;
  overflow: hidden;
}

.interactive-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.interactive-button:active {
  transform: translateY(0);
}

.interactive-button.clicked {
  animation: button-pulse 0.6s ease-out;
}

.interactive-button.success {
  background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.4);
}

@keyframes button-pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.click-counter {
  margin-top: 1.5rem;
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
}

#click-count {
  color: #667eea;
  font-weight: 700;
  font-size: 1.2rem;
}`,
                js: `// Interactive button functionality
document.addEventListener('DOMContentLoaded', function() {
  let clickCount = 0;
  const button = document.getElementById('interactive-btn');
  const counter = document.getElementById('click-count');
  
  button.addEventListener('click', function() {
    clickCount++;
    counter.textContent = clickCount;
    
    // Add click animation
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 600);
    
    // Special effects at milestones
    if (clickCount === 5) {
      button.textContent = 'Great job!';
      button.classList.add('success');
    } else if (clickCount === 10) {
      button.textContent = 'Amazing!';
      createConfetti();
    } else if (clickCount === 15) {
      button.textContent = 'You\\'re unstoppable!';
    }
  });
  
  // Simple confetti effect
  function createConfetti() {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.style.cssText = \`
          position: fixed;
          width: 10px;
          height: 10px;
          background: \${['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'][Math.floor(Math.random() * 5)]};
          left: \${Math.random() * 100}vw;
          top: -10px;
          border-radius: 50%;
          pointer-events: none;
          animation: confetti-fall 3s linear forwards;
          z-index: 1000;
        \`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
          confetti.remove();
        }, 3000);
      }, i * 100);
    }
  }
  
  // Add confetti animation
  const style = document.createElement('style');
  style.textContent = \`
    @keyframes confetti-fall {
      to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
      }
    }
  \`;
  document.head.appendChild(style);
});`,
                explanation: {
                    title: 'Under the Hood',
                    points: [
                        'Event listeners handle user interactions',
                        'CSS animations provide visual feedback',
                        'JavaScript counters track user engagement',
                        'Dynamic content updates based on milestones',
                        'Confetti effect uses DOM manipulation'
                    ]
                },
                useCases: [
                    {
                        title: 'Gamification',
                        description: 'Add engaging elements to increase user interaction'
                    },
                    {
                        title: 'Learning Apps',
                        description: 'Provide feedback and rewards for student progress'
                    },
                    {
                        title: 'Marketing Pages',
                        description: 'Create memorable interactions that users want to share'
                    }
                ]
            }
        ];

        this.filteredComponents = [...this.components];
    },

    /**
     * Setup filter event listeners
     */
    setupFilters() {
        // Type filters
        document.querySelectorAll('[data-filter]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.closest('[data-filter]').dataset.filter;
                this.setFilter('type', filter);
                this.updateFilterButtons(e.target.closest('[data-filter]'), '[data-filter]');
            });
        });

        // Difficulty filters
        document.querySelectorAll('[data-difficulty]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.closest('[data-difficulty]').dataset.difficulty;
                this.setFilter('difficulty', filter);
                this.updateFilterButtons(e.target.closest('[data-difficulty]'), '[data-difficulty]');
            });
        });

        // JS filters
        document.querySelectorAll('[data-js]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.closest('[data-js]').dataset.js;
                this.setFilter('js', filter);
                this.updateFilterButtons(e.target.closest('[data-js]'), '[data-js]');
            });
        });

        // Mobile filters
        document.querySelectorAll('[data-mobile]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.closest('[data-mobile]').dataset.mobile;
                this.setFilter('mobile', filter);
                this.updateFilterButtons(e.target.closest('[data-mobile]'), '[data-mobile]');
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
            // Type filter
            if (this.currentFilters.type !== 'all' && component.type !== this.currentFilters.type) {
                return false;
            }

            // Difficulty filter
            if (this.currentFilters.difficulty !== 'all' && component.difficulty !== this.currentFilters.difficulty) {
                return false;
            }

            // JS filter
            if (this.currentFilters.js === 'no-js' && component.hasJS) {
                return false;
            }
            if (this.currentFilters.js === 'with-js' && !component.hasJS) {
                return false;
            }

            // Mobile filter
            if (this.currentFilters.mobile === 'mobile-first' && !component.mobileFirst) {
                return false;
            }

            return true;
        });
    },

    /**
     * Render the component gallery
     */
    renderGallery() {
        const gallery = document.getElementById('component-gallery');
        
        if (this.filteredComponents.length === 0) {
            gallery.innerHTML = `
                <div class="component-gallery-empty">
                    <h3>No components found</h3>
                    <p>Try adjusting your filters to see more components.</p>
                </div>
            `;
            return;
        }

        gallery.innerHTML = this.filteredComponents.map(component => `
            <div class="component-card" data-component="${component.id}">
                <div class="component-preview">
                    ${component.preview}
                </div>
                <div class="component-info">
                    <div class="component-header">
                        <h3 class="component-title">${component.name}</h3>
                        <span class="component-difficulty ${component.difficulty}">${component.difficulty}</span>
                    </div>
                    <div class="component-tags">
                        ${component.tags.map(tag => `
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
        `).join('');

        // Re-initialize Lucide icons
        lucide.createIcons();
    },

    /**
     * Generate preview HTML for components
     */
    generateNavbarPreview() {
        return `
            <div class="component-preview-placeholder">
                <div style="background: #333; color: white; padding: 0.5rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem;">
                    <span style="font-weight: bold;">My Site</span>
                    <div style="display: flex; gap: 1rem;">
                        <span>Home</span>
                        <span>About</span>
                        <span>Contact</span>
                    </div>
                </div>
            </div>
        `;
    },

    generateHeroPreview() {
        return `
            <div class="component-preview-placeholder">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center;">
                    <h3 style="margin: 0 0 0.5rem 0; font-size: 1.2rem;">Welcome to My Website</h3>
                    <p style="margin: 0 0 1rem 0; font-size: 0.9rem; opacity: 0.9;">Building amazing things</p>
                    <button style="background: #4CAF50; color: white; border: none; padding: 0.5rem 1rem; border-radius: 3px; font-size: 0.8rem;">Get Started</button>
                </div>
            </div>
        `;
    },

    generateCardPreview() {
        return `
            <div class="component-preview-placeholder">
                <div style="background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden; max-width: 200px; margin: 1rem auto;">
                    <div style="background: #e2e8f0; height: 80px;"></div>
                    <div style="padding: 1rem;">
                        <h4 style="margin: 0 0 0.5rem 0; font-size: 0.9rem;">Card Title</h4>
                        <p style="margin: 0 0 0.75rem 0; font-size: 0.7rem; color: #666;">Sample content...</p>
                        <button style="background: #2196F3; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 3px; font-size: 0.7rem; width: 100%;">Learn More</button>
                    </div>
                </div>
            </div>
        `;
    },

    generateFormPreview() {
        return `
            <div class="component-preview-placeholder">
                <div style="background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); max-width: 250px; margin: 0.5rem auto;">
                    <div style="margin-bottom: 0.75rem;">
                        <label style="display: block; font-size: 0.7rem; margin-bottom: 0.25rem; font-weight: 500;">Name</label>
                        <div style="background: #f8f9fa; border: 1px solid #ddd; height: 20px; border-radius: 3px;"></div>
                    </div>
                    <div style="margin-bottom: 0.75rem;">
                        <label style="display: block; font-size: 0.7rem; margin-bottom: 0.25rem; font-weight: 500;">Email</label>
                        <div style="background: #f8f9fa; border: 1px solid #ddd; height: 20px; border-radius: 3px;"></div>
                    </div>
                    <div style="margin-bottom: 0.75rem;">
                        <label style="display: block; font-size: 0.7rem; margin-bottom: 0.25rem; font-weight: 500;">Message</label>
                        <div style="background: #f8f9fa; border: 1px solid #ddd; height: 40px; border-radius: 3px;"></div>
                    </div>
                    <button style="background: #4CAF50; color: white; border: none; padding: 0.5rem; border-radius: 3px; font-size: 0.7rem; width: 100%;">Send Message</button>
                </div>
            </div>
        `;
    },

    generateButtonPreview() {
        return `
            <div class="component-preview-placeholder">
                <div style="text-align: center; padding: 2rem;">
                    <button style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 25px; font-size: 0.9rem; font-weight: 600; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">Click Me!</button>
                    <p style="margin-top: 1rem; font-size: 0.8rem; color: #666;">Clicks: <span style="color: #667eea; font-weight: 700;">0</span></p>
                </div>
            </div>
        `;
    },

    /**
     * Start a component building workshop
     */
    startWorkshop(componentId) {
        const component = this.components.find(c => c.id === componentId);
        if (!component || !component.workshop) {
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

        localStorage.setItem('webforge-workshop-start', JSON.stringify(workshopData));
        
        // Navigate to editor in workshop mode
        window.location.href = 'editor.html?mode=workshop&component=' + componentId;
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
     * Show component detail modal
     */
    showComponentModal(component) {
        // Create modal HTML
        const modalHTML = `
            <div class="modal-overlay" id="component-modal-overlay">
                <div class="modal component-modal" id="component-modal">
                    <div class="component-modal-header">
                        <h2 class="component-modal-title">${component.name}</h2>
                        <p class="component-modal-description">${component.description}</p>
                    </div>
                    
                    <div class="component-modal-content">
                        <div class="component-workbench">
                            <div class="workbench-header">
                                <span class="workbench-title">Live Preview</span>
                                <div class="preview-controls">
                                    <button class="preview-control-btn active" data-view="desktop">
                                        <i data-lucide="monitor"></i>
                                    </button>
                                    <button class="preview-control-btn" data-view="mobile">
                                        <i data-lucide="smartphone"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="component-preview-large" id="component-preview-large">
                                ${this.generateFullPreview(component)}
                            </div>
                        </div>
                        
                        <div class="component-sidebar">
                            <div class="sidebar-tabs">
                                <button class="sidebar-tab active" data-tab="html">HTML</button>
                                <button class="sidebar-tab" data-tab="css">CSS</button>
                                ${component.js ? '<button class="sidebar-tab" data-tab="js">JS</button>' : ''}
                            </div>
                            
                            <div class="sidebar-content">
                                <div class="code-panel active" data-panel="html">
                                    <div class="code-header">
                                        <span class="code-language">HTML</span>
                                        <div class="code-actions">
                                            <button class="code-action-btn" onclick="ComponentService.copyToClipboard('${component.id}', 'html')">
                                                <i data-lucide="copy"></i>
                                                Copy
                                            </button>
                                            <button class="code-action-btn primary" onclick="ComponentService.sendToEditor('${component.id}', 'html')">
                                                <i data-lucide="plus"></i>
                                                Use in WebForge
                                            </button>
                                        </div>
                                    </div>
                                    <div class="code-block">
                                        <pre><code>${this.escapeHtml(component.html)}</code></pre>
                                    </div>
                                </div>
                                
                                <div class="code-panel" data-panel="css">
                                    <div class="code-header">
                                        <span class="code-language">CSS</span>
                                        <div class="code-actions">
                                            <button class="code-action-btn" onclick="ComponentService.copyToClipboard('${component.id}', 'css')">
                                                <i data-lucide="copy"></i>
                                                Copy
                                            </button>
                                            <button class="code-action-btn primary" onclick="ComponentService.sendToEditor('${component.id}', 'css')">
                                                <i data-lucide="plus"></i>
                                                Use in WebForge
                                            </button>
                                        </div>
                                    </div>
                                    <div class="code-block">
                                        <pre><code>${this.escapeHtml(component.css)}</code></pre>
                                    </div>
                                </div>
                                
                                ${component.js ? `
                                <div class="code-panel" data-panel="js">
                                    <div class="code-header">
                                        <span class="code-language">JavaScript</span>
                                        <div class="code-actions">
                                            <button class="code-action-btn" onclick="ComponentService.copyToClipboard('${component.id}', 'js')">
                                                <i data-lucide="copy"></i>
                                                Copy
                                            </button>
                                            <button class="code-action-btn primary" onclick="ComponentService.sendToEditor('${component.id}', 'js')">
                                                <i data-lucide="plus"></i>
                                                Use in WebForge
                                            </button>
                                        </div>
                                    </div>
                                    <div class="code-block">
                                        <pre><code>${this.escapeHtml(component.js)}</code></pre>
                                    </div>
                                </div>
                                ` : ''}
                                
                                <div class="explanation-panel">
                                    <button class="explanation-toggle" onclick="ComponentService.toggleExplanation()">
                                        <h3>${component.explanation.title}</h3>
                                        <i data-lucide="chevron-down"></i>
                                    </button>
                                    <div class="explanation-content" id="explanation-content">
                                        <ul>
                                            ${component.explanation.points.map(point => `<li>${point}</li>`).join('')}
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="use-cases-panel">
                                    <h3>Common Use Cases</h3>
                                    <div class="use-cases-list">
                                        ${component.useCases.map(useCase => `
                                            <div class="use-case">
                                                <div class="use-case-title">${useCase.title}</div>
                                                <div class="use-case-description">${useCase.description}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <button class="btn cancel-btn" onclick="ComponentService.closeModal()" style="position: absolute; top: 1rem; right: 1rem;">
                        <i data-lucide="x"></i>
                    </button>
                </div>
            </div>
        `;

        // Add modal to page
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Initialize modal functionality
        this.initializeModal();
        
        // Re-initialize Lucide icons
        lucide.createIcons();
    },

    /**
     * Initialize modal functionality
     */
    initializeModal() {
        // Tab switching
        document.querySelectorAll('.sidebar-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const tabName = e.target.dataset.tab;
                
                // Update tab states
                document.querySelectorAll('.sidebar-tab').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                
                // Update panel states
                document.querySelectorAll('.code-panel').forEach(panel => {
                    panel.classList.remove('active');
                });
                document.querySelector(`[data-panel="${tabName}"]`).classList.add('active');
            });
        });

        // Preview controls
        document.querySelectorAll('.preview-control-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const view = e.target.closest('.preview-control-btn').dataset.view;
                
                // Update button states
                document.querySelectorAll('.preview-control-btn').forEach(b => b.classList.remove('active'));
                e.target.closest('.preview-control-btn').classList.add('active');
                
                // Update preview size
                const preview = document.getElementById('component-preview-large');
                if (view === 'mobile') {
                    preview.style.maxWidth = '375px';
                    preview.style.margin = '1rem auto';
                } else {
                    preview.style.maxWidth = 'none';
                    preview.style.margin = '1rem';
                }
            });
        });

        // Close modal on overlay click
        document.getElementById('component-modal-overlay').addEventListener('click', (e) => {
            if (e.target.id === 'component-modal-overlay') {
                this.closeModal();
            }
        });
    },

    /**
     * Generate full preview for modal (using sample finished code)
     */
    generateFullPreview(component) {
        // For workshop components, show a sample of what they'll build
        const sampleHTML = this.getSampleHTML(component.id);
        const sampleCSS = this.getSampleCSS(component.id);
        const sampleJS = this.getSampleJS(component.id);
        
        const previewHTML = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
                    ${sampleCSS}
                </style>
            </head>
            <body>
                ${sampleHTML}
                ${sampleJS ? `<script>${sampleJS}<\/script>` : ''}
            </body>
            </html>
        `;
        
        // Escape only quotes for srcdoc attribute, not HTML tags
        const escapedHTML = previewHTML.replace(/"/g, '&quot;');
        return `<iframe srcdoc="${escapedHTML}"></iframe>`;
    },

    /**
     * Get sample HTML for preview (what students will build)
     */
    getSampleHTML(componentId) {
        const samples = {
            'responsive-navbar': `<nav class="navbar">
  <div class="nav-brand">
    <span>My Site</span>
  </div>
  <button class="nav-toggle" id="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <ul class="nav-menu" id="nav-menu">
    <li><a href="#home" class="nav-link">Home</a></li>
    <li><a href="#about" class="nav-link">About</a></li>
    <li><a href="#services" class="nav-link">Services</a></li>
    <li><a href="#contact" class="nav-link">Contact</a></li>
  </ul>
</nav>`,
            'hero-section': `<section class="hero">
  <div class="hero-content">
    <h1 class="hero-title">Welcome to My Website</h1>
    <p class="hero-subtitle">Building amazing things with code</p>
    <button class="hero-cta">Get Started</button>
  </div>
</section>`,
            'card-component': `<div class="card">
  <img src="https://via.placeholder.com/300x200" alt="Card image" class="card-image">
  <div class="card-content">
    <h3 class="card-title">Card Title</h3>
    <p class="card-description">This is what you'll learn to build in the workshop.</p>
    <button class="card-button">Learn More</button>
  </div>
</div>`
        };
        
        return samples[componentId] || '<div>Component preview not available</div>';
    },

    /**
     * Get sample CSS for preview
     */
    getSampleCSS(componentId) {
        const samples = {
            'responsive-navbar': `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
  color: white;
  position: relative;
}

.nav-brand {
  font-weight: bold;
  font-size: 1.2rem;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background: white;
  margin: 3px 0;
  transition: 0.3s;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #4CAF50;
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }
  
  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #333;
    flex-direction: column;
    padding: 1rem 2rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  
  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .nav-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .nav-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .nav-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
}`,
            'hero-section': `.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 2rem;
}

.hero-content {
  max-width: 600px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-cta {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero-cta:hover {
  background: #45a049;
  transform: translateY(-2px);
}`,
            'card-component': `.card {
  max-width: 300px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 1rem 0;
}

.card-description {
  color: #666;
  line-height: 1.5;
  margin: 0 0 1.5rem 0;
}

.card-button {
  background: #2196F3;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
  width: 100%;
}

.card-button:hover {
  background: #1976D2;
}`
        };
        
        return samples[componentId] || '';
    },

    /**
     * Get sample JavaScript for preview
     */
    getSampleJS(componentId) {
        const samples = {
            'responsive-navbar': `document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
});`
        };
        
        return samples[componentId] || null;
    },

    /**
     * Toggle explanation panel
     */
    toggleExplanation() {
        const toggle = document.querySelector('.explanation-toggle');
        const content = document.getElementById('explanation-content');
        const icon = toggle.querySelector('i');
        
        toggle.classList.toggle('expanded');
        content.classList.toggle('expanded');
    },

    /**
     * Copy specific code type to clipboard
     */
    async copyToClipboard(componentId, type) {
        const component = this.components.find(c => c.id === componentId);
        if (!component) return;

        let code = '';
        switch (type) {
            case 'html':
                code = component.html;
                break;
            case 'css':
                code = component.css;
                break;
            case 'js':
                code = component.js || '';
                break;
        }

        try {
            await navigator.clipboard.writeText(code);
            this.showToast(`${type.toUpperCase()} copied to clipboard!`, 'success');
        } catch (err) {
            console.error('Failed to copy code:', err);
            this.showToast('Failed to copy code', 'error');
        }
    },

    /**
     * Send code to WebForge editor
     */
    sendToEditor(componentId, type) {
        const component = this.components.find(c => c.id === componentId);
        if (!component) return;

        // Store component data for editor
        const componentData = {
            id: componentId,
            name: component.name,
            type: type,
            code: type === 'html' ? component.html : type === 'css' ? component.css : component.js
        };

        localStorage.setItem('webforge-component-import', JSON.stringify(componentData));
        
        // Navigate to editor
        window.location.href = 'editor.html?import=component';
    },

    /**
     * Close modal
     */
    closeModal() {
        const modal = document.getElementById('component-modal-overlay');
        if (modal) {
            modal.remove();
        }
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
     * Get a specific component by ID
     */
    getComponent(componentId) {
        return this.components.find(c => c.id === componentId);
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