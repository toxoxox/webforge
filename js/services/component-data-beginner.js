/**
 * Beginner Component Data - Easy components for students starting web development
 * These components focus on HTML and CSS fundamentals with minimal JavaScript
 */

const BeginnerComponentData = {
    components: [
        // Basic Layout Components (HTML/CSS Only)
        {
            id: 'responsive-navbar',
            name: 'Navigation Bar with Dropdown',
            type: 'navigation',
            difficulty: 'beginner',
            hasJS: false,
            mobileFirst: false,
            tags: ['Beginner-Friendly', 'Flexbox', 'CSS-Only'],
            description: 'Build a professional navigation bar with logo, styled links, and dropdown menus. 15 easy-to-follow steps break down each concept.',
            preview: `<div class="component-preview-placeholder">
                <div style="background: #2c3e50; color: white; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; border-radius: 8px;">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 40px; height: 40px; background: #667eea; border-radius: 8px;"></div>
                        <span style="font-weight: 600; font-size: 1.5rem;">My Website</span>
                    </div>
                    <ul style="display: flex; list-style: none; gap: 2rem; margin: 0; padding: 0;">
                        <li><a href="#" style="color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px; background: rgba(255,255,255,0.1);">Home</a></li>
                        <li><a href="#" style="color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px;">About</a></li>
                        <li><a href="#" style="color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px;">Services</a></li>
                        <li><a href="#" style="color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px;">Contact</a></li>
                    </ul>
                </div>
            </div>`,
            workshop: {
                goal: 'Build a professional navigation bar with logo and dropdown menu',
                duration: '40 minutes',
                learningObjectives: [
                    'Learn HTML semantic elements (nav, ul, li)',
                    'Understand CSS Flexbox for layout',
                    'Master hover effects and transitions',
                    'Create dropdown menus with CSS positioning'
                ]
            },
            useCases: [
                { title: 'School Projects', description: 'Perfect for student portfolio sites and class assignments' },
                { title: 'Small Business Sites', description: 'Professional navigation for local business websites' },
                { title: 'Personal Blogs', description: 'Clean navigation for personal websites and blogs' }
            ]
        },

        {
            id: 'hero-section',
            name: 'Hero Section',
            type: 'layout',
            difficulty: 'beginner',
            hasJS: false,
            mobileFirst: false,
            tags: ['Beginner-Friendly', 'Flexbox', 'CSS-Only'],
            description: 'Eye-catching hero section with gradient background and call-to-action button. Perfect for landing pages!',
            preview: `<div class="component-preview-placeholder">
                <div style="min-height: 200px; padding: 2rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px;">
                    <div style="flex: 1; color: white;">
                        <h1 style="margin: 0 0 1rem 0; font-size: 2rem; font-weight: 800; line-height: 1.2;">Hi, I'm Learning to Code!</h1>
                        <p style="margin: 0 0 1.5rem 0; font-size: 1rem; opacity: 0.95; line-height: 1.5;">Building awesome websites and having fun with web development</p>
                        <button style="background: white; color: #667eea; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; font-size: 0.95rem; font-weight: 700; cursor: pointer;">See My Projects</button>
                    </div>
                    <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
                        <div style="width: 200px; height: 200px; background: rgba(255,255,255,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.85rem;">Hero Image</div>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Build a full-screen hero section with gradient background and CTA button',
                duration: '25 minutes',
                learningObjectives: [
                    'Learn how to create full-screen sections',
                    'Master Flexbox for centering content',
                    'Understand CSS gradients',
                    'Create interactive buttons with hover effects'
                ]
            },
            useCases: [
                { title: 'Landing Pages', description: 'Perfect first impression for business or personal sites' },
                { title: 'Portfolio Headers', description: 'Showcase your name and skills prominently' },
                { title: 'Product Pages', description: 'Highlight your main product or service offering' }
            ]
        },

        {
            id: 'card-component',
            name: 'Card Component',
            type: 'ui-elements',
            difficulty: 'beginner',
            hasJS: false,
            mobileFirst: false,
            tags: ['Beginner-Friendly', 'Box-Shadow', 'CSS-Only'],
            description: 'Versatile card component for displaying content with image, title, and action button. Learn modern card design patterns.',
            preview: `<div class="component-preview-placeholder">
                <div style="background: white; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); overflow: hidden; max-width: 300px; margin: 1rem auto;">
                    <img src="https://picsum.photos/300/200" style="width: 100%; height: 200px; object-fit: cover; display: block;" alt="Card image">
                    <div style="padding: 1.5rem;">
                        <h3 style="margin: 0 0 0.75rem 0; font-size: 1.5rem; font-weight: 700; color: #1a1a1a;">Card Title</h3>
                        <p style="margin: 0 0 1.5rem 0; font-size: 1rem; color: #6b7280; line-height: 1.6;">This is a description of the card content. It provides information about what this card represents.</p>
                        <button style="background: #667eea; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; width: 100%;">Learn More</button>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Build a beautiful card component with image, text, and button',
                duration: '20 minutes',
                learningObjectives: [
                    'Learn how to structure card components',
                    'Master box-shadow for depth effects',
                    'Understand object-fit for images',
                    'Create hover effects with transform'
                ]
            },
            useCases: [
                { title: 'Product Showcases', description: 'Display products, services, or portfolio items' },
                { title: 'Blog Post Previews', description: 'Show article summaries with featured images' },
                { title: 'Team Member Profiles', description: 'Present team members with photos and bios' }
            ]
        },

        {
            id: 'image-gallery',
            name: 'Image Gallery Grid',
            type: 'layout',
            difficulty: 'beginner',
            hasJS: false,
            mobileFirst: true,
            tags: ['Beginner-Friendly', 'Grid', 'Responsive'],
            description: 'Responsive image gallery using CSS Grid. Perfect for portfolios, adoption sites, and showcasing collections!',
            preview: `<div class="component-preview-placeholder">
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; padding: 1rem; background: #f8fafc; border-radius: 12px;">
                    <div style="aspect-ratio: 1; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.75rem; font-weight: 600;">Image 1</div>
                    <div style="aspect-ratio: 1; background: linear-gradient(135deg, #f093fb, #f5576c); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.75rem; font-weight: 600;">Image 2</div>
                    <div style="aspect-ratio: 1; background: linear-gradient(135deg, #4facfe, #00f2fe); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.75rem; font-weight: 600;">Image 3</div>
                    <div style="aspect-ratio: 1; background: linear-gradient(135deg, #43e97b, #38f9d7); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.75rem; font-weight: 600;">Image 4</div>
                    <div style="aspect-ratio: 1; background: linear-gradient(135deg, #fa709a, #fee140); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.75rem; font-weight: 600;">Image 5</div>
                    <div style="aspect-ratio: 1; background: linear-gradient(135deg, #a8edea, #fed6e3); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #666; font-size: 0.75rem; font-weight: 600;">Image 6</div>
                </div>
            </div>`,
            workshop: {
                goal: 'Build a responsive image gallery with CSS Grid',
                duration: '30 minutes',
                learningObjectives: [
                    'Learn CSS Grid fundamentals',
                    'Create responsive layouts',
                    'Handle image aspect ratios',
                    'Add hover effects to images'
                ]
            },
            useCases: [
                { title: 'Portfolio Sites', description: 'Showcase artwork, photography, or projects' },
                { title: 'Pet Adoption Sites', description: 'Display available pets with photos' },
                { title: 'Product Catalogs', description: 'Show product collections in grid format' }
            ]
        },

        {
            id: 'testimonials',
            name: 'Testimonials Section',
            type: 'ui-elements',
            difficulty: 'beginner',
            hasJS: false,
            mobileFirst: true,
            tags: ['Beginner-Friendly', 'Flexbox', 'Social-Proof'],
            description: 'Customer testimonials with star ratings and profile photos. Build trust and credibility!',
            preview: `<div class="component-preview-placeholder">
                <div style="background: #f8fafc; padding: 2rem; border-radius: 16px;">
                    <h3 style="text-align: center; margin: 0 0 2rem 0; font-size: 1.5rem; font-weight: 700; color: #1a1a1a;">What Our Customers Say</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
                        <div style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                            <div style="display: flex; margin-bottom: 1rem;">
                                <span style="color: #fbbf24; font-size: 1.2rem;">★★★★★</span>
                            </div>
                            <p style="margin: 0 0 1rem 0; font-size: 0.9rem; color: #6b7280; line-height: 1.5;">"Amazing service! Highly recommend to everyone."</p>
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div style="width: 40px; height: 40px; background: #667eea; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 0.9rem;">JS</div>
                                <div>
                                    <div style="font-weight: 600; font-size: 0.9rem; color: #1a1a1a;">John Smith</div>
                                    <div style="font-size: 0.8rem; color: #6b7280;">Happy Customer</div>
                                </div>
                            </div>
                        </div>
                        <div style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                            <div style="display: flex; margin-bottom: 1rem;">
                                <span style="color: #fbbf24; font-size: 1.2rem;">★★★★★</span>
                            </div>
                            <p style="margin: 0 0 1rem 0; font-size: 0.9rem; color: #6b7280; line-height: 1.5;">"Professional and reliable. Great experience!"</p>
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div style="width: 40px; height: 40px; background: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 0.9rem;">MJ</div>
                                <div>
                                    <div style="font-weight: 600; font-size: 0.9rem; color: #1a1a1a;">Mary Johnson</div>
                                    <div style="font-size: 0.8rem; color: #6b7280;">Satisfied Client</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Create a testimonials section with ratings and photos',
                duration: '25 minutes',
                learningObjectives: [
                    'Structure testimonial content',
                    'Create star rating displays',
                    'Style profile photos',
                    'Use Flexbox for layout'
                ]
            },
            useCases: [
                { title: 'Business Websites', description: 'Show customer reviews and build trust' },
                { title: 'Service Providers', description: 'Display client testimonials' },
                { title: 'E-commerce Sites', description: 'Product reviews and ratings' }
            ]
        },

        {
            id: 'footer',
            name: 'Footer with Social Links',
            type: 'navigation',
            difficulty: 'beginner',
            hasJS: false,
            mobileFirst: true,
            tags: ['Beginner-Friendly', 'Social-Media', 'Navigation'],
            description: 'Professional footer with social media links, contact info, and navigation. Complete your website!',
            preview: `<div class="component-preview-placeholder">
                <div style="background: #2c3e50; color: white; padding: 2rem; border-radius: 12px;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; margin-bottom: 2rem;">
                        <div>
                            <h4 style="margin: 0 0 1rem 0; font-size: 1.1rem; font-weight: 700;">Company</h4>
                            <ul style="list-style: none; padding: 0; margin: 0;">
                                <li style="margin-bottom: 0.5rem;"><a href="#" style="color: #bdc3c7; text-decoration: none; font-size: 0.9rem;">About Us</a></li>
                                <li style="margin-bottom: 0.5rem;"><a href="#" style="color: #bdc3c7; text-decoration: none; font-size: 0.9rem;">Services</a></li>
                                <li style="margin-bottom: 0.5rem;"><a href="#" style="color: #bdc3c7; text-decoration: none; font-size: 0.9rem;">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style="margin: 0 0 1rem 0; font-size: 1.1rem; font-weight: 700;">Contact Info</h4>
                            <p style="margin: 0 0 0.5rem 0; color: #bdc3c7; font-size: 0.9rem;">123 Main Street</p>
                            <p style="margin: 0 0 0.5rem 0; color: #bdc3c7; font-size: 0.9rem;">City, State 12345</p>
                            <p style="margin: 0; color: #bdc3c7; font-size: 0.9rem;">contact@company.com</p>
                        </div>
                    </div>
                    <div style="border-top: 1px solid #34495e; padding-top: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                        <p style="margin: 0; color: #bdc3c7; font-size: 0.85rem;">© 2024 Company Name. All rights reserved.</p>
                        <div style="display: flex; gap: 1rem;">
                            <a href="#" style="color: #bdc3c7; text-decoration: none; font-size: 0.9rem;">Privacy</a>
                            <a href="#" style="color: #bdc3c7; text-decoration: none; font-size: 0.9rem;">Terms</a>
                        </div>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Build a complete footer with social links and contact info',
                duration: '30 minutes',
                learningObjectives: [
                    'Structure footer content',
                    'Add social media icons',
                    'Create multi-column layouts',
                    'Style contact information'
                ]
            },
            useCases: [
                { title: 'All Websites', description: 'Essential component for any website' },
                { title: 'Business Sites', description: 'Contact info and social presence' },
                { title: 'Personal Sites', description: 'Connect with visitors' }
            ]
        },

        {
            id: 'progress-bar',
            name: 'Progress Bar Component',
            type: 'ui-elements',
            difficulty: 'beginner',
            hasJS: false,
            mobileFirst: false,
            tags: ['Beginner-Friendly', 'Animation', 'Visual-Feedback'],
            description: 'Animated progress bars for skills, loading, or completion status. Great for portfolios!',
            preview: `<div class="component-preview-placeholder">
                <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    <h4 style="margin: 0 0 1.5rem 0; font-size: 1.2rem; font-weight: 700; color: #1a1a1a; text-align: center;">Skills Progress</h4>
                    <div style="margin-bottom: 1.5rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span style="font-weight: 600; color: #374151; font-size: 0.9rem;">HTML & CSS</span>
                            <span style="font-weight: 600; color: #667eea; font-size: 0.9rem;">90%</span>
                        </div>
                        <div style="background: #e5e7eb; border-radius: 10px; height: 8px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #667eea, #764ba2); width: 90%; height: 100%; border-radius: 10px;"></div>
                        </div>
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span style="font-weight: 600; color: #374151; font-size: 0.9rem;">JavaScript</span>
                            <span style="font-weight: 600; color: #10b981; font-size: 0.9rem;">75%</span>
                        </div>
                        <div style="background: #e5e7eb; border-radius: 10px; height: 8px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #10b981, #059669); width: 75%; height: 100%; border-radius: 10px;"></div>
                        </div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span style="font-weight: 600; color: #374151; font-size: 0.9rem;">React</span>
                            <span style="font-weight: 600; color: #f59e0b; font-size: 0.9rem;">60%</span>
                        </div>
                        <div style="background: #e5e7eb; border-radius: 10px; height: 8px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #f59e0b, #d97706); width: 60%; height: 100%; border-radius: 10px;"></div>
                        </div>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Create animated progress bars with labels',
                duration: '20 minutes',
                learningObjectives: [
                    'Create progress bar structure',
                    'Use CSS animations',
                    'Style progress indicators',
                    'Add percentage labels'
                ]
            },
            useCases: [
                { title: 'Portfolio Sites', description: 'Show skill levels and expertise' },
                { title: 'Learning Platforms', description: 'Display course progress' },
                { title: 'Fitness Apps', description: 'Track workout completion' }
            ]
        },

        {
            id: 'announcement-banner',
            name: 'Announcement / Alert Banner',
            type: 'ui-elements',
            difficulty: 'beginner',
            hasJS: false,
            mobileFirst: true,
            tags: ['Beginner-Friendly', 'Alerts', 'Communication'],
            description: 'Eye-catching banner for important announcements, sales, or alerts. Grab visitor attention!',
            preview: `<div class="component-preview-placeholder">
                <div style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 1rem 2rem; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div style="width: 24px; height: 24px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">!</div>
                        <div>
                            <div style="font-weight: 700; font-size: 1rem; margin-bottom: 0.25rem;">Special Offer!</div>
                            <div style="font-size: 0.9rem; opacity: 0.95;">Get 50% off all courses this week only</div>
                        </div>
                    </div>
                    <button style="background: rgba(255,255,255,0.2); border: none; color: white; padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.9rem; font-weight: 600; cursor: pointer;">Learn More</button>
                </div>
                <div style="background: #dc2626; color: white; padding: 1rem 2rem; border-radius: 12px; display: flex; align-items: center; gap: 1rem;">
                    <div style="width: 24px; height: 24px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">⚠</div>
                    <div style="font-weight: 600; font-size: 0.95rem;">System maintenance scheduled for tonight at 2 AM EST</div>
                </div>
            </div>`,
            workshop: {
                goal: 'Create attention-grabbing announcement banners',
                duration: '15 minutes',
                learningObjectives: [
                    'Design alert components',
                    'Use color psychology',
                    'Create urgency with design',
                    'Make dismissible banners'
                ]
            },
            useCases: [
                { title: 'E-commerce Sites', description: 'Promote sales and special offers' },
                { title: 'News Sites', description: 'Breaking news alerts' },
                { title: 'Event Sites', description: 'Important announcements' }
            ]
        },

        {
            id: 'difficulty-badge',
            name: 'Difficulty Badge System',
            type: 'ui-elements',
            difficulty: 'beginner',
            hasJS: false,
            mobileFirst: false,
            tags: ['Beginner-Friendly', 'Badges', 'Visual-Indicators'],
            description: 'Color-coded difficulty badges for games, courses, or challenges. Easy visual communication!',
            preview: `<div class="component-preview-placeholder">
                <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    <h4 style="margin: 0 0 1.5rem 0; font-size: 1.2rem; font-weight: 700; color: #1a1a1a; text-align: center;">Course Difficulty Levels</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;">
                        <div style="display: flex; align-items: center; gap: 0.5rem; background: #f0fdf4; padding: 0.5rem 1rem; border-radius: 20px; border: 2px solid #10b981;">
                            <div style="width: 8px; height: 8px; background: #10b981; border-radius: 50%;"></div>
                            <span style="font-weight: 600; color: #065f46; font-size: 0.9rem;">Beginner</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem; background: #fffbeb; padding: 0.5rem 1rem; border-radius: 20px; border: 2px solid #f59e0b;">
                            <div style="width: 8px; height: 8px; background: #f59e0b; border-radius: 50%;"></div>
                            <span style="font-weight: 600; color: #92400e; font-size: 0.9rem;">Intermediate</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem; background: #fef2f2; padding: 0.5rem 1rem; border-radius: 20px; border: 2px solid #ef4444;">
                            <div style="width: 8px; height: 8px; background: #ef4444; border-radius: 50%;"></div>
                            <span style="font-weight: 600; color: #991b1b; font-size: 0.9rem;">Advanced</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem; background: #f3f4f6; padding: 0.5rem 1rem; border-radius: 20px; border: 2px solid #6b7280;">
                            <div style="width: 8px; height: 8px; background: #6b7280; border-radius: 50%;"></div>
                            <span style="font-weight: 600; color: #374151; font-size: 0.9rem;">Expert</span>
                        </div>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Create a color-coded badge system',
                duration: '15 minutes',
                learningObjectives: [
                    'Design badge components',
                    'Use color coding effectively',
                    'Create consistent styling',
                    'Make badges responsive'
                ]
            },
            useCases: [
                { title: 'Gaming Sites', description: 'Show game difficulty levels' },
                { title: 'Learning Platforms', description: 'Course difficulty indicators' },
                { title: 'Recipe Sites', description: 'Cooking difficulty levels' }
            ]
        },

        {
            id: 'city-statistics',
            name: 'City Statistics Strip',
            type: 'ui-elements',
            difficulty: 'beginner',
            hasJS: false,
            mobileFirst: true,
            tags: ['Beginner-Friendly', 'Statistics', 'Data-Display'],
            description: 'Display key statistics with icons and numbers. Perfect for showcasing achievements or data!',
            preview: `<div class="component-preview-placeholder">
                <div style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 2rem; border-radius: 16px;">
                    <h3 style="text-align: center; margin: 0 0 2rem 0; font-size: 1.5rem; font-weight: 700;">City Statistics</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1.5rem;">
                        <div style="text-align: center;">
                            <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto;">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div style="font-size: 2rem; font-weight: 800; margin-bottom: 0.25rem;">2.5M</div>
                            <div style="font-size: 0.9rem; opacity: 0.9;">Population</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto;">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M3 21h18"></path>
                                    <path d="M5 21V7l8-4v18"></path>
                                    <path d="M19 21V11l-6-4"></path>
                                </svg>
                            </div>
                            <div style="font-size: 2rem; font-weight: 800; margin-bottom: 0.25rem;">1,200</div>
                            <div style="font-size: 0.9rem; opacity: 0.9;">Businesses</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto;">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 2v20"></path>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                            </div>
                            <div style="font-size: 2rem; font-weight: 800; margin-bottom: 0.25rem;">45</div>
                            <div style="font-size: 0.9rem; opacity: 0.9;">Parks</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto;">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                </svg>
                            </div>
                            <div style="font-size: 2rem; font-weight: 800; margin-bottom: 0.25rem;">25</div>
                            <div style="font-size: 0.9rem; opacity: 0.9;">Schools</div>
                        </div>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Create an engaging statistics display',
                duration: '20 minutes',
                learningObjectives: [
                    'Display numerical data effectively',
                    'Use icons with statistics',
                    'Create grid layouts',
                    'Style data presentations'
                ]
            },
            useCases: [
                { title: 'City Websites', description: 'Show population, area, and key facts' },
                { title: 'Business Sites', description: 'Display company achievements' },
                { title: 'Portfolio Sites', description: 'Show project statistics' }
            ]
        },

        {
            id: 'quote-highlight',
            name: 'Quote Highlight Block',
            type: 'ui-elements',
            difficulty: 'beginner',
            hasJS: false,
            mobileFirst: true,
            tags: ['Beginner-Friendly', 'Typography', 'Content'],
            description: 'Beautiful quote blocks with styling and attribution. Perfect for testimonials or inspirational content!',
            preview: `<div class="component-preview-placeholder">
                <div style="background: #f8fafc; padding: 2rem; border-radius: 16px; border-left: 6px solid #667eea;">
                    <div style="position: relative;">
                        <div style="font-size: 4rem; color: #667eea; opacity: 0.3; position: absolute; top: -1rem; left: -0.5rem; line-height: 1;">"</div>
                        <blockquote style="margin: 0; padding: 1rem 0 0 2rem; font-size: 1.25rem; font-style: italic; color: #374151; line-height: 1.6;">
                            The best way to predict the future is to create it.
                        </blockquote>
                        <div style="margin-top: 1.5rem; padding-left: 2rem;">
                            <div style="font-weight: 700; color: #1a1a1a; font-size: 1rem;">Peter Drucker</div>
                            <div style="color: #6b7280; font-size: 0.9rem; margin-top: 0.25rem;">Management Consultant</div>
                        </div>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Create styled quote blocks with attribution',
                duration: '15 minutes',
                learningObjectives: [
                    'Style blockquote elements',
                    'Add quote marks and styling',
                    'Create attribution sections',
                    'Use typography effectively'
                ]
            },
            useCases: [
                { title: 'Blog Sites', description: 'Highlight important quotes' },
                { title: 'Author Sites', description: 'Showcase book excerpts' },
                { title: 'Business Sites', description: 'Feature customer quotes' }
            ]
        },

        {
            id: 'workout-schedule',
            name: 'Workout Schedule Grid',
            type: 'ui-elements',
            difficulty: 'beginner',
            hasJS: false,
            mobileFirst: true,
            tags: ['Beginner-Friendly', 'Schedule', 'Grid'],
            description: 'Weekly workout schedule with time slots and activities. Great for fitness and sports sites!',
            preview: `<div class="component-preview-placeholder">
                <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    <h3 style="text-align: center; margin: 0 0 1.5rem 0; font-size: 1.3rem; font-weight: 700; color: #1a1a1a;">Weekly Workout Schedule</h3>
                    <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.5rem; font-size: 0.8rem;">
                        <div style="background: #667eea; color: white; padding: 0.5rem; text-align: center; font-weight: 600; border-radius: 6px;">Mon</div>
                        <div style="background: #667eea; color: white; padding: 0.5rem; text-align: center; font-weight: 600; border-radius: 6px;">Tue</div>
                        <div style="background: #667eea; color: white; padding: 0.5rem; text-align: center; font-weight: 600; border-radius: 6px;">Wed</div>
                        <div style="background: #667eea; color: white; padding: 0.5rem; text-align: center; font-weight: 600; border-radius: 6px;">Thu</div>
                        <div style="background: #667eea; color: white; padding: 0.5rem; text-align: center; font-weight: 600; border-radius: 6px;">Fri</div>
                        <div style="background: #667eea; color: white; padding: 0.5rem; text-align: center; font-weight: 600; border-radius: 6px;">Sat</div>
                        <div style="background: #667eea; color: white; padding: 0.5rem; text-align: center; font-weight: 600; border-radius: 6px;">Sun</div>
                        <div style="background: #f0fdf4; border: 2px solid #10b981; padding: 0.75rem; text-align: center; border-radius: 6px; color: #065f46; font-weight: 600;">Cardio<br>7 AM</div>
                        <div style="background: #fef3c7; border: 2px solid #f59e0b; padding: 0.75rem; text-align: center; border-radius: 6px; color: #92400e; font-weight: 600;">Strength<br>6 PM</div>
                        <div style="background: #f0fdf4; border: 2px solid #10b981; padding: 0.75rem; text-align: center; border-radius: 6px; color: #065f46; font-weight: 600;">Yoga<br>8 AM</div>
                        <div style="background: #fef3c7; border: 2px solid #f59e0b; padding: 0.75rem; text-align: center; border-radius: 6px; color: #92400e; font-weight: 600;">HIIT<br>7 PM</div>
                        <div style="background: #f0fdf4; border: 2px solid #10b981; padding: 0.75rem; text-align: center; border-radius: 6px; color: #065f46; font-weight: 600;">Swim<br>9 AM</div>
                        <div style="background: #ede9fe; border: 2px solid #8b5cf6; padding: 0.75rem; text-align: center; border-radius: 6px; color: #581c87; font-weight: 600;">Pilates<br>10 AM</div>
                        <div style="background: #f3f4f6; border: 2px solid #6b7280; padding: 0.75rem; text-align: center; border-radius: 6px; color: #374151; font-weight: 600;">Rest Day</div>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Build a weekly schedule grid layout',
                duration: '25 minutes',
                learningObjectives: [
                    'Create table-like layouts with CSS',
                    'Style schedule components',
                    'Use CSS Grid for calendars',
                    'Make schedules responsive'
                ]
            },
            useCases: [
                { title: 'Fitness Sites', description: 'Display workout schedules' },
                { title: 'Sports Teams', description: 'Show practice schedules' },
                { title: 'Gyms', description: 'Class timetables' }
            ]
        },

        {
            id: 'tribe-profile',
            name: 'Tribe Profile Section',
            type: 'layout',
            difficulty: 'beginner',
            hasJS: false,
            mobileFirst: true,
            tags: ['Beginner-Friendly', 'Profile', 'Cultural'],
            description: 'Cultural tribe profile with history, traditions, and key information. Educational and respectful design!',
            preview: `<div class="component-preview-placeholder">
                <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 2rem; align-items: center;">
                        <div style="text-align: center;">
                            <div style="width: 150px; height: 150px; background: linear-gradient(135deg, #8b5cf6, #7c3aed); border-radius: 50%; margin: 0 auto 1rem auto; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 1.1rem;">Tribal Symbol</div>
                            <h3 style="margin: 0; font-size: 1.3rem; font-weight: 700; color: #1a1a1a;">Cherokee Nation</h3>
                        </div>
                        <div>
                            <div style="margin-bottom: 1.5rem;">
                                <h4 style="margin: 0 0 0.5rem 0; font-size: 1rem; font-weight: 700; color: #667eea;">Location</h4>
                                <p style="margin: 0; color: #6b7280; font-size: 0.9rem;">Southeastern United States</p>
                            </div>
                            <div style="margin-bottom: 1.5rem;">
                                <h4 style="margin: 0 0 0.5rem 0; font-size: 1rem; font-weight: 700; color: #667eea;">Population</h4>
                                <p style="margin: 0; color: #6b7280; font-size: 0.9rem;">Approximately 370,000 enrolled members</p>
                            </div>
                            <div>
                                <h4 style="margin: 0 0 0.5rem 0; font-size: 1rem; font-weight: 700; color: #667eea;">Cultural Heritage</h4>
                                <p style="margin: 0; color: #6b7280; font-size: 0.9rem; line-height: 1.5;">Rich traditions in storytelling, pottery, and agriculture. Known for their written language and strong community bonds.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Create a respectful cultural profile section',
                duration: '30 minutes',
                learningObjectives: [
                    'Design cultural content respectfully',
                    'Create profile layouts',
                    'Use appropriate imagery',
                    'Structure historical information'
                ]
            },
            useCases: [
                { title: 'Educational Sites', description: 'Cultural and historical profiles' },
                { title: 'Museum Sites', description: 'Exhibit information' },
                { title: 'Travel Sites', description: 'Cultural destination info' }
            ]
        },

        {
            id: 'cultural-artifact',
            name: 'Cultural Artifact Highlight',
            type: 'ui-elements',
            difficulty: 'beginner',
            hasJS: false,
            mobileFirst: true,
            tags: ['Beginner-Friendly', 'Cultural', 'Educational'],
            description: 'Showcase cultural artifacts with descriptions and historical context. Educational and engaging!',
            preview: `<div class="component-preview-placeholder">
                <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-width: 400px; margin: 0 auto;">
                    <div style="width: 100%; height: 200px; background: linear-gradient(135deg, #f59e0b, #d97706); border-radius: 12px; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 1.1rem;">Ancient Pottery</div>
                    <h3 style="margin: 0 0 1rem 0; font-size: 1.3rem; font-weight: 700; color: #1a1a1a;">Cherokee Water Vessel</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; font-size: 0.9rem;">
                        <div>
                            <span style="font-weight: 600; color: #667eea;">Period:</span>
                            <span style="color: #6b7280; margin-left: 0.5rem;">1800-1850</span>
                        </div>
                        <div>
                            <span style="font-weight: 600; color: #667eea;">Material:</span>
                            <span style="color: #6b7280; margin-left: 0.5rem;">Clay</span>
                        </div>
                        <div>
                            <span style="font-weight: 600; color: #667eea;">Origin:</span>
                            <span style="color: #6b7280; margin-left: 0.5rem;">Georgia</span>
                        </div>
                        <div>
                            <span style="font-weight: 600; color: #667eea;">Size:</span>
                            <span style="color: #6b7280; margin-left: 0.5rem;">12" tall</span>
                        </div>
                    </div>
                    <p style="margin: 0; color: #6b7280; font-size: 0.9rem; line-height: 1.6;">This traditional water vessel showcases the sophisticated pottery techniques of Cherokee artisans. The intricate patterns tell stories of nature and community life.</p>
                </div>
            </div>`,
            workshop: {
                goal: 'Create artifact showcase components',
                duration: '25 minutes',
                learningObjectives: [
                    'Design educational content',
                    'Create artifact displays',
                    'Use descriptive layouts',
                    'Add historical context'
                ]
            },
            useCases: [
                { title: 'Museum Sites', description: 'Showcase collections' },
                { title: 'Educational Sites', description: 'Historical artifacts' },
                { title: 'Cultural Sites', description: 'Heritage displays' }
            ]
        },

        {
            id: 'team-history-table',
            name: 'Team History Table',
            type: 'ui-elements',
            difficulty: 'beginner',
            hasJS: false,
            mobileFirst: true,
            tags: ['Beginner-Friendly', 'Tables', 'Sports'],
            description: 'Sports team history with championships, records, and achievements. Perfect for sports websites!',
            preview: `<div class="component-preview-placeholder">
                <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    <h3 style="text-align: center; margin: 0 0 1.5rem 0; font-size: 1.3rem; font-weight: 700; color: #1a1a1a;">Championship History</h3>
                    <div style="overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                            <thead>
                                <tr style="background: #667eea; color: white;">
                                    <th style="padding: 0.75rem; text-align: left; font-weight: 600;">Year</th>
                                    <th style="padding: 0.75rem; text-align: left; font-weight: 600;">Championship</th>
                                    <th style="padding: 0.75rem; text-align: left; font-weight: 600;">Record</th>
                                    <th style="padding: 0.75rem; text-align: left; font-weight: 600;">Coach</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="background: #f8fafc;">
                                    <td style="padding: 0.75rem; color: #1a1a1a; font-weight: 600;">2024</td>
                                    <td style="padding: 0.75rem; color: #1a1a1a;">State Champions</td>
                                    <td style="padding: 0.75rem; color: #10b981; font-weight: 600;">15-2</td>
                                    <td style="padding: 0.75rem; color: #6b7280;">John Smith</td>
                                </tr>
                                <tr style="background: white;">
                                    <td style="padding: 0.75rem; color: #1a1a1a; font-weight: 600;">2023</td>
                                    <td style="padding: 0.75rem; color: #1a1a1a;">Regional Finals</td>
                                    <td style="padding: 0.75rem; color: #f59e0b; font-weight: 600;">12-5</td>
                                    <td style="padding: 0.75rem; color: #6b7280;">John Smith</td>
                                </tr>
                                <tr style="background: #f8fafc;">
                                    <td style="padding: 0.75rem; color: #1a1a1a; font-weight: 600;">2022</td>
                                    <td style="padding: 0.75rem; color: #1a1a1a;">District Champions</td>
                                    <td style="padding: 0.75rem; color: #10b981; font-weight: 600;">14-3</td>
                                    <td style="padding: 0.75rem; color: #6b7280;">Mike Johnson</td>
                                </tr>
                                <tr style="background: white;">
                                    <td style="padding: 0.75rem; color: #1a1a1a; font-weight: 600;">2021</td>
                                    <td style="padding: 0.75rem; color: #1a1a1a;">League Champions</td>
                                    <td style="padding: 0.75rem; color: #10b981; font-weight: 600;">13-4</td>
                                    <td style="padding: 0.75rem; color: #6b7280;">Mike Johnson</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Create a sports history table',
                duration: '25 minutes',
                learningObjectives: [
                    'Style HTML tables effectively',
                    'Create responsive tables',
                    'Display sports statistics',
                    'Use alternating row colors'
                ]
            },
            useCases: [
                { title: 'Sports Teams', description: 'Display team history and records' },
                { title: 'League Sites', description: 'Championship histories' },
                { title: 'Fan Sites', description: 'Team statistics and achievements' }
            ]
        },

        {
            id: 'player-stats-panel',
            name: 'Player Stats Panel',
            type: 'ui-elements',
            difficulty: 'beginner',
            hasJS: false,
            mobileFirst: true,
            tags: ['Beginner-Friendly', 'Statistics', 'Sports'],
            description: 'Individual player statistics with photo and key performance metrics. Great for sports sites!',
            preview: `<div class="component-preview-placeholder">
                <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-width: 350px; margin: 0 auto;">
                    <div style="text-align: center; margin-bottom: 1.5rem;">
                        <div style="width: 100px; height: 100px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; margin: 0 auto 1rem auto; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 1.2rem;">JS</div>
                        <h3 style="margin: 0 0 0.25rem 0; font-size: 1.3rem; font-weight: 700; color: #1a1a1a;">John Smith</h3>
                        <p style="margin: 0; color: #6b7280; font-size: 0.9rem;">Point Guard • #23</p>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
                        <div style="text-align: center; padding: 1rem; background: #f0fdf4; border-radius: 8px;">
                            <div style="font-size: 1.8rem; font-weight: 800; color: #10b981; margin-bottom: 0.25rem;">18.5</div>
                            <div style="font-size: 0.8rem; color: #065f46; font-weight: 600;">PPG</div>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: #eff6ff; border-radius: 8px;">
                            <div style="font-size: 1.8rem; font-weight: 800; color: #3b82f6; margin-bottom: 0.25rem;">7.2</div>
                            <div style="font-size: 0.8rem; color: #1e40af; font-weight: 600;">APG</div>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: #fef3c7; border-radius: 8px;">
                            <div style="font-size: 1.8rem; font-weight: 800; color: #f59e0b; margin-bottom: 0.25rem;">4.8</div>
                            <div style="font-size: 0.8rem; color: #92400e; font-weight: 600;">RPG</div>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: #fdf2f8; border-radius: 8px;">
                            <div style="font-size: 1.8rem; font-weight: 800; color: #ec4899; margin-bottom: 0.25rem;">89%</div>
                            <div style="font-size: 0.8rem; color: #be185d; font-weight: 600;">FT%</div>
                        </div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 0.9rem; color: #6b7280; margin-bottom: 0.5rem;">Season High</div>
                        <div style="font-size: 1.5rem; font-weight: 700; color: #1a1a1a;">32 Points vs Lakers</div>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Build player profile with statistics',
                duration: '25 minutes',
                learningObjectives: [
                    'Create player profile layouts',
                    'Display sports statistics',
                    'Style numerical data',
                    'Use profile photos effectively'
                ]
            },
            useCases: [
                { title: 'Sports Teams', description: 'Player profiles and stats' },
                { title: 'Fantasy Sports', description: 'Player performance data' },
                { title: 'Sports News', description: 'Athlete profiles' }
            ]
        }
    ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BeginnerComponentData;
}