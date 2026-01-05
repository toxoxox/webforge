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
            description: 'Build a professional navigation bar with logo, styled links, and CSS-only dropdown menus. Learn positioning, hover effects, and accessibility features.',
            preview: `<div class="component-preview-placeholder">
                <div style="background: #2c3e50; color: white; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; border-radius: 8px; position: relative;">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 40px; height: 40px; background: #667eea; border-radius: 8px;"></div>
                        <span style="font-weight: 600; font-size: 1.5rem;">My Website</span>
                    </div>
                    <ul style="display: flex; list-style: none; gap: 2rem; margin: 0; padding: 0;">
                        <li><a href="#" style="color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px; background: rgba(255,255,255,0.1);">Home</a></li>
                        <li><a href="#" style="color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px;">About</a></li>
                        <li style="position: relative;">
                            <a href="#" style="color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px; display: flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1);">
                                Services 
                                <span style="font-size: 0.8rem;">▼</span>
                            </a>
                            <ul style="position: absolute; top: 100%; left: 0; background: white; min-width: 180px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); border-radius: 8px; padding: 0.5rem 0; list-style: none; margin: 0;">
                                <li><a href="#" style="display: block; padding: 0.75rem 1.5rem; color: #2c3e50; text-decoration: none; font-size: 0.9rem;">Web Design</a></li>
                                <li><a href="#" style="display: block; padding: 0.75rem 1.5rem; color: #2c3e50; text-decoration: none; font-size: 0.9rem;">Development</a></li>
                                <li><a href="#" style="display: block; padding: 0.75rem 1.5rem; color: #2c3e50; text-decoration: none; font-size: 0.9rem;">SEO Services</a></li>
                                <li><a href="#" style="display: block; padding: 0.75rem 1.5rem; color: #2c3e50; text-decoration: none; font-size: 0.9rem;">Consulting</a></li>
                            </ul>
                        </li>
                        <li><a href="#" style="color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px;">Contact</a></li>
                    </ul>
                </div>
            </div>`,
            workshop: {
                goal: 'Build a professional navigation bar with logo and dropdown menu',
                duration: '35 minutes',
                learningObjectives: [
                    'Create semantic HTML navigation structure',
                    'Build CSS-only dropdown menus',
                    'Style professional navigation bars',
                    'Add smooth hover animations',
                    'Understand positioning and z-index'
                ],
                steps: [
                    {
                        title: 'Create the Navbar Container',
                        description: 'Let\'s start by making a container for our navigation bar. Think of it like building a shelf to hold all your menu items!',
                        instruction: 'Type this code in your HTML file to create the navbar:',
                        code: `<nav class="navbar">
  <div class="nav-brand">
    <img src="img/webforge-icon.png" alt="Logo" class="nav-logo">
    <span class="brand-name">My Website</span>
  </div>
</nav>`,
                        codeFile: 'index.html',
                        tip: 'The <nav> tag tells the browser "this is a navigation menu!" It helps people using screen readers understand your website better.',
                        explanation: 'Let\'s break down each line:\n• <nav class="navbar"> - Creates a navigation container. The class="navbar" gives it a name so we can style it later.\n• <div class="nav-brand"> - A box to hold our logo and website name together.\n• <img src="img/webforge-icon.png" alt="Logo" class="nav-logo"> - Shows an image. "src" tells where to find the image file. "alt" describes it for people who can\'t see it (important for accessibility!).\n• <span class="brand-name"> - Holds text. Unlike <div>, <span> doesn\'t start a new line.\n• </nav> - Closes the navigation container.\n\nNote: You can replace "img/webforge-icon.png" with your own logo image path!',
                        validation: {
                            required: [
                                {
                                    type: 'tag',
                                    value: 'nav',
                                    message: 'We need a <nav> tag to create our navigation bar!',
                                    hint: 'Start with <nav class="navbar">'
                                },
                                {
                                    type: 'class',
                                    value: 'navbar',
                                    message: 'Add class="navbar" to your <nav> tag!',
                                    hint: 'The navbar class will help us style it later'
                                },
                                {
                                    type: 'class',
                                    value: 'nav-brand',
                                    message: 'We need a div with class="nav-brand" for the logo area!',
                                    hint: 'Add <div class="nav-brand"> inside your nav'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Navigation Menu with Dropdown',
                        description: 'Now let\'s add the main navigation menu. One of the items will have a dropdown submenu!',
                        instruction: 'Add this menu list after the nav-brand div:',
                        code: `  <ul class="nav-menu">
    <li class="nav-item">
      <a href="#home" class="nav-link active">Home</a>
    </li>
    <li class="nav-item">
      <a href="#about" class="nav-link">About</a>
    </li>
    <li class="nav-item dropdown">
      <a href="#services" class="nav-link">Services <i data-lucide="chevron-down"></i></a>
      <ul class="dropdown-menu">
        <li><a href="#web-design" class="dropdown-link">Web Design</a></li>
        <li><a href="#development" class="dropdown-link">Development</a></li>
        <li><a href="#seo" class="dropdown-link">SEO Services</a></li>
        <li><a href="#consulting" class="dropdown-link">Consulting</a></li>
      </ul>
    </li>
    <li class="nav-item">
      <a href="#contact" class="nav-link">Contact</a>
    </li>
  </ul>`,
                        codeFile: 'index.html',
                        tip: 'The dropdown class and nested <ul> create our dropdown menu structure. The chevron-down icon shows users there\'s a submenu!',
                        explanation: 'Dropdown menu structure:\n• <li class="nav-item dropdown"> - The parent item that contains the dropdown\n• <i data-lucide="chevron-down"></i> - A down arrow icon to indicate dropdown\n• <ul class="dropdown-menu"> - The hidden submenu that will appear on hover\n• <a class="dropdown-link"> - Links inside the dropdown menu\n\nThis creates a "Services" menu item that will show a dropdown with 4 service options when you hover over it!',
                        validation: {
                            required: [
                                {
                                    type: 'tag',
                                    value: 'ul',
                                    message: 'Add a <ul> tag for the navigation menu!',
                                    hint: 'Use <ul class="nav-menu">'
                                },
                                {
                                    type: 'class',
                                    value: 'dropdown',
                                    message: 'Add a dropdown menu item!',
                                    hint: 'Use class="nav-item dropdown"'
                                },
                                {
                                    type: 'class',
                                    value: 'dropdown-menu',
                                    message: 'Add the dropdown submenu!',
                                    hint: 'Use <ul class="dropdown-menu">'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Navbar Container',
                        description: 'Time to make our navbar look professional! We\'ll start with the basic container styling.',
                        instruction: 'Add this CSS to your style.css file:',
                        code: `.navbar {
  background-color: #2c3e50;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: relative;
  z-index: 1000;
}`,
                        codeFile: 'style.css',
                        tip: 'The z-index: 1000 ensures our navbar stays above other content, especially important for dropdown menus!',
                        explanation: 'Let\'s break down each CSS property:\n• background-color: #2c3e50 - Dark blue-gray background\n• padding: 1rem 2rem - Space inside the navbar (top/bottom: 1rem, left/right: 2rem)\n• display: flex - Makes items line up horizontally\n• justify-content: space-between - Pushes logo left, menu right\n• align-items: center - Centers items vertically\n• position: relative; z-index: 1000 - Ensures navbar stays on top of other elements\n• box-shadow - Adds a subtle shadow below the navbar',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.navbar',
                                    message: 'Add CSS styling for the .navbar class!',
                                    hint: 'Create a .navbar rule in your CSS'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Brand Section',
                        description: 'Let\'s make the logo and brand name look great together.',
                        instruction: 'Add this CSS for the brand area:',
                        code: `.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.nav-logo {
  width: 40px;
  height: 40px;
  border-radius: 8px;
}

.brand-name {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
}`,
                        codeFile: 'style.css',
                        tip: 'The "gap" property is a modern way to add space between flex items - much cleaner than margins!',
                        explanation: 'Brand styling breakdown:\n• display: flex - Lines up logo and text horizontally\n• align-items: center - Centers logo and text vertically\n• gap: 0.75rem - Adds space between logo and text\n• width/height: 40px - Makes logo a perfect square\n• border-radius: 8px - Rounds the logo corners\n• font-weight: 600 - Makes text semi-bold',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.nav-brand',
                                    message: 'Add CSS styling for the .nav-brand class!',
                                    hint: 'Style the brand container with flexbox'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Navigation Menu',
                        description: 'Now let\'s make the navigation links look professional and prepare for dropdown functionality.',
                        instruction: 'Add this CSS for the navigation menu:',
                        code: `.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-item {
  position: relative;
  margin: 0;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}`,
                        codeFile: 'style.css',
                        tip: 'The position: relative on nav-item is crucial - it creates a positioning context for our dropdown menus!',
                        explanation: 'Menu styling explained:\n• list-style: none - Removes bullet points\n• margin: 0; padding: 0 - Removes default spacing\n• display: flex - Lines up menu items horizontally\n• position: relative - Creates positioning context for dropdowns\n• gap: 2rem - Space between menu items\n• display: flex; align-items: center - Lines up text and icons in nav links\n• transition - Smooth color changes on hover',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.nav-menu',
                                    message: 'Add CSS styling for the .nav-menu class!',
                                    hint: 'Style the menu list with flexbox'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Create the Dropdown Menu Styles',
                        description: 'Now for the exciting part - let\'s create the dropdown menu that appears when you hover over "Services"!',
                        instruction: 'Add this CSS for the dropdown functionality:',
                        code: `.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  min-width: 200px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  border-radius: 8px;
  padding: 0.5rem 0;
  list-style: none;
  margin: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}`,
                        codeFile: 'style.css',
                        tip: 'The transform: translateY(-10px) makes the dropdown slide down smoothly when it appears!',
                        explanation: 'Dropdown magic explained:\n• position: absolute - Positions dropdown relative to its parent nav-item\n• top: 100% - Places dropdown just below the nav item\n• opacity: 0; visibility: hidden - Hides dropdown by default\n• transform: translateY(-10px) - Starts dropdown 10px higher\n• transition: all 0.3s ease - Smooth animation\n• .dropdown:hover .dropdown-menu - Shows dropdown when hovering over parent\n• transform: translateY(0) - Slides dropdown to final position',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.dropdown-menu',
                                    message: 'Add CSS styling for the .dropdown-menu class!',
                                    hint: 'Create the dropdown menu styles'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style Dropdown Links',
                        description: 'Let\'s make the links inside our dropdown menu look great and add hover effects.',
                        instruction: 'Add this CSS for dropdown link styling:',
                        code: `.dropdown-link {
  display: block;
  padding: 0.75rem 1.5rem;
  color: #2c3e50;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.dropdown-link:hover {
  background-color: #f8f9fa;
  color: #2c3e50;
}

.nav-link i {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.dropdown:hover .nav-link i {
  transform: rotate(180deg);
}`,
                        codeFile: 'style.css',
                        tip: 'The rotating chevron icon gives users visual feedback that the dropdown is open!',
                        explanation: 'Dropdown link styling:\n• display: block - Makes links fill the full width\n• padding: 0.75rem 1.5rem - Comfortable click area\n• color: #2c3e50 - Dark text on light background\n• transition - Smooth hover effects\n• :hover background-color - Light gray background on hover\n• transform: rotate(180deg) - Flips the chevron icon when dropdown is open',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.dropdown-link',
                                    message: 'Add CSS styling for the .dropdown-link class!',
                                    hint: 'Style the dropdown menu links'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Main Navigation Hover Effects',
                        description: 'Let\'s add smooth hover effects to the main navigation links to make them interactive.',
                        instruction: 'Add these hover and active states:',
                        code: `.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: 600;
}

.nav-link.active:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.dropdown .nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}`,
                        codeFile: 'style.css',
                        tip: 'Using rgba() with transparency creates subtle, professional-looking hover effects that work on any background!',
                        explanation: 'Interactive states explained:\n• :hover - Styles when mouse is over the link\n• .active - Styles the current page link\n• rgba(255, 255, 255, 0.1) - White with 10% opacity\n• The transition we added earlier makes these changes smooth\n• Active links get slightly more background and bold text\n• Dropdown parent links also get hover effects',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.nav-link:hover',
                                    message: 'Add hover effects for navigation links!',
                                    hint: 'Use :hover pseudo-class'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Initialize Lucide Icons',
                        description: 'Finally, let\'s add a small bit of JavaScript to make sure our chevron icon displays properly.',
                        instruction: 'Add this JavaScript to initialize the icons:',
                        code: `// Initialize Lucide icons for the dropdown chevron
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  // Optional: Add keyboard navigation for accessibility
  const dropdownItems = document.querySelectorAll('.dropdown');
  
  dropdownItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    const menu = item.querySelector('.dropdown-menu');
    
    // Show dropdown on focus (keyboard navigation)
    link.addEventListener('focus', () => {
      menu.style.opacity = '1';
      menu.style.visibility = 'visible';
      menu.style.transform = 'translateY(0)';
    });
    
    // Hide dropdown when focus leaves the dropdown area
    item.addEventListener('focusout', (e) => {
      if (!item.contains(e.relatedTarget)) {
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
        menu.style.transform = 'translateY(-10px)';
      }
    });
  });
});`,
                        codeFile: 'script.js',
                        tip: 'This JavaScript also adds keyboard accessibility - users can navigate the dropdown with Tab and Enter keys!',
                        explanation: 'JavaScript functionality:\n• DOMContentLoaded - Waits for HTML to load before running\n• lucide.createIcons() - Converts icon elements to actual icons\n• focus/focusout events - Makes dropdown work with keyboard navigation\n• contains() - Checks if focus is still within the dropdown area\n• This makes your navbar accessible to users who navigate with keyboards!',
                        validation: {
                            required: [
                                {
                                    type: 'js-function',
                                    value: 'addEventListener',
                                    message: 'Add JavaScript to initialize icons and accessibility!',
                                    hint: 'Use addEventListener for DOMContentLoaded'
                                }
                            ]
                        }
                    }
                ]
            }
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
                ],
                steps: [
                    {
                        title: 'Create the Hero Container',
                        description: 'Let\'s start by creating a full-screen hero section that will grab visitors\' attention!',
                        instruction: 'Add this HTML structure to create your hero section:',
                        code: `<section class="hero-section">
  <div class="hero-content">
    <div class="hero-text">
      <h1 class="hero-title">Hi, I'm Learning to Code!</h1>
      <p class="hero-description">Building awesome websites and having fun with web development</p>
      <button class="hero-btn">See My Projects</button>
    </div>
    <div class="hero-image">
      <img src="img/webforge-hero.png" alt="Hero illustration" class="hero-img">
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'The <section> tag is perfect for major page sections like hero areas!',
                        explanation: 'Hero section structure:\n• <section class="hero-section"> - Creates a major page section\n• <div class="hero-content"> - Container for all hero content\n• <div class="hero-text"> - Left side with text content\n• <h1> - Main headline (most important text on page)\n• <p> - Supporting description text\n• <button> - Call-to-action button\n• <div class="hero-image"> - Right side with image',
                        validation: {
                            required: [
                                {
                                    type: 'tag',
                                    value: 'section',
                                    message: 'Add a <section> tag for the hero area!',
                                    hint: 'Use <section class="hero-section">'
                                },
                                {
                                    type: 'class',
                                    value: 'hero-section',
                                    message: 'Add class="hero-section" to your section!',
                                    hint: 'This class will help us style the hero'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Hero Container',
                        description: 'Now let\'s make the hero section full-screen with a beautiful gradient background.',
                        instruction: 'Add this CSS to style the hero container:',
                        code: `.hero-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  padding: 2rem;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
  width: 100%;
}`,
                        codeFile: 'style.css',
                        tip: 'min-height: 100vh makes the section take up the full viewport height!',
                        explanation: 'Hero container styling:\n• min-height: 100vh - Full screen height (100% of viewport height)\n• background: linear-gradient() - Beautiful gradient from blue to purple\n• display: flex; align-items: center - Centers content vertically\n• max-width: 1200px - Limits content width on large screens\n• margin: 0 auto - Centers the content horizontally\n• gap: 4rem - Space between text and image',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.hero-section',
                                    message: 'Add CSS styling for the hero section!',
                                    hint: 'Create a .hero-section rule with min-height and background'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Hero Text',
                        description: 'Let\'s make the hero text look amazing with proper typography and spacing.',
                        instruction: 'Add this CSS for the hero text content:',
                        code: `.hero-text {
  flex: 1;
  color: white;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.25rem;
  margin: 0 0 2rem 0;
  opacity: 0.95;
  line-height: 1.6;
}`,
                        codeFile: 'style.css',
                        tip: 'Use large font sizes and bold weights for hero titles to make them stand out!',
                        explanation: 'Hero text styling:\n• flex: 1 - Takes up available space in the flex container\n• font-size: 3rem - Large, attention-grabbing title\n• font-weight: 800 - Extra bold text\n• line-height: 1.2 - Tight line spacing for titles\n• opacity: 0.95 - Slightly transparent description for hierarchy\n• margin: 0 0 2rem 0 - Space below description for button',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.hero-title',
                                    message: 'Add CSS styling for the hero title!',
                                    hint: 'Style the .hero-title with large font-size'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Call-to-Action Button',
                        description: 'Let\'s create an eye-catching button that encourages visitors to take action.',
                        instruction: 'Add this CSS for the hero button:',
                        code: `.hero-btn {
  background: white;
  color: #667eea;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.hero-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}`,
                        codeFile: 'style.css',
                        tip: 'White buttons on colored backgrounds create great contrast and draw attention!',
                        explanation: 'Button styling breakdown:\n• background: white - Contrasts with gradient background\n• color: #667eea - Matches the gradient color\n• padding: 1rem 2rem - Generous padding for easy clicking\n• border-radius: 12px - Rounded corners for modern look\n• transition: all 0.3s ease - Smooth hover animations\n• transform: translateY(-2px) - Lifts button on hover\n• box-shadow - Adds depth and hover effect',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.hero-btn',
                                    message: 'Add CSS styling for the hero button!',
                                    hint: 'Style the .hero-btn with background and padding'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Hero Image',
                        description: 'Let\'s add the hero image and make it look great on all screen sizes.',
                        instruction: 'Add this CSS for the hero image:',
                        code: `.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-img {
  max-width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}`,
                        codeFile: 'style.css',
                        tip: 'Always use max-width: 100% and height: auto to make images responsive!',
                        explanation: 'Hero image styling:\n• flex: 1 - Takes up equal space with text\n• display: flex; justify-content: center - Centers image\n• max-width: 100%; height: auto - Makes image responsive\n• border-radius: 16px - Rounded corners\n• box-shadow - Adds depth and makes image pop',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.hero-image',
                                    message: 'Add CSS styling for the hero image container!',
                                    hint: 'Style the .hero-image with flexbox'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Make It Mobile Responsive',
                        description: 'Let\'s make sure our hero section looks great on mobile devices too!',
                        instruction: 'Add this mobile-responsive CSS:',
                        code: `@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-description {
    font-size: 1.1rem;
  }
  
  .hero-section {
    padding: 1rem;
  }
}`,
                        codeFile: 'style.css',
                        tip: 'Mobile-first design means thinking about small screens from the start!',
                        explanation: 'Mobile responsive design:\n• @media (max-width: 768px) - Applies styles only on mobile\n• flex-direction: column - Stacks text above image\n• text-align: center - Centers text on mobile\n• Smaller font sizes for mobile screens\n• Reduced padding for smaller screens\n• gap: 2rem - Less space between elements on mobile',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '@media',
                                    message: 'Add mobile responsive styles!',
                                    hint: 'Use @media (max-width: 768px) for mobile styles'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Card Structure',
                        description: 'Let\'s build a versatile card component that can display any type of content beautifully!',
                        instruction: 'Add this HTML structure for your card:',
                        code: `<div class="card">
  <img src="https://picsum.photos/300/200" alt="Card image" class="card-image">
  <div class="card-content">
    <h3 class="card-title">Amazing Card Title</h3>
    <p class="card-description">This is a description of the card content. It provides information about what this card represents and why it's interesting.</p>
    <button class="card-button">Learn More</button>
  </div>
</div>`,
                        codeFile: 'index.html',
                        tip: 'Cards are perfect for displaying bite-sized pieces of content like products, articles, or team members!',
                        explanation: 'Card structure breakdown:\n• <div class="card"> - Main container for the entire card\n• <img class="card-image"> - Featured image at the top\n• <div class="card-content"> - Container for text content\n• <h3 class="card-title"> - Main heading\n• <p class="card-description"> - Supporting text\n• <button class="card-button"> - Call-to-action button',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'card',
                                    message: 'Add a div with class="card" for the card container!',
                                    hint: 'Use <div class="card"> as the main container'
                                },
                                {
                                    type: 'class',
                                    value: 'card-content',
                                    message: 'Add a div with class="card-content" for the text area!',
                                    hint: 'This will hold the title, description, and button'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Card Container',
                        description: 'Let\'s give our card a modern look with rounded corners and a subtle shadow.',
                        instruction: 'Add this CSS to style the card container:',
                        code: `.card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  max-width: 350px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16);
}`,
                        codeFile: 'style.css',
                        tip: 'The overflow: hidden property ensures the image corners match the card\'s rounded corners!',
                        explanation: 'Card container styling:\n• background: white - Clean background\n• border-radius: 16px - Rounded corners for modern look\n• box-shadow - Subtle shadow for depth\n• overflow: hidden - Clips content to rounded corners\n• max-width: 350px - Prevents cards from getting too wide\n• transition - Smooth hover animations\n• transform: translateY(-8px) - Lifts card on hover',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.card',
                                    message: 'Add CSS styling for the card container!',
                                    hint: 'Style the .card class with background and border-radius'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Card Image',
                        description: 'Let\'s make sure the card image looks perfect and fits properly.',
                        instruction: 'Add this CSS for the card image:',
                        code: `.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}`,
                        codeFile: 'style.css',
                        tip: 'object-fit: cover ensures images fill the space while maintaining their aspect ratio!',
                        explanation: 'Card image styling:\n• width: 100% - Makes image fill card width\n• height: 200px - Fixed height for consistent card sizes\n• object-fit: cover - Crops image to fit without stretching\n• display: block - Removes default inline spacing',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.card-image',
                                    message: 'Add CSS styling for the card image!',
                                    hint: 'Style the .card-image with width and object-fit'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Card Content',
                        description: 'Now let\'s style the text content area with proper spacing and typography.',
                        instruction: 'Add this CSS for the card content:',
                        code: `.card-content {
  padding: 1.5rem;
}

.card-title {
  margin: 0 0 0.75rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.3;
}

.card-description {
  margin: 0 0 1.5rem 0;
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.6;
}`,
                        codeFile: 'style.css',
                        tip: 'Good typography hierarchy uses different font sizes and colors to guide the reader\'s eye!',
                        explanation: 'Card content styling:\n• padding: 1.5rem - Generous padding for readability\n• font-size: 1.5rem - Large title for hierarchy\n• font-weight: 700 - Bold title for emphasis\n• color: #6b7280 - Gray description text for hierarchy\n• line-height: 1.6 - Comfortable reading spacing\n• margin bottom - Space between elements',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.card-content',
                                    message: 'Add CSS styling for the card content area!',
                                    hint: 'Style the .card-content with padding'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Card Button',
                        description: 'Let\'s create an attractive button that encourages interaction.',
                        instruction: 'Add this CSS for the card button:',
                        code: `.card-button {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}

.card-button:hover {
  background: #5a67d8;
}`,
                        codeFile: 'style.css',
                        tip: 'Full-width buttons in cards make them easier to click and look more polished!',
                        explanation: 'Card button styling:\n• background: #667eea - Attractive blue color\n• color: white - High contrast text\n• border: none - Removes default button border\n• padding: 0.75rem 1.5rem - Comfortable click area\n• border-radius: 8px - Rounded corners\n• width: 100% - Full width for easy clicking\n• transition - Smooth color change on hover\n• :hover - Darker blue on hover',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.card-button',
                                    message: 'Add CSS styling for the card button!',
                                    hint: 'Style the .card-button with background and padding'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Gallery Container',
                        description: 'Let\'s build a responsive image gallery that automatically adjusts to different screen sizes!',
                        instruction: 'Add this HTML structure for your image gallery:',
                        code: `<section class="gallery-section">
  <h2 class="gallery-title">My Photo Gallery</h2>
  <div class="image-gallery">
    <div class="gallery-item">
      <img src="https://picsum.photos/400/300?random=1" alt="Gallery image 1" class="gallery-image">
    </div>
    <div class="gallery-item">
      <img src="https://picsum.photos/400/300?random=2" alt="Gallery image 2" class="gallery-image">
    </div>
    <div class="gallery-item">
      <img src="https://picsum.photos/400/300?random=3" alt="Gallery image 3" class="gallery-image">
    </div>
    <div class="gallery-item">
      <img src="https://picsum.photos/400/300?random=4" alt="Gallery image 4" class="gallery-image">
    </div>
    <div class="gallery-item">
      <img src="https://picsum.photos/400/300?random=5" alt="Gallery image 5" class="gallery-image">
    </div>
    <div class="gallery-item">
      <img src="https://picsum.photos/400/300?random=6" alt="Gallery image 6" class="gallery-image">
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'CSS Grid is perfect for image galleries because it automatically handles spacing and alignment!',
                        explanation: 'Gallery structure:\n• <section class="gallery-section"> - Main container for the gallery\n• <h2 class="gallery-title"> - Title for the gallery\n• <div class="image-gallery"> - Grid container for images\n• <div class="gallery-item"> - Individual image containers\n• <img class="gallery-image"> - The actual images\n• alt attributes - Important for accessibility!',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'image-gallery',
                                    message: 'Add a div with class="image-gallery" for the grid container!',
                                    hint: 'This will be our CSS Grid container'
                                },
                                {
                                    type: 'class',
                                    value: 'gallery-item',
                                    message: 'Add divs with class="gallery-item" for each image!',
                                    hint: 'Each image needs its own container'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Create the CSS Grid Layout',
                        description: 'Now let\'s use CSS Grid to create a responsive layout that automatically adjusts columns.',
                        instruction: 'Add this CSS to create the grid layout:',
                        code: `.gallery-section {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1a1a1a;
}

.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}`,
                        codeFile: 'style.css',
                        tip: 'auto-fit and minmax() make the grid automatically responsive without media queries!',
                        explanation: 'CSS Grid layout:\n• display: grid - Creates a grid container\n• grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) - Magic responsive formula!\n  - repeat() - Repeats the column pattern\n  - auto-fit - Automatically fits columns to available space\n  - minmax(300px, 1fr) - Minimum 300px width, grows to fill space\n• gap: 1.5rem - Space between grid items\n• max-width: 1200px - Limits gallery width on large screens',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.image-gallery',
                                    message: 'Add CSS Grid styling for the gallery!',
                                    hint: 'Use display: grid and grid-template-columns'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Gallery Items',
                        description: 'Let\'s make each gallery item look polished with proper image handling.',
                        instruction: 'Add this CSS for the gallery items:',
                        code: `.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.gallery-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}`,
                        codeFile: 'style.css',
                        tip: 'object-fit: cover ensures all images have the same height while maintaining their aspect ratio!',
                        explanation: 'Gallery item styling:\n• position: relative - Allows for absolute positioning of overlays later\n• overflow: hidden - Clips content to rounded corners\n• border-radius: 12px - Rounded corners for modern look\n• box-shadow - Subtle depth effect\n• height: 250px - Fixed height for consistent grid\n• object-fit: cover - Crops images to fit without stretching\n• transition - Smooth hover animations',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.gallery-item',
                                    message: 'Add CSS styling for gallery items!',
                                    hint: 'Style the .gallery-item with border-radius and box-shadow'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Hover Effects',
                        description: 'Let\'s add engaging hover effects to make the gallery interactive.',
                        instruction: 'Add this CSS for hover effects:',
                        code: `.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.gallery-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  transition: background 0.3s ease;
  z-index: 1;
}

.gallery-item:hover::before {
  background: rgba(0, 0, 0, 0.2);
}`,
                        codeFile: 'style.css',
                        tip: 'The ::before pseudo-element creates an overlay without adding extra HTML!',
                        explanation: 'Hover effects:\n• transform: scale(1.05) - Slightly enlarges image on hover\n• ::before pseudo-element - Creates an invisible overlay\n• position: absolute - Positions overlay over the image\n• z-index: 1 - Places overlay above image\n• background: rgba(0, 0, 0, 0.2) - Semi-transparent dark overlay on hover\n• transition - Smooth animation for all effects',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.gallery-item:hover',
                                    message: 'Add hover effects for gallery items!',
                                    hint: 'Use :hover pseudo-class for interactive effects'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Make It Mobile Responsive',
                        description: 'Let\'s ensure the gallery looks great on all devices with responsive adjustments.',
                        instruction: 'Add this mobile-responsive CSS:',
                        code: `@media (max-width: 768px) {
  .gallery-section {
    padding: 2rem 1rem;
  }
  
  .gallery-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .image-gallery {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .gallery-image {
    height: 200px;
  }
}

@media (max-width: 480px) {
  .image-gallery {
    grid-template-columns: 1fr;
  }
  
  .gallery-image {
    height: 250px;
  }
}`,
                        codeFile: 'style.css',
                        tip: 'Use multiple breakpoints to fine-tune the experience across different device sizes!',
                        explanation: 'Mobile responsive design:\n• @media (max-width: 768px) - Tablet and mobile styles\n• Smaller minimum column width (250px instead of 300px)\n• Reduced padding and margins for smaller screens\n• Shorter image height on mobile\n• @media (max-width: 480px) - Phone-specific styles\n• grid-template-columns: 1fr - Single column on very small screens',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '@media',
                                    message: 'Add mobile responsive styles!',
                                    hint: 'Use @media queries for different screen sizes'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Testimonials Structure',
                        description: 'Let\'s build a testimonials section to showcase customer reviews and build trust!',
                        instruction: 'Add this HTML structure for your testimonials:',
                        code: `<section class="testimonials-section">
  <div class="testimonials-container">
    <h2 class="testimonials-title">What Our Customers Say</h2>
    <div class="testimonials-grid">
      <div class="testimonial-card">
        <div class="testimonial-rating">
          <i data-lucide="star" class="star filled"></i>
          <i data-lucide="star" class="star filled"></i>
          <i data-lucide="star" class="star filled"></i>
          <i data-lucide="star" class="star filled"></i>
          <i data-lucide="star" class="star filled"></i>
        </div>
        <p class="testimonial-text">"Amazing service! The team went above and beyond to help us achieve our goals. Highly recommend to everyone."</p>
        <div class="testimonial-author">
          <div class="author-avatar">JS</div>
          <div class="author-info">
            <div class="author-name">John Smith</div>
            <div class="author-title">Happy Customer</div>
          </div>
        </div>
      </div>
      
      <div class="testimonial-card">
        <div class="testimonial-rating">
          <i data-lucide="star" class="star filled"></i>
          <i data-lucide="star" class="star filled"></i>
          <i data-lucide="star" class="star filled"></i>
          <i data-lucide="star" class="star filled"></i>
          <i data-lucide="star" class="star filled"></i>
        </div>
        <p class="testimonial-text">"Professional and reliable. Great experience working with this team. They delivered exactly what we needed."</p>
        <div class="testimonial-author">
          <div class="author-avatar">MJ</div>
          <div class="author-info">
            <div class="author-name">Mary Johnson</div>
            <div class="author-title">Satisfied Client</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'Testimonials are powerful social proof - they help build trust with potential customers!',
                        explanation: 'Testimonials structure:\n• <section class="testimonials-section"> - Main container\n• <h2 class="testimonials-title"> - Section heading\n• <div class="testimonials-grid"> - Grid container for testimonials\n• <div class="testimonial-card"> - Individual testimonial\n• <div class="testimonial-rating"> - Star rating display\n• <i data-lucide="star"> - Star icons using Lucide\n• <p class="testimonial-text"> - The actual review text\n• <div class="testimonial-author"> - Author info with avatar',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'testimonials-section',
                                    message: 'Add a section with class="testimonials-section"!',
                                    hint: 'This will be the main container for testimonials'
                                },
                                {
                                    type: 'class',
                                    value: 'testimonial-card',
                                    message: 'Add divs with class="testimonial-card" for each testimonial!',
                                    hint: 'Each testimonial needs its own card container'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Testimonials Container',
                        description: 'Let\'s create a clean, professional layout for our testimonials section.',
                        instruction: 'Add this CSS for the testimonials container:',
                        code: `.testimonials-section {
  background: #f8fafc;
  padding: 4rem 2rem;
}

.testimonials-container {
  max-width: 1200px;
  margin: 0 auto;
}

.testimonials-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1a1a1a;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}`,
                        codeFile: 'style.css',
                        tip: 'A light background color helps testimonials stand out from the rest of the page!',
                        explanation: 'Container styling:\n• background: #f8fafc - Light gray background for contrast\n• padding: 4rem 2rem - Generous padding for breathing room\n• max-width: 1200px - Limits width on large screens\n• margin: 0 auto - Centers the container\n• text-align: center - Centers the title\n• display: grid - Creates responsive grid layout\n• minmax(350px, 1fr) - Minimum 350px width, grows to fill space',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.testimonials-section',
                                    message: 'Add CSS styling for the testimonials section!',
                                    hint: 'Style the .testimonials-section with background and padding'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Testimonial Cards',
                        description: 'Now let\'s make each testimonial card look polished and professional.',
                        instruction: 'Add this CSS for the testimonial cards:',
                        code: `.testimonial-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.testimonial-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #374151;
  margin: 1.5rem 0;
  font-style: italic;
}`,
                        codeFile: 'style.css',
                        tip: 'Italic text for testimonials makes them feel more like genuine quotes!',
                        explanation: 'Card styling:\n• background: white - Clean background against gray section\n• padding: 2rem - Generous padding for readability\n• border-radius: 16px - Rounded corners for modern look\n• box-shadow - Subtle depth effect\n• transition - Smooth hover animations\n• transform: translateY(-4px) - Lifts card on hover\n• font-style: italic - Makes testimonial text look like a quote',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.testimonial-card',
                                    message: 'Add CSS styling for testimonial cards!',
                                    hint: 'Style the .testimonial-card with background and padding'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Star Ratings',
                        description: 'Let\'s create attractive star ratings to show customer satisfaction.',
                        instruction: 'Add this CSS for the star ratings:',
                        code: `.testimonial-rating {
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
}

.star {
  width: 20px;
  height: 20px;
  color: #d1d5db;
  transition: color 0.2s ease;
}

.star.filled {
  color: #fbbf24;
}`,
                        codeFile: 'style.css',
                        tip: 'Golden yellow stars are universally recognized for ratings!',
                        explanation: 'Star rating styling:\n• display: flex - Lines up stars horizontally\n• gap: 0.25rem - Small space between stars\n• width: 20px; height: 20px - Consistent star size\n• color: #d1d5db - Gray color for empty stars\n• color: #fbbf24 - Golden yellow for filled stars\n• .filled class - Applied to filled stars\n• transition - Smooth color changes',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.testimonial-rating',
                                    message: 'Add CSS styling for star ratings!',
                                    hint: 'Style the .testimonial-rating with flexbox'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Author Information',
                        description: 'Let\'s create attractive author profiles with avatars and information.',
                        instruction: 'Add this CSS for the author section:',
                        code: `.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 50px;
  height: 50px;
  background: #667eea;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
}

.author-name {
  font-weight: 600;
  color: #1a1a1a;
  font-size: 1rem;
}

.author-title {
  color: #6b7280;
  font-size: 0.9rem;
  margin-top: 0.25rem;
}`,
                        codeFile: 'style.css',
                        tip: 'Circular avatars with initials are a clean way to represent people when you don\'t have photos!',
                        explanation: 'Author styling:\n• display: flex; align-items: center - Lines up avatar and text\n• gap: 1rem - Space between avatar and text\n• width: 50px; height: 50px - Perfect circle for avatar\n• border-radius: 50% - Makes div circular\n• background: #667eea - Attractive blue background\n• display: flex; justify-content: center - Centers initials in circle\n• font-weight: 600 - Semi-bold name\n• color: #6b7280 - Gray color for job title',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.testimonial-author',
                                    message: 'Add CSS styling for author information!',
                                    hint: 'Style the .testimonial-author with flexbox'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Footer Structure',
                        description: 'Let\'s build a professional footer with all the essential information visitors need!',
                        instruction: 'Add this HTML structure for your footer:',
                        code: `<footer class="footer">
  <div class="footer-content">
    <div class="footer-section">
      <h3 class="footer-title">Company</h3>
      <ul class="footer-links">
        <li><a href="#about" class="footer-link">About Us</a></li>
        <li><a href="#services" class="footer-link">Services</a></li>
        <li><a href="#contact" class="footer-link">Contact</a></li>
        <li><a href="#careers" class="footer-link">Careers</a></li>
      </ul>
    </div>
    
    <div class="footer-section">
      <h3 class="footer-title">Contact Info</h3>
      <div class="contact-info">
        <p class="contact-item">
          <i data-lucide="map-pin" class="contact-icon"></i>
          123 Main Street, City, State 12345
        </p>
        <p class="contact-item">
          <i data-lucide="phone" class="contact-icon"></i>
          (555) 123-4567
        </p>
        <p class="contact-item">
          <i data-lucide="mail" class="contact-icon"></i>
          contact@company.com
        </p>
      </div>
    </div>
    
    <div class="footer-section">
      <h3 class="footer-title">Follow Us</h3>
      <div class="social-links">
        <a href="#" class="social-link">
          <i data-lucide="facebook" class="social-icon"></i>
        </a>
        <a href="#" class="social-link">
          <i data-lucide="twitter" class="social-icon"></i>
        </a>
        <a href="#" class="social-link">
          <i data-lucide="instagram" class="social-icon"></i>
        </a>
        <a href="#" class="social-link">
          <i data-lucide="linkedin" class="social-icon"></i>
        </a>
      </div>
    </div>
  </div>
  
  <div class="footer-bottom">
    <p class="copyright">© 2024 Company Name. All rights reserved.</p>
    <div class="footer-bottom-links">
      <a href="#privacy" class="footer-bottom-link">Privacy Policy</a>
      <a href="#terms" class="footer-bottom-link">Terms of Service</a>
    </div>
  </div>
</footer>`,
                        codeFile: 'index.html',
                        tip: 'Footers are essential for providing important links and contact information!',
                        explanation: 'Footer structure:\n• <footer class="footer"> - Semantic footer element\n• <div class="footer-content"> - Main content area with columns\n• <div class="footer-section"> - Individual columns\n• <h3 class="footer-title"> - Column headings\n• <ul class="footer-links"> - Navigation links\n• <div class="contact-info"> - Contact information with icons\n• <div class="social-links"> - Social media icons\n• <div class="footer-bottom"> - Copyright and legal links',
                        validation: {
                            required: [
                                {
                                    type: 'tag',
                                    value: 'footer',
                                    message: 'Add a <footer> tag for the footer section!',
                                    hint: 'Use <footer class="footer"> as the main container'
                                },
                                {
                                    type: 'class',
                                    value: 'footer-content',
                                    message: 'Add a div with class="footer-content" for the main content!',
                                    hint: 'This will contain the footer columns'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Footer Container',
                        description: 'Let\'s give our footer a professional dark theme that contrasts with the main content.',
                        instruction: 'Add this CSS for the footer container:',
                        code: `.footer {
  background: #2c3e50;
  color: white;
  padding: 3rem 2rem 1rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section {
  margin-bottom: 2rem;
}

.footer-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}`,
                        codeFile: 'style.css',
                        tip: 'Dark footers are a web standard - they provide good contrast and feel grounded!',
                        explanation: 'Footer container styling:\n• background: #2c3e50 - Professional dark blue-gray\n• color: white - High contrast text\n• padding: 3rem 2rem 1rem - More padding on top, less on bottom\n• max-width: 1200px - Limits width on large screens\n• display: grid - Creates responsive column layout\n• grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) - Responsive columns\n• gap: 2rem - Space between columns',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.footer',
                                    message: 'Add CSS styling for the footer!',
                                    hint: 'Style the .footer with background and color'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Footer Links',
                        description: 'Let\'s make the footer navigation links look clean and accessible.',
                        instruction: 'Add this CSS for the footer links:',
                        code: `.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-link {
  color: #bdc3c7;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: white;
}`,
                        codeFile: 'style.css',
                        tip: 'Use a lighter gray for footer links and white on hover for good visual hierarchy!',
                        explanation: 'Footer links styling:\n• list-style: none - Removes bullet points\n• padding: 0; margin: 0 - Removes default list spacing\n• margin-bottom: 0.75rem - Space between links\n• color: #bdc3c7 - Light gray for secondary text\n• text-decoration: none - Removes underlines\n• transition: color 0.3s ease - Smooth hover effect\n• :hover color: white - Brightens on hover',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.footer-links',
                                    message: 'Add CSS styling for footer links!',
                                    hint: 'Style the .footer-links list'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Contact Information',
                        description: 'Let\'s make the contact information easy to read with icons.',
                        instruction: 'Add this CSS for the contact info:',
                        code: `.contact-info {
  margin: 0;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: #bdc3c7;
  font-size: 0.95rem;
}

.contact-icon {
  width: 18px;
  height: 18px;
  color: #667eea;
  flex-shrink: 0;
}`,
                        codeFile: 'style.css',
                        tip: 'Icons help users quickly identify different types of contact information!',
                        explanation: 'Contact info styling:\n• display: flex; align-items: center - Lines up icon and text\n• gap: 0.75rem - Space between icon and text\n• margin-bottom: 1rem - Space between contact items\n• color: #bdc3c7 - Light gray for readability\n• width: 18px; height: 18px - Consistent icon size\n• color: #667eea - Blue accent color for icons\n• flex-shrink: 0 - Prevents icons from shrinking',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.contact-item',
                                    message: 'Add CSS styling for contact items!',
                                    hint: 'Style the .contact-item with flexbox'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Social Media Links',
                        description: 'Let\'s create attractive social media icons that encourage engagement.',
                        instruction: 'Add this CSS for social media links:',
                        code: `.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #bdc3c7;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

.social-icon {
  width: 20px;
  height: 20px;
}`,
                        codeFile: 'style.css',
                        tip: 'Circular social media icons are a modern, clean way to display social links!',
                        explanation: 'Social links styling:\n• display: flex; gap: 1rem - Lines up icons with space\n• width: 40px; height: 40px - Perfect circles\n• background: rgba(255, 255, 255, 0.1) - Subtle transparent background\n• border-radius: 50% - Makes circles\n• display: flex; justify-content: center - Centers icons\n• transition: all 0.3s ease - Smooth hover animations\n• :hover background: #667eea - Blue background on hover\n• transform: translateY(-2px) - Lifts icon on hover',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.social-links',
                                    message: 'Add CSS styling for social media links!',
                                    hint: 'Style the .social-links with flexbox'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Footer Bottom',
                        description: 'Let\'s add the copyright and legal links section at the bottom.',
                        instruction: 'Add this CSS for the footer bottom:',
                        code: `.footer-bottom {
  border-top: 1px solid #34495e;
  padding-top: 2rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  margin: 0;
  color: #bdc3c7;
  font-size: 0.9rem;
}

.footer-bottom-links {
  display: flex;
  gap: 2rem;
}

.footer-bottom-link {
  color: #bdc3c7;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-bottom-link:hover {
  color: white;
}

@media (max-width: 768px) {
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  
  .footer {
    padding: 2rem 1rem 1rem;
  }
}`,
                        codeFile: 'style.css',
                        tip: 'The footer bottom should be visually separated with a border and contain legal information!',
                        explanation: 'Footer bottom styling:\n• border-top: 1px solid #34495e - Separates from main footer\n• padding-top: 2rem - Space above the border\n• display: flex; justify-content: space-between - Spreads content apart\n• flex-wrap: wrap - Allows wrapping on small screens\n• gap: 1rem - Space between elements when wrapped\n• font-size: 0.9rem - Smaller text for legal info\n• @media (max-width: 768px) - Mobile responsive styles\n• flex-direction: column - Stacks vertically on mobile',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.footer-bottom',
                                    message: 'Add CSS styling for the footer bottom!',
                                    hint: 'Style the .footer-bottom with flexbox and border-top'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Progress Bar Structure',
                        description: 'Let\'s build animated progress bars to showcase skills or completion status!',
                        instruction: 'Add this HTML structure for your progress bars:',
                        code: `<section class="progress-section">
  <div class="progress-container">
    <h2 class="progress-title">Skills Progress</h2>
    
    <div class="progress-item">
      <div class="progress-header">
        <span class="progress-label">HTML & CSS</span>
        <span class="progress-percentage">90%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" data-progress="90"></div>
      </div>
    </div>
    
    <div class="progress-item">
      <div class="progress-header">
        <span class="progress-label">JavaScript</span>
        <span class="progress-percentage">75%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" data-progress="75"></div>
      </div>
    </div>
    
    <div class="progress-item">
      <div class="progress-header">
        <span class="progress-label">React</span>
        <span class="progress-percentage">60%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" data-progress="60"></div>
      </div>
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'Progress bars are great for portfolios to show skill levels or project completion!',
                        explanation: 'Progress bar structure:\n• <section class="progress-section"> - Main container\n• <div class="progress-container"> - Content wrapper\n• <div class="progress-item"> - Individual progress bar\n• <div class="progress-header"> - Label and percentage\n• <div class="progress-bar"> - Background bar\n• <div class="progress-fill"> - Colored fill bar\n• data-progress="90" - Stores percentage for animation',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'progress-section',
                                    message: 'Add a section with class="progress-section"!',
                                    hint: 'This will be the main container for progress bars'
                                },
                                {
                                    type: 'class',
                                    value: 'progress-item',
                                    message: 'Add divs with class="progress-item" for each progress bar!',
                                    hint: 'Each skill needs its own progress item'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Progress Container',
                        description: 'Let\'s create a clean layout for our progress bars section.',
                        instruction: 'Add this CSS for the progress container:',
                        code: `.progress-section {
  padding: 4rem 2rem;
  background: white;
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

.progress-item {
  margin-bottom: 2rem;
}`,
                        codeFile: 'style.css',
                        tip: 'A narrower max-width works well for progress bars since they don\'t need to be very wide!',
                        explanation: 'Container styling:\n• padding: 4rem 2rem - Generous padding for breathing room\n• background: white - Clean background\n• max-width: 600px - Narrower width for better readability\n• margin: 0 auto - Centers the container\n• text-align: center - Centers the title\n• margin-bottom: 2rem - Space between progress items',
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
                        title: 'Style the Progress Headers',
                        description: 'Let\'s style the labels and percentage displays for each progress bar.',
                        instruction: 'Add this CSS for the progress headers:',
                        code: `.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.progress-label {
  font-weight: 600;
  color: #374151;
  font-size: 1rem;
}

.progress-percentage {
  font-weight: 700;
  color: #667eea;
  font-size: 1rem;
}`,
                        codeFile: 'style.css',
                        tip: 'Using flexbox with justify-content: space-between perfectly aligns labels and percentages!',
                        explanation: 'Header styling:\n• display: flex; justify-content: space-between - Spreads label and percentage apart\n• align-items: center - Vertically centers content\n• margin-bottom: 0.5rem - Space before progress bar\n• font-weight: 600 - Semi-bold label\n• color: #374151 - Dark gray for label\n• font-weight: 700 - Bold percentage\n• color: #667eea - Blue accent for percentage',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.progress-header',
                                    message: 'Add CSS styling for progress headers!',
                                    hint: 'Style the .progress-header with flexbox'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Progress Bars',
                        description: 'Now let\'s create the actual progress bar with background and fill.',
                        instruction: 'Add this CSS for the progress bars:',
                        code: `.progress-bar {
  background: #e5e7eb;
  border-radius: 10px;
  height: 12px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 10px;
  width: 0%;
  transition: width 2s ease-in-out;
}`,
                        codeFile: 'style.css',
                        tip: 'A gradient fill makes progress bars more visually appealing than solid colors!',
                        explanation: 'Progress bar styling:\n• background: #e5e7eb - Light gray background\n• border-radius: 10px - Rounded corners\n• height: 12px - Good height for visibility\n• overflow: hidden - Clips fill to rounded corners\n• position: relative - For potential absolute positioning\n• background: linear-gradient() - Beautiful blue to purple gradient\n• width: 0% - Starts at 0 for animation\n• transition: width 2s ease-in-out - Smooth 2-second animation',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.progress-bar',
                                    message: 'Add CSS styling for progress bars!',
                                    hint: 'Style the .progress-bar with background and border-radius'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Animation with JavaScript',
                        description: 'Let\'s add JavaScript to animate the progress bars when they come into view!',
                        instruction: 'Add this JavaScript to animate the progress bars:',
                        code: `// Animate progress bars when page loads
function animateProgressBars() {
  const progressFills = document.querySelectorAll('.progress-fill');
  
  progressFills.forEach(fill => {
    const targetWidth = fill.getAttribute('data-progress');
    
    // Small delay for staggered animation
    setTimeout(() => {
      fill.style.width = targetWidth + '%';
    }, 500);
  });
}

// Run animation when page loads
window.addEventListener('load', animateProgressBars);

// Optional: Animate when scrolling into view
function animateOnScroll() {
  const progressSection = document.querySelector('.progress-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateProgressBars();
        observer.unobserve(entry.target);
      }
    });
  });
  
  if (progressSection) {
    observer.observe(progressSection);
  }
}

// Uncomment the line below to use scroll animation instead
// animateOnScroll();`,
                        codeFile: 'script.js',
                        tip: 'The Intersection Observer API lets you animate elements when they scroll into view!',
                        explanation: 'Animation JavaScript:\n• querySelectorAll(\'.progress-fill\') - Finds all progress bars\n• getAttribute(\'data-progress\') - Gets the target percentage\n• setTimeout() - Adds delay for smooth effect\n• fill.style.width = targetWidth + \'%\' - Animates to target width\n• window.addEventListener(\'load\') - Runs when page loads\n• IntersectionObserver - Detects when element enters viewport\n• observer.unobserve() - Stops observing after animation',
                        validation: {
                            required: [
                                {
                                    type: 'js-function',
                                    value: 'animateProgressBars',
                                    message: 'Add JavaScript function to animate progress bars!',
                                    hint: 'Create the animateProgressBars function'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Banner Structure',
                        description: 'Let\'s build eye-catching announcement banners to communicate important information!',
                        instruction: 'Add this HTML structure for your announcement banners:',
                        code: `<div class="announcement-banner success">
  <div class="banner-content">
    <div class="banner-icon">
      <i data-lucide="check-circle" class="icon"></i>
    </div>
    <div class="banner-text">
      <div class="banner-title">Success!</div>
      <div class="banner-message">Your account has been created successfully. Welcome aboard!</div>
    </div>
    <button class="banner-close" aria-label="Close banner">
      <i data-lucide="x" class="close-icon"></i>
    </button>
  </div>
</div>

<div class="announcement-banner warning">
  <div class="banner-content">
    <div class="banner-icon">
      <i data-lucide="alert-triangle" class="icon"></i>
    </div>
    <div class="banner-text">
      <div class="banner-title">Special Offer!</div>
      <div class="banner-message">Get 50% off all courses this week only. Limited time offer!</div>
    </div>
    <button class="banner-action">Learn More</button>
  </div>
</div>

<div class="announcement-banner error">
  <div class="banner-content">
    <div class="banner-icon">
      <i data-lucide="alert-circle" class="icon"></i>
    </div>
    <div class="banner-text">
      <div class="banner-title">System Maintenance</div>
      <div class="banner-message">Scheduled maintenance tonight at 2 AM EST. Service may be temporarily unavailable.</div>
    </div>
  </div>
</div>`,
                        codeFile: 'index.html',
                        tip: 'Different banner types (success, warning, error) help users quickly understand the message importance!',
                        explanation: 'Banner structure:\n• <div class="announcement-banner success"> - Main container with type class\n• <div class="banner-content"> - Content wrapper\n• <div class="banner-icon"> - Icon area with Lucide icons\n• <div class="banner-text"> - Text content area\n• <div class="banner-title"> - Bold title text\n• <div class="banner-message"> - Detailed message\n• <button class="banner-close"> - Dismissible close button\n• <button class="banner-action"> - Call-to-action button',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'announcement-banner',
                                    message: 'Add divs with class="announcement-banner" for each banner!',
                                    hint: 'Each banner needs the base announcement-banner class'
                                },
                                {
                                    type: 'class',
                                    value: 'banner-content',
                                    message: 'Add divs with class="banner-content" inside each banner!',
                                    hint: 'This will contain the banner content'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Base Banner',
                        description: 'Let\'s create the foundation styling for all announcement banners.',
                        instruction: 'Add this CSS for the base banner styling:',
                        code: `.announcement-banner {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.banner-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.banner-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
}

.icon {
  width: 20px;
  height: 20px;
  color: white;
}`,
                        codeFile: 'style.css',
                        tip: 'Flexbox makes it easy to align banner content and keep icons from shrinking!',
                        explanation: 'Base banner styling:\n• display: flex; align-items: center - Centers content vertically\n• padding: 1rem 1.5rem - Comfortable padding\n• border-radius: 12px - Rounded corners for modern look\n• box-shadow - Subtle depth effect\n• position: relative - For potential absolute positioning\n• gap: 1rem - Space between elements\n• width: 40px; height: 40px - Consistent icon size\n• border-radius: 50% - Circular icon background\n• flex-shrink: 0 - Prevents icon from shrinking',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.announcement-banner',
                                    message: 'Add CSS styling for announcement banners!',
                                    hint: 'Style the .announcement-banner with flexbox and padding'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Banner Text',
                        description: 'Let\'s make the banner text clear and easy to read with proper hierarchy.',
                        instruction: 'Add this CSS for the banner text:',
                        code: `.banner-text {
  flex: 1;
}

.banner-title {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: white;
}

.banner-message {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.4;
}`,
                        codeFile: 'style.css',
                        tip: 'Using flex: 1 makes the text area take up all available space between icon and buttons!',
                        explanation: 'Banner text styling:\n• flex: 1 - Takes up available space in flex container\n• font-weight: 700 - Bold title for emphasis\n• font-size: 1rem - Standard title size\n• margin-bottom: 0.25rem - Small space between title and message\n• color: white - High contrast on colored backgrounds\n• font-size: 0.9rem - Slightly smaller message text\n• color: rgba(255, 255, 255, 0.95) - Slightly transparent for hierarchy\n• line-height: 1.4 - Comfortable reading spacing',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.banner-text',
                                    message: 'Add CSS styling for banner text!',
                                    hint: 'Style the .banner-text with flex: 1'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Create Banner Type Styles',
                        description: 'Let\'s add different colors for success, warning, and error banners.',
                        instruction: 'Add this CSS for different banner types:',
                        code: `.announcement-banner.success {
  background: linear-gradient(135deg, #10b981, #059669);
}

.announcement-banner.warning {
  background: linear-gradient(135deg, #f59e0b, #d97706);
}

.announcement-banner.error {
  background: linear-gradient(135deg, #ef4444, #dc2626);
}

.announcement-banner.info {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
}`,
                        codeFile: 'style.css',
                        tip: 'Color psychology: green for success, yellow/orange for warnings, red for errors, blue for info!',
                        explanation: 'Banner type colors:\n• .success - Green gradient for positive messages\n• .warning - Orange gradient for caution/promotional messages\n• .error - Red gradient for errors or urgent messages\n• .info - Blue gradient for informational messages\n• linear-gradient(135deg, ...) - Diagonal gradients for visual interest\n• Each uses two shades of the same color for depth',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.announcement-banner.success',
                                    message: 'Add CSS styling for success banners!',
                                    hint: 'Style the .announcement-banner.success with green background'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style Banner Buttons',
                        description: 'Let\'s add styling for close buttons and action buttons.',
                        instruction: 'Add this CSS for banner buttons:',
                        code: `.banner-close {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.close-icon {
  width: 16px;
  height: 16px;
}

.banner-action {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.banner-action:hover {
  background: rgba(255, 255, 255, 0.3);
}`,
                        codeFile: 'style.css',
                        tip: 'Semi-transparent white buttons work well on any colored background!',
                        explanation: 'Button styling:\n• background: none - Transparent close button\n• border: none - Removes default button border\n• color: white - High contrast on colored backgrounds\n• padding: 0.5rem - Comfortable click area\n• border-radius: 6px - Rounded corners\n• transition - Smooth hover effects\n• background: rgba(255, 255, 255, 0.2) - Semi-transparent white\n• :hover - Slightly more opaque on hover\n• font-weight: 600 - Semi-bold action button text',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.banner-close',
                                    message: 'Add CSS styling for close buttons!',
                                    hint: 'Style the .banner-close button'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add JavaScript Functionality',
                        description: 'Let\'s add JavaScript to make the close buttons work and add slide animations.',
                        instruction: 'Add this JavaScript for banner functionality:',
                        code: `// Make banner close buttons work
function initializeBanners() {
  const closeButtons = document.querySelectorAll('.banner-close');
  
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const banner = this.closest('.announcement-banner');
      
      // Add slide-up animation
      banner.style.transform = 'translateY(-100%)';
      banner.style.opacity = '0';
      banner.style.transition = 'all 0.3s ease';
      
      // Remove from DOM after animation
      setTimeout(() => {
        banner.remove();
      }, 300);
    });
  });
}

// Auto-hide banners after a delay (optional)
function autoHideBanners() {
  const banners = document.querySelectorAll('.announcement-banner');
  
  banners.forEach((banner, index) => {
    // Auto-hide after 5 seconds, staggered by 1 second each
    setTimeout(() => {
      if (banner.parentNode) {
        const closeButton = banner.querySelector('.banner-close');
        if (closeButton) {
          closeButton.click();
        }
      }
    }, 5000 + (index * 1000));
  });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
  initializeBanners();
  // Uncomment the line below to enable auto-hide
  // autoHideBanners();
});`,
                        codeFile: 'script.js',
                        tip: 'Adding smooth animations makes banner interactions feel more polished and professional!',
                        explanation: 'Banner JavaScript:\n• querySelectorAll(\'.banner-close\') - Finds all close buttons\n• addEventListener(\'click\') - Listens for button clicks\n• closest(\'.announcement-banner\') - Finds the parent banner\n• transform: translateY(-100%) - Slides banner up\n• opacity: 0 - Fades banner out\n• setTimeout() - Removes banner after animation\n• autoHideBanners() - Optional auto-hide functionality\n• DOMContentLoaded - Runs when page is ready',
                        validation: {
                            required: [
                                {
                                    type: 'js-function',
                                    value: 'initializeBanners',
                                    message: 'Add JavaScript function for banner functionality!',
                                    hint: 'Create the initializeBanners function'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Badge Container',
                        description: 'Let\'s build a color-coded badge system to show difficulty levels or categories!',
                        instruction: 'Add this HTML structure for your badge system:',
                        code: `<section class="badge-section">
  <h2 class="badge-title">Course Difficulty Levels</h2>
  <div class="badge-container">
    <span class="difficulty-badge beginner">
      <i data-lucide="circle" class="badge-icon"></i>
      <span class="badge-text">Beginner</span>
    </span>
    
    <span class="difficulty-badge intermediate">
      <i data-lucide="circle" class="badge-icon"></i>
      <span class="badge-text">Intermediate</span>
    </span>
    
    <span class="difficulty-badge advanced">
      <i data-lucide="circle" class="badge-icon"></i>
      <span class="badge-text">Advanced</span>
    </span>
    
    <span class="difficulty-badge expert">
      <i data-lucide="circle" class="badge-icon"></i>
      <span class="badge-text">Expert</span>
    </span>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'Badges are perfect for showing categories, difficulty levels, or status information at a glance!',
                        explanation: 'Badge structure breakdown:\n• <section class="badge-section"> - Main container for the badge system\n• <h2 class="badge-title"> - Section heading\n• <div class="badge-container"> - Container for all badges\n• <span class="difficulty-badge beginner"> - Individual badge with type class\n• <i data-lucide="circle"> - Small icon using Lucide\n• <span class="badge-text"> - Badge label text\n• Each badge has a different class (beginner, intermediate, etc.) for color coding',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'badge-section',
                                    message: 'Add a section with class="badge-section"!',
                                    hint: 'This will be the main container for badges'
                                },
                                {
                                    type: 'class',
                                    value: 'difficulty-badge',
                                    message: 'Add spans with class="difficulty-badge" for each badge!',
                                    hint: 'Each badge needs the base difficulty-badge class'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Badge Container',
                        description: 'Let\'s create a clean layout for our badge system.',
                        instruction: 'Add this CSS for the badge container:',
                        code: `.badge-section {
  padding: 3rem 2rem;
  text-align: center;
  background: white;
}

.badge-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #1a1a1a;
}

.badge-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}`,
                        codeFile: 'style.css',
                        tip: 'Flexbox with flex-wrap ensures badges look good on all screen sizes!',
                        explanation: 'Container styling:\n• padding: 3rem 2rem - Generous padding for breathing room\n• text-align: center - Centers the title\n• background: white - Clean background\n• font-size: 2rem - Large, clear title\n• display: flex; justify-content: center - Centers badges horizontally\n• align-items: center - Centers badges vertically\n• gap: 1rem - Space between badges\n• flex-wrap: wrap - Allows badges to wrap on small screens',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.badge-section',
                                    message: 'Add CSS styling for the badge section!',
                                    hint: 'Style the .badge-section with padding and text-align'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Base Badge',
                        description: 'Now let\'s create the foundation styling for all badges.',
                        instruction: 'Add this CSS for the base badge styling:',
                        code: `.difficulty-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
}

.badge-icon {
  width: 8px;
  height: 8px;
}

.badge-text {
  white-space: nowrap;
}`,
                        codeFile: 'style.css',
                        tip: 'Using inline-flex keeps badges inline while allowing flexbox alignment inside!',
                        explanation: 'Base badge styling:\n• display: inline-flex - Keeps badges inline but allows flex properties\n• align-items: center - Centers icon and text vertically\n• gap: 0.5rem - Small space between icon and text\n• padding: 0.5rem 1rem - Comfortable padding for readability\n• border-radius: 20px - Pill-shaped badges\n• font-weight: 600 - Semi-bold text for emphasis\n• border: 2px solid transparent - Placeholder for hover effects\n• transition: all 0.3s ease - Smooth hover animations\n• white-space: nowrap - Prevents text from wrapping',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.difficulty-badge',
                                    message: 'Add CSS styling for badges!',
                                    hint: 'Style the .difficulty-badge with inline-flex and padding'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Badge Color Themes',
                        description: 'Let\'s add different colors for each difficulty level using color psychology.',
                        instruction: 'Add this CSS for badge color themes:',
                        code: `.difficulty-badge.beginner {
  background: #f0fdf4;
  color: #065f46;
  border-color: #10b981;
}

.difficulty-badge.beginner .badge-icon {
  color: #10b981;
}

.difficulty-badge.intermediate {
  background: #fffbeb;
  color: #92400e;
  border-color: #f59e0b;
}

.difficulty-badge.intermediate .badge-icon {
  color: #f59e0b;
}

.difficulty-badge.advanced {
  background: #fef2f2;
  color: #991b1b;
  border-color: #ef4444;
}

.difficulty-badge.advanced .badge-icon {
  color: #ef4444;
}

.difficulty-badge.expert {
  background: #f3f4f6;
  color: #374151;
  border-color: #6b7280;
}

.difficulty-badge.expert .badge-icon {
  color: #6b7280;
}`,
                        codeFile: 'style.css',
                        tip: 'Color psychology: green for easy/safe, yellow for caution, red for difficult, gray for expert!',
                        explanation: 'Badge color themes:\n• .beginner - Green theme (safe, easy, go-ahead feeling)\n• .intermediate - Orange/yellow theme (caution, moderate difficulty)\n• .advanced - Red theme (danger, high difficulty, stop and think)\n• .expert - Gray theme (neutral, professional, sophisticated)\n• Each theme includes background, text color, border, and icon color\n• Light backgrounds with dark text for good readability\n• Matching border and icon colors for consistency',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.difficulty-badge.beginner',
                                    message: 'Add color styling for beginner badges!',
                                    hint: 'Style the .difficulty-badge.beginner with green colors'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Hover Effects',
                        description: 'Let\'s add interactive hover effects to make badges feel clickable.',
                        instruction: 'Add this CSS for hover effects:',
                        code: `.difficulty-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.difficulty-badge.beginner:hover {
  background: #dcfce7;
  border-color: #059669;
}

.difficulty-badge.intermediate:hover {
  background: #fef3c7;
  border-color: #d97706;
}

.difficulty-badge.advanced:hover {
  background: #fee2e2;
  border-color: #dc2626;
}

.difficulty-badge.expert:hover {
  background: #e5e7eb;
  border-color: #4b5563;
}`,
                        codeFile: 'style.css',
                        tip: 'Subtle hover effects make badges feel interactive without being distracting!',
                        explanation: 'Hover effects:\n• transform: translateY(-2px) - Lifts badge slightly on hover\n• box-shadow - Adds depth when hovering\n• Darker background colors on hover for each theme\n• Darker border colors on hover for emphasis\n• All changes are smooth thanks to the transition property\n• Consistent hover pattern across all badge types',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.difficulty-badge:hover',
                                    message: 'Add hover effects for badges!',
                                    hint: 'Use :hover pseudo-class for interactive effects'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Statistics Container',
                        description: 'Let\'s build an eye-catching statistics section to showcase important numbers and data!',
                        instruction: 'Add this HTML structure for your statistics display:',
                        code: `<section class="statistics-section">
  <div class="statistics-container">
    <h2 class="statistics-title">City Statistics</h2>
    <div class="statistics-grid">
      <div class="stat-item">
        <div class="stat-icon">
          <i data-lucide="users" class="icon"></i>
        </div>
        <div class="stat-number">2.5M</div>
        <div class="stat-label">Population</div>
      </div>
      
      <div class="stat-item">
        <div class="stat-icon">
          <i data-lucide="building-2" class="icon"></i>
        </div>
        <div class="stat-number">1,200</div>
        <div class="stat-label">Businesses</div>
      </div>
      
      <div class="stat-item">
        <div class="stat-icon">
          <i data-lucide="trees" class="icon"></i>
        </div>
        <div class="stat-number">45</div>
        <div class="stat-label">Parks</div>
      </div>
      
      <div class="stat-item">
        <div class="stat-icon">
          <i data-lucide="graduation-cap" class="icon"></i>
        </div>
        <div class="stat-number">25</div>
        <div class="stat-label">Schools</div>
      </div>
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'Statistics sections are great for showcasing achievements, city data, or business metrics!',
                        explanation: 'Statistics structure:\n• <section class="statistics-section"> - Main container\n• <div class="statistics-container"> - Content wrapper\n• <h2 class="statistics-title"> - Section heading\n• <div class="statistics-grid"> - Grid container for stats\n• <div class="stat-item"> - Individual statistic\n• <div class="stat-icon"> - Icon area with Lucide icons\n• <div class="stat-number"> - The actual number/statistic\n• <div class="stat-label"> - Description of what the number represents',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'statistics-section',
                                    message: 'Add a section with class="statistics-section"!',
                                    hint: 'This will be the main container for statistics'
                                },
                                {
                                    type: 'class',
                                    value: 'stat-item',
                                    message: 'Add divs with class="stat-item" for each statistic!',
                                    hint: 'Each statistic needs its own item container'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Statistics Container',
                        description: 'Let\'s create an attractive background and layout for our statistics section.',
                        instruction: 'Add this CSS for the statistics container:',
                        code: `.statistics-section {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 4rem 2rem;
}

.statistics-container {
  max-width: 1000px;
  margin: 0 auto;
}

.statistics-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: white;
}`,
                        codeFile: 'style.css',
                        tip: 'A gradient background makes statistics sections stand out and feel more dynamic!',
                        explanation: 'Container styling:\n• background: linear-gradient(135deg, #667eea, #764ba2) - Beautiful blue to purple gradient\n• color: white - High contrast text on gradient background\n• padding: 4rem 2rem - Generous padding for breathing room\n• max-width: 1000px - Limits width on large screens\n• margin: 0 auto - Centers the container\n• text-align: center - Centers the title\n• font-size: 2.5rem - Large, prominent title',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.statistics-section',
                                    message: 'Add CSS styling for the statistics section!',
                                    hint: 'Style the .statistics-section with gradient background'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Create the Statistics Grid',
                        description: 'Let\'s use CSS Grid to create a responsive layout for our statistics.',
                        instruction: 'Add this CSS for the statistics grid:',
                        code: `.statistics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, background 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.15);
}`,
                        codeFile: 'style.css',
                        tip: 'backdrop-filter: blur() creates a modern glass-morphism effect!',
                        explanation: 'Grid and item styling:\n• display: grid - Creates a grid layout\n• grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) - Responsive columns\n• gap: 2rem - Space between grid items\n• text-align: center - Centers content in each stat item\n• background: rgba(255, 255, 255, 0.1) - Semi-transparent white background\n• border-radius: 16px - Rounded corners for modern look\n• backdrop-filter: blur(10px) - Glass-morphism effect\n• border: 1px solid rgba(255, 255, 255, 0.2) - Subtle border\n• transform: translateY(-8px) - Lifts item on hover',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.statistics-grid',
                                    message: 'Add CSS Grid styling for statistics!',
                                    hint: 'Style the .statistics-grid with display: grid'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Statistic Icons',
                        description: 'Let\'s make the icons look great with proper sizing and background.',
                        instruction: 'Add this CSS for the statistic icons:',
                        code: `.stat-icon {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem auto;
}

.stat-icon .icon {
  width: 28px;
  height: 28px;
  color: white;
}`,
                        codeFile: 'style.css',
                        tip: 'Circular icon backgrounds create a clean, professional look for statistics!',
                        explanation: 'Icon styling:\n• width: 60px; height: 60px - Perfect circle size\n• background: rgba(255, 255, 255, 0.2) - Semi-transparent white background\n• border-radius: 50% - Makes the container circular\n• display: flex; align-items: center; justify-content: center - Centers icon perfectly\n• margin: 0 auto 1rem auto - Centers icon horizontally and adds bottom margin\n• width: 28px; height: 28px - Consistent icon size\n• color: white - High contrast on the background',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.stat-icon',
                                    message: 'Add CSS styling for statistic icons!',
                                    hint: 'Style the .stat-icon with circular background'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Numbers and Labels',
                        description: 'Let\'s make the numbers prominent and the labels clear and readable.',
                        instruction: 'Add this CSS for numbers and labels:',
                        code: `.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: white;
  line-height: 1;
}

.stat-label {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}`,
                        codeFile: 'style.css',
                        tip: 'Large, bold numbers with smaller, uppercase labels create great visual hierarchy!',
                        explanation: 'Number and label styling:\n• font-size: 2.5rem - Large, attention-grabbing numbers\n• font-weight: 800 - Extra bold for emphasis\n• margin-bottom: 0.5rem - Space between number and label\n• line-height: 1 - Tight spacing for large numbers\n• font-size: 1rem - Smaller label text for hierarchy\n• color: rgba(255, 255, 255, 0.9) - Slightly transparent for hierarchy\n• text-transform: uppercase - Makes labels look more professional\n• letter-spacing: 0.5px - Adds space between letters for readability',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.stat-number',
                                    message: 'Add CSS styling for statistic numbers!',
                                    hint: 'Style the .stat-number with large font-size'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Mobile Responsive Design',
                        description: 'Let\'s make sure our statistics look great on all device sizes.',
                        instruction: 'Add this mobile-responsive CSS:',
                        code: `@media (max-width: 768px) {
  .statistics-section {
    padding: 3rem 1rem;
  }
  
  .statistics-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .statistics-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
  }
  
  .stat-item {
    padding: 1rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .stat-label {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .statistics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .stat-icon {
    width: 50px;
    height: 50px;
  }
  
  .stat-icon .icon {
    width: 24px;
    height: 24px;
  }
}`,
                        codeFile: 'style.css',
                        tip: 'Multiple breakpoints ensure your statistics look perfect on phones, tablets, and desktops!',
                        explanation: 'Mobile responsive design:\n• @media (max-width: 768px) - Tablet and mobile styles\n• Reduced padding and margins for smaller screens\n• Smaller font sizes for mobile readability\n• grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) - Narrower minimum width\n• @media (max-width: 480px) - Phone-specific styles\n• grid-template-columns: repeat(2, 1fr) - Exactly 2 columns on phones\n• Smaller icon sizes for mobile screens\n• All changes maintain the visual hierarchy and readability',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '@media',
                                    message: 'Add mobile responsive styles!',
                                    hint: 'Use @media queries for different screen sizes'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Quote Structure',
                        description: 'Let\'s build beautiful quote blocks to highlight important text and testimonials!',
                        instruction: 'Add this HTML structure for your quote highlight:',
                        code: `<section class="quote-section">
  <div class="quote-container">
    <div class="quote-block">
      <div class="quote-mark">"</div>
      <blockquote class="quote-text">
        The best way to predict the future is to create it.
      </blockquote>
      <div class="quote-attribution">
        <div class="author-name">Peter Drucker</div>
        <div class="author-title">Management Consultant</div>
      </div>
    </div>
    
    <div class="quote-block">
      <div class="quote-mark">"</div>
      <blockquote class="quote-text">
        Innovation distinguishes between a leader and a follower.
      </blockquote>
      <div class="quote-attribution">
        <div class="author-name">Steve Jobs</div>
        <div class="author-title">Apple Co-founder</div>
      </div>
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'The <blockquote> element is semantically correct for quotes and helps with accessibility!',
                        explanation: 'Quote structure:\n• <section class="quote-section"> - Main container for quotes\n• <div class="quote-container"> - Content wrapper\n• <div class="quote-block"> - Individual quote container\n• <div class="quote-mark"> - Large decorative quote mark\n• <blockquote class="quote-text"> - Semantic quote element\n• <div class="quote-attribution"> - Author information\n• <div class="author-name"> - Person who said the quote\n• <div class="author-title"> - Their title or description',
                        validation: {
                            required: [
                                {
                                    type: 'tag',
                                    value: 'blockquote',
                                    message: 'Add <blockquote> tags for the quotes!',
                                    hint: 'Use <blockquote class="quote-text"> for semantic quotes'
                                },
                                {
                                    type: 'class',
                                    value: 'quote-block',
                                    message: 'Add divs with class="quote-block" for each quote!',
                                    hint: 'Each quote needs its own container'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Quote Container',
                        description: 'Let\'s create a clean, elegant layout for our quote section.',
                        instruction: 'Add this CSS for the quote container:',
                        code: `.quote-section {
  background: #f8fafc;
  padding: 4rem 2rem;
}

.quote-container {
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  gap: 3rem;
}

.quote-block {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 6px solid #667eea;
  position: relative;
}`,
                        codeFile: 'style.css',
                        tip: 'A colored left border is a classic design pattern for highlighting quotes!',
                        explanation: 'Container styling:\n• background: #f8fafc - Light gray background for contrast\n• padding: 4rem 2rem - Generous padding for breathing room\n• max-width: 800px - Optimal reading width for quotes\n• margin: 0 auto - Centers the container\n• display: grid; gap: 3rem - Stacks quotes with space between\n• background: white - Clean background for quote blocks\n• border-radius: 16px - Rounded corners for modern look\n• box-shadow - Subtle depth effect\n• border-left: 6px solid #667eea - Blue accent border\n• position: relative - For absolute positioning of quote marks',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.quote-section',
                                    message: 'Add CSS styling for the quote section!',
                                    hint: 'Style the .quote-section with background and padding'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Quote Mark',
                        description: 'Let\'s add a large, decorative quote mark to make quotes visually striking.',
                        instruction: 'Add this CSS for the quote mark:',
                        code: `.quote-mark {
  font-size: 4rem;
  color: #667eea;
  opacity: 0.3;
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  line-height: 1;
  font-family: Georgia, serif;
}`,
                        codeFile: 'style.css',
                        tip: 'Large, semi-transparent quote marks add visual interest without being distracting!',
                        explanation: 'Quote mark styling:\n• font-size: 4rem - Very large decorative size\n• color: #667eea - Matches the border color\n• opacity: 0.3 - Semi-transparent so it doesn\'t overpower the text\n• position: absolute - Positions independently of text flow\n• top: 1rem; left: 1.5rem - Places in top-left corner\n• line-height: 1 - Tight spacing for large text\n• font-family: Georgia, serif - Serif font for classic quote mark look',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.quote-mark',
                                    message: 'Add CSS styling for quote marks!',
                                    hint: 'Style the .quote-mark with large font-size and position'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Quote Text',
                        description: 'Now let\'s make the actual quote text beautiful and readable.',
                        instruction: 'Add this CSS for the quote text:',
                        code: `.quote-text {
  margin: 0;
  padding: 1rem 0 0 2rem;
  font-size: 1.25rem;
  font-style: italic;
  color: #374151;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}`,
                        codeFile: 'style.css',
                        tip: 'Italic text is traditional for quotes and helps distinguish them from regular content!',
                        explanation: 'Quote text styling:\n• margin: 0 - Removes default blockquote margins\n• padding: 1rem 0 0 2rem - Adds space above and left padding\n• font-size: 1.25rem - Slightly larger than body text for emphasis\n• font-style: italic - Traditional italic styling for quotes\n• color: #374151 - Dark gray for good readability\n• line-height: 1.6 - Comfortable reading spacing\n• position: relative; z-index: 1 - Ensures text appears above quote mark\n• Left padding creates space for the decorative quote mark',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.quote-text',
                                    message: 'Add CSS styling for quote text!',
                                    hint: 'Style the .quote-text with font-style: italic'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Attribution',
                        description: 'Let\'s add proper styling for the author information.',
                        instruction: 'Add this CSS for the quote attribution:',
                        code: `.quote-attribution {
  margin-top: 1.5rem;
  padding-left: 2rem;
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
}

.author-name {
  font-weight: 700;
  color: #1a1a1a;
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.author-title {
  color: #6b7280;
  font-size: 0.9rem;
  font-style: normal;
}`,
                        codeFile: 'style.css',
                        tip: 'A subtle border separates the quote from attribution while keeping them visually connected!',
                        explanation: 'Attribution styling:\n• margin-top: 1.5rem - Space above attribution\n• padding-left: 2rem - Aligns with quote text\n• border-top: 1px solid #e5e7eb - Subtle separator line\n• padding-top: 1rem - Space above the border\n• font-weight: 700 - Bold author name for emphasis\n• color: #1a1a1a - Dark color for author name\n• margin-bottom: 0.25rem - Small space between name and title\n• color: #6b7280 - Gray color for author title\n• font-style: normal - Removes italic from author info',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.quote-attribution',
                                    message: 'Add CSS styling for quote attribution!',
                                    hint: 'Style the .quote-attribution with border-top'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Schedule Container',
                        description: 'Let\'s build a weekly workout schedule that helps people plan their fitness routine!',
                        instruction: 'Add this HTML structure for your workout schedule:',
                        code: `<section class="schedule-section">
  <div class="schedule-container">
    <h2 class="schedule-title">Weekly Workout Schedule</h2>
    <div class="schedule-grid">
      <div class="day-header">Mon</div>
      <div class="day-header">Tue</div>
      <div class="day-header">Wed</div>
      <div class="day-header">Thu</div>
      <div class="day-header">Fri</div>
      <div class="day-header">Sat</div>
      <div class="day-header">Sun</div>
      
      <div class="workout-slot cardio">
        <div class="workout-name">Cardio</div>
        <div class="workout-time">7:00 AM</div>
      </div>
      
      <div class="workout-slot strength">
        <div class="workout-name">Strength</div>
        <div class="workout-time">6:00 PM</div>
      </div>
      
      <div class="workout-slot yoga">
        <div class="workout-name">Yoga</div>
        <div class="workout-time">8:00 AM</div>
      </div>
      
      <div class="workout-slot hiit">
        <div class="workout-name">HIIT</div>
        <div class="workout-time">7:00 PM</div>
      </div>
      
      <div class="workout-slot swimming">
        <div class="workout-name">Swimming</div>
        <div class="workout-time">9:00 AM</div>
      </div>
      
      <div class="workout-slot pilates">
        <div class="workout-name">Pilates</div>
        <div class="workout-time">10:00 AM</div>
      </div>
      
      <div class="workout-slot rest">
        <div class="workout-name">Rest Day</div>
        <div class="workout-time">-</div>
      </div>
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'CSS Grid is perfect for calendar-like layouts because it automatically handles rows and columns!',
                        explanation: 'Schedule structure:\n• <section class="schedule-section"> - Main container\n• <div class="schedule-container"> - Content wrapper\n• <h2 class="schedule-title"> - Section heading\n• <div class="schedule-grid"> - CSS Grid container\n• <div class="day-header"> - Day name headers (Mon, Tue, etc.)\n• <div class="workout-slot cardio"> - Individual workout with type class\n• <div class="workout-name"> - Name of the workout\n• <div class="workout-time"> - Time of the workout\n• Different classes (cardio, strength, yoga) for color coding',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'schedule-section',
                                    message: 'Add a section with class="schedule-section"!',
                                    hint: 'This will be the main container for the schedule'
                                },
                                {
                                    type: 'class',
                                    value: 'schedule-grid',
                                    message: 'Add a div with class="schedule-grid" for the grid layout!',
                                    hint: 'This will be our CSS Grid container'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Schedule Container',
                        description: 'Let\'s create a clean, professional layout for our workout schedule.',
                        instruction: 'Add this CSS for the schedule container:',
                        code: `.schedule-section {
  padding: 4rem 2rem;
  background: white;
}

.schedule-container {
  max-width: 900px;
  margin: 0 auto;
}

.schedule-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1a1a1a;
}`,
                        codeFile: 'style.css',
                        tip: 'A moderate max-width works well for schedules - wide enough to show all days but not too spread out!',
                        explanation: 'Container styling:\n• padding: 4rem 2rem - Generous padding for breathing room\n• background: white - Clean background\n• max-width: 900px - Good width for 7-day schedule\n• margin: 0 auto - Centers the container\n• text-align: center - Centers the title\n• font-size: 2.5rem - Large, clear title\n• font-weight: 700 - Bold title for emphasis\n• margin-bottom: 3rem - Space below title',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.schedule-section',
                                    message: 'Add CSS styling for the schedule section!',
                                    hint: 'Style the .schedule-section with padding and background'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Create the CSS Grid Layout',
                        description: 'Now let\'s use CSS Grid to create a 7-column layout for the days of the week.',
                        instruction: 'Add this CSS for the grid layout:',
                        code: `.schedule-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  background: #f8fafc;
  padding: 1rem;
  border-radius: 12px;
}`,
                        codeFile: 'style.css',
                        tip: 'repeat(7, 1fr) creates exactly 7 equal columns - perfect for a weekly schedule!',
                        explanation: 'Grid layout:\n• display: grid - Creates a grid container\n• grid-template-columns: repeat(7, 1fr) - 7 equal columns for days\n• gap: 0.5rem - Small space between grid items\n• background: #f8fafc - Light gray background for the grid\n• padding: 1rem - Padding inside the grid container\n• border-radius: 12px - Rounded corners for modern look\n• Items will automatically flow into rows as needed',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.schedule-grid',
                                    message: 'Add CSS Grid styling for the schedule!',
                                    hint: 'Style the .schedule-grid with display: grid'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Day Headers',
                        description: 'Let\'s make the day headers stand out and look professional.',
                        instruction: 'Add this CSS for the day headers:',
                        code: `.day-header {
  background: #667eea;
  color: white;
  padding: 0.75rem;
  text-align: center;
  font-weight: 600;
  border-radius: 8px;
  font-size: 0.9rem;
}`,
                        codeFile: 'style.css',
                        tip: 'Consistent styling for headers helps users quickly identify the days of the week!',
                        explanation: 'Day header styling:\n• background: #667eea - Blue background for headers\n• color: white - High contrast text\n• padding: 0.75rem - Comfortable padding for readability\n• text-align: center - Centers the day names\n• font-weight: 600 - Semi-bold for emphasis\n• border-radius: 8px - Rounded corners\n• font-size: 0.9rem - Slightly smaller than body text\n• Headers will automatically be in the first row of the grid',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.day-header',
                                    message: 'Add CSS styling for day headers!',
                                    hint: 'Style the .day-header with background and text-align'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Workout Slots',
                        description: 'Now let\'s style the individual workout slots with proper spacing and layout.',
                        instruction: 'Add this CSS for the workout slots:',
                        code: `.workout-slot {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  border: 2px solid transparent;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.workout-slot:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.workout-name {
  font-weight: 600;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}

.workout-time {
  font-size: 0.8rem;
  opacity: 0.8;
}`,
                        codeFile: 'style.css',
                        tip: 'Hover effects make the schedule feel interactive and engaging!',
                        explanation: 'Workout slot styling:\n• background: white - Clean background against gray grid\n• padding: 1rem - Comfortable padding for content\n• border-radius: 8px - Rounded corners\n• text-align: center - Centers workout info\n• border: 2px solid transparent - Placeholder for colored borders\n• transition - Smooth hover animations\n• cursor: pointer - Shows slots are interactive\n• transform: translateY(-2px) - Lifts slot on hover\n• font-weight: 600 - Semi-bold workout names\n• opacity: 0.8 - Slightly faded time text',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.workout-slot',
                                    message: 'Add CSS styling for workout slots!',
                                    hint: 'Style the .workout-slot with background and padding'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Workout Type Colors',
                        description: 'Let\'s add different colors for different types of workouts to make them easy to identify.',
                        instruction: 'Add this CSS for workout type colors:',
                        code: `.workout-slot.cardio {
  border-color: #10b981;
}

.workout-slot.cardio .workout-name {
  color: #065f46;
}

.workout-slot.strength {
  border-color: #f59e0b;
}

.workout-slot.strength .workout-name {
  color: #92400e;
}

.workout-slot.yoga {
  border-color: #8b5cf6;
}

.workout-slot.yoga .workout-name {
  color: #581c87;
}

.workout-slot.hiit {
  border-color: #ef4444;
}

.workout-slot.hiit .workout-name {
  color: #991b1b;
}

.workout-slot.swimming {
  border-color: #3b82f6;
}

.workout-slot.swimming .workout-name {
  color: #1e40af;
}

.workout-slot.pilates {
  border-color: #ec4899;
}

.workout-slot.pilates .workout-name {
  color: #be185d;
}

.workout-slot.rest {
  border-color: #6b7280;
  background: #f9fafb;
}

.workout-slot.rest .workout-name {
  color: #374151;
}`,
                        codeFile: 'style.css',
                        tip: 'Color coding helps users quickly identify different types of workouts at a glance!',
                        explanation: 'Workout type colors:\n• .cardio - Green (energy, go, healthy)\n• .strength - Orange (power, intensity)\n• .yoga - Purple (calm, spiritual, balance)\n• .hiit - Red (intensity, high energy)\n• .swimming - Blue (water, cool, refreshing)\n• .pilates - Pink (gentle, flexibility)\n• .rest - Gray (neutral, inactive)\n• Each type has matching border and text colors\n• Rest days have a light gray background to show inactivity',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.workout-slot.cardio',
                                    message: 'Add color styling for workout types!',
                                    hint: 'Style different workout types with unique colors'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Mobile Responsive Design',
                        description: 'Let\'s make sure our schedule works well on mobile devices.',
                        instruction: 'Add this mobile-responsive CSS:',
                        code: `@media (max-width: 768px) {
  .schedule-section {
    padding: 2rem 1rem;
  }
  
  .schedule-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .schedule-grid {
    grid-template-columns: repeat(7, 1fr);
    gap: 0.25rem;
    padding: 0.5rem;
  }
  
  .day-header {
    padding: 0.5rem 0.25rem;
    font-size: 0.8rem;
  }
  
  .workout-slot {
    padding: 0.5rem 0.25rem;
  }
  
  .workout-name {
    font-size: 0.8rem;
  }
  
  .workout-time {
    font-size: 0.7rem;
  }
}

@media (max-width: 480px) {
  .schedule-grid {
    grid-template-columns: repeat(7, 1fr);
    gap: 0.125rem;
  }
  
  .day-header {
    padding: 0.5rem 0.125rem;
    font-size: 0.7rem;
  }
  
  .workout-slot {
    padding: 0.5rem 0.125rem;
  }
  
  .workout-name {
    font-size: 0.7rem;
  }
  
  .workout-time {
    font-size: 0.6rem;
  }
}`,
                        codeFile: 'style.css',
                        tip: 'On mobile, reduce padding and font sizes but keep the 7-column layout for weekly view!',
                        explanation: 'Mobile responsive design:\n• @media (max-width: 768px) - Tablet and mobile styles\n• Reduced padding and margins for smaller screens\n• Smaller font sizes for mobile readability\n• Smaller gaps between grid items\n• @media (max-width: 480px) - Phone-specific styles\n• Even smaller padding and font sizes\n• Maintains 7-column layout even on phones\n• All workout information remains visible and readable',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '@media',
                                    message: 'Add mobile responsive styles!',
                                    hint: 'Use @media queries for different screen sizes'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Profile Container',
                        description: 'Let\'s build a respectful and informative cultural profile section to share important heritage information!',
                        instruction: 'Add this HTML structure for your tribe profile:',
                        code: `<section class="profile-section">
  <div class="profile-container">
    <h2 class="profile-section-title">Cultural Heritage</h2>
    <div class="tribe-profile">
      <div class="profile-image">
        <div class="tribal-symbol">
          <i data-lucide="circle" class="symbol-icon"></i>
          <span class="symbol-text">Tribal Symbol</span>
        </div>
        <h3 class="tribe-name">Cherokee Nation</h3>
      </div>
      
      <div class="profile-info">
        <div class="info-item">
          <h4 class="info-title">
            <i data-lucide="map-pin" class="info-icon"></i>
            Location
          </h4>
          <p class="info-text">Southeastern United States</p>
        </div>
        
        <div class="info-item">
          <h4 class="info-title">
            <i data-lucide="users" class="info-icon"></i>
            Population
          </h4>
          <p class="info-text">Approximately 370,000 enrolled members</p>
        </div>
        
        <div class="info-item">
          <h4 class="info-title">
            <i data-lucide="heart" class="info-icon"></i>
            Cultural Heritage
          </h4>
          <p class="info-text">Rich traditions in storytelling, pottery, and agriculture. Known for their written language and strong community bonds.</p>
        </div>
      </div>
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'When creating cultural content, always approach with respect and focus on celebrating heritage!',
                        explanation: 'Profile structure:\n• <section class="profile-section"> - Main container\n• <div class="profile-container"> - Content wrapper\n• <h2 class="profile-section-title"> - Section heading\n• <div class="tribe-profile"> - Main profile container\n• <div class="profile-image"> - Left side with symbol and name\n• <div class="tribal-symbol"> - Placeholder for cultural symbol\n• <div class="profile-info"> - Right side with information\n• <div class="info-item"> - Individual information blocks\n• <h4 class="info-title"> - Information category titles with icons\n• <p class="info-text"> - Detailed information text',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'profile-section',
                                    message: 'Add a section with class="profile-section"!',
                                    hint: 'This will be the main container for the profile'
                                },
                                {
                                    type: 'class',
                                    value: 'tribe-profile',
                                    message: 'Add a div with class="tribe-profile" for the main profile!',
                                    hint: 'This will contain the profile layout'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Profile Container',
                        description: 'Let\'s create a clean, respectful layout for our cultural profile section.',
                        instruction: 'Add this CSS for the profile container:',
                        code: `.profile-section {
  padding: 4rem 2rem;
  background: #f8fafc;
}

.profile-container {
  max-width: 1000px;
  margin: 0 auto;
}

.profile-section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1a1a1a;
}

.tribe-profile {
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0;
}`,
                        codeFile: 'style.css',
                        tip: 'A 1fr 2fr grid gives more space to the information while keeping the image area prominent!',
                        explanation: 'Container styling:\n• padding: 4rem 2rem - Generous padding for breathing room\n• background: #f8fafc - Light gray background for contrast\n• max-width: 1000px - Good width for profile content\n• margin: 0 auto - Centers the container\n• background: white - Clean background for profile card\n• border-radius: 16px - Rounded corners for modern look\n• box-shadow - Subtle depth effect\n• display: grid; grid-template-columns: 1fr 2fr - Two-column layout\n• gap: 0 - No gap between columns for seamless design',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.profile-section',
                                    message: 'Add CSS styling for the profile section!',
                                    hint: 'Style the .profile-section with padding and background'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Profile Image Area',
                        description: 'Let\'s create an attractive left side with the tribal symbol and name.',
                        instruction: 'Add this CSS for the profile image area:',
                        code: `.profile-image {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: white;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.tribal-symbol {
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  border: 3px solid rgba(255, 255, 255, 0.3);
}

.symbol-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 0.5rem;
}

.symbol-text {
  font-size: 0.9rem;
  font-weight: 600;
}

.tribe-name {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: white;
}`,
                        codeFile: 'style.css',
                        tip: 'Purple gradients convey dignity and respect, appropriate for cultural content!',
                        explanation: 'Image area styling:\n• background: linear-gradient(135deg, #8b5cf6, #7c3aed) - Purple gradient for dignity\n• color: white - High contrast text\n• padding: 3rem 2rem - Generous padding\n• display: flex; flex-direction: column - Stacks elements vertically\n• align-items: center; justify-content: center - Centers content\n• width: 120px; height: 120px - Large circular symbol area\n• background: rgba(255, 255, 255, 0.2) - Semi-transparent white background\n• border-radius: 50% - Circular symbol container\n• border: 3px solid rgba(255, 255, 255, 0.3) - Subtle border',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.profile-image',
                                    message: 'Add CSS styling for the profile image area!',
                                    hint: 'Style the .profile-image with gradient background'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Profile Information',
                        description: 'Now let\'s style the right side with the cultural information.',
                        instruction: 'Add this CSS for the profile information:',
                        code: `.profile-info {
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1.5rem;
}

.info-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.info-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 0 0.75rem 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #667eea;
}

.info-icon {
  width: 20px;
  height: 20px;
  color: #667eea;
}

.info-text {
  margin: 0;
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.6;
}`,
                        codeFile: 'style.css',
                        tip: 'Subtle borders between sections help organize information without being distracting!',
                        explanation: 'Information styling:\n• padding: 3rem 2rem - Matches left side padding\n• display: flex; flex-direction: column - Stacks info items vertically\n• gap: 2rem - Space between information items\n• border-bottom: 1px solid #e5e7eb - Subtle separator lines\n• :last-child border-bottom: none - Removes border from last item\n• display: flex; align-items: center - Lines up icon and title\n• gap: 0.75rem - Space between icon and title text\n• color: #667eea - Blue accent color for titles and icons\n• color: #6b7280 - Gray color for body text\n• line-height: 1.6 - Comfortable reading spacing',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.profile-info',
                                    message: 'Add CSS styling for profile information!',
                                    hint: 'Style the .profile-info with padding and flexbox'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Mobile Responsive Design',
                        description: 'Let\'s make sure our profile looks great on mobile devices.',
                        instruction: 'Add this mobile-responsive CSS:',
                        code: `@media (max-width: 768px) {
  .profile-section {
    padding: 3rem 1rem;
  }
  
  .profile-section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .tribe-profile {
    grid-template-columns: 1fr;
  }
  
  .profile-image {
    padding: 2rem 1rem;
  }
  
  .tribal-symbol {
    width: 100px;
    height: 100px;
    margin-bottom: 1.5rem;
  }
  
  .symbol-icon {
    width: 32px;
    height: 32px;
  }
  
  .tribe-name {
    font-size: 1.5rem;
  }
  
  .profile-info {
    padding: 2rem 1rem;
    gap: 1.5rem;
  }
  
  .info-item {
    padding-bottom: 1rem;
  }
  
  .info-title {
    font-size: 1rem;
  }
  
  .info-text {
    font-size: 0.95rem;
  }
}`,
                        codeFile: 'style.css',
                        tip: 'On mobile, stack the image above the information for better readability!',
                        explanation: 'Mobile responsive design:\n• @media (max-width: 768px) - Mobile and tablet styles\n• grid-template-columns: 1fr - Single column layout on mobile\n• Reduced padding and margins for smaller screens\n• Smaller font sizes for mobile readability\n• Smaller tribal symbol size for mobile\n• Reduced gaps between elements\n• The image area will stack above the information area\n• All content remains readable and accessible on small screens',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '@media',
                                    message: 'Add mobile responsive styles!',
                                    hint: 'Use @media queries for mobile layout'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Artifact Container',
                        description: 'Let\'s build a beautiful showcase for cultural artifacts with detailed information!',
                        instruction: 'Add this HTML structure for your artifact showcase:',
                        code: `<section class="artifact-section">
  <div class="artifact-container">
    <h2 class="artifact-section-title">Cultural Artifacts</h2>
    <div class="artifact-showcase">
      <div class="artifact-image">
        <div class="artifact-placeholder">
          <i data-lucide="image" class="artifact-icon"></i>
          <span class="artifact-label">Ancient Pottery</span>
        </div>
      </div>
      
      <div class="artifact-details">
        <h3 class="artifact-name">Cherokee Water Vessel</h3>
        
        <div class="artifact-specs">
          <div class="spec-item">
            <span class="spec-label">Period:</span>
            <span class="spec-value">1800-1850</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Material:</span>
            <span class="spec-value">Clay</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Origin:</span>
            <span class="spec-value">Georgia</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Size:</span>
            <span class="spec-value">12" tall</span>
          </div>
        </div>
        
        <div class="artifact-description">
          <p>This traditional water vessel showcases the sophisticated pottery techniques of Cherokee artisans. The intricate patterns tell stories of nature and community life, representing centuries of cultural knowledge passed down through generations.</p>
        </div>
      </div>
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'Artifact showcases help preserve and share cultural heritage in an educational way!',
                        explanation: 'Artifact structure:\n• <section class="artifact-section"> - Main container\n• <div class="artifact-container"> - Content wrapper\n• <h2 class="artifact-section-title"> - Section heading\n• <div class="artifact-showcase"> - Main showcase container\n• <div class="artifact-image"> - Left side with artifact image\n• <div class="artifact-placeholder"> - Placeholder for artifact image\n• <div class="artifact-details"> - Right side with information\n• <h3 class="artifact-name"> - Name of the artifact\n• <div class="artifact-specs"> - Technical specifications\n• <div class="spec-item"> - Individual specification items\n• <div class="artifact-description"> - Detailed description',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'artifact-section',
                                    message: 'Add a section with class="artifact-section"!',
                                    hint: 'This will be the main container for artifacts'
                                },
                                {
                                    type: 'class',
                                    value: 'artifact-showcase',
                                    message: 'Add a div with class="artifact-showcase" for the main display!',
                                    hint: 'This will contain the artifact layout'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Artifact Container',
                        description: 'Let\'s create an elegant layout for our artifact showcase section.',
                        instruction: 'Add this CSS for the artifact container:',
                        code: `.artifact-section {
  padding: 4rem 2rem;
  background: white;
}

.artifact-container {
  max-width: 900px;
  margin: 0 auto;
}

.artifact-section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1a1a1a;
}

.artifact-showcase {
  background: #f8fafc;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}`,
                        codeFile: 'style.css',
                        tip: 'A 1fr 1fr grid gives equal space to the image and information for balanced presentation!',
                        explanation: 'Container styling:\n• padding: 4rem 2rem - Generous padding for breathing room\n• background: white - Clean background\n• max-width: 900px - Good width for artifact display\n• margin: 0 auto - Centers the container\n• background: #f8fafc - Light gray background for showcase\n• border-radius: 16px - Rounded corners for modern look\n• box-shadow - Subtle depth effect\n• display: grid; grid-template-columns: 1fr 1fr - Equal two-column layout\n• gap: 0 - No gap between columns for seamless design',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.artifact-section',
                                    message: 'Add CSS styling for the artifact section!',
                                    hint: 'Style the .artifact-section with padding and background'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Artifact Image Area',
                        description: 'Let\'s create an attractive display area for the artifact image.',
                        instruction: 'Add this CSS for the artifact image area:',
                        code: `.artifact-image {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
}

.artifact-placeholder {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  width: 100%;
  max-width: 250px;
  aspect-ratio: 4/3;
}

.artifact-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
}

.artifact-label {
  font-size: 1.1rem;
  font-weight: 600;
}`,
                        codeFile: 'style.css',
                        tip: 'Orange gradients evoke warmth and earthiness, perfect for cultural artifacts!',
                        explanation: 'Image area styling:\n• background: linear-gradient(135deg, #f59e0b, #d97706) - Warm orange gradient\n• display: flex; align-items: center; justify-content: center - Centers content\n• padding: 3rem 2rem - Generous padding\n• background: rgba(255, 255, 255, 0.2) - Semi-transparent white background\n• border-radius: 12px - Rounded corners for placeholder\n• aspect-ratio: 4/3 - Standard image proportions\n• border: 2px solid rgba(255, 255, 255, 0.3) - Subtle border\n• max-width: 250px - Limits placeholder size\n• color: white - High contrast text and icon',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.artifact-image',
                                    message: 'Add CSS styling for the artifact image area!',
                                    hint: 'Style the .artifact-image with gradient background'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Artifact Details',
                        description: 'Now let\'s style the detailed information about the artifact.',
                        instruction: 'Add this CSS for the artifact details:',
                        code: `.artifact-details {
  background: white;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.artifact-name {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: #1a1a1a;
}

.artifact-specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.spec-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.spec-label {
  font-weight: 600;
  color: #667eea;
  font-size: 0.9rem;
}

.spec-value {
  color: #6b7280;
  font-size: 0.95rem;
}`,
                        codeFile: 'style.css',
                        tip: 'A grid layout for specifications makes technical information easy to scan and compare!',
                        explanation: 'Details styling:\n• background: white - Clean background for text content\n• padding: 3rem 2rem - Matches image area padding\n• display: flex; flex-direction: column - Stacks sections vertically\n• gap: 2rem - Space between sections\n• font-size: 1.8rem - Large, prominent artifact name\n• display: grid; grid-template-columns: 1fr 1fr - Two-column specs layout\n• display: flex; flex-direction: column - Stacks label above value\n• color: #667eea - Blue accent color for labels\n• color: #6b7280 - Gray color for values',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.artifact-details',
                                    message: 'Add CSS styling for artifact details!',
                                    hint: 'Style the .artifact-details with background and padding'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Description',
                        description: 'Let\'s make the artifact description engaging and readable.',
                        instruction: 'Add this CSS for the artifact description:',
                        code: `.artifact-description {
  border-top: 1px solid #e5e7eb;
  padding-top: 1.5rem;
}

.artifact-description p {
  margin: 0;
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.6;
}`,
                        codeFile: 'style.css',
                        tip: 'A subtle border separates the description from specifications while keeping them connected!',
                        explanation: 'Description styling:\n• border-top: 1px solid #e5e7eb - Subtle separator line\n• padding-top: 1.5rem - Space above the border\n• margin: 0 - Removes default paragraph margins\n• color: #6b7280 - Gray color for body text\n• font-size: 1rem - Standard readable size\n• line-height: 1.6 - Comfortable reading spacing\n• The description provides context and cultural significance',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.artifact-description',
                                    message: 'Add CSS styling for the artifact description!',
                                    hint: 'Style the .artifact-description with border-top'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Mobile Responsive Design',
                        description: 'Let\'s make sure our artifact showcase works well on mobile devices.',
                        instruction: 'Add this mobile-responsive CSS:',
                        code: `@media (max-width: 768px) {
  .artifact-section {
    padding: 3rem 1rem;
  }
  
  .artifact-section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .artifact-showcase {
    grid-template-columns: 1fr;
  }
  
  .artifact-image {
    padding: 2rem 1rem;
  }
  
  .artifact-placeholder {
    max-width: 200px;
    padding: 1.5rem;
  }
  
  .artifact-icon {
    width: 40px;
    height: 40px;
  }
  
  .artifact-details {
    padding: 2rem 1rem;
    gap: 1.5rem;
  }
  
  .artifact-name {
    font-size: 1.5rem;
  }
  
  .artifact-specs {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .artifact-description {
    padding-top: 1rem;
  }
}`,
                        codeFile: 'style.css',
                        tip: 'On mobile, stack the image above the details and use single-column specs for better readability!',
                        explanation: 'Mobile responsive design:\n• @media (max-width: 768px) - Mobile and tablet styles\n• grid-template-columns: 1fr - Single column layout on mobile\n• Reduced padding and margins for smaller screens\n• Smaller font sizes and icon sizes for mobile\n• grid-template-columns: 1fr - Single column for specifications\n• The image area will stack above the details area\n• All information remains accessible and readable on small screens',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '@media',
                                    message: 'Add mobile responsive styles!',
                                    hint: 'Use @media queries for mobile layout'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Table Structure',
                        description: 'Let\'s build a professional sports history table to showcase team achievements and records!',
                        instruction: 'Add this HTML structure for your team history table:',
                        code: `<section class="history-section">
  <div class="history-container">
    <h2 class="history-title">Championship History</h2>
    <div class="table-wrapper">
      <table class="history-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Championship</th>
            <th>Record</th>
            <th>Coach</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="year">2024</td>
            <td class="championship">State Champions</td>
            <td class="record win">15-2</td>
            <td class="coach">John Smith</td>
          </tr>
          <tr>
            <td class="year">2023</td>
            <td class="championship">Regional Finals</td>
            <td class="record average">12-5</td>
            <td class="coach">John Smith</td>
          </tr>
          <tr>
            <td class="year">2022</td>
            <td class="championship">District Champions</td>
            <td class="record win">14-3</td>
            <td class="coach">Mike Johnson</td>
          </tr>
          <tr>
            <td class="year">2021</td>
            <td class="championship">League Champions</td>
            <td class="record win">13-4</td>
            <td class="coach">Mike Johnson</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'HTML tables are perfect for displaying structured data like sports statistics and records!',
                        explanation: 'Table structure:\n• <section class="history-section"> - Main container\n• <div class="history-container"> - Content wrapper\n• <h2 class="history-title"> - Section heading\n• <div class="table-wrapper"> - Wrapper for responsive scrolling\n• <table class="history-table"> - Main table element\n• <thead> - Table header section\n• <th> - Table header cells\n• <tbody> - Table body section\n• <tr> - Table rows\n• <td class="year"> - Table data cells with semantic classes\n• Classes like "win" and "average" for styling different record types',
                        validation: {
                            required: [
                                {
                                    type: 'tag',
                                    value: 'table',
                                    message: 'Add a <table> element for the history data!',
                                    hint: 'Use <table class="history-table"> for the main table'
                                },
                                {
                                    type: 'tag',
                                    value: 'thead',
                                    message: 'Add a <thead> section for table headers!',
                                    hint: 'Use <thead> to group header rows'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Table Container',
                        description: 'Let\'s create a clean layout for our sports history table section.',
                        instruction: 'Add this CSS for the table container:',
                        code: `.history-section {
  padding: 4rem 2rem;
  background: white;
}

.history-container {
  max-width: 1000px;
  margin: 0 auto;
}

.history-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1a1a1a;
}

.table-wrapper {
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  overflow-x: auto;
}`,
                        codeFile: 'style.css',
                        tip: 'A table wrapper with overflow-x: auto makes tables scroll horizontally on small screens!',
                        explanation: 'Container styling:\n• padding: 4rem 2rem - Generous padding for breathing room\n• background: white - Clean background\n• max-width: 1000px - Good width for table display\n• margin: 0 auto - Centers the container\n• text-align: center - Centers the title\n• background: white - Clean background for table\n• border-radius: 12px - Rounded corners for modern look\n• box-shadow - Subtle depth effect\n• overflow: hidden - Clips content to rounded corners\n• overflow-x: auto - Enables horizontal scrolling on mobile',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.history-section',
                                    message: 'Add CSS styling for the history section!',
                                    hint: 'Style the .history-section with padding and background'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Table Base',
                        description: 'Now let\'s style the table with proper spacing and typography.',
                        instruction: 'Add this CSS for the base table styling:',
                        code: `.history-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.history-table th,
.history-table td {
  padding: 1rem 1.5rem;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}

.history-table th {
  background: #667eea;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.history-table td {
  color: #374151;
}`,
                        codeFile: 'style.css',
                        tip: 'border-collapse: collapse removes the default spacing between table cells for a cleaner look!',
                        explanation: 'Base table styling:\n• width: 100% - Makes table fill container width\n• border-collapse: collapse - Removes cell spacing\n• font-size: 0.95rem - Slightly smaller text for data tables\n• padding: 1rem 1.5rem - Comfortable cell padding\n• text-align: left - Left-aligns all content\n• border-bottom: 1px solid #e5e7eb - Subtle row separators\n• background: #667eea - Blue header background\n• color: white - High contrast header text\n• text-transform: uppercase - Makes headers look professional\n• letter-spacing: 0.5px - Improves readability of uppercase text',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.history-table',
                                    message: 'Add CSS styling for the table!',
                                    hint: 'Style the .history-table with width and border-collapse'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Alternating Row Colors',
                        description: 'Let\'s add zebra striping to make the table easier to read.',
                        instruction: 'Add this CSS for alternating row colors:',
                        code: `.history-table tbody tr:nth-child(even) {
  background: #f8fafc;
}

.history-table tbody tr:nth-child(odd) {
  background: white;
}

.history-table tbody tr:hover {
  background: #e0e7ff;
  cursor: pointer;
}`,
                        codeFile: 'style.css',
                        tip: 'nth-child(even) and nth-child(odd) create automatic zebra striping without extra classes!',
                        explanation: 'Row styling:\n• tbody tr:nth-child(even) - Targets even-numbered rows\n• background: #f8fafc - Light gray for even rows\n• tbody tr:nth-child(odd) - Targets odd-numbered rows\n• background: white - White for odd rows\n• tbody tr:hover - Styles rows when mouse hovers\n• background: #e0e7ff - Light blue hover color\n• cursor: pointer - Shows rows are interactive\n• This creates automatic alternating colors that help users follow rows across columns',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.history-table tbody tr:nth-child(even)',
                                    message: 'Add alternating row colors!',
                                    hint: 'Use nth-child selectors for zebra striping'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style Specific Data Types',
                        description: 'Let\'s add special styling for different types of data like years and records.',
                        instruction: 'Add this CSS for specific data styling:',
                        code: `.year {
  font-weight: 600;
  color: #1a1a1a;
}

.championship {
  font-weight: 500;
}

.record {
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  display: inline-block;
  min-width: 60px;
  text-align: center;
}

.record.win {
  background: #dcfce7;
  color: #166534;
}

.record.average {
  background: #fef3c7;
  color: #92400e;
}

.coach {
  color: #6b7280;
  font-style: italic;
}`,
                        codeFile: 'style.css',
                        tip: 'Color-coding records helps users quickly identify good vs. average performance!',
                        explanation: 'Data type styling:\n• .year - Bold years for easy scanning\n• .championship - Medium weight for achievement names\n• .record - Styled like badges with padding and border-radius\n• display: inline-block - Allows width and padding on inline elements\n• min-width: 60px - Ensures consistent record width\n• .record.win - Green background for winning records\n• .record.average - Yellow background for average records\n• .coach - Gray, italic text for coach names\n• Color coding helps users quickly understand the data',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.record',
                                    message: 'Add styling for record data!',
                                    hint: 'Style the .record class with padding and border-radius'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Mobile Responsive Design',
                        description: 'Let\'s make sure our table works well on mobile devices.',
                        instruction: 'Add this mobile-responsive CSS:',
                        code: `@media (max-width: 768px) {
  .history-section {
    padding: 3rem 1rem;
  }
  
  .history-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .history-table {
    font-size: 0.85rem;
  }
  
  .history-table th,
  .history-table td {
    padding: 0.75rem 0.5rem;
  }
  
  .history-table th {
    font-size: 0.8rem;
  }
  
  .record {
    min-width: 50px;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .history-table th,
  .history-table td {
    padding: 0.5rem 0.25rem;
  }
  
  .history-table {
    font-size: 0.8rem;
  }
  
  .record {
    min-width: 45px;
    padding: 0.125rem 0.25rem;
  }
}`,
                        codeFile: 'style.css',
                        tip: 'On mobile, reduce padding and font sizes but keep the table scrollable horizontally!',
                        explanation: 'Mobile responsive design:\n• @media (max-width: 768px) - Tablet and mobile styles\n• Reduced padding and font sizes for smaller screens\n• Smaller minimum width for record badges\n• @media (max-width: 480px) - Phone-specific styles\n• Even smaller padding and font sizes\n• The table-wrapper with overflow-x: auto allows horizontal scrolling\n• All data remains accessible even on very small screens\n• Users can scroll horizontally to see all columns',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '@media',
                                    message: 'Add mobile responsive styles!',
                                    hint: 'Use @media queries for mobile table styling'
                                }
                            ]
                        }
                    }
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
                ],
                steps: [
                    {
                        title: 'Create the Player Profile Structure',
                        description: 'Let\'s build a comprehensive player statistics panel to showcase athletic performance!',
                        instruction: 'Add this HTML structure for your player stats panel:',
                        code: `<section class="player-section">
  <div class="player-container">
    <h2 class="player-section-title">Player Statistics</h2>
    <div class="player-card">
      <div class="player-header">
        <div class="player-avatar">
          <span class="avatar-initials">JS</span>
        </div>
        <div class="player-info">
          <h3 class="player-name">John Smith</h3>
          <p class="player-position">Point Guard • #23</p>
        </div>
      </div>
      
      <div class="stats-grid">
        <div class="stat-box ppg">
          <div class="stat-number">18.5</div>
          <div class="stat-label">PPG</div>
        </div>
        
        <div class="stat-box apg">
          <div class="stat-number">7.2</div>
          <div class="stat-label">APG</div>
        </div>
        
        <div class="stat-box rpg">
          <div class="stat-number">4.8</div>
          <div class="stat-label">RPG</div>
        </div>
        
        <div class="stat-box ft">
          <div class="stat-number">89%</div>
          <div class="stat-label">FT%</div>
        </div>
      </div>
      
      <div class="season-highlight">
        <div class="highlight-label">Season High</div>
        <div class="highlight-text">32 Points vs Lakers</div>
      </div>
    </div>
  </div>
</section>`,
                        codeFile: 'index.html',
                        tip: 'Player stat panels are great for sports websites, fantasy leagues, and team rosters!',
                        explanation: 'Player profile structure:\n• <section class="player-section"> - Main container\n• <div class="player-container"> - Content wrapper\n• <h2 class="player-section-title"> - Section heading\n• <div class="player-card"> - Main player card\n• <div class="player-header"> - Top section with photo and info\n• <div class="player-avatar"> - Profile photo area\n• <span class="avatar-initials"> - Player initials\n• <div class="player-info"> - Name and position info\n• <div class="stats-grid"> - Grid of statistics\n• <div class="stat-box ppg"> - Individual stat with type class\n• <div class="season-highlight"> - Special achievement section',
                        validation: {
                            required: [
                                {
                                    type: 'class',
                                    value: 'player-section',
                                    message: 'Add a section with class="player-section"!',
                                    hint: 'This will be the main container for the player stats'
                                },
                                {
                                    type: 'class',
                                    value: 'player-card',
                                    message: 'Add a div with class="player-card" for the main card!',
                                    hint: 'This will contain all the player information'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Player Container',
                        description: 'Let\'s create a clean layout for our player statistics panel.',
                        instruction: 'Add this CSS for the player container:',
                        code: `.player-section {
  padding: 4rem 2rem;
  background: #f8fafc;
}

.player-container {
  max-width: 400px;
  margin: 0 auto;
}

.player-section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1a1a1a;
}

.player-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}`,
                        codeFile: 'style.css',
                        tip: 'A narrower max-width works well for player cards since they\'re focused on individual stats!',
                        explanation: 'Container styling:\n• padding: 4rem 2rem - Generous padding for breathing room\n• background: #f8fafc - Light gray background for contrast\n• max-width: 400px - Narrow width perfect for player cards\n• margin: 0 auto - Centers the container\n• background: white - Clean background for player card\n• border-radius: 16px - Rounded corners for modern look\n• box-shadow - Subtle depth effect\n• padding: 2rem - Internal padding for card content\n• display: flex; flex-direction: column - Stacks sections vertically\n• gap: 2rem - Space between card sections',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.player-section',
                                    message: 'Add CSS styling for the player section!',
                                    hint: 'Style the .player-section with padding and background'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Player Header',
                        description: 'Let\'s create an attractive header with the player\'s photo and basic information.',
                        instruction: 'Add this CSS for the player header:',
                        code: `.player-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.player-avatar {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
}

.player-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #1a1a1a;
}

.player-position {
  margin: 0;
  color: #6b7280;
  font-size: 0.95rem;
}`,
                        codeFile: 'style.css',
                        tip: 'Circular avatars with initials work great when you don\'t have actual player photos!',
                        explanation: 'Header styling:\n• display: flex; flex-direction: column - Stacks elements vertically\n• align-items: center; text-align: center - Centers everything\n• gap: 1rem - Space between header elements\n• width: 80px; height: 80px - Perfect circle for avatar\n• background: linear-gradient() - Attractive blue gradient\n• border-radius: 50% - Makes avatar circular\n• display: flex; justify-content: center - Centers initials\n• font-size: 1.5rem - Large, prominent player name\n• color: #6b7280 - Gray color for position info',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.player-header',
                                    message: 'Add CSS styling for the player header!',
                                    hint: 'Style the .player-header with flexbox and text-align'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Create the Statistics Grid',
                        description: 'Now let\'s create a grid layout for the player\'s key statistics.',
                        instruction: 'Add this CSS for the statistics grid:',
                        code: `.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.stat-box {
  text-align: center;
  padding: 1.5rem 1rem;
  border-radius: 12px;
  border: 2px solid transparent;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-box:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
  line-height: 1;
}

.stat-label {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}`,
                        codeFile: 'style.css',
                        tip: 'A 2x2 grid layout makes it easy to compare different statistics at a glance!',
                        explanation: 'Statistics grid styling:\n• display: grid; grid-template-columns: 1fr 1fr - 2x2 grid layout\n• gap: 1rem - Space between stat boxes\n• text-align: center - Centers stat content\n• padding: 1.5rem 1rem - Comfortable padding for stats\n• border-radius: 12px - Rounded corners for stat boxes\n• border: 2px solid transparent - Placeholder for colored borders\n• transition - Smooth hover animations\n• transform: translateY(-4px) - Lifts stat box on hover\n• font-size: 2rem - Large, prominent numbers\n• font-weight: 800 - Extra bold for emphasis\n• text-transform: uppercase - Professional stat labels',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.stats-grid',
                                    message: 'Add CSS Grid styling for statistics!',
                                    hint: 'Style the .stats-grid with display: grid'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Add Stat Type Colors',
                        description: 'Let\'s add different colors for different types of statistics.',
                        instruction: 'Add this CSS for stat type colors:',
                        code: `.stat-box.ppg {
  background: #f0fdf4;
  border-color: #10b981;
}

.stat-box.ppg .stat-number {
  color: #10b981;
}

.stat-box.ppg .stat-label {
  color: #065f46;
}

.stat-box.apg {
  background: #eff6ff;
  border-color: #3b82f6;
}

.stat-box.apg .stat-number {
  color: #3b82f6;
}

.stat-box.apg .stat-label {
  color: #1e40af;
}

.stat-box.rpg {
  background: #fef3c7;
  border-color: #f59e0b;
}

.stat-box.rpg .stat-number {
  color: #f59e0b;
}

.stat-box.rpg .stat-label {
  color: #92400e;
}

.stat-box.ft {
  background: #fdf2f8;
  border-color: #ec4899;
}

.stat-box.ft .stat-number {
  color: #ec4899;
}

.stat-box.ft .stat-label {
  color: #be185d;
}`,
                        codeFile: 'style.css',
                        tip: 'Color coding helps users quickly identify different types of statistics!',
                        explanation: 'Stat type colors:\n• .ppg (Points Per Game) - Green theme for scoring\n• .apg (Assists Per Game) - Blue theme for teamwork\n• .rpg (Rebounds Per Game) - Orange theme for hustle\n• .ft (Free Throw %) - Pink theme for accuracy\n• Each stat type has matching background, border, number, and label colors\n• Light backgrounds with darker text for good readability\n• Consistent color scheme across all stat types',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.stat-box.ppg',
                                    message: 'Add color styling for stat types!',
                                    hint: 'Style different stat types with unique colors'
                                }
                            ]
                        }
                    },
                    {
                        title: 'Style the Season Highlight',
                        description: 'Let\'s add a special section to showcase the player\'s best performance.',
                        instruction: 'Add this CSS for the season highlight:',
                        code: `.season-highlight {
  text-align: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  color: white;
}

.highlight-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
}

.highlight-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}`,
                        codeFile: 'style.css',
                        tip: 'A gradient background makes the season highlight stand out as something special!',
                        explanation: 'Season highlight styling:\n• text-align: center - Centers highlight content\n• padding: 1.5rem - Comfortable padding\n• background: linear-gradient() - Attractive blue gradient\n• border-radius: 12px - Rounded corners to match other elements\n• color: white - High contrast text on gradient\n• font-size: 0.9rem - Smaller label text\n• color: rgba(255, 255, 255, 0.8) - Semi-transparent label\n• text-transform: uppercase - Professional label styling\n• font-size: 1.25rem - Prominent highlight text\n• font-weight: 700 - Bold for emphasis',
                        validation: {
                            required: [
                                {
                                    type: 'css-rule',
                                    value: '.season-highlight',
                                    message: 'Add CSS styling for season highlight!',
                                    hint: 'Style the .season-highlight with gradient background'
                                }
                            ]
                        }
                    }
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