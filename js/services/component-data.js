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
  <a href="#services" class="nav-link">Services G•+</a>
  <ul class="dropdown-menu">
    <li><a href="#web" class="dropdown-link">Web Design</a></li>
    <li><a href="#app" class="dropdown-link">App Development</a></li>
    <li><a href="#seo" class="dropdown-link">SEO</a></li>
  </ul>
</li>`,
                            codeFile: 'index.html',
                            tip: 'A dropdown is a menu inside a menu! We\'re putting a <ul> inside a <li>. The G•+ symbol shows users there\'s a menu!',
                            explanation: 'Here\'s the structure:\n• <li class="dropdown"> - The main menu item. The "dropdown" class tells CSS this one has a submenu.\n• <a href="#services" class="nav-link">Services G•+</a> - The main link you see. The G•+ is a down arrow symbol that hints there\'s a dropdown!\n• <ul class="dropdown-menu"> - A new list INSIDE the list item! This is the hidden menu.\n• Three <li> items inside - These are the dropdown options (Web Design, App Development, SEO).\n• class="dropdown-link" - Styles these links differently from the main menu links.\n\nThink of it like a folder with files inside. The folder is "Services" and the files are the three options!',
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
                preview: `<div class="component-preview-placeholder">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 3rem 2rem; border-radius: 16px; text-align: center;">
                        <h1 style="margin: 0 0 1rem 0; font-size: 2.5rem; font-weight: 800;">Welcome to My Website</h1>
                        <p style="margin: 0 0 2rem 0; font-size: 1.1rem; opacity: 0.95; max-width: 600px; margin-left: auto; margin-right: auto;">Create amazing web experiences with modern design and powerful features that help you build better websites.</p>
                        <div style="display: flex; gap: 1rem; justify-content: center;">
                            <button style="background: white; color: #667eea; border: none; padding: 1rem 2rem; border-radius: 10px; font-size: 1rem; font-weight: 700; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">Get Started</button>
                            <button style="background: rgba(255,255,255,0.2); color: white; border: 2px solid white; padding: 1rem 2rem; border-radius: 10px; font-size: 1rem; font-weight: 600; cursor: pointer;">Learn More</button>
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
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; padding: 1rem; max-width: 400px; margin: 0 auto;">
                        <div style="aspect-ratio: 1; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px;"></div>
                        <div style="aspect-ratio: 1; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 12px;"></div>
                        <div style="aspect-ratio: 1; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 12px;"></div>
                        <div style="aspect-ratio: 1; background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); border-radius: 12px;"></div>
                        <div style="aspect-ratio: 1; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); border-radius: 12px;"></div>
                        <div style="aspect-ratio: 1; background: linear-gradient(135deg, #30cfd0 0%, #330867 100%); border-radius: 12px;"></div>
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
                    duration: '30 minutes',
                    steps: [
                        {
                            title: 'Create the Container',
                            description: 'Let\'s make a box to hold our before and after images!',
                            instruction: 'Add this HTML:',
                            code: `<div class="before-after-slider">
  <div class="before-image">
    <img src="before.jpg" alt="Before">
  </div>
  <div class="after-image">
    <img src="after.jpg" alt="After">
  </div>
  <div class="slider-handle"></div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'The slider will let users drag to compare images!',
                            explanation: 'We create a container with before/after images and a draggable handle.'
                        },
                        {
                            title: 'Style the Container',
                            description: 'Make the container look nice!',
                            instruction: 'Add this CSS:',
                            code: `.before-after-slider {
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 400px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.before-image, .after-image {
  position: absolute;
  width: 100%;
  height: 100%;
}

.before-image img, .after-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.after-image {
  clip-path: inset(0 50% 0 0);
}`,
                            codeFile: 'styles.css',
                            tip: 'clip-path cuts the after image in half!',
                            explanation: 'We position images absolutely and use clip-path to show only half of the after image.'
                        },
                        {
                            title: 'Add the Slider Handle',
                            description: 'Create the draggable handle in the middle!',
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
}

.slider-handle::before {
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
                            tip: 'The handle shows where to drag!',
                            explanation: 'We create a vertical line with a circular handle in the middle.'
                        },
                        {
                            title: 'Add JavaScript for Dragging',
                            description: 'Make the slider interactive!',
                            instruction: 'Add this JavaScript:',
                            code: `const slider = document.querySelector('.before-after-slider');
const handle = document.querySelector('.slider-handle');
const afterImage = document.querySelector('.after-image');

let isDragging = false;

handle.addEventListener('mousedown', () => {
  isDragging = true;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', (e) => {
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
                            tip: 'Now you can drag the handle to compare!',
                            explanation: 'We track mouse movement and update the handle position and clip-path.'
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
                    duration: '25 minutes',
                    steps: [
                        {
                            title: 'Create Time Slots',
                            description: 'Let\'s make buttons for different appointment times!',
                            instruction: 'Add this HTML:',
                            code: `<div class="appointment-selector">
  <h3>Select Your Time</h3>
  <div class="time-slots">
    <button class="time-slot" data-time="9:00">9:00 AM</button>
    <button class="time-slot" data-time="10:00">10:00 AM</button>
    <button class="time-slot" data-time="11:00">11:00 AM</button>
    <button class="time-slot" data-time="13:00">1:00 PM</button>
    <button class="time-slot" data-time="14:00">2:00 PM</button>
    <button class="time-slot" data-time="15:00">3:00 PM</button>
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Each button is a time slot users can pick!',
                            explanation: 'We create buttons for each available time slot with data attributes.'
                        },
                        {
                            title: 'Style the Time Slots',
                            description: 'Make the time slots look like buttons!',
                            instruction: 'Add this CSS:',
                            code: `.appointment-selector {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  max-width: 400px;
}

.time-slots {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.time-slot {
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
                            tip: 'Grid makes the slots line up nicely!',
                            explanation: 'We use CSS Grid to arrange time slots in rows of 3.'
                        },
                        {
                            title: 'Add Selected State',
                            description: 'Show which time is selected!',
                            instruction: 'Add this CSS:',
                            code: `.time-slot.selected {
  border-color: #3b82f6;
  background: #3b82f6;
  color: white;
}

.time-slot.unavailable {
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
                            tip: 'Selected slots turn blue!',
                            explanation: 'We style selected slots differently and disable unavailable ones.'
                        },
                        {
                            title: 'Add Click Functionality',
                            description: 'Make slots clickable!',
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
                            tip: 'Now you can click to select a time!',
                            explanation: 'We add click listeners to toggle the selected state.'
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
                    duration: '20 minutes',
                    steps: [
                        {
                            title: 'Create the Tabs',
                            description: 'Make buttons for each category!',
                            instruction: 'Add this HTML:',
                            code: `<div class="genre-tabs">
  <button class="tab active" data-genre="action">Action</button>
  <button class="tab" data-genre="rpg">RPG</button>
  <button class="tab" data-genre="sports">Sports</button>
  <button class="tab" data-genre="puzzle">Puzzle</button>
</div>
<div class="content-area">
  <p>Showing Action games...</p>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Each tab will filter different content!',
                            explanation: 'We create tab buttons with data attributes to identify each genre.'
                        },
                        {
                            title: 'Style the Tabs',
                            description: 'Make tabs look clickable!',
                            instruction: 'Add this CSS:',
                            code: `.genre-tabs {
  display: flex;
  gap: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
  margin-bottom: 1.5rem;
}

.tab {
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
}

.tab.active {
  color: #3b82f6;
  border-bottom-color: #3b82f6;
}`,
                            codeFile: 'styles.css',
                            tip: 'Active tab has a blue underline!',
                            explanation: 'We style tabs with an underline for the active one.'
                        },
                        {
                            title: 'Add Click Functionality',
                            description: 'Make tabs switch when clicked!',
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
                            explanation: 'We toggle the active class and update content based on the selected tab.'
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
                            title: 'Create Progress Bar HTML',
                            description: 'Make the progress bar structure!',
                            instruction: 'Add this HTML:',
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
                            explanation: 'We create a container with a label, percentage, and the progress bar.'
                        },
                        {
                            title: 'Style the Progress Bar',
                            description: 'Make it look nice!',
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
}

.progress-label {
  font-weight: 600;
  color: #1a1a1a;
}

.progress-percent {
  font-weight: 700;
  color: #3b82f6;
}

.progress-bar {
  width: 100%;
  height: 12px;
  background: #e5e7eb;
  border-radius: 20px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #3b82f6;
  border-radius: 20px;
  width: 0%;
  transition: width 0.5s ease;
}`,
                            codeFile: 'styles.css',
                            tip: 'The fill starts at 0% width!',
                            explanation: 'We style the bar with a background and a fill that will animate.'
                        },
                        {
                            title: 'Add JavaScript to Update Progress',
                            description: 'Make the bar fill up!',
                            instruction: 'Add this JavaScript:',
                            code: `function setProgress(percent) {
  const fill = document.querySelector('.progress-fill');
  const percentText = document.querySelector('.progress-percent');
  
  fill.style.width = percent + '%';
  percentText.textContent = percent + '%';
}

// Example: Set to 75%
setProgress(75);

// Example: Animate from 0 to 100
let progress = 0;
const interval = setInterval(() => {
  progress += 1;
  setProgress(progress);
  if (progress >= 100) clearInterval(interval);
}, 30);`,
                            codeFile: 'script.js',
                            tip: 'Call setProgress() to update the bar!',
                            explanation: 'We create a function to update the width and percentage text.'
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
                    duration: '15 minutes',
                    steps: [
                        {
                            title: 'Create the Banner',
                            description: 'Make an announcement banner!',
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
                            explanation: 'We create a banner with content and a close button.'
                        },
                        {
                            title: 'Style the Banner',
                            description: 'Make it stand out!',
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
}

.close-btn {
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
                            tip: 'Blue background makes it noticeable!',
                            explanation: 'We style the banner with flexbox to align content and button.'
                        },
                        {
                            title: 'Add Close Functionality',
                            description: 'Make the X button work!',
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
                            explanation: 'We create a function to hide the banner when the close button is clicked.'
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
                            title: 'Create Badge HTML',
                            description: 'Make badges for each difficulty!',
                            instruction: 'Add this HTML:',
                            code: `<div class="difficulty-badges">
  <span class="badge beginner">Beginner</span>
  <span class="badge intermediate">Intermediate</span>
  <span class="badge advanced">Advanced</span>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Each badge has a different class for colors!',
                            explanation: 'We create span elements with classes for each difficulty level.'
                        },
                        {
                            title: 'Style the Badges',
                            description: 'Add colors for each level!',
                            instruction: 'Add this CSS:',
                            code: `.badge {
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  color: white;
  display: inline-block;
}

.badge.beginner {
  background: #10b981;
}

.badge.intermediate {
  background: #f59e0b;
}

.badge.advanced {
  background: #ef4444;
}`,
                            codeFile: 'styles.css',
                            tip: 'Green = easy, Orange = medium, Red = hard!',
                            explanation: 'We style badges with different colors for each difficulty level.'
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
                            title: 'Create Status Badges',
                            description: 'Make badges for adoption status!',
                            instruction: 'Add this HTML:',
                            code: `<div class="pet-card">
  <img src="dog.jpg" alt="Cute dog">
  <h3>Max</h3>
  <span class="status-badge available">
    <i data-lucide="check"></i>
    Available
  </span>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Change the class to show different statuses!',
                            explanation: 'We create a badge with an icon and text for the adoption status.'
                        },
                        {
                            title: 'Style the Badges',
                            description: 'Add colors for each status!',
                            instruction: 'Add this CSS:',
                            code: `.status-badge {
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.status-badge.available {
  background: #10b981;
}

.status-badge.pending {
  background: #f59e0b;
}

.status-badge.adopted {
  background: #6b7280;
}

.status-badge i {
  width: 14px;
  height: 14px;
}`,
                            codeFile: 'styles.css',
                            tip: 'Green = available, Orange = pending, Gray = adopted!',
                            explanation: 'We style badges with different colors for each adoption status.'
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
                    duration: '15 minutes',
                    steps: [
                        {
                            title: 'Create Toggle Buttons',
                            description: 'Make buttons to switch between dogs and cats!',
                            instruction: 'Add this HTML:',
                            code: `<div class="pet-filter">
  <div class="toggle-buttons">
    <button class="toggle-btn active" data-type="dogs">
      <i data-lucide="dog"></i>
      Dogs
    </button>
    <button class="toggle-btn" data-type="cats">
      <i data-lucide="cat"></i>
      Cats
    </button>
  </div>
  <div class="results">Showing dogs...</div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'The active button shows which filter is on!',
                            explanation: 'We create toggle buttons with icons for dogs and cats.'
                        },
                        {
                            title: 'Style the Toggle',
                            description: 'Make it look like a switch!',
                            instruction: 'Add this CSS:',
                            code: `.toggle-buttons {
  display: flex;
  gap: 0.5rem;
  background: #f3f4f6;
  padding: 0.25rem;
  border-radius: 10px;
}

.toggle-btn {
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

.toggle-btn.active {
  background: #3b82f6;
  color: white;
}

.toggle-btn i {
  width: 18px;
  height: 18px;
}`,
                            codeFile: 'styles.css',
                            tip: 'Active button has blue background!',
                            explanation: 'We style the toggle with a background container and highlight the active button.'
                        },
                        {
                            title: 'Add Toggle Functionality',
                            description: 'Make buttons switch the filter!',
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
                            explanation: 'We add click listeners to toggle the active state and update the display.'
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
                    duration: '15 minutes',
                    steps: [
                        {
                            title: 'Create Statistics HTML',
                            description: 'Make boxes for each statistic!',
                            instruction: 'Add this HTML:',
                            code: `<div class="city-stats">
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
                            codeFile: 'index.html',
                            tip: 'Each stat has a big number and a label!',
                            explanation: 'We create stat items with numbers and labels for each city statistic.'
                        },
                        {
                            title: 'Style the Statistics',
                            description: 'Make them look organized!',
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
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}`,
                            codeFile: 'styles.css',
                            tip: 'Grid makes stats line up perfectly!',
                            explanation: 'We use CSS Grid to arrange statistics in equal columns.'
                        },
                        {
                            title: 'Add Different Colors',
                            description: 'Make each stat unique!',
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
                            explanation: 'We use nth-child to give each stat a unique color.'
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
                            title: 'Create Quote HTML',
                            description: 'Make a quote with attribution!',
                            instruction: 'Add this HTML:',
                            code: `<blockquote class="quote-block">
  <i data-lucide="quote" class="quote-icon"></i>
  <p class="quote-text">
    "This is an inspiring quote that captures the essence of our culture and traditions."
  </p>
  <cite class="quote-author">• Elder Name</cite>
</blockquote>`,
                            codeFile: 'index.html',
                            tip: 'Use blockquote for quotes - it\'s semantic HTML!',
                            explanation: 'We use the blockquote element with a quote icon, text, and author citation.'
                        },
                        {
                            title: 'Style the Quote Block',
                            description: 'Make it stand out!',
                            instruction: 'Add this CSS:',
                            code: `.quote-block {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 16px;
  border-left: 4px solid #3b82f6;
  position: relative;
  margin: 2rem 0;
}

.quote-icon {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 32px;
  height: 32px;
  color: #3b82f6;
  opacity: 0.2;
}

.quote-text {
  font-size: 1.1rem;
  font-style: italic;
  color: #1a1a1a;
  line-height: 1.6;
  margin: 0 0 1rem 0;
}

.quote-author {
  font-size: 0.9rem;
  font-weight: 600;
  color: #6b7280;
  font-style: normal;
}`,
                            codeFile: 'styles.css',
                            tip: 'The left border makes it look like a quote!',
                            explanation: 'We style the quote with a background, border, and decorative icon.'
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
                    duration: '20 minutes',
                    steps: [
                        {
                            title: 'Create Schedule HTML',
                            description: 'Make a list of workout days!',
                            instruction: 'Add this HTML:',
                            code: `<div class="workout-schedule">
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
                            codeFile: 'index.html',
                            tip: 'Each item shows a day and workout type!',
                            explanation: 'We create schedule items with day and workout information.'
                        },
                        {
                            title: 'Style the Schedule',
                            description: 'Make it look organized!',
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
}

.schedule-item {
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
}

.day {
  font-weight: 600;
  color: #1a1a1a;
}

.workout {
  color: #6b7280;
  font-size: 0.9rem;
}`,
                            codeFile: 'styles.css',
                            tip: 'Items slide when you hover over them!',
                            explanation: 'We style schedule items with flexbox and add a hover effect.'
                        },
                        {
                            title: 'Add Color Variations',
                            description: 'Give each day a different color!',
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
                            explanation: 'We use nth-child to give each day a unique color scheme.'
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
                    duration: '25 minutes',
                    steps: [
                        {
                            title: 'Create Timeline HTML',
                            description: 'Make timeline items with hidden details!',
                            instruction: 'Add this HTML:',
                            code: `<div class="expandable-timeline">
  <div class="timeline-item">
    <div class="timeline-year">2024</div>
    <div class="timeline-title">Major Championship</div>
    <div class="timeline-details hidden">
      <p>Full details about this championship, including teams, scores, and memorable moments.</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-year">2023</div>
    <div class="timeline-title">Historic Victory</div>
    <div class="timeline-details hidden">
      <p>Details about this historic victory and its significance.</p>
    </div>
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Details start hidden and expand when clicked!',
                            explanation: 'We create timeline items with titles and hidden detail sections.'
                        },
                        {
                            title: 'Style the Timeline',
                            description: 'Make it look like a timeline!',
                            instruction: 'Add this CSS:',
                            code: `.timeline-item {
  border-left: 3px solid #3b82f6;
  padding-left: 2rem;
  position: relative;
  margin-bottom: 2rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -9px;
  top: 0;
  width: 14px;
  height: 14px;
  background: #3b82f6;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
}

.timeline-year {
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
}

.timeline-details {
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
                            tip: 'The dot and line create the timeline look!',
                            explanation: 'We style the timeline with a vertical line and dots for each event.'
                        },
                        {
                            title: 'Add Click to Expand',
                            description: 'Make titles clickable to show details!',
                            instruction: 'Add this JavaScript:',
                            code: `const timelineTitles = document.querySelectorAll('.timeline-title');

timelineTitles.forEach(title => {
  title.addEventListener('click', () => {
    const details = title.nextElementSibling;
    details.classList.toggle('hidden');
    
    // Add arrow indicator
    if (details.classList.contains('hidden')) {
      title.textContent = title.textContent.replace('•', 'G•+');
    } else {
      title.textContent = title.textContent.replace('G•+', '•');
    }
  });
});`,
                            codeFile: 'script.js',
                            tip: 'Click titles to expand and collapse details!',
                            explanation: 'We toggle the hidden class to show/hide details when titles are clicked.'
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
                    duration: '25 minutes',
                    steps: [
                        {
                            title: 'Create Modal HTML',
                            description: 'Make a button and hidden modal!',
                            instruction: 'Add this HTML:',
                            code: `<button class="open-modal-btn" id="openModal">View Game Info</button>

<div class="game-modal hidden" id="gameModal">
  <div class="modal-overlay"></div>
  <div class="modal-content">
    <button class="close-modal" id="closeModal">
      <i data-lucide="x"></i>
    </button>
    <h3>Game Title</h3>
    <p><strong>Genre:</strong> Action RPG</p>
    <p><strong>Release:</strong> 1998</p>
    <p><strong>Description:</strong> An epic adventure game...</p>
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Modal starts hidden and appears when button is clicked!',
                            explanation: 'We create a button to open the modal and a modal with overlay and content.'
                        },
                        {
                            title: 'Style the Modal',
                            description: 'Make it appear over the page!',
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
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
}

.modal-content {
  position: relative;
  background: white;
  padding: 2rem;
  border-radius: 16px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  z-index: 1001;
}

.close-modal {
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
                            tip: 'The overlay darkens the background!',
                            explanation: 'We position the modal fixed and center it with flexbox.'
                        },
                        {
                            title: 'Add Open/Close Functionality',
                            description: 'Make buttons work!',
                            instruction: 'Add this JavaScript:',
                            code: `const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const modal = document.getElementById('gameModal');
const overlay = modal.querySelector('.modal-overlay');

openBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

overlay.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Initialize icons
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}`,
                            codeFile: 'script.js',
                            tip: 'Click outside the modal to close it!',
                            explanation: 'We add event listeners to open and close the modal.'
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
                            title: 'Create Profile HTML',
                            description: 'Make a card with tribe information!',
                            instruction: 'Add this HTML:',
                            code: `<div class="tribe-profile">
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
                            codeFile: 'index.html',
                            tip: 'Each tribe gets its own profile card!',
                            explanation: 'We create a card with an image section and information section.'
                        },
                        {
                            title: 'Style the Profile Card',
                            description: 'Make it look professional!',
                            instruction: 'Add this CSS:',
                            code: `.tribe-profile {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  max-width: 400px;
}

.tribe-image {
  height: 200px;
  overflow: hidden;
}

.tribe-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tribe-info {
  padding: 2rem;
}

.tribe-name {
  margin: 0 0 0.75rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
}

.tribe-region {
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
                            tip: 'The image fills the top of the card!',
                            explanation: 'We style the card with an image header and padded content area.'
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
                    duration: '15 minutes',
                    steps: [
                        {
                            title: 'Create Artifact HTML',
                            description: 'Make a card for cultural items!',
                            instruction: 'Add this HTML:',
                            code: `<div class="artifact-highlight">
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
                            codeFile: 'index.html',
                            tip: 'Each artifact gets an image and description!',
                            explanation: 'We create a card with an image and information about the artifact.'
                        },
                        {
                            title: 'Style the Artifact Card',
                            description: 'Make it look museum-quality!',
                            instruction: 'Add this CSS:',
                            code: `.artifact-highlight {
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.artifact-image {
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
}

.artifact-name {
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
}

.artifact-period {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #f3f4f6;
  color: #6b7280;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}`,
                            codeFile: 'styles.css',
                            tip: 'Flexbox aligns the image and text side by side!',
                            explanation: 'We use flexbox to create a horizontal layout with image and info.'
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
                    duration: '20 minutes',
                    steps: [
                        {
                            title: 'Create Table HTML',
                            description: 'Make a table with years and teams!',
                            instruction: 'Add this HTML:',
                            code: `<div class="history-table-container">
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
                            codeFile: 'index.html',
                            tip: 'Tables are perfect for organized data!',
                            explanation: 'We create a table with thead for headers and tbody for data rows.'
                        },
                        {
                            title: 'Style the Table',
                            description: 'Make it look clean and professional!',
                            instruction: 'Add this CSS:',
                            code: `.history-table-container {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  overflow-x: auto;
}

.history-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.history-table thead tr {
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
}

.history-table tbody tr {
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
                            tip: 'Rows highlight when you hover over them!',
                            explanation: 'We style the table with borders, padding, and hover effects.'
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
                    duration: '20 minutes',
                    steps: [
                        {
                            title: 'Create Stats Panel HTML',
                            description: 'Make a panel with player info and stats!',
                            instruction: 'Add this HTML:',
                            code: `<div class="player-stats-panel">
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
                            codeFile: 'index.html',
                            tip: 'Each stat gets its own box!',
                            explanation: 'We create a panel with player header and a grid of statistics.'
                        },
                        {
                            title: 'Style the Stats Panel',
                            description: 'Make it look professional!',
                            instruction: 'Add this CSS:',
                            code: `.player-stats-panel {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  max-width: 400px;
}

.player-header {
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
}

.player-name {
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
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.stat-box {
  text-align: center;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px;
}

.stat-value {
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
                            tip: 'Grid makes stats line up perfectly!',
                            explanation: 'We use flexbox for the header and grid for the stats layout.'
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
                    duration: '20 minutes',
                    steps: [
                        {
                            title: 'Create Checklist HTML',
                            description: 'Make checkboxes for each lesson!',
                            instruction: 'Add this HTML:',
                            code: `<div class="lesson-checklist">
  <h3>Course Progress</h3>
  <div class="checklist-items">
    <label class="checklist-item">
      <input type="checkbox" class="lesson-checkbox">
      <span class="lesson-title">Lesson 1: Introduction</span>
    </label>
    <label class="checklist-item">
      <input type="checkbox" class="lesson-checkbox">
      <span class="lesson-title">Lesson 2: Basic Chords</span>
    </label>
    <label class="checklist-item">
      <input type="checkbox" class="lesson-checkbox">
      <span class="lesson-title">Lesson 3: Rhythm Patterns</span>
    </label>
  </div>
  <div class="progress-summary">
    <span id="completedCount">0</span> of 3 completed
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'Check boxes to mark lessons complete!',
                            explanation: 'We create checkbox inputs wrapped in labels for each lesson.'
                        },
                        {
                            title: 'Style the Checklist',
                            description: 'Make it look organized!',
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
}

.checklist-item {
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
}

.lesson-checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #10b981;
}

.lesson-title {
  font-size: 0.95rem;
  color: #1a1a1a;
  font-weight: 500;
}

.progress-summary {
  text-align: center;
  padding: 1rem;
  background: #f0fdf4;
  border-radius: 8px;
  color: #10b981;
  font-weight: 600;
}`,
                            codeFile: 'styles.css',
                            tip: 'Items highlight when you hover!',
                            explanation: 'We style checkboxes and items with backgrounds and hover effects.'
                        },
                        {
                            title: 'Add Progress Counter',
                            description: 'Count completed lessons!',
                            instruction: 'Add this JavaScript:',
                            code: `const checkboxes = document.querySelectorAll('.lesson-checkbox');
const completedCount = document.getElementById('completedCount');

function updateProgress() {
  const checked = document.querySelectorAll('.lesson-checkbox:checked').length;
  completedCount.textContent = checked;
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateProgress);
});

// Initialize count
updateProgress();`,
                            codeFile: 'script.js',
                            tip: 'The counter updates automatically!',
                            explanation: 'We count checked boxes and update the display when checkboxes change.'
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
                            title: 'Create Calculator HTML',
                            description: 'Make input fields and result display!',
                            instruction: 'Add this HTML:',
                            code: `<div class="bmi-calculator">
  <h3>BMI Calculator</h3>
  <div class="calculator-inputs">
    <input type="number" id="height" placeholder="Height (cm)" min="0">
    <input type="number" id="weight" placeholder="Weight (kg)" min="0">
    <button id="calculateBtn">Calculate BMI</button>
  </div>
  <div class="bmi-result hidden" id="result">
    <div class="bmi-value" id="bmiValue">0</div>
    <div class="bmi-category" id="bmiCategory">-</div>
  </div>
</div>`,
                            codeFile: 'index.html',
                            tip: 'BMI = weight / (height in meters)-•',
                            explanation: 'We create input fields for height and weight, and a result display area.'
                        },
                        {
                            title: 'Style the Calculator',
                            description: 'Make it look clean!',
                            instruction: 'Add this CSS:',
                            code: `.bmi-calculator {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  max-width: 400px;
}

.calculator-inputs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.calculator-inputs input {
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
}

.calculator-inputs input:focus {
  outline: none;
  border-color: #3b82f6;
}

.calculator-inputs button {
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.calculator-inputs button:hover {
  background: #2563eb;
}

.bmi-result {
  padding: 1.5rem;
  background: #f0fdf4;
  border-radius: 12px;
  text-align: center;
}

.bmi-result.hidden {
  display: none;
}

.bmi-value {
  font-size: 2.5rem;
  font-weight: 800;
  color: #10b981;
  margin-bottom: 0.5rem;
}

.bmi-category {
  font-size: 1rem;
  color: #6b7280;
  font-weight: 600;
}`,
                            codeFile: 'styles.css',
                            tip: 'Result appears after calculation!',
                            explanation: 'We style inputs, button, and result display with clean modern design.'
                        },
                        {
                            title: 'Add Calculation Logic',
                            description: 'Make the calculator work!',
                            instruction: 'Add this JavaScript:',
                            code: `const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');
const bmiValue = document.getElementById('bmiValue');
const bmiCategory = document.getElementById('bmiCategory');

calculateBtn.addEventListener('click', () => {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);
  
  if (!height || !weight) {
    alert('Please enter both height and weight!');
    return;
  }
  
  // Calculate BMI (height in meters)
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
  
  // Determine category
  let category = '';
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 25) category = 'Normal Weight';
  else if (bmi < 30) category = 'Overweight';
  else category = 'Obese';
  
  // Display result
  bmiValue.textContent = bmi;
  bmiCategory.textContent = category;
  result.classList.remove('hidden');
});`,
                            codeFile: 'script.js',
                            tip: 'BMI categories: <18.5 underweight, 18.5-24.9 normal, 25-29.9 overweight, 30+ obese',
                            explanation: 'We calculate BMI using the formula and categorize the result.'
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
