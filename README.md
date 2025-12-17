# WebForge - Learn Web Development by Building

WebForge is a browser-based learning platform that teaches HTML, CSS, and JavaScript through hands-on website building. Students learn by creating real website components step-by-step with immediate visual feedback.

## 🚀 New Learning-First Experience

WebForge now features a **guided learning flow** designed specifically for beginners:

### 📚 Landing Page (index.html)
- **Clear introduction** to what WebForge offers
- **Simple navigation** to tutorials or editor
- **Visual preview** of what students will build
- **3-step learning process** explanation

### 🎯 Tutorial Hub
- **Organized by technology**: HTML, CSS, JavaScript
- **Component-based tutorials**: Build real website parts
- **Progress tracking**: See your learning journey
- **Difficulty levels**: From beginner to advanced

### 💻 Code Editor (editor.html)
- **Professional Monaco Editor** (VS Code in browser)
- **Live preview** with instant feedback
- **Tutorial integration** with step-by-step guidance
- **Project management** and export functionality

## Features

- **Professional Code Editor** - Monaco Editor (VS Code's editor) with:
  - IntelliSense and autocomplete for HTML, CSS, and JavaScript
  - Custom snippets (html5, div, flexbox, grid, and more)
  - Syntax highlighting and error detection
  - Auto-closing brackets and quotes
  - Format on paste and type
  - Parameter hints and hover documentation
- **Code Formatting** - Auto-format HTML, CSS, and JavaScript with Prettier (Ctrl+Shift+F)
- **Live Preview** - Real-time preview with device size testing (mobile/tablet/desktop)
- **Project Import/Export** - Download and re-import projects as ZIP files
- **Code Snippets Library** - 25+ pre-built snippets for common patterns
- **Accessibility Checker** - Real-time accessibility validation with axe-core
- **Asset Management** - Upload and manage images, fonts, and other assets
- **Console Panel** - View JavaScript console output and errors
- **Pre-built Templates** - Portfolio and blog templates to learn from
- **Integrated Tutorials** - Step-by-step guides for HTML, CSS, and JavaScript
- **Keyboard Shortcuts** - Efficient workflow with documented shortcuts (Ctrl+/)
- **Collaborative Editing** - Real-time collaboration with Firebase (optional, requires setup)
- **Auto-Save** - Automatic localStorage persistence every 2 seconds
- **Dark Mode** - Toggle between light and dark themes
- **Offline Detection** - Visual warning when internet connection is lost
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Pure Vanilla** - HTML, CSS, and JavaScript - no build tools required!

## 🚀 Getting Started

### For Learning (Recommended for beginners)
1. Open `index.html` in your browser
2. Click "Start Learning"
3. Choose a tutorial category (HTML, CSS, or JavaScript)
4. Follow the step-by-step instructions to build real components

### For Building (Advanced users)
1. Open `editor.html` directly, or
2. Click "Open Editor" from the landing page
3. Create a new project or choose a template
4. Start coding with full editor features

### Local Server (Recommended)
For best results, use a local web server:

**Using Python:**
```bash
python -m http.server 8000
```

**Using Node.js:**
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
6. Click "Import" to restore a previously exported project
7. Click "Shortcuts" (or press Ctrl+/) to view keyboard shortcuts
8. Click "Tutorials" to access learning resources

### Keyboard Shortcuts

- **Ctrl+S** - Save current file
- **Ctrl+Shift+F** - Format code with Prettier
- **F11** - Toggle fullscreen preview
- **Esc** - Exit fullscreen preview
- **Ctrl+/** - Toggle line comment
- **Ctrl+/** - Show keyboard shortcuts modal

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
