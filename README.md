# WebForge - Student Website Builder

A web-based platform that enables students to learn web development by building their own websites.

## Features

- **Professional Code Editor** - Monaco Editor (VS Code's editor) with:
  - IntelliSense and autocomplete for HTML, CSS, and JavaScript
  - Custom snippets (html5, div, flexbox, grid, and more)
  - Syntax highlighting and error detection
  - Auto-closing brackets and quotes
  - Format on paste and type
  - Parameter hints and hover documentation
- **Code Formatting** - Auto-format HTML, CSS, and JavaScript with Prettier (Ctrl+Shift+F)
- **Live Preview** - Real-time preview of websites as you build
- **Pre-built Templates** - Portfolio and blog templates to learn from
- **Integrated Tutorials** - Step-by-step guides for HTML, CSS, and JavaScript
- **Collaborative Editing** - Real-time collaboration with Firebase (optional, requires setup)
- **Auto-Save** - Automatic localStorage persistence every 2 seconds
- **Export Projects** - Download as ZIP files ready to host
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Pure Vanilla** - HTML, CSS, and JavaScript - no build tools required!

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local web server (optional, but recommended)

### Installation

No installation required! Just open `index.html` in your browser.

For best results, use a local web server:

**Using Python:**
```bash
python -m http.server 8000
```

**Using Node.js (http-server):**
```bash
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Project Structure

```
├── index.html          # Main HTML file
├── styles/
│   └── main.css       # Main stylesheet
├── js/
│   ├── models/
│   │   └── types.js   # Data models and types
│   ├── services/
│   │   ├── storage.js    # LocalStorage service
│   │   ├── file.js       # File operations
│   │   ├── project.js    # Project management
│   │   ├── template.js   # Template service
│   │   └── tutorial.js   # Tutorial service
│   └── app.js         # Main application logic
└── tests/             # Test files

```

## How to Use

1. Click "New Project" to create a new website project
2. Choose to start from scratch or use a template
3. Edit your HTML, CSS, and JavaScript in the code editor
4. See live preview of your changes
5. Click "Export" to download your project as a ZIP file
6. Click "Help" to access tutorials

## Features in Detail

### Code Editor
- Syntax highlighting for HTML, CSS, and JavaScript
- Line numbers and code formatting
- Auto-save every 2 seconds

### Templates
- Portfolio template
- Blog template
- More templates coming soon!

### Tutorials
- HTML Basics
- CSS Styling
- JavaScript Fundamentals

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT
