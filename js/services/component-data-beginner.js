const BeginnerComponentData = {
  "components": [
    {
      "id": "responsive-navbar",
      "name": "Navigation Bar with Dropdown",
      "type": "navigation",
      "difficulty": "beginner",
      "hasJS": false,
      "mobileFirst": false,
      "tags": ["Beginner-Friendly", "Flexbox", "CSS-Only"],
      "description": "Build a professional navigation bar with logo, styled links, and dropdown menus. 15 easy-to-follow steps break down each concept.",
      "preview": `<div class="component-preview-placeholder">
        <nav style="background: #2c3e50; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; border-radius: 12px; margin: 1rem; box-shadow: 0 4px 12px rgba(44, 62, 80, 0.3);">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 40px; height: 40px; background: #3498db; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9,22 9,12 15,12 15,22"></polyline>
              </svg>
            </div>
            <span style="color: white; font-size: 1.5rem; font-weight: 600;">My Website</span>
          </div>
          <ul style="display: flex; list-style: none; gap: 2rem; margin: 0; padding: 0; align-items: center;">
            <li><a href="#" style="color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px; transition: background 0.3s; font-weight: 500;">Home</a></li>
            <li><a href="#" style="color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px; font-weight: 500;">About</a></li>
            <li style="position: relative;">
              <a href="#" style="color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px; background: rgba(255,255,255,0.1); font-weight: 500; display: flex; align-items: center; gap: 0.5rem;">
                Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </a>
            </li>
            <li><a href="#" style="color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px; font-weight: 500;">Contact</a></li>
          </ul>
        </nav>
      </div>`,
      "workshop": {
        "goal": "Build a professional navigation bar with logo and dropdown menu",
        "duration": "40 minutes",
        "steps": [
          {
            "title": "Create the Navbar Container",
            "description": "Let's start by making a container for our navigation bar. Think of it like building a shelf to hold all your menu items!",
            "instruction": "Type this code in your HTML file to create the navbar:",
            "code": `<nav class="navbar">
  <div class="nav-brand">
    <img src="img/webforge-icon.png" alt="Logo" class="nav-logo">
    <span class="brand-name">My Website</span>
  </div>
</nav>`,
            "codeFile": "index.html",
            "tip": "The <nav> tag tells the browser \"this is a navigation menu!\" It helps people using screen readers understand your website better.",
            "explanation": "Let's break down each line:\\n• <nav class=\"navbar\"> - Creates a navigation container. The class=\"navbar\" gives it a name so we can style it later.\\n• <div class=\"nav-brand\"> - A box to hold our logo and website name together.\\n• <img src=\"img/webforge-icon.png\" alt=\"Logo\" class=\"nav-logo\"> - Shows an image. \"src\" tells where to find the image file. \"alt\" describes it for people who can't see it (important for accessibility!).\\n• <span class=\"brand-name\"> - Holds text. Unlike <div>, <span> doesn't start a new line.\\n• </nav> - Closes the navigation container.\\n\\nNote: You can replace \"img/webforge-icon.png\" with your own logo image path!",
            "validation": {
              "required": [
                {
                  "type": "tag",
                  "value": "nav",
                  "message": "We need a <nav> tag to create our navigation bar!",
                  "hint": "Start with <nav class=\"navbar\">"
                },
                {
                  "type": "class",
                  "value": "navbar",
                  "message": "Add class=\"navbar\" to your <nav> tag!",
                  "hint": "The navbar class will help us style it later"
                }
              ]
            }
          }
        ],
        "learningObjectives": [
          "Learn how to structure a navigation bar with HTML",
          "Understand how to add and style a logo image",
          "Master CSS Flexbox for layout",
          "Learn about hover effects and transitions",
          "Understand positioning for dropdown menus",
          "Create interactive dropdown menus with CSS"
        ]
      },
      "useCases": [
        {
          "title": "School Projects",
          "description": "Perfect for student portfolio sites and class assignments"
        },
        {
          "title": "Small Business Sites",
          "description": "Professional navigation for local business websites"
        },
        {
          "title": "Personal Blogs",
          "description": "Clean navigation for personal websites and blogs"
        }
      ]
    },
    {
      "id": "hero-section",
      "name": "Hero Section",
      "type": "layout",
      "difficulty": "beginner",
      "hasJS": false,
      "mobileFirst": false,
      "tags": ["Beginner-Friendly", "Flexbox", "CSS-Only"],
      "description": "Eye-catching hero section with gradient background and call-to-action button. Perfect for landing pages!",
      "preview": `<div class="component-preview-placeholder">
        <section style="background: #667eea; color: white; padding: 3rem 2rem; border-radius: 16px; margin: 1rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; min-height: 200px;">
          <div style="flex: 1; max-width: 400px;">
            <h1 style="margin: 0 0 1rem 0; font-size: 2.5rem; font-weight: 700; line-height: 1.2;">Hi, I'm Learning to Code!</h1>
            <p style="margin: 0 0 2rem 0; font-size: 1.1rem; opacity: 0.9; line-height: 1.5;">Building awesome websites and having fun with web development</p>
            <button style="background: #4CAF50; color: white; border: none; padding: 1rem 2rem; font-size: 1.1rem; font-weight: 600; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3); transition: transform 0.3s;">See My Projects</button>
          </div>
          <div style="flex: 1; max-width: 300px;">
            <div style="width: 200px; height: 150px; background: rgba(255,255,255,0.2); border-radius: 15px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                <circle cx="12" cy="13" r="3"></circle>
              </svg>
            </div>
          </div>
        </section>
      </div>`,
      "workshop": {
        "goal": "Build a full-screen hero section with gradient background and CTA button",
        "duration": "25 minutes",
        "steps": [
          {
            "title": "Create the Hero Container",
            "description": "Let's start by creating the main hero section with two sides - one for text and one for an image!",
            "instruction": "Add this HTML to create the hero section:",
            "code": `<section class="hero">
  <div class="hero-content">
    <h1 class="hero-title">Hi, I'm Learning to Code!</h1>
    <p class="hero-subtitle">Building awesome websites and having fun with web development</p>
    <button class="hero-cta">See My Projects</button>
  </div>
  <div class="hero-image">
    <img src="img/workshop-hero-image.png" alt="Student coding">
  </div>
</section>`,
            "codeFile": "index.html",
            "tip": "We're creating two sections side by side - one for text, one for an image. This is a super popular layout!",
            "explanation": "Breaking it down:\\n• <section class=\"hero\"> - Creates a section for our hero area.\\n• <div class=\"hero-content\"> - Left side container for text and button.\\n• <h1> - The main heading. This is the biggest, most important text!\\n• <p class=\"hero-subtitle\"> - A subtitle that explains more.\\n• <button class=\"hero-cta\"> - A call-to-action button.\\n• <div class=\"hero-image\"> - Right side container for the image.\\n• <img> - The hero image that makes it look awesome!",
            "validation": {
              "required": [
                {
                  "type": "tag",
                  "value": "section",
                  "message": "We need a <section> tag for the hero!",
                  "hint": "Start with <section class=\"hero\">"
                },
                {
                  "type": "class",
                  "value": "hero",
                  "message": "Add class=\"hero\" to your section!",
                  "hint": "This class will help us style it"
                }
              ]
            }
          }
        ],
        "learningObjectives": [
          "Learn how to create full-screen sections",
          "Master Flexbox for centering content",
          "Understand CSS gradients",
          "Create interactive buttons with hover effects",
          "Use box-shadow for depth and visual interest"
        ]
      },
      "useCases": [
        {
          "title": "Landing Pages",
          "description": "Perfect first impression for business or personal sites"
        },
        {
          "title": "Portfolio Headers",
          "description": "Showcase your name and skills prominently"
        },
        {
          "title": "Product Pages",
          "description": "Highlight your main product or service offering"
        }
      ]
    },
    {
      "id": "card-component",
      "name": "Card Component",
      "type": "ui-elements",
      "difficulty": "beginner",
      "hasJS": false,
      "mobileFirst": false,
      "tags": ["Beginner-Friendly", "Box-Shadow", "CSS-Only"],
      "description": "Versatile card component for displaying content with image, title, and action button. 7 easy steps!",
      "preview": `<div class="component-preview-placeholder">
        <div style="max-width: 320px; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); margin: 1rem auto; transition: transform 0.3s;">
          <div style="width: 100%; height: 180px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
          <div style="padding: 1.75rem;">
            <h3 style="margin: 0 0 0.75rem 0; font-size: 1.35rem; font-weight: 700; color: #1a1a1a; letter-spacing: -0.02em;">Amazing Discovery</h3>
            <p style="margin: 0 0 1.5rem 0; color: #6b7280; line-height: 1.6; font-size: 0.95rem;">Explore the beauty of nature through stunning photography and inspiring stories.</p>
            <button style="background: #667eea; color: white; border: none; padding: 0.85rem 1.75rem; border-radius: 10px; font-weight: 600; cursor: pointer; width: 100%; font-size: 0.95rem; transition: all 0.3s;">Learn More</button>
          </div>
        </div>
      </div>`,
      "workshop": {
        "goal": "Build a beautiful card component with image, text, and button",
        "duration": "20 minutes",
        "steps": [
          {
            "title": "Create the Card Structure",
            "description": "Let's build a card! Cards are like little boxes that hold information - perfect for products, blog posts, or profiles.",
            "instruction": "Add this HTML to create the card:",
            "code": `<div class="card">
  <img src="https://picsum.photos/300/200" alt="Card image" class="card-image">
  <div class="card-content">
    <h3 class="card-title">Amazing Discovery</h3>
    <p class="card-description">Explore the beauty of nature through stunning photography and inspiring stories.</p>
    <button class="card-button">Learn More</button>
  </div>
</div>`,
            "codeFile": "index.html",
            "tip": "Cards are super popular in modern web design! You see them everywhere - from shopping sites to social media.",
            "explanation": "Card structure:\\n• <div class=\"card\"> - The main container for everything.\\n• <img class=\"card-image\"> - An image at the top of the card.\\n• <div class=\"card-content\"> - Holds the text and button.\\n• <h3 class=\"card-title\"> - The card's heading.\\n• <p class=\"card-description\"> - Description text.\\n• <button class=\"card-button\"> - Action button at the bottom.",
            "validation": {
              "required": [
                {
                  "type": "class",
                  "value": "card",
                  "message": "We need a div with class=\"card\"!",
                  "hint": "Start with <div class=\"card\">"
                },
                {
                  "type": "class",
                  "value": "card-image",
                  "message": "Add an image with class=\"card-image\"!",
                  "hint": "Use <img class=\"card-image\">"
                }
              ]
            }
          }
        ],
        "learningObjectives": [
          "Learn how to structure card components",
          "Master box-shadow for depth effects",
          "Understand object-fit for images",
          "Create hover effects with transform",
          "Build reusable UI components"
        ]
      },
      "useCases": [
        {
          "title": "Product Showcases",
          "description": "Display products, services, or portfolio items"
        },
        {
          "title": "Blog Post Previews",
          "description": "Show article summaries with featured images"
        },
        {
          "title": "Team Member Profiles",
          "description": "Present team members with photos and bios"
        }
      ]
    },
    {
      "id": "image-gallery",
      "name": "Image Gallery Grid",
      "type": "layout",
      "difficulty": "beginner",
      "hasJS": false,
      "mobileFirst": true,
      "tags": ["CSS Grid", "Responsive", "Images"],
      "description": "Responsive image gallery using CSS Grid. Perfect for pet adoption photos, game covers, cultural images, and portfolios!",
      "preview": `<div class="component-preview-placeholder">
        <div style="max-width: 400px; margin: 1rem auto; padding: 2rem; background: white; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1);">
          <h2 style="text-align: center; margin: 0 0 2rem 0; color: #333; font-size: 1.5rem;">Photo Gallery</h2>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
            <div style="height: 80px; background: linear-gradient(135deg, #ff6b6b, #ee5a24); border-radius: 8px;"></div>
            <div style="height: 80px; background: linear-gradient(135deg, #4834d4, #686de0); border-radius: 8px;"></div>
            <div style="height: 80px; background: linear-gradient(135deg, #00d2d3, #54a0ff); border-radius: 8px;"></div>
            <div style="height: 80px; background: linear-gradient(135deg, #5f27cd, #a55eea); border-radius: 8px;"></div>
            <div style="height: 80px; background: linear-gradient(135deg, #00d84a, #05c46b); border-radius: 8px;"></div>
            <div style="height: 80px; background: linear-gradient(135deg, #ff9ff3, #f368e0); border-radius: 8px;"></div>
          </div>
        </div>
      </div>`,
      "workshop": {
        "goal": "Build a responsive image gallery that works on all devices",
        "duration": "35 minutes",
        "steps": [
          {
            "title": "Create the Gallery Container",
            "description": "Let's start by making a container to hold all our images!",
            "instruction": "Add this HTML to create the gallery:",
            "code": `<div class="gallery">
  <h2>Photo Gallery</h2>
</div>`,
            "codeFile": "index.html",
            "tip": "The gallery container will hold all our images in a grid layout!",
            "explanation": "We're creating a simple container with a heading. Soon we'll add images inside!"
          }
        ],
        "learningObjectives": [
          "Master CSS Grid for image layouts",
          "Learn responsive image techniques",
          "Understand aspect ratios and object-fit",
          "Create hover effects for galleries"
        ]
      },
      "useCases": [
        {
          "title": "Pet Adoption",
          "description": "Showcase adoptable dogs and cats with photos"
        },
        {
          "title": "Game History",
          "description": "Display game covers and screenshots chronologically"
        },
        {
          "title": "Cultural Heritage",
          "description": "Present photos of indigenous traditions and artifacts"
        }
      ]
    },
    {
      "id": "testimonials",
      "name": "Testimonials Section",
      "type": "ui-elements",
      "difficulty": "beginner",
      "hasJS": false,
      "mobileFirst": true,
      "tags": ["Flexbox", "Social Proof", "Responsive"],
      "description": "Customer testimonials section with profile photos and quotes. Build trust for your salon, gym, or music school!",
      "preview": `<div class="component-preview-placeholder">
        <section style="max-width: 400px; margin: 1rem auto; padding: 2rem; background: #f9fafb; border-radius: 16px;">
          <h2 style="text-align: center; margin: 0 0 2rem 0; color: #333; font-size: 1.5rem;">What Our Customers Say</h2>
          <div style="display: grid; gap: 1.5rem;">
            <div style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%;"></div>
                <div>
                  <h4 style="margin: 0; color: #333; font-size: 1rem;">Sarah Johnson</h4>
                  <p style="margin: 0.2rem 0 0 0; color: #667eea; font-size: 0.8rem;">Happy Customer</p>
                </div>
              </div>
              <p style="margin: 0; color: #666; line-height: 1.6; font-style: italic; font-size: 0.9rem;">"Amazing service! Highly recommend to everyone. The team was professional and friendly."</p>
            </div>
            <div style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #4facfe, #00f2fe); border-radius: 50%;"></div>
                <div>
                  <h4 style="margin: 0; color: #333; font-size: 1rem;">Mike Chen</h4>
                  <p style="margin: 0.2rem 0 0 0; color: #667eea; font-size: 0.8rem;">Regular Client</p>
                </div>
              </div>
              <p style="margin: 0; color: #666; line-height: 1.6; font-style: italic; font-size: 0.9rem;">"Best experience ever! Will definitely come back. Five stars all the way!"</p>
            </div>
          </div>
        </section>
      </div>`,
      "workshop": {
        "goal": "Build a testimonials section to showcase customer reviews",
        "duration": "30 minutes",
        "steps": [
          {
            "title": "Create the Testimonials Container",
            "description": "Let's start by creating a section for customer reviews!",
            "instruction": "Add this HTML:",
            "code": `<section class="testimonials">
  <h2>What Our Customers Say</h2>
  <div class="testimonial-grid">
  </div>
</section>`,
            "codeFile": "index.html",
            "tip": "Testimonials build trust with potential customers!",
            "explanation": "We're creating a section with a heading and a grid to hold testimonial cards."
          }
        ],
        "learningObjectives": [
          "Design testimonial card layouts",
          "Create visually appealing quote displays",
          "Build responsive testimonial grids",
          "Use CSS for professional styling"
        ]
      },
      "useCases": [
        {
          "title": "Salon Reviews",
          "description": "Show happy customer testimonials and transformations"
        },
        {
          "title": "Fitness Success",
          "description": "Display client success stories and transformations"
        },
        {
          "title": "Student Reviews",
          "description": "Showcase music student progress and feedback"
        }
      ]
    },
    {
      "id": "footer",
      "name": "Footer with Social Links",
      "type": "navigation",
      "difficulty": "beginner",
      "hasJS": false,
      "mobileFirst": true,
      "tags": ["Flexbox", "Social Media", "Essential"],
      "description": "Complete footer with contact info, social media links, and copyright. Essential for every website!",
      "preview": `<div class="component-preview-placeholder">
        <footer style="background: #2c3e50; color: white; padding: 2rem; border-radius: 12px; margin: 1rem;">
          <div style="display: flex; justify-content: space-between; gap: 2rem; margin-bottom: 1.5rem;">
            <div style="flex: 1;">
              <h3 style="margin: 0 0 1rem 0; color: white; font-size: 1.1rem;">My Company</h3>
              <p style="margin: 0 0 0.5rem 0; font-size: 0.9rem; color: #bdc3c7;">Building amazing websites since 2024</p>
              <p style="margin: 0 0 0.5rem 0; font-size: 0.9rem; color: #bdc3c7;">Email: contact@mycompany.com</p>
              <p style="margin: 0; font-size: 0.9rem; color: #bdc3c7;">Phone: (123) 456-7890</p>
            </div>
            <div style="flex: 1;">
              <h3 style="margin: 0 0 1rem 0; color: white; font-size: 1.1rem;">Quick Links</h3>
              <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <a href="#" style="color: #bdc3c7; text-decoration: none; font-size: 0.9rem;">Home</a>
                <a href="#" style="color: #bdc3c7; text-decoration: none; font-size: 0.9rem;">About</a>
                <a href="#" style="color: #bdc3c7; text-decoration: none; font-size: 0.9rem;">Services</a>
                <a href="#" style="color: #bdc3c7; text-decoration: none; font-size: 0.9rem;">Contact</a>
              </div>
            </div>
            <div style="flex: 1;">
              <h3 style="margin: 0 0 1rem 0; color: white; font-size: 1.1rem;">Follow Us</h3>
              <div style="display: flex; gap: 1rem;">
                <div style="width: 35px; height: 35px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
                <div style="width: 35px; height: 35px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </div>
                <div style="width: 35px; height: 35px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div style="text-align: center; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1);">
            <p style="margin: 0; color: #bdc3c7; font-size: 0.85rem;">© 2024 My Company. All rights reserved.</p>
          </div>
        </footer>
      </div>`,
      "workshop": {
        "goal": "Build a professional footer with contact and social media links",
        "duration": "25 minutes",
        "steps": [
          {
            "title": "Create the Footer Container",
            "description": "Let's start by creating the footer structure!",
            "instruction": "Add this HTML at the bottom of your page:",
            "code": `<footer class="site-footer">
  <div class="footer-content">
  </div>
</footer>`,
            "codeFile": "index.html",
            "tip": "The footer goes at the very bottom of your website!",
            "explanation": "We're creating a footer element with a container for our content."
          }
        ],
        "learningObjectives": [
          "Structure footer content effectively",
          "Add social media icons with Lucide",
          "Create responsive footer layouts",
          "Style footer for visual consistency"
        ]
      },
      "useCases": [
        {
          "title": "All Websites",
          "description": "Every website needs a footer with contact and social links"
        },
        {
          "title": "Business Sites",
          "description": "Display business hours, location, and contact methods"
        },
        {
          "title": "Portfolio Sites",
          "description": "Link to social profiles and contact information"
        }
      ]
    },
    {
      "id": "progress-bar",
      "name": "Progress Bar Component",
      "type": "ui-elements",
      "difficulty": "beginner",
      "hasJS": true,
      "mobileFirst": false,
      "tags": ["Beginner-Friendly", "JavaScript", "Visual"],
      "description": "Animated progress bar to show completion status. Great for fitness goals, learning progress, or loading!",
      "preview": `<div class="component-preview-placeholder">
        <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 350px; margin: 1rem auto;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
            <span style="font-weight: 600; color: #1a1a1a; font-size: 1rem;">Workout Progress</span>
            <span style="font-weight: 700; color: #3b82f6; font-size: 1rem;">75%</span>
          </div>
          <div style="width: 100%; height: 12px; background: #e5e7eb; border-radius: 20px; overflow: hidden;">
            <div style="width: 75%; height: 100%; background: linear-gradient(90deg, #3b82f6, #1d4ed8); border-radius: 20px; transition: width 0.5s ease;"></div>
          </div>
          <div style="margin-top: 1rem; font-size: 0.85rem; color: #6b7280;">Keep going! You're doing great!</div>
        </div>
      </div>`,
      "workshop": {
        "goal": "Build an animated progress bar that shows completion percentage",
        "duration": "15 minutes",
        "steps": [
          {
            "title": "Create Progress Bar HTML",
            "description": "Make the progress bar structure!",
            "instruction": "Add this HTML:",
            "code": `<div class="progress-container">
  <div class="progress-header">
    <span class="progress-label">Workout Progress</span>
    <span class="progress-percent">0%</span>
  </div>
  <div class="progress-bar">
    <div class="progress-fill"></div>
  </div>
</div>`,
            "codeFile": "index.html",
            "tip": "The fill div will grow to show progress!",
            "explanation": "We create a container with a label, percentage, and the progress bar."
          }
        ],
        "learningObjectives": [
          "Create progress indicators",
          "Animate CSS properties",
          "Update elements with JavaScript",
          "Use setInterval for animations"
        ]
      },
      "useCases": [
        {
          "title": "Fitness Websites",
          "description": "Show workout completion"
        },
        {
          "title": "Learning Platforms",
          "description": "Display course progress"
        }
      ]
    },
    {
      "id": "announcement-banner",
      "name": "Announcement / Alert Banner",
      "type": "ui-elements",
      "difficulty": "beginner",
      "hasJS": true,
      "mobileFirst": false,
      "tags": ["Beginner-Friendly", "JavaScript"],
      "description": "Eye-catching banner for important announcements. Can be dismissed by users!",
      "preview": `<div class="component-preview-placeholder">
        <div style="background: #3b82f6; color: white; padding: 1rem 1.5rem; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3); max-width: 400px; margin: 1rem auto;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span style="font-weight: 600; font-size: 0.95rem;">New event this weekend!</span>
          </div>
          <button style="background: none; border: none; color: white; cursor: pointer; padding: 0.25rem; font-size: 1.25rem; opacity: 0.8;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>`,
      "workshop": {
        "goal": "Build a dismissible announcement banner",
        "duration": "15 minutes",
        "steps": [
          {
            "title": "Create the Banner",
            "description": "Make an announcement banner!",
            "instruction": "Add this HTML:",
            "code": `<div class="announcement-banner" id="announcement">
  <div class="banner-content">
    <i data-lucide="info"></i>
    <span>New event this weekend!</span>
  </div>
  <button class="close-btn" onclick="closeBanner()">
    <i data-lucide="x"></i>
  </button>
</div>`,
            "codeFile": "index.html",
            "tip": "The X button will close the banner!",
            "explanation": "We create a banner with content and a close button."
          }
        ],
        "learningObjectives": [
          "Create notification banners",
          "Handle click events",
          "Hide elements with JavaScript",
          "Use Lucide icons"
        ]
      },
      "useCases": [
        {
          "title": "City Websites",
          "description": "Announce events or alerts"
        },
        {
          "title": "All Websites",
          "description": "Show important messages"
        }
      ]
    },
    {
      "id": "difficulty-badge",
      "name": "Difficulty Badge System",
      "type": "ui-elements",
      "difficulty": "beginner",
      "hasJS": false,
      "mobileFirst": false,
      "tags": ["Beginner-Friendly", "CSS-Only", "Visual"],
      "description": "Color-coded badges to show difficulty levels. Perfect for tutorials, lessons, or challenges!",
      "preview": `<div class="component-preview-placeholder">
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; padding: 2rem; justify-content: center; background: white; border-radius: 16px; margin: 1rem; box-shadow: 0 8px 24px rgba(0,0,0,0.1);">
          <span style="padding: 0.5rem 1rem; background: #10b981; color: white; border-radius: 20px; font-size: 0.85rem; font-weight: 700;">Beginner</span>
          <span style="padding: 0.5rem 1rem; background: #f59e0b; color: white; border-radius: 20px; font-size: 0.85rem; font-weight: 700;">Intermediate</span>
          <span style="padding: 0.5rem 1rem; background: #ef4444; color: white; border-radius: 20px; font-size: 0.85rem; font-weight: 700;">Advanced</span>
          <span style="padding: 0.5rem 1rem; background: #8b5cf6; color: white; border-radius: 20px; font-size: 0.85rem; font-weight: 700;">Expert</span>
        </div>
      </div>`,
      "workshop": {
        "goal": "Create color-coded difficulty badges",
        "duration": "10 minutes",
        "steps": [
          {
            "title": "Create Badge HTML",
            "description": "Make badges for each difficulty!",
            "instruction": "Add this HTML:",
            "code": `<div class="difficulty-badges">
  <span class="badge beginner">Beginner</span>
  <span class="badge intermediate">Intermediate</span>
  <span class="badge advanced">Advanced</span>
</div>`,
            "codeFile": "index.html",
            "tip": "Each badge has a different class for colors!",
            "explanation": "We create span elements with classes for each difficulty level."
          }
        ],
        "learningObjectives": [
          "Create badge components",
          "Use CSS classes for variants",
          "Apply color coding",
          "Style inline elements"
        ]
      },
      "useCases": [
        {
          "title": "Music Tutorial Sites",
          "description": "Show lesson difficulty"
        },
        {
          "title": "Learning Platforms",
          "description": "Indicate content complexity"
        }
      ]
    },
    {
      "id": "city-statistics",
      "name": "City Statistics Strip",
      "type": "ui-elements",
      "difficulty": "beginner",
      "hasJS": false,
      "mobileFirst": false,
      "tags": ["Beginner-Friendly", "CSS-Only", "Flexbox"],
      "description": "Display key city statistics in a clean, organized strip. Perfect for showcasing numbers!",
      "preview": `<div class="component-preview-placeholder">
        <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 450px; margin: 1rem auto;">
          <h3 style="text-align: center; margin: 0 0 2rem 0; color: #1a1a1a; font-size: 1.3rem;">City Statistics</h3>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; text-align: center;">
            <div>
              <div style="font-size: 2rem; font-weight: 800; color: #3b82f6; margin-bottom: 0.5rem;">2.5M</div>
              <div style="font-size: 0.8rem; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Population</div>
            </div>
            <div>
              <div style="font-size: 2rem; font-weight: 800; color: #10b981; margin-bottom: 0.5rem;">150+</div>
              <div style="font-size: 0.8rem; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Parks</div>
            </div>
            <div>
              <div style="font-size: 2rem; font-weight: 800; color: #f59e0b; margin-bottom: 0.5rem;">50</div>
              <div style="font-size: 0.8rem; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Schools</div>
            </div>
            <div>
              <div style="font-size: 2rem; font-weight: 800; color: #ef4444; margin-bottom: 0.5rem;">25</div>
              <div style="font-size: 0.8rem; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Museums</div>
            </div>
          </div>
        </div>
      </div>`,
      "workshop": {
        "goal": "Build a statistics display strip for city data",
        "duration": "15 minutes",
        "steps": [
          {
            "title": "Create Statistics HTML",
            "description": "Make boxes for each statistic!",
            "instruction": "Add this HTML:",
            "code": `<div class="city-stats">
  <div class="stat-item">
    <div class="stat-number">2.5M</div>
    <div class="stat-label">Population</div>
  </div>
  <div class="stat-item">
    <div class="stat-number">150+</div>
    <div class="stat-label">Parks</div>
  </div>
  <div class="stat-item">
    <div class="stat-number">50</div>
    <div class="stat-label">Schools</div>
  </div>
  <div class="stat-item">
    <div class="stat-number">25</div>
    <div class="stat-label">Museums</div>
  </div>
</div>`,
            "codeFile": "index.html",
            "tip": "Each stat has a big number and a label!",
            "explanation": "We create stat items with numbers and labels for each city statistic."
          }
        ],
        "learningObjectives": [
          "Display statistics effectively",
          "Use CSS Grid for layouts",
          "Style numbers prominently",
          "Use nth-child selectors"
        ]
      },
      "useCases": [
        {
          "title": "City Websites",
          "description": "Show city facts and figures"
        },
        {
          "title": "Business Sites",
          "description": "Display company statistics"
        }
      ]
    },
    {
      "id": "quote-highlight",
      "name": "Quote Highlight Block",
      "type": "ui-elements",
      "difficulty": "beginner",
      "hasJS": false,
      "mobileFirst": false,
      "tags": ["Beginner-Friendly", "CSS-Only", "Typography"],
      "description": "Beautiful quote display with decorative styling. Perfect for testimonials or important messages!",
      "preview": `<div class="component-preview-placeholder">
        <blockquote style="background: #f8fafc; padding: 2rem; border-radius: 16px; border-left: 4px solid #3b82f6; max-width: 400px; margin: 1rem auto; position: relative; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#3b82f6" style="opacity: 0.2; position: absolute; top: 1rem; right: 1rem;">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <p style="font-size: 1.1rem; font-style: italic; color: #1a1a1a; line-height: 1.6; margin: 0 0 1rem 0;">"This is an inspiring quote that captures the essence of our culture and traditions."</p>
          <cite style="font-size: 0.9rem; font-weight: 600; color: #6b7280; font-style: normal;">— Elder Name</cite>
        </blockquote>
      </div>`,
      "workshop": {
        "goal": "Create a styled quote block with attribution",
        "duration": "15 minutes",
        "steps": [
          {
            "title": "Create Quote HTML",
            "description": "Make a quote with attribution!",
            "instruction": "Add this HTML:",
            "code": `<blockquote class="quote-block">
  <i data-lucide="quote" class="quote-icon"></i>
  <p class="quote-text">
    "This is an inspiring quote that captures the essence of our culture and traditions."
  </p>
  <cite class="quote-author">• Elder Name</cite>
</blockquote>`,
            "codeFile": "index.html",
            "tip": "Use blockquote for quotes - it's semantic HTML!",
            "explanation": "We use the blockquote element with a quote icon, text, and author citation."
          }
        ],
        "learningObjectives": [
          "Use semantic HTML (blockquote)",
          "Position elements absolutely",
          "Style text for emphasis",
          "Create decorative borders"
        ]
      },
      "useCases": [
        {
          "title": "Indigenous People Sites",
          "description": "Display cultural wisdom and quotes"
        },
        {
          "title": "Blog Sites",
          "description": "Highlight important messages"
        }
      ]
    },
    {
      "id": "workout-schedule",
      "name": "Workout Schedule Grid",
      "type": "ui-elements",
      "difficulty": "beginner",
      "hasJS": false,
      "mobileFirst": false,
      "tags": ["Beginner-Friendly", "CSS-Only", "Grid"],
      "description": "Weekly workout schedule in a clean grid layout. Perfect for fitness plans!",
      "preview": `<div class="component-preview-placeholder">
        <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 400px; margin: 1rem auto;">
          <h3 style="margin: 0 0 1.5rem 0; color: #1a1a1a; font-size: 1.3rem; text-align: center;">Weekly Schedule</h3>
          <div style="display: grid; gap: 0.75rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #eff6ff; border-left: 3px solid #3b82f6; border-radius: 8px;">
              <span style="font-weight: 600; color: #1a1a1a; font-size: 0.95rem;">Monday</span>
              <span style="color: #6b7280; font-size: 0.9rem;">Cardio</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #f0fdf4; border-left: 3px solid #10b981; border-radius: 8px;">
              <span style="font-weight: 600; color: #1a1a1a; font-size: 0.95rem;">Wednesday</span>
              <span style="color: #6b7280; font-size: 0.9rem;">Strength Training</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #fef3c7; border-left: 3px solid #f59e0b; border-radius: 8px;">
              <span style="font-weight: 600; color: #1a1a1a; font-size: 0.95rem;">Friday</span>
              <span style="color: #6b7280; font-size: 0.9rem;">Yoga & Stretching</span>
            </div>
          </div>
        </div>
      </div>`,
      "workshop": {
        "goal": "Build a weekly workout schedule grid",
        "duration": "20 minutes",
        "steps": [
          {
            "title": "Create Schedule HTML",
            "description": "Make a list of workout days!",
            "instruction": "Add this HTML:",
            "code": `<div class="workout-schedule">
  <h3>Weekly Schedule</h3>
  <div class="schedule-grid">
    <div class="schedule-item">
      <span class="day">Monday</span>
      <span class="workout">Cardio</span>
    </div>
    <div class="schedule-item">
      <span class="day">Wednesday</span>
      <span class="workout">Strength Training</span>
    </div>
    <div class="schedule-item">
      <span class="day">Friday</span>
      <span class="workout">Yoga & Stretching</span>
    </div>
  </div>
</div>`,
            "codeFile": "index.html",
            "tip": "Each item shows a day and workout type!",
            "explanation": "We create schedule items with day and workout information."
          }
        ],
        "learningObjectives": [
          "Create schedule layouts",
          "Use flexbox for alignment",
          "Add hover effects",
          "Apply color variations"
        ]
      },
      "useCases": [
        {
          "title": "Fitness Websites",
          "description": "Display workout schedules"
        },
        {
          "title": "Class Schedules",
          "description": "Show weekly class times"
        }
      ]
    },
    {
      "id": "tribe-profile",
      "name": "Tribe Profile Section",
      "type": "layout",
      "difficulty": "beginner",
      "hasJS": false,
      "mobileFirst": false,
      "tags": ["Beginner-Friendly", "CSS-Only", "Flexbox"],
      "description": "Profile card for indigenous tribes with image and information. Clean and respectful design!",
      "preview": `<div class="component-preview-placeholder">
        <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 380px; margin: 1rem auto;">
          <div style="height: 160px; background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);"></div>
          <div style="padding: 2rem;">
            <h3 style="margin: 0 0 0.75rem 0; font-size: 1.4rem; font-weight: 700; color: #1a1a1a;">Ifugao People</h3>
            <p style="margin: 0 0 1rem 0; font-size: 0.9rem; color: #6b7280; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Cordillera Region, Northern Philippines
            </p>
            <p style="margin: 0; font-size: 0.95rem; color: #4b5563; line-height: 1.6;">Known for the magnificent rice terraces and rich cultural heritage passed down through generations.</p>
          </div>
        </div>
      </div>`,
      "workshop": {
        "goal": "Build a profile card for indigenous tribes",
        "duration": "20 minutes",
        "steps": [
          {
            "title": "Create Profile HTML",
            "description": "Make a card with tribe information!",
            "instruction": "Add this HTML:",
            "code": `<div class="tribe-profile">
  <div class="tribe-image">
    <img src="tribe-photo.jpg" alt="Tribe name">
  </div>
  <div class="tribe-info">
    <h3 class="tribe-name">Ifugao People</h3>
    <p class="tribe-region">
      <i data-lucide="map-pin"></i>
      Cordillera Region, Northern Philippines
    </p>
    <p class="tribe-description">
      Known for the magnificent rice terraces and rich cultural heritage passed down through generations.
    </p>
  </div>
</div>`,
            "codeFile": "index.html",
            "tip": "Each tribe gets its own profile card!",
            "explanation": "We create a card with an image section and information section."
          }
        ],
        "learningObjectives": [
          "Create profile cards",
          "Use object-fit for images",
          "Structure information clearly",
          "Add location icons"
        ]
      },
      "useCases": [
        {
          "title": "Indigenous People Sites",
          "description": "Display tribe profiles"
        },
        {
          "title": "Cultural Sites",
          "description": "Show community information"
        }
      ]
    },
    {
      "id": "cultural-artifact",
      "name": "Cultural Artifact Highlight",
      "type": "ui-elements",
      "difficulty": "beginner",
      "hasJS": false,
      "mobileFirst": false,
      "tags": ["Beginner-Friendly", "CSS-Only", "Grid"],
      "description": "Showcase cultural artifacts with image and description. Perfect for museums and cultural sites!",
      "preview": `<div class="component-preview-placeholder">
        <div style="background: white; padding: 1.5rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 400px; margin: 1rem auto; display: flex; gap: 1.5rem; align-items: center;">
          <div style="width: 100px; height: 100px; background: linear-gradient(135deg, #d97706, #f59e0b); border-radius: 12px; flex-shrink: 0; display: flex; align-items: center; justify-content: center;">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          </div>
          <div style="flex: 1;">
            <h4 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; font-weight: 700; color: #1a1a1a;">Traditional Weaving</h4>
            <p style="margin: 0 0 0.75rem 0; font-size: 0.875rem; color: #6b7280; line-height: 1.6;">Ancient textile art passed down through generations, featuring intricate patterns.</p>
            <span style="display: inline-block; padding: 0.25rem 0.75rem; background: #f3f4f6; color: #6b7280; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">Pre-colonial Era</span>
          </div>
        </div>
      </div>`,
      "workshop": {
        "goal": "Build a cultural artifact display component",
        "duration": "15 minutes",
        "steps": [
          {
            "title": "Create Artifact HTML",
            "description": "Make a card for cultural items!",
            "instruction": "Add this HTML:",
            "code": `<div class="artifact-highlight">
  <div class="artifact-image">
    <img src="artifact.jpg" alt="Traditional weaving">
  </div>
  <div class="artifact-info">
    <h4 class="artifact-name">Traditional Weaving</h4>
    <p class="artifact-description">
      Ancient textile art passed down through generations, featuring intricate patterns.
    </p>
    <span class="artifact-period">Pre-colonial Era</span>
  </div>
</div>`,
            "codeFile": "index.html",
            "tip": "Each artifact gets an image and description!",
            "explanation": "We create a card with an image and information about the artifact."
          }
        ],
        "learningObjectives": [
          "Create horizontal card layouts",
          "Use flexbox for alignment",
          "Style period badges",
          "Handle image sizing"
        ]
      },
      "useCases": [
        {
          "title": "Indigenous People Sites",
          "description": "Showcase cultural artifacts"
        },
        {
          "title": "Museum Sites",
          "description": "Display collection items"
        }
      ]
    },
    {
      "id": "team-history-table",
      "name": "Team History Table",
      "type": "ui-elements",
      "difficulty": "beginner",
      "hasJS": false,
      "mobileFirst": false,
      "tags": ["Beginner-Friendly", "CSS-Only", "Tables"],
      "description": "Clean table to display team championship history. Perfect for sports websites!",
      "preview": `<div class="component-preview-placeholder">
        <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 450px; margin: 1rem auto; overflow: hidden;">
          <h3 style="margin: 0 0 1.5rem 0; font-size: 1.3rem; font-weight: 700; color: #1a1a1a; text-align: center;">Championship History</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
            <thead>
              <tr style="background: #f8fafc; border-bottom: 2px solid #e5e7eb;">
                <th style="padding: 1rem; text-align: left; font-weight: 600; color: #6b7280; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.05em;">Year</th>
                <th style="padding: 1rem; text-align: left; font-weight: 600; color: #6b7280; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.05em;">Champion</th>
                <th style="padding: 1rem; text-align: left; font-weight: 600; color: #6b7280; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.05em;">Runner-up</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem; color: #1a1a1a; font-weight: 600;">2024</td>
                <td style="padding: 1rem; color: #4b5563;">Team Alpha</td>
                <td style="padding: 1rem; color: #4b5563;">Team Beta</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem; color: #1a1a1a; font-weight: 600;">2023</td>
                <td style="padding: 1rem; color: #4b5563;">Team Gamma</td>
                <td style="padding: 1rem; color: #4b5563;">Team Delta</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem; color: #1a1a1a; font-weight: 600;">2022</td>
                <td style="padding: 1rem; color: #4b5563;">Team Alpha</td>
                <td style="padding: 1rem; color: #4b5563;">Team Gamma</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>`,
      "workshop": {
        "goal": "Build a table to display team championship history",
        "duration": "20 minutes",
        "steps": [
          {
            "title": "Create Table HTML",
            "description": "Make a table with years and teams!",
            "instruction": "Add this HTML:",
            "code": `<div class="history-table-container">
  <h3>Championship History</h3>
  <table class="history-table">
    <thead>
      <tr>
        <th>Year</th>
        <th>Champion</th>
        <th>Runner-up</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2024</td>
        <td>Team Alpha</td>
        <td>Team Beta</td>
      </tr>
      <tr>
        <td>2023</td>
        <td>Team Gamma</td>
        <td>Team Delta</td>
      </tr>
      <tr>
        <td>2022</td>
        <td>Team Alpha</td>
        <td>Team Gamma</td>
      </tr>
    </tbody>
  </table>
</div>`,
            "codeFile": "index.html",
            "tip": "Tables are perfect for organized data!",
            "explanation": "We create a table with thead for headers and tbody for data rows."
          }
        ],
        "learningObjectives": [
          "Create HTML tables",
          "Style table headers and rows",
          "Add hover effects",
          "Make tables responsive"
        ]
      },
      "useCases": [
        {
          "title": "PBA History Sites",
          "description": "Display championship records"
        },
        {
          "title": "Sports Sites",
          "description": "Show team statistics"
        }
      ]
    },
    {
      "id": "player-stats-panel",
      "name": "Player Stats Panel",
      "type": "ui-elements",
      "difficulty": "beginner",
      "hasJS": false,
      "mobileFirst": false,
      "tags": ["Beginner-Friendly", "CSS-Only", "Grid"],
      "description": "Display player statistics in an organized panel. Great for sports profiles!",
      "preview": `<div class="component-preview-placeholder">
        <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 400px; margin: 1rem auto;">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
            <div style="width: 70px; height: 70px; background: linear-gradient(135deg, #3b82f6, #1d4ed8); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.5rem;">JD</div>
            <div>
              <h3 style="margin: 0 0 0.25rem 0; font-size: 1.25rem; font-weight: 700; color: #1a1a1a;">John Doe</h3>
              <p style="margin: 0; font-size: 0.9rem; color: #6b7280; font-weight: 600;">Forward</p>
            </div>
          </div>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
            <div style="text-align: center; padding: 1rem; background: #f8fafc; border-radius: 12px;">
              <div style="font-size: 1.75rem; font-weight: 800; color: #3b82f6; margin-bottom: 0.25rem;">25.3</div>
              <div style="font-size: 0.875rem; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Points</div>
            </div>
            <div style="text-align: center; padding: 1rem; background: #f8fafc; border-radius: 12px;">
              <div style="font-size: 1.75rem; font-weight: 800; color: #10b981; margin-bottom: 0.25rem;">12.5</div>
              <div style="font-size: 0.875rem; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Assists</div>
            </div>
            <div style="text-align: center; padding: 1rem; background: #f8fafc; border-radius: 12px;">
              <div style="font-size: 1.75rem; font-weight: 800; color: #f59e0b; margin-bottom: 0.25rem;">8.2</div>
              <div style="font-size: 0.875rem; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Rebounds</div>
            </div>
            <div style="text-align: center; padding: 1rem; background: #f8fafc; border-radius: 12px;">
              <div style="font-size: 1.75rem; font-weight: 800; color: #ef4444; margin-bottom: 0.25rem;">2.1</div>
              <div style="font-size: 0.875rem; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Steals</div>
            </div>
          </div>
        </div>
      </div>`,
      "workshop": {
        "goal": "Build a player statistics display panel",
        "duration": "20 minutes",
        "steps": [
          {
            "title": "Create Stats Panel HTML",
            "description": "Make a panel with player info and stats!",
            "instruction": "Add this HTML:",
            "code": `<div class="player-stats-panel">
  <div class="player-header">
    <img src="player.jpg" alt="Player" class="player-photo">
    <div class="player-info">
      <h3 class="player-name">John Doe</h3>
      <p class="player-position">Forward</p>
    </div>
  </div>
  <div class="stats-grid">
    <div class="stat-box">
      <div class="stat-value">25.3</div>
      <div class="stat-label">Points</div>
    </div>
    <div class="stat-box">
      <div class="stat-value">12.5</div>
      <div class="stat-label">Assists</div>
    </div>
    <div class="stat-box">
      <div class="stat-value">8.2</div>
      <div class="stat-label">Rebounds</div>
    </div>
    <div class="stat-box">
      <div class="stat-value">2.1</div>
      <div class="stat-label">Steals</div>
    </div>
  </div>
</div>`,
            "codeFile": "index.html",
            "tip": "Each stat gets its own box!",
            "explanation": "We create a panel with player header and a grid of statistics."
          }
        ],
        "learningObjectives": [
          "Create player profile cards",
          "Display statistics in grids",
          "Style circular images",
          "Organize data visually"
        ]
      },
      "useCases": [
        {
          "title": "PBA History Sites",
          "description": "Show player statistics"
        },
        {
          "title": "Sports Sites",
          "description": "Display athlete profiles"
        }
      ]
    }
  ]
};

if (typeof module !== "undefined" && module.exports) { 
  module.exports = BeginnerComponentData; 
}