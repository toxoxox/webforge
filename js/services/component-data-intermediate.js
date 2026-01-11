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
                ],
                steps: [
                    {
                        title: 'Create the Form Container',
                        description: 'Let\'s start by creating a container for our contact form. This will hold all our form elements!',
                        instruction: 'Add this HTML structure for the contact form:',
                        code: `<section class="contact-section">
  <div class="contact-container">
    <h2 class="contact-title">Contact Us</h2>
    <p class="contact-subtitle">We'd love to hear from you!</p>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'Forms should always be wrapped in a semantic container to provide context and structure!',
                        explanation: 'What we just added:\n• <section class="contact-section"> - Creates a semantic section for our contact form\n• <div class="contact-container"> - Container to control width and centering\n• <h2 class="contact-title"> - Clear title that tells users what this form is for\n• <p class="contact-subtitle"> - Friendly subtitle to encourage users to contact you\n\nThis creates the foundation for our contact form with proper semantic structure.',
                        validation: {
                            required: [
                                {
                                    type: 'tag',
                                    value: 'section',
                                    message: 'Add a <section> tag for the contact form!',
                                    hint: 'Use <section class="contact-section">'
                                },
                                {
                                    type: 'class',
                                    value: 'contact-title',
                                    message: 'Add an h2 with class="contact-title"!',
                                    hint: 'This will be the main heading for the form'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add the Form Element',
                        description: 'Now let\'s add the actual form element that will contain all our input fields.',
                        instruction: 'Add this form element inside the contact-container:',
                        code: `    <form class="contact-form" id="contactForm">
      <!-- Form fields will go here -->
    </form>`,
                        codeFile: 'index.html',
                        tip: 'The form element is essential for proper form submission and accessibility!',
                        explanation: 'What we just added:\n• <form class="contact-form" id="contactForm"> - Creates the form element that will handle submission\n• class="contact-form" - Gives us a class to style the form\n• id="contactForm" - Provides an ID for JavaScript to interact with the form\n• The comment shows where we\'ll add input fields next\n\nThis creates the form wrapper that will contain all our input fields.',
                        validation: {
                            required: [
                                {
                                    type: 'tag',
                                    value: 'form',
                                    message: 'Add a <form> tag for the contact form!',
                                    hint: 'Use <form class="contact-form">'
                                },
                                {
                                    type: 'class',
                                    value: 'contact-form',
                                    message: 'Add class="contact-form" to your form!',
                                    hint: 'This class will help us style the form'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Name Input Field',
                        description: 'Let\'s add the first input field for the user\'s name. We\'ll include a label for accessibility.',
                        instruction: 'Add this name input field inside the form:',
                        code: `      <div class="form-group">
        <label for="name" class="form-label">Name</label>
        <input type="text" id="name" name="name" class="form-input" placeholder="Your full name" required>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'Always use labels with form inputs - they help screen readers and make forms more accessible!',
                        explanation: 'What we just added:\n• <div class="form-group"> - Container for each form field and its label\n• <label for="name"> - Label that describes what this input is for\n• for="name" - Connects the label to the input with matching ID\n• <input type="text"> - Text input field for the user\'s name\n• placeholder="Your full name" - Helpful hint text inside the input\n• required - Makes this field mandatory before form submission\n\nThis creates a properly labeled and accessible name input field.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'form-group',
                                    message: 'Add a div with class="form-group"!',
                                    hint: 'This wraps each form field'
                                },
                                {
                                    type: 'tag',
                                    value: 'label',
                                    message: 'Add a <label> for the input!',
                                    hint: 'Labels are essential for accessibility'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Email Input Field',
                        description: 'Now let\'s add an email input field with built-in email validation.',
                        instruction: 'Add this email input field after the name field:',
                        code: `      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" name="email" class="form-input" placeholder="your@email.com" required>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'Using type="email" gives you automatic email validation and shows the email keyboard on mobile!',
                        explanation: 'What we just added:\n• <input type="email"> - Special email input type that validates email format\n• id="email" name="email" - Unique identifier and form submission name\n• placeholder="your@email.com" - Shows users the expected email format\n• required - Makes email mandatory for form submission\n\nThe browser will automatically check if the email format is valid when the user submits the form.',
                        validation: {
                            required: [
                                {
                                    type: 'attribute',
                                    value: 'type="email"',
                                    message: 'Use type="email" for the email input!',
                                    hint: 'This provides automatic email validation'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Message Textarea',
                        description: 'Let\'s add a larger text area where users can write their message.',
                        instruction: 'Add this message textarea after the email field:',
                        code: `      <div class="form-group">
        <label for="message" class="form-label">Message</label>
        <textarea id="message" name="message" class="form-textarea" placeholder="Tell us how we can help you..." rows="5" required></textarea>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'Textarea is perfect for longer text input like messages or comments!',
                        explanation: 'What we just added:\n• <textarea> - Multi-line text input for longer messages\n• rows="5" - Sets the initial height to 5 lines of text\n• class="form-textarea" - Separate class for styling textareas differently\n• placeholder text - Guides users on what to write\n• required - Ensures users don\'t submit empty messages\n\nTextareas automatically expand as users type and can be resized by dragging the corner.',
                        validation: {
                            required: [
                                {
                                    type: 'tag',
                                    value: 'textarea',
                                    message: 'Add a <textarea> for the message!',
                                    hint: 'Use <textarea> for multi-line text input'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Submit Button',
                        description: 'Finally, let\'s add a submit button so users can send their message.',
                        instruction: 'Add this submit button at the end of the form:',
                        code: `      <div class="form-group">
        <button type="submit" class="form-button">
          <i data-lucide="send"></i>
          Send Message
        </button>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'Using type="submit" makes the button submit the form when clicked or when Enter is pressed!',
                        explanation: 'What we just added:\n• <button type="submit"> - Button that submits the form when clicked\n• <i data-lucide="send"> - Send icon from Lucide icons library\n• "Send Message" - Clear text that tells users what the button does\n• class="form-button" - Class for styling the submit button\n\nThis completes our form structure with a clear call-to-action button.',
                        validation: {
                            required: [
                                {
                                    type: 'attribute',
                                    value: 'type="submit"',
                                    message: 'Use type="submit" for the form button!',
                                    hint: 'This makes the button submit the form'
                                },
                                {
                                    type: 'attribute',
                                    value: 'data-lucide',
                                    message: 'Add a Lucide icon to the button!',
                                    hint: 'Use <i data-lucide="send"></i>'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Timeline Container',
                        description: 'Let\'s start by creating a container for our timeline. This will hold all our historical events!',
                        instruction: 'Add this HTML structure for the timeline:',
                        code: `<section class="timeline-section">
  <div class="timeline-container">
    <h2 class="timeline-title">Historical Timeline</h2>
    <div class="timeline">
      <!-- Timeline events will go here -->
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'Timelines are perfect for showing the progression of events over time!',
                        explanation: 'What we just added:\n• <section class="timeline-section"> - Creates a semantic section for our timeline\n• <div class="timeline-container"> - Container to control width and centering\n• <h2 class="timeline-title"> - Clear title for the timeline section\n• <div class="timeline"> - Main container that will hold all timeline events\n\nThis creates the foundation for our timeline with proper semantic structure.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'timeline-section',
                                    message: 'Add a section with class="timeline-section"!',
                                    hint: 'This will be the main container for the timeline'
                                },
                                {
                                    type: 'class',
                                    value: 'timeline',
                                    message: 'Add a div with class="timeline"!',
                                    hint: 'This will hold all the timeline events'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add First Timeline Event',
                        description: 'Now let\'s add our first timeline event. Each event will have a date, title, and description.',
                        instruction: 'Add this timeline event inside the timeline div:',
                        code: `      <div class="timeline-event">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="timeline-date">2024</div>
          <h3 class="timeline-event-title">Latest Achievement</h3>
          <p class="timeline-description">Something amazing happened this year that changed everything.</p>
        </div>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'Each timeline event has a marker (the dot) and content (date, title, description)!',
                        explanation: 'What we just added:\n• <div class="timeline-event"> - Container for one complete timeline event\n• <div class="timeline-marker"> - The circular dot that appears on the timeline line\n• <div class="timeline-content"> - Container for the event information\n• <div class="timeline-date"> - The year or date when this event happened\n• <h3 class="timeline-event-title"> - The main title of the event\n• <p class="timeline-description"> - Detailed description of what happened\n\nThis creates one complete timeline event with all the necessary information.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'timeline-event',
                                    message: 'Add a div with class="timeline-event"!',
                                    hint: 'This contains one timeline event'
                                },
                                {
                                    type: 'class',
                                    value: 'timeline-marker',
                                    message: 'Add a div with class="timeline-marker"!',
                                    hint: 'This will be the circular dot on the timeline'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add More Timeline Events',
                        description: 'Let\'s add a few more events to make our timeline more interesting and show the progression over time.',
                        instruction: 'Add these additional timeline events after the first one:',
                        code: `      <div class="timeline-event">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="timeline-date">2020</div>
          <h3 class="timeline-event-title">Major Milestone</h3>
          <p class="timeline-description">An important breakthrough that set the foundation for future success.</p>
        </div>
      </div>

      <div class="timeline-event">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="timeline-date">2018</div>
          <h3 class="timeline-event-title">The Beginning</h3>
          <p class="timeline-description">Where it all started - the first step on an incredible journey.</p>
        </div>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'Adding multiple events shows the progression and makes the timeline more engaging!',
                        explanation: 'What we just added:\n• Two more timeline events following the same structure\n• Each event has its own date (2020, 2018) showing progression backwards in time\n• Different titles and descriptions to show variety\n• Same classes for consistent styling\n\nNow we have three events that tell a story from 2018 to 2024, showing progression over time.',
                        validation: {
                            required: [
                                {
                                    type: 'text',
                                    value: '2020',
                                    message: 'Add the 2020 timeline event!',
                                    hint: 'Include the event with date 2020'
                                },
                                {
                                    type: 'text',
                                    value: '2018',
                                    message: 'Add the 2018 timeline event!',
                                    hint: 'Include the event with date 2018'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Timeline Container',
                        description: 'Now let\'s add CSS to make our timeline look professional with proper spacing and layout.',
                        instruction: 'Add this CSS for the timeline container:',
                        code: `.timeline-section {
  padding: 4rem 2rem;
  background: #f8fafc;
}

.timeline-container {
  max-width: 800px;
  margin: 0 auto;
}

.timeline-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1a1a1a;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}`,
                        codeFile: 'style.css',
                        tip: 'The position: relative on the timeline container is important for positioning the timeline line!',
                        explanation: 'What each CSS property does:\n• padding: 4rem 2rem - Adds generous spacing around the timeline section\n• background: #f8fafc - Light gray background to make timeline stand out\n• max-width: 800px - Keeps timeline readable, not too wide\n• margin: 0 auto - Centers the timeline container\n• text-align: center - Centers the main title\n• position: relative - Allows us to position the timeline line absolutely\n• padding-left: 2rem - Makes space for the timeline line and markers\n\nThis creates a clean, centered layout for our timeline.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.timeline-section',
                                    message: 'Add CSS styling for the timeline section!',
                                    hint: 'Style the .timeline-section with padding and background'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Create the Timeline Line',
                        description: 'Let\'s add the vertical line that connects all our timeline events together.',
                        instruction: 'Add this CSS to create the timeline line:',
                        code: `.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #667eea;
  border-radius: 2px;
}`,
                        codeFile: 'style.css',
                        tip: 'Using ::before pseudo-element is a clean way to add decorative elements without extra HTML!',
                        explanation: 'What this CSS creates:\n• ::before - Creates a pseudo-element (invisible HTML element)\n• content: \'\' - Required for pseudo-elements to appear\n• position: absolute - Positions the line exactly where we want it\n• left: 15px - Places the line 15px from the left edge\n• top: 0; bottom: 0 - Makes the line stretch the full height\n• width: 3px - Makes the line 3 pixels wide\n• background: #667eea - Blue color for the timeline line\n• border-radius: 2px - Slightly rounds the line edges\n\nThis creates the vertical line that connects all timeline events.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.timeline::before',
                                    message: 'Add the timeline line using ::before pseudo-element!',
                                    hint: 'Use .timeline::before to create the vertical line'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style Timeline Events and Markers',
                        description: 'Now let\'s style the individual events and create the circular markers that sit on the timeline line.',
                        instruction: 'Add this CSS for the timeline events:',
                        code: `.timeline-event {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 0.5rem;
  width: 16px;
  height: 16px;
  background: #667eea;
  border: 3px solid white;
  border-radius: 50%;
  box-shadow: 0 0 0 3px #667eea;
}

.timeline-content {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}`,
                        codeFile: 'style.css',
                        tip: 'The box-shadow on the marker creates a nice ring effect around the dot!',
                        explanation: 'What each style creates:\n• .timeline-event position: relative - Allows absolute positioning of the marker\n• margin-bottom: 3rem - Adds space between timeline events\n• .timeline-marker position: absolute - Positions marker exactly on the timeline line\n• left: -2rem - Moves marker to sit on the timeline line\n• width/height: 16px - Makes marker a perfect circle\n• border: 3px solid white - White border around the blue circle\n• border-radius: 50% - Makes the square into a perfect circle\n• box-shadow: 0 0 0 3px #667eea - Creates blue ring around white border\n• .timeline-content - Styles the event information with white background and shadow\n\nThis creates professional-looking timeline events with circular markers.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.timeline-marker',
                                    message: 'Add CSS styling for the timeline markers!',
                                    hint: 'Style the .timeline-marker to create circular dots'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style Timeline Content',
                        description: 'Finally, let\'s style the text content within each timeline event to make it look polished and readable.',
                        instruction: 'Add this CSS for the timeline content:',
                        code: `.timeline-date {
  color: #667eea;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.timeline-event-title {
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
}

.timeline-description {
  margin: 0;
  color: #6b7280;
  line-height: 1.6;
  font-size: 1rem;
}`,
                        codeFile: 'style.css',
                        tip: 'Using different colors and font weights creates a clear visual hierarchy in the timeline!',
                        explanation: 'What each style accomplishes:\n• .timeline-date color: #667eea - Makes dates blue to match the timeline line\n• font-weight: 700 - Makes dates bold and prominent\n• text-transform: uppercase - Makes dates stand out more\n• letter-spacing: 0.05em - Adds slight spacing between letters\n• .timeline-event-title font-size: 1.25rem - Makes titles larger than body text\n• color: #1a1a1a - Dark color for high contrast and readability\n• .timeline-description color: #6b7280 - Gray color for supporting text\n• line-height: 1.6 - Comfortable spacing between lines for easy reading\n\nThis creates a clear hierarchy: blue dates, dark titles, gray descriptions.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.timeline-date',
                                    message: 'Add CSS styling for timeline dates!',
                                    hint: 'Style the .timeline-date with blue color and bold weight'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Pricing Section Container',
                        description: 'Let\'s start by creating a container for our pricing table. This will help potential customers compare different plans!',
                        instruction: 'Add this HTML structure for the pricing section:',
                        code: `<section class="pricing-section">
  <div class="pricing-container">
    <h2 class="pricing-title">Choose Your Plan</h2>
    <p class="pricing-subtitle">Select the perfect plan for your needs</p>
    <div class="pricing-grid">
      <!-- Pricing cards will go here -->
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'Pricing tables help customers make decisions by clearly comparing features and costs!',
                        explanation: 'What we just added:\n• <section class="pricing-section"> - Semantic section for the pricing area\n• <div class="pricing-container"> - Container to control width and centering\n• <h2 class="pricing-title"> - Main heading that introduces the pricing options\n• <p class="pricing-subtitle"> - Supporting text to encourage selection\n• <div class="pricing-grid"> - Grid container that will hold individual pricing cards\n\nThis creates a professional foundation for our pricing comparison table.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'pricing-section',
                                    message: 'Add a section with class="pricing-section"!',
                                    hint: 'This will be the main container for pricing'
                                },
                                {
                                    type: 'class',
                                    value: 'pricing-grid',
                                    message: 'Add a div with class="pricing-grid"!',
                                    hint: 'This will hold the pricing cards in a grid layout'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Basic Pricing Card',
                        description: 'Now let\'s create our first pricing card for the basic plan. This will include the plan name, price, and features.',
                        instruction: 'Add this basic pricing card inside the pricing-grid:',
                        code: `      <div class="pricing-card">
        <div class="plan-header">
          <h3 class="plan-name">Basic</h3>
          <div class="plan-price">
            <span class="price-amount">$9</span>
            <span class="price-period">/month</span>
          </div>
        </div>
        <ul class="plan-features">
          <li class="feature-item">
            <i data-lucide="check"></i>
            <span>5 Projects</span>
          </li>
          <li class="feature-item">
            <i data-lucide="check"></i>
            <span>10GB Storage</span>
          </li>
          <li class="feature-item">
            <i data-lucide="check"></i>
            <span>Email Support</span>
          </li>
        </ul>
        <button class="plan-button">Choose Basic</button>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'Using check icons for features makes it clear what\'s included in each plan!',
                        explanation: 'What we just added:\n• <div class="pricing-card"> - Container for one complete pricing plan\n• <div class="plan-header"> - Top section with plan name and price\n• <h3 class="plan-name"> - Name of the pricing plan\n• <span class="price-amount"> - The main price number\n• <span class="price-period"> - The billing period (monthly/yearly)\n• <ul class="plan-features"> - List of features included in this plan\n• <i data-lucide="check"> - Check mark icons to show included features\n• <button class="plan-button"> - Call-to-action button to select this plan\n\nThis creates a complete pricing card with all essential information.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'pricing-card',
                                    message: 'Add a div with class="pricing-card"!',
                                    hint: 'This contains one pricing plan'
                                },
                                {
                                    type: 'class',
                                    value: 'plan-features',
                                    message: 'Add a ul with class="plan-features"!',
                                    hint: 'This will list the plan features'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Pro Pricing Card (Popular)',
                        description: 'Let\'s add a Pro plan that will be marked as "Popular" to guide customer choice.',
                        instruction: 'Add this Pro pricing card after the Basic card:',
                        code: `      <div class="pricing-card popular">
        <div class="popular-badge">Most Popular</div>
        <div class="plan-header">
          <h3 class="plan-name">Pro</h3>
          <div class="plan-price">
            <span class="price-amount">$29</span>
            <span class="price-period">/month</span>
          </div>
        </div>
        <ul class="plan-features">
          <li class="feature-item">
            <i data-lucide="check"></i>
            <span>50 Projects</span>
          </li>
          <li class="feature-item">
            <i data-lucide="check"></i>
            <span>100GB Storage</span>
          </li>
          <li class="feature-item">
            <i data-lucide="check"></i>
            <span>Priority Support</span>
          </li>
          <li class="feature-item">
            <i data-lucide="check"></i>
            <span>Advanced Features</span>
          </li>
        </ul>
        <button class="plan-button primary">Choose Pro</button>
      </div>`,
        codeFile: 'index.html',
        tip: 'The "popular" class and badge help guide customers toward your recommended plan!',
        explanation: 'What we just added:\n• class="pricing-card popular" - Adds popular styling to make this plan stand out\n• <div class="popular-badge"> - Badge that says "Most Popular" to draw attention\n• More features than Basic plan (50 projects vs 5, 100GB vs 10GB)\n• "Priority Support" and "Advanced Features" - Premium benefits\n• class="primary" on button - Makes the button more prominent\n\nThis creates a highlighted plan that encourages customers to choose the higher-value option.',
        validation: {
            required: [
                {
                    type: 'class',
                    value: 'popular',
                    message: 'Add class="popular" to the Pro pricing card!',
                    hint: 'This makes the Pro plan stand out as recommended'
                },
                {
                    type: 'class',
                    value: 'popular-badge',
                    message: 'Add a div with class="popular-badge"!',
                    hint: 'This shows "Most Popular" text'
                }
            ]
        }
    },
    {
        title: 'Add Enterprise Pricing Card',
        description: 'Let\'s complete our pricing table with an Enterprise plan for larger customers.',
        instruction: 'Add this Enterprise pricing card after the Pro card:',
        code: `      <div class="pricing-card">
        <div class="plan-header">
          <h3 class="plan-name">Enterprise</h3>
          <div class="plan-price">
            <span class="price-amount">$99</span>
            <span class="price-period">/month</span>
          </div>
        </div>
        <ul class="plan-features">
          <li class="feature-item">
            <i data-lucide="check"></i>
            <span>Unlimited Projects</span>
          </li>
          <li class="feature-item">
            <i data-lucide="check"></i>
            <span>1TB Storage</span>
          </li>
          <li class="feature-item">
            <i data-lucide="check"></i>
            <span>24/7 Phone Support</span>
          </li>
          <li class="feature-item">
            <i data-lucide="check"></i>
            <span>Custom Integrations</span>
          </li>
          <li class="feature-item">
            <i data-lucide="check"></i>
            <span>Dedicated Account Manager</span>
          </li>
        </ul>
        <button class="plan-button">Choose Enterprise</button>
      </div>`,
        codeFile: 'index.html',
        tip: 'Enterprise plans typically offer unlimited usage and premium support options!',
        explanation: 'What we just added:\n• Enterprise plan with premium pricing ($99/month)\n• "Unlimited Projects" - No limits for large organizations\n• "1TB Storage" - Massive storage capacity\n• "24/7 Phone Support" - Premium support channel\n• "Custom Integrations" - Enterprise-level customization\n• "Dedicated Account Manager" - Personal service for large accounts\n\nThis completes our three-tier pricing structure: Basic, Pro (popular), and Enterprise.',
        validation: {
            required: [
                {
                    type: 'text',
                    value: 'Enterprise',
                    message: 'Add the Enterprise pricing plan!',
                    hint: 'Include the Enterprise plan with premium features'
                },
                {
                    type: 'text',
                    value: 'Unlimited Projects',
                    message: 'Add unlimited projects feature!',
                    hint: 'Enterprise plans typically offer unlimited usage'
                }
            ]
        }
    },
    {
        title: 'Style the Pricing Section',
        description: 'Now let\'s add CSS to make our pricing table look professional and well-organized.',
        instruction: 'Add this CSS for the pricing section:',
        code: `.pricing-section {
  padding: 4rem 2rem;
  background: #f8fafc;
}

.pricing-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.pricing-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.pricing-subtitle {
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 3rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}`,
        codeFile: 'style.css',
        tip: 'CSS Grid with auto-fit makes the pricing cards automatically adjust to different screen sizes!',
        explanation: 'What each CSS property does:\n• padding: 4rem 2rem - Generous spacing around the pricing section\n• background: #f8fafc - Light background to make cards stand out\n• max-width: 1200px - Keeps content readable on large screens\n• text-align: center - Centers the title and subtitle\n• font-size: 2.5rem - Large, prominent title\n• color: #6b7280 - Gray subtitle for visual hierarchy\n• display: grid - Creates a grid layout for pricing cards\n• grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) - Responsive columns\n• gap: 2rem - Space between pricing cards\n\nThis creates a clean, centered layout that works on all screen sizes.',
        validation: {
            required: [
                {
                    type: 'css-rule',
                    value: '.pricing-section',
                    message: 'Add CSS styling for the pricing section!',
                    hint: 'Style the .pricing-section with padding and background'
                }
            ]
        }
    },
    {
        title: 'Style Pricing Cards and Popular Badge',
        description: 'Let\'s style the individual pricing cards and make the popular plan stand out.',
        instruction: 'Add this CSS for the pricing cards:',
        code: `.pricing-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.pricing-card.popular {
  border: 3px solid #667eea;
  transform: scale(1.05);
}

.popular-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #667eea;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}`,
        codeFile: 'style.css',
        tip: 'The transform: scale(1.05) makes the popular card slightly larger to draw attention!',
        explanation: 'What each style creates:\n• background: white - Clean white background for cards\n• border-radius: 16px - Rounded corners for modern look\n• box-shadow - Subtle shadow for depth\n• transition - Smooth animations on hover\n• :hover transform: translateY(-8px) - Cards lift up when hovered\n• .popular border: 3px solid #667eea - Blue border for popular plan\n• transform: scale(1.05) - Makes popular card 5% larger\n• .popular-badge position: absolute - Positions badge at top of card\n• transform: translateX(-50%) - Centers the badge horizontally\n\nThis creates attractive cards with the popular plan clearly highlighted.',
        validation: {
            required: [
                {
                    type: 'css-rule',
                    value: '.pricing-card',
                    message: 'Add CSS styling for pricing cards!',
                    hint: 'Style the .pricing-card with background and shadow'
                }
            ]
        }
    }
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
                ],
                steps: [
                    {
                        title: 'Create the Slider Container',
                        description: 'Let\'s start by creating a container for our before-after slider. This is perfect for showing transformations!',
                        instruction: 'Add this HTML structure for the slider:',
                        code: `<section class="slider-section">
  <div class="slider-container">
    <h2 class="slider-title">Before & After</h2>
    <div class="before-after-slider" id="beforeAfterSlider">
      <div class="slider-images">
        <!-- Images will go here -->
      </div>
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'Before-after sliders are great for showing transformations, renovations, or design changes!',
                        explanation: 'What we just added:\n• <section class="slider-section"> - Semantic section for the slider area\n• <div class="slider-container"> - Container to control width and centering\n• <h2 class="slider-title"> - Title that explains what the slider shows\n• <div class="before-after-slider"> - Main slider container with ID for JavaScript\n• <div class="slider-images"> - Container that will hold the before and after images\n\nThis creates the foundation for our interactive image comparison slider.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'before-after-slider',
                                    message: 'Add a div with class="before-after-slider"!',
                                    hint: 'This will be the main slider container'
                                },
                                {
                                    type: 'id',
                                    value: 'beforeAfterSlider',
                                    message: 'Add id="beforeAfterSlider" to the slider!',
                                    hint: 'JavaScript needs this ID to make the slider interactive'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Before and After Images',
                        description: 'Now let\'s add the before and after images that users will compare by dragging the slider.',
                        instruction: 'Replace the comment <!-- Images will go here --> with these image elements:',
                        code: `      <div class="slider-images">
        <div class="image-container before-image">
          <img src="https://picsum.photos/600/400?random=1" alt="Before image" class="slider-img">
          <div class="image-label">Before</div>
        </div>
        
        <div class="image-container after-image">
          <img src="https://picsum.photos/600/400?random=2" alt="After image" class="slider-img">
          <div class="image-label">After</div>
        </div>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'Using placeholder images from Picsum lets you test the slider before adding your own images!',
                        explanation: 'What we just added:\n• <div class="image-container before-image"> - Container for the "before" image\n• <img class="slider-img"> - The actual before image\n• <div class="image-label"> - Text label that says "Before"\n• <div class="image-container after-image"> - Container for the "after" image\n• Same structure for the after image with "After" label\n• alt attributes - Describe images for screen readers\n\nBoth images will be positioned on top of each other, and we\'ll use CSS to reveal portions of each.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'before-image',
                                    message: 'Add a div with class="before-image"!',
                                    hint: 'This contains the before image'
                                },
                                {
                                    type: 'class',
                                    value: 'after-image',
                                    message: 'Add a div with class="after-image"!',
                                    hint: 'This contains the after image'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Slider Handle',
                        description: 'Let\'s add the draggable handle that users will use to control the slider.',
                        instruction: 'Add this slider handle right after the closing </div> of slider-images, but still inside the before-after-slider div:',
                        code: `      <!-- Add this after </div> of slider-images -->
      <div class="slider-handle" id="sliderHandle">
        <div class="handle-line"></div>
        <div class="handle-circle">
          <i data-lucide="move-horizontal"></i>
        </div>
      </div>
    </div> <!-- closes before-after-slider -->`,
                        codeFile: 'index.html',
                        tip: 'The move-horizontal icon clearly shows users that they can drag this element!',
                        explanation: 'What we just added:\n• <div class="slider-handle"> - The draggable control element\n• id="sliderHandle" - ID for JavaScript to make it draggable\n• <div class="handle-line"> - Vertical line that shows the split between images\n• <div class="handle-circle"> - Circular button that users can grab\n• <i data-lucide="move-horizontal"> - Icon showing horizontal movement\n\nThis creates the interactive element that users will drag to compare the images.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'slider-handle',
                                    message: 'Add a div with class="slider-handle"!',
                                    hint: 'This will be the draggable control'
                                },
                                {
                                    type: 'attribute',
                                    value: 'data-lucide="move-horizontal"',
                                    message: 'Add the move-horizontal icon!',
                                    hint: 'Use <i data-lucide="move-horizontal"></i>'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Slider Container',
                        description: 'Now let\'s add CSS to create the basic layout and positioning for our slider.',
                        instruction: 'Add this CSS for the slider container:',
                        code: `.slider-section {
  padding: 4rem 2rem;
  background: #f8fafc;
}

.slider-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.slider-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1a1a1a;
}

.before-after-slider {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}`,
                        codeFile: 'style.css',
                        tip: 'The overflow: hidden on the slider container ensures images don\'t extend beyond the rounded corners!',
                        explanation: 'What each CSS property does:\n• padding: 4rem 2rem - Generous spacing around the slider section\n• max-width: 800px - Keeps content readable and centered\n• text-align: center - Centers the title and slider\n• position: relative - Allows absolute positioning of child elements\n• max-width: 600px - Reasonable size for image comparison\n• border-radius: 12px - Rounded corners for modern look\n• overflow: hidden - Clips content to the rounded container\n• box-shadow - Adds depth and makes slider stand out\n\nThis creates a clean, centered layout for our interactive slider.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.before-after-slider',
                                    message: 'Add CSS styling for the slider container!',
                                    hint: 'Style the .before-after-slider with position and dimensions'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Position and Style Images',
                        description: 'Let\'s position the before and after images on top of each other and style them properly.',
                        instruction: 'Add this CSS for the image positioning:',
                        code: `.slider-images {
  position: relative;
  width: 100%;
  height: 400px;
}

.image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slider-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.after-image {
  clip-path: inset(0 50% 0 0);
}

.image-label {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
}`,
                        codeFile: 'style.css',
                        tip: 'The clip-path property is the magic that reveals only part of the after image!',
                        explanation: 'What each style accomplishes:\n• .slider-images position: relative - Container for absolutely positioned images\n• height: 400px - Fixed height for consistent display\n• .image-container position: absolute - Stacks images on top of each other\n• width/height: 100% - Images fill the entire container\n• object-fit: cover - Images maintain aspect ratio and fill space\n• .after-image clip-path: inset(0 50% 0 0) - Shows only left 50% of after image\n• .image-label - Floating labels that identify before/after\n• background: rgba(0, 0, 0, 0.7) - Semi-transparent dark background for labels\n\nThis creates the layered image effect where the after image is clipped to show only a portion.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.after-image',
                                    message: 'Add CSS styling for the after image!',
                                    hint: 'Use clip-path to show only part of the after image'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Slider Handle',
                        description: 'Now let\'s style the draggable handle that controls the image comparison.',
                        instruction: 'Add this CSS for the slider handle:',
                        code: `.slider-handle {
  position: absolute;
  top: 0;
  left: 50%;
  width: 4px;
  height: 100%;
  background: white;
  cursor: ew-resize;
  z-index: 10;
  transform: translateX(-50%);
}

.handle-line {
  width: 100%;
  height: 100%;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.handle-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  color: #667eea;
}

.handle-circle i {
  width: 20px;
  height: 20px;
}`,
                        codeFile: 'style.css',
                        tip: 'The cursor: ew-resize shows users they can drag horizontally when hovering over the handle!',
                        explanation: 'What each style creates:\n• .slider-handle position: absolute; left: 50% - Centers handle vertically on slider\n• width: 4px; height: 100% - Creates thin vertical line\n• cursor: ew-resize - Shows horizontal resize cursor on hover\n• z-index: 10 - Ensures handle appears above images\n• transform: translateX(-50%) - Centers the handle perfectly\n• .handle-line - The visible white line with shadow\n• .handle-circle - Circular grab point in the middle\n• transform: translate(-50%, -50%) - Centers circle on the line\n• display: flex; align-items: center - Centers the icon in the circle\n\nThis creates an intuitive, draggable control that clearly shows users how to interact with the slider.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.slider-handle',
                                    message: 'Add CSS styling for the slider handle!',
                                    hint: 'Style the .slider-handle with positioning and cursor'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Make the Slider Interactive',
                        description: 'Finally, let\'s add JavaScript to make the slider actually work! When users drag the handle, we\'ll update the clip-path to reveal more or less of the after image.',
                        instruction: 'Add this JavaScript to make the slider draggable:',
                        code: `// Get the slider elements
const slider = document.getElementById('beforeAfterSlider');
const handle = document.querySelector('.slider-handle');
const afterImage = document.querySelector('.after-image');

// Track if user is currently dragging
let isDragging = false;

// Function to update slider position
function updateSliderPosition(x) {
  // Get slider boundaries
  const sliderRect = slider.getBoundingClientRect();
  
  // Calculate position as percentage (0 to 100)
  let percentage = ((x - sliderRect.left) / sliderRect.width) * 100;
  
  // Keep percentage between 0 and 100
  percentage = Math.max(0, Math.min(100, percentage));
  
  // Move the handle to new position
  handle.style.left = percentage + '%';
  
  // Update clip-path to reveal that much of the after image
  afterImage.style.clipPath = 'inset(0 ' + (100 - percentage) + '% 0 0)';
}

// When mouse button is pressed on handle, start dragging
handle.addEventListener('mousedown', function() {
  isDragging = true;
});

// When mouse moves anywhere on page while dragging
document.addEventListener('mousemove', function(e) {
  if (isDragging) {
    updateSliderPosition(e.clientX);
  }
});

// When mouse button is released, stop dragging
document.addEventListener('mouseup', function() {
  isDragging = false;
});

// Also support touch devices (mobile/tablet)
handle.addEventListener('touchstart', function() {
  isDragging = true;
});

document.addEventListener('touchmove', function(e) {
  if (isDragging) {
    updateSliderPosition(e.touches[0].clientX);
  }
});

document.addEventListener('touchend', function() {
  isDragging = false;
});`,
                        codeFile: 'script.js',
                        tip: 'We listen for mouse events on the whole document so dragging works even if the cursor moves outside the handle!',
                        explanation: 'How the JavaScript works:\n\n1. Get elements: We grab the slider, handle, and after-image using their IDs and classes.\n\n2. Track dragging: The isDragging variable remembers if the user is currently dragging.\n\n3. updateSliderPosition function:\n   • Gets the slider\'s position on screen with getBoundingClientRect()\n   • Calculates what percentage across the slider the mouse is\n   • Clamps the value between 0-100 so it can\'t go outside\n   • Moves the handle by setting its left position\n   • Updates clip-path to show that percentage of the after image\n\n4. Event listeners:\n   • mousedown on handle: Start dragging\n   • mousemove on document: Update position while dragging\n   • mouseup on document: Stop dragging\n   • Touch events: Same logic for mobile devices\n\nNow try dragging the handle left and right to compare the images!',
                        validation: {
                            required: [
                                {
                                    type: 'function',
                                    value: 'updateSliderPosition',
                                    message: 'Add the updateSliderPosition function!',
                                    hint: 'This function calculates and applies the new slider position'
                                },
                                {
                                    type: 'keyword',
                                    value: 'addEventListener',
                                    message: 'Add event listeners for mouse interactions!',
                                    hint: 'Use addEventListener to handle mousedown, mousemove, and mouseup'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Appointment Container',
                        description: 'Let\'s start by creating a container for our appointment selector. This will help customers book appointments easily!',
                        instruction: 'Add this HTML structure for the appointment selector:',
                        code: `<section class="appointment-section">
  <div class="appointment-container">
    <h2 class="appointment-title">Book Your Appointment</h2>
    <div class="appointment-form">
      <!-- Form elements will go here -->
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'Appointment selectors make it easy for customers to book services without phone calls!',
                        explanation: 'What we just added:\n• <section class="appointment-section"> - Semantic section for the appointment booking area\n• <div class="appointment-container"> - Container to control width and centering\n• <h2 class="appointment-title"> - Clear title that explains the purpose\n• <div class="appointment-form"> - Container that will hold all form elements\n\nThis creates the foundation for our appointment booking system.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'appointment-section',
                                    message: 'Add a section with class="appointment-section"!',
                                    hint: 'This will be the main container for appointment booking'
                                },
                                {
                                    type: 'class',
                                    value: 'appointment-form',
                                    message: 'Add a div with class="appointment-form"!',
                                    hint: 'This will hold the appointment form elements'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Date Selection Input',
                        description: 'Now let\'s add a date picker so customers can choose when they want their appointment.',
                        instruction: 'Add this date input inside the appointment-form:',
                        code: `      <div class="form-group">
        <label for="appointmentDate" class="form-label">
          <i data-lucide="calendar"></i>
          Select Date
        </label>
        <input type="date" id="appointmentDate" class="date-input" required>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'The date input type automatically shows a calendar picker on most browsers!',
                        explanation: 'What we just added:\n• <div class="form-group"> - Container for the date selection field\n• <label for="appointmentDate"> - Label that describes the input\n• <i data-lucide="calendar"> - Calendar icon to make the purpose clear\n• <input type="date"> - Special date input that shows a calendar picker\n• required - Makes date selection mandatory\n\nThis creates a user-friendly date selection interface.',
                        validation: {
                            required: [
                                {
                                    type: 'attribute',
                                    value: 'type="date"',
                                    message: 'Use type="date" for the date input!',
                                    hint: 'This provides a calendar picker interface'
                                },
                                {
                                    type: 'attribute',
                                    value: 'data-lucide="calendar"',
                                    message: 'Add a calendar icon to the label!',
                                    hint: 'Use <i data-lucide="calendar"></i>'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Create Time Slots Grid',
                        description: 'Let\'s add a grid of available time slots that customers can choose from.',
                        instruction: 'Add this time slots section after the date input:',
                        code: `      <div class="form-group">
        <label class="form-label">
          <i data-lucide="clock"></i>
          Available Times
        </label>
        <div class="time-slots-grid" id="timeSlotsGrid">
          <button type="button" class="time-slot available" data-time="09:00">9:00 AM</button>
          <button type="button" class="time-slot available" data-time="10:00">10:00 AM</button>
          <button type="button" class="time-slot available" data-time="11:00">11:00 AM</button>
          <button type="button" class="time-slot booked" data-time="13:00" disabled>1:00 PM</button>
          <button type="button" class="time-slot available" data-time="14:00">2:00 PM</button>
          <button type="button" class="time-slot available" data-time="15:00">3:00 PM</button>
        </div>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'Using data-time attributes makes it easy to track which time slot was selected!',
                        explanation: 'What we just added:\n• <label> with clock icon - Shows this section is for time selection\n• <div class="time-slots-grid"> - Grid container for time slot buttons\n• <button class="time-slot available"> - Available time slots customers can select\n• data-time="09:00" - Stores the actual time value for each button\n• class="booked" and disabled - Shows unavailable time slots\n• Different times throughout the day - Gives customers options\n\nThis creates an interactive grid where customers can see and select available appointment times.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'time-slots-grid',
                                    message: 'Add a div with class="time-slots-grid"!',
                                    hint: 'This will hold all the time slot buttons'
                                },
                                {
                                    type: 'class',
                                    value: 'time-slot',
                                    message: 'Add buttons with class="time-slot"!',
                                    hint: 'Each time slot needs this class for styling'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Booking Confirmation Button',
                        description: 'Let\'s add a button that customers can click to confirm their appointment booking.',
                        instruction: 'Add this booking button after the time slots:',
                        code: `      <div class="form-group">
        <button type="submit" class="book-appointment-btn" id="bookAppointmentBtn" disabled>
          <i data-lucide="check-circle"></i>
          Book Appointment
        </button>
        <div class="selected-time" id="selectedTimeDisplay">
          Please select a date and time
        </div>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'Starting with the button disabled ensures customers select both date and time first!',
                        explanation: 'What we just added:\n• <button type="submit"> - Main booking confirmation button\n• class="book-appointment-btn" - Class for styling the primary action button\n• disabled - Button starts disabled until date and time are selected\n• <i data-lucide="check-circle"> - Check icon to show confirmation action\n• <div class="selected-time"> - Shows customers their selected date and time\n• id="selectedTimeDisplay" - JavaScript will update this text\n\nThis creates a clear call-to-action that shows the selected appointment details.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'book-appointment-btn',
                                    message: 'Add a button with class="book-appointment-btn"!',
                                    hint: 'This will be the main booking button'
                                },
                                {
                                    type: 'attribute',
                                    value: 'data-lucide="check-circle"',
                                    message: 'Add a check-circle icon to the button!',
                                    hint: 'Use <i data-lucide="check-circle"></i>'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Appointment Section',
                        description: 'Now let\'s add CSS to make our appointment selector look professional and inviting.',
                        instruction: 'Add this CSS for the appointment section:',
                        code: `.appointment-section {
  padding: 4rem 2rem;
  background: #f8fafc;
}

.appointment-container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.appointment-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #1a1a1a;
}

.form-group {
  margin-bottom: 2rem;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
  font-size: 1rem;
}`,
                        codeFile: 'style.css',
                        tip: 'The white container on light background creates a clean, focused booking experience!',
                        explanation: 'What each CSS property does:\n• padding: 4rem 2rem - Generous spacing around the appointment section\n• background: #f8fafc - Light background to make the form stand out\n• max-width: 600px - Keeps the form compact and easy to use\n• background: white - Clean white background for the form container\n• border-radius: 16px - Rounded corners for modern appearance\n• box-shadow - Subtle shadow for depth and focus\n• text-align: center - Centers the main title\n• display: flex; align-items: center - Aligns icons with label text\n• gap: 0.5rem - Space between icons and text\n\nThis creates an attractive, professional appointment booking interface.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.appointment-section',
                                    message: 'Add CSS styling for the appointment section!',
                                    hint: 'Style the .appointment-section with padding and background'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style Time Slots Grid and Interactions',
                        description: 'Let\'s style the time slots grid to make it clear which times are available, booked, or selected.',
                        instruction: 'Add this CSS for the time slots:',
                        code: `.date-input {
  width: 100%;
  padding: 0.875rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.date-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.time-slots-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.75rem;
}

.time-slot {
  padding: 0.875rem;
  border: 2px solid #e5e7eb;
  background: white;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.time-slot.available:hover {
  border-color: #667eea;
  background: #f0f4ff;
}

.time-slot.selected {
  border-color: #10b981;
  background: #f0fdf4;
  color: #065f46;
}

.time-slot.booked {
  background: #f9fafb;
  color: #9ca3af;
  cursor: not-allowed;
}`,
                        codeFile: 'style.css',
                        tip: 'Different colors for available, selected, and booked slots help users understand the interface instantly!',
                        explanation: 'What each style creates:\n• .date-input - Styles the date picker with focus effects\n• border-color: #667eea on focus - Blue border when clicked\n• box-shadow on focus - Subtle glow effect\n• grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)) - Responsive grid\n• .time-slot - Base styling for all time slot buttons\n• .available:hover - Blue highlight when hovering over available slots\n• .selected - Green styling for the chosen time slot\n• .booked - Gray styling for unavailable times\n• cursor: not-allowed - Shows unavailable slots can\'t be clicked\n\nThis creates clear visual feedback for all interaction states.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.time-slots-grid',
                                    message: 'Add CSS styling for the time slots grid!',
                                    hint: 'Style the .time-slots-grid with grid layout'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Filter Tabs Container',
                        description: 'Let\'s start by creating a container for our genre filter tabs. This will help users find content by category!',
                        instruction: 'Add this HTML structure for the filter tabs:',
                        code: `<section class="filter-section">
  <div class="filter-container">
    <h2 class="filter-title">Browse by Genre</h2>
    <div class="filter-tabs">
      <!-- Tab buttons will go here -->
    </div>
    <div class="filter-content">
      <!-- Filtered content will go here -->
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'Filter tabs make it easy for users to find exactly the type of content they want!',
                        explanation: 'What we just added:\n• <section class="filter-section"> - Semantic section for the filter area\n• <div class="filter-container"> - Container to control width and centering\n• <h2 class="filter-title"> - Clear title that explains the filtering purpose\n• <div class="filter-tabs"> - Container that will hold the tab buttons\n• <div class="filter-content"> - Area where filtered content will be displayed\n\nThis creates the foundation for our interactive content filtering system.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'filter-section',
                                    message: 'Add a section with class="filter-section"!',
                                    hint: 'This will be the main container for the filter tabs'
                                },
                                {
                                    type: 'class',
                                    value: 'filter-tabs',
                                    message: 'Add a div with class="filter-tabs"!',
                                    hint: 'This will hold the tab buttons'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Filter Tab Buttons',
                        description: 'Now let\'s add the tab buttons that users will click to filter content by different genres.',
                        instruction: 'Add these filter tab buttons inside the filter-tabs div:',
                        code: `      <button class="tab-button active" data-filter="all">
        <i data-lucide="grid-3x3"></i>
        All
      </button>
      <button class="tab-button" data-filter="action">
        <i data-lucide="zap"></i>
        Action
      </button>
      <button class="tab-button" data-filter="comedy">
        <i data-lucide="smile"></i>
        Comedy
      </button>
      <button class="tab-button" data-filter="drama">
        <i data-lucide="heart"></i>
        Drama
      </button>
      <button class="tab-button" data-filter="sci-fi">
        <i data-lucide="rocket"></i>
        Sci-Fi
      </button>`,
                        codeFile: 'index.html',
                        tip: 'Using data-filter attributes makes it easy to identify which category each button represents!',
                        explanation: 'What we just added:\n• <button class="tab-button active"> - Tab buttons with "active" class on the first one\n• data-filter="all" - Data attribute that identifies which filter this button applies\n• <i data-lucide="grid-3x3"> - Relevant icons for each genre category\n• Different genre categories - Action, Comedy, Drama, Sci-Fi\n• Icons that match each genre - Zap for action, smile for comedy, etc.\n\nThis creates clickable tabs that users can use to filter content by genre.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'tab-button',
                                    message: 'Add buttons with class="tab-button"!',
                                    hint: 'Each filter tab needs this class'
                                },
                                {
                                    type: 'attribute',
                                    value: 'data-filter',
                                    message: 'Add data-filter attributes to the buttons!',
                                    hint: 'Use data-filter="all", data-filter="action", etc.'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Content Items to Filter',
                        description: 'Let\'s add some sample content items that will be filtered when users click the tabs.',
                        instruction: 'Add these content items inside the filter-content div:',
                        code: `      <div class="content-grid" id="contentGrid">
        <div class="content-item" data-genre="action">
          <div class="content-image action-bg">
            <i data-lucide="sword"></i>
          </div>
          <h3 class="content-title">Action Hero</h3>
          <p class="content-genre">Action</p>
        </div>
        
        <div class="content-item" data-genre="comedy">
          <div class="content-image comedy-bg">
            <i data-lucide="laugh"></i>
          </div>
          <h3 class="content-title">Funny Movie</h3>
          <p class="content-genre">Comedy</p>
        </div>
        
        <div class="content-item" data-genre="drama">
          <div class="content-image drama-bg">
            <i data-lucide="theater"></i>
          </div>
          <h3 class="content-title">Drama Series</h3>
          <p class="content-genre">Drama</p>
        </div>
        
        <div class="content-item" data-genre="sci-fi">
          <div class="content-image sci-fi-bg">
            <i data-lucide="satellite"></i>
          </div>
          <h3 class="content-title">Space Adventure</h3>
          <p class="content-genre">Sci-Fi</p>
        </div>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'Using data-genre attributes allows JavaScript to easily show/hide items based on the selected filter!',
                        explanation: 'What we just added:\n• <div class="content-grid"> - Grid container for all content items\n• <div class="content-item" data-genre="action"> - Individual content items with genre data\n• <div class="content-image action-bg"> - Image placeholder with genre-specific background\n• <i data-lucide="sword"> - Icons that represent each content type\n• <h3 class="content-title"> - Title for each content item\n• <p class="content-genre"> - Shows the genre category\n• Different genres for each item - Action, Comedy, Drama, Sci-Fi\n\nThis creates a grid of content that can be filtered by the tab buttons.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'content-grid',
                                    message: 'Add a div with class="content-grid"!',
                                    hint: 'This will hold all the content items'
                                },
                                {
                                    type: 'class',
                                    value: 'content-item',
                                    message: 'Add divs with class="content-item"!',
                                    hint: 'Each content item needs this class'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Filter Tabs Section',
                        description: 'Now let\'s add CSS to make our filter tabs look modern and professional.',
                        instruction: 'Add this CSS for the filter section:',
                        code: `.filter-section {
  padding: 4rem 2rem;
  background: #f8fafc;
}

.filter-container {
  max-width: 1200px;
  margin: 0 auto;
}

.filter-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1a1a1a;
}

.filter-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #e5e7eb;
}`,
                        codeFile: 'style.css',
                        tip: 'Centering the tabs and adding a border creates a clear separation between filters and content!',
                        explanation: 'What each CSS property does:\n• padding: 4rem 2rem - Generous spacing around the filter section\n• background: #f8fafc - Light background to make content stand out\n• max-width: 1200px - Keeps content readable on large screens\n• text-align: center - Centers the main title\n• display: flex; flex-wrap: wrap - Makes tabs responsive and wrappable\n• gap: 0.75rem - Space between tab buttons\n• justify-content: center - Centers the tab buttons\n• border-bottom: 2px solid #e5e7eb - Separates tabs from content\n\nThis creates a clean, centered layout for the filter interface.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.filter-section',
                                    message: 'Add CSS styling for the filter section!',
                                    hint: 'Style the .filter-section with padding and background'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style Tab Buttons and Content Grid',
                        description: 'Let\'s style the tab buttons to show active/inactive states and create a responsive content grid.',
                        instruction: 'Add this CSS for the tabs and content:',
                        code: `.tab-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: #f3f4f6;
  color: #6b7280;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-button:hover {
  background: #e5e7eb;
  color: #374151;
}

.tab-button.active {
  background: #667eea;
  color: white;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.content-item {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.content-item:hover {
  transform: translateY(-4px);
}

.content-item.hidden {
  display: none;
}`,
                        codeFile: 'style.css',
                        tip: 'The .hidden class will be used by JavaScript to hide content that doesn\'t match the selected filter!',
                        explanation: 'What each style creates:\n• .tab-button - Base styling for filter tabs with flex layout for icons\n• gap: 0.5rem - Space between icons and text in buttons\n• background: #f3f4f6 - Gray background for inactive tabs\n• :hover - Darker gray when hovering over inactive tabs\n• .active - Blue background for the currently selected tab\n• .content-grid - Responsive grid that adjusts to screen size\n• grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) - Flexible columns\n• .content-item - White cards with shadow and hover effects\n• transform: translateY(-4px) - Cards lift slightly on hover\n• .hidden - Class to hide filtered content (used by JavaScript)\n\nThis creates an attractive, interactive filter interface with smooth transitions.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.tab-button',
                                    message: 'Add CSS styling for tab buttons!',
                                    hint: 'Style the .tab-button with background and transitions'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style Content Images with Genre Colors',
                        description: 'Finally, let\'s add colorful backgrounds for each genre to make the content visually distinctive.',
                        instruction: 'Add this CSS for the content images:',
                        code: `.content-image {
  width: 100%;
  height: 120px;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
}

.action-bg {
  background: linear-gradient(135deg, #ef4444, #dc2626);
}

.comedy-bg {
  background: linear-gradient(135deg, #f59e0b, #d97706);
}

.drama-bg {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
}

.sci-fi-bg {
  background: linear-gradient(135deg, #06b6d4, #0891b2);
}

.content-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a1a;
}

.content-genre {
  margin: 0;
  color: #6b7280;
  font-size: 0.9rem;
  font-weight: 500;
}`,
                        codeFile: 'style.css',
                        tip: 'Using different gradient colors for each genre helps users quickly identify content types!',
                        explanation: 'What each style creates:\n• .content-image - Base styling for content placeholders\n• height: 120px - Consistent height for all content images\n• display: flex; align-items: center - Centers icons in the image area\n• .action-bg - Red gradient for action content\n• .comedy-bg - Orange gradient for comedy content\n• .drama-bg - Purple gradient for drama content\n• .sci-fi-bg - Blue gradient for sci-fi content\n• linear-gradient(135deg, ...) - Diagonal gradients for visual interest\n• .content-title - Bold titles for content items\n• .content-genre - Gray text for genre labels\n\nThis creates visually distinctive content cards that are easy to identify by genre.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.content-image',
                                    message: 'Add CSS styling for content images!',
                                    hint: 'Style the .content-image with dimensions and centering'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Status Badge Container',
                        description: 'Let\'s start by creating a container for our status badge system. This is perfect for showing adoption status!',
                        instruction: 'Add this HTML structure for the status badges:',
                        code: `<section class="status-section">
  <div class="status-container">
    <h2 class="status-title">Pet Adoption Status</h2>
    <div class="status-grid">
      <!-- Status items will go here -->
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'Status badges help users quickly understand the current state of items at a glance!',
                        explanation: 'What we just added:\n• <section class="status-section"> - Semantic section for the status display area\n• <div class="status-container"> - Container to control width and centering\n• <h2 class="status-title"> - Clear title that explains what the statuses represent\n• <div class="status-grid"> - Grid container that will hold items with status badges\n\nThis creates the foundation for our dynamic status badge system.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'status-section',
                                    message: 'Add a section with class="status-section"!',
                                    hint: 'This will be the main container for status badges'
                                },
                                {
                                    type: 'class',
                                    value: 'status-grid',
                                    message: 'Add a div with class="status-grid"!',
                                    hint: 'This will hold the items with status badges'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Available Status Item',
                        description: 'Now let\'s add our first item with an "Available" status badge to show it\'s ready for adoption.',
                        instruction: 'Add this available status item inside the status-grid:',
                        code: `      <div class="status-item available">
        <div class="status-badge available-badge">
          <i data-lucide="check-circle"></i>
          Available
        </div>
        <div class="item-content">
          <div class="item-image">
            <i data-lucide="heart"></i>
          </div>
          <h3 class="item-title">Buddy</h3>
          <p class="item-description">Golden Retriever, 2 years old</p>
        </div>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'Using semantic class names like "available" makes it easy to style different status types!',
                        explanation: 'What we just added:\n• <div class="status-item available"> - Container for one item with available status\n• <div class="status-badge available-badge"> - The actual status badge with specific styling\n• <i data-lucide="check-circle"> - Check icon to show positive/available status\n• <div class="item-content"> - Container for the item information\n• <div class="item-image"> - Placeholder for item image with heart icon\n• <h3 class="item-title"> - Name or title of the item\n• <p class="item-description"> - Additional details about the item\n\nThis creates one complete item with an available status badge.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'status-item',
                                    message: 'Add a div with class="status-item"!',
                                    hint: 'This contains one item with its status badge'
                                },
                                {
                                    type: 'class',
                                    value: 'status-badge',
                                    message: 'Add a div with class="status-badge"!',
                                    hint: 'This will be the visible status indicator'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Adopted Status Item',
                        description: 'Let\'s add an item with "Adopted" status to show how different statuses look.',
                        instruction: 'Add this adopted status item after the available one:',
                        code: `      <div class="status-item adopted">
        <div class="status-badge adopted-badge">
          <i data-lucide="user-check"></i>
          Adopted
        </div>
        <div class="item-content">
          <div class="item-image">
            <i data-lucide="cat"></i>
          </div>
          <h3 class="item-title">Luna</h3>
          <p class="item-description">Tabby Cat, 1 year old</p>
        </div>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'Different status classes allow you to style each status type with unique colors and icons!',
                        explanation: 'What we just added:\n• <div class="status-item adopted"> - Container with adopted status class\n• <div class="status-badge adopted-badge"> - Badge specifically for adopted status\n• <i data-lucide="user-check"> - User-check icon to show adoption completion\n• Different pet information - Luna the cat instead of Buddy the dog\n• Same structure but different status - Shows consistency in design\n\nThis demonstrates how the same component structure works for different status types.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'adopted',
                                    message: 'Add class="adopted" to the status item!',
                                    hint: 'This applies adopted-specific styling'
                                },
                                {
                                    type: 'attribute',
                                    value: 'data-lucide="user-check"',
                                    message: 'Add a user-check icon for adopted status!',
                                    hint: 'Use <i data-lucide="user-check"></i>'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Pending Status Item',
                        description: 'Let\'s add a third item with "Pending" status to complete our status system.',
                        instruction: 'Add this pending status item after the adopted one:',
                        code: `      <div class="status-item pending">
        <div class="status-badge pending-badge">
          <i data-lucide="clock"></i>
          Pending
        </div>
        <div class="item-content">
          <div class="item-image">
            <i data-lucide="dog"></i>
          </div>
          <h3 class="item-title">Max</h3>
          <p class="item-description">German Shepherd, 3 years old</p>
        </div>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'The clock icon clearly communicates that this adoption is in progress!',
                        explanation: 'What we just added:\n• <div class="status-item pending"> - Container with pending status class\n• <div class="status-badge pending-badge"> - Badge for pending/in-progress status\n• <i data-lucide="clock"> - Clock icon to show time-based/waiting status\n• Max the German Shepherd - Third different pet example\n• Consistent structure - Same layout but different status and content\n\nNow we have three different status types: Available, Adopted, and Pending.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'pending',
                                    message: 'Add class="pending" to the status item!',
                                    hint: 'This applies pending-specific styling'
                                },
                                {
                                    type: 'attribute',
                                    value: 'data-lucide="clock"',
                                    message: 'Add a clock icon for pending status!',
                                    hint: 'Use <i data-lucide="clock"></i>'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Status Section and Grid',
                        description: 'Now let\'s add CSS to create a clean layout for our status badge system.',
                        instruction: 'Add this CSS for the status section:',
                        code: `.status-section {
  padding: 4rem 2rem;
  background: #f8fafc;
}

.status-container {
  max-width: 1200px;
  margin: 0 auto;
}

.status-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1a1a1a;
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.status-item {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.3s ease;
}

.status-item:hover {
  transform: translateY(-4px);
}`,
                        codeFile: 'style.css',
                        tip: 'The position: relative on status-item is important for positioning the status badges!',
                        explanation: 'What each CSS property does:\n• padding: 4rem 2rem - Generous spacing around the status section\n• background: #f8fafc - Light background to make items stand out\n• max-width: 1200px - Keeps content readable on large screens\n• text-align: center - Centers the main title\n• display: grid - Creates responsive grid layout\n• grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) - Flexible columns\n• gap: 2rem - Space between status items\n• position: relative - Allows absolute positioning of status badges\n• transform: translateY(-4px) - Items lift slightly on hover\n\nThis creates a clean, responsive layout for the status items.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.status-section',
                                    message: 'Add CSS styling for the status section!',
                                    hint: 'Style the .status-section with padding and background'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style Status Badges with Different Colors',
                        description: 'Let\'s style the status badges with distinct colors for each status type.',
                        instruction: 'Add this CSS for the status badges:',
                        code: `.status-badge {
  position: absolute;
  top: -12px;
  right: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.available-badge {
  background: #10b981;
}

.adopted-badge {
  background: #ef4444;
}

.pending-badge {
  background: #f59e0b;
}

.item-content {
  text-align: center;
  margin-top: 1rem;
}

.item-image {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem auto;
  color: white;
  font-size: 2rem;
}`,
                        codeFile: 'style.css',
                        tip: 'Using different colors for each status makes it instantly clear what state each item is in!',
                        explanation: 'What each style creates:\n• .status-badge position: absolute - Positions badges at top-right of items\n• top: -12px - Places badge slightly above the item container\n• display: flex; align-items: center - Aligns icons with text in badges\n• border-radius: 20px - Creates pill-shaped badges\n• .available-badge background: #10b981 - Green for available status\n• .adopted-badge background: #ef4444 - Red for adopted status\n• .pending-badge background: #f59e0b - Orange for pending status\n• .item-image - Circular image placeholder with gradient background\n• margin: 0 auto - Centers the circular image\n\nThis creates visually distinct status badges that are easy to understand at a glance.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.status-badge',
                                    message: 'Add CSS styling for status badges!',
                                    hint: 'Style the .status-badge with positioning and colors'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Filter Toggle Container',
                        description: 'Let\'s start by creating a container for our pet type filter toggles. This will help users find specific types of pets!',
                        instruction: 'Add this HTML structure for the filter toggles:',
                        code: `<section class="pet-filter-section">
  <div class="pet-filter-container">
    <h2 class="pet-filter-title">Find Your Perfect Pet</h2>
    <div class="filter-toggles">
      <!-- Filter toggle buttons will go here -->
    </div>
    <div class="filter-results">
      <p class="results-text" id="resultsText">Showing all pets available for adoption</p>
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'Filter toggles let users select multiple categories at once, unlike tabs that only allow one selection!',
                        explanation: 'What we just added:\n• <section class="pet-filter-section"> - Semantic section for the filter area\n• <div class="pet-filter-container"> - Container to control width and centering\n• <h2 class="pet-filter-title"> - Clear title that explains the filtering purpose\n• <div class="filter-toggles"> - Container that will hold the toggle buttons\n• <div class="filter-results"> - Area to show filtering results\n• <p class="results-text"> - Text that will update to show current filter status\n\nThis creates the foundation for our interactive pet type filtering system.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'pet-filter-section',
                                    message: 'Add a section with class="pet-filter-section"!',
                                    hint: 'This will be the main container for the pet filter'
                                },
                                {
                                    type: 'class',
                                    value: 'filter-toggles',
                                    message: 'Add a div with class="filter-toggles"!',
                                    hint: 'This will hold the toggle buttons'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Pet Type Toggle Buttons',
                        description: 'Now let\'s add toggle buttons for different pet types that users can click to filter.',
                        instruction: 'Add these toggle buttons inside the filter-toggles div:',
                        code: `      <button class="toggle-button active" data-pet-type="dogs">
        <i data-lucide="dog"></i>
        <span>Dogs</span>
        <span class="count">(12)</span>
      </button>
      
      <button class="toggle-button" data-pet-type="cats">
        <i data-lucide="cat"></i>
        <span>Cats</span>
        <span class="count">(8)</span>
      </button>
      
      <button class="toggle-button" data-pet-type="birds">
        <i data-lucide="bird"></i>
        <span>Birds</span>
        <span class="count">(3)</span>
      </button>
      
      <button class="toggle-button" data-pet-type="rabbits">
        <i data-lucide="rabbit"></i>
        <span>Rabbits</span>
        <span class="count">(5)</span>
      </button>`,
                        codeFile: 'index.html',
                        tip: 'Using data-pet-type attributes makes it easy to identify which pet type each button filters!',
                        explanation: 'What we just added:\n• <button class="toggle-button active"> - Toggle buttons with "active" class on dogs\n• data-pet-type="dogs" - Data attribute that identifies which pet type this filters\n• <i data-lucide="dog"> - Relevant Lucide icons for each pet type\n• <span>Dogs</span> - Text label for the pet type\n• <span class="count">(12)</span> - Shows how many pets of this type are available\n• Different pet types - Dogs, Cats, Birds, Rabbits with different counts\n\nThis creates clickable toggle buttons that users can use to filter pets by type.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'toggle-button',
                                    message: 'Add buttons with class="toggle-button"!',
                                    hint: 'Each filter toggle needs this class'
                                },
                                {
                                    type: 'attribute',
                                    value: 'data-pet-type',
                                    message: 'Add data-pet-type attributes to the buttons!',
                                    hint: 'Use data-pet-type="dogs", data-pet-type="cats", etc.'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Sample Pet Cards to Filter',
                        description: 'Let\'s add some sample pet cards that will be filtered when users click the toggle buttons.',
                        instruction: 'Add these pet cards after the filter-results div:',
                        code: `    <div class="pets-grid" id="petsGrid">
      <div class="pet-card" data-type="dogs">
        <div class="pet-image">
          <i data-lucide="heart"></i>
        </div>
        <h3 class="pet-name">Buddy</h3>
        <p class="pet-breed">Golden Retriever</p>
      </div>
      
      <div class="pet-card" data-type="cats">
        <div class="pet-image">
          <i data-lucide="star"></i>
        </div>
        <h3 class="pet-name">Luna</h3>
        <p class="pet-breed">Tabby Cat</p>
      </div>
      
      <div class="pet-card" data-type="birds">
        <div class="pet-image">
          <i data-lucide="feather"></i>
        </div>
        <h3 class="pet-name">Charlie</h3>
        <p class="pet-breed">Parakeet</p>
      </div>
      
      <div class="pet-card" data-type="rabbits">
        <div class="pet-image">
          <i data-lucide="circle"></i>
        </div>
        <h3 class="pet-name">Snowball</h3>
        <p class="pet-breed">Holland Lop</p>
      </div>
    </div>`,
                        codeFile: 'index.html',
                        tip: 'Using data-type attributes that match the data-pet-type values makes filtering easy with JavaScript!',
                        explanation: 'What we just added:\n• <div class="pets-grid"> - Grid container for all pet cards\n• <div class="pet-card" data-type="dogs"> - Individual pet cards with type data\n• <div class="pet-image"> - Image placeholder with decorative icons\n• <h3 class="pet-name"> - Name of each pet\n• <p class="pet-breed"> - Breed information for each pet\n• Different pet types - Dogs, cats, birds, rabbits matching our filter buttons\n\nThis creates a grid of pets that can be filtered by the toggle buttons.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'pets-grid',
                                    message: 'Add a div with class="pets-grid"!',
                                    hint: 'This will hold all the pet cards'
                                },
                                {
                                    type: 'class',
                                    value: 'pet-card',
                                    message: 'Add divs with class="pet-card"!',
                                    hint: 'Each pet needs this class'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Filter Section and Toggles',
                        description: 'Now let\'s add CSS to make our pet filter look modern and user-friendly.',
                        instruction: 'Add this CSS for the filter section:',
                        code: `.pet-filter-section {
  padding: 4rem 2rem;
  background: #f8fafc;
}

.pet-filter-container {
  max-width: 1200px;
  margin: 0 auto;
}

.pet-filter-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1a1a1a;
}

.filter-toggles {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.toggle-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: white;
  color: #6b7280;
  border: 2px solid #e5e7eb;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}`,
                        codeFile: 'style.css',
                        tip: 'The pill-shaped buttons (border-radius: 25px) create a modern, friendly appearance!',
                        explanation: 'What each CSS property does:\n• padding: 4rem 2rem - Generous spacing around the filter section\n• background: #f8fafc - Light background to make content stand out\n• max-width: 1200px - Keeps content readable on large screens\n• text-align: center - Centers the main title\n• display: flex; flex-wrap: wrap - Makes toggles responsive and wrappable\n• gap: 1rem - Space between toggle buttons\n• justify-content: center - Centers the toggle buttons\n• border-radius: 25px - Creates pill-shaped buttons\n• transition: all 0.3s ease - Smooth animations on state changes\n\nThis creates a clean, centered layout for the filter interface.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.pet-filter-section',
                                    message: 'Add CSS styling for the pet filter section!',
                                    hint: 'Style the .pet-filter-section with padding and background'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style Toggle States and Pet Cards',
                        description: 'Let\'s style the active/inactive states for toggles and create an attractive grid for pet cards.',
                        instruction: 'Add this CSS for toggle states and pet cards:',
                        code: `.toggle-button:hover {
  border-color: #667eea;
  background: #f0f4ff;
}

.toggle-button.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.count {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
}

.toggle-button.active .count {
  background: rgba(255, 255, 255, 0.3);
}

.filter-results {
  text-align: center;
  margin-bottom: 3rem;
}

.results-text {
  color: #6b7280;
  font-size: 1.1rem;
  margin: 0;
}

.pets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.pet-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.pet-card:hover {
  transform: translateY(-4px);
}

.pet-card.hidden {
  display: none;
}`,
                        codeFile: 'style.css',
                        tip: 'The .hidden class will be used by JavaScript to hide pets that don\'t match the selected filters!',
                        explanation: 'What each style creates:\n• .toggle-button:hover - Blue highlight when hovering over inactive toggles\n• .toggle-button.active - Blue background for selected/active toggles\n• .count - Pill-shaped count badges with semi-transparent background\n• .toggle-button.active .count - Slightly more transparent count on active buttons\n• .results-text - Gray text for showing filter results\n• .pets-grid - Responsive grid that adjusts to screen size\n• .pet-card - White cards with shadow and hover effects\n• transform: translateY(-4px) - Cards lift slightly on hover\n• .hidden - Class to hide filtered pets (used by JavaScript)\n\nThis creates an attractive, interactive filter interface with smooth transitions.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.toggle-button',
                                    message: 'Add CSS styling for toggle buttons!',
                                    hint: 'Style the .toggle-button with background and transitions'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style Pet Card Images and Content',
                        description: 'Finally, let\'s style the pet card images and content to complete our filter system.',
                        instruction: 'Add this CSS for the pet card styling:',
                        code: `.pet-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem auto;
  color: white;
  font-size: 2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.pet-name {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a1a1a;
}

.pet-breed {
  margin: 0;
  color: #6b7280;
  font-size: 0.9rem;
}

/* Different gradient colors for variety */
.pet-card[data-type="dogs"] .pet-image {
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
}

.pet-card[data-type="cats"] .pet-image {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
}

.pet-card[data-type="birds"] .pet-image {
  background: linear-gradient(135deg, #10b981, #059669);
}

.pet-card[data-type="rabbits"] .pet-image {
  background: linear-gradient(135deg, #ef4444, #dc2626);
}`,
                        codeFile: 'style.css',
                        tip: 'Using different gradient colors for each pet type helps users quickly identify different categories!',
                        explanation: 'What each style creates:\n• .pet-image - Circular image placeholder with gradient background\n• width: 80px; height: 80px - Consistent size for all pet images\n• border-radius: 50% - Makes square containers into perfect circles\n• margin: 0 auto - Centers the circular image\n• .pet-name - Bold titles for pet names\n• .pet-breed - Gray text for breed information\n• Different gradients by data-type - Yellow for dogs, purple for cats, green for birds, red for rabbits\n• linear-gradient(135deg, ...) - Diagonal gradients for visual interest\n\nThis creates visually distinctive pet cards that are easy to identify by type.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.pet-image',
                                    message: 'Add CSS styling for pet images!',
                                    hint: 'Style the .pet-image with circular shape and gradients'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Expandable Timeline Container',
                        description: 'Let\'s start by creating a container for our expandable timeline. Users can click events to see more details!',
                        instruction: 'Add this HTML structure for the expandable timeline:',
                        code: `<section class="expandable-timeline-section">
  <div class="expandable-timeline-container">
    <h2 class="expandable-timeline-title">Company History</h2>
    <div class="expandable-timeline">
      <!-- Expandable timeline events will go here -->
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'Expandable timelines are perfect for showing lots of information without overwhelming users!',
                        explanation: 'What we just added:\n• <section class="expandable-timeline-section"> - Semantic section for the timeline area\n• <div class="expandable-timeline-container"> - Container to control width and centering\n• <h2 class="expandable-timeline-title"> - Clear title for the timeline\n• <div class="expandable-timeline"> - Main container that will hold expandable events\n\nThis creates the foundation for our interactive expandable timeline.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'expandable-timeline-section',
                                    message: 'Add a section with class="expandable-timeline-section"!',
                                    hint: 'This will be the main container for the expandable timeline'
                                },
                                {
                                    type: 'class',
                                    value: 'expandable-timeline',
                                    message: 'Add a div with class="expandable-timeline"!',
                                    hint: 'This will hold the expandable timeline events'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add First Expandable Timeline Event',
                        description: 'Now let\'s add our first timeline event with expandable details that users can click to reveal.',
                        instruction: 'Add this expandable event inside the expandable-timeline div:',
                        code: `      <div class="timeline-event-expandable">
        <div class="timeline-marker-expandable"></div>
        <div class="timeline-card" data-expandable="event1">
          <div class="timeline-header">
            <div class="timeline-info">
              <div class="timeline-date">2024</div>
              <h3 class="timeline-event-title">Major Product Launch</h3>
            </div>
            <button class="expand-button" aria-label="Expand details">
              <i data-lucide="chevron-down"></i>
            </button>
          </div>
          <div class="timeline-details" id="event1">
            <p>Launched our flagship product with advanced AI features, reaching 100K+ users in the first month. This milestone represents years of development and innovation.</p>
            <ul>
              <li>100,000+ users in first month</li>
              <li>Advanced AI features</li>
              <li>Multi-platform support</li>
            </ul>
          </div>
        </div>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'Using data-expandable attributes helps JavaScript identify which details section to expand!',
                        explanation: 'What we just added:\n• <div class="timeline-event-expandable"> - Container for one expandable timeline event\n• <div class="timeline-marker-expandable"> - The circular dot on the timeline line\n• <div class="timeline-card"> - Card container with expandable functionality\n• data-expandable="event1" - Links the card to its details section\n• <div class="timeline-header"> - Clickable header with event info and expand button\n• <button class="expand-button"> - Button with chevron icon to expand/collapse\n• <div class="timeline-details"> - Hidden details that expand when clicked\n• <ul> with bullet points - Additional detailed information\n\nThis creates one complete expandable timeline event.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'timeline-event-expandable',
                                    message: 'Add a div with class="timeline-event-expandable"!',
                                    hint: 'This contains one expandable timeline event'
                                },
                                {
                                    type: 'class',
                                    value: 'expand-button',
                                    message: 'Add a button with class="expand-button"!',
                                    hint: 'This button will expand/collapse the details'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add More Expandable Events',
                        description: 'Let\'s add a few more expandable events to create a complete timeline with different types of information.',
                        instruction: 'Add these additional expandable events after the first one:',
                        code: `      <div class="timeline-event-expandable">
        <div class="timeline-marker-expandable"></div>
        <div class="timeline-card" data-expandable="event2">
          <div class="timeline-header">
            <div class="timeline-info">
              <div class="timeline-date">2023</div>
              <h3 class="timeline-event-title">Series A Funding</h3>
            </div>
            <button class="expand-button" aria-label="Expand details">
              <i data-lucide="chevron-right"></i>
            </button>
          </div>
          <div class="timeline-details" id="event2">
            <p>Secured $10M in Series A funding to accelerate product development and expand our team.</p>
            <ul>
              <li>$10M funding round</li>
              <li>Team expanded to 50+ people</li>
              <li>New office in San Francisco</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="timeline-event-expandable">
        <div class="timeline-marker-expandable"></div>
        <div class="timeline-card" data-expandable="event3">
          <div class="timeline-header">
            <div class="timeline-info">
              <div class="timeline-date">2022</div>
              <h3 class="timeline-event-title">Company Founded</h3>
            </div>
            <button class="expand-button" aria-label="Expand details">
              <i data-lucide="chevron-right"></i>
            </button>
          </div>
          <div class="timeline-details" id="event3">
            <p>Started the company with a vision to revolutionize how people interact with technology.</p>
            <ul>
              <li>Founded by 3 co-founders</li>
              <li>Initial prototype developed</li>
              <li>First beta users recruited</li>
            </ul>
          </div>
        </div>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'Notice the chevron-right icons start collapsed, while the first event has chevron-down to show it\'s expanded!',
                        explanation: 'What we just added:\n• Two more expandable timeline events with the same structure\n• Different dates (2023, 2022) showing progression backwards in time\n• Different content - Series A Funding and Company Founded\n• <i data-lucide="chevron-right"> - Right-pointing chevrons for collapsed state\n• Unique IDs (event2, event3) for each details section\n• Different bullet points showing variety in expandable content\n\nNow we have three expandable events that tell a company\'s story from founding to present.',
                        validation: {
                            required: [
                                {
                                    type: 'text',
                                    value: '2023',
                                    message: 'Add the 2023 timeline event!',
                                    hint: 'Include the Series A Funding event'
                                },
                                {
                                    type: 'text',
                                    value: '2022',
                                    message: 'Add the 2022 timeline event!',
                                    hint: 'Include the Company Founded event'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Expandable Timeline Layout',
                        description: 'Now let\'s add CSS to create the timeline layout with proper spacing and visual hierarchy.',
                        instruction: 'Add this CSS for the expandable timeline:',
                        code: `.expandable-timeline-section {
  padding: 4rem 2rem;
  background: #f8fafc;
}

.expandable-timeline-container {
  max-width: 800px;
  margin: 0 auto;
}

.expandable-timeline-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1a1a1a;
}

.expandable-timeline {
  position: relative;
  padding-left: 2rem;
}

.expandable-timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #667eea;
  border-radius: 2px;
}

.timeline-event-expandable {
  position: relative;
  margin-bottom: 2rem;
}`,
                        codeFile: 'style.css',
                        tip: 'The ::before pseudo-element creates the vertical timeline line that connects all events!',
                        explanation: 'What each CSS property does:\n• padding: 4rem 2rem - Generous spacing around the timeline section\n• background: #f8fafc - Light background to make timeline stand out\n• max-width: 800px - Keeps timeline readable, not too wide\n• text-align: center - Centers the main title\n• position: relative - Allows absolute positioning of the timeline line\n• padding-left: 2rem - Makes space for the timeline line and markers\n• ::before pseudo-element - Creates the vertical blue line\n• left: 15px; top: 0; bottom: 0 - Positions line to run full height\n• width: 3px - Makes the timeline line 3 pixels wide\n\nThis creates the basic timeline layout with the connecting line.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.expandable-timeline-section',
                                    message: 'Add CSS styling for the expandable timeline section!',
                                    hint: 'Style the .expandable-timeline-section with padding and background'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style Timeline Cards and Markers',
                        description: 'Let\'s style the timeline cards and markers to create an attractive, clickable interface.',
                        instruction: 'Add this CSS for the timeline cards:',
                        code: `.timeline-marker-expandable {
  position: absolute;
  left: -2rem;
  top: 1rem;
  width: 16px;
  height: 16px;
  background: #667eea;
  border: 3px solid white;
  border-radius: 50%;
  box-shadow: 0 0 0 3px #667eea;
}

.timeline-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.timeline-header:hover {
  background: #f8fafc;
}

.timeline-date {
  color: #667eea;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.timeline-event-title {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a1a1a;
}`,
                        codeFile: 'style.css',
                        tip: 'The cursor: pointer on timeline-header shows users that the cards are clickable!',
                        explanation: 'What each style creates:\n• .timeline-marker-expandable - Circular dots positioned on the timeline line\n• box-shadow: 0 0 0 3px #667eea - Creates blue ring around white border\n• .timeline-card - White cards with shadow and hover effects\n• overflow: hidden - Ensures content stays within rounded corners\n• transform: translateY(-2px) - Cards lift slightly on hover\n• .timeline-header - Clickable header area with flex layout\n• justify-content: space-between - Spreads content and expand button apart\n• cursor: pointer - Shows cards are interactive\n• :hover background: #f8fafc - Light gray background on hover\n• .timeline-date - Blue, uppercase styling for dates\n\nThis creates attractive, interactive timeline cards.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.timeline-card',
                                    message: 'Add CSS styling for timeline cards!',
                                    hint: 'Style the .timeline-card with background and hover effects'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style Expand Button and Details Section',
                        description: 'Finally, let\'s style the expand button and the expandable details section with smooth animations.',
                        instruction: 'Add this CSS for the expand functionality:',
                        code: `.expand-button {
  background: none;
  border: none;
  color: #667eea;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.expand-button:hover {
  background: #f0f4ff;
  transform: scale(1.1);
}

.expand-button.expanded {
  transform: rotate(90deg);
}

.timeline-details {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding: 0 1.5rem;
}

.timeline-details.expanded {
  max-height: 300px;
  padding: 0 1.5rem 1.5rem 1.5rem;
  border-top: 1px solid #e5e7eb;
}

.timeline-details p {
  margin: 1rem 0;
  color: #6b7280;
  line-height: 1.6;
}

.timeline-details ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.timeline-details li {
  color: #6b7280;
  margin-bottom: 0.5rem;
}`,
                        codeFile: 'style.css',
                        tip: 'The max-height transition creates a smooth expand/collapse animation without JavaScript!',
                        explanation: 'What each style creates:\n• .expand-button - Circular button with hover effects\n• background: none; border: none - Removes default button styling\n• transform: scale(1.1) on hover - Button grows slightly when hovered\n• .expanded transform: rotate(90deg) - Rotates chevron when expanded\n• .timeline-details max-height: 0 - Hides details by default\n• overflow: hidden - Prevents content from showing during animation\n• transition: max-height 0.3s ease - Smooth expand/collapse animation\n• .expanded max-height: 300px - Shows details when expanded\n• border-top: 1px solid #e5e7eb - Separates details from header\n• Gray text colors for details content - Creates visual hierarchy\n\nThis creates smooth expand/collapse animations with visual feedback.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.expand-button',
                                    message: 'Add CSS styling for expand buttons!',
                                    hint: 'Style the .expand-button with hover and transition effects'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Modal Trigger and Container',
                        description: 'Let\'s start by creating a button to open the modal and the modal container. Modals are perfect for showing detailed information!',
                        instruction: 'Add this HTML structure for the modal system:',
                        code: `<section class="modal-section">
  <div class="modal-container">
    <h2 class="modal-section-title">Featured Games</h2>
    <div class="games-grid">
      <div class="game-card">
        <h3 class="game-title">Epic Adventure</h3>
        <p class="game-description">An amazing RPG adventure</p>
        <button class="open-modal-btn" data-modal="gameModal">
          <i data-lucide="info"></i>
          View Details
        </button>
      </div>
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'Modals are great for showing detailed information without navigating to a new page!',
                        explanation: 'What we just added:\n• <section class="modal-section"> - Semantic section for the modal area\n• <div class="modal-container"> - Container to control width and centering\n• <h2 class="modal-section-title"> - Title for the games section\n• <div class="games-grid"> - Grid container for game cards\n• <div class="game-card"> - Individual game card with trigger button\n• <button class="open-modal-btn"> - Button that will open the modal\n• data-modal="gameModal" - Links button to specific modal\n• <i data-lucide="info"> - Info icon to show this reveals more details\n\nThis creates the foundation for our modal system with a trigger button.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'modal-section',
                                    message: 'Add a section with class="modal-section"!',
                                    hint: 'This will be the main container for the modal system'
                                },
                                {
                                    type: 'class',
                                    value: 'open-modal-btn',
                                    message: 'Add a button with class="open-modal-btn"!',
                                    hint: 'This button will open the modal'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add the Modal Overlay and Structure',
                        description: 'Now let\'s add the actual modal that will appear when users click the button.',
                        instruction: 'Add this modal structure after the modal-section:',
                        code: `<div class="modal-overlay" id="gameModal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">Epic Adventure</h3>
      <button class="close-modal-btn" aria-label="Close modal">
        <i data-lucide="x"></i>
      </button>
    </div>
    <div class="modal-body">
      <!-- Modal content will go here -->
    </div>
  </div>
</div>`,
                        codeFile: 'index.html',
                        tip: 'The modal-overlay covers the entire screen and provides the dark background behind the modal!',
                        explanation: 'What we just added:\n• <div class="modal-overlay"> - Full-screen overlay that darkens the background\n• id="gameModal" - Matches the data-modal attribute from the trigger button\n• <div class="modal-content"> - The actual modal box that contains information\n• <div class="modal-header"> - Top section with title and close button\n• <h3 class="modal-title"> - Title of the modal content\n• <button class="close-modal-btn"> - X button to close the modal\n• aria-label="Close modal" - Accessibility label for screen readers\n• <i data-lucide="x"> - X icon for the close button\n• <div class="modal-body"> - Main content area of the modal\n\nThis creates the modal structure that will appear over the page content.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'modal-overlay',
                                    message: 'Add a div with class="modal-overlay"!',
                                    hint: 'This creates the full-screen modal background'
                                },
                                {
                                    type: 'class',
                                    value: 'close-modal-btn',
                                    message: 'Add a button with class="close-modal-btn"!',
                                    hint: 'This button will close the modal'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Game Information Content',
                        description: 'Let\'s add the actual game information content inside the modal body.',
                        instruction: 'Add this content inside the modal-body div:',
                        code: `      <div class="game-image">
        <i data-lucide="gamepad-2"></i>
      </div>
      
      <div class="game-tags">
        <span class="tag adventure">Adventure</span>
        <span class="tag rpg">RPG</span>
        <span class="tag multiplayer">Multiplayer</span>
      </div>
      
      <div class="game-details">
        <p class="game-description-full">
          Embark on an epic journey through mystical lands filled with adventure, magic, and legendary creatures. 
          Battle fierce monsters, solve ancient puzzles, and discover powerful artifacts.
        </p>
        
        <div class="game-stats">
          <div class="stat">
            <i data-lucide="users"></i>
            <span>1-4 Players</span>
          </div>
          <div class="stat">
            <i data-lucide="clock"></i>
            <span>40+ Hours</span>
          </div>
          <div class="stat">
            <i data-lucide="star"></i>
            <span>4.8/5 Rating</span>
          </div>
        </div>
      </div>
      
      <div class="modal-actions">
        <button class="play-btn">
          <i data-lucide="play"></i>
          Play Now
        </button>
        <button class="wishlist-btn">
          <i data-lucide="heart"></i>
          Add to Wishlist
        </button>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'Using icons and tags makes the game information easy to scan and understand quickly!',
                        explanation: 'What we just added:\n• <div class="game-image"> - Placeholder for game screenshot with gamepad icon\n• <div class="game-tags"> - Category tags to show game genres\n• <span class="tag adventure"> - Individual tags with different classes for styling\n• <p class="game-description-full"> - Detailed description of the game\n• <div class="game-stats"> - Statistics about the game (players, time, rating)\n• <div class="stat"> - Individual stat items with icons and text\n• <i data-lucide="users"> - Icons that represent each statistic\n• <div class="modal-actions"> - Action buttons at the bottom\n• <button class="play-btn"> - Primary action to play the game\n• <button class="wishlist-btn"> - Secondary action to save for later\n\nThis creates comprehensive game information with visual elements and clear actions.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'game-tags',
                                    message: 'Add a div with class="game-tags"!',
                                    hint: 'This will hold the game category tags'
                                },
                                {
                                    type: 'class',
                                    value: 'modal-actions',
                                    message: 'Add a div with class="modal-actions"!',
                                    hint: 'This will hold the action buttons'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Modal Section and Game Cards',
                        description: 'Now let\'s add CSS to style the game cards and prepare for the modal functionality.',
                        instruction: 'Add this CSS for the modal section:',
                        code: `.modal-section {
  padding: 4rem 2rem;
  background: #f8fafc;
}

.modal-container {
  max-width: 1200px;
  margin: 0 auto;
}

.modal-section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1a1a1a;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.game-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.game-card:hover {
  transform: translateY(-4px);
}

.open-modal-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #667eea;
  color: white;
  border: none;
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin: 1rem auto 0 auto;
  transition: background-color 0.3s ease;
}

.open-modal-btn:hover {
  background: #5a67d8;
}`,
                        codeFile: 'style.css',
                        tip: 'The hover effects on game cards give users visual feedback that they\'re interactive!',
                        explanation: 'What each CSS property does:\n• padding: 4rem 2rem - Generous spacing around the modal section\n• background: #f8fafc - Light background to make cards stand out\n• max-width: 1200px - Keeps content readable on large screens\n• text-align: center - Centers the main title\n• display: grid - Creates responsive grid layout for game cards\n• grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) - Flexible columns\n• transform: translateY(-4px) - Cards lift slightly on hover\n• display: flex; align-items: center - Aligns icon with text in buttons\n• gap: 0.5rem - Space between icon and text\n• transition effects - Smooth animations for interactions\n\nThis creates an attractive grid of game cards with interactive buttons.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.modal-section',
                                    message: 'Add CSS styling for the modal section!',
                                    hint: 'Style the .modal-section with padding and background'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Modal Overlay and Content',
                        description: 'Let\'s style the modal overlay and content box to create an attractive popup.',
                        instruction: 'Add this CSS for the modal styling:',
                        code: `.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.modal-content {
  background: white;
  border-radius: 16px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.modal-overlay.active .modal-content {
  transform: scale(1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 1rem 2rem;
  border-bottom: 1px solid #e5e7eb;
}

.modal-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
}

.close-modal-btn {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.close-modal-btn:hover {
  background: #f3f4f6;
  color: #374151;
}`,
                        codeFile: 'style.css',
                        tip: 'The fixed positioning and z-index ensure the modal appears above all other content!',
                        explanation: 'What each style creates:\n• position: fixed - Modal stays in place when scrolling\n• width: 100%; height: 100% - Overlay covers entire screen\n• background: rgba(0, 0, 0, 0.5) - Semi-transparent dark background\n• z-index: 1000 - Ensures modal appears above other content\n• opacity: 0; visibility: hidden - Hides modal by default\n• .active class - Shows modal when this class is added\n• transform: scale(0.9) - Modal starts slightly smaller\n• .active .modal-content transform: scale(1) - Grows to full size when shown\n• max-height: 90vh; overflow-y: auto - Scrollable if content is too tall\n• border-radius: 50% on close button - Makes it circular\n\nThis creates a professional modal with smooth show/hide animations.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.modal-overlay',
                                    message: 'Add CSS styling for the modal overlay!',
                                    hint: 'Style the .modal-overlay with fixed positioning and background'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style Modal Content and Actions',
                        description: 'Finally, let\'s style the game information content and action buttons inside the modal.',
                        instruction: 'Add this CSS for the modal content:',
                        code: `.modal-body {
  padding: 1rem 2rem 2rem 2rem;
}

.game-image {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.game-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.tag.adventure {
  background: #f0fdf4;
  color: #065f46;
}

.tag.rpg {
  background: #fef3c7;
  color: #92400e;
}

.tag.multiplayer {
  background: #ede9fe;
  color: #5b21b6;
}

.game-stats {
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.9rem;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.play-btn, .wishlist-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-btn {
  background: #667eea;
  color: white;
  border: none;
}

.play-btn:hover {
  background: #5a67d8;
}

.wishlist-btn {
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
}

.wishlist-btn:hover {
  background: #f0f4ff;
}`,
                        codeFile: 'style.css',
                        tip: 'Different colored tags help users quickly identify game genres and features!',
                        explanation: 'What each style creates:\n• .game-image - Large gradient background for game screenshot placeholder\n• height: 200px - Consistent height for visual appeal\n• .game-tags - Flexible container for category tags\n• flex-wrap: wrap - Tags wrap to new lines if needed\n• Different tag colors - Green for adventure, yellow for RPG, purple for multiplayer\n• .game-stats - Horizontal layout for game statistics\n• .stat display: flex - Aligns icons with text\n• .modal-actions - Side-by-side action buttons\n• flex: 1 - Buttons share available space equally\n• .play-btn - Primary blue button for main action\n• .wishlist-btn - Secondary outlined button\n• Hover effects - Visual feedback on button interactions\n\nThis creates a comprehensive, visually appealing modal with clear information hierarchy.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.modal-body',
                                    message: 'Add CSS styling for the modal body!',
                                    hint: 'Style the .modal-body with padding and content layout'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Progress Tracker Container',
                        description: 'Let\'s start by creating a container for our lesson progress tracker. This helps students see their learning journey!',
                        instruction: 'Add this HTML structure for the progress tracker:',
                        code: `<section class="progress-section">
  <div class="progress-container">
    <h2 class="progress-title">Course Progress</h2>
    <div class="progress-card">
      <div class="progress-header">
        <h3 class="course-title">Web Development Fundamentals</h3>
        <div class="progress-badge" id="progressBadge">0% Complete</div>
      </div>
      <!-- Progress bar and checklist will go here -->
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'Progress trackers motivate students by showing how much they\'ve accomplished!',
                        explanation: 'What we just added:\n• <section class="progress-section"> - Semantic section for the progress tracking area\n• <div class="progress-container"> - Container to control width and centering\n• <h2 class="progress-title"> - Main title for the progress section\n• <div class="progress-card"> - Card container for the progress tracker\n• <div class="progress-header"> - Header with course title and completion badge\n• <h3 class="course-title"> - Name of the course being tracked\n• <div class="progress-badge"> - Badge showing completion percentage\n• id="progressBadge" - JavaScript will update this text\n\nThis creates the foundation for our interactive progress tracking system.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'progress-section',
                                    message: 'Add a section with class="progress-section"!',
                                    hint: 'This will be the main container for progress tracking'
                                },
                                {
                                    type: 'class',
                                    value: 'progress-card',
                                    message: 'Add a div with class="progress-card"!',
                                    hint: 'This will hold the progress tracker content'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Progress Bar',
                        description: 'Now let\'s add a visual progress bar that will fill up as students complete lessons.',
                        instruction: 'Add this progress bar after the progress-header:',
                        code: `      <div class="progress-bar-container">
        <div class="progress-bar">
          <div class="progress-fill" id="progressFill" style="width: 0%"></div>
        </div>
        <div class="progress-stats">
          <span class="completed-count" id="completedCount">0</span>
          <span class="total-count">of 4 lessons completed</span>
        </div>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'Visual progress bars give instant feedback and are very motivating for learners!',
                        explanation: 'What we just added:\n• <div class="progress-bar-container"> - Container for the progress bar and stats\n• <div class="progress-bar"> - Background container for the progress bar\n• <div class="progress-fill"> - The colored fill that shows progress\n• id="progressFill" - JavaScript will update the width of this element\n• style="width: 0%" - Starts at 0% progress\n• <div class="progress-stats"> - Text showing numerical progress\n• <span class="completed-count"> - Number of completed lessons\n• id="completedCount" - JavaScript will update this number\n• <span class="total-count"> - Total number of lessons available\n\nThis creates a visual progress bar that will animate as lessons are completed.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'progress-bar-container',
                                    message: 'Add a div with class="progress-bar-container"!',
                                    hint: 'This will hold the progress bar and stats'
                                },
                                {
                                    type: 'class',
                                    value: 'progress-fill',
                                    message: 'Add a div with class="progress-fill"!',
                                    hint: 'This will be the animated progress fill'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Lesson Checklist Items',
                        description: 'Let\'s add the actual lesson checklist that students can check off as they complete each lesson.',
                        instruction: 'Add this lesson checklist after the progress-bar-container:',
                        code: `      <div class="lessons-checklist">
        <div class="lesson-item" data-lesson="1">
          <label class="lesson-checkbox">
            <input type="checkbox" class="checkbox-input">
            <span class="checkbox-custom">
              <i data-lucide="check"></i>
            </span>
            <span class="lesson-title">Introduction to HTML</span>
          </label>
        </div>
        
        <div class="lesson-item" data-lesson="2">
          <label class="lesson-checkbox">
            <input type="checkbox" class="checkbox-input">
            <span class="checkbox-custom">
              <i data-lucide="check"></i>
            </span>
            <span class="lesson-title">CSS Fundamentals</span>
          </label>
        </div>
        
        <div class="lesson-item" data-lesson="3">
          <label class="lesson-checkbox">
            <input type="checkbox" class="checkbox-input">
            <span class="checkbox-custom">
              <i data-lucide="check"></i>
            </span>
            <span class="lesson-title">JavaScript Basics</span>
          </label>
        </div>
        
        <div class="lesson-item" data-lesson="4">
          <label class="lesson-checkbox">
            <input type="checkbox" class="checkbox-input">
            <span class="checkbox-custom">
              <i data-lucide="check"></i>
            </span>
            <span class="lesson-title">Advanced JavaScript</span>
          </label>
        </div>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'Using data-lesson attributes makes it easy to track which specific lessons are completed!',
                        explanation: 'What we just added:\n• <div class="lessons-checklist"> - Container for all lesson checklist items\n• <div class="lesson-item" data-lesson="1"> - Individual lesson with unique identifier\n• <label class="lesson-checkbox"> - Clickable label that includes checkbox and text\n• <input type="checkbox"> - Hidden checkbox for functionality\n• <span class="checkbox-custom"> - Custom styled checkbox with check icon\n• <i data-lucide="check"> - Check mark icon that appears when completed\n• <span class="lesson-title"> - Text label for each lesson\n• Four different lessons - HTML, CSS, JavaScript Basics, Advanced JavaScript\n\nThis creates an interactive checklist where students can mark lessons as complete.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'lessons-checklist',
                                    message: 'Add a div with class="lessons-checklist"!',
                                    hint: 'This will hold all the lesson checklist items'
                                },
                                {
                                    type: 'class',
                                    value: 'lesson-item',
                                    message: 'Add divs with class="lesson-item"!',
                                    hint: 'Each lesson needs this class'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Progress Section and Card',
                        description: 'Now let\'s add CSS to make our progress tracker look professional and engaging.',
                        instruction: 'Add this CSS for the progress section:',
                        code: `.progress-section {
  padding: 4rem 2rem;
  background: #f8fafc;
}

.progress-container {
  max-width: 600px;
  margin: 0 auto;
}

.progress-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1a1a1a;
}

.progress-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.course-title {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a1a;
}

.progress-badge {
  background: #f0fdf4;
  color: #065f46;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}`,
                        codeFile: 'style.css',
                        tip: 'The white card on light background creates focus and makes the progress tracker feel important!',
                        explanation: 'What each CSS property does:\n• padding: 4rem 2rem - Generous spacing around the progress section\n• background: #f8fafc - Light background to make the card stand out\n• max-width: 600px - Keeps the tracker compact and focused\n• text-align: center - Centers the main title\n• background: white - Clean white background for the progress card\n• border-radius: 16px - Rounded corners for modern appearance\n• box-shadow - Subtle shadow for depth and importance\n• display: flex; justify-content: space-between - Spreads title and badge apart\n• .progress-badge - Green background to show positive progress\n• border-radius: 20px - Pill-shaped badge\n\nThis creates an attractive, focused layout for the progress tracker.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.progress-section',
                                    message: 'Add CSS styling for the progress section!',
                                    hint: 'Style the .progress-section with padding and background'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style Progress Bar and Animation',
                        description: 'Let\'s style the progress bar with smooth animations that will update as lessons are completed.',
                        instruction: 'Add this CSS for the progress bar:',
                        code: `.progress-bar-container {
  margin-bottom: 2rem;
}

.progress-bar {
  width: 100%;
  height: 12px;
  background: #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #10b981, #059669);
  border-radius: 10px;
  transition: width 0.5s ease;
  width: 0%;
}

.progress-stats {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.9rem;
}

.completed-count {
  font-weight: 700;
  color: #10b981;
  font-size: 1.1rem;
}

.lessons-checklist {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}`,
                        codeFile: 'style.css',
                        tip: 'The transition: width 0.5s ease creates a smooth animation when the progress bar updates!',
                        explanation: 'What each style creates:\n• .progress-bar - Gray background container for the progress bar\n• height: 12px - Makes the progress bar thick enough to see clearly\n• overflow: hidden - Ensures the fill stays within rounded corners\n• .progress-fill - Green gradient fill that shows progress\n• background: linear-gradient(90deg, #10b981, #059669) - Green gradient\n• transition: width 0.5s ease - Smooth animation when width changes\n• .progress-stats - Horizontal layout for progress numbers\n• .completed-count - Bold green number for completed lessons\n• .lessons-checklist - Vertical stack of lesson items\n• gap: 0.75rem - Space between checklist items\n\nThis creates an animated progress bar that smoothly updates as lessons are completed.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.progress-bar',
                                    message: 'Add CSS styling for the progress bar!',
                                    hint: 'Style the .progress-bar with background and dimensions'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style Custom Checkboxes and Interactions',
                        description: 'Finally, let\'s create custom styled checkboxes that look great and provide clear visual feedback.',
                        instruction: 'Add this CSS for the lesson checkboxes:',
                        code: `.lesson-item {
  transition: all 0.3s ease;
}

.lesson-checkbox {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.lesson-checkbox:hover {
  background: #f8fafc;
  border-color: #e5e7eb;
}

.checkbox-input {
  display: none;
}

.checkbox-custom {
  width: 24px;
  height: 24px;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background: white;
}

.checkbox-input:checked + .checkbox-custom {
  background: #10b981;
  border-color: #10b981;
  color: white;
}

.checkbox-input:checked + .checkbox-custom + .lesson-title {
  color: #065f46;
  font-weight: 600;
}

.checkbox-input:checked ~ * {
  opacity: 0.8;
}

.lesson-title {
  font-size: 1rem;
  color: #374151;
  transition: all 0.3s ease;
}

.lesson-item.completed {
  background: #f0fdf4;
  border-color: #10b981;
}`,
                        codeFile: 'style.css',
                        tip: 'Custom checkboxes look much better than default browser checkboxes and provide better user experience!',
                        explanation: 'What each style creates:\n• .lesson-checkbox - Clickable area that includes checkbox and text\n• display: flex; align-items: center - Aligns checkbox with text\n• cursor: pointer - Shows the entire area is clickable\n• .checkbox-input display: none - Hides the default browser checkbox\n• .checkbox-custom - Custom styled checkbox with border and background\n• width: 24px; height: 24px - Perfect square for the checkbox\n• :checked + .checkbox-custom - Green background when checked\n• :checked + .checkbox-custom + .lesson-title - Green text when checked\n• transition: all 0.3s ease - Smooth animations for all state changes\n• .completed background: #f0fdf4 - Light green background for completed items\n\nThis creates beautiful, interactive checkboxes with smooth animations and clear visual feedback.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.lesson-checkbox',
                                    message: 'Add CSS styling for lesson checkboxes!',
                                    hint: 'Style the .lesson-checkbox with flex layout and interactions'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the BMI Calculator Container',
                        description: 'Let\'s start by creating a container for our BMI calculator. This will help users calculate their Body Mass Index!',
                        instruction: 'Add this HTML structure for the BMI calculator:',
                        code: `<section class="bmi-section">
  <div class="bmi-container">
    <h2 class="bmi-title">BMI Calculator</h2>
    <div class="bmi-calculator">
      <div class="calculator-form">
        <!-- Input fields will go here -->
      </div>
      <div class="calculator-result" id="calculatorResult">
        <!-- Results will appear here -->
      </div>
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'BMI calculators are useful tools that help people understand their health metrics!',
                        explanation: 'What we just added:\n• <section class="bmi-section"> - Semantic section for the BMI calculator area\n• <div class="bmi-container"> - Container to control width and centering\n• <h2 class="bmi-title"> - Clear title for the calculator\n• <div class="bmi-calculator"> - Main calculator container\n• <div class="calculator-form"> - Container for input fields and button\n• <div class="calculator-result"> - Area where results will be displayed\n• id="calculatorResult" - JavaScript will update this area\n\nThis creates the foundation for our interactive BMI calculator.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'bmi-section',
                                    message: 'Add a section with class="bmi-section"!',
                                    hint: 'This will be the main container for the BMI calculator'
                                },
                                {
                                    type: 'class',
                                    value: 'bmi-calculator',
                                    message: 'Add a div with class="bmi-calculator"!',
                                    hint: 'This will hold the calculator form and results'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Input Fields for Height and Weight',
                        description: 'Now let\'s add input fields where users can enter their height and weight measurements.',
                        instruction: 'Add these input fields inside the calculator-form div:',
                        code: `        <div class="input-group">
          <label for="height" class="input-label">
            <i data-lucide="ruler"></i>
            Height (cm)
          </label>
          <input type="number" id="height" class="calculator-input" placeholder="Enter your height in cm" min="50" max="300">
        </div>
        
        <div class="input-group">
          <label for="weight" class="input-label">
            <i data-lucide="weight"></i>
            Weight (kg)
          </label>
          <input type="number" id="weight" class="calculator-input" placeholder="Enter your weight in kg" min="20" max="500">
        </div>`,
                        codeFile: 'index.html',
                        tip: 'Using min and max attributes helps prevent unrealistic values from being entered!',
                        explanation: 'What we just added:\n• <div class="input-group"> - Container for each input field and its label\n• <label for="height"> - Label that describes what the input is for\n• <i data-lucide="ruler"> - Ruler icon to represent height measurement\n• <input type="number"> - Number input that only accepts numeric values\n• id="height" - Unique identifier for JavaScript to access this input\n• placeholder text - Helpful hints about what to enter\n• min="50" max="300" - Reasonable limits for height in centimeters\n• min="20" max="500" - Reasonable limits for weight in kilograms\n\nThis creates user-friendly input fields with clear labels and validation.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'input-group',
                                    message: 'Add divs with class="input-group"!',
                                    hint: 'Each input needs to be wrapped in an input-group'
                                },
                                {
                                    type: 'attribute',
                                    value: 'type="number"',
                                    message: 'Use type="number" for the input fields!',
                                    hint: 'This ensures only numbers can be entered'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Calculate Button',
                        description: 'Let\'s add a button that users can click to calculate their BMI based on the entered values.',
                        instruction: 'Add this calculate button after the input fields:',
                        code: `        <button class="calculate-btn" id="calculateBtn">
          <i data-lucide="calculator"></i>
          Calculate BMI
        </button>`,
                        codeFile: 'index.html',
                        tip: 'Using a calculator icon makes it immediately clear what this button does!',
                        explanation: 'What we just added:\n• <button class="calculate-btn"> - Button to trigger the BMI calculation\n• id="calculateBtn" - JavaScript will use this ID to add click functionality\n• <i data-lucide="calculator"> - Calculator icon to show this performs calculations\n• "Calculate BMI" - Clear text that tells users what will happen\n\nThis creates a prominent action button that users can click to get their results.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'calculate-btn',
                                    message: 'Add a button with class="calculate-btn"!',
                                    hint: 'This button will trigger the BMI calculation'
                                },
                                {
                                    type: 'attribute',
                                    value: 'data-lucide="calculator"',
                                    message: 'Add a calculator icon to the button!',
                                    hint: 'Use <i data-lucide="calculator"></i>'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Results Display Area',
                        description: 'Now let\'s add the area where the calculated BMI and health category will be displayed.',
                        instruction: 'Add this results display inside the calculator-result div:',
                        code: `        <div class="result-card hidden" id="resultCard">
          <div class="bmi-value">
            <span class="bmi-number" id="bmiNumber">0.0</span>
            <span class="bmi-unit">BMI</span>
          </div>
          <div class="bmi-category" id="bmiCategory">Enter your details</div>
          <div class="bmi-description" id="bmiDescription">
            Please enter your height and weight to calculate your BMI
          </div>
        </div>`,
                        codeFile: 'index.html',
                        tip: 'Starting with the "hidden" class means the results only appear after calculation!',
                        explanation: 'What we just added:\n• <div class="result-card hidden"> - Card that displays results, hidden by default\n• id="resultCard" - JavaScript will show/hide this card\n• <div class="bmi-value"> - Container for the calculated BMI number\n• <span class="bmi-number"> - The actual BMI value will go here\n• id="bmiNumber" - JavaScript will update this with the calculated BMI\n• <span class="bmi-unit"> - "BMI" label next to the number\n• <div class="bmi-category"> - Shows health category (Normal, Overweight, etc.)\n• <div class="bmi-description"> - Additional information about the BMI result\n\nThis creates a results display that will show the BMI calculation and health category.',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'result-card',
                                    message: 'Add a div with class="result-card"!',
                                    hint: 'This will display the BMI calculation results'
                                },
                                {
                                    type: 'class',
                                    value: 'hidden',
                                    message: 'Add class="hidden" to the result card!',
                                    hint: 'This hides the results until calculation is done'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the BMI Calculator Layout',
                        description: 'Now let\'s add CSS to make our BMI calculator look professional and user-friendly.',
                        instruction: 'Add this CSS for the BMI calculator:',
                        code: `.bmi-section {
  padding: 4rem 2rem;
  background: #f8fafc;
}

.bmi-container {
  max-width: 500px;
  margin: 0 auto;
}

.bmi-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1a1a1a;
}

.bmi-calculator {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.calculator-form {
  margin-bottom: 2rem;
}

.input-group {
  margin-bottom: 1.5rem;
}

.input-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.calculator-input {
  width: 100%;
  padding: 0.875rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

.calculator-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}`,
                        codeFile: 'style.css',
                        tip: 'The white calculator on light background creates focus and makes it feel like a dedicated tool!',
                        explanation: 'What each CSS property does:\n• padding: 4rem 2rem - Generous spacing around the BMI section\n• background: #f8fafc - Light background to make calculator stand out\n• max-width: 500px - Keeps calculator compact and focused\n• text-align: center - Centers the main title\n• background: white - Clean white background for the calculator\n• border-radius: 16px - Rounded corners for modern appearance\n• box-shadow - Subtle shadow for depth and importance\n• display: flex; align-items: center - Aligns icons with label text\n• transition: border-color 0.3s ease - Smooth focus effects\n• box-shadow on focus - Blue glow when input is selected\n\nThis creates an attractive, focused layout for the BMI calculator.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.bmi-section',
                                    message: 'Add CSS styling for the BMI section!',
                                    hint: 'Style the .bmi-section with padding and background'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style Button and Results Display',
                        description: 'Finally, let\'s style the calculate button and results display to complete our BMI calculator.',
                        instruction: 'Add this CSS for the button and results:',
                        code: `.calculate-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.calculate-btn:hover {
  background: #2563eb;
}

.result-card {
  background: #f0fdf4;
  border: 2px solid #10b981;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.result-card.hidden {
  display: none;
}

.bmi-value {
  margin-bottom: 1rem;
}

.bmi-number {
  font-size: 3rem;
  font-weight: 800;
  color: #10b981;
  display: block;
}

.bmi-unit {
  font-size: 0.9rem;
  color: #6b7280;
  font-weight: 600;
}

.bmi-category {
  font-size: 1.1rem;
  font-weight: 700;
  color: #065f46;
  margin-bottom: 0.5rem;
}

.bmi-description {
  color: #6b7280;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Different result colors for BMI categories */
.result-card.underweight {
  background: #fef3c7;
  border-color: #f59e0b;
}

.result-card.underweight .bmi-number {
  color: #d97706;
}

.result-card.overweight {
  background: #fef3c7;
  border-color: #f59e0b;
}

.result-card.overweight .bmi-number {
  color: #d97706;
}

.result-card.obese {
  background: #fee2e2;
  border-color: #ef4444;
}

.result-card.obese .bmi-number {
  color: #dc2626;
}`,
                        codeFile: 'style.css',
                        tip: 'Different colors for BMI categories help users quickly understand their health status!',
                        explanation: 'What each style creates:\n• .calculate-btn - Full-width blue button with icon and text\n• width: 100% - Button spans the full calculator width\n• justify-content: center - Centers icon and text in button\n• .result-card - Green background for normal BMI results\n• background: #f0fdf4; border-color: #10b981 - Light green styling\n• .bmi-number font-size: 3rem - Large, prominent BMI value\n• .bmi-category - Bold text for health category\n• Different category colors - Yellow for underweight/overweight, red for obese\n• .hidden display: none - Hides results until calculation is done\n• transition: all 0.3s ease - Smooth animations when results appear\n\nThis creates a complete, visually appealing BMI calculator with color-coded results.',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.calculate-btn',
                                    message: 'Add CSS styling for the calculate button!',
                                    hint: 'Style the .calculate-btn with background and layout'
                                }
                            ]
                        }
                    }
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