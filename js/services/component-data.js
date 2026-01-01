/**
 * Component Data - All component definitions
 * Restored from backup
 */

const ComponentData = {
    components: [
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
                            <li style="position: relative;">
                                <a href="#" style="color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px;">Services <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: middle;"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                            </li>
                            <li><a href="#" style="color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px;">Contact</a></li>
                        </ul>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Build a professional navigation bar with logo and dropdown menu',
                    duration: '40 minutes',
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
                            tip: 'The <nav> tag tells the browser "this is a navigation menu!"',
                            explanation: 'What each part does:\n• <nav> - Creates a navigation container\n• class="navbar" - Gives it a name for styling\n• <img> - Shows your logo image\n• <span> - Holds the website name text',
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
                                        hint: 'Add <div class="nav-brand"> inside the <nav>'
                                    },
                                    {
                                        type: 'tag',
                                        value: 'img',
                                        message: 'Don\'t forget to add an <img> tag for the logo!',
                                        hint: 'Add <img src="..." alt="Logo" class="nav-logo">'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Add Navigation Links',
                            description: 'Now let\'s add the menu links! These are the buttons people click to go to different pages.',
                            instruction: 'Add these menu links after the nav-brand div (but still inside the <nav>):',
                            code: `<ul class="nav-menu">
  <li><a href="#home" class="nav-link">Home</a></li>
  <li><a href="#about" class="nav-link">About</a></li>
  <li><a href="#services" class="nav-link">Services</a></li>
  <li><a href="#contact" class="nav-link">Contact</a></li>
</ul>`,
                            codeFile: 'index.html',
                            tip: 'The <ul> tag creates an "unordered list" - perfect for menu items!',
                            explanation: 'What each part does:\n• <ul> - Creates a list container\n• <li> - Each list item (one menu button)\n• <a href="#home"> - A clickable link\n• The # means it links to a section on the same page',
                            validation: {
                                required: [
                                    {
                                        type: 'tag',
                                        value: 'ul',
                                        message: 'We need a <ul> tag to create our menu list!',
                                        hint: 'Add <ul class="nav-menu"> after the nav-brand'
                                    },
                                    {
                                        type: 'class',
                                        value: 'nav-menu',
                                        message: 'Add class="nav-menu" to your <ul> tag!',
                                        hint: 'This class will help us style the menu'
                                    },
                                    {
                                        type: 'tag',
                                        value: 'li',
                                        message: 'We need <li> tags for each menu item!',
                                        hint: 'Add <li> tags inside the <ul>'
                                    },
                                    {
                                        type: 'class',
                                        value: 'nav-link',
                                        message: 'Add class="nav-link" to your <a> tags!',
                                        hint: 'Each link should have class="nav-link"'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Add Basic Navbar Colors',
                            description: 'Let\'s give our navbar a nice color and some breathing room!',
                            instruction: 'Go to your CSS file and add these styles:',
                            code: `.navbar {
  background-color: #2c3e50;
  padding: 1rem 2rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'In CSS, we use a dot (.) before the class name to select it.',
                            explanation: 'What this does:\n• background-color - Paints the navbar\n• #2c3e50 - A dark blue-gray color code\n• padding - Adds space inside the navbar',
                            validation: {
                                required: [
                                    {
                                        type: 'selector',
                                        value: '.navbar',
                                        message: 'We need to create a .navbar style in CSS!',
                                        hint: 'Start with .navbar { } in your CSS file'
                                    },
                                    {
                                        type: 'property',
                                        value: 'background-color',
                                        message: 'Add background-color to give the navbar a color!',
                                        hint: 'Try background-color: #2c3e50;'
                                    },
                                    {
                                        type: 'property',
                                        value: 'padding',
                                        message: 'Add padding to give the navbar some space!',
                                        hint: 'Try padding: 1rem 2rem;'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Arrange Items with Flexbox',
                            description: 'Now let\'s use Flexbox magic to line up our logo and menu nicely!',
                            instruction: 'Add these properties to your .navbar style:',
                            code: `.navbar {
  background-color: #2c3e50;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}`,
                            codeFile: 'styles.css',
                            tip: 'Flexbox is like having superpowers for arranging things!',
                            explanation: 'What Flexbox does:\n• display: flex - Lines items up in a row\n• justify-content: space-between - Pushes items apart\n• align-items: center - Centers everything vertically',
                            validation: {
                                required: [
                                    {
                                        type: 'property',
                                        value: 'display',
                                        message: 'Add display: flex to arrange items in a row!',
                                        hint: 'Flexbox is super powerful for layouts!'
                                    },
                                    {
                                        type: 'property',
                                        value: 'justify-content',
                                        message: 'Add justify-content to space items apart!',
                                        hint: 'Use justify-content: space-between;'
                                    },
                                    {
                                        type: 'property',
                                        value: 'align-items',
                                        message: 'Add align-items to center items vertically!',
                                        hint: 'Use align-items: center;'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Style the Logo Area',
                            description: 'Let\'s arrange the logo and website name to sit nicely together!',
                            instruction: 'Add this style for the logo area:',
                            code: `.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'The gap property adds space between items automatically!',
                            explanation: 'What this does:\n• display: flex - Makes logo and text sit side-by-side\n• align-items: center - Lines them up in the middle\n• gap: 0.75rem - Adds space between them',
                            validation: {
                                required: [
                                    {
                                        type: 'selector',
                                        value: '.nav-brand',
                                        message: 'We need to style .nav-brand in CSS!',
                                        hint: 'Add .nav-brand { } to your CSS'
                                    },
                                    {
                                        type: 'property',
                                        value: 'display',
                                        message: 'Add display: flex to arrange logo and text!',
                                        hint: 'Use display: flex;'
                                    },
                                    {
                                        type: 'property',
                                        value: 'gap',
                                        message: 'Add gap to space the logo and text!',
                                        hint: 'Try gap: 0.75rem;'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Size and Round the Logo',
                            description: 'Now let\'s make the logo the perfect size with nice rounded corners!',
                            instruction: 'Add this style for the logo image:',
                            code: `.nav-logo {
  width: 40px;
  height: 40px;
  border-radius: 8px;
}`,
                            codeFile: 'styles.css',
                            tip: 'border-radius makes corners round - bigger numbers = rounder!',
                            explanation: 'What this does:\n• width: 40px - Makes logo 40 pixels wide\n• height: 40px - Makes it 40 pixels tall (a perfect square!)\n• border-radius: 8px - Rounds the corners',
                            validation: {
                                required: [
                                    {
                                        type: 'selector',
                                        value: '.nav-logo',
                                        message: 'We need to style .nav-logo in CSS!',
                                        hint: 'Add .nav-logo { } to style the logo image'
                                    },
                                    {
                                        type: 'property',
                                        value: 'width',
                                        message: 'Add width to size the logo!',
                                        hint: 'Try width: 40px;'
                                    },
                                    {
                                        type: 'property',
                                        value: 'border-radius',
                                        message: 'Add border-radius to make rounded corners!',
                                        hint: 'Try border-radius: 8px;'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Style the Brand Name',
                            description: 'Let\'s make the website name look bold and beautiful!',
                            instruction: 'Add this style for the brand name:',
                            code: `.brand-name {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
}`,
                            codeFile: 'styles.css',
                            tip: 'font-weight controls boldness: 400 is normal, 600 is semi-bold, 700 is bold!',
                            explanation: 'What this does:\n• color: white - Makes text white\n• font-size: 1.5rem - Makes it bigger (1.5x normal size)\n• font-weight: 600 - Makes it semi-bold',
                            validation: {
                                required: [
                                    {
                                        type: 'selector',
                                        value: '.brand-name',
                                        message: 'We need to style .brand-name in CSS!',
                                        hint: 'Add .brand-name { } to your CSS'
                                    },
                                    {
                                        type: 'property',
                                        value: 'color',
                                        message: 'Add color to make the text visible!',
                                        hint: 'Try color: white;'
                                    },
                                    {
                                        type: 'property',
                                        value: 'font-size',
                                        message: 'Add font-size to make the text bigger!',
                                        hint: 'Try font-size: 1.5rem;'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Remove List Bullets',
                            description: 'Let\'s clean up the menu by removing bullets and arranging items in a row!',
                            instruction: 'Add this style for the menu list:',
                            code: `.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}`,
                            codeFile: 'styles.css',
                            tip: 'Lists normally have bullets - we\'re removing them for a clean menu!',
                            explanation: 'What this does:\n• display: flex - Lines up items in a row\n• list-style: none - Removes bullet points\n• gap: 2rem - Adds space between menu items\n• margin: 0 and padding: 0 - Removes default spacing',
                            validation: {
                                required: [
                                    {
                                        type: 'selector',
                                        value: '.nav-menu',
                                        message: 'We need to style .nav-menu in CSS!',
                                        hint: 'Add .nav-menu { } to your CSS'
                                    },
                                    {
                                        type: 'property',
                                        value: 'list-style',
                                        message: 'Add list-style: none to remove bullet points!',
                                        hint: 'This makes the menu look cleaner'
                                    },
                                    {
                                        type: 'property',
                                        value: 'display',
                                        message: 'Add display: flex to line up items!',
                                        hint: 'Use display: flex;'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Style the Menu Links',
                            description: 'Now let\'s make the links look clickable and pretty!',
                            instruction: 'Add this style for the links:',
                            code: `.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
}`,
                            codeFile: 'styles.css',
                            tip: 'Links normally have underlines - we can remove them for a cleaner look!',
                            explanation: 'What this does:\n• color: white - Makes link text white\n• text-decoration: none - Removes the underline\n• padding: 0.5rem 1rem - Adds space inside (easier to click)\n• border-radius: 6px - Rounds the corners',
                            validation: {
                                required: [
                                    {
                                        type: 'selector',
                                        value: '.nav-link',
                                        message: 'We need to style .nav-link in CSS!',
                                        hint: 'Add .nav-link { } to style the links'
                                    },
                                    {
                                        type: 'property',
                                        value: 'color',
                                        message: 'Add color to make links visible!',
                                        hint: 'Try color: white;'
                                    },
                                    {
                                        type: 'property',
                                        value: 'text-decoration',
                                        message: 'Add text-decoration to remove underlines!',
                                        hint: 'Use text-decoration: none;'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Add Hover Effects',
                            description: 'Let\'s add a cool effect when you move your mouse over the links!',
                            instruction: 'Add these properties to make hover effects smooth:',
                            code: `.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}`,
                            codeFile: 'styles.css',
                            tip: 'The :hover selector only applies when you move your mouse over something!',
                            explanation: 'What this does:\n• transition - Makes color changes smooth (0.3 seconds)\n• :hover - Means "when mouse is over this"\n• rgba(255, 255, 255, 0.1) - White color at 10% opacity',
                            validation: {
                                required: [
                                    {
                                        type: 'property',
                                        value: 'transition',
                                        message: 'Add transition for smooth hover effects!',
                                        hint: 'Try transition: background-color 0.3s;'
                                    },
                                    {
                                        type: 'pattern',
                                        value: '\\.nav-link:hover',
                                        message: 'Add a :hover rule for the links!',
                                        hint: 'Use .nav-link:hover { } to style hovered links'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Add a Dropdown Menu',
                            description: 'Let\'s add a dropdown menu to the Services link! This shows more options when you hover over it.',
                            instruction: 'Find the Services <li> in your HTML and replace it with this code:',
                            code: `<li class="dropdown">
  <a href="#services" class="nav-link">Services G•+</a>
  <ul class="dropdown-menu">
    <li><a href="#web" class="dropdown-link">Web Design</a></li>
    <li><a href="#app" class="dropdown-link">App Development</a></li>
    <li><a href="#seo" class="dropdown-link">SEO</a></li>
  </ul>
</li>`,
                            codeFile: 'index.html',
                            tip: 'A dropdown is a menu inside a menu! We\'re putting a <ul> inside a <li>.',
                            explanation: 'What this structure does:\n• class="dropdown" - Tells CSS this item has a submenu\n• The down arrow shows there\'s more options\n• <ul class="dropdown-menu"> - The hidden submenu\n• Three <li> items - The dropdown options',
                            validation: {
                                required: [
                                    {
                                        type: 'class',
                                        value: 'dropdown',
                                        message: 'We need a class="dropdown" on the Services list item!',
                                        hint: 'Add class="dropdown" to the <li> that contains Services'
                                    },
                                    {
                                        type: 'class',
                                        value: 'dropdown-menu',
                                        message: 'We need a class="dropdown-menu" for the submenu!',
                                        hint: 'Add class="dropdown-menu" to the nested <ul>'
                                    },
                                    {
                                        type: 'class',
                                        value: 'dropdown-link',
                                        message: 'Add class="dropdown-link" to the dropdown links!',
                                        hint: 'Each link in the dropdown should have this class'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Position the Dropdown',
                            description: 'Let\'s set up the positioning so the dropdown appears in the right place!',
                            instruction: 'Add these positioning styles:',
                            code: `.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
}`,
                            codeFile: 'styles.css',
                            tip: 'position: absolute lets you place things exactly where you want!',
                            explanation: 'What positioning does:\n• position: relative - Makes this the anchor point\n• position: absolute - Takes menu out of normal flow\n• top: 100% - Positions it right below Services\n• left: 0 - Aligns with left edge',
                            validation: {
                                required: [
                                    {
                                        type: 'selector',
                                        value: '.dropdown',
                                        message: 'We need to style .dropdown in CSS!',
                                        hint: 'Add .dropdown { } to your CSS'
                                    },
                                    {
                                        type: 'selector',
                                        value: '.dropdown-menu',
                                        message: 'We need to style .dropdown-menu in CSS!',
                                        hint: 'Add .dropdown-menu { } to style the submenu'
                                    },
                                    {
                                        type: 'property',
                                        value: 'position',
                                        message: 'Add position property for dropdown positioning!',
                                        hint: 'Use position: absolute on .dropdown-menu'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Style the Dropdown Menu',
                            description: 'Now let\'s make the dropdown look good with colors and spacing!',
                            instruction: 'Add these style properties to .dropdown-menu:',
                            code: `.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #34495e;
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
  border-radius: 6px;
  min-width: 200px;
}`,
                            codeFile: 'styles.css',
                            tip: 'min-width makes sure the dropdown is wide enough!',
                            explanation: 'What this does:\n• background-color - Slightly lighter than navbar\n• list-style: none - Removes bullet points\n• padding and margin - Controls spacing\n• border-radius: 6px - Rounds corners',
                            validation: {
                                required: [
                                    {
                                        type: 'property',
                                        value: 'background-color',
                                        message: 'Add background-color to the dropdown!',
                                        hint: 'Try background-color: #34495e;'
                                    },
                                    {
                                        type: 'property',
                                        value: 'border-radius',
                                        message: 'Add border-radius for rounded corners!',
                                        hint: 'Try border-radius: 6px;'
                                    },
                                    {
                                        type: 'property',
                                        value: 'min-width',
                                        message: 'Add min-width to make dropdown wide enough!',
                                        hint: 'Try min-width: 200px;'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Hide and Show the Dropdown',
                            description: 'Let\'s make the dropdown hidden by default and appear when you hover!',
                            instruction: 'Add these rules to control visibility:',
                            code: `.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #34495e;
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
  border-radius: 6px;
  min-width: 200px;
  display: none;
}

.dropdown:hover .dropdown-menu {
  display: block;
}`,
                            codeFile: 'styles.css',
                            tip: 'display: none makes something invisible. display: block makes it visible!',
                            explanation: 'How show/hide works:\n• display: none - Hides the menu completely\n• .dropdown:hover .dropdown-menu - Means "when hovering over dropdown"\n• display: block - Shows the menu when you hover',
                            validation: {
                                required: [
                                    {
                                        type: 'property',
                                        value: 'display',
                                        message: 'Add display property to control visibility!',
                                        hint: 'Use display: none on .dropdown-menu'
                                    },
                                    {
                                        type: 'pattern',
                                        value: '\\.dropdown:hover',
                                        message: 'Add a :hover rule to show the dropdown!',
                                        hint: 'Use .dropdown:hover .dropdown-menu { display: block; }'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Style the Dropdown Links',
                            description: 'Finally, let\'s style the links inside the dropdown menu!',
                            instruction: 'Add these styles for dropdown links:',
                            code: `.dropdown-link {
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  display: block;
}

.dropdown-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}`,
                            codeFile: 'styles.css',
                            tip: 'display: block makes each link take up the full width!',
                            explanation: 'What this does:\n• color: white - Makes text white\n• text-decoration: none - Removes underlines\n• padding - More space for easier clicking\n• display: block - Makes links full width',
                            validation: {
                                required: [
                                    {
                                        type: 'selector',
                                        value: '.dropdown-link',
                                        message: 'We need to style .dropdown-link in CSS!',
                                        hint: 'Add .dropdown-link { } to your CSS'
                                    },
                                    {
                                        type: 'property',
                                        value: 'display',
                                        message: 'Add display: block to dropdown links!',
                                        hint: 'This makes them easier to click'
                                    },
                                    {
                                        type: 'pattern',
                                        value: '\\.dropdown-link:hover',
                                        message: 'Add a :hover rule for dropdown links!',
                                        hint: 'Use .dropdown-link:hover { } for hover effects'
                                    }
                                ]
                            }
                        }
                    ],
                    learningObjectives: [
                        'Learn how to structure a navigation bar with HTML',
                        'Understand how to add and style a logo image',
                        'Master CSS Flexbox for layout',
                        'Learn about hover effects and transitions',
                        'Understand positioning for dropdown menus',
                        'Create interactive dropdown menus with CSS'
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
                    steps: [
                        {
                            title: 'Create the Hero Container',
                            description: 'Let\'s start by creating the main hero section with two sides - one for text and one for an image!',
                            instruction: 'Add this HTML to create the hero section:',
                            code: `<section class="hero">
  <div class="hero-content">
    <h1 class="hero-title">Hi, I'm Learning to Code!</h1>
    <p class="hero-subtitle">Building awesome websites and having fun with web development</p>
    <button class="hero-cta">See My Projects</button>
  </div>
  <div class="hero-image">
    <img src="img/workshop-hero-image.png" alt="Student coding">
  </div>
</section>`,
                            codeFile: 'index.html',
                            tip: 'We\'re creating two sections side by side - one for text, one for an image!',
                            explanation: 'What each part does:\n• <section class="hero"> - Creates the hero container\n• <div class="hero-content"> - Left side for text\n• <div class="hero-image"> - Right side for image\n• <button class="hero-cta"> - Call-to-action button',
                            validation: {
                                required: [
                                    {
                                        type: 'tag',
                                        value: 'section',
                                        message: 'We need a <section> tag for the hero!',
                                        hint: 'Start with <section class="hero">'
                                    },
                                    {
                                        type: 'class',
                                        value: 'hero',
                                        message: 'Add class="hero" to your section!',
                                        hint: 'This class will help us style it'
                                    },
                                    {
                                        type: 'class',
                                        value: 'hero-content',
                                        message: 'We need a div with class="hero-content"!',
                                        hint: 'This will hold the text content'
                                    },
                                    {
                                        type: 'class',
                                        value: 'hero-image',
                                        message: 'We need a div with class="hero-image"!',
                                        hint: 'This will hold the image'
                                    },
                                    {
                                        type: 'tag',
                                        value: 'h1',
                                        message: 'Add an <h1> tag for the main title!',
                                        hint: 'This is your biggest heading'
                                    },
                                    {
                                        type: 'tag',
                                        value: 'button',
                                        message: 'Don\'t forget the <button> tag!',
                                        hint: 'Add <button class="hero-cta">See My Projects</button>'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Make it Full Screen',
                            description: 'Let\'s make the hero section take up the whole screen! This creates a big, impressive first impression.',
                            instruction: 'Add these styles to make it full height:',
                            code: `.hero {
  min-height: 100vh;
  padding: 2rem;
}`,
                            codeFile: 'styles.css',
                            tip: '100vh means "100% of the viewport height" - the full screen!',
                            explanation: 'What this does:\n• min-height: 100vh - Makes it as tall as the screen\n• "vh" stands for "viewport height"\n• padding: 2rem - Adds space inside',
                            validation: {
                                required: [
                                    {
                                        type: 'selector',
                                        value: '.hero',
                                        message: 'We need to create a .hero style in CSS!',
                                        hint: 'Start with .hero { } in your CSS file'
                                    },
                                    {
                                        type: 'property',
                                        value: 'min-height',
                                        message: 'Add min-height to make it full screen!',
                                        hint: 'Try min-height: 100vh;'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Arrange Content Side by Side',
                            description: 'Now let\'s use Flexbox magic to put the text on the left and image on the right!',
                            instruction: 'Add these Flexbox properties:',
                            code: `.hero {
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'Flexbox is like having superpowers for positioning!',
                            explanation: 'What Flexbox does:\n• display: flex - Lines items up in a row\n• align-items: center - Centers vertically\n• justify-content: space-between - Pushes items apart\n• gap: 3rem - Adds space between sections',
                            validation: {
                                required: [
                                    {
                                        type: 'property',
                                        value: 'display',
                                        message: 'Add display: flex to use Flexbox!',
                                        hint: 'Flexbox will help us arrange items side by side'
                                    },
                                    {
                                        type: 'property',
                                        value: 'align-items',
                                        message: 'Add align-items to center vertically!',
                                        hint: 'Use align-items: center;'
                                    },
                                    {
                                        type: 'property',
                                        value: 'gap',
                                        message: 'Add gap for spacing between sections!',
                                        hint: 'Use gap: 3rem;'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Add a Background Color',
                            description: 'Let\'s add a nice background color to make the hero section stand out!',
                            instruction: 'Add this background color:',
                            code: `.hero {
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #667eea;
  color: white;
}`,
                            codeFile: 'styles.css',
                            tip: 'You can use any color you like! Try different hex codes.',
                            explanation: 'What this does:\n• background: #667eea - A purple-blue color\n• color: white - Makes text white\n• This makes text show up clearly on the dark background',
                            validation: {
                                required: [
                                    {
                                        type: 'property',
                                        value: 'background',
                                        message: 'Add a background color!',
                                        hint: 'Use background: #667eea;'
                                    },
                                    {
                                        type: 'property',
                                        value: 'color',
                                        message: 'Add color: white for the text!',
                                        hint: 'This makes text visible on the dark background'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Style Content and Image Sections',
                            description: 'Let\'s make both sections take up equal space and style the image!',
                            instruction: 'Add styles for both sections:',
                            code: `.hero-content {
  flex: 1;
  max-width: 500px;
}

.hero-image {
  flex: 1;
  max-width: 500px;
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 15px;
}`,
                            codeFile: 'styles.css',
                            tip: 'flex: 1 makes both sections grow equally to fill the space!',
                            explanation: 'What this does:\n• flex: 1 - Makes sections take equal space\n• max-width: 500px - Limits how wide they get\n• width: 100% - Makes image fill its container\n• border-radius: 15px - Rounds image corners',
                            validation: {
                                required: [
                                    {
                                        type: 'selector',
                                        value: '.hero-content',
                                        message: 'We need to style .hero-content!',
                                        hint: 'Add .hero-content { } to your CSS'
                                    },
                                    {
                                        type: 'selector',
                                        value: '.hero-image',
                                        message: 'We need to style .hero-image!',
                                        hint: 'Add .hero-image { } to your CSS'
                                    },
                                    {
                                        type: 'property',
                                        value: 'flex',
                                        message: 'Add flex property to make sections equal!',
                                        hint: 'Use flex: 1;'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Style the Title',
                            description: 'Let\'s make the main title big and bold! This is the first thing visitors see.',
                            instruction: 'Add these styles for the title:',
                            code: `.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}`,
                            codeFile: 'styles.css',
                            tip: 'font-size: 3rem makes the title 3 times the normal size!',
                            explanation: 'What this does:\n• font-size: 3rem - Makes it really big\n• font-weight: 700 - Makes it bold\n• margin-bottom: 1rem - Adds space below\n• line-height: 1.2 - Controls line spacing',
                            validation: {
                                required: [
                                    {
                                        type: 'selector',
                                        value: '.hero-title',
                                        message: 'We need to style .hero-title!',
                                        hint: 'Add .hero-title { } to your CSS'
                                    },
                                    {
                                        type: 'property',
                                        value: 'font-size',
                                        message: 'Add font-size to make it big!',
                                        hint: 'Try font-size: 3rem;'
                                    },
                                    {
                                        type: 'property',
                                        value: 'font-weight',
                                        message: 'Add font-weight to make it bold!',
                                        hint: 'Use font-weight: 700;'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Style the Subtitle',
                            description: 'Now let\'s style the subtitle - it should be smaller and slightly transparent.',
                            instruction: 'Add these styles for the subtitle:',
                            code: `.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.5;
}`,
                            codeFile: 'styles.css',
                            tip: 'opacity: 0.9 makes the text slightly see-through for a subtle effect!',
                            explanation: 'What this does:\n• font-size: 1.25rem - Bigger than normal, smaller than title\n• margin-bottom: 2rem - Adds space below\n• opacity: 0.9 - Makes it 90% visible (softer look)\n• line-height: 1.5 - Makes it easier to read',
                            validation: {
                                required: [
                                    {
                                        type: 'selector',
                                        value: '.hero-subtitle',
                                        message: 'We need to style .hero-subtitle!',
                                        hint: 'Add .hero-subtitle { } to your CSS'
                                    },
                                    {
                                        type: 'property',
                                        value: 'font-size',
                                        message: 'Add font-size for the subtitle!',
                                        hint: 'Try font-size: 1.25rem;'
                                    },
                                    {
                                        type: 'property',
                                        value: 'opacity',
                                        message: 'Add opacity for a subtle effect!',
                                        hint: 'Use opacity: 0.9;'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Style the Button',
                            description: 'Time to make an awesome call-to-action button! This is what visitors will click.',
                            instruction: 'Add these button styles:',
                            code: `.hero-cta {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}`,
                            codeFile: 'styles.css',
                            tip: 'cursor: pointer makes the mouse cursor change to a hand!',
                            explanation: 'What this does:\n• background: #4CAF50 - Green color\n• border: none - Removes default border\n• padding: 1rem 2rem - Makes button bigger\n• cursor: pointer - Shows hand cursor on hover',
                            validation: {
                                required: [
                                    {
                                        type: 'selector',
                                        value: '.hero-cta',
                                        message: 'We need to style .hero-cta!',
                                        hint: 'Add .hero-cta { } to your CSS'
                                    },
                                    {
                                        type: 'property',
                                        value: 'background',
                                        message: 'Add a background color!',
                                        hint: 'Try background: #4CAF50;'
                                    },
                                    {
                                        type: 'property',
                                        value: 'padding',
                                        message: 'Add padding to make it bigger!',
                                        hint: 'Use padding: 1rem 2rem;'
                                    },
                                    {
                                        type: 'property',
                                        value: 'border-radius',
                                        message: 'Add border-radius for rounded corners!',
                                        hint: 'Try border-radius: 5px;'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Add Button Hover Effects',
                            description: 'Let\'s make the button interactive! It should change when you hover over it.',
                            instruction: 'Add these hover effects:',
                            code: `.hero-cta {
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
}`,
                            codeFile: 'styles.css',
                            tip: 'transform: translateY(-2px) makes the button lift up slightly!',
                            explanation: 'What hover does:\n• transition - Makes changes smooth\n• box-shadow - Adds shadow for depth\n• :hover - Applies when mouse is over button\n• transform: translateY(-2px) - Moves button up 2 pixels',
                            validation: {
                                required: [
                                    {
                                        type: 'property',
                                        value: 'transition',
                                        message: 'Add transition for smooth effects!',
                                        hint: 'Use transition: all 0.3s ease;'
                                    },
                                    {
                                        type: 'property',
                                        value: 'box-shadow',
                                        message: 'Add box-shadow for depth!',
                                        hint: 'Try box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);'
                                    },
                                    {
                                        type: 'pattern',
                                        value: '\\.hero-cta:hover',
                                        message: 'Add a :hover rule for the button!',
                                        hint: 'Use .hero-cta:hover { } for hover effects'
                                    }
                                ]
                            }
                        }
                    ],
                    learningObjectives: [
                        'Learn how to create full-screen sections',
                        'Master Flexbox for centering content',
                        'Understand CSS gradients',
                        'Create interactive buttons with hover effects',
                        'Use box-shadow for depth and visual interest'
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
                mobileFirst: false,
                tags: ['Beginner-Friendly', 'Box-Shadow', 'CSS-Only'],
                description: 'Versatile card component for displaying content with image, title, and action button. 7 easy steps!',
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
                    steps: [
                        {
                            title: 'Create the Card Structure',
                            description: 'Let\'s build a card! Cards are like little boxes that hold information - perfect for products, blog posts, or profiles.',
                            instruction: 'Add this HTML to create the card:',
                            code: `<div class="card">
  <img src="https://picsum.photos/300/200" alt="Card image" class="card-image">
  <div class="card-content">
    <h3 class="card-title">Amazing Discovery</h3>
    <p class="card-description">Explore the beauty of nature through stunning photography and inspiring stories.</p>
    <button class="card-button">Learn More</button>
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Cards are super popular in modern web design!',
                            explanation: 'What each part does:\n• <div class="card"> - Main container\n• <img class="card-image"> - Image at the top\n• <div class="card-content"> - Holds text and button\n• <button class="card-button"> - Action button',
                            validation: {
                                required: [
                                    {
                                        type: 'class',
                                        value: 'card',
                                        message: 'We need a div with class="card"!',
                                        hint: 'Start with <div class="card">'
                                    },
                                    {
                                        type: 'class',
                                        value: 'card-image',
                                        message: 'Add an image with class="card-image"!',
                                        hint: 'Use <img class="card-image">'
                                    },
                                    {
                                        type: 'class',
                                        value: 'card-content',
                                        message: 'We need a div with class="card-content"!',
                                        hint: 'This holds the text and button'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Style the Card Container',
                            description: 'Let\'s give the card a modern look with rounded corners and a clean background!',
                            instruction: 'Add these basic card styles:',
                            code: `.card {
  max-width: 320px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
}`,
                            codeFile: 'styles.css',
                            tip: 'overflow: hidden makes sure nothing sticks out past the rounded corners!',
                            explanation: 'What this does:\n• max-width: 320px - Keeps card from getting too wide\n• background: white - Clean white background\n• border-radius: 16px - Rounded corners\n• overflow: hidden - Clips content at the edges',
                            validation: {
                                required: [
                                    {
                                        type: 'selector',
                                        value: '.card',
                                        message: 'We need to style .card in CSS!',
                                        hint: 'Add .card { } to your CSS'
                                    },
                                    {
                                        type: 'property',
                                        value: 'background',
                                        message: 'Add a background color!',
                                        hint: 'Try background: white;'
                                    },
                                    {
                                        type: 'property',
                                        value: 'border-radius',
                                        message: 'Add border-radius for rounded corners!',
                                        hint: 'Use border-radius: 16px;'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Add Shadow for Depth',
                            description: 'Let\'s add a modern shadow to make the card look like it\'s floating above the page!',
                            instruction: 'Add box-shadow to the card:',
                            code: `.card {
  max-width: 320px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}`,
                            codeFile: 'styles.css',
                            tip: 'box-shadow creates a shadow. The rgba color makes it transparent!',
                            explanation: 'What this does:\n• box-shadow - Creates a soft shadow\n• 0 10px 30px - Position and blur amount\n• rgba(0, 0, 0, 0.08) - Black at 8% opacity\n• transition - Makes changes smooth',
                            validation: {
                                required: [
                                    {
                                        type: 'property',
                                        value: 'box-shadow',
                                        message: 'Add box-shadow for depth!',
                                        hint: 'Try box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);'
                                    },
                                    {
                                        type: 'property',
                                        value: 'transition',
                                        message: 'Add transition for smooth effects!',
                                        hint: 'Use transition: all 0.3s ease;'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Style the Card Image',
                            description: 'Let\'s make sure the image fits perfectly in the card!',
                            instruction: 'Add these image styles:',
                            code: `.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}`,
                            codeFile: 'styles.css',
                            tip: 'object-fit: cover is magic! It fills the space without stretching.',
                            explanation: 'What this does:\n• width: 100% - Makes image as wide as card\n• height: 200px - Fixed height\n• object-fit: cover - Crops to fill space (no stretching!)\n• display: block - Removes tiny gap under image',
                            validation: {
                                required: [
                                    {
                                        type: 'selector',
                                        value: '.card-image',
                                        message: 'We need to style .card-image!',
                                        hint: 'Add .card-image { } to your CSS'
                                    },
                                    {
                                        type: 'property',
                                        value: 'object-fit',
                                        message: 'Add object-fit to make images fit nicely!',
                                        hint: 'Use object-fit: cover;'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Add Content Padding',
                            description: 'Let\'s add space inside the content area so text doesn\'t touch the edges!',
                            instruction: 'Style the content container:',
                            code: `.card-content {
  padding: 1.75rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'Padding creates breathing room - it makes designs look professional!',
                            explanation: 'What this does:\n• padding: 1.75rem - Adds space on all sides\n• This keeps text away from edges\n• Makes it easier to read',
                            validation: {
                                required: [
                                    {
                                        type: 'selector',
                                        value: '.card-content',
                                        message: 'We need to style .card-content!',
                                        hint: 'Add .card-content { } to your CSS'
                                    },
                                    {
                                        type: 'property',
                                        value: 'padding',
                                        message: 'Add padding for spacing!',
                                        hint: 'Try padding: 1.75rem;'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Style Title and Description',
                            description: 'Let\'s make the title and description look modern and readable!',
                            instruction: 'Add styles for the text:',
                            code: `.card-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.75rem 0;
  letter-spacing: -0.02em;
}

.card-description {
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  font-size: 0.95rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'letter-spacing makes titles look polished, and line-height makes text easier to read!',
                            explanation: 'What this does:\n\n.card-title:\n• font-weight: 700 - Bold for impact\n• letter-spacing: -0.02em - Tighter spacing\n\n.card-description:\n• color: #6b7280 - Soft gray\n• line-height: 1.6 - More space between lines',
                            validation: {
                                required: [
                                    {
                                        type: 'selector',
                                        value: '.card-title',
                                        message: 'We need to style .card-title!',
                                        hint: 'Add .card-title { } to your CSS'
                                    },
                                    {
                                        type: 'selector',
                                        value: '.card-description',
                                        message: 'We need to style .card-description!',
                                        hint: 'Add .card-description { } to your CSS'
                                    }
                                ]
                            }
                        },
                        {
                            title: 'Style the Button and Add Hover',
                            description: 'Finally, let\'s make a modern button and add hover effects to the whole card!',
                            instruction: 'Add button styles and card hover effect:',
                            code: `.card-button {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.85rem 1.75rem;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  font-size: 0.95rem;
}

.card-button:hover {
  background: #5568d3;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}`,
                            codeFile: 'styles.css',
                            tip: 'The card lifts up when you hover - this makes it feel interactive!',
                            explanation: 'What this does:\n\n.card-button:\n• background: #667eea - Purple color\n• width: 100% - Button fills full width\n\n.card:hover:\n• transform: translateY(-8px) - Lifts card up\n• box-shadow - Bigger shadow makes it look like it\'s floating',
                            validation: {
                                required: [
                                    {
                                        type: 'selector',
                                        value: '.card-button',
                                        message: 'We need to style .card-button!',
                                        hint: 'Add .card-button { } to your CSS'
                                    },
                                    {
                                        type: 'pattern',
                                        value: '\\.card:hover',
                                        message: 'Add a :hover rule for the card!',
                                        hint: 'Use .card:hover { } for hover effects'
                                    },
                                    {
                                        type: 'property',
                                        value: 'transform',
                                        message: 'Add transform to lift the card on hover!',
                                        hint: 'Try transform: translateY(-8px);'
                                    }
                                ]
                            }
                        }
                    ],
                    learningObjectives: [
                        'Learn how to structure card components',
                        'Master box-shadow for depth effects',
                        'Understand object-fit for images',
                        'Create hover effects with transform',
                        'Build reusable UI components'
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
                    steps: [
                        {
                            title: 'Create the Form Container',
                            description: 'Let\'s start with a form element!',
                            instruction: 'Add this HTML:',
                            code: `<form class="contact-form" id="contact-form">
</form>`,
                            codeFile: 'index.html',
                            tip: 'Using <form> instead of <div> gives us built-in form features!',
                            explanation: 'What this does:\n• <form> - Semantic HTML for forms\n• id - Lets JavaScript find this form\n• class - For styling'
                        },
                        {
                            title: 'Add the Form Title',
                            description: 'Let\'s add a heading!',
                            instruction: 'Add this inside the form:',
                            code: `<form class="contact-form" id="contact-form">
  <h2>Get In Touch</h2>
</form>`,
                            codeFile: 'index.html',
                            tip: 'A clear title tells users what the form is for!',
                            explanation: 'What this does:\n• <h2> - Main heading for the form\n• Welcomes users and sets expectations'
                        },
                        {
                            title: 'Create Name Input Group',
                            description: 'Let\'s add a name field!',
                            instruction: 'Add this after the heading:',
                            code: `<div class="form-group">
  <label for="name">Name *</label>
  <input type="text" id="name" name="name" placeholder="Your Name" required>
  <span class="error-message" id="name-error"></span>
</div>`,
                            codeFile: 'index.html',
                            tip: 'The * shows it\'s required, and the error span will show validation messages!',
                            explanation: 'What this does:\n• <label> - Describes the input\n• <input> - Text field for name\n• required - Makes it mandatory\n• error-message span - Shows validation errors'
                        },
                        {
                            title: 'Create Email Input Group',
                            description: 'Let\'s add an email field!',
                            instruction: 'Add this after the name group:',
                            code: `<div class="form-group">
  <label for="email">Email *</label>
  <input type="email" id="email" name="email" placeholder="your@email.com" required>
  <span class="error-message" id="email-error"></span>
</div>`,
                            codeFile: 'index.html',
                            tip: 'type="email" automatically validates email format!',
                            explanation: 'What this does:\n• type="email" - Special input for emails\n• Browser validates email format automatically\n• Shows email keyboard on mobile'
                        },
                        {
                            title: 'Create Subject Input Group',
                            description: 'Let\'s add an optional subject field!',
                            instruction: 'Add this after the email group:',
                            code: `<div class="form-group">
  <label for="subject">Subject</label>
  <input type="text" id="subject" name="subject" placeholder="What's this about?">
</div>`,
                            codeFile: 'index.html',
                            tip: 'No * means this field is optional!',
                            explanation: 'What this does:\n• Optional field (no required attribute)\n• Lets users specify what they\'re contacting about\n• No error span needed since it\'s optional'
                        },
                        {
                            title: 'Create Message Textarea',
                            description: 'Let\'s add a message field!',
                            instruction: 'Add this after the subject group:',
                            code: `<div class="form-group">
  <label for="message">Message *</label>
  <textarea id="message" name="message" rows="5" placeholder="Tell us what's on your mind..." required></textarea>
  <span class="error-message" id="message-error"></span>
</div>`,
                            codeFile: 'index.html',
                            tip: 'textarea is perfect for longer text input!',
                            explanation: 'What this does:\n• <textarea> - Multi-line text input\n• rows="5" - Shows 5 lines by default\n• required - Makes it mandatory'
                        },
                        {
                            title: 'Add Submit Button',
                            description: 'Let\'s add a button to send the form!',
                            instruction: 'Add this after the message group:',
                            code: `<button type="submit" class="submit-btn">
  <span class="btn-text">Send Message</span>
  <span class="btn-loading hidden">Sending...</span>
</button>`,
                            codeFile: 'index.html',
                            tip: 'Two spans let us switch between normal and loading text!',
                            explanation: 'What this does:\n• type="submit" - Submits the form\n• Two spans - One for normal, one for loading state\n• hidden class - Hides loading text initially'
                        },
                        {
                            title: 'Add Status Message Area',
                            description: 'Let\'s add a place for success/error messages!',
                            instruction: 'Add this after the button:',
                            code: `<div class="form-status" id="form-status"></div>`,
                            codeFile: 'index.html',
                            tip: 'This will show "Message sent!" or error messages!',
                            explanation: 'What this does:\n• Empty div that JavaScript will fill\n• Shows feedback after form submission\n• Hidden by default'
                        },
                        {
                            title: 'Style the Form Container',
                            description: 'Let\'s make the form look beautiful!',
                            instruction: 'Add this CSS:',
                            code: `.contact-form {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2.5rem;
  background: #667eea;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
}

.contact-form h2 {
  color: white;
  text-align: center;
  margin: 0 0 2rem 0;
  font-size: 2rem;
  font-weight: 700;
}`,
                            codeFile: 'styles.css',
                            tip: 'The purple gradient background makes it stand out!',
                            explanation: 'What this does:\n• background: #667eea - Purple background\n• border-radius: 20px - Rounded corners\n• box-shadow - Adds depth\n• Centers the form on the page'
                        },
                        {
                            title: 'Style Form Groups',
                            description: 'Let\'s style the input containers!',
                            instruction: 'Add this CSS:',
                            code: `.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: white;
  font-size: 0.95rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'display: block makes labels sit above inputs!',
                            explanation: 'What this does:\n• margin-bottom - Spaces out form fields\n• display: block - Labels on their own line\n• color: white - White text on purple background'
                        },
                        {
                            title: 'Style Input Fields',
                            description: 'Let\'s style the text inputs and textarea!',
                            instruction: 'Add this CSS:',
                            code: `.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.9rem 1rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.95);
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}`,
                            codeFile: 'styles.css',
                            tip: 'The :focus styles make inputs lift up when clicked!',
                            explanation: 'What this does:\n• width: 100% - Full width inputs\n• border-radius - Rounded corners\n• :focus - Special styling when typing\n• transform: translateY(-2px) - Lifts up slightly'
                        },
                        {
                            title: 'Style Error States',
                            description: 'Let\'s show when fields have errors!',
                            instruction: 'Add this CSS:',
                            code: `.form-group input.error,
.form-group textarea.error {
  border: 2px solid #ff6b6b;
  background: #fff5f5;
}

.error-message {
  display: block;
  color: #ffe5e5;
  font-size: 0.85rem;
  margin-top: 0.4rem;
  min-height: 1.2rem;
  font-weight: 500;
}`,
                            codeFile: 'styles.css',
                            tip: 'Red border and pink background show errors clearly!',
                            explanation: 'What this does:\n• .error class - Applied by JavaScript\n• Red border shows invalid fields\n• error-message - Shows what\'s wrong'
                        },
                        {
                            title: 'Style Submit Button',
                            description: 'Let\'s make the button look clickable!',
                            instruction: 'Add this CSS:',
                            code: `.submit-btn {
  width: 100%;
  background: white;
  color: #667eea;
  border: none;
  padding: 1.1rem;
  font-size: 1.05rem;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
}

.submit-btn:disabled {
  background: rgba(255, 255, 255, 0.6);
  cursor: not-allowed;
}`,
                            codeFile: 'styles.css',
                            tip: 'The button lifts up on hover for a nice effect!',
                            explanation: 'What this does:\n• width: 100% - Full width button\n• :hover - Lifts up when mouse over\n• :disabled - Grayed out when submitting'
                        },
                        {
                            title: 'Style Loading State',
                            description: 'Let\'s handle the loading animation!',
                            instruction: 'Add this CSS:',
                            code: `.btn-loading {
  display: none;
}

.submit-btn.loading .btn-text {
  display: none;
}

.submit-btn.loading .btn-loading {
  display: inline;
}`,
                            codeFile: 'styles.css',
                            tip: 'This swaps the button text when submitting!',
                            explanation: 'What this does:\n• Hides loading text by default\n• When .loading class added, swaps the text\n• Shows "Sending..." instead of "Send Message"'
                        },
                        {
                            title: 'Style Status Messages',
                            description: 'Let\'s style success and error messages!',
                            instruction: 'Add this CSS:',
                            code: `.form-status {
  margin-top: 1rem;
  padding: 0.9rem;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  display: none;
}

.form-status.success {
  background: white;
  color: #10b981;
  display: block;
}

.form-status.error {
  background: white;
  color: #ef4444;
  display: block;
}`,
                            codeFile: 'styles.css',
                            tip: 'Green for success, red for errors!',
                            explanation: 'What this does:\n• Hidden by default\n• .success class - Green text\n• .error class - Red text\n• display: block - Shows when class added'
                        },
                        {
                            title: 'Add Form Validation',
                            description: 'Let\'s validate the form with JavaScript!',
                            instruction: 'Add this JavaScript:',
                            code: `const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Clear previous errors
  document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
  document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
  
  let isValid = true;
  
  // Validate name
  if (nameInput.value.trim() === '') {
    nameInput.classList.add('error');
    document.getElementById('name-error').textContent = 'Name is required';
    isValid = false;
  }
  
  // Validate email
  if (emailInput.value.trim() === '') {
    emailInput.classList.add('error');
    document.getElementById('email-error').textContent = 'Email is required';
    isValid = false;
  }
  
  // Validate message
  if (messageInput.value.trim() === '') {
    messageInput.classList.add('error');
    document.getElementById('message-error').textContent = 'Message is required';
    isValid = false;
  }
  
  if (isValid) {
    // Form is valid, proceed with submission
    submitForm();
  }
});`,
                            codeFile: 'script.js',
                            tip: 'e.preventDefault() stops the form from reloading the page!',
                            explanation: 'What this does:\n• Listens for form submission\n• Checks if required fields are filled\n• Adds error class and messages if invalid\n• Calls submitForm() if everything is valid'
                        },
                        {
                            title: 'Add Form Submission',
                            description: 'Let\'s handle the actual form submission!',
                            instruction: 'Add this JavaScript:',
                            code: `function submitForm() {
  const submitBtn = document.querySelector('.submit-btn');
  const formStatus = document.getElementById('form-status');
  
  // Show loading state
  submitBtn.classList.add('loading');
  submitBtn.disabled = true;
  
  // Simulate API call (replace with real submission)
  setTimeout(() => {
    // Success!
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
    
    formStatus.className = 'form-status success';
    formStatus.textContent = 'Message sent successfully!';
    
    // Reset form
    form.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      formStatus.style.display = 'none';
    }, 5000);
  }, 2000);
}`,
                            codeFile: 'script.js',
                            tip: 'Replace the setTimeout with a real API call to your backend!',
                            explanation: 'What this does:\n• Shows loading state on button\n• Simulates sending (2 second delay)\n• Shows success message\n• Resets the form\n• Hides message after 5 seconds'
                        }
                    ],
                    learningObjectives: [
                        'Learn how to structure HTML forms',
                        'Understand form validation with JavaScript',
                        'Master form styling with CSS',
                        'Create responsive forms for mobile devices'
                    ]
                },
                html: `<form class="contact-form" id="contact-form">
  <h2>Get In Touch</h2>
  <div class="form-group">
    <label for="name">Name *</label>
    <input type="text" id="name" name="name" placeholder="Your Name" required>
    <span class="error-message" id="name-error"></span>
  </div>
  
  <div class="form-group">
    <label for="email">Email *</label>
    <input type="email" id="email" name="email" placeholder="your@email.com" required>
    <span class="error-message" id="email-error"></span>
  </div>
  
  <div class="form-group">
    <label for="subject">Subject</label>
    <input type="text" id="subject" name="subject" placeholder="What's this about?">
  </div>
  
  <div class="form-group">
    <label for="message">Message *</label>
    <textarea id="message" name="message" rows="5" placeholder="Tell us what's on your mind..." required></textarea>
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
  padding: 2.5rem;
  background: #667eea;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
}

.contact-form h2 {
  color: white;
  text-align: center;
  margin: 0 0 2rem 0;
  font-size: 2rem;
  font-weight: 700;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: white;
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.9rem 1rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.95);
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #9ca3af;
}

.form-group input.error,
.form-group textarea.error {
  border: 2px solid #ff6b6b;
  background: #fff5f5;
}

.error-message {
  display: block;
  color: #ffe5e5;
  font-size: 0.85rem;
  margin-top: 0.4rem;
  min-height: 1.2rem;
  font-weight: 500;
}

.submit-btn {
  width: 100%;
  background: white;
  color: #667eea;
  border: none;
  padding: 1.1rem;
  font-size: 1.05rem;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
}

.submit-btn:disabled {
  background: rgba(255, 255, 255, 0.6);
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
  padding: 0.9rem;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  display: none;
}

.form-status.success {
  background: white;
  color: #10b981;
  display: block;
}

.form-status.error {
  background: white;
  color: #ef4444;
  display: block;
}

@media (max-width: 768px) {
  .contact-form {
    margin: 1rem;
    padding: 2rem 1.5rem;
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

            // Image Gallery - For adoption sites, portfolios, history sites
            {
                id: 'image-gallery',
                name: 'Image Gallery Grid',
                type: 'layout',
                difficulty: 'beginner',
                hasJS: false,
                mobileFirst: true,
                tags: ['CSS Grid', 'Responsive', 'Images'],
                description: 'Responsive image gallery using CSS Grid. Perfect for pet adoption photos, game covers, cultural images, and portfolios!',
                preview: `<div class="component-preview-placeholder">
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; padding: 1rem; max-width: 450px; margin: 0 auto;">
                        <div style="overflow: hidden; border-radius: 10px;"><img src="https://picsum.photos/150/120?random=1" style="width: 100%; height: 120px; object-fit: cover; display: block;" alt="Gallery image"></div>
                        <div style="overflow: hidden; border-radius: 10px;"><img src="https://picsum.photos/150/120?random=2" style="width: 100%; height: 120px; object-fit: cover; display: block;" alt="Gallery image"></div>
                        <div style="overflow: hidden; border-radius: 10px;"><img src="https://picsum.photos/150/120?random=3" style="width: 100%; height: 120px; object-fit: cover; display: block;" alt="Gallery image"></div>
                        <div style="overflow: hidden; border-radius: 10px;"><img src="https://picsum.photos/150/120?random=4" style="width: 100%; height: 120px; object-fit: cover; display: block;" alt="Gallery image"></div>
                        <div style="overflow: hidden; border-radius: 10px;"><img src="https://picsum.photos/150/120?random=5" style="width: 100%; height: 120px; object-fit: cover; display: block;" alt="Gallery image"></div>
                        <div style="overflow: hidden; border-radius: 10px;"><img src="https://picsum.photos/150/120?random=6" style="width: 100%; height: 120px; object-fit: cover; display: block;" alt="Gallery image"></div>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Build a responsive image gallery that works on all devices',
                    duration: '35 minutes',
                    steps: [
                        {
                            title: 'Create the Gallery Container',
                            description: 'Let\'s start by making a container to hold all our images!',
                            instruction: 'Add this HTML to create the gallery:',
                            code: `<div class="gallery">
  <h2>Photo Gallery</h2>
</div>`,
                            codeFile: 'index.html',
                            tip: 'The gallery container will hold all our images in a grid layout!',
                            explanation: 'We\'re creating a simple container with a heading. Soon we\'ll add images inside!'
                        },
                        {
                            title: 'Add Your First Image',
                            description: 'Let\'s add an image to the gallery!',
                            instruction: 'Add this image inside the gallery div (after the h2):',
                            code: `<div class="gallery-item">
  <img src="https://picsum.photos/400/300?random=1" alt="Gallery image 1">
</div>`,
                            codeFile: 'index.html',
                            tip: 'We\'re using placeholder images from picsum.photos - replace these with your own images later!',
                            explanation: 'Each image is wrapped in a gallery-item div. This helps us style them individually.'
                        },
                        {
                            title: 'Add More Images',
                            description: 'Let\'s add 5 more images to fill our gallery!',
                            instruction: 'Add these images after the first one:',
                            code: `<div class="gallery-item">
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
                            codeFile: 'index.html',
                            tip: 'The ?random= number makes each placeholder image different!',
                            explanation: 'Now we have 6 images total. They\'re stacked vertically for now, but CSS Grid will fix that!'
                        },
                        {
                            title: 'Style the Gallery Container',
                            description: 'Let\'s add some basic styling to our gallery!',
                            instruction: 'Add this CSS:',
                            code: `.gallery {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
}

.gallery h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}`,
                            codeFile: 'styles.css',
                            tip: 'max-width keeps the gallery from getting too wide on big screens!',
                            explanation: 'We\'re centering the gallery and adding space around it. The heading is centered too!'
                        },
                        {
                            title: 'Create the Grid Layout',
                            description: 'Now for the magic - let\'s use CSS Grid to arrange images in columns!',
                            instruction: 'Add this CSS to create a 3-column grid:',
                            code: `.gallery {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'repeat(3, 1fr) means "make 3 equal columns"!',
                            explanation: 'CSS Grid automatically arranges our images into 3 columns. The gap adds space between them!'
                        },
                        {
                            title: 'Style the Images',
                            description: 'Let\'s make the images fill their containers nicely!',
                            instruction: 'Add this CSS for the images:',
                            code: `.gallery-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
}`,
                            codeFile: 'styles.css',
                            tip: 'object-fit: cover makes images fill the space without stretching!',
                            explanation: 'All images are now the same height (250px) and fill their containers. Rounded corners look modern!'
                        },
                        {
                            title: 'Add Hover Effect',
                            description: 'Let\'s make images zoom slightly when you hover over them!',
                            instruction: 'Add this hover effect:',
                            code: `.gallery-item {
  overflow: hidden;
  border-radius: 10px;
}

.gallery-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.gallery-item img:hover {
  transform: scale(1.05);
}`,
                            codeFile: 'styles.css',
                            tip: 'overflow: hidden prevents the zoomed image from spilling outside its container!',
                            explanation: 'When you hover, the image scales up to 105% of its size. The transition makes it smooth!'
                        },
                        {
                            title: 'Make It Responsive for Tablets',
                            description: 'Let\'s make the gallery show 2 columns on tablets!',
                            instruction: 'Add this media query:',
                            code: `@media (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1rem;
  }
}`,
                            codeFile: 'styles.css',
                            tip: 'Media queries let you change styles based on screen size!',
                            explanation: 'On screens smaller than 768px (tablets), we show 2 columns instead of 3.'
                        },
                        {
                            title: 'Make It Responsive for Phones',
                            description: 'Finally, let\'s make it show 1 column on phones!',
                            instruction: 'Add this media query:',
                            code: `@media (max-width: 480px) {
  .gallery {
    grid-template-columns: 1fr;
  }
  
  .gallery-item img {
    height: 200px;
  }
}`,
                            codeFile: 'styles.css',
                            tip: 'On small screens, one column is easier to view!',
                            explanation: 'On phones, images stack vertically in a single column. We also make them slightly shorter to fit better!'
                        }
                    ],
                    learningObjectives: [
                        'Master CSS Grid for image layouts',
                        'Learn responsive image techniques',
                        'Understand aspect ratios and object-fit',
                        'Create hover effects for galleries'
                    ]
                },
                useCases: [
                    {
                        title: 'Pet Adoption',
                        description: 'Showcase adoptable dogs and cats with photos'
                    },
                    {
                        title: 'Game History',
                        description: 'Display game covers and screenshots chronologically'
                    },
                    {
                        title: 'Cultural Heritage',
                        description: 'Present photos of indigenous traditions and artifacts'
                    }
                ]
            },

            // Timeline Component - For history websites
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
                        <div style="position: relative; padding-left: 2.5rem; border-left: 3px solid #667eea;">
                            <div style="position: absolute; left: -8px; top: 0; width: 12px; height: 12px; background: #667eea; border-radius: 50%;"></div>
                            <div style="color: #667eea; font-weight: 700; font-size: 0.85rem; margin-bottom: 0.4rem;">2015</div>
                            <h4 style="margin: 0 0 0.4rem 0; font-size: 1rem; font-weight: 700; color: #1a1a1a;">The Beginning</h4>
                            <p style="margin: 0; font-size: 0.85rem; color: #6b7280; line-height: 1.5;">Where our story started</p>
                        </div>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Build an engaging timeline to display historical events',
                    duration: '40 minutes',
                    steps: [
                        {
                            title: 'Create the Timeline Container',
                            description: 'Let\'s start by creating a container for our timeline!',
                            instruction: 'Add this HTML:',
                            code: `<div class="timeline">
  <h2>Historical Timeline</h2>
</div>`,
                            codeFile: 'index.html',
                            tip: 'A timeline shows events in chronological order - perfect for history!',
                            explanation: 'We\'re creating a container that will hold all our timeline events.'
                        },
                        {
                            title: 'Add Your First Event',
                            description: 'Let\'s add the first event to our timeline!',
                            instruction: 'Add this event inside the timeline div:',
                            code: `<div class="timeline-item">
  <div class="timeline-date">2024</div>
  <div class="timeline-content">
    <h3>Event Title</h3>
    <p>Description of what happened in this year.</p>
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Each event has a date and content - keep descriptions short!',
                            explanation: 'The timeline-item contains the year and details about what happened.'
                        },
                        {
                            title: 'Add More Events',
                            description: 'Let\'s add 3 more events to build our timeline!',
                            instruction: 'Add these events after the first one:',
                            code: `<div class="timeline-item">
  <div class="timeline-date">2020</div>
  <div class="timeline-content">
    <h3>Another Event</h3>
    <p>Something important happened this year.</p>
  </div>
</div>

<div class="timeline-item">
  <div class="timeline-date">2015</div>
  <div class="timeline-content">
    <h3>Earlier Event</h3>
    <p>This event happened earlier in history.</p>
  </div>
</div>

<div class="timeline-item">
  <div class="timeline-date">2010</div>
  <div class="timeline-content">
    <h3>First Event</h3>
    <p>This is where our story begins!</p>
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'List events from newest to oldest (or oldest to newest)!',
                            explanation: 'Now we have 4 events. They\'ll look better once we add CSS!'
                        },
                        {
                            title: 'Style the Timeline Container',
                            description: 'Let\'s add basic styling to our timeline!',
                            instruction: 'Add this CSS:',
                            code: `.timeline {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
}

.timeline h2 {
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
}`,
                            codeFile: 'styles.css',
                            tip: 'Centering the timeline makes it look professional!',
                            explanation: 'We\'re centering the timeline and adding space for the heading.'
                        },
                        {
                            title: 'Add the Vertical Line',
                            description: 'Let\'s add a vertical line down the left side!',
                            instruction: 'Add this CSS for the timeline items:',
                            code: `.timeline-item {
  position: relative;
  padding-left: 3rem;
  padding-bottom: 2rem;
  border-left: 3px solid #667eea;
}`,
                            codeFile: 'styles.css',
                            tip: 'border-left creates the vertical timeline line!',
                            explanation: 'The left border creates our timeline line. Padding makes room for content.'
                        },
                        {
                            title: 'Add the Circle Markers',
                            description: 'Let\'s add circles on the timeline line for each event!',
                            instruction: 'Add this CSS using a pseudo-element:',
                            code: `.timeline-item::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 0;
  width: 12px;
  height: 12px;
  background: #667eea;
  border-radius: 50%;
}`,
                            codeFile: 'styles.css',
                            tip: '::before creates an element without adding HTML!',
                            explanation: 'The ::before pseudo-element creates a circle marker. border-radius: 50% makes it round!'
                        },
                        {
                            title: 'Style the Date',
                            description: 'Let\'s make the dates stand out with color!',
                            instruction: 'Add this CSS for dates:',
                            code: `.timeline-date {
  color: #667eea;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'Bold, colored dates help them stand out!',
                            explanation: 'We\'re making dates bold and purple to match our timeline color.'
                        },
                        {
                            title: 'Style the Event Content',
                            description: 'Let\'s style the event titles and descriptions!',
                            instruction: 'Add this CSS:',
                            code: `.timeline-content h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 1.2rem;
}

.timeline-content p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}`,
                            codeFile: 'styles.css',
                            tip: 'Good spacing makes content easy to read!',
                            explanation: 'We\'re styling the titles and descriptions with good spacing and colors.'
                        },
                        {
                            title: 'Add Hover Effect',
                            description: 'Let\'s make events highlight when you hover over them!',
                            instruction: 'Add this hover effect:',
                            code: `.timeline-item {
  position: relative;
  padding-left: 3rem;
  padding-bottom: 2rem;
  border-left: 3px solid #667eea;
  transition: all 0.3s ease;
}

.timeline-item:hover {
  padding-left: 3.5rem;
}

.timeline-item:hover .timeline-content h3 {
  color: #667eea;
}`,
                            codeFile: 'styles.css',
                            tip: 'Subtle hover effects make timelines interactive!',
                            explanation: 'When you hover, the item shifts slightly right and the title changes color!'
                        },
                        {
                            title: 'Make It Responsive',
                            description: 'Let\'s make the timeline work great on phones!',
                            instruction: 'Add this media query:',
                            code: `@media (max-width: 768px) {
  .timeline {
    padding: 1rem;
  }
  
  .timeline-item {
    padding-left: 2rem;
  }
  
  .timeline-content h3 {
    font-size: 1rem;
  }
}`,
                            codeFile: 'styles.css',
                            tip: 'Less padding on small screens gives more room for content!',
                            explanation: 'On phones, we reduce padding and make titles slightly smaller to fit better.'
                        }
                    ],
                    learningObjectives: [
                        'Create timeline layouts with CSS',
                        'Use pseudo-elements for visual effects',
                        'Build responsive timelines',
                        'Structure historical content effectively'
                    ]
                },
                useCases: [
                    {
                        title: 'Gaming History',
                        description: 'Show evolution of games from first releases to modern'
                    },
                    {
                        title: 'PBA History',
                        description: 'Display championship wins and legendary moments'
                    },
                    {
                        title: 'Indigenous History',
                        description: 'Present cultural milestones and historical events'
                    }
                ]
            },

            // Pricing Table - For services
            {
                id: 'pricing-table',
                name: 'Pricing Table',
                type: 'ui-elements',
                difficulty: 'intermediate',
                hasJS: false,
                mobileFirst: true,
                tags: ['Flexbox', 'Business', 'Responsive'],
                description: 'Professional pricing table with featured plan highlight. Perfect for salon packages, gym memberships, and lesson pricing!',
                preview: `<div class="component-preview-placeholder">
                    <div style="display: flex; gap: 1.5rem; padding: 1.5rem; justify-content: center; flex-wrap: wrap;">
                        <div style="background: white; border: 2px solid #e5e7eb; border-radius: 16px; padding: 2rem 1.5rem; width: 180px; text-align: center;">
                            <h4 style="margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 700; color: #1a1a1a;">Basic</h4>
                            <div style="font-size: 2.5rem; font-weight: 700; color: #667eea; margin-bottom: 1.5rem;">$29<span style="font-size: 1rem; font-weight: 400; color: #6b7280;">/mo</span></div>
                            <ul style="list-style: none; padding: 0; margin: 0 0 2rem 0; text-align: left; font-size: 0.9rem; color: #6b7280;">
                                <li style="padding: 0.5rem 0; border-bottom: 1px solid #e5e7eb;">5 Projects</li>
                                <li style="padding: 0.5rem 0; border-bottom: 1px solid #e5e7eb;">Basic Support</li>
                                <li style="padding: 0.5rem 0;">1 GB Storage</li>
                            </ul>
                            <button style="width: 100%; padding: 0.75rem; background: #667eea; color: white; border: none; border-radius: 10px; font-weight: 600; cursor: pointer;">Select</button>
                        </div>
                        <div style="background: #667eea; border: 2px solid #667eea; border-radius: 16px; padding: 2rem 1.5rem; width: 180px; text-align: center; transform: scale(1.05); position: relative; color: white;">
                            <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #10b981; color: white; padding: 0.3rem 1rem; border-radius: 20px; font-size: 0.75rem; font-weight: 700;">Popular</div>
                            <h4 style="margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 700;">Pro</h4>
                            <div style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1.5rem;">$49<span style="font-size: 1rem; font-weight: 400;">/mo</span></div>
                            <ul style="list-style: none; padding: 0; margin: 0 0 2rem 0; text-align: left; font-size: 0.9rem;">
                                <li style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.2);">Unlimited</li>
                                <li style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.2);">Priority Support</li>
                                <li style="padding: 0.5rem 0;">10 GB Storage</li>
                            </ul>
                            <button style="width: 100%; padding: 0.75rem; background: white; color: #667eea; border: none; border-radius: 10px; font-weight: 600; cursor: pointer;">Select</button>
                        </div>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Build a professional pricing table for services or products',
                    duration: '35 minutes',
                    steps: [
                        {
                            title: 'Create the Pricing Container',
                            description: 'Let\'s start by creating a container for our pricing plans!',
                            instruction: 'Add this HTML:',
                            code: `<div class="pricing-section">
  <h2>Choose Your Plan</h2>
  <div class="pricing-cards">
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'The pricing-cards div will hold all our pricing options!',
                            explanation: 'We\'re creating a section with a heading and a container for our pricing cards.'
                        },
                        {
                            title: 'Add the Basic Plan',
                            description: 'Let\'s create our first pricing card - the Basic plan!',
                            instruction: 'Add this card inside pricing-cards:',
                            code: `<div class="pricing-card">
  <h3>Basic</h3>
  <div class="price">$29<span>/month</span></div>
  <ul class="features">
    <li>5 Projects</li>
    <li>Basic Support</li>
    <li>1 GB Storage</li>
  </ul>
  <button class="btn-select">Select Plan</button>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Each plan has a name, price, features list, and button!',
                            explanation: 'The pricing card shows the plan name, price, what\'s included, and a button to select it.'
                        },
                        {
                            title: 'Add the Pro Plan',
                            description: 'Let\'s add a Pro plan - this will be our featured option!',
                            instruction: 'Add this card after the Basic plan:',
                            code: `<div class="pricing-card featured">
  <div class="badge">Popular</div>
  <h3>Pro</h3>
  <div class="price">$49<span>/month</span></div>
  <ul class="features">
    <li>Unlimited Projects</li>
    <li>Priority Support</li>
    <li>10 GB Storage</li>
    <li>Advanced Features</li>
  </ul>
  <button class="btn-select">Select Plan</button>
</div>`,
                            codeFile: 'index.html',
                            tip: 'The "featured" class will make this plan stand out!',
                            explanation: 'The Pro plan has more features and a "Popular" badge to highlight it!'
                        },
                        {
                            title: 'Add the Premium Plan',
                            description: 'Let\'s add one more plan - the Premium option!',
                            instruction: 'Add this card after the Pro plan:',
                            code: `<div class="pricing-card">
  <h3>Premium</h3>
  <div class="price">$99<span>/month</span></div>
  <ul class="features">
    <li>Unlimited Everything</li>
    <li>24/7 Support</li>
    <li>100 GB Storage</li>
    <li>All Features</li>
    <li>Custom Domain</li>
  </ul>
  <button class="btn-select">Select Plan</button>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Premium plans usually have the most features!',
                            explanation: 'Now we have 3 pricing tiers - Basic, Pro, and Premium!'
                        },
                        {
                            title: 'Style the Section',
                            description: 'Let\'s add basic styling to our pricing section!',
                            instruction: 'Add this CSS:',
                            code: `.pricing-section {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 2rem;
  text-align: center;
}

.pricing-section h2 {
  margin-bottom: 3rem;
  font-size: 2rem;
  color: #333;
}`,
                            codeFile: 'styles.css',
                            tip: 'Centering everything makes pricing tables look professional!',
                            explanation: 'We\'re centering the section and adding space for the heading.'
                        },
                        {
                            title: 'Create the Card Layout',
                            description: 'Let\'s use Flexbox to arrange cards side by side!',
                            instruction: 'Add this CSS:',
                            code: `.pricing-cards {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}`,
                            codeFile: 'styles.css',
                            tip: 'Flexbox makes it easy to line up cards horizontally!',
                            explanation: 'The cards now sit side by side with space between them!'
                        },
                        {
                            title: 'Style the Pricing Cards',
                            description: 'Let\'s style each pricing card!',
                            instruction: 'Add this CSS:',
                            code: `.pricing-card {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 15px;
  padding: 2rem;
  width: 300px;
  position: relative;
  transition: transform 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}`,
                            codeFile: 'styles.css',
                            tip: 'The hover effect makes cards lift up - very modern!',
                            explanation: 'Cards have rounded corners, borders, and lift up when you hover over them!'
                        },
                        {
                            title: 'Style the Featured Card',
                            description: 'Let\'s make the Pro plan stand out with special styling!',
                            instruction: 'Add this CSS:',
                            code: `.pricing-card.featured {
  background: #667eea;
  border-color: #667eea;
  transform: scale(1.05);
  color: white;
}

.pricing-card.featured h3,
.pricing-card.featured .price {
  color: white;
}`,
                            codeFile: 'styles.css',
                            tip: 'Making the featured plan bigger and colorful draws attention!',
                            explanation: 'The featured card is slightly bigger, has a purple background, and white text!'
                        },
                        {
                            title: 'Add the Popular Badge',
                            description: 'Let\'s style the "Popular" badge on the featured plan!',
                            instruction: 'Add this CSS:',
                            code: `.badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #4CAF50;
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}`,
                            codeFile: 'styles.css',
                            tip: 'position: absolute lets us place the badge at the top!',
                            explanation: 'The badge sits at the top center of the featured card with a green background!'
                        },
                        {
                            title: 'Style Plan Names and Prices',
                            description: 'Let\'s make the plan names and prices look great!',
                            instruction: 'Add this CSS:',
                            code: `.pricing-card h3 {
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  color: #333;
}

.price {
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 1.5rem;
}

.price span {
  font-size: 1rem;
  font-weight: 400;
  color: #666;
}`,
                            codeFile: 'styles.css',
                            tip: 'Big, bold prices grab attention!',
                            explanation: 'Plan names are clear, prices are big and bold, and "/month" is smaller!'
                        },
                        {
                            title: 'Style the Features List',
                            description: 'Let\'s style the list of features for each plan!',
                            instruction: 'Add this CSS:',
                            code: `.features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
}

.features li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.features li:last-child {
  border-bottom: none;
}`,
                            codeFile: 'styles.css',
                            tip: 'Lines between features make them easy to read!',
                            explanation: 'Each feature is separated by a line, making the list clear and organized!'
                        },
                        {
                            title: 'Style the Select Buttons',
                            description: 'Let\'s style the buttons to select a plan!',
                            instruction: 'Add this CSS:',
                            code: `.btn-select {
  width: 100%;
  padding: 0.9rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-select:hover {
  background: #5568d3;
}

.pricing-card.featured .btn-select {
  background: white;
  color: #667eea;
}`,
                            codeFile: 'styles.css',
                            tip: 'The featured card has an inverted button color!',
                            explanation: 'Buttons are full-width and change color on hover. The featured card\'s button is white!'
                        },
                        {
                            title: 'Make It Responsive',
                            description: 'Let\'s make pricing cards stack on smaller screens!',
                            instruction: 'Add this media query:',
                            code: `@media (max-width: 968px) {
  .pricing-cards {
    flex-direction: column;
  }
  
  .pricing-card {
    width: 100%;
    max-width: 400px;
  }
  
  .pricing-card.featured {
    transform: scale(1);
  }
}`,
                            codeFile: 'styles.css',
                            tip: 'On small screens, cards stack vertically!',
                            explanation: 'On tablets and phones, cards stack vertically and the featured card returns to normal size!'
                        }
                    ],
                    learningObjectives: [
                        'Design effective pricing layouts',
                        'Create visual hierarchy for featured plans',
                        'Build responsive pricing tables',
                        'Use CSS to highlight important options'
                    ]
                },
                useCases: [
                    {
                        title: 'Salon Packages',
                        description: 'Display haircut, spa, and beauty service pricing'
                    },
                    {
                        title: 'Gym Memberships',
                        description: 'Show different fitness membership tiers'
                    },
                    {
                        title: 'Music Lessons',
                        description: 'Present lesson packages and pricing options'
                    }
                ]
            },

            // Testimonial Section
            {
                id: 'testimonials',
                name: 'Testimonials Section',
                type: 'ui-elements',
                difficulty: 'beginner',
                hasJS: false,
                mobileFirst: true,
                tags: ['Flexbox', 'Social Proof', 'Responsive'],
                description: 'Customer testimonials section with profile photos and quotes. Build trust for your salon, gym, or music school!',
                preview: `<div class="component-preview-placeholder">
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; padding: 1.5rem; max-width: 450px; margin: 0 auto;">
                        <div style="background: white; padding: 1.5rem; border-radius: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                                <img src="https://i.pravatar.cc/60?img=1" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;" alt="Customer">
                                <div>
                                    <h5 style="margin: 0; color: #1a1a1a; font-size: 0.95rem; font-weight: 700;">Sarah Johnson</h5>
                                    <p style="margin: 0.2rem 0 0 0; color: #667eea; font-size: 0.8rem; font-weight: 600;">Happy Customer</p>
                                </div>
                            </div>
                            <p style="color: #6b7280; line-height: 1.6; font-style: italic; margin: 0; font-size: 0.85rem;">"Amazing service! Highly recommend to everyone."</p>
                        </div>
                        <div style="background: white; padding: 1.5rem; border-radius: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                                <img src="https://i.pravatar.cc/60?img=5" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;" alt="Customer">
                                <div>
                                    <h5 style="margin: 0; color: #1a1a1a; font-size: 0.95rem; font-weight: 700;">Mike Chen</h5>
                                    <p style="margin: 0.2rem 0 0 0; color: #667eea; font-size: 0.8rem; font-weight: 600;">Regular Client</p>
                                </div>
                            </div>
                            <p style="color: #6b7280; line-height: 1.6; font-style: italic; margin: 0; font-size: 0.85rem;">"Best experience ever! Will definitely come back."</p>
                        </div>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Build a testimonials section to showcase customer reviews',
                    duration: '30 minutes',
                    steps: [
                        {
                            title: 'Create the Testimonials Container',
                            description: 'Let\'s start by creating a section for customer reviews!',
                            instruction: 'Add this HTML:',
                            code: `<section class="testimonials">
  <h2>What Our Customers Say</h2>
  <div class="testimonial-grid">
  </div>
</section>`,
                            codeFile: 'index.html',
                            tip: 'Testimonials build trust with potential customers!',
                            explanation: 'We\'re creating a section with a heading and a grid to hold testimonial cards.'
                        },
                        {
                            title: 'Add First Testimonial',
                            description: 'Let\'s add our first customer review!',
                            instruction: 'Add this testimonial inside the grid:',
                            code: `<div class="testimonial-card">
  <div class="customer-info">
    <img src="https://i.pravatar.cc/100?img=1" alt="Customer" class="customer-photo">
    <div>
      <h4>Sarah Johnson</h4>
      <p class="customer-role">Happy Customer</p>
    </div>
  </div>
  <p class="testimonial-text">"Amazing service! Highly recommend to everyone. The team was professional and friendly."</p>
</div>`,
                            codeFile: 'index.html',
                            tip: 'We\'re using pravatar.cc for placeholder photos - replace with real customer photos!',
                            explanation: 'Each testimonial has a photo, name, role, and their review quote.'
                        },
                        {
                            title: 'Add More Testimonials',
                            description: 'Let\'s add 2 more customer reviews!',
                            instruction: 'Add these testimonials:',
                            code: `<div class="testimonial-card">
  <div class="customer-info">
    <img src="https://i.pravatar.cc/100?img=5" alt="Customer" class="customer-photo">
    <div>
      <h4>Mike Chen</h4>
      <p class="customer-role">Regular Client</p>
    </div>
  </div>
  <p class="testimonial-text">"Best experience ever! Will definitely come back. Five stars all the way!"</p>
</div>

<div class="testimonial-card">
  <div class="customer-info">
    <img src="https://i.pravatar.cc/100?img=9" alt="Customer" class="customer-photo">
    <div>
      <h4>Emma Davis</h4>
      <p class="customer-role">Satisfied Customer</p>
    </div>
  </div>
  <p class="testimonial-text">"Exceeded my expectations! The quality and attention to detail were outstanding."</p>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Three testimonials is a good number - not too few, not too many!',
                            explanation: 'Now we have 3 testimonials from different customers!'
                        },
                        {
                            title: 'Style the Section',
                            description: 'Let\'s add basic styling to the testimonials section!',
                            instruction: 'Add this CSS:',
                            code: `.testimonials {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 2rem;
  background: #f9fafb;
}

.testimonials h2 {
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
  font-size: 2rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'A light background helps testimonials stand out!',
                            explanation: 'We\'re centering the section and giving it a light gray background.'
                        },
                        {
                            title: 'Create the Grid Layout',
                            description: 'Let\'s arrange testimonials in a grid!',
                            instruction: 'Add this CSS:',
                            code: `.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'CSS Grid makes it easy to create equal-width columns!',
                            explanation: 'The testimonials now sit side by side in 3 equal columns!'
                        },
                        {
                            title: 'Style the Testimonial Cards',
                            description: 'Let\'s style each testimonial card!',
                            instruction: 'Add this CSS:',
                            code: `.testimonial-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}`,
                            codeFile: 'styles.css',
                            tip: 'Cards lift up on hover for a nice interactive effect!',
                            explanation: 'Each card has a white background, shadow, and lifts up when you hover!'
                        },
                        {
                            title: 'Style Customer Info',
                            description: 'Let\'s style the customer photo and name section!',
                            instruction: 'Add this CSS:',
                            code: `.customer-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.customer-photo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.customer-info h4 {
  margin: 0;
  color: #333;
  font-size: 1.1rem;
}

.customer-role {
  margin: 0.2rem 0 0 0;
  color: #667eea;
  font-size: 0.85rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'border-radius: 50% makes the photo circular!',
                            explanation: 'The photo and name sit side by side. Photos are round and names are styled!'
                        },
                        {
                            title: 'Style the Quote Text',
                            description: 'Let\'s style the testimonial quote!',
                            instruction: 'Add this CSS:',
                            code: `.testimonial-text {
  color: #666;
  line-height: 1.6;
  font-style: italic;
  margin: 0;
}`,
                            codeFile: 'styles.css',
                            tip: 'Italic text makes quotes look more authentic!',
                            explanation: 'The quote text is gray, italic, and has good line spacing for readability!'
                        },
                        {
                            title: 'Make It Responsive',
                            description: 'Let\'s make testimonials work on all screen sizes!',
                            instruction: 'Add these media queries:',
                            code: `@media (max-width: 968px) {
  .testimonial-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .testimonials {
    padding: 1.5rem;
  }
  
  .testimonial-card {
    padding: 1.5rem;
  }
}`,
                            codeFile: 'styles.css',
                            tip: 'On small screens, testimonials stack vertically!',
                            explanation: 'On tablets and phones, testimonials stack in a single column for easy reading!'
                        }
                    ],
                    learningObjectives: [
                        'Design testimonial card layouts',
                        'Create visually appealing quote displays',
                        'Build responsive testimonial grids',
                        'Use CSS for professional styling'
                    ]
                },
                useCases: [
                    {
                        title: 'Salon Reviews',
                        description: 'Show happy customer testimonials and transformations'
                    },
                    {
                        title: 'Fitness Success',
                        description: 'Display client success stories and transformations'
                    },
                    {
                        title: 'Student Reviews',
                        description: 'Showcase music student progress and feedback'
                    }
                ]
            },

            // Footer Component
            {
                id: 'footer',
                name: 'Footer with Social Links',
                type: 'navigation',
                difficulty: 'beginner',
                hasJS: false,
                mobileFirst: true,
                tags: ['Flexbox', 'Social Media', 'Essential'],
                description: 'Complete footer with contact info, social media links, and copyright. Essential for every website!',
                preview: `<div class="component-preview-placeholder">
                    <div style="background: #2c3e50; color: white; padding: 2rem 1.5rem 1rem 1.5rem; border-radius: 12px;">
                        <div style="display: flex; justify-content: space-between; gap: 2rem; margin-bottom: 1.5rem; font-size: 0.85rem; flex-wrap: wrap;">
                            <div style="flex: 1; min-width: 150px;">
                                <h5 style="margin: 0 0 0.75rem 0; font-size: 1rem; font-weight: 700; color: white;">My Company</h5>
                                <p style="margin: 0; color: #bdc3c7; font-size: 0.8rem; line-height: 1.5;">Building amazing websites since 2024</p>
                            </div>
                            <div style="flex: 1; min-width: 120px;">
                                <h5 style="margin: 0 0 0.75rem 0; font-size: 1rem; font-weight: 700; color: white;">Quick Links</h5>
                                <div style="display: flex; flex-direction: column; gap: 0.4rem;">
                                    <a href="#" style="color: #bdc3c7; text-decoration: none; font-size: 0.8rem;">Home</a>
                                    <a href="#" style="color: #bdc3c7; text-decoration: none; font-size: 0.8rem;">About</a>
                                    <a href="#" style="color: #bdc3c7; text-decoration: none; font-size: 0.8rem;">Contact</a>
                                </div>
                            </div>
                            <div style="flex: 1; min-width: 120px;">
                                <h5 style="margin: 0 0 0.75rem 0; font-size: 1rem; font-weight: 700; color: white;">Follow Us</h5>
                                <div style="display: flex; gap: 0.75rem;">
                                    <div style="width: 36px; height: 36px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                        </svg>
                                    </div>
                                    <div style="width: 36px; height: 36px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="text-align: center; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1);">
                            <p style="margin: 0; color: #bdc3c7; font-size: 0.8rem;">© 2024 My Company. All rights reserved.</p>
                        </div>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Build a professional footer with contact and social media links',
                    duration: '25 minutes',
                    steps: [
                        {
                            title: 'Create the Footer Container',
                            description: 'Let\'s start by creating the footer structure!',
                            instruction: 'Add this HTML at the bottom of your page:',
                            code: `<footer class="site-footer">
  <div class="footer-content">
  </div>
</footer>`,
                            codeFile: 'index.html',
                            tip: 'The footer goes at the very bottom of your website!',
                            explanation: 'We\'re creating a footer element with a container for our content.'
                        },
                        {
                            title: 'Add Company Info',
                            description: 'Let\'s add your company name and contact info!',
                            instruction: 'Add this inside footer-content:',
                            code: `<div class="footer-section">
  <h3>My Company</h3>
  <p>Building amazing websites since 2024</p>
  <p>Email: contact@mycompany.com</p>
  <p>Phone: (123) 456-7890</p>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Replace with your real company name and contact info!',
                            explanation: 'This section shows your company name, tagline, and contact information.'
                        },
                        {
                            title: 'Add Quick Links',
                            description: 'Let\'s add a section with quick navigation links!',
                            instruction: 'Add this after the company info:',
                            code: `<div class="footer-section">
  <h3>Quick Links</h3>
  <ul class="footer-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Quick links help visitors navigate your site from the footer!',
                            explanation: 'A list of important links makes navigation easy from anywhere on the page.'
                        },
                        {
                            title: 'Add Social Media Links',
                            description: 'Let\'s add social media icons using Lucide!',
                            instruction: 'Add this social section:',
                            code: `<div class="footer-section">
  <h3>Follow Us</h3>
  <div class="social-links">
    <a href="#" aria-label="Facebook"><i data-lucide="facebook"></i></a>
    <a href="#" aria-label="Twitter"><i data-lucide="twitter"></i></a>
    <a href="#" aria-label="Instagram"><i data-lucide="instagram"></i></a>
    <a href="#" aria-label="Youtube"><i data-lucide="youtube"></i></a>
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Remember to call lucide.createIcons() in your JavaScript!',
                            explanation: 'Social media icons let visitors follow you on different platforms!'
                        },
                        {
                            title: 'Add Copyright',
                            description: 'Let\'s add a copyright notice at the bottom!',
                            instruction: 'Add this after footer-content (but inside footer):',
                            code: `<div class="footer-bottom">
  <p>&copy; 2024 My Company. All rights reserved.</p>
</div>`,
                            codeFile: 'index.html',
                            tip: 'The &copy; symbol creates the -• copyright symbol!',
                            explanation: 'A copyright notice protects your content and looks professional!'
                        },
                        {
                            title: 'Style the Footer',
                            description: 'Let\'s give the footer a dark background!',
                            instruction: 'Add this CSS:',
                            code: `.site-footer {
  background: #2c3e50;
  color: white;
  padding: 3rem 2rem 1rem 2rem;
  margin-top: 4rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'Dark footers are a popular design choice!',
                            explanation: 'We\'re giving the footer a dark blue background with white text.'
                        },
                        {
                            title: 'Create Footer Layout',
                            description: 'Let\'s arrange footer sections side by side!',
                            instruction: 'Add this CSS:',
                            code: `.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-section {
  flex: 1;
}

.footer-section h3 {
  margin: 0 0 1rem 0;
  color: white;
  font-size: 1.2rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'Flexbox makes the sections spread out evenly!',
                            explanation: 'The three sections now sit side by side with equal width!'
                        },
                        {
                            title: 'Style Footer Links',
                            description: 'Let\'s style the quick links list!',
                            instruction: 'Add this CSS:',
                            code: `.footer-links {
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
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: white;
}`,
                            codeFile: 'styles.css',
                            tip: 'Links change to white on hover for a nice effect!',
                            explanation: 'Links are gray by default and turn white when you hover over them!'
                        },
                        {
                            title: 'Style Social Icons',
                            description: 'Let\'s style the social media icons!',
                            instruction: 'Add this CSS:',
                            code: `.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  color: white;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: #667eea;
  transform: translateY(-3px);
}`,
                            codeFile: 'styles.css',
                            tip: 'Icons lift up and change color on hover!',
                            explanation: 'Social icons are circular and have a nice hover effect!'
                        },
                        {
                            title: 'Style Copyright Section',
                            description: 'Let\'s style the copyright notice!',
                            instruction: 'Add this CSS:',
                            code: `.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.footer-bottom p {
  margin: 0;
  color: #bdc3c7;
  font-size: 0.9rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'A subtle line separates the copyright from the rest!',
                            explanation: 'The copyright is centered with a line above it!'
                        },
                        {
                            title: 'Make It Responsive',
                            description: 'Let\'s make the footer stack on mobile!',
                            instruction: 'Add this media query:',
                            code: `@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 2rem;
  }
  
  .site-footer {
    padding: 2rem 1rem 1rem 1rem;
  }
  
  .social-links {
    justify-content: center;
  }
}`,
                            codeFile: 'styles.css',
                            tip: 'On phones, footer sections stack vertically!',
                            explanation: 'On small screens, the footer sections stack and social icons center!'
                        }
                    ],
                    learningObjectives: [
                        'Structure footer content effectively',
                        'Add social media icons with Lucide',
                        'Create responsive footer layouts',
                        'Style footer for visual consistency'
                    ]
                },
                useCases: [
                    {
                        title: 'All Websites',
                        description: 'Every website needs a footer with contact and social links'
                    },
                    {
                        title: 'Business Sites',
                        description: 'Display business hours, location, and contact methods'
                    },
                    {
                        title: 'Portfolio Sites',
                        description: 'Link to social profiles and contact information'
                    }
                ]
            },

            // NEW COMPONENTS START HERE

            // Before-After Image Slider
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
                    steps: [
                        {
                            title: 'Create the Main Container',
                            description: 'Let\'s start with a container for our slider!',
                            instruction: 'Add this HTML:',
                            code: `<div class="before-after-slider">
</div>`,
                            codeFile: 'index.html',
                            tip: 'This container will hold both images and the slider handle!',
                            explanation: 'What this does:\n• <div class="before-after-slider"> - Main container for the slider component'
                        },
                        {
                            title: 'Add the Before Image',
                            description: 'Let\'s add the "before" image!',
                            instruction: 'Add this inside the container:',
                            code: `<div class="before-after-slider">
  <div class="before-image">
    <img src="before.jpg" alt="Before transformation">
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'This image will always be fully visible!',
                            explanation: 'What this does:\n• <div class="before-image"> - Container for before image\n• <img> - The actual before image\n• alt attribute - Describes the image for accessibility'
                        },
                        {
                            title: 'Add the After Image',
                            description: 'Now let\'s add the "after" image!',
                            instruction: 'Add this after the before image:',
                            code: `<div class="before-after-slider">
  <div class="before-image">
    <img src="before.jpg" alt="Before transformation">
  </div>
  <div class="after-image">
    <img src="after.jpg" alt="After transformation">
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'We\'ll use CSS to clip this image so only part shows!',
                            explanation: 'What this does:\n• <div class="after-image"> - Container for after image\n• This will be positioned on top of the before image'
                        },
                        {
                            title: 'Add the Slider Handle',
                            description: 'Let\'s add the draggable handle!',
                            instruction: 'Add this after the images:',
                            code: `<div class="before-after-slider">
  <div class="before-image">
    <img src="before.jpg" alt="Before transformation">
  </div>
  <div class="after-image">
    <img src="after.jpg" alt="After transformation">
  </div>
  <div class="slider-handle"></div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Users will drag this handle to compare images!',
                            explanation: 'What this does:\n• <div class="slider-handle"> - The draggable divider\n• This will sit between the two images'
                        },
                        {
                            title: 'Style the Container',
                            description: 'Let\'s style the main container!',
                            instruction: 'Add this CSS:',
                            code: `.before-after-slider {
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 400px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}`,
                            codeFile: 'styles.css',
                            tip: 'position: relative lets us position images absolutely inside!',
                            explanation: 'What this does:\n• position: relative - Creates positioning context\n• overflow: hidden - Hides anything outside the container\n• border-radius - Rounds the corners'
                        },
                        {
                            title: 'Position the Images',
                            description: 'Let\'s make both images fill the container!',
                            instruction: 'Add this CSS:',
                            code: `.before-image, .after-image {
  position: absolute;
  width: 100%;
  height: 100%;
}

.before-image img, .after-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}`,
                            codeFile: 'styles.css',
                            tip: 'object-fit: cover makes images fill the space without stretching!',
                            explanation: 'What this does:\n• position: absolute - Stacks images on top of each other\n• width/height: 100% - Makes images fill container\n• object-fit: cover - Crops images to fit nicely'
                        },
                        {
                            title: 'Clip the After Image',
                            description: 'Let\'s show only half of the after image!',
                            instruction: 'Add this CSS:',
                            code: `.after-image {
  clip-path: inset(0 50% 0 0);
}`,
                            codeFile: 'styles.css',
                            tip: 'clip-path is like cutting the image with scissors!',
                            explanation: 'What this does:\n• clip-path: inset(0 50% 0 0) - Clips from the right side\n• Shows only the left 50% of the after image\n• The before image shows through on the right'
                        },
                        {
                            title: 'Style the Handle Line',
                            description: 'Let\'s create the vertical divider line!',
                            instruction: 'Add this CSS:',
                            code: `.slider-handle {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: white;
  cursor: ew-resize;
  transform: translateX(-50%);
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
}`,
                            codeFile: 'styles.css',
                            tip: 'cursor: ew-resize shows a left-right arrow when hovering!',
                            explanation: 'What this does:\n• position: absolute - Positions the handle\n• left: 50% - Centers it horizontally\n• transform: translateX(-50%) - Perfect centering\n• cursor: ew-resize - Shows drag cursor'
                        },
                        {
                            title: 'Add the Handle Circle',
                            description: 'Let\'s add a circular grip in the middle!',
                            instruction: 'Add this CSS:',
                            code: `.slider-handle::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}`,
                            codeFile: 'styles.css',
                            tip: '::before creates a pseudo-element without extra HTML!',
                            explanation: 'What this does:\n• ::before - Creates a circle without HTML\n• border-radius: 50% - Makes it circular\n• Centers it on the handle line'
                        },
                        {
                            title: 'Set Up JavaScript Variables',
                            description: 'Let\'s get references to our elements!',
                            instruction: 'Add this JavaScript:',
                            code: `const slider = document.querySelector('.before-after-slider');
const handle = document.querySelector('.slider-handle');
const afterImage = document.querySelector('.after-image');

let isDragging = false;`,
                            codeFile: 'script.js',
                            tip: 'isDragging tracks whether the user is currently dragging!',
                            explanation: 'What this does:\n• querySelector - Gets elements from the page\n• isDragging - Boolean to track drag state\n• We need these to make dragging work'
                        },
                        {
                            title: 'Track Mouse Down',
                            description: 'Let\'s detect when dragging starts!',
                            instruction: 'Add this JavaScript:',
                            code: `handle.addEventListener('mousedown', () => {
  isDragging = true;
});`,
                            codeFile: 'script.js',
                            tip: 'mousedown fires when you press the mouse button!',
                            explanation: 'What this does:\n• addEventListener - Listens for mouse press\n• Sets isDragging to true\n• Now we know the user is dragging'
                        },
                        {
                            title: 'Track Mouse Up',
                            description: 'Let\'s detect when dragging stops!',
                            instruction: 'Add this JavaScript:',
                            code: `document.addEventListener('mouseup', () => {
  isDragging = false;
});`,
                            codeFile: 'script.js',
                            tip: 'We listen on document so it works even if mouse leaves the slider!',
                            explanation: 'What this does:\n• Listens for mouse release anywhere\n• Sets isDragging to false\n• Stops the dragging action'
                        },
                        {
                            title: 'Handle Mouse Movement',
                            description: 'Let\'s make the slider follow the mouse!',
                            instruction: 'Add this JavaScript:',
                            code: `document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  
  const rect = slider.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const percent = (x / rect.width) * 100;
  
  if (percent >= 0 && percent <= 100) {
    handle.style.left = percent + '%';
    afterImage.style.clipPath = \`inset(0 \${100 - percent}% 0 0)\`;
  }
});`,
                            codeFile: 'script.js',
                            tip: 'We calculate percentage to make it work at any size!',
                            explanation: 'What this does:\n• Listens for mouse movement\n• Calculates mouse position as percentage\n• Updates handle position and image clip\n• Only works when isDragging is true'
                        }
                    ],
                    learningObjectives: [
                        'Use clip-path for image masking',
                        'Handle mouse drag events',
                        'Calculate percentages for positioning',
                        'Create interactive UI elements'
                    ]
                },
                useCases: [
                    {
                        title: 'Salon Websites',
                        description: 'Show before/after photos of haircuts or treatments'
                    },
                    {
                        title: 'Portfolio Sites',
                        description: 'Display design improvements or photo editing work'
                    }
                ]
            },

            // Appointment Time Slot Selector
            {
                id: 'appointment-selector',
                name: 'Appointment Time Slot Selector',
                type: 'forms',
                difficulty: 'intermediate',
                hasJS: true,
                mobileFirst: false,
                tags: ['Interactive', 'JavaScript', 'Forms'],
                description: 'Interactive time slot picker for booking appointments. Click to select available times!',
                preview: `<div class="component-preview-placeholder">
                    <div style="background: white; padding: 1.5rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 300px; margin: 1rem auto;">
                        <h4 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 700; color: #1a1a1a;">Select Time</h4>
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem;">
                            <div style="padding: 0.6rem; border: 2px solid #e5e7eb; border-radius: 8px; text-align: center; font-size: 0.75rem; font-weight: 600; cursor: pointer;">9:00 AM</div>
                            <div style="padding: 0.6rem; border: 2px solid #3b82f6; background: #3b82f6; color: white; border-radius: 8px; text-align: center; font-size: 0.75rem; font-weight: 600;">10:00 AM</div>
                            <div style="padding: 0.6rem; border: 2px solid #e5e7eb; border-radius: 8px; text-align: center; font-size: 0.75rem; font-weight: 600;">11:00 AM</div>
                            <div style="padding: 0.6rem; background: #f3f4f6; color: #9ca3af; border: 2px solid #e5e7eb; border-radius: 8px; text-align: center; font-size: 0.75rem; font-weight: 600;">1:00 PM</div>
                            <div style="padding: 0.6rem; border: 2px solid #e5e7eb; border-radius: 8px; text-align: center; font-size: 0.75rem; font-weight: 600;">2:00 PM</div>
                            <div style="padding: 0.6rem; border: 2px solid #e5e7eb; border-radius: 8px; text-align: center; font-size: 0.75rem; font-weight: 600;">3:00 PM</div>
                        </div>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Build a clickable time slot selector for appointments',
                    duration: '30 minutes',
                    steps: [
                        {
                            title: 'Create the Container',
                            description: 'Let\'s start with a container for our appointment selector!',
                            instruction: 'Add this HTML:',
                            code: `<div class="appointment-selector">
</div>`,
                            codeFile: 'index.html',
                            tip: 'This will hold the title and all time slots!',
                            explanation: 'What this does:\n• <div class="appointment-selector"> - Main container for the component'
                        },
                        {
                            title: 'Add the Title',
                            description: 'Let\'s add a heading!',
                            instruction: 'Add this inside the container:',
                            code: `<div class="appointment-selector">
  <h3>Select Your Time</h3>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Clear instructions help users know what to do!',
                            explanation: 'What this does:\n• <h3> - Heading that tells users to pick a time\n• Provides context for the time slots below'
                        },
                        {
                            title: 'Create Time Slots Container',
                            description: 'Let\'s add a container for the time buttons!',
                            instruction: 'Add this after the heading:',
                            code: `<div class="appointment-selector">
  <h3>Select Your Time</h3>
  <div class="time-slots">
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'We\'ll use CSS Grid to arrange these nicely!',
                            explanation: 'What this does:\n• <div class="time-slots"> - Container for time buttons\n• Keeps time slots organized separately from the heading'
                        },
                        {
                            title: 'Add Morning Time Slots',
                            description: 'Let\'s add morning appointment times!',
                            instruction: 'Add these buttons inside time-slots:',
                            code: `<div class="time-slots">
  <button class="time-slot" data-time="9:00">9:00 AM</button>
  <button class="time-slot" data-time="10:00">10:00 AM</button>
  <button class="time-slot" data-time="11:00">11:00 AM</button>
</div>`,
                            codeFile: 'index.html',
                            tip: 'data-time stores the actual time value for JavaScript!',
                            explanation: 'What this does:\n• <button class="time-slot"> - Clickable time buttons\n• data-time - Stores time in 24-hour format\n• Button text shows user-friendly format'
                        },
                        {
                            title: 'Add Afternoon Time Slots',
                            description: 'Let\'s add afternoon times too!',
                            instruction: 'Add these buttons after the morning slots:',
                            code: `<div class="time-slots">
  <button class="time-slot" data-time="9:00">9:00 AM</button>
  <button class="time-slot" data-time="10:00">10:00 AM</button>
  <button class="time-slot" data-time="11:00">11:00 AM</button>
  <button class="time-slot" data-time="13:00">1:00 PM</button>
  <button class="time-slot" data-time="14:00">2:00 PM</button>
  <button class="time-slot" data-time="15:00">3:00 PM</button>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Now users have 6 time slots to choose from!',
                            explanation: 'What this does:\n• Adds three afternoon time slots\n• Gives users a full day of options\n• Each button is clickable'
                        },
                        {
                            title: 'Style the Container',
                            description: 'Let\'s style the main container!',
                            instruction: 'Add this CSS:',
                            code: `.appointment-selector {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  max-width: 400px;
}

.appointment-selector h3 {
  margin: 0 0 1.5rem 0;
  color: #1a1a1a;
  font-size: 1.25rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'The shadow makes it look like a card!',
                            explanation: 'What this does:\n• background: white - Clean white background\n• border-radius - Rounds the corners\n• box-shadow - Adds depth with a shadow'
                        },
                        {
                            title: 'Create the Time Grid',
                            description: 'Let\'s arrange time slots in a grid!',
                            instruction: 'Add this CSS:',
                            code: `.time-slots {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'repeat(3, 1fr) creates 3 equal columns!',
                            explanation: 'What this does:\n• display: grid - Enables CSS Grid\n• grid-template-columns - Creates 3 equal columns\n• gap - Adds space between slots'
                        },
                        {
                            title: 'Style Time Slot Buttons',
                            description: 'Let\'s make the time slots look clickable!',
                            instruction: 'Add this CSS:',
                            code: `.time-slot {
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.time-slot:hover {
  border-color: #3b82f6;
  background: #eff6ff;
}`,
                            codeFile: 'styles.css',
                            tip: 'The hover effect shows which slot you\'re about to click!',
                            explanation: 'What this does:\n• border - Outlines each slot\n• cursor: pointer - Shows hand cursor\n• :hover - Changes color when mouse is over it'
                        },
                        {
                            title: 'Style Selected State',
                            description: 'Let\'s show which time is selected!',
                            instruction: 'Add this CSS:',
                            code: `.time-slot.selected {
  border-color: #3b82f6;
  background: #3b82f6;
  color: white;
}`,
                            codeFile: 'styles.css',
                            tip: 'Selected slots turn blue so users know their choice!',
                            explanation: 'What this does:\n• .selected class - Applied when clicked\n• background: #3b82f6 - Blue background\n• color: white - White text for contrast'
                        },
                        {
                            title: 'Style Unavailable Slots',
                            description: 'Let\'s show which times are unavailable!',
                            instruction: 'Add this CSS:',
                            code: `.time-slot.unavailable {
  background: #f3f4f6;
  color: #9ca3af;
  cursor: not-allowed;
  border-color: #e5e7eb;
}

.time-slot.unavailable:hover {
  background: #f3f4f6;
  border-color: #e5e7eb;
}`,
                            codeFile: 'styles.css',
                            tip: 'cursor: not-allowed shows a "no" symbol when hovering!',
                            explanation: 'What this does:\n• Gray background shows it\'s unavailable\n• cursor: not-allowed - Shows blocked cursor\n• :hover doesn\'t change color'
                        },
                        {
                            title: 'Add Click Functionality',
                            description: 'Let\'s make slots selectable!',
                            instruction: 'Add this JavaScript:',
                            code: `const timeSlots = document.querySelectorAll('.time-slot');

timeSlots.forEach(slot => {
  slot.addEventListener('click', () => {
    // Remove selected from all slots
    timeSlots.forEach(s => s.classList.remove('selected'));
    
    // Add selected to clicked slot
    slot.classList.add('selected');
    
    // Get the selected time
    const selectedTime = slot.dataset.time;
    console.log('Selected time:', selectedTime);
  });
});`,
                            codeFile: 'script.js',
                            tip: 'Now clicking a slot selects it and logs the time!',
                            explanation: 'What this does:\n• querySelectorAll - Gets all time slots\n• addEventListener - Listens for clicks\n• Removes selected from all, adds to clicked one\n• Logs the selected time to console'
                        }
                    ],
                    learningObjectives: [
                        'Create interactive button grids',
                        'Handle click events',
                        'Toggle CSS classes with JavaScript',
                        'Use data attributes for values'
                    ]
                },
                useCases: [
                    {
                        title: 'Salon Websites',
                        description: 'Let customers book appointment times'
                    },
                    {
                        title: 'Medical Sites',
                        description: 'Schedule doctor appointments'
                    }
                ]
            },

            // Genre Filter Tabs
            {
                id: 'genre-filter-tabs',
                name: 'Genre Filter Tabs',
                type: 'interactions',
                difficulty: 'beginner',
                hasJS: true,
                mobileFirst: false,
                tags: ['Interactive', 'JavaScript', 'Filters'],
                description: 'Clickable tabs to filter content by category. Perfect for organizing games, products, or articles!',
                preview: `<div class="component-preview-placeholder">
                    <div style="background: white; padding: 1.5rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 320px; margin: 1rem auto;">
                        <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem; border-bottom: 2px solid #e5e7eb;">
                            <button style="padding: 0.75rem 1.25rem; border: none; background: none; font-weight: 600; color: #3b82f6; border-bottom: 2px solid #3b82f6; margin-bottom: -2px; cursor: pointer;">Action</button>
                            <button style="padding: 0.75rem 1.25rem; border: none; background: none; font-weight: 600; color: #6b7280; cursor: pointer;">RPG</button>
                            <button style="padding: 0.75rem 1.25rem; border: none; background: none; font-weight: 600; color: #6b7280; cursor: pointer;">Sports</button>
                        </div>
                        <div style="font-size: 0.85rem; color: #4b5563; line-height: 1.6;">Showing Action games...</div>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Build clickable filter tabs that show different content',
                    duration: '25 minutes',
                    steps: [
                        {
                            title: 'Create Tabs Container',
                            description: 'Let\'s start by creating a container for our tabs!',
                            instruction: 'Add this HTML:',
                            code: `<div class="genre-tabs">
</div>`,
                            codeFile: 'index.html',
                            tip: 'Tabs let users switch between different categories!',
                            explanation: 'What this does:\n• <div class="genre-tabs"> - Container for tab buttons'
                        },
                        {
                            title: 'Add Tab Buttons',
                            description: 'Now let\'s add buttons for each genre!',
                            instruction: 'Add these buttons inside the container:',
                            code: `<div class="genre-tabs">
  <button class="tab active" data-genre="action">Action</button>
  <button class="tab" data-genre="rpg">RPG</button>
  <button class="tab" data-genre="sports">Sports</button>
  <button class="tab" data-genre="puzzle">Puzzle</button>
</div>`,
                            codeFile: 'index.html',
                            tip: 'data-genre stores which category each button represents!',
                            explanation: 'What this does:\n• <button class="tab"> - Each tab button\n• class="active" - Shows which tab is selected\n• data-genre - Stores the category name'
                        },
                        {
                            title: 'Add Content Area',
                            description: 'Let\'s add a place to show the filtered content!',
                            instruction: 'Add this after the tabs:',
                            code: `<div class="content-area">
  <p>Showing Action games...</p>
</div>`,
                            codeFile: 'index.html',
                            tip: 'This area will update when you click different tabs!',
                            explanation: 'What this does:\n• <div class="content-area"> - Where content appears\n• <p> - Default message'
                        },
                        {
                            title: 'Style the Tabs Container',
                            description: 'Let\'s style the tabs with a bottom border!',
                            instruction: 'Add this CSS:',
                            code: `.genre-tabs {
  display: flex;
  gap: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
  margin-bottom: 1.5rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'The bottom border creates a tab bar effect!',
                            explanation: 'What this does:\n• display: flex - Lines up tabs horizontally\n• gap: 0.5rem - Space between tabs\n• border-bottom - Creates tab bar line'
                        },
                        {
                            title: 'Style Tab Buttons',
                            description: 'Let\'s make the tabs look clickable!',
                            instruction: 'Add this CSS:',
                            code: `.tab {
  padding: 0.75rem 1.25rem;
  border: none;
  background: none;
  font-weight: 600;
  color: #6b7280;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: all 0.2s;
}

.tab:hover {
  color: #3b82f6;
}`,
                            codeFile: 'styles.css',
                            tip: 'margin-bottom: -2px aligns the tab border with the container border!',
                            explanation: 'What this does:\n• background: none - Transparent background\n• border-bottom - Space for active indicator\n• margin-bottom: -2px - Overlaps container border'
                        },
                        {
                            title: 'Style Active Tab',
                            description: 'Let\'s highlight the active tab!',
                            instruction: 'Add this CSS:',
                            code: `.tab.active {
  color: #3b82f6;
  border-bottom-color: #3b82f6;
}`,
                            codeFile: 'styles.css',
                            tip: 'The blue underline shows which tab is selected!',
                            explanation: 'What this does:\n• color: #3b82f6 - Blue text\n• border-bottom-color - Blue underline\n• Shows which tab is currently active'
                        },
                        {
                            title: 'Add Click Functionality',
                            description: 'Let\'s make tabs switch when clicked!',
                            instruction: 'Add this JavaScript:',
                            code: `const tabs = document.querySelectorAll('.tab');
const contentArea = document.querySelector('.content-area');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    
    // Add active to clicked tab
    tab.classList.add('active');
    
    // Update content
    const genre = tab.dataset.genre;
    contentArea.innerHTML = \`<p>Showing \${genre.toUpperCase()} games...</p>\`;
  });
});`,
                            codeFile: 'script.js',
                            tip: 'Now tabs switch when you click them!',
                            explanation: 'What this does:\n• querySelectorAll - Gets all tabs\n• addEventListener - Watches for clicks\n• classList.remove/add - Toggles active class\n• innerHTML - Updates content text'
                        }
                    ],
                    learningObjectives: [
                        'Create tab navigation',
                        'Toggle active states',
                        'Update content dynamically',
                        'Use data attributes'
                    ]
                },
                useCases: [
                    {
                        title: 'Game Websites',
                        description: 'Filter games by genre'
                    },
                    {
                        title: 'Portfolio Sites',
                        description: 'Filter projects by category'
                    }
                ]
            },

            // Progress Bar Component
            {
                id: 'progress-bar',
                name: 'Progress Bar Component',
                type: 'ui-elements',
                difficulty: 'beginner',
                hasJS: true,
                mobileFirst: false,
                tags: ['Beginner-Friendly', 'JavaScript', 'Visual'],
                description: 'Animated progress bar to show completion status. Great for fitness goals, learning progress, or loading!',
                preview: `<div class="component-preview-placeholder">
                    <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 320px; margin: 1rem auto;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
                            <span style="font-weight: 600; color: #1a1a1a; font-size: 0.9rem;">Workout Progress</span>
                            <span style="font-weight: 700; color: #3b82f6; font-size: 0.9rem;">75%</span>
                        </div>
                        <div style="width: 100%; height: 12px; background: #e5e7eb; border-radius: 20px; overflow: hidden;">
                            <div style="width: 75%; height: 100%; background: #3b82f6; border-radius: 20px; transition: width 0.3s;"></div>
                        </div>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Build an animated progress bar that shows completion percentage',
                    duration: '15 minutes',
                    steps: [
                        {
                            title: 'Create Progress Container',
                            description: 'Let\'s start with a container for our progress bar!',
                            instruction: 'Add this HTML:',
                            code: `<div class="progress-container">
</div>`,
                            codeFile: 'index.html',
                            tip: 'This will hold the label, percentage, and bar!',
                            explanation: 'What this does:\n• <div class="progress-container"> - Main container\n• We\'ll add content inside next'
                        },
                        {
                            title: 'Add Progress Header',
                            description: 'Let\'s add a label and percentage display!',
                            instruction: 'Add this header:',
                            code: `<div class="progress-container">
  <div class="progress-header">
    <span class="progress-label">Workout Progress</span>
    <span class="progress-percent">0%</span>
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'The percentage will update with JavaScript!',
                            explanation: 'What this does:\n• progress-header - Container for label and percent\n• progress-label - Shows what we\'re tracking\n• progress-percent - Shows the percentage'
                        },
                        {
                            title: 'Add Progress Bar',
                            description: 'Now let\'s add the actual progress bar!',
                            instruction: 'Add this bar:',
                            code: `<div class="progress-container">
  <div class="progress-header">
    <span class="progress-label">Workout Progress</span>
    <span class="progress-percent">0%</span>
  </div>
  <div class="progress-bar">
    <div class="progress-fill"></div>
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'The fill div will grow to show progress!',
                            explanation: 'What this does:\n• progress-bar - The gray background track\n• progress-fill - The blue bar that grows\n• Starts at 0% width'
                        },
                        {
                            title: 'Style Container and Header',
                            description: 'Let\'s style the container and header!',
                            instruction: 'Add this CSS:',
                            code: `.progress-container {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'justify-content: space-between pushes label and percent apart!',
                            explanation: 'What this does:\n• Container gets white background and shadow\n• Header uses Flexbox\n• space-between pushes items to edges'
                        },
                        {
                            title: 'Style Label and Percentage',
                            description: 'Let\'s style the text!',
                            instruction: 'Add this CSS:',
                            code: `.progress-label {
  font-weight: 600;
  color: #1a1a1a;
}

.progress-percent {
  font-weight: 700;
  color: #3b82f6;
}`,
                            codeFile: 'styles.css',
                            tip: 'The percentage is blue to match the progress bar!',
                            explanation: 'What this does:\n• Label is bold and dark\n• Percentage is bold and blue\n• Blue matches the fill color'
                        },
                        {
                            title: 'Style Progress Bar Track',
                            description: 'Let\'s style the gray background track!',
                            instruction: 'Add this CSS:',
                            code: `.progress-bar {
  width: 100%;
  height: 12px;
  background: #e5e7eb;
  border-radius: 20px;
  overflow: hidden;
}`,
                            codeFile: 'styles.css',
                            tip: 'overflow: hidden keeps the fill inside the rounded corners!',
                            explanation: 'What this does:\n• width: 100% - Full width\n• height: 12px - Thin bar\n• background: #e5e7eb - Light gray\n• border-radius: 20px - Pill shape'
                        },
                        {
                            title: 'Style Progress Fill',
                            description: 'Let\'s style the blue fill that shows progress!',
                            instruction: 'Add this CSS:',
                            code: `.progress-fill {
  height: 100%;
  background: #3b82f6;
  border-radius: 20px;
  width: 0%;
  transition: width 0.5s ease;
}`,
                            codeFile: 'styles.css',
                            tip: 'transition makes the width change smoothly!',
                            explanation: 'What this does:\n• height: 100% - Fills track height\n• background: #3b82f6 - Blue color\n• width: 0% - Starts empty\n• transition - Animates width changes'
                        },
                        {
                            title: 'Create Update Function',
                            description: 'Let\'s write JavaScript to update the progress!',
                            instruction: 'Add this function:',
                            code: `function setProgress(percent) {
  const fill = document.querySelector('.progress-fill');
  const percentText = document.querySelector('.progress-percent');
  
  fill.style.width = percent + '%';
  percentText.textContent = percent + '%';
}`,
                            codeFile: 'script.js',
                            tip: 'This function updates both the bar and the percentage text!',
                            explanation: 'What this does:\n• Gets the fill and percent elements\n• Updates fill width\n• Updates percent text\n• Call with: setProgress(75)'
                        },
                        {
                            title: 'Test the Progress Bar',
                            description: 'Let\'s test it by setting progress to 75%!',
                            instruction: 'Add this test code:',
                            code: `// Test: Set to 75%
setProgress(75);`,
                            codeFile: 'script.js',
                            tip: 'Try different numbers to see the bar change!',
                            explanation: 'What this does:\n• Calls setProgress with 75\n• Bar fills to 75%\n• Text shows "75%"\n• Try other numbers like 25, 50, 100'
                        }
                    ],
                    learningObjectives: [
                        'Create progress indicators',
                        'Animate CSS properties',
                        'Update elements with JavaScript',
                        'Use setInterval for animations'
                    ]
                },
                useCases: [
                    {
                        title: 'Fitness Websites',
                        description: 'Show workout completion'
                    },
                    {
                        title: 'Learning Platforms',
                        description: 'Display course progress'
                    }
                ]
            },

            // Announcement Banner
            {
                id: 'announcement-banner',
                name: 'Announcement / Alert Banner',
                type: 'ui-elements',
                difficulty: 'beginner',
                hasJS: true,
                mobileFirst: false,
                tags: ['Beginner-Friendly', 'JavaScript'],
                description: 'Eye-catching banner for important announcements. Can be dismissed by users!',
                preview: `<div class="component-preview-placeholder">
                    <div style="background: #3b82f6; color: white; padding: 1rem 1.5rem; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3); max-width: 320px; margin: 1rem auto;">
                        <div style="display: flex; align-items: center; gap: 0.75rem;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                            <span style="font-weight: 600; font-size: 0.9rem;">New event this weekend!</span>
                        </div>
                        <button style="background: none; border: none; color: white; cursor: pointer; padding: 0.25rem; font-size: 1.25rem;">&times;</button>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Build a dismissible announcement banner',
                    duration: '20 minutes',
                    steps: [
                        {
                            title: 'Create Banner HTML',
                            description: 'Let\'s create an announcement banner with a close button!',
                            instruction: 'Add this HTML:',
                            code: `<div class="announcement-banner" id="announcement">
  <div class="banner-content">
    <i data-lucide="info"></i>
    <span>New event this weekend!</span>
  </div>
  <button class="close-btn" onclick="closeBanner()">
    <i data-lucide="x"></i>
  </button>
</div>`,
                            codeFile: 'index.html',
                            tip: 'The X button will close the banner!',
                            explanation: 'What this does:\n• <div class="announcement-banner"> - Main banner\n• <i data-lucide="info"> - Info icon\n• <button> - Close button with X icon'
                        },
                        {
                            title: 'Style the Banner',
                            description: 'Let\'s make it stand out with a blue background!',
                            instruction: 'Add this CSS:',
                            code: `.announcement-banner {
  background: #3b82f6;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  margin-bottom: 2rem;
}

.banner-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
}`,
                            codeFile: 'styles.css',
                            tip: 'Blue background makes it noticeable!',
                            explanation: 'What this does:\n• background: #3b82f6 - Blue color\n• display: flex - Arranges content and button\n• justify-content: space-between - Pushes button to right'
                        },
                        {
                            title: 'Style Close Button',
                            description: 'Let\'s style the X button!',
                            instruction: 'Add this CSS:',
                            code: `.close-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
}

.close-btn:hover {
  opacity: 0.8;
}`,
                            codeFile: 'styles.css',
                            tip: 'The button fades slightly on hover!',
                            explanation: 'What this does:\n• background: none - Transparent\n• cursor: pointer - Hand cursor\n• opacity: 0.8 - Fades on hover'
                        },
                        {
                            title: 'Add Close Functionality',
                            description: 'Let\'s make the X button work!',
                            instruction: 'Add this JavaScript:',
                            code: `function closeBanner() {
  const banner = document.getElementById('announcement');
  banner.style.display = 'none';
}

// Initialize Lucide icons
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}`,
                            codeFile: 'script.js',
                            tip: 'Clicking X hides the banner!',
                            explanation: 'What this does:\n• closeBanner() - Function to hide banner\n• style.display = \'none\' - Makes it invisible\n• lucide.createIcons() - Loads the icons'
                        }
                    ],
                    learningObjectives: [
                        'Create notification banners',
                        'Handle click events',
                        'Hide elements with JavaScript',
                        'Use Lucide icons'
                    ]
                },
                useCases: [
                    {
                        title: 'City Websites',
                        description: 'Announce events or alerts'
                    },
                    {
                        title: 'All Websites',
                        description: 'Show important messages'
                    }
                ]
            },

            // Difficulty Badge System
            {
                id: 'difficulty-badge',
                name: 'Difficulty Badge System',
                type: 'ui-elements',
                difficulty: 'beginner',
                hasJS: false,
                mobileFirst: false,
                tags: ['Beginner-Friendly', 'CSS-Only', 'Visual'],
                description: 'Color-coded badges to show difficulty levels. Perfect for tutorials, lessons, or challenges!',
                preview: `<div class="component-preview-placeholder">
                    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; padding: 1.5rem; justify-content: center;">
                        <span style="padding: 0.4rem 0.9rem; background: #10b981; color: white; border-radius: 20px; font-size: 0.75rem; font-weight: 700;">Beginner</span>
                        <span style="padding: 0.4rem 0.9rem; background: #f59e0b; color: white; border-radius: 20px; font-size: 0.75rem; font-weight: 700;">Intermediate</span>
                        <span style="padding: 0.4rem 0.9rem; background: #ef4444; color: white; border-radius: 20px; font-size: 0.75rem; font-weight: 700;">Advanced</span>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Create color-coded difficulty badges',
                    duration: '10 minutes',
                    steps: [
                        {
                            title: 'Create Badge Container',
                            description: 'Let\'s start by creating a container for our badges!',
                            instruction: 'Add this HTML:',
                            code: `<div class="difficulty-badges">
</div>`,
                            codeFile: 'index.html',
                            tip: 'This container will hold all our difficulty badges!',
                            explanation: 'What this does:\n• <div class="difficulty-badges"> - Container for badges\n• We\'ll add badges inside next'
                        },
                        {
                            title: 'Add Beginner Badge',
                            description: 'Let\'s add our first badge for beginner level!',
                            instruction: 'Add this badge inside the container:',
                            code: `<div class="difficulty-badges">
  <span class="badge beginner">Beginner</span>
</div>`,
                            codeFile: 'index.html',
                            tip: '<span> is perfect for small inline elements like badges!',
                            explanation: 'What this does:\n• <span class="badge"> - Creates a badge\n• class="beginner" - Marks it as beginner level\n• Text shows the difficulty name'
                        },
                        {
                            title: 'Add More Difficulty Badges',
                            description: 'Now let\'s add intermediate and advanced badges!',
                            instruction: 'Add these badges:',
                            code: `<div class="difficulty-badges">
  <span class="badge beginner">Beginner</span>
  <span class="badge intermediate">Intermediate</span>
  <span class="badge advanced">Advanced</span>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Each badge has a different class for different colors!',
                            explanation: 'What this does:\n• Three badges for three levels\n• Each has its own class\n• We\'ll style them with different colors'
                        },
                        {
                            title: 'Style Base Badge',
                            description: 'Let\'s add the basic styling that all badges share!',
                            instruction: 'Add this CSS:',
                            code: `.badge {
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  color: white;
  display: inline-block;
}`,
                            codeFile: 'styles.css',
                            tip: 'border-radius: 20px makes them pill-shaped!',
                            explanation: 'What this does:\n• padding - Makes badges bigger\n• border-radius: 20px - Rounds them into pills\n• font-weight: 700 - Makes text bold\n• color: white - White text'
                        },
                        {
                            title: 'Add Beginner Color',
                            description: 'Let\'s make the beginner badge green!',
                            instruction: 'Add this CSS:',
                            code: `.badge.beginner {
  background: #10b981;
}`,
                            codeFile: 'styles.css',
                            tip: 'Green means easy and beginner-friendly!',
                            explanation: 'What this does:\n• .badge.beginner - Targets beginner badges\n• background: #10b981 - Green color\n• Green = easy/beginner'
                        },
                        {
                            title: 'Add Intermediate Color',
                            description: 'Let\'s make the intermediate badge orange!',
                            instruction: 'Add this CSS:',
                            code: `.badge.intermediate {
  background: #f59e0b;
}`,
                            codeFile: 'styles.css',
                            tip: 'Orange means medium difficulty!',
                            explanation: 'What this does:\n• .badge.intermediate - Targets intermediate badges\n• background: #f59e0b - Orange color\n• Orange = medium difficulty'
                        },
                        {
                            title: 'Add Advanced Color',
                            description: 'Finally, let\'s make the advanced badge red!',
                            instruction: 'Add this CSS:',
                            code: `.badge.advanced {
  background: #ef4444;
}`,
                            codeFile: 'styles.css',
                            tip: 'Red means hard and challenging!',
                            explanation: 'What this does:\n• .badge.advanced - Targets advanced badges\n• background: #ef4444 - Red color\n• Red = hard/advanced'
                        }
                    ],
                    learningObjectives: [
                        'Create badge components',
                        'Use CSS classes for variants',
                        'Apply color coding',
                        'Style inline elements'
                    ]
                },
                useCases: [
                    {
                        title: 'Music Tutorial Sites',
                        description: 'Show lesson difficulty'
                    },
                    {
                        title: 'Learning Platforms',
                        description: 'Indicate content complexity'
                    }
                ]
            },

            // Adoption Status Badge
            {
                id: 'adoption-status-badge',
                name: 'Adoption Status Badge',
                type: 'ui-elements',
                difficulty: 'beginner',
                hasJS: false,
                mobileFirst: false,
                tags: ['Beginner-Friendly', 'CSS-Only', 'Visual'],
                description: 'Status badges for pet adoption listings. Show if pets are available, pending, or adopted!',
                preview: `<div class="component-preview-placeholder">
                    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; padding: 1.5rem; justify-content: center;">
                        <span style="padding: 0.4rem 0.9rem; background: #10b981; color: white; border-radius: 20px; font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; gap: 0.4rem;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Available
                        </span>
                        <span style="padding: 0.4rem 0.9rem; background: #f59e0b; color: white; border-radius: 20px; font-size: 0.75rem; font-weight: 700;">Pending</span>
                        <span style="padding: 0.4rem 0.9rem; background: #6b7280; color: white; border-radius: 20px; font-size: 0.75rem; font-weight: 700;">Adopted</span>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Create status badges for pet adoption listings',
                    duration: '10 minutes',
                    steps: [
                        {
                            title: 'Create Pet Card Container',
                            description: 'Let\'s start by creating a card for a pet!',
                            instruction: 'Add this HTML:',
                            code: `<div class="pet-card">
  <h3>Max</h3>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Each pet will have its own card!',
                            explanation: 'What this does:\n• <div class="pet-card"> - Container for pet info\n• <h3> - Pet\'s name'
                        },
                        {
                            title: 'Add Pet Image',
                            description: 'Let\'s add a cute photo of the pet!',
                            instruction: 'Add this image:',
                            code: `<div class="pet-card">
  <img src="https://picsum.photos/200/200?random=1" alt="Cute dog">
  <h3>Max</h3>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Replace with real pet photos later!',
                            explanation: 'What this does:\n• <img> - Shows pet photo\n• src - Image location\n• alt - Description for accessibility'
                        },
                        {
                            title: 'Add Available Status Badge',
                            description: 'Let\'s add a badge showing the pet is available!',
                            instruction: 'Add this badge:',
                            code: `<div class="pet-card">
  <img src="https://picsum.photos/200/200?random=1" alt="Cute dog">
  <h3>Max</h3>
  <span class="status-badge available">Available</span>
</div>`,
                            codeFile: 'index.html',
                            tip: 'The class "available" will make it green!',
                            explanation: 'What this does:\n• <span class="status-badge"> - Creates badge\n• class="available" - Marks as available\n• Text shows the status'
                        },
                        {
                            title: 'Style Base Badge',
                            description: 'Let\'s add the basic styling for all badges!',
                            instruction: 'Add this CSS:',
                            code: `.status-badge {
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  color: white;
  display: inline-block;
}`,
                            codeFile: 'styles.css',
                            tip: 'This styling applies to all status badges!',
                            explanation: 'What this does:\n• padding - Makes badge bigger\n• border-radius: 20px - Makes it pill-shaped\n• font-weight: 700 - Bold text\n• color: white - White text'
                        },
                        {
                            title: 'Add Available Color',
                            description: 'Let\'s make available badges green!',
                            instruction: 'Add this CSS:',
                            code: `.status-badge.available {
  background: #10b981;
}`,
                            codeFile: 'styles.css',
                            tip: 'Green means the pet is ready for adoption!',
                            explanation: 'What this does:\n• .status-badge.available - Targets available badges\n• background: #10b981 - Green color\n• Green = available for adoption'
                        },
                        {
                            title: 'Add Pending Color',
                            description: 'Let\'s add orange for pending adoptions!',
                            instruction: 'Add this CSS:',
                            code: `.status-badge.pending {
  background: #f59e0b;
}`,
                            codeFile: 'styles.css',
                            tip: 'Orange means adoption is in progress!',
                            explanation: 'What this does:\n• .status-badge.pending - Targets pending badges\n• background: #f59e0b - Orange color\n• Orange = adoption pending'
                        },
                        {
                            title: 'Add Adopted Color',
                            description: 'Finally, let\'s add gray for adopted pets!',
                            instruction: 'Add this CSS:',
                            code: `.status-badge.adopted {
  background: #6b7280;
}`,
                            codeFile: 'styles.css',
                            tip: 'Gray means the pet has found a home!',
                            explanation: 'What this does:\n• .status-badge.adopted - Targets adopted badges\n• background: #6b7280 - Gray color\n• Gray = already adopted'
                        }
                    ],
                    learningObjectives: [
                        'Create status indicators',
                        'Use color coding for states',
                        'Combine icons with text',
                        'Style badge components'
                    ]
                },
                useCases: [
                    {
                        title: 'Pet Adoption Sites',
                        description: 'Show pet availability status'
                    },
                    {
                        title: 'E-commerce Sites',
                        description: 'Display product availability'
                    }
                ]
            },

            // Pet Type Filter Toggle
            {
                id: 'pet-type-filter',
                name: 'Pet Type Filter Toggle',
                type: 'interactions',
                difficulty: 'beginner',
                hasJS: true,
                mobileFirst: false,
                tags: ['Beginner-Friendly', 'JavaScript', 'Filters'],
                description: 'Toggle buttons to filter between dogs and cats. Simple and effective filtering!',
                preview: `<div class="component-preview-placeholder">
                    <div style="background: white; padding: 1.5rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 280px; margin: 1rem auto;">
                        <div style="display: flex; gap: 0.5rem; background: #f3f4f6; padding: 0.25rem; border-radius: 10px;">
                            <button style="flex: 1; padding: 0.6rem; background: #3b82f6; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">Dogs</button>
                            <button style="flex: 1; padding: 0.6rem; background: transparent; color: #6b7280; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">Cats</button>
                        </div>
                        <div style="margin-top: 1rem; font-size: 0.85rem; color: #6b7280;">Showing dogs...</div>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Build a toggle filter for pet types',
                    duration: '20 minutes',
                    steps: [
                        {
                            title: 'Create Filter Container',
                            description: 'Let\'s start by creating a container for our pet filter!',
                            instruction: 'Add this HTML:',
                            code: `<div class="pet-filter">
</div>`,
                            codeFile: 'index.html',
                            tip: 'This will hold the toggle buttons and results!',
                            explanation: 'What this does:\n• <div class="pet-filter"> - Main container for the filter'
                        },
                        {
                            title: 'Add Toggle Buttons Container',
                            description: 'Now let\'s create a container for the toggle buttons!',
                            instruction: 'Add this inside the filter:',
                            code: `<div class="pet-filter">
  <div class="toggle-buttons">
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'The toggle-buttons div will hold our Dogs and Cats buttons!',
                            explanation: 'What this does:\n• <div class="toggle-buttons"> - Container for buttons\n• We\'ll add buttons inside next'
                        },
                        {
                            title: 'Add Dogs Button',
                            description: 'Let\'s add the Dogs button with an icon!',
                            instruction: 'Add this button:',
                            code: `<div class="toggle-buttons">
  <button class="toggle-btn active" data-type="dogs">
    <i data-lucide="dog"></i>
    Dogs
  </button>
</div>`,
                            codeFile: 'index.html',
                            tip: 'class="active" makes this button selected by default!',
                            explanation: 'What this does:\n• <button class="toggle-btn"> - Toggle button\n• class="active" - Shows it\'s selected\n• data-type="dogs" - Stores the filter type\n• <i data-lucide="dog"> - Dog icon'
                        },
                        {
                            title: 'Add Cats Button',
                            description: 'Now let\'s add the Cats button!',
                            instruction: 'Add this button after the Dogs button:',
                            code: `<button class="toggle-btn" data-type="cats">
  <i data-lucide="cat"></i>
  Cats
</button>`,
                            codeFile: 'index.html',
                            tip: 'This button starts unselected (no active class)!',
                            explanation: 'What this does:\n• Second toggle button for cats\n• data-type="cats" - Stores the filter type\n• <i data-lucide="cat"> - Cat icon'
                        },
                        {
                            title: 'Add Results Display',
                            description: 'Let\'s add a place to show which pets are displayed!',
                            instruction: 'Add this after the toggle-buttons:',
                            code: `<div class="results">Showing dogs...</div>`,
                            codeFile: 'index.html',
                            tip: 'This text will update when you click the buttons!',
                            explanation: 'What this does:\n• <div class="results"> - Shows current filter\n• Starts with "Showing dogs..." since Dogs is active'
                        },
                        {
                            title: 'Style Toggle Container',
                            description: 'Let\'s style the toggle buttons container!',
                            instruction: 'Add this CSS:',
                            code: `.toggle-buttons {
  display: flex;
  gap: 0.5rem;
  background: #f3f4f6;
  padding: 0.25rem;
  border-radius: 10px;
}`,
                            codeFile: 'styles.css',
                            tip: 'The gray background creates a switch-like appearance!',
                            explanation: 'What this does:\n• display: flex - Lines up buttons horizontally\n• background: #f3f4f6 - Light gray background\n• padding: 0.25rem - Small padding around buttons\n• border-radius: 10px - Rounded corners'
                        },
                        {
                            title: 'Style Toggle Buttons',
                            description: 'Let\'s style the individual buttons!',
                            instruction: 'Add this CSS:',
                            code: `.toggle-btn {
  flex: 1;
  padding: 0.6rem 1rem;
  background: transparent;
  color: #6b7280;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.toggle-btn i {
  width: 18px;
  height: 18px;
}`,
                            codeFile: 'styles.css',
                            tip: 'flex: 1 makes both buttons equal width!',
                            explanation: 'What this does:\n• flex: 1 - Equal width buttons\n• background: transparent - See-through by default\n• display: flex - Aligns icon and text\n• gap: 0.5rem - Space between icon and text'
                        },
                        {
                            title: 'Style Active Button',
                            description: 'Let\'s highlight the active button!',
                            instruction: 'Add this CSS:',
                            code: `.toggle-btn.active {
  background: #3b82f6;
  color: white;
}`,
                            codeFile: 'styles.css',
                            tip: 'Active button has blue background!',
                            explanation: 'What this does:\n• .toggle-btn.active - Targets active button\n• background: #3b82f6 - Blue background\n• color: white - White text and icon'
                        },
                        {
                            title: 'Add Toggle Functionality',
                            description: 'Let\'s make buttons switch the filter!',
                            instruction: 'Add this JavaScript:',
                            code: `const toggleBtns = document.querySelectorAll('.toggle-btn');
const results = document.querySelector('.results');

toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active from all
    toggleBtns.forEach(b => b.classList.remove('active'));
    
    // Add active to clicked
    btn.classList.add('active');
    
    // Update results
    const type = btn.dataset.type;
    results.textContent = \`Showing \${type}...\`;
  });
});

// Initialize icons
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}`,
                            codeFile: 'script.js',
                            tip: 'Now you can toggle between dogs and cats!',
                            explanation: 'What this does:\n• querySelectorAll - Gets all toggle buttons\n• addEventListener - Watches for clicks\n• classList.remove/add - Toggles active class\n• dataset.type - Gets the filter type\n• textContent - Updates results text'
                        }
                    ],
                    learningObjectives: [
                        'Create toggle switches',
                        'Handle button groups',
                        'Toggle active states',
                        'Filter content dynamically'
                    ]
                },
                useCases: [
                    {
                        title: 'Pet Adoption Sites',
                        description: 'Filter between dogs and cats'
                    },
                    {
                        title: 'E-commerce Sites',
                        description: 'Toggle between product categories'
                    }
                ]
            },

            // City Statistics Strip
            {
                id: 'city-statistics',
                name: 'City Statistics Strip',
                type: 'ui-elements',
                difficulty: 'beginner',
                hasJS: false,
                mobileFirst: false,
                tags: ['Beginner-Friendly', 'CSS-Only', 'Flexbox'],
                description: 'Display key city statistics in a clean, organized strip. Perfect for showcasing numbers!',
                preview: `<div class="component-preview-placeholder">
                    <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 320px; margin: 1rem auto;">
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; text-align: center;">
                            <div>
                                <div style="font-size: 1.75rem; font-weight: 800; color: #3b82f6; margin-bottom: 0.25rem;">2.5M</div>
                                <div style="font-size: 0.75rem; color: #6b7280; font-weight: 600;">Population</div>
                            </div>
                            <div>
                                <div style="font-size: 1.75rem; font-weight: 800; color: #10b981; margin-bottom: 0.25rem;">150+</div>
                                <div style="font-size: 0.75rem; color: #6b7280; font-weight: 600;">Parks</div>
                            </div>
                            <div>
                                <div style="font-size: 1.75rem; font-weight: 800; color: #f59e0b; margin-bottom: 0.25rem;">50</div>
                                <div style="font-size: 0.75rem; color: #6b7280; font-weight: 600;">Schools</div>
                            </div>
                        </div>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Build a statistics display strip for city data',
                    duration: '20 minutes',
                    steps: [
                        {
                            title: 'Create Statistics Container',
                            description: 'Let\'s start by creating a container for city statistics!',
                            instruction: 'Add this HTML:',
                            code: `<div class="city-stats">
</div>`,
                            codeFile: 'index.html',
                            tip: 'This will hold all our city statistics!',
                            explanation: 'What this does:\n• <div class="city-stats"> - Main container for stats'
                        },
                        {
                            title: 'Add First Statistic',
                            description: 'Let\'s add our first stat - population!',
                            instruction: 'Add this stat box:',
                            code: `<div class="city-stats">
  <div class="stat-item">
    <div class="stat-number">2.5M</div>
    <div class="stat-label">Population</div>
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Each stat has a big number and a label!',
                            explanation: 'What this does:\n• <div class="stat-item"> - Container for one stat\n• <div class="stat-number"> - The big number\n• <div class="stat-label"> - What it measures'
                        },
                        {
                            title: 'Add More Statistics',
                            description: 'Now let\'s add three more city stats!',
                            instruction: 'Add these stats after the first one:',
                            code: `<div class="stat-item">
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
</div>`,
                            codeFile: 'index.html',
                            tip: 'Now we have 4 statistics total!',
                            explanation: 'What this does:\n• Adds three more stat items\n• Each shows a different city metric\n• Parks, Schools, and Museums'
                        },
                        {
                            title: 'Style the Container',
                            description: 'Let\'s style the main container!',
                            instruction: 'Add this CSS:',
                            code: `.city-stats {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 2rem;
  text-align: center;
}`,
                            codeFile: 'styles.css',
                            tip: 'Grid makes stats line up perfectly!',
                            explanation: 'What this does:\n• display: grid - Creates grid layout\n• grid-template-columns - Auto-adjusting columns\n• gap: 2rem - Space between stats\n• text-align: center - Centers text'
                        },
                        {
                            title: 'Style the Numbers',
                            description: 'Let\'s make the numbers big and bold!',
                            instruction: 'Add this CSS:',
                            code: `.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: #3b82f6;
  margin-bottom: 0.5rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'Big numbers grab attention!',
                            explanation: 'What this does:\n• font-size: 2rem - Makes numbers big\n• font-weight: 800 - Extra bold\n• color: #3b82f6 - Blue color\n• margin-bottom - Space below number'
                        },
                        {
                            title: 'Style the Labels',
                            description: 'Let\'s style the stat labels!',
                            instruction: 'Add this CSS:',
                            code: `.stat-label {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}`,
                            codeFile: 'styles.css',
                            tip: 'Uppercase labels look professional!',
                            explanation: 'What this does:\n• font-size: 0.875rem - Smaller than numbers\n• color: #6b7280 - Gray color\n• text-transform: uppercase - Capital letters\n• letter-spacing - Spaced out text'
                        },
                        {
                            title: 'Add Different Colors',
                            description: 'Let\'s give each stat a unique color!',
                            instruction: 'Add this CSS:',
                            code: `.stat-item:nth-child(1) .stat-number {
  color: #3b82f6;
}

.stat-item:nth-child(2) .stat-number {
  color: #10b981;
}

.stat-item:nth-child(3) .stat-number {
  color: #f59e0b;
}

.stat-item:nth-child(4) .stat-number {
  color: #ef4444;
}`,
                            codeFile: 'styles.css',
                            tip: 'Each number gets a different color!',
                            explanation: 'What this does:\n• :nth-child(1) - First stat (blue)\n• :nth-child(2) - Second stat (green)\n• :nth-child(3) - Third stat (orange)\n• :nth-child(4) - Fourth stat (red)'
                        }
                    ],
                    learningObjectives: [
                        'Display statistics effectively',
                        'Use CSS Grid for layouts',
                        'Style numbers prominently',
                        'Use nth-child selectors'
                    ]
                },
                useCases: [
                    {
                        title: 'City Websites',
                        description: 'Show city facts and figures'
                    },
                    {
                        title: 'Business Sites',
                        description: 'Display company statistics'
                    }
                ]
            },

            // Quote Highlight Block
            {
                id: 'quote-highlight',
                name: 'Quote Highlight Block',
                type: 'ui-elements',
                difficulty: 'beginner',
                hasJS: false,
                mobileFirst: false,
                tags: ['Beginner-Friendly', 'CSS-Only', 'Typography'],
                description: 'Beautiful quote display with decorative styling. Perfect for testimonials or important messages!',
                preview: `<div class="component-preview-placeholder">
                    <div style="background: #f8fafc; padding: 2rem; border-radius: 16px; border-left: 4px solid #3b82f6; max-width: 300px; margin: 1rem auto; position: relative;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="#3b82f6" style="opacity: 0.2; position: absolute; top: 1rem; right: 1rem;">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                        <p style="font-size: 1rem; font-style: italic; color: #1a1a1a; line-height: 1.6; margin: 0 0 1rem 0;">"This is an inspiring quote that captures the essence of our culture."</p>
                        <div style="font-size: 0.85rem; font-weight: 600; color: #6b7280;">• Elder Name</div>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Create a styled quote block with attribution',
                    duration: '15 minutes',
                    steps: [
                        {
                            title: 'Create Quote Container',
                            description: 'Let\'s start with a blockquote element for our quote!',
                            instruction: 'Add this HTML:',
                            code: `<blockquote class="quote-block">
</blockquote>`,
                            codeFile: 'index.html',
                            tip: '<blockquote> is the proper HTML tag for quotes!',
                            explanation: 'What this does:\n• <blockquote> - Semantic HTML for quotes\n• class="quote-block" - For styling'
                        },
                        {
                            title: 'Add Quote Text',
                            description: 'Let\'s add the actual quote!',
                            instruction: 'Add this paragraph:',
                            code: `<blockquote class="quote-block">
  <p class="quote-text">
    "This is an inspiring quote that captures the essence of our culture and traditions."
  </p>
</blockquote>`,
                            codeFile: 'index.html',
                            tip: 'Put quotes in quotation marks!',
                            explanation: 'What this does:\n• <p class="quote-text"> - Paragraph for quote\n• Quotation marks show it\'s a quote\n• class for styling'
                        },
                        {
                            title: 'Add Quote Author',
                            description: 'Let\'s add who said the quote!',
                            instruction: 'Add this citation:',
                            code: `<blockquote class="quote-block">
  <p class="quote-text">
    "This is an inspiring quote that captures the essence of our culture and traditions."
  </p>
  <cite class="quote-author">— Elder Name</cite>
</blockquote>`,
                            codeFile: 'index.html',
                            tip: '<cite> is the proper tag for attributing quotes!',
                            explanation: 'What this does:\n• <cite> - Semantic tag for attribution\n• — (em dash) - Proper punctuation\n• Shows who said the quote'
                        },
                        {
                            title: 'Style Quote Container',
                            description: 'Let\'s make the quote block stand out!',
                            instruction: 'Add this CSS:',
                            code: `.quote-block {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 16px;
  border-left: 4px solid #3b82f6;
  margin: 2rem 0;
  position: relative;
}`,
                            codeFile: 'styles.css',
                            tip: 'The left border is a classic quote design!',
                            explanation: 'What this does:\n• background - Light gray background\n• padding - Space inside\n• border-left - Blue accent bar\n• border-radius - Rounded corners'
                        },
                        {
                            title: 'Style Quote Text',
                            description: 'Let\'s make the quote text look beautiful!',
                            instruction: 'Add this CSS:',
                            code: `.quote-text {
  font-size: 1.1rem;
  font-style: italic;
  color: #1a1a1a;
  line-height: 1.6;
  margin: 0 0 1rem 0;
}`,
                            codeFile: 'styles.css',
                            tip: 'Italic text is traditional for quotes!',
                            explanation: 'What this does:\n• font-size: 1.1rem - Slightly bigger\n• font-style: italic - Slanted text\n• line-height: 1.6 - Easy to read\n• margin-bottom - Space before author'
                        },
                        {
                            title: 'Style Quote Author',
                            description: 'Let\'s style the author name!',
                            instruction: 'Add this CSS:',
                            code: `.quote-author {
  font-size: 0.9rem;
  font-weight: 600;
  color: #6b7280;
  font-style: normal;
}`,
                            codeFile: 'styles.css',
                            tip: 'Author text should be smaller and subtle!',
                            explanation: 'What this does:\n• font-size: 0.9rem - Smaller than quote\n• font-weight: 600 - Semi-bold\n• color: #6b7280 - Gray color\n• font-style: normal - Not italic'
                        }
                    ],
                    learningObjectives: [
                        'Use semantic HTML (blockquote)',
                        'Position elements absolutely',
                        'Style text for emphasis',
                        'Create decorative borders'
                    ]
                },
                useCases: [
                    {
                        title: 'Indigenous People Sites',
                        description: 'Display cultural wisdom and quotes'
                    },
                    {
                        title: 'Blog Sites',
                        description: 'Highlight important messages'
                    }
                ]
            },

            // Workout Schedule Grid
            {
                id: 'workout-schedule',
                name: 'Workout Schedule Grid',
                type: 'ui-elements',
                difficulty: 'beginner',
                hasJS: false,
                mobileFirst: false,
                tags: ['Beginner-Friendly', 'CSS-Only', 'Grid'],
                description: 'Weekly workout schedule in a clean grid layout. Perfect for fitness plans!',
                preview: `<div class="component-preview-placeholder">
                    <div style="background: white; padding: 1.5rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 320px; margin: 1rem auto;">
                        <h4 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 700; color: #1a1a1a;">Weekly Schedule</h4>
                        <div style="display: grid; gap: 0.5rem;">
                            <div style="display: flex; justify-content: space-between; padding: 0.75rem; background: #eff6ff; border-left: 3px solid #3b82f6; border-radius: 8px;">
                                <span style="font-weight: 600; color: #1a1a1a; font-size: 0.85rem;">Monday</span>
                                <span style="color: #6b7280; font-size: 0.85rem;">Cardio</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; padding: 0.75rem; background: #f0fdf4; border-left: 3px solid #10b981; border-radius: 8px;">
                                <span style="font-weight: 600; color: #1a1a1a; font-size: 0.85rem;">Wednesday</span>
                                <span style="color: #6b7280; font-size: 0.85rem;">Strength</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; padding: 0.75rem; background: #fef3c7; border-left: 3px solid #f59e0b; border-radius: 8px;">
                                <span style="font-weight: 600; color: #1a1a1a; font-size: 0.85rem;">Friday</span>
                                <span style="color: #6b7280; font-size: 0.85rem;">Yoga</span>
                            </div>
                        </div>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Build a weekly workout schedule grid',
                    duration: '25 minutes',
                    steps: [
                        {
                            title: 'Create Schedule Container',
                            description: 'Let\'s start by creating a container for the workout schedule!',
                            instruction: 'Add this HTML:',
                            code: `<div class="workout-schedule">
  <h3>Weekly Schedule</h3>
</div>`,
                            codeFile: 'index.html',
                            tip: 'This will hold all our workout days!',
                            explanation: 'What this does:\n• <div class="workout-schedule"> - Main container\n• <h3> - Title for the schedule'
                        },
                        {
                            title: 'Add Schedule Grid',
                            description: 'Now let\'s create a container for the schedule items!',
                            instruction: 'Add this inside the workout-schedule:',
                            code: `<div class="schedule-grid">
</div>`,
                            codeFile: 'index.html',
                            tip: 'The grid will hold all our workout days!',
                            explanation: 'What this does:\n• <div class="schedule-grid"> - Container for schedule items'
                        },
                        {
                            title: 'Add First Workout Day',
                            description: 'Let\'s add Monday\'s workout!',
                            instruction: 'Add this inside the schedule-grid:',
                            code: `<div class="schedule-item">
  <span class="day">Monday</span>
  <span class="workout">Cardio</span>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Each item shows the day and workout type!',
                            explanation: 'What this does:\n• <div class="schedule-item"> - One workout day\n• <span class="day"> - Day of week\n• <span class="workout"> - Type of workout'
                        },
                        {
                            title: 'Add More Workout Days',
                            description: 'Let\'s add Wednesday and Friday workouts!',
                            instruction: 'Add these after Monday:',
                            code: `<div class="schedule-item">
  <span class="day">Wednesday</span>
  <span class="workout">Strength Training</span>
</div>
<div class="schedule-item">
  <span class="day">Friday</span>
  <span class="workout">Yoga & Stretching</span>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Now we have a 3-day workout schedule!',
                            explanation: 'What this does:\n• Adds two more workout days\n• Wednesday for strength training\n• Friday for yoga'
                        },
                        {
                            title: 'Style the Container',
                            description: 'Let\'s style the main container!',
                            instruction: 'Add this CSS:',
                            code: `.workout-schedule {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.schedule-grid {
  display: grid;
  gap: 0.75rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'Grid layout stacks items vertically!',
                            explanation: 'What this does:\n• background: white - Clean background\n• display: grid - Grid layout\n• gap: 0.75rem - Space between items'
                        },
                        {
                            title: 'Style Schedule Items',
                            description: 'Let\'s style each workout day!',
                            instruction: 'Add this CSS:',
                            code: `.schedule-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8fafc;
  border-left: 3px solid #3b82f6;
  border-radius: 8px;
  transition: transform 0.2s;
}

.schedule-item:hover {
  transform: translateX(4px);
}`,
                            codeFile: 'styles.css',
                            tip: 'Items slide right when you hover!',
                            explanation: 'What this does:\n• display: flex - Aligns day and workout\n• justify-content: space-between - Pushes them apart\n• border-left - Colored accent bar\n• transform - Slides on hover'
                        },
                        {
                            title: 'Style Day and Workout Text',
                            description: 'Let\'s style the day names and workout types!',
                            instruction: 'Add this CSS:',
                            code: `.day {
  font-weight: 600;
  color: #1a1a1a;
}

.workout {
  color: #6b7280;
  font-size: 0.9rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'Bold days make them easy to scan!',
                            explanation: 'What this does:\n• font-weight: 600 - Bold day names\n• color: #6b7280 - Gray workout text\n• font-size: 0.9rem - Slightly smaller workout text'
                        },
                        {
                            title: 'Add Color Variations',
                            description: 'Finally, let\'s give each day a unique color!',
                            instruction: 'Add this CSS:',
                            code: `.schedule-item:nth-child(1) {
  background: #eff6ff;
  border-left-color: #3b82f6;
}

.schedule-item:nth-child(2) {
  background: #f0fdf4;
  border-left-color: #10b981;
}

.schedule-item:nth-child(3) {
  background: #fef3c7;
  border-left-color: #f59e0b;
}`,
                            codeFile: 'styles.css',
                            tip: 'Different colors make it easier to scan!',
                            explanation: 'What this does:\n• :nth-child(1) - Monday (blue)\n• :nth-child(2) - Wednesday (green)\n• :nth-child(3) - Friday (orange)\n• Each day gets matching background and border'
                        }
                    ],
                    learningObjectives: [
                        'Create schedule layouts',
                        'Use flexbox for alignment',
                        'Add hover effects',
                        'Apply color variations'
                    ]
                },
                useCases: [
                    {
                        title: 'Fitness Websites',
                        description: 'Display workout schedules'
                    },
                    {
                        title: 'Class Schedules',
                        description: 'Show weekly class times'
                    }
                ]
            },

            // Expandable Timeline Details
            {
                id: 'expandable-timeline',
                name: 'Expandable Timeline Details',
                type: 'interactions',
                difficulty: 'intermediate',
                hasJS: true,
                mobileFirst: false,
                tags: ['Interactive', 'JavaScript', 'Timeline'],
                description: 'Timeline with expandable details. Click to reveal more information about each event!',
                preview: `<div class="component-preview-placeholder">
                    <div style="padding: 1.5rem; max-width: 300px; margin: 0 auto;">
                        <div style="border-left: 3px solid #3b82f6; padding-left: 1.5rem; position: relative; margin-bottom: 1.5rem;">
                            <div style="position: absolute; left: -9px; top: 0; width: 14px; height: 14px; background: #3b82f6; border-radius: 50%; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);"></div>
                            <div style="font-size: 0.75rem; color: #3b82f6; font-weight: 700; margin-bottom: 0.4rem;">2024</div>
                            <div style="font-size: 0.95rem; font-weight: 700; color: #1a1a1a; margin-bottom: 0.4rem; cursor: pointer;">Major Event G•+</div>
                            <div style="font-size: 0.75rem; color: #6b7280; line-height: 1.5; background: #f8fafc; padding: 0.75rem; border-radius: 8px; margin-top: 0.5rem;">Full details about this event...</div>
                        </div>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Build a timeline with clickable expandable details',
                    duration: '30 minutes',
                    steps: [
                        {
                            title: 'Create Timeline Container',
                            description: 'Let\'s start by creating a container for our expandable timeline!',
                            instruction: 'Add this HTML:',
                            code: `<div class="expandable-timeline">
</div>`,
                            codeFile: 'index.html',
                            tip: 'This will hold all our timeline events!',
                            explanation: 'What this does:\n• <div class="expandable-timeline"> - Main container for timeline'
                        },
                        {
                            title: 'Add First Timeline Item',
                            description: 'Let\'s add our first event to the timeline!',
                            instruction: 'Add this inside the timeline:',
                            code: `<div class="timeline-item">
</div>`,
                            codeFile: 'index.html',
                            tip: 'Each timeline-item represents one event!',
                            explanation: 'What this does:\n• <div class="timeline-item"> - Container for one event'
                        },
                        {
                            title: 'Add Year and Title',
                            description: 'Now let\'s add the year and event title!',
                            instruction: 'Add this inside the timeline-item:',
                            code: `<div class="timeline-year">2024</div>
<div class="timeline-title">Major Championship</div>`,
                            codeFile: 'index.html',
                            tip: 'The title will be clickable to show more details!',
                            explanation: 'What this does:\n• <div class="timeline-year"> - The year\n• <div class="timeline-title"> - Event name (clickable)'
                        },
                        {
                            title: 'Add Hidden Details',
                            description: 'Let\'s add the expandable details section!',
                            instruction: 'Add this after the title:',
                            code: `<div class="timeline-details hidden">
  <p>Full details about this championship, including teams, scores, and memorable moments.</p>
</div>`,
                            codeFile: 'index.html',
                            tip: 'class="hidden" makes it invisible until clicked!',
                            explanation: 'What this does:\n• <div class="timeline-details"> - Details section\n• class="hidden" - Starts invisible\n• <p> - The detailed information'
                        },
                        {
                            title: 'Add Second Event',
                            description: 'Let\'s add another event to the timeline!',
                            instruction: 'Add this after the first timeline-item:',
                            code: `<div class="timeline-item">
  <div class="timeline-year">2023</div>
  <div class="timeline-title">Historic Victory</div>
  <div class="timeline-details hidden">
    <p>Details about this historic victory and its significance.</p>
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Now we have 2 events in our timeline!',
                            explanation: 'What this does:\n• Adds a second event\n• Same structure as the first\n• Details also start hidden'
                        },
                        {
                            title: 'Style Timeline Items',
                            description: 'Let\'s add the vertical line and positioning!',
                            instruction: 'Add this CSS:',
                            code: `.timeline-item {
  border-left: 3px solid #3b82f6;
  padding-left: 2rem;
  position: relative;
  margin-bottom: 2rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'border-left creates the vertical timeline line!',
                            explanation: 'What this does:\n• border-left - Vertical blue line\n• padding-left - Space for content\n• position: relative - For dot positioning\n• margin-bottom - Space between events'
                        },
                        {
                            title: 'Add Timeline Dots',
                            description: 'Let\'s add the circular dots on the timeline!',
                            instruction: 'Add this CSS:',
                            code: `.timeline-item::before {
  content: '';
  position: absolute;
  left: -9px;
  top: 0;
  width: 14px;
  height: 14px;
  background: #3b82f6;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
}`,
                            codeFile: 'styles.css',
                            tip: '::before creates an element without adding HTML!',
                            explanation: 'What this does:\n• ::before - Creates pseudo-element\n• position: absolute - Places it on the line\n• border-radius: 50% - Makes it circular\n• box-shadow - Adds glow effect'
                        },
                        {
                            title: 'Style Year and Title',
                            description: 'Let\'s style the year and event title!',
                            instruction: 'Add this CSS:',
                            code: `.timeline-year {
  font-size: 0.875rem;
  color: #3b82f6;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a1a;
  cursor: pointer;
  margin-bottom: 0.5rem;
}

.timeline-title:hover {
  color: #3b82f6;
}`,
                            codeFile: 'styles.css',
                            tip: 'cursor: pointer shows the title is clickable!',
                            explanation: 'What this does:\n• Year is blue and bold\n• Title is clickable (cursor: pointer)\n• Title turns blue on hover'
                        },
                        {
                            title: 'Style Details Section',
                            description: 'Let\'s style the expandable details!',
                            instruction: 'Add this CSS:',
                            code: `.timeline-details {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 0.75rem;
  line-height: 1.6;
}

.timeline-details.hidden {
  display: none;
}`,
                            codeFile: 'styles.css',
                            tip: 'The hidden class makes it invisible!',
                            explanation: 'What this does:\n• background: #f8fafc - Light gray background\n• padding - Space inside\n• .hidden - Hides the element\n• line-height - Easy to read'
                        },
                        {
                            title: 'Add Click Functionality',
                            description: 'Let\'s make titles clickable to show/hide details!',
                            instruction: 'Add this JavaScript:',
                            code: `const timelineTitles = document.querySelectorAll('.timeline-title');

timelineTitles.forEach(title => {
  title.addEventListener('click', () => {
    const details = title.nextElementSibling;
    details.classList.toggle('hidden');
  });
});`,
                            codeFile: 'script.js',
                            tip: 'Click titles to expand and collapse details!',
                            explanation: 'What this does:\n• querySelectorAll - Gets all titles\n• addEventListener - Watches for clicks\n• nextElementSibling - Gets the details div\n• classList.toggle - Shows/hides details'
                        }
                    ],
                    learningObjectives: [
                        'Create expandable sections',
                        'Toggle visibility with JavaScript',
                        'Use nextElementSibling',
                        'Add interactive indicators'
                    ]
                },
                useCases: [
                    {
                        title: 'History Websites',
                        description: 'Show detailed historical events'
                    },
                    {
                        title: 'PBA History Sites',
                        description: 'Display championship details'
                    }
                ]
            },

            // Game Info Modal
            {
                id: 'game-info-modal',
                name: 'Game Info Modal',
                type: 'interactions',
                difficulty: 'intermediate',
                hasJS: true,
                mobileFirst: false,
                tags: ['Interactive', 'JavaScript', 'Modal'],
                description: 'Popup modal to display detailed game information. Click to open, click outside to close!',
                preview: `<div class="component-preview-placeholder">
                    <div style="padding: 1.5rem; text-align: center;">
                        <button style="padding: 0.75rem 1.5rem; background: #3b82f6; color: white; border: none; border-radius: 10px; font-weight: 600; cursor: pointer; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);">View Game Info</button>
                        <div style="margin-top: 1rem; font-size: 0.75rem; color: #6b7280;">Click to see modal</div>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Build a modal popup for game information',
                    duration: '35 minutes',
                    steps: [
                        {
                            title: 'Create Open Button',
                            description: 'Let\'s start by creating a button to open the modal!',
                            instruction: 'Add this HTML:',
                            code: `<button class="open-modal-btn" id="openModal">View Game Info</button>`,
                            codeFile: 'index.html',
                            tip: 'This button will trigger the modal to appear!',
                            explanation: 'What this does:\n• <button> - Clickable button\n• id="openModal" - So JavaScript can find it'
                        },
                        {
                            title: 'Create Modal Container',
                            description: 'Now let\'s create the modal structure!',
                            instruction: 'Add this after the button:',
                            code: `<div class="game-modal hidden" id="gameModal">
</div>`,
                            codeFile: 'index.html',
                            tip: 'class="hidden" makes it invisible at first!',
                            explanation: 'What this does:\n• <div class="game-modal"> - Modal container\n• class="hidden" - Starts invisible\n• id="gameModal" - For JavaScript'
                        },
                        {
                            title: 'Add Modal Overlay',
                            description: 'Let\'s add the dark background overlay!',
                            instruction: 'Add this inside the modal:',
                            code: `<div class="modal-overlay"></div>`,
                            codeFile: 'index.html',
                            tip: 'The overlay darkens the page behind the modal!',
                            explanation: 'What this does:\n• <div class="modal-overlay"> - Dark background\n• Clicking it will close the modal'
                        },
                        {
                            title: 'Add Modal Content Box',
                            description: 'Now let\'s add the white content box!',
                            instruction: 'Add this after the overlay:',
                            code: `<div class="modal-content">
</div>`,
                            codeFile: 'index.html',
                            tip: 'This is the white box that holds the game info!',
                            explanation: 'What this does:\n• <div class="modal-content"> - White content box\n• Will appear on top of the overlay'
                        },
                        {
                            title: 'Add Close Button',
                            description: 'Let\'s add an X button to close the modal!',
                            instruction: 'Add this inside modal-content:',
                            code: `<button class="close-modal" id="closeModal">
  <i data-lucide="x"></i>
</button>`,
                            codeFile: 'index.html',
                            tip: 'The X icon comes from Lucide!',
                            explanation: 'What this does:\n• <button class="close-modal"> - Close button\n• <i data-lucide="x"> - X icon\n• id="closeModal" - For JavaScript'
                        },
                        {
                            title: 'Add Game Information',
                            description: 'Now let\'s add the actual game details!',
                            instruction: 'Add this after the close button:',
                            code: `<h3>Game Title</h3>
<p><strong>Genre:</strong> Action RPG</p>
<p><strong>Release:</strong> 1998</p>
<p><strong>Description:</strong> An epic adventure game...</p>`,
                            codeFile: 'index.html',
                            tip: 'Replace with real game information!',
                            explanation: 'What this does:\n• <h3> - Game title\n• <p> - Game details\n• <strong> - Bold labels'
                        },
                        {
                            title: 'Style Modal Container',
                            description: 'Let\'s make the modal cover the whole screen!',
                            instruction: 'Add this CSS:',
                            code: `.game-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.game-modal.hidden {
  display: none;
}`,
                            codeFile: 'styles.css',
                            tip: 'position: fixed makes it stay in place when scrolling!',
                            explanation: 'What this does:\n• position: fixed - Covers whole screen\n• display: flex - Centers content\n• .hidden - Hides the modal'
                        },
                        {
                            title: 'Style the Overlay',
                            description: 'Let\'s style the dark background!',
                            instruction: 'Add this CSS:',
                            code: `.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
}`,
                            codeFile: 'styles.css',
                            tip: 'backdrop-filter adds a blur effect!',
                            explanation: 'What this does:\n• background: rgba(0, 0, 0, 0.7) - 70% black\n• backdrop-filter: blur - Blurs background\n• Covers entire screen'
                        },
                        {
                            title: 'Style Content Box',
                            description: 'Let\'s style the white content box!',
                            instruction: 'Add this CSS:',
                            code: `.modal-content {
  position: relative;
  background: white;
  padding: 2rem;
  border-radius: 16px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  z-index: 1001;
}`,
                            codeFile: 'styles.css',
                            tip: 'z-index: 1001 puts it above the overlay!',
                            explanation: 'What this does:\n• background: white - White box\n• border-radius: 16px - Rounded corners\n• box-shadow - Dramatic shadow\n• z-index - Appears on top'
                        },
                        {
                            title: 'Style Close Button',
                            description: 'Let\'s style the X button!',
                            instruction: 'Add this CSS:',
                            code: `.close-modal {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #6b7280;
}

.close-modal:hover {
  color: #1a1a1a;
}`,
                            codeFile: 'styles.css',
                            tip: 'position: absolute puts it in the top-right corner!',
                            explanation: 'What this does:\n• position: absolute - Top-right corner\n• background: none - Transparent\n• color changes on hover'
                        },
                        {
                            title: 'Add Open Functionality',
                            description: 'Let\'s make the button open the modal!',
                            instruction: 'Add this JavaScript:',
                            code: `const openBtn = document.getElementById('openModal');
const modal = document.getElementById('gameModal');

openBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});`,
                            codeFile: 'script.js',
                            tip: 'Removing "hidden" makes the modal visible!',
                            explanation: 'What this does:\n• getElementById - Gets the button and modal\n• addEventListener - Watches for clicks\n• classList.remove - Shows the modal'
                        },
                        {
                            title: 'Add Close Functionality',
                            description: 'Let\'s make the X button close the modal!',
                            instruction: 'Add this JavaScript:',
                            code: `const closeBtn = document.getElementById('closeModal');

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});`,
                            codeFile: 'script.js',
                            tip: 'Adding "hidden" makes the modal invisible!',
                            explanation: 'What this does:\n• Gets the close button\n• Watches for clicks\n• classList.add - Hides the modal'
                        },
                        {
                            title: 'Close on Overlay Click',
                            description: 'Let\'s make clicking outside close the modal!',
                            instruction: 'Add this JavaScript:',
                            code: `const overlay = modal.querySelector('.modal-overlay');

