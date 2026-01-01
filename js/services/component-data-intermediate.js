/**
 * Intermediate Component Data - Components for students with HTML/CSS foundation
 * These components introduce JavaScript interactions and more complex layouts
 */

const IntermediateComponentData = {
    components: [
        // JavaScript Interactive Components
        {
            id: 'contact-form',
            name: 'Contact Form',
            type: 'forms',
            difficulty: 'intermediate',
            hasJS: true,
            mobileFirst: true,
            tags: ['Responsive', 'Validation', 'Accessible'],
            description: 'Professional contact form with validation and user feedback. Learn form handling and JavaScript validation.',
            preview: `<div class="component-preview-placeholder">
                <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 400px; margin: 1rem auto;">
                    <h3 style="margin: 0 0 1.5rem 0; font-size: 1.5rem; font-weight: 700; color: #1a1a1a; text-align: center;">Contact Us</h3>
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151; font-size: 0.9rem;">Name</label>
                        <input type="text" placeholder="Your name" style="width: 100%; padding: 0.75rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem; box-sizing: border-box;">
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151; font-size: 0.9rem;">Email</label>
                        <input type="email" placeholder="your@email.com" style="width: 100%; padding: 0.75rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem; box-sizing: border-box;">
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151; font-size: 0.9rem;">Message</label>
                        <textarea placeholder="Your message..." style="width: 100%; padding: 0.75rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem; height: 120px; resize: vertical; box-sizing: border-box; font-family: inherit;"></textarea>
                    </div>
                    <button style="background: #667eea; color: white; border: none; padding: 0.875rem; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; width: 100%;">Send Message</button>
                </div>
            </div>`,
            workshop: {
                goal: 'Build a professional contact form with validation and user feedback',
                duration: '45 minutes',
                learningObjectives: [
                    'Learn how to structure HTML forms',
                    'Understand form validation with JavaScript',
                    'Master form styling with CSS',
                    'Create responsive forms for mobile devices',
                    'Handle form submission events'
                ]
            },
            useCases: [
                { title: 'Business Websites', description: 'Let customers reach out with inquiries and feedback' },
                { title: 'Portfolio Sites', description: 'Enable potential clients to contact you directly' },
                { title: 'Event Pages', description: 'Collect RSVPs and questions from attendees' }
            ]
        },

        {
            id: 'timeline',
            name: 'Timeline Component',
            type: 'layout',
            difficulty: 'intermediate',
            hasJS: false,
            mobileFirst: true,
            tags: ['Flexbox', 'History', 'Storytelling'],
            description: 'Vertical timeline perfect for historical events, game releases, sports history, and cultural milestones!',
            preview: `<div class="component-preview-placeholder">
                <div style="padding: 1.5rem; max-width: 350px; margin: 0 auto;">
                    <div style="position: relative; padding-left: 2.5rem; padding-bottom: 1.5rem; border-left: 3px solid #667eea;">
                        <div style="position: absolute; left: -8px; top: 0; width: 12px; height: 12px; background: #667eea; border-radius: 50%;"></div>
                        <div style="color: #667eea; font-weight: 700; font-size: 0.85rem; margin-bottom: 0.4rem;">2024</div>
                        <h4 style="margin: 0 0 0.4rem 0; font-size: 1rem; font-weight: 700; color: #1a1a1a;">Latest Event</h4>
                        <p style="margin: 0; font-size: 0.85rem; color: #6b7280; line-height: 1.5;">Something amazing happened this year</p>
                    </div>
                    <div style="position: relative; padding-left: 2.5rem; padding-bottom: 1.5rem; border-left: 3px solid #667eea;">
                        <div style="position: absolute; left: -8px; top: 0; width: 12px; height: 12px; background: #667eea; border-radius: 50%;"></div>
                        <div style="color: #667eea; font-weight: 700; font-size: 0.85rem; margin-bottom: 0.4rem;">2020</div>
                        <h4 style="margin: 0 0 0.4rem 0; font-size: 1rem; font-weight: 700; color: #1a1a1a;">Major Milestone</h4>
                        <p style="margin: 0; font-size: 0.85rem; color: #6b7280; line-height: 1.5;">Important event in our history</p>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Build an engaging timeline to display historical events',
                duration: '40 minutes',
                learningObjectives: [
                    'Create timeline layouts with CSS',
                    'Use pseudo-elements for visual effects',
                    'Build responsive timelines',
                    'Structure historical content effectively'
                ]
            },
            useCases: [
                { title: 'Gaming History', description: 'Show evolution of games from first releases to modern' },
                { title: 'Company History', description: 'Display company milestones and achievements' },
                { title: 'Project Timeline', description: 'Present project phases and deliverables' }
            ]
        },

        {
            id: 'pricing-table',
            name: 'Pricing Table',
            type: 'ui-elements',
            difficulty: 'intermediate',
            hasJS: false,
            mobileFirst: true,
            tags: ['Responsive', 'Business', 'Comparison'],
            description: 'Professional pricing table with feature comparison and call-to-action buttons. Perfect for service businesses!',
            preview: `<div class="component-preview-placeholder">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; padding: 1rem;">
                    <div style="background: white; border: 2px solid #e5e7eb; border-radius: 16px; padding: 2rem; text-align: center; position: relative;">
                        <h3 style="margin: 0 0 0.5rem 0; font-size: 1.5rem; font-weight: 700; color: #1a1a1a;">Basic</h3>
                        <div style="margin-bottom: 1.5rem;">
                            <span style="font-size: 3rem; font-weight: 800; color: #667eea;">$9</span>
                            <span style="color: #6b7280; font-size: 1rem;">/month</span>
                        </div>
                        <ul style="list-style: none; padding: 0; margin: 0 0 2rem 0; text-align: left;">
                            <li style="padding: 0.5rem 0; border-bottom: 1px solid #f3f4f6; color: #374151;">✓ 5 Projects</li>
                            <li style="padding: 0.5rem 0; border-bottom: 1px solid #f3f4f6; color: #374151;">✓ 10GB Storage</li>
                            <li style="padding: 0.5rem 0; border-bottom: 1px solid #f3f4f6; color: #374151;">✓ Email Support</li>
                        </ul>
                        <button style="background: #667eea; color: white; border: none; padding: 0.75rem 2rem; border-radius: 8px; font-weight: 600; cursor: pointer; width: 100%;">Choose Plan</button>
                    </div>
                    <div style="background: white; border: 3px solid #667eea; border-radius: 16px; padding: 2rem; text-align: center; position: relative; transform: scale(1.05);">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #667eea; color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">POPULAR</div>
                        <h3 style="margin: 0 0 0.5rem 0; font-size: 1.5rem; font-weight: 700; color: #1a1a1a;">Pro</h3>
                        <div style="margin-bottom: 1.5rem;">
                            <span style="font-size: 3rem; font-weight: 800; color: #667eea;">$29</span>
                            <span style="color: #6b7280; font-size: 1rem;">/month</span>
                        </div>
                        <ul style="list-style: none; padding: 0; margin: 0 0 2rem 0; text-align: left;">
                            <li style="padding: 0.5rem 0; border-bottom: 1px solid #f3f4f6; color: #374151;">✓ 50 Projects</li>
                            <li style="padding: 0.5rem 0; border-bottom: 1px solid #f3f4f6; color: #374151;">✓ 100GB Storage</li>
                            <li style="padding: 0.5rem 0; border-bottom: 1px solid #f3f4f6; color: #374151;">✓ Priority Support</li>
                            <li style="padding: 0.5rem 0; border-bottom: 1px solid #f3f4f6; color: #374151;">✓ Advanced Features</li>
                        </ul>
                        <button style="background: #667eea; color: white; border: none; padding: 0.75rem 2rem; border-radius: 8px; font-weight: 600; cursor: pointer; width: 100%;">Choose Plan</button>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Create a responsive pricing comparison table',
                duration: '35 minutes',
                learningObjectives: [
                    'Design pricing table layouts',
                    'Create feature comparison lists',
                    'Style call-to-action buttons',
                    'Make tables responsive'
                ]
            },
            useCases: [
                { title: 'SaaS Products', description: 'Display subscription plans and features' },
                { title: 'Service Businesses', description: 'Show different service packages' },
                { title: 'Membership Sites', description: 'Compare membership tiers' }
            ]
        },

        {
            id: 'before-after-slider',
            name: 'Before-After Image Slider',
            type: 'ui-elements',
            difficulty: 'intermediate',
            hasJS: true,
            mobileFirst: false,
            tags: ['Interactive', 'JavaScript', 'Images'],
            description: 'Interactive slider to compare two images side by side. Perfect for showing transformations!',
            preview: `<div class="component-preview-placeholder">
                <div style="position: relative; width: 280px; height: 180px; margin: 1rem auto; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.15);">
                    <div style="position: absolute; width: 50%; height: 100%; background: #e5e7eb; display: flex; align-items: center; justify-content: center; color: #6b7280; font-weight: 600;">Before</div>
                    <div style="position: absolute; right: 0; width: 50%; height: 100%; background: #3b82f6; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600;">After</div>
                    <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 3px; background: white; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div>
                    <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 40px; height: 40px; background: white; border-radius: 50%; box-shadow: 0 4px 12px rgba(0,0,0,0.2); display: flex; align-items: center; justify-content: center;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2">
                            <polyline points="15 18 9 12 15 6"></polyline>
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Build an interactive before-after image comparison slider',
                duration: '35 minutes',
                learningObjectives: [
                    'Use clip-path for image masking',
                    'Handle mouse drag events',
                    'Calculate percentages for positioning',
                    'Create interactive UI elements'
                ]
            },
            useCases: [
                { title: 'Portfolio Sites', description: 'Show before/after of design work or photo editing' },
                { title: 'Business Sites', description: 'Display transformation results or improvements' }
            ]
        },

        {
            id: 'appointment-selector',
            name: 'Appointment Time Slot Selector',
            type: 'forms',
            difficulty: 'intermediate',
            hasJS: true,
            mobileFirst: true,
            tags: ['Interactive', 'Scheduling', 'JavaScript'],
            description: 'Interactive appointment booking with available time slots. Perfect for service businesses!',
            preview: `<div class="component-preview-placeholder">
                <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 400px; margin: 1rem auto;">
                    <h3 style="margin: 0 0 1.5rem 0; font-size: 1.3rem; font-weight: 700; color: #1a1a1a; text-align: center;">Select Appointment Time</h3>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151; font-size: 0.9rem;">Date</label>
                        <input type="date" style="width: 100%; padding: 0.75rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem; box-sizing: border-box;">
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label style="display: block; margin-bottom: 1rem; font-weight: 600; color: #374151; font-size: 0.9rem;">Available Times</label>
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem;">
                            <button style="padding: 0.75rem; border: 2px solid #10b981; background: #f0fdf4; color: #065f46; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 0.85rem;">9:00 AM</button>
                            <button style="padding: 0.75rem; border: 2px solid #e5e7eb; background: white; color: #374151; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 0.85rem;">10:00 AM</button>
                            <button style="padding: 0.75rem; border: 2px solid #e5e7eb; background: white; color: #374151; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 0.85rem;">11:00 AM</button>
                            <button style="padding: 0.75rem; border: 2px solid #e5e7eb; background: #f9fafb; color: #9ca3af; border-radius: 8px; font-weight: 600; cursor: not-allowed; font-size: 0.85rem;" disabled>1:00 PM</button>
                            <button style="padding: 0.75rem; border: 2px solid #e5e7eb; background: white; color: #374151; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 0.85rem;">2:00 PM</button>
                            <button style="padding: 0.75rem; border: 2px solid #e5e7eb; background: white; color: #374151; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 0.85rem;">3:00 PM</button>
                        </div>
                    </div>
                    <button style="background: #667eea; color: white; border: none; padding: 1rem; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; width: 100%;">Book Appointment</button>
                </div>
            </div>`,
            workshop: {
                goal: 'Build an appointment time slot selector',
                duration: '40 minutes',
                learningObjectives: [
                    'Create interactive time slot grids',
                    'Handle click events on multiple elements',
                    'Manage selection states',
                    'Validate appointment selections'
                ]
            },
            useCases: [
                { title: 'Medical Practices', description: 'Book patient appointments' },
                { title: 'Service Providers', description: 'Schedule consultations' },
                { title: 'Salons & Spas', description: 'Book beauty appointments' }
            ]
        },

        {
            id: 'genre-filter-tabs',
            name: 'Genre Filter Tabs',
            type: 'interactions',
            difficulty: 'intermediate',
            hasJS: true,
            mobileFirst: true,
            tags: ['Interactive', 'Filtering', 'Tabs'],
            description: 'Interactive tabs for filtering content by genre or category. Great for media and content sites!',
            preview: `<div class="component-preview-placeholder">
                <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem; border-bottom: 2px solid #f3f4f6; padding-bottom: 1rem;">
                        <button style="padding: 0.75rem 1.5rem; background: #667eea; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 0.9rem;">All</button>
                        <button style="padding: 0.75rem 1.5rem; background: #f3f4f6; color: #6b7280; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 0.9rem;">Action</button>
                        <button style="padding: 0.75rem 1.5rem; background: #f3f4f6; color: #6b7280; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 0.9rem;">Comedy</button>
                        <button style="padding: 0.75rem 1.5rem; background: #f3f4f6; color: #6b7280; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 0.9rem;">Drama</button>
                        <button style="padding: 0.75rem 1.5rem; background: #f3f4f6; color: #6b7280; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 0.9rem;">Sci-Fi</button>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
                        <div style="background: #f8fafc; border: 2px solid #e5e7eb; border-radius: 12px; padding: 1rem; text-align: center;">
                            <div style="width: 100%; height: 80px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 8px; margin-bottom: 0.75rem; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 0.8rem;">Movie 1</div>
                            <div style="font-weight: 600; color: #1a1a1a; font-size: 0.9rem;">Action Movie</div>
                        </div>
                        <div style="background: #f8fafc; border: 2px solid #e5e7eb; border-radius: 12px; padding: 1rem; text-align: center;">
                            <div style="width: 100%; height: 80px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 8px; margin-bottom: 0.75rem; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 0.8rem;">Movie 2</div>
                            <div style="font-weight: 600; color: #1a1a1a; font-size: 0.9rem;">Comedy Film</div>
                        </div>
                        <div style="background: #f8fafc; border: 2px solid #e5e7eb; border-radius: 12px; padding: 1rem; text-align: center;">
                            <div style="width: 100%; height: 80px; background: linear-gradient(135deg, #f59e0b, #d97706); border-radius: 8px; margin-bottom: 0.75rem; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 0.8rem;">Movie 3</div>
                            <div style="font-weight: 600; color: #1a1a1a; font-size: 0.9rem;">Drama Series</div>
                        </div>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Create interactive filter tabs with content switching',
                duration: '35 minutes',
                learningObjectives: [
                    'Build tabbed interfaces',
                    'Filter content dynamically',
                    'Handle tab switching events',
                    'Create smooth transitions'
                ]
            },
            useCases: [
                { title: 'Media Sites', description: 'Filter movies, books, or music by genre' },
                { title: 'Portfolio Sites', description: 'Filter projects by category' },
                { title: 'E-commerce', description: 'Filter products by type' }
            ]
        },

        {
            id: 'adoption-status-badge',
            name: 'Adoption Status Badge',
            type: 'ui-elements',
            difficulty: 'intermediate',
            hasJS: false,
            mobileFirst: true,
            tags: ['Status-Indicators', 'Conditional-Styling', 'Badges'],
            description: 'Dynamic status badges for pet adoption, job applications, or any status-based system!',
            preview: `<div class="component-preview-placeholder">
                <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    <h4 style="margin: 0 0 1.5rem 0; font-size: 1.2rem; font-weight: 700; color: #1a1a1a; text-align: center;">Pet Adoption Status</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
                        <div style="border: 2px solid #e5e7eb; border-radius: 12px; padding: 1.5rem; position: relative;">
                            <div style="position: absolute; top: -12px; right: 1rem; background: #10b981; color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">AVAILABLE</div>
                            <div style="width: 100%; height: 120px; background: linear-gradient(135deg, #fbbf24, #f59e0b); border-radius: 8px; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600;">Buddy</div>
                            <h5 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; font-weight: 700; color: #1a1a1a;">Golden Retriever</h5>
                            <p style="margin: 0; color: #6b7280; font-size: 0.9rem;">2 years old, friendly</p>
                        </div>
                        <div style="border: 2px solid #e5e7eb; border-radius: 12px; padding: 1.5rem; position: relative; opacity: 0.7;">
                            <div style="position: absolute; top: -12px; right: 1rem; background: #ef4444; color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">ADOPTED</div>
                            <div style="width: 100%; height: 120px; background: linear-gradient(135deg, #8b5cf6, #7c3aed); border-radius: 8px; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600;">Luna</div>
                            <h5 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; font-weight: 700; color: #1a1a1a;">Tabby Cat</h5>
                            <p style="margin: 0; color: #6b7280; font-size: 0.9rem;">1 year old, playful</p>
                        </div>
                        <div style="border: 2px solid #e5e7eb; border-radius: 12px; padding: 1.5rem; position: relative;">
                            <div style="position: absolute; top: -12px; right: 1rem; background: #f59e0b; color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">PENDING</div>
                            <div style="width: 100%; height: 120px; background: linear-gradient(135deg, #06b6d4, #0891b2); border-radius: 8px; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600;">Max</div>
                            <h5 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; font-weight: 700; color: #1a1a1a;">German Shepherd</h5>
                            <p style="margin: 0; color: #6b7280; font-size: 0.9rem;">3 years old, trained</p>
                        </div>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Create dynamic status badge system',
                duration: '25 minutes',
                learningObjectives: [
                    'Create conditional styling systems',
                    'Design status indicators',
                    'Use CSS classes for state management',
                    'Make badges accessible'
                ]
            },
            useCases: [
                { title: 'Pet Adoption Sites', description: 'Show adoption status of pets' },
                { title: 'Job Boards', description: 'Display application status' },
                { title: 'Order Tracking', description: 'Show order progress' }
            ]
        },

        {
            id: 'pet-type-filter',
            name: 'Pet Type Filter Toggle',
            type: 'interactions',
            difficulty: 'intermediate',
            hasJS: true,
            mobileFirst: true,
            tags: ['Interactive', 'Filtering', 'Toggle-Buttons'],
            description: 'Interactive filter toggles for pet types or any category-based filtering system!',
            preview: `<div class="component-preview-placeholder">
                <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    <h4 style="margin: 0 0 1.5rem 0; font-size: 1.2rem; font-weight: 700; color: #1a1a1a; text-align: center;">Filter by Pet Type</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-bottom: 2rem;">
                        <button style="padding: 0.75rem 1.5rem; background: #667eea; color: white; border: 2px solid #667eea; border-radius: 25px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M8 19l-4-4 4-4"></path>
                                <path d="M16 5l4 4-4 4"></path>
                            </svg>
                            Dogs
                        </button>
                        <button style="padding: 0.75rem 1.5rem; background: white; color: #6b7280; border: 2px solid #e5e7eb; border-radius: 25px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                <line x1="15" y1="9" x2="15.01" y2="9"></line>
                            </svg>
                            Cats
                        </button>
                        <button style="padding: 0.75rem 1.5rem; background: white; color: #6b7280; border: 2px solid #e5e7eb; border-radius: 25px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            Birds
                        </button>
                        <button style="padding: 0.75rem 1.5rem; background: white; color: #6b7280; border: 2px solid #e5e7eb; border-radius: 25px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <circle cx="9" cy="9" r="2"></circle>
                                <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                            </svg>
                            Other
                        </button>
                    </div>
                    <div style="text-align: center; color: #6b7280; font-size: 0.9rem;">
                        Showing <strong style="color: #1a1a1a;">12 dogs</strong> available for adoption
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Build interactive filter toggle system',
                duration: '30 minutes',
                learningObjectives: [
                    'Create toggle button interfaces',
                    'Handle multiple filter states',
                    'Filter content dynamically',
                    'Manage active states'
                ]
            },
            useCases: [
                { title: 'Pet Adoption Sites', description: 'Filter pets by type (dogs, cats, etc.)' },
                { title: 'Real Estate', description: 'Filter properties by features' },
                { title: 'Job Sites', description: 'Filter jobs by category' }
            ]
        },

        {
            id: 'expandable-timeline',
            name: 'Expandable Timeline Details',
            type: 'interactions',
            difficulty: 'intermediate',
            hasJS: true,
            mobileFirst: true,
            tags: ['Interactive', 'Expandable', 'Timeline'],
            description: 'Timeline with expandable details for each event. Click to reveal more information!',
            preview: `<div class="component-preview-placeholder">
                <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-width: 400px; margin: 0 auto;">
                    <h4 style="margin: 0 0 1.5rem 0; font-size: 1.2rem; font-weight: 700; color: #1a1a1a; text-align: center;">Company Timeline</h4>
                    <div style="position: relative; padding-left: 2.5rem; margin-bottom: 1.5rem; border-left: 3px solid #667eea;">
                        <div style="position: absolute; left: -8px; top: 0; width: 12px; height: 12px; background: #667eea; border-radius: 50%;"></div>
                        <div style="background: #f8fafc; border: 2px solid #e5e7eb; border-radius: 12px; padding: 1rem; cursor: pointer;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <div style="color: #667eea; font-weight: 700; font-size: 0.85rem; margin-bottom: 0.25rem;">2024</div>
                                    <h5 style="margin: 0; font-size: 1rem; font-weight: 700; color: #1a1a1a;">Major Product Launch</h5>
                                </div>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667eea" stroke-width="2">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                            <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 0.9rem; line-height: 1.5;">
                                Launched our flagship product with advanced AI features, reaching 100K+ users in the first month. This milestone represents years of development and innovation.
                            </div>
                        </div>
                    </div>
                    <div style="position: relative; padding-left: 2.5rem; margin-bottom: 1.5rem; border-left: 3px solid #667eea;">
                        <div style="position: absolute; left: -8px; top: 0; width: 12px; height: 12px; background: #667eea; border-radius: 50%;"></div>
                        <div style="background: #f8fafc; border: 2px solid #e5e7eb; border-radius: 12px; padding: 1rem; cursor: pointer;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <div style="color: #667eea; font-weight: 700; font-size: 0.85rem; margin-bottom: 0.25rem;">2023</div>
                                    <h5 style="margin: 0; font-size: 1rem; font-weight: 700; color: #1a1a1a;">Series A Funding</h5>
                                </div>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667eea" stroke-width="2">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Create timeline with expandable event details',
                duration: '40 minutes',
                learningObjectives: [
                    'Build expandable content sections',
                    'Handle click events for expansion',
                    'Create smooth expand/collapse animations',
                    'Manage multiple expandable items'
                ]
            },
            useCases: [
                { title: 'Historical Sites', description: 'Detailed historical timelines' },
                { title: 'Company Sites', description: 'Expandable company milestones' },
                { title: 'Project Sites', description: 'Detailed project phases' }
            ]
        },

        {
            id: 'game-info-modal',
            name: 'Game Info Modal',
            type: 'interactions',
            difficulty: 'intermediate',
            hasJS: true,
            mobileFirst: true,
            tags: ['Interactive', 'Modal', 'Overlay'],
            description: 'Modal popup with game information, screenshots, and details. Perfect for gaming sites!',
            preview: `<div class="component-preview-placeholder">
                <div style="position: relative; background: #f8fafc; padding: 2rem; border-radius: 16px; min-height: 200px; display: flex; align-items: center; justify-content: center;">
                    <button style="background: #667eea; color: white; border: none; padding: 1rem 2rem; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 1rem;">View Game Details</button>
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.15); padding: 2rem; max-width: 300px; width: 90%; z-index: 10;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                            <h3 style="margin: 0; font-size: 1.3rem; font-weight: 700; color: #1a1a1a;">Epic Adventure</h3>
                            <button style="background: none; border: none; color: #6b7280; cursor: pointer; padding: 0.25rem;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                        <div style="width: 100%; height: 120px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 8px; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600;">Game Screenshot</div>
                        <div style="margin-bottom: 1rem;">
                            <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem;">
                                <span style="background: #f0fdf4; color: #065f46; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.8rem; font-weight: 600;">Adventure</span>
                                <span style="background: #fef3c7; color: #92400e; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.8rem; font-weight: 600;">RPG</span>
                            </div>
                            <p style="margin: 0; color: #6b7280; font-size: 0.9rem; line-height: 1.5;">Embark on an epic journey through mystical lands filled with adventure, magic, and legendary creatures.</p>
                        </div>
                        <button style="background: #667eea; color: white; border: none; padding: 0.75rem; border-radius: 8px; font-weight: 600; cursor: pointer; width: 100%;">Play Now</button>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Build interactive modal popup system',
                duration: '35 minutes',
                learningObjectives: [
                    'Create modal overlay systems',
                    'Handle modal open/close events',
                    'Manage focus and accessibility',
                    'Create responsive modal layouts'
                ]
            },
            useCases: [
                { title: 'Gaming Sites', description: 'Show detailed game information' },
                { title: 'Portfolio Sites', description: 'Project detail modals' },
                { title: 'E-commerce', description: 'Product detail popups' }
            ]
        },

        {
            id: 'lesson-progress',
            name: 'Lesson Progress Checklist',
            type: 'interactions',
            difficulty: 'intermediate',
            hasJS: true,
            mobileFirst: true,
            tags: ['Interactive', 'Progress-Tracking', 'Checklist'],
            description: 'Interactive checklist for tracking lesson or course progress. Perfect for educational sites!',
            preview: `<div class="component-preview-placeholder">
                <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-width: 350px; margin: 0 auto;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                        <h4 style="margin: 0; font-size: 1.2rem; font-weight: 700; color: #1a1a1a;">Course Progress</h4>
                        <div style="background: #f0fdf4; color: #065f46; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">75% Complete</div>
                    </div>
                    <div style="background: #e5e7eb; border-radius: 10px; height: 8px; margin-bottom: 2rem; overflow: hidden;">
                        <div style="background: linear-gradient(90deg, #10b981, #059669); width: 75%; height: 100%; border-radius: 10px;"></div>
                    </div>
                    <div style="space-y: 1rem;">
                        <div style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem; background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; margin-bottom: 0.75rem;">
                            <div style="width: 20px; height: 20px; background: #10b981; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <span style="color: #065f46; font-weight: 600; font-size: 0.9rem;">Introduction to HTML</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem; background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; margin-bottom: 0.75rem;">
                            <div style="width: 20px; height: 20px; background: #10b981; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <span style="color: #065f46; font-weight: 600; font-size: 0.9rem;">CSS Fundamentals</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem; background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; margin-bottom: 0.75rem;">
                            <div style="width: 20px; height: 20px; background: #10b981; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <span style="color: #065f46; font-weight: 600; font-size: 0.9rem;">JavaScript Basics</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem; background: #f8fafc; border: 2px solid #e5e7eb; border-radius: 8px; cursor: pointer;">
                            <div style="width: 20px; height: 20px; background: white; border: 2px solid #d1d5db; border-radius: 4px;"></div>
                            <span style="color: #6b7280; font-weight: 600; font-size: 0.9rem;">Advanced JavaScript</span>
                        </div>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Build interactive progress tracking checklist',
                duration: '35 minutes',
                learningObjectives: [
                    'Create interactive checklists',
                    'Track completion states',
                    'Calculate progress percentages',
                    'Save progress locally'
                ]
            },
            useCases: [
                { title: 'Educational Sites', description: 'Track course progress' },
                { title: 'Training Platforms', description: 'Monitor lesson completion' },
                { title: 'Onboarding', description: 'Track setup progress' }
            ]
        },

        {
            id: 'bmi-calculator',
            name: 'BMI Calculator (Frontend Only)',
            type: 'interactions',
            difficulty: 'intermediate',
            hasJS: true,
            mobileFirst: false,
            tags: ['Interactive', 'JavaScript', 'Forms'],
            description: 'Calculate Body Mass Index with instant results. Enter height and weight to see your BMI!',
            preview: `<div class="component-preview-placeholder">
                <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 300px; margin: 1rem auto;">
                    <h4 style="margin: 0 0 1.5rem 0; font-size: 1.1rem; font-weight: 700; color: #1a1a1a; text-align: center;">BMI Calculator</h4>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <input type="number" placeholder="Height (cm)" style="padding: 0.75rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 0.9rem;">
                        <input type="number" placeholder="Weight (kg)" style="padding: 0.75rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 0.9rem;">
                        <button style="padding: 0.75rem; background: #3b82f6; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">Calculate</button>
                    </div>
                    <div style="margin-top: 1.5rem; padding: 1rem; background: #f0fdf4; border-radius: 8px; text-align: center;">
                        <div style="font-size: 2rem; font-weight: 800; color: #10b981; margin-bottom: 0.25rem;">22.5</div>
                        <div style="font-size: 0.85rem; color: #6b7280; font-weight: 600;">Normal Weight</div>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Build a BMI calculator with instant results',
                duration: '30 minutes',
                learningObjectives: [
                    'Handle number inputs',
                    'Perform calculations',
                    'Validate user input',
                    'Display dynamic results'
                ]
            },
            useCases: [
                { title: 'Fitness Websites', description: 'Calculate BMI for users' },
                { title: 'Health Sites', description: 'Provide health calculators' }
            ]
        }
    ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IntermediateComponentData;
}