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
                description: 'Learn to build a professional navigation bar with logo, styled links, and dropdown menus.',
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
  <a href="#services" class="nav-link">Services</a>
  <ul class="dropdown-menu">
    <li><a href="#web" class="dropdown-link">Web Design</a></li>
    <li><a href="#app" class="dropdown-link">App Development</a></li>
    <li><a href="#seo" class="dropdown-link">SEO</a></li>
  </ul>
</li>`,
                            codeFile: 'index.html',
                            tip: 'A dropdown is a menu inside a menu! We\'re putting a <ul> inside a <li>.',
                            explanation: 'Here\'s the structure:\n• <li class="dropdown"> - The main menu item. The "dropdown" class tells CSS this one has a submenu.\n• <a href="#services" class="nav-link">Services</a> - The main link you see.\n• <ul class="dropdown-menu"> - A new list INSIDE the list item! This is the hidden menu.\n• Three <li> items inside - These are the dropdown options (Web Design, App Development, SEO).\n• class="dropdown-link" - Styles these links differently from the main menu links.\n\nThink of it like a folder with files inside. The folder is "Services" and the files are the three options!',
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