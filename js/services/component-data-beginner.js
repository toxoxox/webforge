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
            "explanation": "What we just added:\\n• <nav class=\"navbar\"> - Creates a navigation container with the class \"navbar\" for styling\\n• <div class=\"nav-brand\"> - A container to hold our logo and website name together\\n• <img src=\"img/webforge-icon.png\" alt=\"Logo\" class=\"nav-logo\"> - Displays our logo image (you can replace with your own image path)\\n• <span class=\"brand-name\"> - Holds the website name text\\n• </nav> - Closes the navigation container\\n\\nThis creates the basic structure for our navbar with a logo and brand name on the left side.",
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
                },
                {
                  "type": "class",
                  "value": "nav-brand",
                  "message": "We need a div with class=\"nav-brand\" for the logo area!",
                  "hint": "Add <div class=\"nav-brand\"> inside your nav"
                }
              ]
            }
          },
          {
            "title": "Add the Navigation Menu List",
            "description": "Now let's add the main navigation menu. We'll create a list of menu items that will appear on the right side of our navbar.",
            "instruction": "Add this menu list after the nav-brand div (but still inside the nav tag):",
            "code": `  <ul class="nav-menu">
    <li class="nav-item">
      <a href="#home" class="nav-link active">Home</a>
    </li>
    <li class="nav-item">
      <a href="#about" class="nav-link">About</a>
    </li>
    <li class="nav-item">
      <a href="#contact" class="nav-link">Contact</a>
    </li>
  </ul>`,
            "codeFile": "index.html",
            "tip": "We use <ul> (unordered list) because navigation menus are essentially lists of links!",
            "explanation": "What we just added:\\n• <ul class=\"nav-menu\"> - Creates an unordered list to hold our navigation items\\n• <li class=\"nav-item\"> - Each list item represents one menu item\\n• <a href=\"#home\" class=\"nav-link active\"> - Creates clickable links for each menu item\\n• class=\"active\" - Marks the current page (Home) as active\\n• href=\"#home\" - Links to different sections (you can change these to actual pages)\\n\\nThis creates three menu items: Home, About, and Contact that will appear horizontally.",
            "validation": {
              "required": [
                {
                  "type": "tag",
                  "value": "ul",
                  "message": "Add a <ul> tag for the navigation menu!",
                  "hint": "Use <ul class=\"nav-menu\">"
                },
                {
                  "type": "class",
                  "value": "nav-menu",
                  "message": "Add class=\"nav-menu\" to your <ul> tag!",
                  "hint": "This class will help us style the menu"
                },
                {
                  "type": "class",
                  "value": "nav-item",
                  "message": "Add nav-item classes to your list items!",
                  "hint": "Each <li> should have class=\"nav-item\""
                }
              ]
            }
          },
          {
            "title": "Add a Dropdown Menu Item",
            "description": "Let's make our navbar more interesting by adding a dropdown menu! We'll add a \"Services\" menu that shows more options when you hover over it.",
            "instruction": "Replace the Contact menu item with this dropdown menu item:",
            "code": `    <li class="nav-item dropdown">
      <a href="#services" class="nav-link">
        Services <span class="dropdown-arrow">▼</span>
      </a>
      <ul class="dropdown-menu">
        <li><a href="#web-design" class="dropdown-link">Web Design</a></li>
        <li><a href="#development" class="dropdown-link">Development</a></li>
        <li><a href="#seo" class="dropdown-link">SEO Services</a></li>
      </ul>
    </li>
    <li class="nav-item">
      <a href="#contact" class="nav-link">Contact</a>
    </li>`,
            "codeFile": "index.html",
            "tip": "The chevron-down icon shows users that this menu item has a dropdown submenu!",
            "explanation": "What we just added:\\n• class=\"dropdown\" - Marks this menu item as having a dropdown\\n• <span class=\"dropdown-arrow\">▼</span> - Adds a down arrow using a Unicode character\\n• The ▼ symbol is a simple down-pointing triangle that works in all browsers\\n• <ul class=\"dropdown-menu\"> - Creates a submenu that will be hidden initially\\n• <a class=\"dropdown-link\"> - Links inside the dropdown menu\\n• We moved Contact after Services so the dropdown appears in the right order\\n\\nThis creates a \"Services\" menu item with a down arrow that will show three service options when you hover over it.",
            "validation": {
              "required": [
                {
                  "type": "class",
                  "value": "dropdown",
                  "message": "Add a dropdown menu item!",
                  "hint": "Use class=\"nav-item dropdown\""
                },
                {
                  "type": "class",
                  "value": "dropdown-menu",
                  "message": "Add the dropdown submenu!",
                  "hint": "Use <ul class=\"dropdown-menu\">"
                },
                {
                  "type": "class",
                  "value": "dropdown-arrow",
                  "message": "Add the dropdown arrow!",
                  "hint": "Use <span class=\"dropdown-arrow\">▼</span>"
                }
              ]
            }
          },
          {
            "title": "Style the Navbar Container",
            "description": "Time to make our navbar look professional! We'll start with the basic container styling to give it a dark background and proper layout.",
            "instruction": "Add this CSS to your style.css file:",
            "code": `.navbar {
  background-color: #2c3e50;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}`,
            "codeFile": "style.css",
            "tip": "Flexbox makes it super easy to align items horizontally and push them to opposite sides!",
            "explanation": "What each CSS property does:\\n• background-color: #2c3e50 - Gives the navbar a dark blue-gray background\\n• padding: 1rem 2rem - Adds space inside the navbar (1rem top/bottom, 2rem left/right)\\n• display: flex - Makes the navbar use flexbox layout for easy alignment\\n• justify-content: space-between - Pushes the logo to the left and menu to the right\\n• align-items: center - Centers everything vertically in the navbar\\n• position: relative - Needed for the dropdown menu positioning later\\n\\nThis transforms our plain HTML into a professional-looking dark navbar.",
            "validation": {
              "required": [
                {
                  "type": "css-rule",
                  "value": ".navbar",
                  "message": "Add CSS styling for the .navbar class!",
                  "hint": "Create a .navbar rule in your CSS"
                }
              ]
            }
          },
          {
            "title": "Style the Brand Section",
            "description": "Let's make the logo and brand name look great together by aligning them nicely and styling the text.",
            "instruction": "Add this CSS for the brand area:",
            "code": `.nav-brand {
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
}`,
            "codeFile": "style.css",
            "tip": "The \"gap\" property is a modern way to add space between flex items - much cleaner than using margins!",
            "explanation": "What each style does:\\n• .nav-brand display: flex - Lines up the logo and text horizontally\\n• align-items: center - Centers the logo and text vertically with each other\\n• gap: 0.75rem - Adds consistent space between the logo and brand name\\n• .nav-logo width/height: 40px - Makes the logo a perfect 40x40 pixel square\\n• border-radius: 8px - Rounds the corners of the logo slightly\\n• .brand-name color: white - Makes the text white to show on dark background\\n• font-size: 1.5rem - Makes the brand name larger and more prominent\\n• font-weight: 600 - Makes the text semi-bold for better visibility\\n\\nThis creates a professional logo and brand name combination on the left side.",
            "validation": {
              "required": [
                {
                  "type": "css-rule",
                  "value": ".nav-brand",
                  "message": "Add CSS styling for the .nav-brand class!",
                  "hint": "Style the brand container with flexbox"
                }
              ]
            }
          },
          {
            "title": "Style the Navigation Menu",
            "description": "Now let's style the navigation links to look clean and professional with nice hover effects.",
            "instruction": "Add this CSS for the navigation menu:",
            "code": `.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link:hover,
.nav-link.active {
  background-color: rgba(255, 255, 255, 0.1);
}

.dropdown-arrow {
  font-size: 0.8rem;
  transition: transform 0.2s ease;
}

.dropdown:hover .dropdown-arrow {
  transform: rotate(180deg);
}`,
            "codeFile": "style.css",
            "tip": "The rgba color with 0.1 opacity creates a subtle semi-transparent white background for hover effects!",
            "explanation": "What each style does:\\n• .nav-menu display: flex - Lines up all menu items horizontally\\n• list-style: none - Removes the bullet points from the list\\n• margin: 0; padding: 0 - Removes default spacing from the list\\n• gap: 2rem - Adds space between each menu item\\n• .nav-link color: white - Makes all link text white\\n• text-decoration: none - Removes the underline from links\\n• padding: 0.5rem 1rem - Adds clickable area around each link\\n• border-radius: 6px - Rounds the corners of the hover area\\n• display: flex; align-items: center - Aligns text and icons nicely\\n• :hover and .active - Adds a subtle background when hovering or on current page\\n\\nThis creates clean, professional navigation links with smooth hover effects.",
            "validation": {
              "required": [
                {
                  "type": "css-rule",
                  "value": ".nav-menu",
                  "message": "Add CSS styling for the .nav-menu class!",
                  "hint": "Style the navigation menu with flexbox"
                }
              ]
            }
          },
          {
            "title": "Create the Dropdown Menu Effect",
            "description": "Time for the exciting part - let's make the dropdown menu appear smoothly when you hover over the Services link!",
            "instruction": "Add this CSS for the dropdown functionality:",
            "code": `.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  min-width: 200px;
  border-radius: 8px;
  padding: 0.5rem 0;
  list-style: none;
  margin: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-link {
  display: block;
  padding: 0.75rem 1.5rem;
  color: #2c3e50;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.dropdown-link:hover {
  background-color: #f8f9fa;
}`,
            "codeFile": "style.css",
            "tip": "The transform and opacity properties create a smooth slide-down animation when the dropdown appears!",
            "explanation": "What creates the dropdown magic:\\n• .dropdown position: relative - CRITICAL! This makes the dropdown position relative to the Services menu item\\n• .dropdown-menu position: absolute - Positions the dropdown relative to its parent (.dropdown)\\n• top: 100% - Places the dropdown just below the Services link\\n• left: 0 - Aligns the dropdown with the left edge of Services\\n• background: white - Gives the dropdown a white background (different from navbar)\\n• box-shadow - Adds a subtle shadow to make the dropdown stand out\\n• z-index: 1000 - Ensures the dropdown appears above other content\\n• opacity: 0; visibility: hidden - Hides the dropdown initially\\n• transform: translateY(-10px) - Starts the dropdown slightly above its final position\\n• transition: all 0.3s ease - Makes all changes animate smoothly over 0.3 seconds\\n• .dropdown:hover .dropdown-menu - Shows the dropdown when hovering over Services\\n• opacity: 1; visibility: visible; transform: translateY(0) - Makes dropdown appear and slide down\\n\\nThis creates a smooth, professional dropdown that slides down when you hover over Services!",
            "validation": {
              "required": [
                {
                  "type": "css-rule",
                  "value": ".dropdown-menu",
                  "message": "Add CSS styling for the .dropdown-menu class!",
                  "hint": "Style the dropdown menu with positioning"
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
          },
          {
            "title": "Style the Hero Container",
            "description": "Now let's make our hero section look amazing with a beautiful gradient background and proper layout!",
            "instruction": "Add this CSS to style the hero section:",
            "code": `.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem;
  gap: 2rem;
}`,
            "codeFile": "style.css",
            "tip": "The gradient goes from purple-blue to purple at a 135-degree angle. Try changing the colors to customize!",
            "explanation": "What each property does:\\n• background: linear-gradient() - Creates a smooth color transition\\n• min-height: 80vh - Makes the hero at least 80% of the screen height\\n• display: flex - Enables flexbox for easy layout\\n• align-items: center - Vertically centers the content\\n• justify-content: space-between - Pushes content and image apart\\n• padding: 4rem - Adds space inside the hero\\n• gap: 2rem - Adds space between the two sides",
            "validation": {
              "required": [
                {
                  "type": "css-rule",
                  "value": ".hero",
                  "message": "Add CSS styling for the .hero class!",
                  "hint": "Create a .hero rule in your CSS"
                }
              ]
            }
          },
          {
            "title": "Style the Hero Content Area",
            "description": "Let's style the left side where our text and button will go!",
            "instruction": "Add this CSS for the content area:",
            "code": `.hero-content {
  flex: 1;
  max-width: 500px;
  color: white;
}`,
            "codeFile": "style.css",
            "tip": "Setting max-width prevents the text from getting too wide on large screens!",
            "explanation": "What this does:\\n• flex: 1 - Takes up available space\\n• max-width: 500px - Limits width for readability\\n• color: white - Makes all text white to show on the gradient",
            "validation": {
              "required": [
                {
                  "type": "css-rule",
                  "value": ".hero-content",
                  "message": "Add CSS styling for the .hero-content class!",
                  "hint": "Style the content container"
                }
              ]
            }
          },
          {
            "title": "Style the Hero Title",
            "description": "Let's make the main heading big and bold to grab attention!",
            "instruction": "Add this CSS for the title:",
            "code": `.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}`,
            "codeFile": "style.css",
            "tip": "Line-height: 1.2 keeps the lines close together for a tight, professional look!",
            "explanation": "What this does:\\n• font-size: 3rem - Makes the title really big (48px)\\n• font-weight: 700 - Makes it bold\\n• margin: 0 0 1rem 0 - Adds space below the title\\n• line-height: 1.2 - Controls spacing between lines",
            "validation": {
              "required": [
                {
                  "type": "css-rule",
                  "value": ".hero-title",
                  "message": "Add CSS styling for the .hero-title class!",
                  "hint": "Style the main heading"
                }
              ]
            }
          },
          {
            "title": "Style the Hero Subtitle",
            "description": "Now let's style the subtitle text to complement the main heading!",
            "instruction": "Add this CSS for the subtitle:",
            "code": `.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  margin: 0 0 2rem 0;
  line-height: 1.6;
}`,
            "codeFile": "style.css",
            "tip": "Using opacity: 0.9 makes the text slightly transparent, creating visual hierarchy!",
            "explanation": "What this does:\\n• font-size: 1.25rem - Slightly larger than normal text\\n• opacity: 0.9 - Makes it slightly see-through\\n• margin: 0 0 2rem 0 - Adds space below before the button\\n• line-height: 1.6 - Makes text easier to read",
            "validation": {
              "required": [
                {
                  "type": "css-rule",
                  "value": ".hero-subtitle",
                  "message": "Add CSS styling for the .hero-subtitle class!",
                  "hint": "Style the subtitle paragraph"
                }
              ]
            }
          },
          {
            "title": "Style the Call-to-Action Button",
            "description": "Let's create an eye-catching button that makes visitors want to click!",
            "instruction": "Add this CSS for the CTA button:",
            "code": `.hero-cta {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
}`,
            "codeFile": "style.css",
            "tip": "The green color stands out against the purple gradient - this contrast draws attention!",
            "explanation": "What this does:\\n• background: #4CAF50 - Bright green color\\n• padding: 1rem 2rem - Makes the button nice and clickable\\n• border-radius: 8px - Rounds the corners\\n• box-shadow - Adds a subtle glow effect\\n• transition - Enables smooth hover animations",
            "validation": {
              "required": [
                {
                  "type": "css-rule",
                  "value": ".hero-cta",
                  "message": "Add CSS styling for the .hero-cta button!",
                  "hint": "Style the call-to-action button"
                }
              ]
            }
          },
          {
            "title": "Add Button Hover Effect",
            "description": "Let's make the button interactive with a cool hover effect!",
            "instruction": "Add this CSS for the hover state:",
            "code": `.hero-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
}`,
            "codeFile": "style.css",
            "tip": "The button lifts up slightly when you hover - this makes it feel clickable!",
            "explanation": "What this does:\\n• transform: translateY(-3px) - Moves the button up 3 pixels\\n• box-shadow increases - Makes the glow stronger\\n• Combined with transition, this creates a smooth lift effect!",
            "validation": {
              "required": [
                {
                  "type": "css-rule",
                  "value": ".hero-cta:hover",
                  "message": "Add a hover effect for the button!",
                  "hint": "Use .hero-cta:hover selector"
                }
              ]
            }
          },
          {
            "title": "Style the Hero Image Area",
            "description": "Finally, let's style the image on the right side of our hero!",
            "instruction": "Add this CSS for the image area:",
            "code": `.hero-image {
  flex: 1;
  max-width: 400px;
  display: flex;
  justify-content: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}`,
            "codeFile": "style.css",
            "tip": "The box-shadow makes the image pop off the background!",
            "explanation": "What this does:\\n• flex: 1 - Takes up available space\\n• max-width: 400px - Limits the image size\\n• justify-content: center - Centers the image\\n• border-radius: 16px - Rounds the image corners\\n• box-shadow - Adds depth with a shadow",
            "validation": {
              "required": [
                {
                  "type": "css-rule",
                  "value": ".hero-image",
                  "message": "Add CSS styling for the .hero-image class!",
                  "hint": "Style the image container"
                }
              ]
            }
          },
          {
            "title": "Make It Responsive",
            "description": "Let's make sure our hero looks great on mobile devices too!",
            "instruction": "Add this CSS media query for mobile:",
            "code": `@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-image {
    order: -1;
    max-width: 250px;
  }
}`,
            "codeFile": "style.css",
            "tip": "On mobile, we stack the content vertically and show the image first!",
            "explanation": "What this does:\\n• @media (max-width: 768px) - Applies styles on screens smaller than 768px\\n• flex-direction: column - Stacks content vertically\\n• text-align: center - Centers the text\\n• order: -1 - Moves the image above the text\\n• Smaller font-size and padding for mobile",
            "validation": {
              "required": [
                {
                  "type": "css-rule",
                  "value": "@media",
                  "message": "Add a media query for mobile responsiveness!",
                  "hint": "Use @media (max-width: 768px)"
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
          },
          {
            "title": "Style the Card Container",
            "description": "Now let's make our card look professional with rounded corners and a nice shadow!",
            "instruction": "Add this CSS to style the card:",
            "code": `.card {
  max-width: 320px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}`,
            "codeFile": "style.css",
            "tip": "The overflow: hidden makes sure the image corners stay rounded!",
            "explanation": "What each property does:\\n• max-width: 320px - Limits the card width\\n• background: white - Clean white background\\n• border-radius: 16px - Rounds all corners\\n• overflow: hidden - Clips content to rounded corners\\n• box-shadow - Adds a subtle shadow for depth\\n• transition - Enables smooth hover animations",
            "validation": {
              "required": [
                {
                  "type": "css-rule",
                  "value": ".card",
                  "message": "Add CSS styling for the .card class!",
                  "hint": "Create a .card rule in your CSS"
                }
              ]
            }
          },
          {
            "title": "Add Card Hover Effect",
            "description": "Let's make the card lift up when you hover over it!",
            "instruction": "Add this CSS for the hover effect:",
            "code": `.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}`,
            "codeFile": "style.css",
            "tip": "The card lifts up 8 pixels and the shadow gets bigger - this creates a floating effect!",
            "explanation": "What this does:\\n• transform: translateY(-8px) - Moves the card up\\n• box-shadow increases - Makes the shadow larger and more visible\\n• Combined with transition, this creates a smooth lift effect!",
            "validation": {
              "required": [
                {
                  "type": "css-rule",
                  "value": ".card:hover",
                  "message": "Add a hover effect for the card!",
                  "hint": "Use .card:hover selector"
                }
              ]
            }
          },
          {
            "title": "Style the Card Image",
            "description": "Let's make the image fill the top of the card nicely!",
            "instruction": "Add this CSS for the image:",
            "code": `.card-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}`,
            "codeFile": "style.css",
            "tip": "object-fit: cover makes the image fill the space without stretching!",
            "explanation": "What this does:\\n• width: 100% - Image fills the card width\\n• height: 180px - Fixed height for consistency\\n• object-fit: cover - Crops image to fit without distortion\\n• display: block - Removes extra space below image",
            "validation": {
              "required": [
                {
                  "type": "css-rule",
                  "value": ".card-image",
                  "message": "Add CSS styling for the .card-image class!",
                  "hint": "Style the card image"
                }
              ]
            }
          },
          {
            "title": "Style the Card Content Area",
            "description": "Now let's add padding around the text content!",
            "instruction": "Add this CSS for the content area:",
            "code": `.card-content {
  padding: 1.5rem;
}`,
            "codeFile": "style.css",
            "tip": "Padding creates breathing room around the text!",
            "explanation": "What this does:\\n• padding: 1.5rem - Adds 24px of space on all sides\\n• This separates the text from the card edges",
            "validation": {
              "required": [
                {
                  "type": "css-rule",
                  "value": ".card-content",
                  "message": "Add CSS styling for the .card-content class!",
                  "hint": "Style the content container"
                }
              ]
            }
          },
          {
            "title": "Style the Card Title and Description",
            "description": "Let's make the title stand out and the description easy to read!",
            "instruction": "Add this CSS for the text:",
            "code": `.card-title {
  margin: 0 0 0.75rem 0;
  font-size: 1.35rem;
  font-weight: 700;
  color: #1a1a1a;
}

.card-description {
  margin: 0 0 1.5rem 0;
  color: #6b7280;
  line-height: 1.6;
  font-size: 0.95rem;
}`,
            "codeFile": "style.css",
            "tip": "Using different colors creates visual hierarchy - dark for important, gray for supporting text!",
            "explanation": "What this does:\\n• .card-title - Bold, dark text for the heading\\n• .card-description - Lighter gray for the body text\\n• line-height: 1.6 - Makes text easier to read\\n• Margins create proper spacing between elements",
            "validation": {
              "required": [
                {
                  "type": "css-rule",
                  "value": ".card-title",
                  "message": "Add CSS styling for the .card-title class!",
                  "hint": "Style the card title"
                }
              ]
            }
          },
          {
            "title": "Style the Card Button",
            "description": "Finally, let's create a beautiful button for the card!",
            "instruction": "Add this CSS for the button:",
            "code": `.card-button {
  width: 100%;
  background: #667eea;
  color: white;
  border: none;
  padding: 0.85rem 1.75rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.3s;
}

.card-button:hover {
  background: #5a67d8;
}`,
            "codeFile": "style.css",
            "tip": "The button spans the full width of the card for easy clicking!",
            "explanation": "What this does:\\n• width: 100% - Button fills the card width\\n• background: #667eea - Purple-blue color\\n• border-radius: 10px - Rounded corners\\n• transition - Smooth color change on hover\\n• :hover - Darker shade when hovering",
            "validation": {
              "required": [
                {
                  "type": "css-rule",
                  "value": ".card-button",
                  "message": "Add CSS styling for the .card-button class!",
                  "hint": "Style the card button"
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
  <h2 class="gallery-title">Photo Gallery</h2>
  <div class="gallery-grid">
  </div>
</div>`,
            "codeFile": "index.html",
            "tip": "The gallery container will hold all our images in a grid layout!",
            "explanation": "We're creating:\\n• <div class=\"gallery\"> - Main container\\n• <h2 class=\"gallery-title\"> - A heading for the gallery\\n• <div class=\"gallery-grid\"> - Where our images will go"
          },
          {
            "title": "Add Gallery Images",
            "description": "Now let's add some images to our gallery grid!",
            "instruction": "Add these images inside the gallery-grid div:",
            "code": `    <div class="gallery-item">
      <img src="https://picsum.photos/400/300?random=1" alt="Gallery image 1">
    </div>
    <div class="gallery-item">
      <img src="https://picsum.photos/400/300?random=2" alt="Gallery image 2">
    </div>
    <div class="gallery-item">
      <img src="https://picsum.photos/400/300?random=3" alt="Gallery image 3">
    </div>
    <div class="gallery-item">
      <img src="https://picsum.photos/400/300?random=4" alt="Gallery image 4">
    </div>
    <div class="gallery-item">
      <img src="https://picsum.photos/400/300?random=5" alt="Gallery image 5">
    </div>
    <div class="gallery-item">
      <img src="https://picsum.photos/400/300?random=6" alt="Gallery image 6">
    </div>`,
            "codeFile": "index.html",
            "tip": "Each image is wrapped in a gallery-item div for easier styling!",
            "explanation": "What we added:\\n• Six gallery items, each containing an image\\n• picsum.photos gives us random placeholder images\\n• The ?random=X makes each image different"
          },
          {
            "title": "Style the Gallery Container",
            "description": "Let's add some basic styling to our gallery container!",
            "instruction": "Add this CSS for the gallery:",
            "code": `.gallery {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.gallery-title {
  text-align: center;
  margin: 0 0 2rem 0;
  color: #333;
  font-size: 1.75rem;
}`,
            "codeFile": "style.css",
            "tip": "The max-width and margin: auto centers the gallery on the page!",
            "explanation": "What this does:\\n• max-width: 1200px - Limits gallery width\\n• margin: 2rem auto - Centers horizontally with space above/below\\n• padding: 2rem - Space inside the container\\n• box-shadow - Subtle shadow for depth"
          },
          {
            "title": "Create the CSS Grid Layout",
            "description": "Now for the magic - let's use CSS Grid to arrange our images!",
            "instruction": "Add this CSS for the grid:",
            "code": `.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}`,
            "codeFile": "style.css",
            "tip": "CSS Grid makes creating layouts super easy! repeat(3, 1fr) creates 3 equal columns.",
            "explanation": "What this does:\\n• display: grid - Enables CSS Grid layout\\n• grid-template-columns: repeat(3, 1fr) - Creates 3 equal-width columns\\n• gap: 1rem - Adds space between grid items"
          },
          {
            "title": "Style the Gallery Items",
            "description": "Let's make each gallery item look polished with rounded corners!",
            "instruction": "Add this CSS for gallery items:",
            "code": `.gallery-item {
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}`,
            "codeFile": "style.css",
            "tip": "object-fit: cover ensures images fill the space without stretching!",
            "explanation": "What this does:\\n• border-radius: 12px - Rounds the corners\\n• overflow: hidden - Clips image to rounded corners\\n• object-fit: cover - Fills space without distortion\\n• transition - Enables smooth hover animation"
          },
          {
            "title": "Add Hover Effect",
            "description": "Let's add a zoom effect when hovering over images!",
            "instruction": "Add this CSS for the hover effect:",
            "code": `.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  transition: background 0.3s;
}

.gallery-item:hover::after {
  background: rgba(0, 0, 0, 0.2);
}`,
            "codeFile": "style.css",
            "tip": "The ::after pseudo-element creates a dark overlay on hover!",
            "explanation": "What this does:\\n• transform: scale(1.1) - Zooms image to 110%\\n• ::after creates an overlay layer\\n• On hover, the overlay becomes slightly dark\\n• This creates a professional hover effect!"
          },
          {
            "title": "Make It Responsive - Tablet",
            "description": "Let's make the gallery show 2 columns on tablets!",
            "instruction": "Add this media query:",
            "code": `@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}`,
            "codeFile": "style.css",
            "tip": "On screens smaller than 900px, we switch to 2 columns!",
            "explanation": "What this does:\\n• @media (max-width: 900px) - Applies on screens under 900px\\n• Changes from 3 columns to 2 columns\\n• Images get more space on smaller screens"
          },
          {
            "title": "Make It Responsive - Mobile",
            "description": "Finally, let's make it single column on mobile phones!",
            "instruction": "Add this media query for mobile:",
            "code": `@media (max-width: 600px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .gallery {
    padding: 1rem;
    margin: 1rem;
  }
  
  .gallery-item img {
    height: 250px;
  }
}`,
            "codeFile": "style.css",
            "tip": "On mobile, one column looks best and images get taller!",
            "explanation": "What this does:\\n• grid-template-columns: 1fr - Single column layout\\n• Reduced padding and margin for mobile\\n• Taller images (250px) since they're full width\\n• Your gallery now works on all devices!"
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
  <h2 class="testimonials-title">What Our Customers Say</h2>
  <div class="testimonial-grid">
  </div>
</section>`,
            "codeFile": "index.html",
            "tip": "Testimonials build trust with potential customers!",
            "explanation": "We're creating:\\n• <section class=\"testimonials\"> - Main container\\n• <h2> - Section heading\\n• <div class=\"testimonial-grid\"> - Will hold our testimonial cards"
          },
          {
            "title": "Add Testimonial Cards",
            "description": "Now let's add some testimonial cards with customer info and quotes!",
            "instruction": "Add these cards inside the testimonial-grid div:",
            "code": `    <div class="testimonial-card">
      <div class="testimonial-header">
        <img src="https://i.pravatar.cc/100?img=1" alt="Sarah Johnson" class="testimonial-avatar">
        <div class="testimonial-info">
          <h4 class="testimonial-name">Sarah Johnson</h4>
          <p class="testimonial-role">Happy Customer</p>
        </div>
      </div>
      <p class="testimonial-quote">"Amazing service! Highly recommend to everyone. The team was professional and friendly."</p>
    </div>
    <div class="testimonial-card">
      <div class="testimonial-header">
        <img src="https://i.pravatar.cc/100?img=3" alt="Mike Chen" class="testimonial-avatar">
        <div class="testimonial-info">
          <h4 class="testimonial-name">Mike Chen</h4>
          <p class="testimonial-role">Regular Client</p>
        </div>
      </div>
      <p class="testimonial-quote">"Best experience ever! Will definitely come back. Five stars all the way!"</p>
    </div>`,
            "codeFile": "index.html",
            "tip": "Real photos and names make testimonials more believable!",
            "explanation": "Each card has:\\n• Avatar image for the customer\\n• Name and role/title\\n• Their quote in italics"
          },
          {
            "title": "Style the Testimonials Section",
            "description": "Let's add a nice background and center our content!",
            "instruction": "Add this CSS:",
            "code": `.testimonials {
  max-width: 900px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background: #f9fafb;
  border-radius: 16px;
}

.testimonials-title {
  text-align: center;
  margin: 0 0 2rem 0;
  color: #333;
  font-size: 1.75rem;
}`,
            "codeFile": "style.css",
            "tip": "The light gray background makes the white cards pop!",
            "explanation": "What this does:\\n• max-width and margin: auto centers the section\\n• Light background creates contrast with cards\\n• Centered title looks professional"
          },
          {
            "title": "Create the Grid Layout",
            "description": "Let's arrange our testimonial cards in a responsive grid!",
            "instruction": "Add this CSS for the grid:",
            "code": `.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}`,
            "codeFile": "style.css",
            "tip": "auto-fit with minmax creates a responsive grid automatically!",
            "explanation": "What this does:\\n• display: grid - Enables CSS Grid\\n• auto-fit - Automatically adjusts columns\\n• minmax(300px, 1fr) - Cards are at least 300px wide\\n• gap: 1.5rem - Space between cards"
          },
          {
            "title": "Style the Testimonial Cards",
            "description": "Now let's make each card look polished with shadows and rounded corners!",
            "instruction": "Add this CSS for the cards:",
            "code": `.testimonial-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}`,
            "codeFile": "style.css",
            "tip": "The hover effect makes cards feel interactive!",
            "explanation": "What this does:\\n• White background stands out from section\\n• box-shadow adds depth\\n• Hover lifts the card up slightly"
          },
          {
            "title": "Style the Card Header",
            "description": "Let's align the avatar and customer info nicely!",
            "instruction": "Add this CSS for the header:",
            "code": `.testimonial-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.testimonial-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}`,
            "codeFile": "style.css",
            "tip": "Flexbox makes it easy to align the avatar and text!",
            "explanation": "What this does:\\n• display: flex aligns items horizontally\\n• gap adds space between avatar and text\\n• border-radius: 50% makes the image circular"
          },
          {
            "title": "Style the Customer Info",
            "description": "Let's style the name and role text!",
            "instruction": "Add this CSS:",
            "code": `.testimonial-name {
  margin: 0;
  color: #333;
  font-size: 1rem;
  font-weight: 600;
}

.testimonial-role {
  margin: 0.2rem 0 0 0;
  color: #667eea;
  font-size: 0.85rem;
}`,
            "codeFile": "style.css",
            "tip": "The purple role text adds a nice accent color!",
            "explanation": "What this does:\\n• Bold name stands out\\n• Smaller, colored role text creates hierarchy\\n• Tight margins keep things compact"
          },
          {
            "title": "Style the Quote",
            "description": "Finally, let's make the testimonial quote look like a real quote!",
            "instruction": "Add this CSS for the quote:",
            "code": `.testimonial-quote {
  margin: 0;
  color: #666;
  line-height: 1.6;
  font-style: italic;
  font-size: 0.95rem;
}`,
            "codeFile": "style.css",
            "tip": "Italic text is traditionally used for quotes!",
            "explanation": "What this does:\\n• font-style: italic makes it look like a quote\\n• Gray color is softer than black\\n• line-height: 1.6 improves readability"
          },
          {
            "title": "Make It Responsive",
            "description": "Let's ensure it looks great on mobile too!",
            "instruction": "Add this media query:",
            "code": `@media (max-width: 600px) {
  .testimonials {
    padding: 2rem 1rem;
    margin: 1rem;
  }
  
  .testimonials-title {
    font-size: 1.5rem;
  }
}`,
            "codeFile": "style.css",
            "tip": "Smaller padding on mobile gives more room for content!",
            "explanation": "What this does:\\n• Reduces padding on small screens\\n• Smaller title font for mobile\\n• The grid automatically becomes single column!"
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
  <div class="footer-bottom">
    <p>&copy; 2024 My Company. All rights reserved.</p>
  </div>
</footer>`,
            "codeFile": "index.html",
            "tip": "The footer goes at the very bottom of your website!",
            "explanation": "We're creating:\\n• <footer> - Semantic HTML element for footers\\n• footer-content - Will hold our columns\\n• footer-bottom - Copyright section at the bottom"
          },
          {
            "title": "Add Footer Columns",
            "description": "Let's add three columns: company info, quick links, and social media!",
            "instruction": "Add these columns inside footer-content:",
            "code": `    <div class="footer-column">
      <h3>My Company</h3>
      <p>Building amazing websites since 2024</p>
      <p>Email: contact@mycompany.com</p>
      <p>Phone: (123) 456-7890</p>
    </div>
    <div class="footer-column">
      <h3>Quick Links</h3>
      <ul class="footer-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h3>Follow Us</h3>
      <div class="social-links">
        <a href="#" class="social-link" aria-label="Facebook">
          <i data-lucide="facebook"></i>
        </a>
        <a href="#" class="social-link" aria-label="Twitter">
          <i data-lucide="twitter"></i>
        </a>
        <a href="#" class="social-link" aria-label="Instagram">
          <i data-lucide="instagram"></i>
        </a>
      </div>
    </div>`,
            "codeFile": "index.html",
            "tip": "Using Lucide icons keeps the design consistent and professional!",
            "explanation": "Three columns:\\n• Company info with contact details\\n• Quick navigation links\\n• Social media icons using Lucide"
          },
          {
            "title": "Style the Footer Container",
            "description": "Let's give our footer a dark background and proper spacing!",
            "instruction": "Add this CSS:",
            "code": `.site-footer {
  background: #2c3e50;
  color: white;
  padding: 3rem 2rem 1rem;
  margin-top: auto;
}`,
            "codeFile": "style.css",
            "tip": "Dark footers are classic and make content easy to read!",
            "explanation": "What this does:\\n• Dark blue-gray background\\n• White text for contrast\\n• More padding on top, less on bottom\\n• margin-top: auto pushes footer to bottom"
          },
          {
            "title": "Create the Column Layout",
            "description": "Let's arrange our columns using flexbox!",
            "instruction": "Add this CSS for the content area:",
            "code": `.footer-content {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 2rem;
  flex-wrap: wrap;
}

.footer-column {
  flex: 1;
  min-width: 200px;
}`,
            "codeFile": "style.css",
            "tip": "flex-wrap: wrap makes columns stack on smaller screens!",
            "explanation": "What this does:\\n• Flexbox spreads columns evenly\\n• gap adds space between columns\\n• max-width centers content\\n• flex-wrap allows responsive stacking"
          },
          {
            "title": "Style the Column Headings",
            "description": "Let's make the column titles stand out!",
            "instruction": "Add this CSS:",
            "code": `.footer-column h3 {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  color: white;
}

.footer-column p {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: #bdc3c7;
}`,
            "codeFile": "style.css",
            "tip": "Lighter gray text creates visual hierarchy!",
            "explanation": "What this does:\\n• White headings stand out\\n• Gray paragraph text is softer\\n• Consistent spacing between items"
          },
          {
            "title": "Style the Footer Links",
            "description": "Let's make the navigation links look clean!",
            "instruction": "Add this CSS for the links:",
            "code": `.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #bdc3c7;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: white;
}`,
            "codeFile": "style.css",
            "tip": "Links turn white on hover for clear feedback!",
            "explanation": "What this does:\\n• Removes bullet points from list\\n• Gray links that turn white on hover\\n• Smooth color transition"
          },
          {
            "title": "Style the Social Media Icons",
            "description": "Let's create circular icon buttons for social links!",
            "instruction": "Add this CSS:",
            "code": `.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: background 0.3s, transform 0.3s;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}`,
            "codeFile": "style.css",
            "tip": "The semi-transparent background looks modern and clean!",
            "explanation": "What this does:\\n• Circular buttons with flexbox centering\\n• Semi-transparent white background\\n• Hover lifts the icon slightly\\n• Smooth transitions for polish"
          },
          {
            "title": "Style the Footer Bottom",
            "description": "Let's add a separator line and style the copyright!",
            "instruction": "Add this CSS:",
            "code": `.footer-bottom {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  margin: 0;
  color: #bdc3c7;
  font-size: 0.85rem;
}`,
            "codeFile": "style.css",
            "tip": "The subtle border separates the copyright from the main content!",
            "explanation": "What this does:\\n• Centered copyright text\\n• Subtle top border as separator\\n• Smaller, lighter text"
          },
          {
            "title": "Make It Responsive",
            "description": "Let's ensure the footer looks great on mobile!",
            "instruction": "Add this media query:",
            "code": `@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-column {
    margin-bottom: 2rem;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .footer-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  
  .footer-links li {
    margin: 0;
  }
}`,
            "codeFile": "style.css",
            "tip": "On mobile, everything stacks and centers nicely!",
            "explanation": "What this does:\\n• Columns stack vertically\\n• Content centers on mobile\\n• Links wrap horizontally\\n• Social icons center"
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