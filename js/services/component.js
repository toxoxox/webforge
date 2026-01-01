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
                name: 'Navigation Bar with Dropdown',
                type: 'navigation',
                difficulty: 'beginner',
                hasJS: false,
                mobileFirst: false,
                tags: ['Beginner-Friendly', 'Flexbox', 'CSS-Only'],
                description: 'Build a professional navigation bar with logo, styled links, and dropdown menus. 15 easy-to-follow steps break down each concept.',
                preview: this.generateNavbarPreview(),
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
                            tip: 'The <ul> tag creates an "unordered list" - perfect for menu items! Each <li> is one menu item.',
                            explanation: 'Here\'s what each part does:\n• <ul class="nav-menu"> - Creates an unordered list (bullets by default, but we\'ll remove them with CSS).\n• <li> - List item. Each one is a menu button.\n• <a href="#home"> - A link! "href" tells where to go. The # means it\'s a link to a section on the same page.\n• class="nav-link" - Names the link so we can style all links the same way.\n• Home, About, etc. - The text people see and click on.',
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
                            tip: 'In CSS, we use a dot (.) before the class name to select it. So .navbar selects anything with class="navbar".',
                            explanation: 'Let\'s understand each CSS property:\n• background-color: #2c3e50 - Paints the navbar dark blue-gray. #2c3e50 is a color code (hex code). You can use any color you like!\n• padding: 1rem 2rem - Adds space inside the navbar. 1rem top/bottom, 2rem left/right. "rem" is a size unit that scales nicely.',
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
                            tip: 'Flexbox is like having superpowers for arranging things on a page!',
                            explanation: 'Understanding Flexbox properties:\n• display: flex - Turns on Flexbox! This makes items line up in a row and gives us control over how they\'re arranged.\n• justify-content: space-between - Pushes items apart. Logo goes left, menu goes right, with space between them.\n• align-items: center - Lines everything up in the middle vertically, so nothing looks crooked or misaligned.',
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
                            tip: 'The gap property is super handy - it adds space between items automatically!',
                            explanation: 'Understanding .nav-brand:\n• display: flex - Makes the logo and text sit side-by-side instead of stacking.\n• align-items: center - Lines them up in the middle vertically so they\'re not misaligned.\n• gap: 0.75rem - Adds space between logo and text. Like giving them breathing room!',
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
                            tip: 'border-radius is what makes corners round - the bigger the number, the rounder it gets!',
                            explanation: 'Understanding .nav-logo:\n• width: 40px - Makes the logo exactly 40 pixels wide.\n• height: 40px - Makes the logo exactly 40 pixels tall. Same as width makes it a perfect square!\n• border-radius: 8px - Rounds the corners. Higher numbers = rounder corners. Try 50% for a circle!',
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
                            tip: 'font-weight controls how bold text is. 400 is normal, 600 is semi-bold, 700 is bold!',
                            explanation: 'Understanding .brand-name:\n• color: white - Makes the text white so it shows up clearly on the dark background.\n• font-size: 1.5rem - Makes the text bigger (1.5 times the normal size). This makes it stand out!\n• font-weight: 600 - Makes it semi-bold. 400 is normal, 700 is very bold.',
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
                            tip: 'Lists normally have bullets and extra spacing. We\'re removing all that to make a clean menu!',
                            explanation: 'Understanding .nav-menu:\n• display: flex - Lines up menu items in a row instead of stacking them.\n• list-style: none - Removes the bullet points that lists normally have.\n• gap: 2rem - Adds space between each menu item automatically.\n• margin: 0 and padding: 0 - Removes default spacing that browsers add to lists. This gives us full control!',
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
                            tip: 'Links normally have underlines, but we can remove them to make a cleaner look!',
                            explanation: 'Understanding .nav-link:\n• color: white - Makes link text white so it shows up on the dark navbar.\n• text-decoration: none - Removes the underline that links normally have.\n• padding: 0.5rem 1rem - Adds space inside each link to make it bigger and easier to click.\n• border-radius: 6px - Slightly rounds the corners for a modern look.',
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
                            tip: 'The :hover selector is special - it only applies when you move your mouse over something!',
                            explanation: 'Understanding hover effects:\n• transition: background-color 0.3s - Makes color changes smooth over 0.3 seconds instead of instant. This creates a nice animation!\n• .nav-link:hover - This means "when mouse is over a .nav-link"\n• rgba(255, 255, 255, 0.1) - White color with 0.1 opacity (10% visible, 90% see-through). Creates a subtle highlight when you hover!',
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
  <a href="#services" class="nav-link">Services ▾</a>
  <ul class="dropdown-menu">
    <li><a href="#web" class="dropdown-link">Web Design</a></li>
    <li><a href="#app" class="dropdown-link">App Development</a></li>
    <li><a href="#seo" class="dropdown-link">SEO</a></li>
  </ul>