overlay.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Initialize Lucide icons
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}`,
                            codeFile: 'script.js',
                            tip: 'Now you can click outside to close!',
                            explanation: 'What this does:\n• querySelector - Gets the overlay\n• Watches for clicks on overlay\n• Hides modal when clicked\n• Initializes Lucide icons'
                        }
                    ],
                    learningObjectives: [
                        'Create modal popups',
                        'Use fixed positioning',
                        'Handle overlay clicks',
                        'Toggle visibility'
                    ]
                },
                useCases: [
                    {
                        title: 'Game History Sites',
                        description: 'Show detailed game information'
                    },
                    {
                        title: 'Portfolio Sites',
                        description: 'Display project details'
                    }
                ]
            },

            // Tribe Profile Section
            {
                id: 'tribe-profile',
                name: 'Tribe Profile Section',
                type: 'layout',
                difficulty: 'beginner',
                hasJS: false,
                mobileFirst: false,
                tags: ['Beginner-Friendly', 'CSS-Only', 'Flexbox'],
                description: 'Profile card for indigenous tribes with image and information. Clean and respectful design!',
                preview: `<div class="component-preview-placeholder">
                    <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 320px; margin: 1rem auto;">
                        <div style="height: 140px; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);"></div>
                        <div style="padding: 1.5rem;">
                            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.25rem; font-weight: 700; color: #1a1a1a;">Tribe Name</h3>
                            <p style="margin: 0 0 1rem 0; font-size: 0.85rem; color: #6b7280; line-height: 1.6;">Region: Northern Philippines</p>
                            <p style="margin: 0; font-size: 0.85rem; color: #4b5563; line-height: 1.6;">Known for their rich cultural heritage and traditional crafts...</p>
                        </div>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Build a profile card for indigenous tribes',
                    duration: '20 minutes',
                    steps: [
                        {
                            title: 'Create Profile Container',
                            description: 'Let\'s start by creating a container for the tribe profile!',
                            instruction: 'Add this HTML:',
                            code: `<div class="tribe-profile">
</div>`,
                            codeFile: 'index.html',
                            tip: 'This will hold the tribe image and information!',
                            explanation: 'What this does:\n• <div class="tribe-profile"> - Main container for the profile card'
                        },
                        {
                            title: 'Add Tribe Image',
                            description: 'Let\'s add an image section at the top!',
                            instruction: 'Add this inside the profile:',
                            code: `<div class="tribe-profile">
  <div class="tribe-image">
    <img src="tribe-photo.jpg" alt="Tribe name">
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Replace with a real photo of the tribe or cultural site!',
                            explanation: 'What this does:\n• <div class="tribe-image"> - Container for image\n• <img> - The tribe photo\n• alt - Description for accessibility'
                        },
                        {
                            title: 'Add Tribe Information',
                            description: 'Now let\'s add the tribe name and details!',
                            instruction: 'Add this after the image:',
                            code: `<div class="tribe-info">
  <h3 class="tribe-name">Ifugao People</h3>
  <p class="tribe-region">
    <i data-lucide="map-pin"></i>
    Cordillera Region, Northern Philippines
  </p>
  <p class="tribe-description">
    Known for the magnificent rice terraces and rich cultural heritage passed down through generations.
  </p>
</div>`,
                            codeFile: 'index.html',
                            tip: 'The map-pin icon shows the location!',
                            explanation: 'What this does:\n• <h3> - Tribe name\n• <p class="tribe-region"> - Location with icon\n• <p class="tribe-description"> - Brief description'
                        },
                        {
                            title: 'Style the Profile Container',
                            description: 'Let\'s give the card a clean, modern look!',
                            instruction: 'Add this CSS:',
                            code: `.tribe-profile {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  max-width: 400px;
}`,
                            codeFile: 'styles.css',
                            tip: 'overflow: hidden keeps the image inside the rounded corners!',
                            explanation: 'What this does:\n• background: white - Clean background\n• border-radius: 16px - Rounded corners\n• overflow: hidden - Clips content at edges\n• box-shadow - Adds depth'
                        },
                        {
                            title: 'Style the Image Section',
                            description: 'Let\'s make the image fill the top of the card!',
                            instruction: 'Add this CSS:',
                            code: `.tribe-image {
  height: 200px;
  overflow: hidden;
}

.tribe-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}`,
                            codeFile: 'styles.css',
                            tip: 'object-fit: cover makes the image fill without stretching!',
                            explanation: 'What this does:\n• height: 200px - Fixed height\n• width: 100% - Full width\n• object-fit: cover - Fills space without distortion'
                        },
                        {
                            title: 'Style the Info Section',
                            description: 'Let\'s add padding and style the text!',
                            instruction: 'Add this CSS:',
                            code: `.tribe-info {
  padding: 2rem;
}

.tribe-name {
  margin: 0 0 0.75rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
}`,
                            codeFile: 'styles.css',
                            tip: 'Padding creates breathing room around the text!',
                            explanation: 'What this does:\n• padding: 2rem - Space inside\n• font-size: 1.5rem - Big title\n• font-weight: 700 - Bold text'
                        },
                        {
                            title: 'Style the Region and Description',
                            description: 'Finally, let\'s style the location and description!',
                            instruction: 'Add this CSS:',
                            code: `.tribe-region {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
  color: #6b7280;
  font-weight: 600;
}

.tribe-region i {
  width: 16px;
  height: 16px;
}

.tribe-description {
  margin: 0;
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.6;
}`,
                            codeFile: 'styles.css',
                            tip: 'Flexbox aligns the icon and text perfectly!',
                            explanation: 'What this does:\n• display: flex - Aligns icon and text\n• gap: 0.5rem - Space between icon and text\n• line-height: 1.6 - Easy to read'
                        }
                    ],
                    learningObjectives: [
                        'Create profile cards',
                        'Use object-fit for images',
                        'Structure information clearly',
                        'Add location icons'
                    ]
                },
                useCases: [
                    {
                        title: 'Indigenous People Sites',
                        description: 'Display tribe profiles'
                    },
                    {
                        title: 'Cultural Sites',
                        description: 'Show community information'
                    }
                ]
            },

            // Cultural Artifact Highlight
            {
                id: 'cultural-artifact',
                name: 'Cultural Artifact Highlight',
                type: 'ui-elements',
                difficulty: 'beginner',
                hasJS: false,
                mobileFirst: false,
                tags: ['Beginner-Friendly', 'CSS-Only', 'Grid'],
                description: 'Showcase cultural artifacts with image and description. Perfect for museums and cultural sites!',
                preview: `<div class="component-preview-placeholder">
                    <div style="background: white; padding: 1.5rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 300px; margin: 1rem auto; display: flex; gap: 1rem; align-items: center;">
                        <div style="width: 80px; height: 80px; background: #f3f4f6; border-radius: 12px; flex-shrink: 0;"></div>
                        <div>
                            <h4 style="margin: 0 0 0.25rem 0; font-size: 0.95rem; font-weight: 700; color: #1a1a1a;">Traditional Weaving</h4>
                            <p style="margin: 0; font-size: 0.75rem; color: #6b7280; line-height: 1.5;">Ancient textile art passed through generations</p>
                        </div>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Build a cultural artifact display component',
                    duration: '20 minutes',
                    steps: [
                        {
                            title: 'Create Artifact Container',
                            description: 'Let\'s start by creating a container for the artifact!',
                            instruction: 'Add this HTML:',
                            code: `<div class="artifact-highlight">
</div>`,
                            codeFile: 'index.html',
                            tip: 'This will hold the artifact image and information side by side!',
                            explanation: 'What this does:\n• <div class="artifact-highlight"> - Main container'
                        },
                        {
                            title: 'Add Artifact Image',
                            description: 'Let\'s add an image of the artifact!',
                            instruction: 'Add this inside the container:',
                            code: `<div class="artifact-highlight">
  <div class="artifact-image">
    <img src="artifact.jpg" alt="Traditional weaving">
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Use a square image for best results!',
                            explanation: 'What this does:\n• <div class="artifact-image"> - Image container\n• <img> - The artifact photo'
                        },
                        {
                            title: 'Add Artifact Information',
                            description: 'Now let\'s add the artifact details!',
                            instruction: 'Add this after the image:',
                            code: `<div class="artifact-info">
  <h4 class="artifact-name">Traditional Weaving</h4>
  <p class="artifact-description">
    Ancient textile art passed down through generations, featuring intricate patterns.
  </p>
  <span class="artifact-period">Pre-colonial Era</span>
</div>`,
                            codeFile: 'index.html',
                            tip: 'The period badge shows when the artifact is from!',
                            explanation: 'What this does:\n• <h4> - Artifact name\n• <p> - Description\n• <span> - Time period badge'
                        },
                        {
                            title: 'Style the Container',
                            description: 'Let\'s arrange the image and info side by side!',
                            instruction: 'Add this CSS:',
                            code: `.artifact-highlight {
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  display: flex;
  gap: 1.5rem;
  align-items: center;
}`,
                            codeFile: 'styles.css',
                            tip: 'Flexbox makes them sit side by side!',
                            explanation: 'What this does:\n• display: flex - Horizontal layout\n• gap: 1.5rem - Space between image and text\n• align-items: center - Vertically centered'
                        },
                        {
                            title: 'Style the Image',
                            description: 'Let\'s make the image a fixed size!',
                            instruction: 'Add this CSS:',
                            code: `.artifact-image {
  width: 100px;
  height: 100px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
}

.artifact-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}`,
                            codeFile: 'styles.css',
                            tip: 'flex-shrink: 0 prevents the image from getting squished!',
                            explanation: 'What this does:\n• width/height: 100px - Square image\n• flex-shrink: 0 - Keeps size fixed\n• object-fit: cover - Fills space'
                        },
                        {
                            title: 'Style the Text',
                            description: 'Let\'s style the artifact name and description!',
                            instruction: 'Add this CSS:',
                            code: `.artifact-name {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a1a;
}

.artifact-description {
  margin: 0 0 0.75rem 0;
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.6;
}`,
                            codeFile: 'styles.css',
                            tip: 'Good line-height makes text easier to read!',
                            explanation: 'What this does:\n• font-weight: 700 - Bold name\n• color: #6b7280 - Gray description\n• line-height: 1.6 - Readable spacing'
                        },
                        {
                            title: 'Style the Period Badge',
                            description: 'Finally, let\'s style the time period badge!',
                            instruction: 'Add this CSS:',
                            code: `.artifact-period {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #f3f4f6;
  color: #6b7280;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}`,
                            codeFile: 'styles.css',
                            tip: 'The badge makes the time period stand out!',
                            explanation: 'What this does:\n• display: inline-block - Fits content\n• background: #f3f4f6 - Light gray\n• border-radius: 12px - Pill shape'
                        }
                    ],
                    learningObjectives: [
                        'Create horizontal card layouts',
                        'Use flexbox for alignment',
                        'Style period badges',
                        'Handle image sizing'
                    ]
                },
                useCases: [
                    {
                        title: 'Indigenous People Sites',
                        description: 'Showcase cultural artifacts'
                    },
                    {
                        title: 'Museum Sites',
                        description: 'Display collection items'
                    }
                ]
            },

            // Team History Table
            {
                id: 'team-history-table',
                name: 'Team History Table',
                type: 'ui-elements',
                difficulty: 'beginner',
                hasJS: false,
                mobileFirst: false,
                tags: ['Beginner-Friendly', 'CSS-Only', 'Tables'],
                description: 'Clean table to display team championship history. Perfect for sports websites!',
                preview: `<div class="component-preview-placeholder">
                    <div style="background: white; padding: 1.5rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 320px; margin: 1rem auto; overflow: hidden;">
                        <h4 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 700; color: #1a1a1a;">Championship History</h4>
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
                            <thead>
                                <tr style="background: #f8fafc; border-bottom: 2px solid #e5e7eb;">
                                    <th style="padding: 0.75rem; text-align: left; font-weight: 600; color: #6b7280;">Year</th>
                                    <th style="padding: 0.75rem; text-align: left; font-weight: 600; color: #6b7280;">Team</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="border-bottom: 1px solid #e5e7eb;">
                                    <td style="padding: 0.75rem; color: #1a1a1a; font-weight: 600;">2024</td>
                                    <td style="padding: 0.75rem; color: #4b5563;">Team Alpha</td>
                                </tr>
                                <tr style="border-bottom: 1px solid #e5e7eb;">
                                    <td style="padding: 0.75rem; color: #1a1a1a; font-weight: 600;">2023</td>
                                    <td style="padding: 0.75rem; color: #4b5563;">Team Beta</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Build a table to display team championship history',
                    duration: '25 minutes',
                    steps: [
                        {
                            title: 'Create Table Container',
                            description: 'Let\'s start by creating a container for our table!',
                            instruction: 'Add this HTML:',
                            code: `<div class="history-table-container">
  <h3>Championship History</h3>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Tables are perfect for displaying organized data!',
                            explanation: 'What this does:\n• <div> - Container for table\n• <h3> - Title for the table'
                        },
                        {
                            title: 'Create Table Structure',
                            description: 'Now let\'s create the table with headers!',
                            instruction: 'Add this table inside the container:',
                            code: `<table class="history-table">
  <thead>
    <tr>
      <th>Year</th>
      <th>Champion</th>
      <th>Runner-up</th>
    </tr>
  </thead>
</table>`,
                            codeFile: 'index.html',
                            tip: '<thead> is for table headers - the column titles!',
                            explanation: 'What this does:\n• <table> - Creates the table\n• <thead> - Header section\n• <tr> - Table row\n• <th> - Header cells'
                        },
                        {
                            title: 'Add Table Data',
                            description: 'Let\'s add championship records!',
                            instruction: 'Add this tbody after thead:',
                            code: `<tbody>
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
</tbody>`,
                            codeFile: 'index.html',
                            tip: '<tbody> holds the actual data rows!',
                            explanation: 'What this does:\n• <tbody> - Body section\n• <tr> - Each championship year\n• <td> - Data cells'
                        },
                        {
                            title: 'Style the Container',
                            description: 'Let\'s give the container a clean look!',
                            instruction: 'Add this CSS:',
                            code: `.history-table-container {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  overflow-x: auto;
}`,
                            codeFile: 'styles.css',
                            tip: 'overflow-x: auto makes the table scrollable on small screens!',
                            explanation: 'What this does:\n• background: white - Clean background\n• padding: 2rem - Space inside\n• overflow-x: auto - Horizontal scroll if needed'
                        },
                        {
                            title: 'Style the Table',
                            description: 'Let\'s style the table structure!',
                            instruction: 'Add this CSS:',
                            code: `.history-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'border-collapse removes gaps between cells!',
                            explanation: 'What this does:\n• width: 100% - Full width\n• border-collapse - Merges borders\n• font-size - Readable text'
                        },
                        {
                            title: 'Style Table Headers',
                            description: 'Let\'s make the headers stand out!',
                            instruction: 'Add this CSS:',
                            code: `.history-table thead tr {
  background: #f8fafc;
  border-bottom: 2px solid #e5e7eb;
}

.history-table th {
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
}`,
                            codeFile: 'styles.css',
                            tip: 'text-transform: uppercase makes headers look professional!',
                            explanation: 'What this does:\n• background: #f8fafc - Light gray header\n• text-transform: uppercase - Capital letters\n• letter-spacing - Spaced out text'
                        },
                        {
                            title: 'Style Table Rows',
                            description: 'Let\'s style the data rows with hover effects!',
                            instruction: 'Add this CSS:',
                            code: `.history-table tbody tr {
  border-bottom: 1px solid #e5e7eb;
  transition: background 0.2s;
}

.history-table tbody tr:hover {
  background: #f8fafc;
}

.history-table td {
  padding: 1rem;
  color: #4b5563;
}

.history-table td:first-child {
  font-weight: 600;
  color: #1a1a1a;
}`,
                            codeFile: 'styles.css',
                            tip: 'Rows highlight when you hover - makes it easier to read!',
                            explanation: 'What this does:\n• border-bottom - Lines between rows\n• :hover - Highlights on mouse over\n• :first-child - Makes year column bold'
                        }
                    ],
                    learningObjectives: [
                        'Create HTML tables',
                        'Style table headers and rows',
                        'Add hover effects',
                        'Make tables responsive'
                    ]
                },
                useCases: [
                    {
                        title: 'PBA History Sites',
                        description: 'Display championship records'
                    },
                    {
                        title: 'Sports Sites',
                        description: 'Show team statistics'
                    }
                ]
            },

            // Player Stats Panel
            {
                id: 'player-stats-panel',
                name: 'Player Stats Panel',
                type: 'ui-elements',
                difficulty: 'beginner',
                hasJS: false,
                mobileFirst: false,
                tags: ['Beginner-Friendly', 'CSS-Only', 'Grid'],
                description: 'Display player statistics in an organized panel. Great for sports profiles!',
                preview: `<div class="component-preview-placeholder">
                    <div style="background: white; padding: 1.5rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 300px; margin: 1rem auto;">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                            <div style="width: 60px; height: 60px; background: #3b82f6; border-radius: 50%;"></div>
                            <div>
                                <h4 style="margin: 0 0 0.25rem 0; font-size: 1.1rem; font-weight: 700; color: #1a1a1a;">Player Name</h4>
                                <p style="margin: 0; font-size: 0.85rem; color: #6b7280;">Forward</p>
                            </div>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                            <div style="text-align: center; padding: 0.75rem; background: #f8fafc; border-radius: 8px;">
                                <div style="font-size: 1.5rem; font-weight: 800; color: #3b82f6;">25</div>
                                <div style="font-size: 0.75rem; color: #6b7280; font-weight: 600;">Points</div>
                            </div>
                            <div style="text-align: center; padding: 0.75rem; background: #f8fafc; border-radius: 8px;">
                                <div style="font-size: 1.5rem; font-weight: 800; color: #10b981;">12</div>
                                <div style="font-size: 0.75rem; color: #6b7280; font-weight: 600;">Assists</div>
                            </div>
                        </div>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Build a player statistics display panel',
                    duration: '25 minutes',
                    steps: [
                        {
                            title: 'Create Panel Container',
                            description: 'Let\'s start by creating a container for the player stats!',
                            instruction: 'Add this HTML:',
                            code: `<div class="player-stats-panel">
</div>`,
                            codeFile: 'index.html',
                            tip: 'This will hold the player photo and statistics!',
                            explanation: 'What this does:\n• <div class="player-stats-panel"> - Main container'
                        },
                        {
                            title: 'Add Player Header',
                            description: 'Let\'s add the player photo and name!',
                            instruction: 'Add this inside the panel:',
                            code: `<div class="player-header">
  <img src="player.jpg" alt="Player" class="player-photo">
  <div class="player-info">
    <h3 class="player-name">John Doe</h3>
    <p class="player-position">Forward</p>
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'The header shows who the player is!',
                            explanation: 'What this does:\n• <img> - Player photo\n• <h3> - Player name\n• <p> - Position they play'
                        },
                        {
                            title: 'Add Statistics Grid',
                            description: 'Now let\'s add the stats boxes!',
                            instruction: 'Add this after the header:',
                            code: `<div class="stats-grid">
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
</div>`,
                            codeFile: 'index.html',
                            tip: 'Each stat gets its own box!',
                            explanation: 'What this does:\n• <div class="stats-grid"> - Container for stats\n• <div class="stat-box"> - Each statistic\n• stat-value - The number\n• stat-label - What it measures'
                        },
                        {
                            title: 'Style the Panel',
                            description: 'Let\'s give the panel a clean look!',
                            instruction: 'Add this CSS:',
                            code: `.player-stats-panel {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  max-width: 400px;
}`,
                            codeFile: 'styles.css',
                            tip: 'White background makes stats easy to read!',
                            explanation: 'What this does:\n• background: white - Clean background\n• padding: 2rem - Space inside\n• box-shadow - Adds depth'
                        },
                        {
                            title: 'Style Player Header',
                            description: 'Let\'s arrange the photo and name side by side!',
                            instruction: 'Add this CSS:',
                            code: `.player-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.player-photo {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
}`,
                            codeFile: 'styles.css',
                            tip: 'border-radius: 50% makes the photo circular!',
                            explanation: 'What this does:\n• display: flex - Side by side layout\n• gap: 1rem - Space between photo and text\n• border-radius: 50% - Round photo'
                        },
                        {
                            title: 'Style Player Info',
                            description: 'Let\'s style the name and position!',
                            instruction: 'Add this CSS:',
                            code: `.player-name {
  margin: 0 0 0.25rem 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
}

.player-position {
  margin: 0;
  font-size: 0.9rem;
  color: #6b7280;
  font-weight: 600;
}`,
                            codeFile: 'styles.css',
                            tip: 'Bold name makes it stand out!',
                            explanation: 'What this does:\n• font-weight: 700 - Bold name\n• color: #6b7280 - Gray position\n• Good spacing between elements'
                        },
                        {
                            title: 'Create Stats Grid',
                            description: 'Let\'s arrange stats in a 2x2 grid!',
                            instruction: 'Add this CSS:',
                            code: `.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.stat-box {
  text-align: center;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px;
}`,
                            codeFile: 'styles.css',
                            tip: 'Grid makes stats line up perfectly!',
                            explanation: 'What this does:\n• grid-template-columns - 2 equal columns\n• gap: 1rem - Space between boxes\n• text-align: center - Centers text'
                        },
                        {
                            title: 'Style Stat Values and Labels',
                            description: 'Finally, let\'s style the numbers and labels!',
                            instruction: 'Add this CSS:',
                            code: `.stat-value {
  font-size: 1.75rem;
  font-weight: 800;
  color: #3b82f6;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}`,
                            codeFile: 'styles.css',
                            tip: 'Big numbers grab attention!',
                            explanation: 'What this does:\n• font-size: 1.75rem - Big numbers\n• color: #3b82f6 - Blue for emphasis\n• text-transform: uppercase - Capital labels'
                        }
                    ],
                    learningObjectives: [
                        'Create player profile cards',
                        'Display statistics in grids',
                        'Style circular images',
                        'Organize data visually'
                    ]
                },
                useCases: [
                    {
                        title: 'PBA History Sites',
                        description: 'Show player statistics'
                    },
                    {
                        title: 'Sports Sites',
                        description: 'Display athlete profiles'
                    }
                ]
            },

            // Lesson Progress Checklist
            {
                id: 'lesson-progress',
                name: 'Lesson Progress Checklist',
                type: 'interactions',
                difficulty: 'beginner',
                hasJS: true,
                mobileFirst: false,
                tags: ['Beginner-Friendly', 'JavaScript', 'Interactive'],
                description: 'Interactive checklist to track lesson completion. Check off items as you complete them!',
                preview: `<div class="component-preview-placeholder">
                    <div style="background: white; padding: 1.5rem; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); max-width: 300px; margin: 1rem auto;">
                        <h4 style="margin: 0 0 1rem 0; font-size: 1rem; font-weight: 700; color: #1a1a1a;">Course Progress</h4>
                        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                            <label style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; background: #f8fafc; border-radius: 8px; cursor: pointer;">
                                <input type="checkbox" checked style="width: 18px; height: 18px; accent-color: #10b981;">
                                <span style="font-size: 0.9rem; color: #1a1a1a;">Lesson 1: Basics</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; background: #f8fafc; border-radius: 8px; cursor: pointer;">
                                <input type="checkbox" style="width: 18px; height: 18px; accent-color: #10b981;">
                                <span style="font-size: 0.9rem; color: #1a1a1a;">Lesson 2: Chords</span>
                            </label>
                        </div>
                    </div>
                </div>`,
                workshop: {
                    goal: 'Build an interactive lesson progress checklist',
                    duration: '30 minutes',
                    steps: [
                        {
                            title: 'Create Checklist Container',
                            description: 'Let\'s start by creating a container for our checklist!',
                            instruction: 'Add this HTML:',
                            code: `<div class="lesson-checklist">
  <h3>Course Progress</h3>
</div>`,
                            codeFile: 'index.html',
                            tip: 'This will hold all our lesson checkboxes!',
                            explanation: 'What this does:\n• <div class="lesson-checklist"> - Main container\n• <h3> - Title for the checklist'
                        },
                        {
                            title: 'Add Checklist Items Container',
                            description: 'Now let\'s create a container for the checkbox items!',
                            instruction: 'Add this inside the checklist:',
                            code: `<div class="checklist-items">
</div>`,
                            codeFile: 'index.html',
                            tip: 'This will hold all the individual lessons!',
                            explanation: 'What this does:\n• <div class="checklist-items"> - Container for checkboxes'
                        },
                        {
                            title: 'Add First Lesson Checkbox',
                            description: 'Let\'s add our first lesson with a checkbox!',
                            instruction: 'Add this inside checklist-items:',
                            code: `<label class="checklist-item">
  <input type="checkbox" class="lesson-checkbox">
  <span class="lesson-title">Lesson 1: Introduction</span>
</label>`,
                            codeFile: 'index.html',
                            tip: '<label> makes the whole item clickable!',
                            explanation: 'What this does:\n• <label> - Makes entire area clickable\n• <input type="checkbox"> - The checkbox\n• <span> - Lesson name'
                        },
                        {
                            title: 'Add More Lessons',
                            description: 'Let\'s add two more lessons!',
                            instruction: 'Add these after the first lesson:',
                            code: `<label class="checklist-item">
  <input type="checkbox" class="lesson-checkbox">
  <span class="lesson-title">Lesson 2: Basic Chords</span>
</label>
<label class="checklist-item">
  <input type="checkbox" class="lesson-checkbox">
  <span class="lesson-title">Lesson 3: Rhythm Patterns</span>
</label>`,
                            codeFile: 'index.html',
                            tip: 'Now we have 3 lessons to track!',
                            explanation: 'What this does:\n• Adds two more lessons\n• Same structure as the first\n• All start unchecked'
                        },
                        {
                            title: 'Add Progress Summary',
                            description: 'Let\'s add a counter to show progress!',
                            instruction: 'Add this after checklist-items:',
                            code: `<div class="progress-summary">
  <span id="completedCount">0</span> of 3 completed
</div>`,
                            codeFile: 'index.html',
                            tip: 'This will update automatically when you check boxes!',
                            explanation: 'What this does:\n• <div class="progress-summary"> - Progress display\n• <span id="completedCount"> - Number that updates\n• Shows X of 3 completed'
                        },
                        {
                            title: 'Style the Container',
                            description: 'Let\'s style the main container!',
                            instruction: 'Add this CSS:',
                            code: `.lesson-checklist {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  max-width: 400px;
}

.checklist-items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'flex-direction: column stacks items vertically!',
                            explanation: 'What this does:\n• background: white - Clean background\n• display: flex - Flexbox layout\n• flex-direction: column - Vertical stacking\n• gap: 0.75rem - Space between items'
                        },
                        {
                            title: 'Style Checklist Items',
                            description: 'Let\'s style each lesson item!',
                            instruction: 'Add this CSS:',
                            code: `.checklist-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

.checklist-item:hover {
  background: #eff6ff;
}`,
                            codeFile: 'styles.css',
                            tip: 'Items change color when you hover!',
                            explanation: 'What this does:\n• display: flex - Aligns checkbox and text\n• background: #f8fafc - Light gray\n• cursor: pointer - Shows it\'s clickable\n• :hover - Changes to blue on hover'
                        },
                        {
                            title: 'Style Checkbox and Text',
                            description: 'Let\'s style the checkbox and lesson title!',
                            instruction: 'Add this CSS:',
                            code: `.lesson-checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #10b981;
}

.lesson-title {
  font-size: 0.95rem;
  color: #1a1a1a;
  font-weight: 500;
}`,
                            codeFile: 'styles.css',
                            tip: 'accent-color makes the checkbox green!',
                            explanation: 'What this does:\n• width/height: 20px - Bigger checkbox\n• accent-color: #10b981 - Green checkmark\n• font-weight: 500 - Medium weight text'
                        },
                        {
                            title: 'Style Progress Summary',
                            description: 'Let\'s style the progress counter!',
                            instruction: 'Add this CSS:',
                            code: `.progress-summary {
  text-align: center;
  padding: 1rem;
  background: #f0fdf4;
  border-radius: 8px;
  color: #10b981;
  font-weight: 600;
}`,
                            codeFile: 'styles.css',
                            tip: 'Green background matches the checkboxes!',
                            explanation: 'What this does:\n• background: #f0fdf4 - Light green\n• color: #10b981 - Green text\n• text-align: center - Centered text'
                        },
                        {
                            title: 'Add Progress Counter Function',
                            description: 'Let\'s create a function to count checked boxes!',
                            instruction: 'Add this JavaScript:',
                            code: `const checkboxes = document.querySelectorAll('.lesson-checkbox');
const completedCount = document.getElementById('completedCount');

function updateProgress() {
  const checked = document.querySelectorAll('.lesson-checkbox:checked').length;
  completedCount.textContent = checked;
}`,
                            codeFile: 'script.js',
                            tip: ':checked selects only checked boxes!',
                            explanation: 'What this does:\n• querySelectorAll - Gets all checkboxes\n• :checked - Filters to checked ones\n• .length - Counts them\n• textContent - Updates the number'
                        },
                        {
                            title: 'Add Event Listeners',
                            description: 'Let\'s make the counter update when boxes are checked!',
                            instruction: 'Add this JavaScript:',
                            code: `checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateProgress);
});

