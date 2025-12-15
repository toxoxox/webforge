---
inclusion: always
---

# Project Structure

## Architecture Pattern

**Service-Oriented Architecture** with clear separation of concerns:
- Models define data structures and validation
- Services handle business logic and operations
- Main app orchestrates UI and user interactions

## Directory Layout

```
├── index.html              # Main application entry point
├── demo.html               # Demo/example page
├── styles/
│   └── main.css           # All application styles (single file)
├── js/
│   ├── app.js             # Main application logic, UI orchestration, Monaco setup
│   ├── html-autocomplete.js  # Custom HTML autocomplete for Monaco
│   ├── models/
│   │   └── types.js       # Data models, validation, factory functions
│   └── services/
│       ├── storage.js     # localStorage operations
│       ├── file.js        # File CRUD operations
│       ├── project.js     # Project management, export
│       ├── template.js    # Template management
│       └── tutorial.js    # Tutorial content and management
├── img/
│   └── webforge-icon.png  # Application icon
└── tests/                 # Test files (if present)
```

## Code Organization Conventions

### Models (`js/models/types.js`)
- Define enums (FileType, TemplateCategory, TutorialTopic)
- Validation functions (isValidFileName, isValidProjectName)
- Factory functions (createProject, createProjectFile, createTemplate, etc.)
- ID generation (generateId)

### Services (`js/services/*.js`)
- Each service is a singleton object with methods
- Services use models for data creation and validation
- Services interact with StorageService for persistence
- No direct DOM manipulation in services

### Main App (`js/app.js`)
- Monaco Editor initialization and configuration
- UI event handlers
- DOM manipulation and rendering
- Orchestrates services to fulfill user actions
- Auto-save logic with 2-second debounce

### Styling (`styles/main.css`)
- Single CSS file for entire application
- Organized by component (header, sidebar, workspace, modals, etc.)
- Responsive breakpoints at 1024px and 768px
- Utility classes (e.g., `.hidden`)

## Key Patterns

1. **No Classes**: Pure functional approach with factory functions
2. **Global Services**: Services exposed as global objects (StorageService, ProjectService, etc.)
3. **Script Loading Order**: Models → Services → App (defined in index.html)
4. **Data Flow**: User Action → App → Service → Storage → UI Update
5. **State Management**: Current project and file stored in global variables in app.js
6. **Auto-save**: Debounced saves triggered by editor changes

## File Naming

- Lowercase with hyphens for multi-word files (e.g., `html-autocomplete.js`)
- Service files named by domain (e.g., `storage.js`, `project.js`)
- Single responsibility per file

## Adding New Features

1. **New data type**: Add to `models/types.js`
2. **New business logic**: Create service in `services/`
3. **New UI component**: Add to `app.js` with corresponding CSS in `main.css`
4. **New external library**: Add CDN link to `index.html`
