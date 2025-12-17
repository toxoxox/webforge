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

// Tutorial Categories (for guided tutorial system)
const TutorialCategory = {
    LAYOUT: 'layout',
    NAVIGATION: 'navigation',
    UI_COMPONENTS: 'ui-components',
    FORMS: 'forms',
    JAVASCRIPT_FEATURES: 'javascript-features'
};

// Tutorial Difficulty Levels
const DifficultyLevel = {
    BEGINNER: 'beginner',
    INTERMEDIATE: 'intermediate',
    ADVANCED: 'advanced'
};

// Tutorial Step Types
const StepType = {
    HTML: 'html',
    CSS: 'css',
    JAVASCRIPT: 'javascript',
    EXPLANATION: 'explanation'
};

// Tutorial Topics (legacy - keeping for backward compatibility)
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
 * Validates a tutorial object
 * @param {Object} tutorial - The tutorial to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateTutorial(tutorial) {
    if (!tutorial || typeof tutorial !== 'object') {
        return false;
    }
    
    // Required fields
    if (!tutorial.id || !tutorial.title || !tutorial.category) {
        return false;
    }
    
    // Validate category
    if (!Object.values(TutorialCategory).includes(tutorial.category)) {
        return false;
    }
    
    // Validate difficulty if present
    if (tutorial.difficulty && !Object.values(DifficultyLevel).includes(tutorial.difficulty)) {
        return false;
    }
    
    // Validate steps array
    if (!Array.isArray(tutorial.steps) || tutorial.steps.length === 0) {
        return false;
    }
    
    // Validate each step
    return tutorial.steps.every(step => validateStep(step));
}

/**
 * Validates a tutorial step object
 * @param {Object} step - The step to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateStep(step) {
    if (!step || typeof step !== 'object') {
        return false;
    }
    
    // Required fields
    if (!step.id || !step.title || !step.goal) {
        return false;
    }
    
    // Validate goal is one sentence (ends with period, exclamation, or question mark)
    const goal = step.goal.trim();
    if (goal.length === 0) {
        return false;
    }
    
    // Check for multiple sentences (more than one sentence-ending punctuation)
    const sentenceEnders = goal.match(/[.!?]/g);
    if (sentenceEnders && sentenceEnders.length > 1) {
        return false;
    }
    
    // Validate code snippet size if present (1-10 lines)
    if (step.codeSnippet) {
        const lines = step.codeSnippet.split('\n');
        if (lines.length < 1 || lines.length > 10) {
            return false;
        }
    }
    
    return true;
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
 * Creates a new Tutorial object for guided tutorial system
 * @param {string} title - Tutorial title
 * @param {string} category - Tutorial category from TutorialCategory enum
 * @param {string} difficulty - Difficulty level from DifficultyLevel enum
 * @param {string} estimatedTime - Estimated completion time (e.g., "15 minutes")
 * @param {string} description - Tutorial description
 * @param {Array} steps - Array of tutorial steps
 * @param {Array} prerequisites - Array of prerequisite tutorial IDs
 * @param {Array} unlocksTutorials - Array of tutorial IDs unlocked by completion
 * @returns {Object} - Tutorial object
 */
function createTutorial(title, category, difficulty = DifficultyLevel.BEGINNER, estimatedTime = '15 minutes', description = '', steps = [], prerequisites = [], unlocksTutorials = []) {
    return {
        id: generateId(),
        title: title,
        category: category,
        difficulty: difficulty,
        estimatedTime: estimatedTime,
        description: description,
        prerequisites: prerequisites,
        finalPreview: '', // Will be set when preview image is available
        steps: steps,
        unlocksTutorials: unlocksTutorials
    };
}

/**
 * Creates a new TutorialStep object for guided tutorial system
 * @param {string} title - Step title
 * @param {string} goal - One-sentence goal description
 * @param {string} targetFile - File to edit
 * @param {string} targetLocation - Where to add code
 * @param {string} codeSnippet - Code snippet to type
 * @param {string} explanation - Optional brief explanation
 * @param {string} hint - Hint for when student gets stuck
 * @param {Object} validation - Validation rules for step completion
 * @returns {Object} - TutorialStep object
 */
function createTutorialStep(title, goal, targetFile = '', targetLocation = '', codeSnippet = '', explanation = '', hint = '', validation = null) {
    return {
        id: generateId(),
        title: title,
        goal: goal,
        targetFile: targetFile,
        targetLocation: targetLocation,
        codeSnippet: codeSnippet,
        explanation: explanation,
        validation: validation,
        hint: hint,
        fallbackCode: codeSnippet
    };
}

/**
 * Creates a new TutorialCategory object
 * @param {string} id - Category identifier
 * @param {string} name - Display name
 * @param {string} description - Category description
 * @param {string} icon - Icon identifier
 * @param {number} order - Display order
 * @param {Array} tutorials - Array of tutorial IDs in this category
 * @returns {Object} - TutorialCategory object
 */
function createTutorialCategoryData(id, name, description, icon = '', order = 0, tutorials = []) {
    return {
        id: id,
        name: name,
        description: description,
        icon: icon,
        order: order,
        tutorials: tutorials
    };
}

/**
 * Creates a new UserProgress object
 * @param {string} userId - User identifier
 * @returns {Object} - UserProgress object
 */
function createUserProgress(userId = 'default-user') {
    return {
        userId: userId,
        tutorials: {},
        unlockedTutorials: [],
        completedTutorials: [],
        currentTutorial: null,
        currentStep: null
    };
}

/**
 * Creates a tutorial progress entry
 * @param {string} tutorialId - Tutorial identifier
 * @param {number} totalSteps - Total number of steps in tutorial
 * @returns {Object} - Tutorial progress object
 */
function createTutorialProgress(tutorialId, totalSteps) {
    return {
        started: true,
        completedSteps: [],
        totalSteps: totalSteps,
        completed: false,
        startedAt: new Date().toISOString(),
        lastAccessedAt: new Date().toISOString()
    };
}