// Initialize count
updateProgress();`,
                            codeFile: 'script.js',
                            tip: 'The counter updates automatically now!',
                            explanation: 'What this does:\n• forEach - Loops through all checkboxes\n• addEventListener - Watches for changes\n• updateProgress() - Runs when checked/unchecked\n• Initial call sets count to 0'
                        }
                    ],
                    learningObjectives: [
                        'Create interactive checklists',
                        'Handle checkbox events',
                        'Count checked items',
                        'Update UI dynamically'
                    ]
                },
                useCases: [
                    {
                        title: 'Music Tutorial Sites',
                        description: 'Track lesson completion'
                    },
                    {
                        title: 'Learning Platforms',
                        description: 'Monitor course progress'
                    }
                ]
            },

            // BMI Calculator
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
                    steps: [
                        {
                            title: 'Create the Calculator Container',
                            description: 'Let\'s start by creating a container for our BMI calculator!',
                            instruction: 'Add this HTML:',
                            code: `<div class="bmi-calculator">
  <h3>BMI Calculator</h3>
</div>`,
                            codeFile: 'index.html',
                            tip: 'BMI stands for Body Mass Index - it measures if your weight is healthy for your height!',
                            explanation: 'What this does:\n• <div class="bmi-calculator"> - Container for everything\n• <h3> - The calculator title'
                        },
                        {
                            title: 'Add Height Input',
                            description: 'Let\'s add an input field where users can type their height!',
                            instruction: 'Add this input inside the calculator div:',
                            code: `<div class="bmi-calculator">
  <h3>BMI Calculator</h3>
  <div class="calculator-inputs">
    <input type="number" id="height" placeholder="Height (cm)" min="0">
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'type="number" means only numbers can be typed in this field!',
                            explanation: 'What this does:\n• <div class="calculator-inputs"> - Container for inputs\n• type="number" - Only allows numbers\n• placeholder - Shows hint text\n• min="0" - Can\'t enter negative numbers'
                        },
                        {
                            title: 'Add Weight Input',
                            description: 'Now let\'s add an input for weight!',
                            instruction: 'Add the weight input after the height input:',
                            code: `<div class="calculator-inputs">
  <input type="number" id="height" placeholder="Height (cm)" min="0">
  <input type="number" id="weight" placeholder="Weight (kg)" min="0">
</div>`,
                            codeFile: 'index.html',
                            tip: 'We need both height and weight to calculate BMI!',
                            explanation: 'What this does:\n• Second input for weight in kilograms\n• Same type="number" for numbers only\n• id="weight" so JavaScript can find it'
                        },
                        {
                            title: 'Add Calculate Button',
                            description: 'Let\'s add a button that will calculate the BMI when clicked!',
                            instruction: 'Add the button after the weight input:',
                            code: `<div class="calculator-inputs">
  <input type="number" id="height" placeholder="Height (cm)" min="0">
  <input type="number" id="weight" placeholder="Weight (kg)" min="0">
  <button id="calculateBtn">Calculate BMI</button>
</div>`,
                            codeFile: 'index.html',
                            tip: 'The button will trigger our JavaScript to do the math!',
                            explanation: 'What this does:\n• <button> - Clickable button\n• id="calculateBtn" - So JavaScript can detect clicks\n• Text inside tells users what it does'
                        },
                        {
                            title: 'Add Result Display Area',
                            description: 'Let\'s create a place to show the BMI result!',
                            instruction: 'Add this result area after the inputs div:',
                            code: `<div class="bmi-result hidden" id="result">
  <div class="bmi-value" id="bmiValue">0</div>
  <div class="bmi-category" id="bmiCategory">-</div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'The "hidden" class will hide this until we calculate!',
                            explanation: 'What this does:\n• class="hidden" - Starts invisible\n• bmi-value - Shows the number\n• bmi-category - Shows if it\'s healthy or not'
                        },
                        {
                            title: 'Style the Calculator Container',
                            description: 'Let\'s make the calculator look clean and modern!',
                            instruction: 'Add this CSS:',
                            code: `.bmi-calculator {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  max-width: 400px;
}`,
                            codeFile: 'styles.css',
                            tip: 'box-shadow makes it look like it\'s floating!',
                            explanation: 'What this does:\n• background: white - Clean white background\n• padding: 2rem - Space inside\n• border-radius: 16px - Rounded corners\n• box-shadow - Adds depth'
                        },
                        {
                            title: 'Style the Input Container',
                            description: 'Let\'s arrange the inputs in a column!',
                            instruction: 'Add this CSS:',
                            code: `.calculator-inputs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'flex-direction: column stacks items vertically!',
                            explanation: 'What this does:\n• display: flex - Turns on Flexbox\n• flex-direction: column - Stacks vertically\n• gap: 1rem - Space between items\n• margin-bottom - Space below inputs'
                        },
                        {
                            title: 'Style the Input Fields',
                            description: 'Let\'s make the input fields look nice!',
                            instruction: 'Add this CSS:',
                            code: `.calculator-inputs input {
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'Padding makes the input fields bigger and easier to click!',
                            explanation: 'What this does:\n• padding - Makes fields bigger\n• border - Gray border around fields\n• border-radius - Rounded corners\n• font-size - Makes text readable'
                        },
                        {
                            title: 'Add Input Focus Style',
                            description: 'Let\'s highlight the input when you click on it!',
                            instruction: 'Add this CSS:',
                            code: `.calculator-inputs input:focus {
  outline: none;
  border-color: #3b82f6;
}`,
                            codeFile: 'styles.css',
                            tip: ':focus means "when you click on this"!',
                            explanation: 'What this does:\n• :focus - Applies when input is clicked\n• outline: none - Removes default outline\n• border-color - Changes to blue when active'
                        },
                        {
                            title: 'Style the Calculate Button',
                            description: 'Let\'s make the button look clickable and attractive!',
                            instruction: 'Add this CSS:',
                            code: `.calculator-inputs button {
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}`,
                            codeFile: 'styles.css',
                            tip: 'cursor: pointer makes the mouse cursor change to a hand!',
                            explanation: 'What this does:\n• background: #3b82f6 - Blue color\n• color: white - White text\n• cursor: pointer - Hand cursor on hover\n• transition - Smooth color change'
                        },
                        {
                            title: 'Add Button Hover Effect',
                            description: 'Let\'s make the button darker when you hover over it!',
                            instruction: 'Add this CSS:',
                            code: `.calculator-inputs button:hover {
  background: #2563eb;
}`,
                            codeFile: 'styles.css',
                            tip: 'Hover effects make buttons feel interactive!',
                            explanation: 'What this does:\n• :hover - Applies when mouse is over button\n• background: #2563eb - Darker blue\n• Makes button feel responsive'
                        },
                        {
                            title: 'Style the Result Display',
                            description: 'Let\'s style the area where the BMI result will appear!',
                            instruction: 'Add this CSS:',
                            code: `.bmi-result {
  padding: 1.5rem;
  background: #f0fdf4;
  border-radius: 12px;
  text-align: center;
}

.bmi-result.hidden {
  display: none;
}`,
                            codeFile: 'styles.css',
                            tip: 'The hidden class makes it invisible until we calculate!',
                            explanation: 'What this does:\n• background: #f0fdf4 - Light green background\n• text-align: center - Centers the text\n• .hidden - Hides it completely'
                        },
                        {
                            title: 'Style the BMI Value',
                            description: 'Let\'s make the BMI number big and bold!',
                            instruction: 'Add this CSS:',
                            code: `.bmi-value {
  font-size: 2.5rem;
  font-weight: 800;
  color: #10b981;
  margin-bottom: 0.5rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'font-size: 2.5rem makes it really big!',
                            explanation: 'What this does:\n• font-size: 2.5rem - Makes it huge\n• font-weight: 800 - Extra bold\n• color: #10b981 - Green color'
                        },
                        {
                            title: 'Style the BMI Category',
                            description: 'Let\'s style the text that says if the BMI is healthy!',
                            instruction: 'Add this CSS:',
                            code: `.bmi-category {
  font-size: 1rem;
  color: #6b7280;
  font-weight: 600;
}`,
                            codeFile: 'styles.css',
                            tip: 'This will show "Normal Weight", "Overweight", etc.!',
                            explanation: 'What this does:\n• font-size: 1rem - Normal size\n• color: #6b7280 - Gray color\n• font-weight: 600 - Semi-bold'
                        },
                        {
                            title: 'Get Input Elements in JavaScript',
                            description: 'Let\'s connect our JavaScript to the HTML elements!',
                            instruction: 'Add this JavaScript:',
                            code: `const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');
const bmiValue = document.getElementById('bmiValue');
const bmiCategory = document.getElementById('bmiCategory');`,
                            codeFile: 'script.js',
                            tip: 'getElementById finds elements by their id!',
                            explanation: 'What this does:\n• Gets each element by its id\n• Stores them in variables\n• Now we can use them in our code'
                        },
                        {
                            title: 'Add Click Event Listener',
                            description: 'Let\'s make the button do something when clicked!',
                            instruction: 'Add this JavaScript:',
                            code: `calculateBtn.addEventListener('click', () => {
  // We'll add the calculation code here
});`,
                            codeFile: 'script.js',
                            tip: 'addEventListener watches for clicks!',
                            explanation: 'What this does:\n• addEventListener - Watches for events\n• \'click\' - Waits for button click\n• () => { } - Code that runs when clicked'
                        },
                        {
                            title: 'Get Input Values',
                            description: 'Let\'s get the height and weight that the user typed!',
                            instruction: 'Add this inside the click listener:',
                            code: `calculateBtn.addEventListener('click', () => {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);
});`,
                            codeFile: 'script.js',
                            tip: 'parseFloat converts text to a number!',
                            explanation: 'What this does:\n• .value gets what user typed\n• parseFloat converts to number\n• Stores in height and weight variables'
                        },
                        {
                            title: 'Validate Input',
                            description: 'Let\'s check if the user entered both values!',
                            instruction: 'Add this validation:',
                            code: `calculateBtn.addEventListener('click', () => {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);
  
  if (!height || !weight) {
    alert('Please enter both height and weight!');
    return;
  }
});`,
                            codeFile: 'script.js',
                            tip: '!height means "if height is empty"!',
                            explanation: 'What this does:\n• Checks if values are missing\n• Shows alert if empty\n• return stops the code'
                        },
                        {
                            title: 'Calculate BMI',
                            description: 'Now let\'s do the math to calculate BMI!',
                            instruction: 'Add the calculation:',
                            code: `  // Calculate BMI (height in meters)
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);`,
                            codeFile: 'script.js',
                            tip: 'BMI formula: weight ÷ (height in meters)²',
                            explanation: 'What this does:\n• Converts cm to meters (÷ 100)\n• Calculates BMI using formula\n• .toFixed(1) rounds to 1 decimal'
                        },
                        {
                            title: 'Determine BMI Category',
                            description: 'Let\'s figure out if the BMI is healthy or not!',
                            instruction: 'Add this category logic:',
                            code: `  // Determine category
  let category = '';
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 25) category = 'Normal Weight';
  else if (bmi < 30) category = 'Overweight';
  else category = 'Obese';`,
                            codeFile: 'script.js',
                            tip: 'BMI categories: <18.5 underweight, 18.5-24.9 normal, 25-29.9 overweight, 30+ obese',
                            explanation: 'What this does:\n• Checks BMI value\n• Assigns category based on ranges\n• Uses if/else to pick the right one'
                        },
                        {
                            title: 'Display the Result',
                            description: 'Finally, let\'s show the BMI and category to the user!',
                            instruction: 'Add this display code:',
                            code: `  // Display result
  bmiValue.textContent = bmi;
  bmiCategory.textContent = category;
  result.classList.remove('hidden');`,
                            codeFile: 'script.js',
                            tip: 'classList.remove makes the hidden result visible!',
                            explanation: 'What this does:\n• textContent updates the text\n• Shows BMI number and category\n• Removes "hidden" class to show result'
                        }
                    ],
                    learningObjectives: [
                        'Handle number inputs',
                        'Perform calculations',
                        'Validate user input',
                        'Display dynamic results'
                    ]
                },
                useCases: [
                    {
                        title: 'Fitness Websites',
                        description: 'Calculate BMI for users'
                    },
                    {
                        title: 'Health Sites',
                        description: 'Provide health calculators'
                    }
                ]
            }
    ]
};
