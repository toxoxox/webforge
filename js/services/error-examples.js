/**
 * Error Examples - Sample error messages and educational content
 * 
 * Demonstrates the beginner-friendly error checking system with real examples
 * that students commonly encounter when learning web development.
 */

const ErrorExamples = {
    /**
     * HTML Structure Errors
     */
    htmlErrors: [
        {
            category: 'CRITICAL',
            title: 'Missing DOCTYPE Declaration',
            message: 'Your HTML file should start with <!DOCTYPE html>',
            file: 'index.html',
            line: 1,
            explanation: 'DOCTYPE tells the browser what version of HTML you\'re using. Without it, your page might not display correctly.',
            fix: 'Add <!DOCTYPE html> as the very first line of your HTML file',
            beginnerTip: 'Think of DOCTYPE as introducing yourself to the browser - "Hi, I\'m using HTML5!"',
            code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <title>My Website</title>\n</head>'
        },
        {
            category: 'STRUCTURAL',
            title: 'Navigation Outside Header',
            message: 'Your navigation should typically be inside the header element.',
            file: 'index.html',
            line: 15,
            explanation: 'Grouping related elements helps with organization and makes your site more accessible to screen readers.',
            fix: 'Move the <nav> element inside the <header>',
            beginnerTip: 'Think of the header as a container for your site\'s top section - logo, navigation, and main heading all belong together!',
            code: '<header>\n    <nav>\n        <ul>\n            <li><a href="#home">Home</a></li>\n            <li><a href="#about">About</a></li>\n        </ul>\n    </nav>\n</header>'
        },
        {
            category: 'SYNTAX',
            title: 'Unclosed HTML Tag',
            message: 'The <div> tag is not properly closed.',
            file: 'index.html',
            line: 23,
            explanation: 'Every opening HTML tag needs a matching closing tag. This is like opening and closing parentheses in math.',
            fix: 'Add </div> to close the tag',
            beginnerTip: 'HTML tags are like containers - you need to open them AND close them!',
            code: '<div class="container">\n    <p>This content is inside the div</p>\n</div> <!-- Don\'t forget to close! -->'
        }
    ],

    /**
     * CSS Styling Errors
     */
    cssErrors: [
        {
            category: 'STYLE',
            title: 'CSS Selector Not Found',
            message: 'The selector ".navigation" doesn\'t match any HTML elements.',
            file: 'styles.css',
            line: 45,
            explanation: 'CSS selectors need to match HTML elements to apply styles. It\'s like giving directions to someone who isn\'t there.',
            fix: 'Check if class="navigation" exists in your HTML, or change the CSS selector',
            beginnerTip: 'CSS is like giving instructions - make sure the element you\'re talking to actually exists!',
            code: '/* Make sure this matches your HTML */\n.navigation {\n    background: #333;\n}\n\n/* HTML should have: */\n/* <nav class="navigation">...</nav> */'
        },
        {
            category: 'SYNTAX',
            title: 'Missing Semicolon',
            message: 'CSS properties should end with a semicolon.',
            file: 'styles.css',
            line: 12,
            explanation: 'Semicolons separate CSS properties from each other. Without them, the browser might not understand your styles.',
            fix: 'Add a semicolon (;) at the end of this line',
            beginnerTip: 'Think of semicolons as periods at the end of CSS sentences!',
            code: '.header {\n    background: #333; /* Don\'t forget the semicolon! */\n    color: white;\n    padding: 1rem;\n}'
        },
        {
            category: 'SUGGESTION',
            title: 'Consider Using Flexbox',
            message: 'You\'re using float for layout. Flexbox might be easier and more reliable.',
            file: 'styles.css',
            line: 28,
            explanation: 'Flexbox is a modern way to create layouts that\'s more predictable than floats.',
            fix: 'Try using display: flex instead of float',
            beginnerTip: 'Flexbox is like having a smart assistant that arranges your elements for you!',
            code: '/* Instead of float: */\n.old-way {\n    float: left;\n    width: 50%;\n}\n\n/* Try flexbox: */\n.container {\n    display: flex;\n}\n.item {\n    flex: 1;\n}'
        }
    ],

    /**
     * JavaScript Errors
     */
    javascriptErrors: [
        {
            category: 'SYNTAX',
            title: 'Element Not Found',
            message: 'JavaScript is looking for an element with id="myButton" but it doesn\'t exist in your HTML.',
            file: 'script.js',
            line: 8,
            explanation: 'JavaScript can\'t find the HTML element you\'re trying to use. It\'s like calling someone who isn\'t home.',
            fix: 'Add id="myButton" to an HTML element, or change the JavaScript to use a different id',
            beginnerTip: 'Always make sure the HTML element exists before trying to use it in JavaScript!',
            code: '// Make sure this element exists in HTML:\nconst button = document.getElementById("myButton");\nif (button) {\n    button.addEventListener("click", function() {\n        alert("Button clicked!");\n    });\n} else {\n    console.log("Button not found!");\n}'
        },
        {
            category: 'SUGGESTION',
            title: 'Missing Error Handling',
            message: 'Consider adding error handling to make your code more robust.',
            file: 'script.js',
            line: 15,
            explanation: 'Error handling helps your website work even when something unexpected happens.',
            fix: 'Add try-catch blocks or check if elements exist before using them',
            beginnerTip: 'Good code expects things to go wrong sometimes and handles it gracefully!',
            code: 'try {\n    const element = document.getElementById("myElement");\n    if (element) {\n        element.style.color = "blue";\n    } else {\n        console.log("Element not found");\n    }\n} catch (error) {\n    console.log("Something went wrong:", error);\n}'
        }
    ],

    /**
     * Beginner Mistake Predictions
     */
    beginnerMistakes: [
        {
            category: 'STRUCTURAL',
            title: 'CSS in HTML File',
            message: 'It looks like you\'re writing CSS code in an HTML file.',
            file: 'index.html',
            line: 45,
            explanation: 'CSS styling should go in a separate CSS file or inside <style> tags for better organization.',
            fix: 'Move this CSS to your CSS file, or wrap it in <style> tags',
            beginnerTip: 'Keep your HTML and CSS separate - it\'s like keeping your clothes organized in different drawers!',
            code: '<!-- In HTML file: -->\n<head>\n    <link rel="stylesheet" href="styles.css">\n    <!-- OR use style tags: -->\n    <style>\n        .my-class { color: blue; }\n    </style>\n</head>'
        },
        {
            category: 'SUGGESTION',
            title: 'Code Placement Tip',
            message: 'It looks like you might be adding content at the bottom of your file.',
            file: 'index.html',
            line: 89,
            explanation: 'New content usually goes inside existing containers like <main> or <section> rather than at the end of the file.',
            fix: 'Try adding your new content inside the <body> or <main> section',
            beginnerTip: 'Think of HTML like nesting boxes - put new content inside existing containers!',
            code: '<body>\n    <main>\n        <!-- Add your new content here -->\n        <section>\n            <h2>New Section</h2>\n            <p>Your content goes here</p>\n        </section>\n    </main>\n</body>'
        },
        {
            category: 'CRITICAL',
            title: 'Wrong File Type',
            message: 'It looks like you\'re writing HTML code in a CSS file.',
            file: 'styles.css',
            line: 23,
            explanation: 'CSS files are for styling, HTML files are for content structure. Each file type has its own purpose.',
            fix: 'Move this HTML code to your HTML file (like index.html)',
            beginnerTip: 'Remember: HTML for structure, CSS for styling, JavaScript for interactivity - each has its own job!',
            code: '/* CSS file should only contain styles: */\n.header {\n    background: #333;\n    color: white;\n}\n\n/* HTML should go in .html files: */\n/* <header class="header">My Site</header> */'
        }
    ],

    /**
     * Component Integrity Errors
     */
    componentErrors: [
        {
            category: 'STRUCTURAL',
            title: 'Missing Navigation Component',
            message: 'Portfolio websites typically need a navigation section.',
            file: 'index.html',
            line: 0,
            explanation: 'Navigation helps visitors move around your portfolio easily and find your work.',
            fix: 'Add a <nav> element with links to different sections of your portfolio',
            beginnerTip: 'Think of navigation like a map for your website - it helps people find what they\'re looking for!',
            code: '<nav>\n    <ul>\n        <li><a href="#about">About</a></li>\n        <li><a href="#projects">Projects</a></li>\n        <li><a href="#contact">Contact</a></li>\n    </ul>\n</nav>'
        },
        {
            category: 'STRUCTURAL',
            title: 'Missing Main Content Area',
            message: 'Your page needs a main content area to hold the primary content.',
            file: 'index.html',
            line: 0,
            explanation: 'The <main> element tells browsers and screen readers where your main content is located.',
            fix: 'Add a <main> element to wrap your primary content',
            beginnerTip: 'The <main> element is like the star of your webpage - it contains the most important content!',
            code: '<main>\n    <section id="hero">\n        <h1>Welcome to My Portfolio</h1>\n        <p>I\'m a web developer...</p>\n    </section>\n    \n    <section id="projects">\n        <h2>My Projects</h2>\n        <!-- Project content here -->\n    </section>\n</main>'
        }
    ],

    /**
     * Get random error example for demonstration
     */
    getRandomError() {
        const allErrors = [
            ...this.htmlErrors,
            ...this.cssErrors,
            ...this.javascriptErrors,
            ...this.beginnerMistakes,
            ...this.componentErrors
        ];
        
        return allErrors[Math.floor(Math.random() * allErrors.length)];
    },

    /**
     * Get errors by category
     */
    getErrorsByCategory(category) {
        const allErrors = [
            ...this.htmlErrors,
            ...this.cssErrors,
            ...this.javascriptErrors,
            ...this.beginnerMistakes,
            ...this.componentErrors
        ];
        
        return allErrors.filter(error => error.category === category);
    },

    /**
     * Get errors by file type
     */
    getErrorsByFileType(fileType) {
        switch (fileType.toLowerCase()) {
            case 'html':
                return [...this.htmlErrors, ...this.beginnerMistakes.filter(e => e.file.endsWith('.html'))];
            case 'css':
                return [...this.cssErrors, ...this.beginnerMistakes.filter(e => e.file.endsWith('.css'))];
            case 'javascript':
            case 'js':
                return [...this.javascriptErrors, ...this.beginnerMistakes.filter(e => e.file.endsWith('.js'))];
            default:
                return [];
        }
    },

    /**
     * Generate demo error set for testing
     */
    generateDemoErrors(count = 5) {
        const allErrors = [
            ...this.htmlErrors,
            ...this.cssErrors,
            ...this.javascriptErrors,
            ...this.beginnerMistakes,
            ...this.componentErrors
        ];
        
        // Shuffle and take requested count
        const shuffled = allErrors.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    },

    /**
     * Get tutorial-specific errors
     */
    getTutorialErrors(tutorialCategory) {
        const tutorialErrorMap = {
            'navigation': [
                this.htmlErrors[1], // Navigation outside header
                this.componentErrors[0] // Missing navigation
            ],
            'layout': [
                this.htmlErrors[0], // Missing DOCTYPE
                this.componentErrors[1] // Missing main content
            ],
            'forms': [
                this.htmlErrors[2], // Unclosed tags
                this.cssErrors[1] // Missing semicolon
            ],
            'ui-components': [
                this.cssErrors[0], // Selector not found
                this.beginnerMistakes[0] // CSS in HTML
            ],
            'javascript-features': [
                this.javascriptErrors[0], // Element not found
                this.javascriptErrors[1] // Missing error handling
            ]
        };
        
        return tutorialErrorMap[tutorialCategory] || [];
    },

    /**
     * Get beginner-friendly explanation for error type
     */
    getErrorTypeExplanation(category) {
        const explanations = {
            CRITICAL: {
                title: 'Critical Issues',
                description: 'These errors prevent your website from working properly and need to be fixed right away.',
                icon: 'x-circle',
                color: '#dc2626'
            },
            STRUCTURAL: {
                title: 'Structure Issues',
                description: 'These affect how your website is organized. Fixing them makes your site more accessible and professional.',
                icon: 'alert-triangle',
                color: '#ea580c'
            },
            SYNTAX: {
                title: 'Syntax Errors',
                description: 'These are like typos in your code. They\'re usually easy to fix once you know where they are.',
                icon: 'alert-circle',
                color: '#d97706'
            },
            STYLE: {
                title: 'Style Issues',
                description: 'These affect how your website looks. They won\'t break anything, but fixing them improves the appearance.',
                icon: 'info',
                color: '#2563eb'
            },
            SUGGESTION: {
                title: 'Helpful Tips',
                description: 'These are suggestions to make your code better, cleaner, or more modern. Great for learning!',
                icon: 'lightbulb',
                color: '#16a34a'
            }
        };
        
        return explanations[category] || explanations.SUGGESTION;
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ErrorExamples;
}