</li>`,
                            codeFile: 'index.html',
                            tip: 'A dropdown is a menu inside a menu! We\'re putting a <ul> inside a <li>. The ▾ symbol shows users there\'s a menu!',
                            explanation: 'Here\'s the structure:\n• <li class="dropdown"> - The main menu item. The "dropdown" class tells CSS this one has a submenu.\n• <a href="#services" class="nav-link">Services ▾</a> - The main link you see. The ▾ is a down arrow symbol that hints there\'s a dropdown!\n• <ul class="dropdown-menu"> - A new list INSIDE the list item! This is the hidden menu.\n• Three <li> items inside - These are the dropdown options (Web Design, App Development, SEO).\n• class="dropdown-link" - Styles these links differently from the main menu links.\n\nThink of it like a folder with files inside. The folder is "Services" and the files are the three options!',
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
                            tip: 'position: absolute is like magic - it lets you place things exactly where you want, floating above everything else!',
                            explanation: 'Understanding positioning:\n• .dropdown { position: relative; } - Makes this the "anchor point" for the dropdown menu. The menu will position itself relative to this.\n• .dropdown-menu { position: absolute; } - Takes it out of normal flow. It floats above other content!\n• top: 100% - Positions it right below the Services link (100% = full height of parent).\n• left: 0 - Aligns it with the left edge of Services.',
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
                            tip: 'min-width makes sure the dropdown is wide enough even if the text is short!',
                            explanation: 'Understanding dropdown styling:\n• background-color: #34495e - Slightly lighter than the navbar so it stands out.\n• list-style: none - Removes bullet points from the dropdown list.\n• padding: 0.5rem 0 - Adds space at top and bottom.\n• margin: 0 - Removes default spacing.\n• border-radius: 6px - Rounds the corners to match our design.\n• min-width: 200px - Makes sure it\'s at least 200px wide, even if text is short.',
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
                            tip: 'display: none makes something invisible. display: block makes it visible again!',
                            explanation: 'Understanding show/hide:\n• display: none - HIDES the menu by default! It\'s completely invisible and takes up no space.\n• .dropdown:hover .dropdown-menu - This means "When hovering over .dropdown, find .dropdown-menu inside it"\n• display: block - SHOWS the menu! Changes from none to block when you hover over Services.',
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
                            tip: 'display: block makes each link take up the full width, making them easier to click!',
                            explanation: 'Understanding dropdown links:\n• color: white - Makes text white.\n• text-decoration: none - Removes underlines.\n• padding: 0.75rem 1.5rem - More padding than main links for better spacing in the dropdown.\n• display: block - Makes each link take up the full width, easier to click.\n• .dropdown-link:hover - Adds a subtle highlight when you hover over dropdown items, just like the main menu!',
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
                preview: this.generateHeroPreview(),
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
                            tip: 'We\'re creating two sections side by side - one for text, one for an image. This is a super popular layout!',
                            explanation: 'Breaking it down:\n• <section class="hero"> - Creates a section for our hero area.\n• <div class="hero-content"> - Left side container for text and button.\n• <h1> - The main heading. This is the biggest, most important text!\n• <p class="hero-subtitle"> - A subtitle that explains more.\n• <button class="hero-cta"> - A call-to-action button.\n• <div class="hero-image"> - Right side container for the image.\n• <img> - The hero image that makes it look awesome!',
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
                            tip: '100vh means "100% of the viewport height" - that\'s the full height of the browser window!',
                            explanation: 'Understanding the properties:\n• min-height: 100vh - Makes the hero at least as tall as the screen. "vh" stands for "viewport height"!\n• padding: 2rem - Adds space inside the hero so content doesn\'t touch the edges.',
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
                            tip: 'Flexbox is like having superpowers for positioning things on your page!',
                            explanation: 'Flexbox layout:\n• display: flex - Turns on Flexbox mode! This makes items line up in a row.\n• align-items: center - Centers content vertically (up and down).\n• justify-content: space-between - Pushes items apart with space between them.\n• gap: 3rem - Adds space between the text and image sections.',
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
                            tip: 'You can use any color you like! Try different hex codes to find your favorite.',
                            explanation: 'Understanding the background:\n• background: #667eea - A nice purple-blue color. #667eea is a hex color code!\n• color: white - Makes all text white so it shows up clearly on the dark background.\n• You can change #667eea to any color you want - try #3498db for blue, #e74c3c for red, or #2ecc71 for green!',
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
                            explanation: 'Section styling:\n• flex: 1 - Makes each section take up equal space.\n• max-width: 500px - Limits how wide they can get.\n• .hero-image img - Targets the image inside hero-image.\n• width: 100% - Makes image fill its container.\n• height: auto - Keeps the image proportions correct.\n• border-radius: 15px - Rounds the image corners for a modern look!',
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
                            tip: 'font-size: 3rem makes the title 3 times the normal text size - nice and big!',
                            explanation: 'Title styling:\n• font-size: 3rem - Makes it really big! "rem" is a flexible size unit.\n• font-weight: 700 - Makes it bold. 400 is normal, 700 is bold.\n• margin-bottom: 1rem - Adds space below the title.\n• line-height: 1.2 - Controls spacing between lines if the title wraps.',
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
                            tip: 'opacity: 0.9 makes the text slightly see-through, creating a nice subtle effect!',
                            explanation: 'Subtitle styling:\n• font-size: 1.25rem - Bigger than normal text, but smaller than the title.\n• margin-bottom: 2rem - Adds space below before the button.\n• opacity: 0.9 - Makes it 90% visible (10% transparent). Creates a softer look!\n• line-height: 1.5 - More space between lines makes it easier to read.',
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
                            tip: 'cursor: pointer makes the mouse cursor change to a hand when hovering over the button!',
                            explanation: 'Button styling:\n• background: #4CAF50 - Nice green color.\n• color: white - White text on green background.\n• border: none - Removes the default button border.\n• padding: 1rem 2rem - Makes the button bigger and easier to click.\n• font-size: 1.1rem - Slightly bigger text.\n• font-weight: 600 - Semi-bold text.\n• border-radius: 5px - Rounds the corners.\n• cursor: pointer - Shows a hand cursor on hover.',
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
                            tip: 'transform: translateY(-2px) makes the button lift up slightly when you hover - so cool!',
                            explanation: 'Hover effects:\n• transition: all 0.3s ease - Makes changes smooth over 0.3 seconds.\n• box-shadow - Adds a shadow under the button for depth.\n• :hover - Special selector that applies when mouse is over the button.\n• background: #45a049 - Slightly darker green on hover.\n• transform: translateY(-2px) - Moves button up 2 pixels (negative = up!).\n• Bigger shadow on hover makes it look like it\'s lifting up!',
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
                preview: this.generateCardPreview(),
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
                            tip: 'Cards are super popular in modern web design! You see them everywhere - from shopping sites to social media.',
                            explanation: 'Card structure:\n• <div class="card"> - The main container for everything.\n• <img class="card-image"> - An image at the top of the card.\n• <div class="card-content"> - Holds the text and button.\n• <h3 class="card-title"> - The card\'s heading.\n• <p class="card-description"> - Description text.\n• <button class="card-button"> - Action button at the bottom.',
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
                            explanation: 'Card container styling:\n• max-width: 320px - Keeps the card from getting too wide.\n• background: white - Clean white background.\n• border-radius: 16px - Nicely rounded corners for a modern look.\n• overflow: hidden - Clips anything that goes outside the rounded corners (like the image).',
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
                            tip: 'box-shadow creates a shadow under the card. The rgba color makes it slightly transparent!',
                            explanation: 'Shadow and transition:\n• box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08) - Creates a soft, modern shadow.\n  - 0 = no horizontal offset\n  - 10px = 10 pixels down\n  - 30px = blur amount (more blur = softer shadow)\n  - rgba(0, 0, 0, 0.08) = black at 8% opacity\n• transition: all 0.3s ease - Makes changes smooth (we\'ll use this for hover effects!).',
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
                            tip: 'object-fit: cover is magic! It makes images fill the space without stretching or distorting.',
                            explanation: 'Image styling:\n• width: 100% - Makes image as wide as the card.\n• height: 200px - Fixed height of 200 pixels.\n• object-fit: cover - Crops the image to fill the space while keeping its proportions. No stretching!\n• display: block - Removes tiny gap under the image.',
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
                            tip: 'Padding creates breathing room - it makes designs look more professional!',
                            explanation: 'Content padding:\n• padding: 1.75rem - Adds space on all sides inside the content area.\n• This keeps text away from the edges, making it easier to read.',
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
                            tip: 'letter-spacing makes titles look more polished, and line-height makes text easier to read!',
                            explanation: 'Text styling:\n\n.card-title:\n• font-size: 1.35rem - Slightly bigger for emphasis.\n• font-weight: 700 - Bold for impact.\n• color: #1a1a1a - Almost black, modern look.\n• letter-spacing: -0.02em - Tighter spacing for a modern feel.\n\n.card-description:\n• color: #6b7280 - Soft gray for body text.\n• line-height: 1.6 - More space between lines.\n• font-size: 0.95rem - Slightly smaller than default.',
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
                            tip: 'The card lifts up when you hover over it - this makes it feel interactive and fun!',
                            explanation: 'Button and hover effects:\n\n.card-button:\n• background: #667eea - Beautiful purple color.\n• border-radius: 10px - Rounded button corners.\n• width: 100% - Button fills the full width.\n\n.card-button:hover:\n• background: #5568d3 - Darker purple on hover.\n• transform: translateY(-2px) - Button lifts slightly.\n• box-shadow - Glowing shadow effect.\n\n.card:hover:\n• transform: translateY(-8px) - Lifts the card up 8 pixels!\n• box-shadow: 0 20px 40px - Bigger, softer shadow makes it look like it\'s floating higher.',
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
                preview: this.generateFormPreview(),
                workshop: {
                    goal: 'Build a professional contact form with validation and user feedback',
                    duration: '45 minutes',
                    steps: [],
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
  background: #667eea;
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
  background: #5568d3;
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
  background: #4CAF50;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.4);
}

.interactive-button.success:hover {
  background: #45a049;
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
                <div style="background: #2c3e50; color: white; padding: 0.75rem 1rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <div style="width: 24px; height: 24px; background: #3498db; border-radius: 4px;"></div>
                        <span style="font-weight: 600; font-size: 0.85rem;">My Website</span>
                    </div>
                    <div style="display: flex; gap: 1rem; position: relative;">
                        <span style="padding: 0.25rem 0.5rem; border-radius: 3px; transition: background 0.3s;">Home</span>
                        <span style="padding: 0.25rem 0.5rem; border-radius: 3px;">About</span>
                        <div style="position: relative;">
                            <span style="padding: 0.25rem 0.5rem; border-radius: 3px; background: rgba(255,255,255,0.1);">Services ▾</span>
                            <div style="position: absolute; top: 100%; left: 0; background: #34495e; border-radius: 4px; margin-top: 0.25rem; min-width: 120px; font-size: 0.7rem; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
                                <div style="padding: 0.5rem 0.75rem;">Web Design</div>
                                <div style="padding: 0.5rem 0.75rem;">App Dev</div>
                                <div style="padding: 0.5rem 0.75rem;">SEO</div>
                            </div>
                        </div>
                        <span style="padding: 0.25rem 0.5rem; border-radius: 3px;">Contact</span>
                    </div>
                </div>
            </div>
        `;
    },

    generateHeroPreview() {
        return `
            <div class="component-preview-placeholder">
                <div style="background: #667eea; color: white; padding: 1.5rem; height: 100%; display: flex; align-items: center; justify-content: space-between; gap: 1rem;">
                    <div style="flex: 1; max-width: 55%;">
                        <h3 style="margin: 0 0 0.5rem 0; font-size: 1rem; font-weight: 700;">Hi, I'm Learning to Code!</h3>
                        <p style="margin: 0 0 0.75rem 0; font-size: 0.7rem; opacity: 0.9; line-height: 1.3;">Building awesome websites</p>
                        <button style="background: #4CAF50; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 4px; font-size: 0.7rem; font-weight: 600; box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);">See My Projects</button>
                    </div>
                    <div style="flex: 1; max-width: 45%; display: flex; align-items: center; justify-content: center;">
                        <div style="width: 100%; aspect-ratio: 1; background: rgba(255,255,255,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    generateCardPreview() {
        return `
            <div class="component-preview-placeholder">
                <div style="background: white; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); overflow: hidden; max-width: 200px; margin: 1rem auto;">
                    <img src="https://picsum.photos/200/100" style="width: 100%; height: 100px; object-fit: cover; display: block;" alt="Card preview">
                    <div style="padding: 1.2rem;">
                        <h4 style="margin: 0 0 0.5rem 0; font-size: 0.95rem; font-weight: 700; color: #1a1a1a; letter-spacing: -0.02em;">Amazing Discovery</h4>
                        <p style="margin: 0 0 0.85rem 0; font-size: 0.7rem; color: #6b7280; line-height: 1.5;">Explore the beauty of nature...</p>
                        <button style="background: #667eea; color: white; border: none; padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.7rem; width: 100%; font-weight: 600;">Learn More</button>
                    </div>
                </div>
            </div>
        `;
    },

    generateFormPreview() {
        return `
            <div class="component-preview-placeholder">
                <div style="background: #667eea; padding: 1.2rem; border-radius: 16px; box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3); max-width: 250px; margin: 0.5rem auto;">
                    <h4 style="margin: 0 0 1rem 0; font-size: 0.95rem; font-weight: 700; color: white; text-align: center;">Get In Touch</h4>
                    <div style="margin-bottom: 0.75rem;">
                        <input type="text" placeholder="Your Name" style="width: 100%; background: rgba(255,255,255,0.95); border: none; padding: 0.6rem; border-radius: 8px; font-size: 0.7rem; box-sizing: border-box;">
                    </div>
                    <div style="margin-bottom: 0.75rem;">
                        <input type="email" placeholder="your@email.com" style="width: 100%; background: rgba(255,255,255,0.95); border: none; padding: 0.6rem; border-radius: 8px; font-size: 0.7rem; box-sizing: border-box;">
                    </div>
                    <div style="margin-bottom: 0.75rem;">
                        <textarea placeholder="Your message..." style="width: 100%; background: rgba(255,255,255,0.95); border: none; padding: 0.6rem; border-radius: 8px; font-size: 0.7rem; height: 50px; resize: none; box-sizing: border-box;"></textarea>
                    </div>
                    <button style="background: white; color: #667eea; border: none; padding: 0.6rem; border-radius: 8px; font-size: 0.75rem; width: 100%; font-weight: 600; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">Send Message</button>
                </div>
            </div>
        `;
    },

    generateButtonPreview() {
        return `
            <div class="component-preview-placeholder">
                <div style="text-align: center; padding: 2rem;">
                    <button style="background: #667eea; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 25px; font-size: 0.9rem; font-weight: 600; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">Click Me!</button>
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
    <img src="img/webforge-icon.png" alt="Logo" class="nav-logo">
    <span class="brand-name">My Website</span>
  </div>
  <ul class="nav-menu">
    <li><a href="#home" class="nav-link">Home</a></li>
    <li><a href="#about" class="nav-link">About</a></li>
    <li class="dropdown">
      <a href="#services" class="nav-link">Services ▾</a>
      <ul class="dropdown-menu">
        <li><a href="#web" class="dropdown-link">Web Design</a></li>
        <li><a href="#app" class="dropdown-link">App Development</a></li>
        <li><a href="#seo" class="dropdown-link">SEO</a></li>
      </ul>
    </li>
    <li><a href="#contact" class="nav-link">Contact</a></li>
  </ul>
</nav>`,
            'hero-section': `<section class="hero">
  <div class="hero-content">
    <h1 class="hero-title">Hi, I'm Learning to Code!</h1>
    <p class="hero-subtitle">Building awesome websites and having fun with web development</p>
    <button class="hero-cta">See My Projects</button>
  </div>
  <div class="hero-image">
    <img src="img/workshop-hero-image.png" alt="Student coding">
  </div>
</section>`,
            'card-component': `<div class="card">
  <img src="https://picsum.photos/300/200" alt="Card image" class="card-image">
  <div class="card-content">
    <h3 class="card-title">Amazing Discovery</h3>
    <p class="card-description">Explore the beauty of nature through stunning photography and inspiring stories.</p>
    <button class="card-button">Learn More</button>
  </div>
</div>`,
            'contact-form': `<form class="contact-form" id="contact-form">
  <h2>Get In Touch</h2>
  <div class="form-group">
    <label for="name">Name *</label>
    <input type="text" id="name" name="name" placeholder="Your Name" required>
  </div>
  
  <div class="form-group">
    <label for="email">Email *</label>
    <input type="email" id="email" name="email" placeholder="your@email.com" required>
  </div>
  
  <div class="form-group">
    <label for="message">Message *</label>
    <textarea id="message" name="message" rows="5" placeholder="Tell us what's on your mind..." required></textarea>
  </div>
  
  <button type="submit" class="submit-btn">Send Message</button>
</form>`
        };
        
        return samples[componentId] || '<div>Component preview not available</div>';
    },

    /**
     * Get sample CSS for preview
     */
    getSampleCSS(componentId) {
        const samples = {
            'responsive-navbar': `.navbar {
  background-color: #2c3e50;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
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
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.dropdown {
  position: relative;
}

.dropdown-menu {
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
}

.dropdown-link {
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  display: block;
}

.dropdown-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}`,
            'hero-section': `.hero {
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  background: #667eea;
  color: white;
}

.hero-content {
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
}`,
            'card-component': `.card {
  max-width: 320px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.card-content {
  padding: 1.75rem;
}

.card-title {
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
}

.card-button {
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
}`,
            'contact-form': `.contact-form {
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
  background: rgba(255, 255, 255, 0.95);
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
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
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
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