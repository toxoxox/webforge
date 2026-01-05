# WebForge - Browser-Based Website Builder

## What is WebForge?

WebForge is an educational web development platform that runs entirely in the browser. Students can learn HTML, CSS, and JavaScript by building real websites with immediate visual feedback - no installation or setup required.

## Key Features

- **Monaco Editor**: Professional VS Code editor with IntelliSense and syntax highlighting
- **Live Preview**: Real-time sandboxed preview of websites as you code
- **Project Management**: Create, save, and manage multiple projects with auto-save
- **Templates & Components**: Pre-built starting points and reusable UI components
- **Interactive Tutorials**: Step-by-step guides for web development fundamentals
- **Export**: Download projects as ZIP files ready for hosting
- **Zero Setup**: Works immediately in any modern browser

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+) - no frameworks
- **Editor**: Monaco Editor (v0.45.0) via CDN
- **Storage**: Browser localStorage (no backend required)
- **Export**: JSZip (v3.10.1) for project downloads

## Architecture

```
├── index.html              # Main application
├── components.html         # Component library
├── styles/main.css         # All application styles
├── js/
│   ├── app.js             # Main app logic & Monaco setup
│   ├── models/types.js    # Data models & validation
│   └── services/          # Business logic services
└── docs/                  # Documentation & guides
```

## Getting Started

1. **Development**: Use any local web server (`python -m http.server 8000`)
2. **Production**: Deploy static files to any hosting service
3. **No Build Process**: Everything runs directly in the browser

## Target Audience

Students and educators in web development courses who need:
- Immediate setup and feedback
- Safe experimentation environment
- Built-in learning resources
- Professional development tools

## Browser Support

Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

---

*WebForge: Learn web development by building real websites, right in your browser.*