/**
 * Snippet Service
 * Manages code snippets library with categories and search
 */

const SnippetService = {
    /**
     * Get all available snippets organized by category
     */
    getSnippets() {
        return {
            html: [
                {
                    id: 'html5-boilerplate',
                    name: 'HTML5 Boilerplate',
                    description: 'Complete HTML5 document structure',
                    category: 'Structure',
                    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`
                },
                {
                    id: 'navbar',
                    name: 'Navigation Bar',
                    description: 'Responsive navigation menu',
                    category: 'Components',
                    code: `<nav class="navbar">
    <div class="nav-brand">Logo</div>
    <ul class="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>`
                },
                {
                    id: 'card',
                    name: 'Card Component',
                    description: 'Content card with image and text',
                    category: 'Components',
                    code: `<div class="card">
    <img src="image.jpg" alt="Description">
    <div class="card-content">
        <h3>Card Title</h3>
        <p>Card description goes here.</p>
        <button>Learn More</button>
    </div>
</div>`
                },
                {
                    id: 'form',
                    name: 'Contact Form',
                    description: 'Basic contact form with validation',
                    category: 'Forms',
                    code: `<form class="contact-form">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" required></textarea>
    
    <button type="submit">Send</button>
</form>`
                },
                {
                    id: 'hero',
                    name: 'Hero Section',
                    description: 'Landing page hero with CTA',
                    category: 'Sections',
                    code: `<section class="hero">
    <h1>Welcome to Our Website</h1>
    <p>Your journey starts here</p>
    <button class="cta-button">Get Started</button>
</section>`
                },
                {
                    id: 'footer',
                    name: 'Footer',
                    description: 'Website footer with links',
                    category: 'Sections',
                    code: `<footer class="footer">
    <div class="footer-content">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <ul class="footer-links">
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#terms">Terms</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
</footer>`
                },
                {
                    id: 'grid',
                    name: 'Grid Layout',
                    description: '3-column responsive grid',
                    category: 'Layout',
                    code: `<div class="grid-container">
    <div class="grid-item">Item 1</div>
    <div class="grid-item">Item 2</div>
    <div class="grid-item">Item 3</div>
</div>`
                },
                {
                    id: 'button',
                    name: 'Button',
                    description: 'Styled button element',
                    category: 'Components',
                    code: `<button class="btn btn-primary">Click Me</button>`
                }
            ],
            css: [
                {
                    id: 'flexbox-center',
                    name: 'Flexbox Center',
                    description: 'Center content with flexbox',
                    category: 'Layout',
                    code: `display: flex;
justify-content: center;
align-items: center;`
                },
                {
                    id: 'grid-layout',
                    name: 'Grid Layout',
                    description: 'Responsive grid system',
                    category: 'Layout',
                    code: `display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 1rem;`
                },
                {
                    id: 'card-style',
                    name: 'Card Styling',
                    description: 'Modern card design',
                    category: 'Components',
                    code: `.card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    transition: transform 0.2s;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}`
                },
                {
                    id: 'button-style',
                    name: 'Button Styling',
                    description: 'Modern button with hover effect',
                    category: 'Components',
                    code: `.btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    background: #3498db;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
}

.btn:hover {
    background: #2980b9;
}`
                },
                {
                    id: 'navbar-style',
                    name: 'Navbar Styling',
                    description: 'Responsive navigation bar',
                    category: 'Components',
                    code: `.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #2c3e50;
    color: white;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.nav-menu a:hover {
    color: #3498db;
}`
                },
                {
                    id: 'gradient-bg',
                    name: 'Gradient Background',
                    description: 'Modern gradient background',
                    category: 'Effects',
                    code: `background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);`
                },
                {
                    id: 'smooth-shadow',
                    name: 'Smooth Shadow',
                    description: 'Layered box shadow for depth',
                    category: 'Effects',
                    code: `box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.1);`
                },
                {
                    id: 'responsive-text',
                    name: 'Responsive Typography',
                    description: 'Fluid font sizing',
                    category: 'Typography',
                    code: `font-size: clamp(1rem, 2vw + 1rem, 3rem);`
                },
                {
                    id: 'animation-fade',
                    name: 'Fade In Animation',
                    description: 'Smooth fade in effect',
                    category: 'Animation',
                    code: `@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 0.6s ease-out;
}`
                }
            ],
            javascript: [
                {
                    id: 'dom-ready',
                    name: 'DOM Ready',
                    description: 'Wait for DOM to load',
                    category: 'Basics',
                    code: `document.addEventListener('DOMContentLoaded', () => {
    // Your code here
});`
                },
                {
                    id: 'event-listener',
                    name: 'Event Listener',
                    description: 'Add click event listener',
                    category: 'Events',
                    code: `document.querySelector('.button').addEventListener('click', (e) => {
    e.preventDefault();
    // Handle click
});`
                },
                {
                    id: 'fetch-api',
                    name: 'Fetch API',
                    description: 'Make HTTP request',
                    category: 'API',
                    code: `fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });`
                },
                {
                    id: 'async-await',
                    name: 'Async/Await',
                    description: 'Async function with error handling',
                    category: 'API',
                    code: `async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}`
                },
                {
                    id: 'form-validation',
                    name: 'Form Validation',
                    description: 'Validate form inputs',
                    category: 'Forms',
                    code: `const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = form.querySelector('#email').value;
    const name = form.querySelector('#name').value;
    
    if (!name || !email) {
        if (typeof showToast === 'function') {
            showToast('Please fill all fields', 'warning');
        }
        return;
    }
    
    // Submit form
    console.log('Form submitted:', { name, email });
});`
                },
                {
                    id: 'toggle-class',
                    name: 'Toggle Class',
                    description: 'Toggle CSS class on element',
                    category: 'DOM',
                    code: `const element = document.querySelector('.menu');
element.classList.toggle('active');`
                },
                {
                    id: 'create-element',
                    name: 'Create Element',
                    description: 'Create and append DOM element',
                    category: 'DOM',
                    code: `const div = document.createElement('div');
div.className = 'new-element';
div.textContent = 'Hello World';
document.body.appendChild(div);`
                },
                {
                    id: 'local-storage',
                    name: 'LocalStorage',
                    description: 'Save and retrieve data',
                    category: 'Storage',
                    code: `// Save data
localStorage.setItem('key', JSON.stringify(data));

// Retrieve data
const data = JSON.parse(localStorage.getItem('key'));`
                },
                {
                    id: 'debounce',
                    name: 'Debounce Function',
                    description: 'Delay function execution',
                    category: 'Utilities',
                    code: `function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Usage
const handleInput = debounce((e) => {
    console.log(e.target.value);
}, 300);`
                },
                {
                    id: 'smooth-scroll',
                    name: 'Smooth Scroll',
                    description: 'Smooth scroll to element',
                    category: 'Effects',
                    code: `document.querySelector('.link').addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector('#section');
    target.scrollIntoView({ behavior: 'smooth' });
});`
                }
            ]
        };
    },

    /**
     * Search snippets by query
     */
    searchSnippets(query, language = null) {
        const allSnippets = this.getSnippets();
        const searchTerm = query.toLowerCase();
        const results = [];

        const languages = language ? [language] : ['html', 'css', 'javascript'];

        languages.forEach(lang => {
            allSnippets[lang].forEach(snippet => {
                const matchesName = snippet.name.toLowerCase().includes(searchTerm);
                const matchesDesc = snippet.description.toLowerCase().includes(searchTerm);
                const matchesCategory = snippet.category.toLowerCase().includes(searchTerm);

                if (matchesName || matchesDesc || matchesCategory) {
                    results.push({ ...snippet, language: lang });
                }
            });
        });

        return results;
    },

    /**
     * Get snippets by language
     */
    getSnippetsByLanguage(language) {
        const snippets = this.getSnippets();
        return snippets[language] || [];
    },

    /**
     * Get snippet by ID
     */
    getSnippetById(id, language) {
        const snippets = this.getSnippetsByLanguage(language);
        return snippets.find(s => s.id === id);
    },

    /**
     * Get all categories for a language
     */
    getCategories(language) {
        const snippets = this.getSnippetsByLanguage(language);
        const categories = [...new Set(snippets.map(s => s.category))];
        return categories.sort();
    }
};
