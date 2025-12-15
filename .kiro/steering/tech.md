---
inclusion: always
---

# Technology Stack

## Core Technologies

- **HTML5, CSS3, JavaScript (ES6+)**: Pure vanilla implementation with no frameworks
- **Monaco Editor**: VS Code's editor via CDN (v0.45.0)
- **JSZip**: ZIP file generation for project export (v3.10.1)
- **localStorage**: Browser-based persistence (no backend required)

## Build System

**None required** - This is a pure client-side application that runs directly in the browser.

## Running the Application

### Development

Use any local web server to serve the files:

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# Or simply open index.html in a browser
```

Then navigate to `http://localhost:8000`

### Production

Deploy static files to any web hosting service (GitHub Pages, Netlify, Vercel, etc.)

## Browser Requirements

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## External Dependencies (CDN)

All dependencies loaded via CDN - no npm install required:
- Monaco Editor: `https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/`
- JSZip: `https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js`

## Testing

No automated test runner. Tests are located in:
- `tests/property-tests.html` - Property-based tests (open in browser)
- `tests/manual-tests.md` - Manual testing guide

## Common Commands

```bash
# Start local server (Python)
python -m http.server 8000

# Start local server (Node.js)
npx http-server

# No build, compile, or install commands needed
```
