/**
 * Core data models and types for the Student Website Builder
 */

// File Types
const FileType = {
    HTML: 'html',
    CSS: 'css',
    JAVASCRIPT: 'javascript',
    ASSET: 'asset'
};

// Template Categories
const TemplateCategory = {
    PORTFOLIO: 'portfolio',
    BLOG: 'blog',
    LANDING: 'landing',
    BUSINESS: 'business'
};

// Tutorial Topics
const TutorialTopic = {
    HTML_BASICS: 'html-basics',
    CSS_STYLING: 'css-styling',
    JAVASCRIPT_FUNDAMENTALS: 'javascript-fundamentals',
    RESPONSIVE_DESIGN: 'responsive-design'
};

/**
 * Validates a file name
 * @param {string} name - The file name to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function isValidFileName(name) {
    if (!name || typeof name !== 'string') {
        return false;
    }
    
    // Trim whitespace
    const trimmed = name.trim();
    
    // Check if empty or only whitespace
    if (trimmed.length === 0) {
        return false;
    }
    
    // Check for invalid characters
    const invalidChars = /[<>:"/\\|?*\x00-\x1F]/;
    if (invalidChars.test(trimmed)) {
        return false;
    }
    
    return true;
}

/**
 * Validates a project name
 * @param {string} name - The project name to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function isValidProjectName(name) {
    return isValidFileName(name);
}

/**
 * Generates a unique ID
 * @returns {string} - A unique identifier
 */
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Creates a new Project object
 * @param {string} name - Project name
 * @param {Array} files - Array of ProjectFile objects
 * @returns {Object} - Project object
 */
function createProject(name, files = []) {
    return {
        id: generateId(),
        name: name,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        files: files
    };
}

/**
 * Creates a new ProjectFile object
 * @param {string} projectId - Parent project ID
 * @param {string} name - File name
 * @param {string} type - File type from FileType enum
 * @param {string} content - File content
 * @returns {Object} - ProjectFile object
 */
function createProjectFile(projectId, name, type, content = '') {
    return {
        id: generateId(),
        projectId: projectId,
        name: name,
        type: type,
        content: content,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
}

/**
 * Creates a new Template object
 * @param {string} name - Template name
 * @param {string} description - Template description
 * @param {string} category - Template category
 * @param {Array} files - Array of template files
 * @returns {Object} - Template object
 */
function createTemplate(name, description, category, files) {
    return {
        id: generateId(),
        name: name,
        description: description,
        category: category,
        previewImage: '',
        files: files
    };
}

/**
 * Creates a new Tutorial object
 * @param {string} title - Tutorial title
 * @param {string} topic - Tutorial topic
 * @param {Array} steps - Array of tutorial steps
 * @returns {Object} - Tutorial object
 */
function createTutorial(title, topic, steps) {
    return {
        id: generateId(),
        title: title,
        topic: topic,
        steps: steps
    };
}

/**
 * Creates a new TutorialStep object
 * @param {string} title - Step title
 * @param {string} content - Step content (markdown)
 * @param {string} codeExample - Optional code example
 * @returns {Object} - TutorialStep object
 */
function createTutorialStep(title, content, codeExample = null) {
    return {
        id: generateId(),
        title: title,
        content: content,
        codeExample: codeExample,
        completed: false
    };
}
