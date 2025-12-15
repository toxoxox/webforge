# WebForge - Future Feature Ideas

This checklist contains potential enhancements for the WebForge student website builder platform.

## 🎨 Content & Assets

- [x] **Image/Asset Upload** ✅
  - Allow students to upload images, fonts, and other assets
  - Store as base64 in localStorage or provide file picker
  - Makes projects more visual and engaging

## 🛠️ Development Tools

- [ ] **CSS Preprocessor Support**
  - Add SASS/SCSS compilation in the browser
  - Use sass.js for client-side compilation
  - Teach modern CSS workflows

- [x] **Code Snippets Library** ✅
  - Searchable library of common patterns (nav bars, cards, forms, buttons)
  - Click-to-insert functionality
  - Organized by language (HTML, CSS, JavaScript) and category
  - 25+ pre-built snippets for common web development patterns

- [x] **Code Formatting**
  - Auto-format HTML/CSS/JS with Prettier
  - Teach code style and readability
  - Can run entirely in browser
  - Implemented with Ctrl+Shift+F keyboard shortcut

- [x] **Console Panel** ✅
  - Show JavaScript console.log output
  - Display errors and warnings in UI
  - Better debugging experience for students

## ♿ Accessibility & Quality

- [x] **Accessibility Checker**
  - Real-time accessibility hints (missing alt text, color contrast)
  - Use axe-core library in preview iframe
  - Teach best practices while building

## 📱 Responsive Design

- [x] **Responsive Design Testing** ✅
  - Preview at different viewport sizes (mobile, tablet, desktop)
  - Toggle between device presets (375px mobile, 768px tablet, 100% desktop)
  - Smooth transitions between sizes
  - Helps students learn responsive design principles

## 🔄 Version Control

- [ ] **Version History/Undo**
  - Track changes over time
  - Let students revert to previous versions
  - Learn from mistakes and compare approaches

## 🌐 Sharing & Collaboration

- [ ] **Project Sharing**
  - Generate shareable links (URL encoding or GitHub Gists)
  - Let students share work with teachers/friends
  - View-only mode for shared projects

- [x] **Collaborative Editing**
  - Real-time collaboration like Google Docs
  - Implemented with Firebase Realtime Database
  - Great for pair programming exercises
  - See docs/collaboration-guide.md for setup instructions

## 🚀 Deployment

- [ ] **Deployment Integration**
  - One-click deploy to GitHub Pages, Netlify, or Vercel
  - Teach students about hosting and deployment
  - Use platform APIs for automated deployment

## 📚 Templates & Learning

- [ ] **More Templates**
  - Landing page template
  - Business site template
  - Restaurant menu template
  - Resume/CV template
  - Game templates with canvas/JavaScript
  - E-commerce product page template

- [ ] **Advanced Tutorials**
  - Responsive design tutorial
  - Flexbox and Grid deep-dives
  - JavaScript DOM manipulation
  - API integration basics
  - Animation and transitions

## 🎯 User Experience

- [ ] **Project Search/Filter**
  - Search through projects by name or date
  - Filter by template type or tags
  - Sort by last modified, name, etc.

- [ ] **Keyboard Shortcuts**
  - Quick save (Ctrl+S)
  - Quick preview refresh (Ctrl+R)
  - File switching (Ctrl+Tab)
  - Command palette

- [x] **Dark Mode** ✅
  - Toggle between light and dark themes
  - Persists preference in localStorage
  - Syncs Monaco editor theme with UI theme

## 🔧 Technical Improvements

- [ ] **Better Error Messages**
  - More beginner-friendly error explanations
  - Suggested fixes for common errors
  - Links to learning resources

- [ ] **Performance Optimization**
  - Lazy load Monaco Editor modules
  - Optimize preview refresh logic
  - Better localStorage management

- [ ] **Offline Support**
  - Service Worker for offline functionality
  - Cache Monaco Editor and dependencies
  - Work completely offline after first load

## 📊 Analytics & Progress

- [ ] **Learning Progress Tracking**
  - Track completed tutorials
  - Show project statistics (lines of code, files created)
  - Achievement badges for milestones

- [ ] **Code Metrics**
  - Show code complexity
  - Count HTML elements, CSS rules, JS functions
  - Educational insights about code structure

---

## Implementation Notes

All features should maintain the core principles:
- Pure vanilla JavaScript (no frameworks)
- No build tools required
- Browser-based with no backend (where possible)
- Educational focus
- Responsive design
- Works offline or with minimal dependencies

Priority should be given to features that enhance the learning experience and maintain simplicity.
