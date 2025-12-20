/**
 * Main Application
 */

let currentProject = null;
let currentFile = null;
let editor = null;
let autoSaveTimeout = null;

// Service stubs to prevent errors if services aren't loaded
window.ProjectService = window.ProjectService || {
    listProjects: () => [],
    getCurrentProject: () => null,
    createProject: () => ({ id: 'temp', name: 'Temp', files: [] }),
    saveProject: () => {},
    deleteProject: () => {},
    exportProject: () => Promise.resolve()
};

window.FileService = window.FileService || {
    createFile: () => ({ id: 'temp', name: 'temp.html', type: 'html', content: '' }),
    readFile: () => null,
    updateFile: () => {},
    deleteFile: () => {}
};

window.StorageService = window.StorageService || {
    getTutorialStatus: () => ({ completed: false }),
    saveTutorialProgress: () => {},
    loadTutorialProgress: () => ({ completedSteps: [] }),
    markTutorialComplete: () => {},
    unlockTutorial: () => {},
    saveCurrentTutorialState: () => {},
    loadCurrentTutorialState: () => null,
    createSnapshot: () => {}
};

window.TutorialEngine = window.TutorialEngine || {
    getAllTutorialDefinitions: () => [],
    getTutorialDefinition: () => null,
    startTutorial: () => ({ tutorial: null, step: null, stepIndex: 0 }),
    nextStep: () => ({ completed: false }),
    previousStep: () => null,
    pauseTutorial: () => {},
    resumeTutorial: () => null,
    markStepCompleted: () => {},
    completeTutorial: () => {},
    createStepSnapshot: () => {},
    currentTutorial: null,
    currentStep: null,
    currentStepIndex: 0
};

window.ResetManager = window.ResetManager || {
    resetCurrentStep: () => ({ success: false, message: 'Reset manager not loaded' })
};

window.StepManager = window.StepManager || {
    provideHint: () => null,
    insertCompletedCode: () => null,
    formatLocationLabel: (file, location) => `${file} - ${location}`
};

window.AssetService = window.AssetService || {
    uploadAsset: () => Promise.resolve({ id: 'temp', name: 'temp.png', type: 'asset' }),
    isImage: () => false,
    getAssetUrl: () => '',
    formatFileSize: (size) => `${size} bytes`,
    generateImgTag: () => '<img src="" alt="">',
    generateCssBackground: () => 'background-image: url("");'
};

window.TemplateService = window.TemplateService || {
    listTemplates: () => [],
    applyTemplate: () => {}
};

window.SnippetService = window.SnippetService || {
    getSnippetsByLanguage: () => [],
    getSnippetById: () => null
};

window.AccessibilityService = window.AccessibilityService || {
    checkAccessibility: () => Promise.resolve({ violations: [] }),
    formatViolation: (v) => v
};

window.CollaborationService = window.CollaborationService || {
    initialize: () => false,
    isInSession: () => false,
    createSession: () => Promise.resolve('temp-session'),
    joinSession: () => Promise.resolve({}),
    leaveSession: () => Promise.resolve(),
    updateFile: () => {},
    getShareUrl: () => '',
    getUserName: () => '',
    setUserName: () => {},
    getUserId: () => 'temp-user',
    getSavedSession: () => null,
    clearSavedSession: () => {},
    rejoinSession: () => Promise.resolve(null),
    removeParticipant: () => Promise.resolve(),
    updateSavedSessionFile: () => {},
    collaborators: new Map(),
    currentSessionId: null,
    isHost: false,
    hostId: null
};

// Initialize Monaco Editor (only if require is available - i.e., on editor page)
if (typeof require !== 'undefined') {
    require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' } });

    require(['vs/editor/editor.main'], function () {
    // Store the Monaco initialization function for later use
    window.initializeMonacoEditor = function() {
    // Configure HTML language features
    monaco.languages.html.htmlDefaults.setOptions({
        suggest: {
            html5: true,
            angular1: false,
            ionic: false
        },
        format: {
            tabSize: 2,
            insertSpaces: true,
            wrapLineLength: 120,
            unformatted: 'wbr',
            contentUnformatted: 'pre,code,textarea',
            indentInnerHtml: false,
            preserveNewLines: true,
            maxPreserveNewLines: null,
            indentHandlebars: false,
            endWithNewline: false,
            extraLiners: 'head, body, /html',
            wrapAttributes: 'auto'
        }
    });

    // Configure CSS language features
    monaco.languages.css.cssDefaults.setOptions({
        validate: true,
        lint: {
            compatibleVendorPrefixes: 'warning',
            vendorPrefix: 'warning',
            duplicateProperties: 'warning',
            emptyRules: 'warning',
            importStatement: 'warning',
            boxModel: 'warning',
            universalSelector: 'warning',
            zeroUnits: 'warning',
            fontFaceProperties: 'warning',
            hexColorLength: 'warning',
            argumentsInColorFunction: 'warning',
            unknownProperties: 'warning',
            ieHack: 'warning',
            unknownVendorSpecificProperties: 'warning',
            propertyIgnoredDueToDisplay: 'warning',
            important: 'warning',
            float: 'warning',
            idSelector: 'warning'
        }
    });

    // Configure JavaScript/TypeScript language features
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: false,
        noSyntaxValidation: false
    });

    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ES2020,
        allowNonTsExtensions: true,
        allowJs: true,
        checkJs: false
    });

    // Create editor with enhanced options
    editor = monaco.editor.create(document.getElementById('editor'), {
        value: '',
        language: 'html',
        theme: 'vs-dark',
        automaticLayout: true,
        minimap: { enabled: false },
        fontSize: 14,
        lineHeight: 21,
        fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', 'Monaco', monospace",
        fontLigatures: true,
        wordWrap: 'on',
        wrappingIndent: 'indent',
        scrollBeyondLastLine: false,
        smoothScrolling: true,
        cursorBlinking: 'smooth',
        cursorSmoothCaretAnimation: true,
        renderWhitespace: 'selection',
        renderLineHighlight: 'all',
        bracketPairColorization: {
            enabled: true
        },
        guides: {
            bracketPairs: true,
            indentation: true
        },
        // Enhanced IntelliSense settings
        quickSuggestions: {
            other: 'on',
            comments: false,
            strings: true
        },
        quickSuggestionsDelay: 10,
        suggestOnTriggerCharacters: true,
        acceptSuggestionOnCommitCharacter: true,
        acceptSuggestionOnEnter: 'on',
        tabCompletion: 'on',
        wordBasedSuggestions: false,
        suggestSelection: 'first',
        snippetSuggestions: 'top',
        suggest: {
            showMethods: true,
            showFunctions: true,
            showConstructors: true,
            showFields: true,
            showVariables: true,
            showClasses: true,
            showStructs: true,
            showInterfaces: true,
            showModules: true,
            showProperties: true,
            showEvents: true,
            showOperators: true,
            showUnits: true,
            showValues: true,
            showConstants: true,
            showEnums: true,
            showEnumMembers: true,
            showKeywords: true,
            showWords: true,
            showColors: true,
            showFiles: true,
            showReferences: true,
            showFolders: true,
            showTypeParameters: true,
            showSnippets: true,
            showUsers: true,
            showIssues: true
        },
        // Auto-closing and formatting
        autoClosingBrackets: 'always',
        autoClosingQuotes: 'always',
        autoClosingOvertype: 'always',
        autoSurround: 'languageDefined',
        formatOnPaste: true,
        formatOnType: true,
        // Hover and parameter hints
        hover: {
            enabled: true,
            delay: 300,
            sticky: true
        },
        parameterHints: {
            enabled: true,
            cycle: true
        }
    });

    // Register HTML5 autocomplete
    registerHTML5Autocomplete(monaco);
    
    // Register custom HTML snippets
    monaco.languages.registerCompletionItemProvider('html', {
        provideCompletionItems: (model, position) => {
            const word = model.getWordUntilPosition(position);
            const range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn
            };
            
            const suggestions = [
                {
                    label: 'html5',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        '<!DOCTYPE html>',
                        '<html lang="en">',
                        '<head>',
                        '    <meta charset="UTF-8">',
                        '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
                        '    <title>${1:Document}</title>',
                        '</head>',
                        '<body>',
                        '    ${2}',
                        '</body>',
                        '</html>'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'HTML5 boilerplate',
                    range: range
                }
            ];
            return { suggestions };
        }
    });

    // Register custom CSS snippets
    monaco.languages.registerCompletionItemProvider('css', {
        provideCompletionItems: (model, position) => {
            const suggestions = [
                {
                    label: 'flexbox',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'display: flex;',
                        'justify-content: ${1:center};',
                        'align-items: ${2:center};'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Flexbox layout'
                },
                {
                    label: 'grid',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'display: grid;',
                        'grid-template-columns: ${1:repeat(3, 1fr)};',
                        'gap: ${2:1rem};'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Grid layout'
                },
                {
                    label: 'center',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'display: flex;',
                        'justify-content: center;',
                        'align-items: center;'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Center content with flexbox'
                }
            ];
            return { suggestions };
        }
    });

    // Register custom JavaScript snippets
    monaco.languages.registerCompletionItemProvider('javascript', {
        provideCompletionItems: (model, position) => {
            const suggestions = [
                {
                    label: 'log',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'console.log(${1:message});',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Console log'
                },
                {
                    label: 'func',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: [
                        'function ${1:functionName}(${2:params}) {',
                        '    ${3}',
                        '}'
                    ].join('\n'),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Function declaration'
                },
                {
                    label: 'arrow',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'const ${1:name} = (${2:params}) => {\n    ${3}\n};',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Arrow function'
                },
                {
                    label: 'foreach',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '${1:array}.forEach((${2:item}) => {\n    ${3}\n});',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'ForEach loop'
                },
                {
                    label: 'addEventListener',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '${1:element}.addEventListener(\'${2:click}\', (${3:e}) => {\n    ${4}\n});',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Add event listener'
                }
            ];
            return { suggestions };
        }
    });

    // Listen for content changes
    editor.onDidChangeModelContent(() => {
        if (currentFile && currentProject) {
            // Update file content
            FileService.updateFile(currentFile.id, editor.getValue(), currentProject);
            
            // Check for tutorial step completion
            if (TutorialEngine.currentTutorial && TutorialEngine.currentStep) {
                checkTutorialStepCompletion();
            }
            
            // Auto-save with debounce
            clearTimeout(autoSaveTimeout);
            autoSaveTimeout = setTimeout(() => {
                ProjectService.saveProject(currentProject);
                updatePreview();
                showSaveIndicator();
                
                // Update tutorial preview highlighting if in tutorial mode
                if (TutorialEngine.currentTutorial) {
                    highlightTutorialChanges();
                }
            }, 1000);
        }
    });

    // Add keyboard shortcut for formatting (Ctrl+Shift+F)
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyF, () => {
        document.getElementById('format-btn').click();
    });

    }; // End of initializeMonacoEditor function
    
    // Don't initialize editor immediately - wait for user to go to editor page
    });
}

// Page Management
let currentPage = window.location.pathname.includes('editor.html') ? 'editor' : 'landing';

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const page = document.getElementById(pageId + '-page');
    if (page) {
        page.classList.add('active');
        currentPage = pageId;
        
        // Update navigation
        updateNavigation(pageId);
        
        // Initialize page-specific functionality
        if (pageId === 'editor') {
            initializeEditor();
        } else if (pageId === 'tutorial-hub') {
            updateTutorialProgress();
        }
    }
}

function updateNavigation(activePageId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.getElementById('nav-' + activePageId);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function initializeEditor() {
    // On editor.html, editor-init.js handles Monaco initialization
    // We just need to ensure projects are loaded if editor already exists
    if (window.location.pathname.includes('editor.html')) {
        // editor-init.js will handle the full initialization
        return;
    }
    
    // Only initialize Monaco if we're on the editor page and it hasn't been initialized
    if (!editor && currentPage === 'editor' && window.initializeMonacoEditor) {
        // Initialize Monaco Editor
        window.initializeMonacoEditor();
        
        // Load projects after Monaco is initialized
        setTimeout(() => {
            const projects = ProjectService.listProjects();
            renderProjectsList(projects);

            if (projects.length > 0) {
                const lastProject = ProjectService.getCurrentProject() || projects[0];
                loadProject(lastProject.id);
            }
            
            // Try to restore tutorial state for returning users
            restoreTutorialState();
        }, 100);
    }
}

function updateTutorialProgress() {
    // Update progress indicators on tutorial hub
    const categories = ['html', 'css', 'javascript'];
    
    categories.forEach(category => {
        const tutorials = TutorialEngine.getAllTutorialDefinitions().filter(t => 
            t.category.includes(category) || 
            (category === 'html' && (t.category === 'layout' || t.category === 'forms')) ||
            (category === 'css' && (t.category === 'navigation' || t.category === 'ui-components')) ||
            (category === 'javascript' && t.category === 'javascript-features')
        );
        
        const completed = tutorials.filter(t => {
            const status = StorageService.getTutorialStatus('default-user', t.id);
            return status.completed;
        }).length;
        
        const progressText = document.querySelector(`[data-category="${category}"] .progress-text`);
        if (progressText) {
            progressText.textContent = `${completed}/${tutorials.length}`;
        }
        
        // Update progress circle
        const progressCircle = document.querySelector(`[data-category="${category}"] .progress-circle`);
        if (progressCircle && tutorials.length > 0) {
            const percentage = (completed / tutorials.length) * 100;
            if (percentage > 0) {
                progressCircle.style.background = `conic-gradient(var(--primary) ${percentage * 3.6}deg, var(--border-color) 0deg)`;
            }
        }
    });
}

function loadInitialState() {
    // Initialize Forge Master system
    initializeForgeMaster();
    
    // Only run page management if we're on the main index.html (not editor.html)
    if (!window.location.pathname.includes('editor.html')) {
        // Show landing page by default
        showPage('landing');
        
        // Check if user should be redirected to editor (for direct links or returning users)
        const urlParams = new URLSearchParams(window.location.search);
        const page = urlParams.get('page');
        
        if (page === 'editor') {
            showPage('editor');
        } else if (page === 'tutorials') {
            showPage('tutorial-hub');
        }
    }
    
    // Initialize icons after DOM is ready
    setTimeout(initIcons, 100);
}

function initializeForgeMaster() {
    if (typeof ForgeMaster !== 'undefined') {
        // Update daily streak
        ForgeMaster.updateStreak('default-user');
        
        // Update UI
        const profile = ForgeMaster.getProfile('default-user');
        ForgeMaster.updateForgeUI(profile);
        
        // Add click handler for forge status
        const forgeStatus = document.getElementById('forge-status');
        if (forgeStatus) {
            forgeStatus.onclick = () => showForgeProfile();
        }
    }
}

function showForgeProfile() {
    if (typeof ForgeMaster === 'undefined') return;
    
    const profile = ForgeMaster.getProfile('default-user');
    const achievements = ForgeMaster.getAchievementProgress('default-user');
    
    // Create and show forge profile modal
    showModal('forge-profile-modal');
    renderForgeProfile(profile, achievements);
}

// Welcome Screen
function showWelcomeScreen() {
    const welcomeScreen = document.getElementById('welcome-screen');
    if (welcomeScreen) {
        welcomeScreen.classList.remove('hidden');
        initIcons();
    } else {
        console.warn('Welcome screen element not found');
    }
}

function hideWelcomeScreen() {
    const welcomeScreen = document.getElementById('welcome-screen');
    if (welcomeScreen) {
        welcomeScreen.classList.add('hidden');
        localStorage.setItem('webforge-welcome-seen', 'true');
    }
}

// Welcome screen functionality (only if element exists)
const welcomeStartBtn = document.getElementById('welcome-start-btn');
if (welcomeStartBtn) {
    welcomeStartBtn.onclick = () => {
        hideWelcomeScreen();
        
        // If no projects, show new project modal
        const projects = ProjectService.listProjects();
        if (projects.length === 0) {
            setTimeout(() => showModal('new-project-modal'), 300);
        }
    };
}

function renderProjectsList(projects) {
    const container = document.getElementById('projects-list');
    container.innerHTML = '';

    if (projects.length === 0) {
        container.innerHTML = '<p style="color: #7f8c8d; font-size: 0.85rem;">No projects yet</p>';
        return;
    }

    projects.forEach(project => {
        const item = document.createElement('div');
        item.className = 'project-item';
        if (currentProject && currentProject.id === project.id) {
            item.classList.add('active');
        }
        
        const nameSpan = document.createElement('span');
        nameSpan.textContent = project.name;
        nameSpan.onclick = () => loadProject(project.id);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i data-lucide="trash-2" style="width: 12px; height: 12px;"></i>';
        deleteBtn.title = 'Delete project';
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            showConfirmModal(
                'Delete Project',
                `Are you sure you want to delete "${project.name}"? This cannot be undone.`,
                () => {
                    ProjectService.deleteProject(project.id);
                    if (currentProject && currentProject.id === project.id) {
                        currentProject = null;
                        currentFile = null;
                        editor.setValue('');
                        renderFileTree([]);
                    }
                    renderProjectsList(ProjectService.listProjects());
                    showToast('Project deleted successfully', 'success');
                }
            );
        };
        
        item.appendChild(nameSpan);
        item.appendChild(deleteBtn);
        container.appendChild(item);
    });
    lucide.createIcons();
}

function renderFileTree(files) {
    const container = document.getElementById('files-tree');
    container.innerHTML = '';

    if (files.length === 0) {
        container.innerHTML = '<p style="color: #7f8c8d; font-size: 0.85rem;">No files</p>';
        return;
    }

    files.forEach(file => {
        const item = document.createElement('div');
        item.className = 'file-item';
        if (currentFile && currentFile.id === file.id) {
            item.classList.add('active');
        }
        
        // Add icon based on file type
        let iconName = 'file';
        if (file.type === FileType.HTML) iconName = 'file-code';
        else if (file.type === FileType.CSS) iconName = 'palette';
        else if (file.type === FileType.JAVASCRIPT) iconName = 'code';
        else if (file.type === FileType.ASSET) {
            iconName = AssetService.isImage(file) ? 'image' : 'file-type';
        }
        
        const icon = document.createElement('i');
        icon.setAttribute('data-lucide', iconName);
        icon.style.cssText = 'width: 14px; height: 14px; margin-right: 6px;';
        
        const nameSpan = document.createElement('span');
        nameSpan.textContent = file.name;
        nameSpan.onclick = () => openFile(file.id);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>';
        deleteBtn.title = 'Delete file';
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            showConfirmModal(
                'Delete File',
                `Are you sure you want to delete "${file.name}"? This cannot be undone.`,
                () => {
                    FileService.deleteFile(file.id, currentProject);
                    if (currentFile && currentFile.id === file.id) {
                        currentFile = null;
                        editor.setValue('');
                    }
                    ProjectService.saveProject(currentProject);
                    renderFileTree(currentProject.files);
                    showToast('File deleted successfully', 'success');
                }
            );
        };
        
        item.appendChild(icon);
        item.appendChild(nameSpan);
        item.appendChild(deleteBtn);
        container.appendChild(item);
    });
    
    initIcons();
}

function loadProject(projectId) {
    currentProject = ProjectService.getProject(projectId);
    if (!currentProject) return;

    ProjectService.setCurrentProject(projectId);
    renderProjectsList(ProjectService.listProjects());
    renderFileTree(currentProject.files);

    // Open first HTML file by default
    const htmlFile = currentProject.files.find(f => f.type === FileType.HTML);
    if (htmlFile) {
        openFile(htmlFile.id);
    }
}

function openFile(fileId) {
    if (!currentProject) return;

    currentFile = FileService.readFile(fileId, currentProject);
    if (!currentFile) return;

    // Handle asset files differently
    if (currentFile.type === FileType.ASSET) {
        showAssetModal(currentFile);
        return;
    }

    // Update editor
    const language = currentFile.type === FileType.HTML ? 'html' :
                     currentFile.type === FileType.CSS ? 'css' : 'javascript';
    
    monaco.editor.setModelLanguage(editor.getModel(), language);
    editor.setValue(currentFile.content);

    // Update UI
    document.getElementById('current-file-name').textContent = currentFile.name;
    renderFileTree(currentProject.files);
    updatePreview();
    
    // Update saved session with current file
    if (CollaborationService.isInSession()) {
        CollaborationService.updateSavedSessionFile(fileId);
    }
}

function updatePreview() {
    if (!currentProject) return;

    const htmlFile = currentProject.files.find(f => f.type === FileType.HTML);
    const cssFile = currentProject.files.find(f => f.type === FileType.CSS);
    const jsFile = currentProject.files.find(f => f.type === FileType.JAVASCRIPT);
    const assetFiles = currentProject.files.filter(f => f.type === FileType.ASSET);

    let html = htmlFile ? htmlFile.content : '';
    
    // Replace asset filenames with base64 data URLs
    assetFiles.forEach(asset => {
        // Replace in src attributes: src="filename.png" -> src="data:image/png;base64,..."
        const srcRegex = new RegExp(`src=["']${escapeRegExp(asset.name)}["']`, 'gi');
        html = html.replace(srcRegex, `src="${asset.content}"`);
        
        // Replace in CSS url(): url('filename.png') -> url('data:...')
        const urlRegex = new RegExp(`url\\(['"]?${escapeRegExp(asset.name)}['"]?\\)`, 'gi');
        html = html.replace(urlRegex, `url('${asset.content}')`);
    });
    
    // Inject console capture script before any other scripts
    const consoleCapture = `
    <script>
        (function() {
            const originalConsole = {
                log: console.log,
                error: console.error,
                warn: console.warn,
                info: console.info
            };
            
            function sendToParent(type, args) {
                try {
                    const message = Array.from(args).map(arg => {
                        if (typeof arg === 'object') {
                            try {
                                return JSON.stringify(arg, null, 2);
                            } catch (e) {
                                return String(arg);
                            }
                        }
                        return String(arg);
                    }).join(' ');
                    
                    window.parent.postMessage({
                        type: 'console',
                        level: type,
                        message: message,
                        timestamp: new Date().toISOString()
                    }, '*');
                } catch (e) {
                    originalConsole.error('Console capture error:', e);
                }
            }
            
            console.log = function() {
                originalConsole.log.apply(console, arguments);
                sendToParent('log', arguments);
            };
            
            console.error = function() {
                originalConsole.error.apply(console, arguments);
                sendToParent('error', arguments);
            };
            
            console.warn = function() {
                originalConsole.warn.apply(console, arguments);
                sendToParent('warn', arguments);
            };
            
            console.info = function() {
                originalConsole.info.apply(console, arguments);
                sendToParent('info', arguments);
            };
            
            window.addEventListener('error', function(e) {
                sendToParent('error', [e.message + ' at ' + e.filename + ':' + e.lineno + ':' + e.colno]);
            });
            
            window.addEventListener('unhandledrejection', function(e) {
                sendToParent('error', ['Unhandled Promise Rejection: ' + e.reason]);
            });
        })();
    </script>
    `;
    
    // Inject console capture at the beginning of head or body
    if (html.includes('<head>')) {
        html = html.replace('<head>', '<head>' + consoleCapture);
    } else if (html.includes('<body>')) {
        html = html.replace('<body>', '<body>' + consoleCapture);
    } else {
        html = consoleCapture + html;
    }
    
    // Inject CSS
    if (cssFile && cssFile.content) {
        html = html.replace('</head>', `<style>${cssFile.content}</style></head>`);
    }
    
    // Inject JS
    if (jsFile && jsFile.content) {
        html = html.replace('</body>', `<script>${jsFile.content}</script></body>`);
    }

    const iframe = document.getElementById('preview');
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(html);
    iframeDoc.close();

    // Run accessibility check if panel is visible
    const a11yPanel = document.getElementById('a11y-panel');
    if (a11yPanel && !a11yPanel.classList.contains('hidden')) {
        // Wait for iframe to load before checking
        setTimeout(() => runAccessibilityCheck(), 500);
    }
}

function showSaveIndicator() {
    const saveBtn = document.getElementById('save-btn');
    const originalHTML = saveBtn.innerHTML;
    saveBtn.innerHTML = '<i data-lucide="check"></i><span>Saved</span>';
    lucide.createIcons();
    setTimeout(() => {
        saveBtn.innerHTML = originalHTML;
        lucide.createIcons();
    }, 2000);
}



// Initialize Lucide icons
function initIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Tutorial Mode Management
function enterTutorialMode() {
    document.body.classList.add('tutorial-mode');
    
    // Add tutorial mode indicator
    if (!document.querySelector('.tutorial-mode-indicator')) {
        const indicator = document.createElement('div');
        indicator.className = 'tutorial-mode-indicator';
        indicator.innerHTML = '<i data-lucide="graduation-cap"></i><span>Tutorial Mode</span>';
        document.querySelector('.header-brand').appendChild(indicator);
        initIcons();
    }
}

function exitTutorialMode() {
    document.body.classList.remove('tutorial-mode');
    
    // Remove tutorial mode indicator
    const indicator = document.querySelector('.tutorial-mode-indicator');
    if (indicator) {
        indicator.remove();
    }
    
    // Clear tutorial decorations
    clearTutorialDecorations();
    clearTutorialCompletionProvider();
}

// Enhanced tutorial integration
function startTutorial() {
    if (!selectedTutorial) return;
    
    try {
        // Enter tutorial mode
        enterTutorialMode();
        
        // Create or switch to tutorial project if in tutorial mode
        if (selectedTutorialMode === 'tutorial') {
            createTutorialProject(selectedTutorial);
        }
        
        const result = TutorialEngine.startTutorial(selectedTutorial.id, selectedTutorialMode);
        
        hideModal('tutorial-preview-modal');
        showTutorialActiveModal(result);
        
        // Setup editor for first step
        setupStepEditor(result.step);
        
        showToast(`Started tutorial: ${selectedTutorial.title}`, 'success');
    } catch (error) {
        console.error('Error starting tutorial:', error);
        showToast('Failed to start tutorial', 'error');
        exitTutorialMode();
    }
}

function createTutorialProject(tutorial) {
    // Create a dedicated project for the tutorial
    const tutorialProject = ProjectService.createProject(`Tutorial: ${tutorial.title}`);
    
    // Add tutorial-specific files if needed
    if (tutorial.category === TutorialCategory.JAVASCRIPT_FEATURES) {
        // Ensure we have a script.js file
        const jsFile = tutorialProject.files.find(f => f.name === 'script.js');
        if (!jsFile) {
            const newJsFile = FileService.createFile(tutorialProject.id, 'script.js', FileType.JAVASCRIPT);
            tutorialProject.files.push(newJsFile);
        }
    }
    
    ProjectService.saveProject(tutorialProject);
    loadProject(tutorialProject.id);
}

// Enhanced tutorial completion
function showTutorialCompletionModal(tutorial) {
    exitTutorialMode();
    
    showToast(`🎉 Tutorial "${tutorial.title}" completed!`, 'success', 'Congratulations!', 6000);
    
    // Suggest next tutorial
    const allTutorials = TutorialEngine.getAllTutorialDefinitions();
    const nextTutorials = allTutorials.filter(t => 
        t.prerequisites && t.prerequisites.includes(tutorial.id)
    );
    
    if (nextTutorials.length > 0) {
        setTimeout(() => {
            if (confirm(`Great job! Would you like to try "${nextTutorials[0].title}" next?`)) {
                selectedTutorial = nextTutorials[0];
                showTutorialPreview(nextTutorials[0]);
            }
        }, 2000);
    } else {
        setTimeout(() => {
            if (confirm('Excellent work! Would you like to browse more tutorials?')) {
                showTutorialModal();
            }
        }, 2000);
    }
}

// Tutorial state persistence across sessions
function saveTutorialState() {
    if (TutorialEngine.currentTutorial && TutorialEngine.currentStep) {
        localStorage.setItem('webforge_tutorial_state', JSON.stringify({
            tutorialId: TutorialEngine.currentTutorial.id,
            stepId: TutorialEngine.currentStep.id,
            mode: TutorialEngine.tutorialMode,
            timestamp: new Date().toISOString()
        }));
    }
}

function restoreTutorialState() {
    // Check for tutorial start request first
    const startTutorialData = localStorage.getItem('webforge_start_tutorial');
    if (startTutorialData) {
        try {
            const data = JSON.parse(startTutorialData);
            localStorage.removeItem('webforge_start_tutorial');
            
            const tutorial = TutorialEngine.getTutorialDefinition(data.tutorialId);
            if (tutorial) {
                selectedTutorial = tutorial;
                selectedTutorialMode = data.mode;
                
                setTimeout(() => {
                    startTutorial();
                }, 1000);
                return;
            }
        } catch (error) {
            console.error('Error starting tutorial from hub:', error);
            localStorage.removeItem('webforge_start_tutorial');
        }
    }
    
    // Check for existing tutorial state
    const savedState = localStorage.getItem('webforge_tutorial_state');
    if (savedState) {
        try {
            const state = JSON.parse(savedState);
            
            // Check if state is recent (within 24 hours)
            const stateAge = Date.now() - new Date(state.timestamp).getTime();
            if (stateAge < 24 * 60 * 60 * 1000) {
                setTimeout(() => {
                    if (confirm('You have an unfinished tutorial. Would you like to continue where you left off?')) {
                        const tutorial = TutorialEngine.getTutorialDefinition(state.tutorialId);
                        if (tutorial) {
                            selectedTutorial = tutorial;
                            selectedTutorialMode = state.mode;
                            
                            const result = TutorialEngine.resumeTutorial(state.tutorialId);
                            if (result) {
                                enterTutorialMode();
                                showTutorialActiveModal(result);
                                setupStepEditor(result.step);
                            }
                        }
                    } else {
                        localStorage.removeItem('webforge_tutorial_state');
                    }
                }, 1000);
            }
        } catch (error) {
            console.error('Error restoring tutorial state:', error);
            localStorage.removeItem('webforge_tutorial_state');
        }
    }
}

// Save tutorial state when leaving
window.addEventListener('beforeunload', saveTutorialState);

// Enhanced tutorial exit (safe element check)
const tutorialExitBtn = document.getElementById('tutorial-exit-btn');
if (tutorialExitBtn) {
    tutorialExitBtn.onclick = () => {
        if (confirm('Are you sure you want to exit this tutorial? Your progress will be saved.')) {
            TutorialEngine.pauseTutorial();
            saveTutorialState();
            hideModal('tutorial-active-modal');
            exitTutorialMode();
            showToast('Tutorial paused. You can resume anytime from the Tutorials menu.', 'info');
        }
    };
}

// Mobile Navigation
function toggleMobileNav() {
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav) {
        mobileNav.classList.toggle('hidden');
        mobileNav.classList.toggle('active');
    }
}

// Mobile navigation event listeners
document.getElementById('mobile-menu-btn')?.addEventListener('click', toggleMobileNav);

document.getElementById('mobile-nav')?.addEventListener('click', (e) => {
    if (e.target.id === 'mobile-nav') {
        toggleMobileNav();
    }
});

document.getElementById('mobile-nav-home')?.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('landing');
    toggleMobileNav();
});

document.getElementById('mobile-nav-tutorials')?.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('tutorial-hub');
    toggleMobileNav();
});

document.getElementById('mobile-nav-editor')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'editor.html';
});

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Wait for all services to be loaded
    const initializeApp = () => {
        // Check if required services are available
        const requiredServices = ['StorageService', 'TutorialEngine'];
        const missingServices = requiredServices.filter(service => typeof window[service] === 'undefined');
        
        if (missingServices.length > 0) {
            console.log('Waiting for services to load:', missingServices);
            setTimeout(initializeApp, 100);
            return;
        }
        
        loadInitialState();
        
        // Initialize event listeners based on current page
        initializeUniversalEventListeners();
        initializeNavigationEventListeners();
        initializeSnippetsEventListeners();
        
        // Initialize editor-specific listeners if on editor page
        if (currentPage === 'editor' || window.location.pathname.includes('editor.html')) {
            initializeEditorEventListeners();
            initializeTutorialEventListeners();
            initializeCollaborationEventListeners();
            initializeTutorialBrowserEventListeners();
            
            // Initialize editor and load projects
            initializeEditor();
        }
        
        // Initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    };
    
    initializeApp();
});

// Console Panel Management
let consoleVisible = false;

function toggleConsole() {
    consoleVisible = !consoleVisible;
    const panel = document.getElementById('console-panel');
    const toggleBtn = document.getElementById('console-toggle-btn');
    
    if (consoleVisible) {
        panel.classList.remove('hidden');
        toggleBtn.innerHTML = '<i data-lucide="terminal"></i><span>Hide Console</span>';
    } else {
        panel.classList.add('hidden');
        toggleBtn.innerHTML = '<i data-lucide="terminal"></i><span>Show Console</span>';
    }
    
    initIcons();
}

function clearConsole() {
    document.getElementById('console-output').innerHTML = '';
}

function addConsoleMessage(level, message, timestamp) {
    const output = document.getElementById('console-output');
    const entry = document.createElement('div');
    entry.className = 'console-entry console-' + level;
    
    const time = new Date(timestamp).toLocaleTimeString();
    
    // Use Lucide icons instead of emojis
    let iconName = 'chevron-right';
    if (level === 'error') iconName = 'x-circle';
    else if (level === 'warn') iconName = 'alert-triangle';
    else if (level === 'info') iconName = 'info';
    
    entry.innerHTML = `
        <span class="console-time">[${time}]</span> 
        <span class="console-icon"><i data-lucide="${iconName}" style="width: 14px; height: 14px;"></i></span> 
        <span class="console-message">${escapeHtml(message)}</span>
    `;
    
    output.appendChild(entry);
    output.scrollTop = output.scrollHeight;
    
    // Initialize icons for the new entry
    initIcons();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Listen for console messages from iframe
window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'console') {
        addConsoleMessage(event.data.level, event.data.message, event.data.timestamp);
        
        // Auto-show console on errors
        if (event.data.level === 'error' && !consoleVisible) {
            toggleConsole();
        }
    }
});

// Theme Management
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update button icon
    const btn = document.getElementById('theme-toggle-btn');
    const icon = newTheme === 'dark' ? 'sun' : 'moon';
    btn.innerHTML = `<i data-lucide="${icon}"></i>`;
    
    // Update Monaco theme
    if (editor) {
        monaco.editor.setTheme(newTheme === 'dark' ? 'vs-dark' : 'vs');
    }
    
    initIcons();
}

// Load saved theme on startup
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Update button icon
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
        const icon = savedTheme === 'dark' ? 'sun' : 'moon';
        btn.innerHTML = `<i data-lucide="${icon}"></i>`;
    }
}

// Helper function to escape special regex characters
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Load theme before anything else
loadTheme();

// Toast Notification System
function showToast(message, type = 'info', title = null, duration = 4000) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Icon based on type
    let iconName = 'info';
    if (type === 'success') iconName = 'check-circle';
    else if (type === 'error') iconName = 'x-circle';
    else if (type === 'warning') iconName = 'alert-triangle';
    
    // Default titles
    if (!title) {
        if (type === 'success') title = 'Success';
        else if (type === 'error') title = 'Error';
        else if (type === 'warning') title = 'Warning';
        else title = 'Info';
    }
    
    toast.innerHTML = `
        <div class="toast-icon ${type}">
            <i data-lucide="${iconName}"></i>
        </div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">
            <i data-lucide="x"></i>
        </button>
    `;
    
    container.appendChild(toast);
    initIcons();
    
    // Auto remove after duration
    if (duration > 0) {
        setTimeout(() => {
            toast.classList.add('toast-exit');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }
    
    return toast;
}

// Responsive Preview Management
function setPreviewWidth(width) {
    const iframe = document.getElementById('preview');
    
    if (width === '100%') {
        iframe.style.width = '100%';
        iframe.style.maxWidth = 'none';
    } else {
        iframe.style.width = width + 'px';
        iframe.style.maxWidth = width + 'px';
    }
}

// Fullscreen Preview Management
let isPreviewFullscreen = false;

function togglePreviewFullscreen() {
    const previewContainer = document.querySelector('.preview-container');
    const editorContainer = document.querySelector('.editor-container');
    const sidebar = document.querySelector('.sidebar');
    const btn = document.getElementById('preview-fullscreen-btn');
    
    isPreviewFullscreen = !isPreviewFullscreen;
    
    if (isPreviewFullscreen) {
        // Enter fullscreen mode
        previewContainer.classList.add('fullscreen');
        editorContainer.classList.add('hidden-for-preview');
        sidebar.classList.add('hidden-for-preview');
        btn.innerHTML = '<i data-lucide="minimize-2"></i>';
        btn.title = 'Exit Fullscreen (Esc)';
    } else {
        // Exit fullscreen mode
        previewContainer.classList.remove('fullscreen');
        editorContainer.classList.remove('hidden-for-preview');
        sidebar.classList.remove('hidden-for-preview');
        btn.innerHTML = '<i data-lucide="maximize-2"></i>';
        btn.title = 'Fullscreen Preview (F11)';
    }
    
    initIcons();
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Escape to exit fullscreen
    if (e.key === 'Escape' && isPreviewFullscreen) {
        togglePreviewFullscreen();
    }
    
    // Ctrl/Cmd + S to save (prevent browser save dialog)
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        if (currentProject) {
            ProjectService.saveProject(currentProject);
            showToast('Project saved', 'success');
        }
    }
});

// Event Listeners - Editor-specific elements (safe checks)
function initializeEditorEventListeners() {
    const newProjectBtn = document.getElementById('new-project-btn');
    if (newProjectBtn) {
        newProjectBtn.onclick = () => {
            showModal('new-project-modal');
        };
    }

    const createBlankBtn = document.getElementById('create-blank-btn');
    if (createBlankBtn) {
        createBlankBtn.onclick = () => {
            const name = document.getElementById('project-name-input').value.trim();
            if (!name) {
                showToast('Please enter a project name', 'warning');
                return;
            }

            try {
                const project = ProjectService.createProject(name);
                loadProject(project.id);
                hideModal('new-project-modal');
                document.getElementById('project-name-input').value = '';
                showToast(`Project "${name}" created successfully`, 'success');
            } catch (e) {
                showToast(e.message, 'error');
            }
        };
    }

    const chooseTemplateBtn = document.getElementById('choose-template-btn');
    if (chooseTemplateBtn) {
        chooseTemplateBtn.onclick = () => {
            hideModal('new-project-modal');
            showTemplateModal();
        };
    }

    const saveBtn = document.getElementById('save-btn');
    if (saveBtn) {
        saveBtn.onclick = () => {
            if (currentProject) {
                ProjectService.saveProject(currentProject);
                showSaveIndicator();
            }
        };
    }

    const exportBtn = document.getElementById('export-btn');
    if (exportBtn) {
        exportBtn.onclick = async () => {
            if (currentProject) {
                try {
                    await ProjectService.exportProject(currentProject.id);
                    showToast('Project exported successfully!', 'success', 'Export Complete');
                } catch (e) {
                    showToast(e.message, 'error', 'Export Failed');
                }
            }
        };
    }

    const importBtn = document.getElementById('import-btn');
    if (importBtn) {
        importBtn.onclick = () => {
            document.getElementById('import-file-input').click();
        };
    }

    const importFileInput = document.getElementById('import-file-input');
    if (importFileInput) {
        importFileInput.onchange = async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            if (!file.name.endsWith('.zip')) {
                showToast('Please select a ZIP file', 'error');
                return;
            }

            try {
                const zip = new JSZip();
                const contents = await zip.loadAsync(file);
                
                // Extract project name from ZIP filename
                const projectName = file.name.replace('.zip', '');
                
                // Create new project
                const project = ProjectService.createProject(projectName);
                
                // Clear default files
                project.files = [];
                
                // Import files from ZIP
                for (const [filename, zipEntry] of Object.entries(contents.files)) {
                    if (!zipEntry.dir) {
                        const content = await zipEntry.async('text');
                        const type = filename.endsWith('.html') ? FileType.HTML :
                                   filename.endsWith('.css') ? FileType.CSS :
                                   filename.endsWith('.js') ? FileType.JAVASCRIPT : FileType.ASSET;
                        
                        const newFile = FileService.createFile(project.id, filename, type, content);
                        project.files.push(newFile);
                    }
                }
                
                ProjectService.saveProject(project);
                loadProject(project.id);
                showToast(`Project "${projectName}" imported successfully!`, 'success', 'Import Complete');
                
                // Reset file input
                e.target.value = '';
            } catch (error) {
                console.error('Import error:', error);
                showToast('Failed to import project. Make sure it\'s a valid WebForge ZIP file.', 'error', 'Import Failed');
                e.target.value = '';
            }
        };
    }

    const helpBtn = document.getElementById('help-btn');
    if (helpBtn) {
        helpBtn.onclick = () => {
            showModal('shortcuts-modal');
        };
    }

    const tutorialsBtn = document.getElementById('tutorials-btn');
    if (tutorialsBtn) {
        tutorialsBtn.onclick = () => {
            showTutorialModal();
        };
    }

    const collaborateBtn = document.getElementById('collaborate-btn');
    if (collaborateBtn) {
        collaborateBtn.onclick = () => {
            showCollaborationModal();
        };
    }

    const consoleToggleBtn = document.getElementById('console-toggle-btn');
    if (consoleToggleBtn) {
        consoleToggleBtn.onclick = () => {
            toggleConsole();
        };
    }

    const consoleClearBtn = document.getElementById('console-clear-btn');
    if (consoleClearBtn) {
        consoleClearBtn.onclick = () => {
            clearConsole();
        };
    }

    const consoleCloseBtn = document.getElementById('console-close-btn');
    if (consoleCloseBtn) {
        consoleCloseBtn.onclick = () => {
            toggleConsole();
        };
    }
    
    // Welcome screen buttons
    const welcomeNewProjectBtn = document.getElementById('welcome-new-project');
    if (welcomeNewProjectBtn) {
        welcomeNewProjectBtn.onclick = () => {
            hideWelcomeScreen();
            setTimeout(() => showModal('new-project-modal'), 300);
        };
    }
    
    const welcomeCloseBtn = document.getElementById('welcome-close');
    if (welcomeCloseBtn) {
        welcomeCloseBtn.onclick = () => {
            hideWelcomeScreen();
        };
    }
    
    const welcomeCloseXBtn = document.getElementById('welcome-close-x');
    if (welcomeCloseXBtn) {
        welcomeCloseXBtn.onclick = () => {
            hideWelcomeScreen();
        };
    }
}

// Universal event listeners (work on both index and editor pages)
function initializeUniversalEventListeners() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
        themeToggleBtn.onclick = () => {
            toggleTheme();
        };
    }
    
    // Category card clicks on landing page
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            showPage('tutorial-hub');
            // Scroll to the relevant category
            setTimeout(() => {
                const categoryElement = document.querySelector(`[data-category="${category}"]`);
                if (categoryElement) {
                    categoryElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.main-nav');
    if (navbar) {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            lastScrollY = currentScrollY;
        });
    }
}

// Mobile Navigation
function toggleMobileNav() {
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav) {
        mobileNav.classList.toggle('hidden');
        mobileNav.classList.toggle('active');
    }
}

    // Fullscreen preview button
    const previewFullscreenBtn = document.getElementById('preview-fullscreen-btn');
    if (previewFullscreenBtn) {
        previewFullscreenBtn.onclick = () => {
            togglePreviewFullscreen();
        };
    }

    const snippetsBtn = document.getElementById('snippets-btn');
    if (snippetsBtn) {
        snippetsBtn.onclick = () => {
            showSnippetsModal();
        };
    }

    const newFileBtn = document.getElementById('new-file-btn');
    if (newFileBtn) {
        newFileBtn.onclick = () => {
            if (!currentProject) {
                showToast('Please create or select a project first', 'warning');
                return;
            }

            // Clear previous input and show modal
            document.getElementById('file-name-input').value = '';
            showModal('new-file-modal');
            
            // Focus on input
            setTimeout(() => {
                document.getElementById('file-name-input').focus();
            }, 100);
        };
    }

    const createFileBtn = document.getElementById('create-file-btn');
    if (createFileBtn) {
        createFileBtn.onclick = () => {
            const name = document.getElementById('file-name-input').value.trim();
            if (!name) {
                showToast('Please enter a file name', 'warning');
                return;
            }

            try {
                const type = name.endsWith('.html') ? FileType.HTML :
                             name.endsWith('.css') ? FileType.CSS :
                             name.endsWith('.js') ? FileType.JAVASCRIPT : FileType.ASSET;

                const file = FileService.createFile(currentProject.id, name, type);
                currentProject.files.push(file);
                ProjectService.saveProject(currentProject);
                renderFileTree(currentProject.files);
                openFile(file.id);
                hideModal('new-file-modal');
                showToast(`File "${name}" created successfully`, 'success');
            } catch (e) {
                showToast(e.message, 'error');
            }
        };
    }

    // Allow Enter key to create file
    const fileNameInput = document.getElementById('file-name-input');
    if (fileNameInput) {
        fileNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                document.getElementById('create-file-btn').click();
            }
        });
    }

    const uploadAssetBtn = document.getElementById('upload-asset-btn');
    if (uploadAssetBtn) {
        uploadAssetBtn.onclick = () => {
            if (!currentProject) {
                showToast('Please create or select a project first', 'warning');
                return;
            }
            document.getElementById('asset-file-input').click();
        };
    }

    const assetFileInput = document.getElementById('asset-file-input');
    if (assetFileInput) {
        assetFileInput.onchange = async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            try {
                const assetFile = await AssetService.uploadAsset(file, currentProject.id);
                currentProject.files.push(assetFile);
                ProjectService.saveProject(currentProject);
                renderFileTree(currentProject.files);
                
                // Show success message with file info
                showToast(
                    `${assetFile.name} (${AssetService.formatFileSize(assetFile.size)}) uploaded. Click to view or copy code.`,
                    'success',
                    'Asset Uploaded'
                );
                
                // Clear input
                e.target.value = '';
            } catch (error) {
                showToast(error.message, 'error', 'Upload Failed');
            }
        };
    }

// Modal functions
function showModal(modalId) {
    document.getElementById('modal-overlay').classList.remove('hidden');
    document.getElementById(modalId).classList.remove('hidden');
}

function hideModal(modalId) {
    document.getElementById('modal-overlay').classList.add('hidden');
    document.getElementById(modalId).classList.add('hidden');
}

function showTemplateModal() {
    const templates = TemplateService.listTemplates();
    const grid = document.getElementById('templates-grid');
    grid.innerHTML = '';

    templates.forEach(template => {
        const card = document.createElement('div');
        card.className = 'template-card';
        card.innerHTML = `<h3>${template.name}</h3><p>${template.description}</p>`;
        card.onclick = () => {
            const name = document.getElementById('project-name-input').value.trim() || template.name;
            const project = ProjectService.createProject(name);
            TemplateService.applyTemplate(project, template.id);
            ProjectService.saveProject(project);
            loadProject(project.id);
            hideModal('template-modal');
            document.getElementById('project-name-input').value = '';
        };
        grid.appendChild(card);
    });

    showModal('template-modal');
}

// Tutorial Browser Functions
let selectedTutorial = null;
let selectedTutorialMode = 'tutorial';

function showTutorialModal() {
    // If we're not on the editor page, go to tutorial hub instead
    if (currentPage !== 'editor') {
        showPage('tutorial-hub');
        return;
    }
    
    renderTutorialBrowser();
    showModal('tutorial-browser-modal');
    initIcons();
}

function renderTutorialBrowser(category = 'all', searchQuery = '') {
    const tutorials = TutorialEngine.getAllTutorialDefinitions();
    const grid = document.getElementById('tutorial-grid');
    grid.innerHTML = '';

    // Filter tutorials
    let filteredTutorials = tutorials;
    
    if (category !== 'all') {
        filteredTutorials = tutorials.filter(t => t.category === category);
    }
    
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredTutorials = filteredTutorials.filter(t => 
            t.title.toLowerCase().includes(query) ||
            t.description.toLowerCase().includes(query)
        );
    }

    if (filteredTutorials.length === 0) {
        grid.innerHTML = '<div class="tutorial-grid-empty">No tutorials found</div>';
        return;
    }

    filteredTutorials.forEach(tutorial => {
        const card = document.createElement('div');
        card.className = 'tutorial-card';
        
        // Check completion status
        const status = StorageService.getTutorialStatus('default-user', tutorial.id);
        const completionIcon = status.completed ? 
            '<div class="tutorial-card-completion"><i data-lucide="check"></i></div>' : '';
        
        card.innerHTML = `
            ${completionIcon}
            <div class="tutorial-card-header">
                <div>
                    <div class="tutorial-card-title">${tutorial.title}</div>
                    <div class="tutorial-card-meta">
                        <span class="tutorial-difficulty-badge ${tutorial.difficulty}">${tutorial.difficulty}</span>
                        <span class="tutorial-time-badge">${tutorial.estimatedTime}</span>
                        <span class="tutorial-category-badge">${tutorial.category.replace('-', ' ')}</span>
                    </div>
                </div>
            </div>
            <div class="tutorial-card-description">${tutorial.description}</div>
        `;
        
        card.onclick = () => showTutorialPreview(tutorial);
        grid.appendChild(card);
    });
    
    initIcons();
}

function showTutorialPreview(tutorial) {
    selectedTutorial = tutorial;
    
    // Populate preview modal
    document.getElementById('tutorial-preview-title').textContent = tutorial.title;
    document.getElementById('tutorial-preview-difficulty').textContent = tutorial.difficulty;
    document.getElementById('tutorial-preview-difficulty').className = `tutorial-difficulty-badge ${tutorial.difficulty}`;
    document.getElementById('tutorial-preview-time').textContent = tutorial.estimatedTime;
    document.getElementById('tutorial-preview-category').textContent = tutorial.category.replace('-', ' ');
    document.getElementById('tutorial-preview-description').textContent = tutorial.description;
    
    // Set preview image (placeholder for now)
    const previewImg = document.getElementById('tutorial-preview-img');
    previewImg.src = tutorial.finalPreview || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iNzUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByZXZpZXc8L3RleHQ+Cjwvc3ZnPg==';
    previewImg.alt = `${tutorial.title} preview`;
    
    // Render steps list
    const stepsList = document.getElementById('tutorial-preview-steps-list');
    stepsList.innerHTML = '';
    
    tutorial.steps.forEach((step, index) => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'tutorial-step-preview';
        stepDiv.innerHTML = `
            <div class="tutorial-step-preview-title">Step ${index + 1}: ${step.title}</div>
            <div class="tutorial-step-preview-goal">${step.goal}</div>
        `;
        stepsList.appendChild(stepDiv);
    });
    
    hideModal('tutorial-browser-modal');
    showModal('tutorial-preview-modal');
    initIcons();
}

function startTutorial() {
    if (!selectedTutorial) return;
    
    try {
        const result = TutorialEngine.startTutorial(selectedTutorial.id, selectedTutorialMode);
        
        hideModal('tutorial-preview-modal');
        showTutorialActiveModal(result);
        
        // Setup editor for first step
        setupStepEditor(result.step);
        
        showToast(`Started tutorial: ${selectedTutorial.title}`, 'success');
    } catch (error) {
        console.error('Error starting tutorial:', error);
        showToast('Failed to start tutorial', 'error');
    }
}

function showTutorialActiveModal(tutorialData) {
    const { tutorial, step, stepIndex } = tutorialData;
    
    // Update header
    document.getElementById('tutorial-active-title').textContent = tutorial.title;
    updateTutorialProgress(stepIndex + 1, tutorial.steps.length);
    
    // Update step content
    updateTutorialStepContent(step);
    
    showModal('tutorial-active-modal');
    initIcons();
}

function updateTutorialProgress(current, total) {
    const progressFill = document.getElementById('tutorial-progress-fill');
    const progressText = document.getElementById('tutorial-progress-text');
    
    const percentage = (current / total) * 100;
    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `Step ${current} of ${total}`;
}

function updateTutorialStepContent(step) {
    document.getElementById('tutorial-step-goal').textContent = step.goal;
    
    // Update instructions
    const instructions = document.getElementById('tutorial-step-instructions');
    instructions.textContent = step.explanation || 'Follow the code snippet below to complete this step.';
    
    // Update code snippet
    const codeSnippet = document.getElementById('tutorial-code-snippet');
    const codeLocation = document.getElementById('tutorial-code-location');
    const codeContent = document.getElementById('tutorial-code-content');
    
    if (step.codeSnippet) {
        codeSnippet.classList.remove('hidden');
        codeLocation.textContent = StepManager.formatLocationLabel(step.targetFile, step.targetLocation);
        codeContent.textContent = step.codeSnippet;
    } else {
        codeSnippet.classList.add('hidden');
    }
}

// Tutorial Browser Event Listeners (safe initialization)
function initializeTutorialBrowserEventListeners() {
    const tutorialSearchInput = document.getElementById('tutorial-search-input');
    if (tutorialSearchInput) {
        tutorialSearchInput.addEventListener('input', (e) => {
            const searchQuery = e.target.value;
            const activeCategory = document.querySelector('.tutorial-category-btn.active');
            const category = activeCategory ? activeCategory.dataset.category : 'all';
            renderTutorialBrowser(category, searchQuery);
        });
    }

    document.querySelectorAll('.tutorial-category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active state
            document.querySelectorAll('.tutorial-category-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        
        // Render tutorials for selected category
        const category = e.target.dataset.category;
        const searchQuery = document.getElementById('tutorial-search-input')?.value || '';
        renderTutorialBrowser(category, searchQuery);
    });
});
}

// Tutorial event listeners initialization
function initializeTutorialEventListeners() {
    document.querySelectorAll('.tutorial-mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tutorial-mode-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            selectedTutorialMode = e.currentTarget.id === 'tutorial-mode-project' ? 'project' : 'tutorial';
        });
    });

    const tutorialStartBtn = document.getElementById('tutorial-start-btn');
    if (tutorialStartBtn) {
        tutorialStartBtn.onclick = startTutorial;
    }

    // Tutorial Active Modal Event Listeners
    const tutorialNextStepBtn = document.getElementById('tutorial-next-step-btn');
    if (tutorialNextStepBtn) {
        tutorialNextStepBtn.onclick = () => {
            try {
                const result = TutorialEngine.nextStep();
                
                if (result.completed) {
                    hideModal('tutorial-active-modal');
                    showTutorialCompletionModal(result.tutorial);
                } else {
                    updateTutorialProgress(result.stepIndex + 1, TutorialEngine.currentTutorial.steps.length);
                    updateTutorialStepContent(result.step);
                    setupStepEditor(result.step);
                }
            } catch (error) {
                console.error('Error advancing step:', error);
                showToast('Error advancing to next step', 'error');
            }
        };
    }

    const tutorialPrevStepBtn = document.getElementById('tutorial-prev-step-btn');
    if (tutorialPrevStepBtn) {
        tutorialPrevStepBtn.onclick = () => {
            const result = TutorialEngine.previousStep();
            if (result) {
                updateTutorialProgress(result.stepIndex + 1, TutorialEngine.currentTutorial.steps.length);
                updateTutorialStepContent(result.step);
                setupStepEditor(result.step);
            }
        };
    }

    const tutorialResetStepBtn = document.getElementById('tutorial-reset-step-btn');
    if (tutorialResetStepBtn) {
        tutorialResetStepBtn.onclick = () => {
            const result = ResetManager.resetCurrentStep();
            if (result.success) {
                showToast(result.message, 'success');
                setupStepEditor(result.step);
            } else {
                showToast(result.message, 'error');
            }
        };
    }

    const tutorialHintBtn = document.getElementById('tutorial-hint-btn');
    if (tutorialHintBtn) {
        tutorialHintBtn.onclick = () => {
            const hint = StepManager.provideHint();
            if (hint) {
                showToast(hint.hint, 'info', 'Hint');
            }
        };
    }

    const tutorialInsertCodeBtn = document.getElementById('tutorial-insert-code-btn');
    if (tutorialInsertCodeBtn) {
        tutorialInsertCodeBtn.onclick = () => {
            const result = StepManager.insertCompletedCode();
            if (result && result.code) {
                // Insert code into editor
                if (editor) {
                    const position = editor.getPosition();
                    editor.executeEdits('insert-tutorial-code', [{
                        range: new monaco.Range(position.lineNumber, position.column, position.lineNumber, position.column),
                        text: result.code,
                        forceMoveMarkers: true
                    }]);
                    
                    showToast('Code inserted! ' + result.explanation, 'success', 'Code Added');
                }
            }
        };
    }
}

// Duplicate tutorial-exit-btn assignment removed - handled above

function showSnippetsModal() {
    renderSnippets('all', '');
    showModal('snippets-modal');
    
    // Initialize Lucide icons in modal
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function renderSnippets(language = 'all', searchQuery = '') {
    const container = document.getElementById('snippets-list');
    container.innerHTML = '';

    let snippets = [];
    
    if (searchQuery) {
        // Search across all languages or specific language
        const lang = language === 'all' ? null : language;
        snippets = SnippetService.searchSnippets(searchQuery, lang);
    } else if (language === 'all') {
        // Get all snippets
        const allSnippets = SnippetService.getSnippets();
        Object.keys(allSnippets).forEach(lang => {
            allSnippets[lang].forEach(snippet => {
                snippets.push({ ...snippet, language: lang });
            });
        });
    } else {
        // Get snippets for specific language
        const langSnippets = SnippetService.getSnippetsByLanguage(language);
        snippets = langSnippets.map(s => ({ ...s, language }));
    }

    if (snippets.length === 0) {
        container.innerHTML = '<div class="snippets-empty">No snippets found</div>';
        return;
    }

    snippets.forEach(snippet => {
        const item = document.createElement('div');
        item.className = 'snippet-item';
        
        const langClass = `lang-${snippet.language}`;
        const langLabel = snippet.language.toUpperCase();
        
        item.innerHTML = `
            <div class="snippet-header">
                <div class="snippet-title">${snippet.name}</div>
                <div class="snippet-badges">
                    <span class="snippet-badge ${langClass}">${langLabel}</span>
                    <span class="snippet-badge category">${snippet.category}</span>
                </div>
            </div>
            <div class="snippet-description">${snippet.description}</div>
            <div class="snippet-preview">${escapeHtml(snippet.code)}</div>
            <div class="snippet-actions">
                <button class="snippet-insert-btn" data-snippet-id="${snippet.id}" data-snippet-lang="${snippet.language}">
                    Insert at Cursor
                </button>
            </div>
        `;
        
        // Add click handler for insert button
        const insertBtn = item.querySelector('.snippet-insert-btn');
        insertBtn.onclick = (e) => {
            e.stopPropagation();
            insertSnippet(snippet.id, snippet.language);
        };
        
        container.appendChild(item);
    });
}

function insertSnippet(snippetId, language) {
    if (!editor) {
        showToast('Please open a file first', 'warning');
        return;
    }

    const snippet = SnippetService.getSnippetById(snippetId, language);
    if (!snippet) {
        showToast('Snippet not found', 'error');
        return;
    }

    // Get current cursor position
    const position = editor.getPosition();
    const selection = editor.getSelection();

    // Insert snippet at cursor or replace selection
    editor.executeEdits('insert-snippet', [{
        range: selection,
        text: snippet.code,
        forceMoveMarkers: true
    }]);

    // Focus back on editor
    editor.focus();
    
    // Close modal
    hideModal('snippets-modal');
    
    // Show feedback
    showSnippetInsertedFeedback(snippet.name);
}

function showSnippetInsertedFeedback(snippetName) {
    const saveBtn = document.getElementById('save-btn');
    const originalText = saveBtn.textContent;
    saveBtn.textContent = `Inserted: ${snippetName}`;
    setTimeout(() => {
        saveBtn.textContent = originalText;
    }, 2000);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Snippets modal event listeners (safe initialization)
function initializeSnippetsEventListeners() {
    const snippetSearch = document.getElementById('snippet-search');
    if (snippetSearch) {
        snippetSearch.addEventListener('input', (e) => {
            const searchQuery = e.target.value;
            const activeFilter = document.querySelector('.filter-btn.active');
            const language = activeFilter ? activeFilter.dataset.lang : 'all';
            renderSnippets(language, searchQuery);
        });
    }
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Update active state
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        // Render snippets for selected language
        const language = e.target.dataset.lang;
        const searchQuery = document.getElementById('snippet-search').value;
        renderSnippets(language, searchQuery);
    });
});

function showAssetModal(assetFile) {
    const preview = document.getElementById('asset-preview');
    const info = document.getElementById('asset-info');
    const snippets = document.getElementById('asset-code-snippets');
    
    // Show preview for images
    if (AssetService.isImage(assetFile)) {
        preview.innerHTML = `<img src="${AssetService.getAssetUrl(assetFile)}" alt="${assetFile.name}" style="max-width: 100%; max-height: 300px; border-radius: 4px; margin: 1rem 0;">`;
    } else {
        preview.innerHTML = `<p style="color: #666; margin: 1rem 0;">Preview not available for this file type.</p>`;
    }
    
    // Show file info
    info.innerHTML = `
        <div style="background: #f5f5f5; padding: 1rem; border-radius: 4px; margin: 1rem 0;">
            <p><strong>Name:</strong> ${assetFile.name}</p>
            <p><strong>Type:</strong> ${assetFile.mimeType || 'Unknown'}</p>
            <p><strong>Size:</strong> ${AssetService.formatFileSize(assetFile.size)}</p>
        </div>
    `;
    
    // Show code snippets
    const htmlSnippet = AssetService.generateImgTag(assetFile);
    const cssSnippet = AssetService.generateCssBackground(assetFile);
    
    snippets.innerHTML = `
        <div style="margin: 1rem 0;">
            <h3>Code Snippets</h3>
            <div style="margin: 0.5rem 0;">
                <p><strong>HTML:</strong></p>
                <textarea readonly style="width: 100%; padding: 0.5rem; font-family: monospace; font-size: 0.85rem; border: 1px solid #ddd; border-radius: 4px; resize: vertical;" rows="2">${htmlSnippet}</textarea>
                <button class="btn btn-small" onclick="copyToClipboard('${htmlSnippet.replace(/'/g, "\\'")}', 'HTML snippet copied!')">Copy HTML</button>
            </div>
            ${AssetService.isImage(assetFile) ? `
            <div style="margin: 0.5rem 0;">
                <p><strong>CSS Background:</strong></p>
                <textarea readonly style="width: 100%; padding: 0.5rem; font-family: monospace; font-size: 0.85rem; border: 1px solid #ddd; border-radius: 4px; resize: vertical;" rows="2">${cssSnippet}</textarea>
                <button class="btn btn-small" onclick="copyToClipboard('${cssSnippet.replace(/'/g, "\\'")}', 'CSS snippet copied!')">Copy CSS</button>
            </div>
            ` : ''}
        </div>
    `;
    
    showModal('asset-modal');
}

function copyToClipboard(text, message) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(message || 'Copied to clipboard', 'success');
    }).catch(() => {
        showToast('Failed to copy to clipboard', 'error');
    });
}

    // Cancel buttons
    document.querySelectorAll('.cancel-btn').forEach(btn => {
        btn.onclick = (e) => {
            const modal = e.target.closest('.modal');
            if (modal) {
                hideModal(modal.id);
            }
        };
    });

    const modalOverlay = document.getElementById('modal-overlay');
    if (modalOverlay) {
        modalOverlay.onclick = () => {
            document.querySelectorAll('.modal').forEach(modal => {
                hideModal(modal.id);
            });
        };
    }

    // Accessibility Checker
    const a11yToggleBtn = document.getElementById('a11y-toggle-btn');
    if (a11yToggleBtn) {
        a11yToggleBtn.onclick = () => {
            const panel = document.getElementById('a11y-panel');
            if (panel.classList.contains('hidden')) {
                panel.classList.remove('hidden');
                runAccessibilityCheck();
            } else {
                panel.classList.add('hidden');
            }
        };
    }

    const a11yCloseBtn = document.getElementById('a11y-close-btn');
    if (a11yCloseBtn) {
        a11yCloseBtn.onclick = () => {
            document.getElementById('a11y-panel').classList.add('hidden');
        };
    }

async function runAccessibilityCheck() {
    const iframe = document.getElementById('preview');
    const content = document.getElementById('a11y-content');
    
    content.innerHTML = '<p class="a11y-loading">Checking accessibility...</p>';
    
    try {
        const results = await AccessibilityService.checkAccessibility(iframe);
        renderAccessibilityResults(results);
    } catch (error) {
        content.innerHTML = `<p class="a11y-loading" style="color: #e74c3c;">Error checking accessibility: ${error.message}</p>`;
    }
}

function renderAccessibilityResults(results) {
    const content = document.getElementById('a11y-content');
    
    if (!results.violations || results.violations.length === 0) {
        content.innerHTML = `
            <div class="a11y-empty">
                <div class="a11y-empty-icon">
                    <i data-lucide="check-circle" style="width: 48px; height: 48px; color: #27ae60;"></i>
                </div>
                <div class="a11y-empty-text">No accessibility issues found!</div>
                <div class="a11y-empty-subtext">Your page follows accessibility best practices.</div>
            </div>
        `;
        // Re-initialize icons for dynamically added content
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        return;
    }

    // Group violations by impact
    const critical = results.violations.filter(v => v.impact === 'critical');
    const serious = results.violations.filter(v => v.impact === 'serious');
    const moderate = results.violations.filter(v => v.impact === 'moderate');
    const minor = results.violations.filter(v => v.impact === 'minor');

    let html = `
        <div class="a11y-summary">
            <div class="a11y-stat">
                <div class="a11y-stat-value" style="color: #e74c3c;">${critical.length}</div>
                <div class="a11y-stat-label">Critical</div>
            </div>
            <div class="a11y-stat">
                <div class="a11y-stat-value" style="color: #e67e22;">${serious.length}</div>
                <div class="a11y-stat-label">Serious</div>
            </div>
            <div class="a11y-stat">
                <div class="a11y-stat-value" style="color: #f39c12;">${moderate.length}</div>
                <div class="a11y-stat-label">Moderate</div>
            </div>
            <div class="a11y-stat">
                <div class="a11y-stat-value" style="color: #3498db;">${minor.length}</div>
                <div class="a11y-stat-label">Minor</div>
            </div>
        </div>
    `;

    results.violations.forEach(violation => {
        const formatted = AccessibilityService.formatViolation(violation);
        html += `
            <div class="a11y-violation ${formatted.impact}">
                <div class="a11y-violation-header">
                    <span class="a11y-impact-badge ${formatted.impact}">${formatted.impact}</span>
                    <span class="a11y-violation-title">${formatted.help}</span>
                </div>
                <div class="a11y-violation-description">${formatted.description}</div>
                <a href="${formatted.helpUrl}" target="_blank" class="a11y-violation-link">Learn more →</a>
                <div style="font-weight: 600; font-size: 0.85rem; margin-bottom: 0.5rem;">
                    Affected elements (${formatted.nodes.length}):
                </div>
                ${formatted.nodes.slice(0, 3).map(node => `
                    <div class="a11y-node">
                        <div class="a11y-node-html">${escapeHtml(node.html)}</div>
                    </div>
                `).join('')}
                ${formatted.nodes.length > 3 ? `<div style="font-size: 0.85rem; color: #7f8c8d; margin-top: 0.5rem;">... and ${formatted.nodes.length - 3} more</div>` : ''}
            </div>
        `;
    });

    content.innerHTML = html;
    
    // Re-initialize icons for dynamically added content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize Lucide icons after DOM loads
window.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});


// Collaboration Functions
let firebaseConfigured = false;

// Initialize Firebase after page loads
window.addEventListener('load', () => {
    // Wait a bit for Firebase CDN to load
    setTimeout(() => {
        if (typeof FIREBASE_CONFIG !== 'undefined' && FIREBASE_CONFIG !== null) {
            firebaseConfigured = CollaborationService.initialize(FIREBASE_CONFIG);
            console.log('Firebase initialized from hardcoded config:', firebaseConfigured);
        } else {
            // Try to load Firebase config from localStorage
            const config = localStorage.getItem('webforge_firebase_config');
            if (config) {
                try {
                    const firebaseConfig = JSON.parse(config);
                    firebaseConfigured = CollaborationService.initialize(firebaseConfig);
                    console.log('Firebase initialized from localStorage:', firebaseConfigured);
                } catch (e) {
                    console.error('Failed to parse Firebase config:', e);
                }
            }
        }
        
        // Restore active collaboration session if exists
        if (firebaseConfigured) {
            setTimeout(() => {
                restoreCollaborationSession();
            }, 500);
        }
    }, 1000);
});

function showCollaborationModal() {
    // Check for session ID in URL
    const urlParams = new URLSearchParams(window.location.search);
    let sessionId = urlParams.get('session');
    
    // Clean the session ID - extract only the ID part if a full URL was somehow passed
    if (sessionId) {
        // If it contains a URL, extract just the session parameter
        if (sessionId.includes('?session=')) {
            const match = sessionId.match(/[?&]session=([^&]+)/);
            sessionId = match ? match[1] : sessionId;
        }
        // Remove any URL fragments or invalid characters
        sessionId = sessionId.split('#')[0].split('&')[0].trim();
        
        if (sessionId && firebaseConfigured) {
            joinCollaborationSession(sessionId);
        }
    }

    // Load saved name if exists
    const savedName = CollaborationService.getUserName();
    if (savedName) {
        document.getElementById('collab-name-input').value = savedName;
    }

    updateCollaborationUI();
    showModal('collaboration-modal');
    lucide.createIcons();
}

function updateCollaborationUI() {
    const activeSession = document.getElementById('active-session');
    const startSection = document.querySelector('.collab-section:first-child');
    const joinSection = document.querySelector('.collab-section:nth-child(2)');

    if (CollaborationService.isInSession()) {
        activeSession.classList.remove('hidden');
        startSection.classList.add('hidden');
        joinSection.classList.add('hidden');
        
        document.getElementById('current-session-id').textContent = CollaborationService.currentSessionId;
        updateCollaboratorsList();
        
        // Add collaboration indicator to header
        if (!document.querySelector('.collaboration-indicator')) {
            const indicator = document.createElement('div');
            indicator.className = 'collaboration-indicator';
            indicator.innerHTML = '<i data-lucide="users"></i><span>Collaborating</span>';
            document.querySelector('.header-brand').appendChild(indicator);
            lucide.createIcons();
        }
    } else {
        activeSession.classList.add('hidden');
        startSection.classList.remove('hidden');
        joinSection.classList.remove('hidden');
        
        // Remove collaboration indicator
        const indicator = document.querySelector('.collaboration-indicator');
        if (indicator) indicator.remove();
    }
}

function updateCollaboratorsList() {
    const list = document.getElementById('collaborators-list');
    list.innerHTML = '<h4 style="margin-bottom: 0.5rem;">Collaborators</h4>';
    
    const currentUserId = CollaborationService.getUserId();
    const isHost = CollaborationService.isHost;
    
    CollaborationService.collaborators.forEach((collaborator, id) => {
        const item = document.createElement('div');
        item.className = 'collaborator-item';
        
        const avatar = document.createElement('div');
        avatar.className = 'collaborator-avatar';
        avatar.style.backgroundColor = collaborator.color;
        avatar.textContent = collaborator.name.charAt(0).toUpperCase();
        
        const info = document.createElement('div');
        info.className = 'collaborator-info';
        
        const nameLabel = id === currentUserId ? `${collaborator.name} (You)` : collaborator.name;
        const roleLabel = id === CollaborationService.hostId ? 'Host' : 'Active';
        
        info.innerHTML = `
            <div class="collaborator-name">${nameLabel}</div>
            <div class="collaborator-status">${roleLabel}</div>
        `;
        
        item.appendChild(avatar);
        item.appendChild(info);
        
        // Add remove button for host (but not for themselves)
        if (isHost && id !== currentUserId) {
            const removeBtn = document.createElement('button');
            removeBtn.className = 'delete-btn';
            removeBtn.innerHTML = '<i data-lucide="user-x" style="width: 14px; height: 14px;"></i>';
            removeBtn.title = 'Remove participant';
            removeBtn.onclick = () => {
                showConfirmModal(
                    'Remove Participant',
                    `Remove ${collaborator.name} from this session?`,
                    async () => {
                        await CollaborationService.removeParticipant(id);
                        showToast(`${collaborator.name} has been removed`, 'info');
                    }
                );
            };
            item.appendChild(removeBtn);
        }
        
        list.appendChild(item);
    });
    
    lucide.createIcons();
}

// Collaboration event listeners initialization
function initializeCollaborationEventListeners() {
    const startCollabBtn = document.getElementById('start-collab-btn');
    if (startCollabBtn) {
        startCollabBtn.onclick = async () => {
            // Validate name input
            const nameInput = document.getElementById('collab-name-input');
            const name = nameInput.value.trim();
            
            if (!name) {
                showToast('Please enter your name before starting a collaboration', 'warning', 'Name Required');
                nameInput.focus();
                return;
            }
            
            // Save the name
            CollaborationService.setUserName(name);

            if (!firebaseConfigured) {
                showToast('Firebase configuration is required for collaboration', 'warning', 'Configuration Required');
                return;
            }

            if (!currentProject) {
                showToast('Please create or select a project first', 'warning');
                return;
            }

            try {
                const sessionId = await CollaborationService.createSession(currentProject);
                updateCollaborationUI();
                showToast('Share the session link with others to collaborate', 'success', 'Session Created');
            } catch (e) {
                showToast(e.message, 'error', 'Failed to Create Session');
            }
        };
    }

    const joinCollabBtn = document.getElementById('join-collab-btn');
    if (joinCollabBtn) {
        joinCollabBtn.onclick = async () => {
            // Validate name input
            const nameInput = document.getElementById('collab-name-input');
            const name = nameInput.value.trim();
            
            if (!name) {
                showToast('Please enter your name before joining a collaboration', 'warning', 'Name Required');
                nameInput.focus();
                return;
            }
            
            // Save the name
            CollaborationService.setUserName(name);

            const sessionId = document.getElementById('session-id-input').value.trim();
            if (!sessionId) {
                showToast('Please enter a session ID', 'warning');
                return;
            }

            await joinCollaborationSession(sessionId);
        };
    }

async function joinCollaborationSession(sessionId) {
    if (!firebaseConfigured) {
        showToast('Firebase configuration is required for collaboration', 'warning', 'Configuration Required');
        return;
    }

    try {
        const sessionData = await CollaborationService.joinSession(sessionId);
        
        // Load the shared project
        currentProject = {
            id: sessionData.projectId,
            name: sessionData.projectName,
            files: sessionData.files,
            createdAt: sessionData.createdAt
        };
        
        renderProjectsList([currentProject]);
        renderFileTree(currentProject.files);
        
        if (currentProject.files.length > 0) {
            openFile(currentProject.files[0].id);
        }
        
        updateCollaborationUI();
        hideModal('collaboration-modal');
        showToast('You can now collaborate in real-time', 'success', 'Joined Session');
    } catch (e) {
        showToast(e.message, 'error', 'Failed to Join Session');
    }
}

    const copyLinkBtn = document.getElementById('copy-link-btn');
    if (copyLinkBtn) {
        copyLinkBtn.onclick = () => {
            const url = CollaborationService.getShareUrl();
            if (url) {
                navigator.clipboard.writeText(url).then(() => {
                    const btn = document.getElementById('copy-link-btn');
                    const originalHTML = btn.innerHTML;
                    btn.innerHTML = '<i data-lucide="check"></i><span>Copied!</span>';
                    lucide.createIcons();
                    setTimeout(() => {
                        btn.innerHTML = originalHTML;
                        lucide.createIcons();
                    }, 2000);
                });
            }
        };
    }

    const leaveSessionBtn = document.getElementById('leave-session-btn');
    if (leaveSessionBtn) {
        leaveSessionBtn.onclick = async () => {
            showConfirmModal(
                'Leave Session',
                'Are you sure you want to leave this collaboration session?',
                async () => {
                    await CollaborationService.leaveSession();
                    updateCollaborationUI();
                    hideModal('collaboration-modal');
                    showToast('You have left the collaboration session', 'info');
                }
            );
        };
    }
}

// Collaboration callbacks
window.onCollaborativeUpdate = (files) => {
    if (currentProject) {
        currentProject.files = files;
        renderFileTree(currentProject.files);
        
        // Update current file if it was modified
        if (currentFile) {
            const updatedFile = files.find(f => f.id === currentFile.id);
            if (updatedFile && updatedFile.content !== editor.getValue()) {
                const position = editor.getPosition();
                editor.setValue(updatedFile.content);
                editor.setPosition(position);
            }
        }
        
        updatePreview();
    }
};

window.onCollaboratorsUpdate = (collaborators) => {
    if (document.getElementById('collaboration-modal').classList.contains('hidden')) {
        return;
    }
    updateCollaboratorsList();
};

window.onCursorsUpdate = (cursors) => {
    // TODO: Render remote cursors in editor
    // This would require Monaco editor decorations
};

window.onSessionDeleted = () => {
    showToast('The collaboration session has ended', 'info', 'Session Ended');
    updateCollaborationUI();
    
    // Remove collaboration indicator
    const indicator = document.querySelector('.collaboration-indicator');
    if (indicator) indicator.remove();
};

window.onRemovedFromSession = () => {
    showToast('You have been removed from the collaboration session', 'warning', 'Removed from Session');
    updateCollaborationUI();
    
    // Remove collaboration indicator
    const indicator = document.querySelector('.collaboration-indicator');
    if (indicator) indicator.remove();
    
    // Close modal if open
    const modal = document.getElementById('collaboration-modal');
    if (!modal.classList.contains('hidden')) {
        hideModal('collaboration-modal');
    }
};

async function restoreCollaborationSession() {
    const savedSession = CollaborationService.getSavedSession();
    if (!savedSession) return;
    
    try {
        // Try to rejoin the session
        const sessionData = await CollaborationService.rejoinSession(savedSession.sessionId, savedSession.isHost);
        
        if (sessionData) {
            // Restore the project
            currentProject = {
                id: sessionData.projectId,
                name: sessionData.projectName,
                files: sessionData.files,
                createdAt: sessionData.createdAt
            };
            
            renderProjectsList([currentProject]);
            renderFileTree(currentProject.files);
            
            if (currentProject.files.length > 0) {
                const fileToOpen = currentProject.files.find(f => f.id === savedSession.currentFileId) || currentProject.files[0];
                openFile(fileToOpen.id);
            }
            
            updateCollaborationUI();
            showToast('Reconnected to collaboration session', 'success', 'Session Restored');
        }
    } catch (e) {
        console.log('Could not restore session:', e.message);
        // Session no longer exists, clear saved data
        CollaborationService.clearSavedSession();
    }
}

// Hook into editor changes for collaboration
const originalOnDidChangeModelContent = editor?.onDidChangeModelContent;
if (editor && originalOnDidChangeModelContent) {
    editor.onDidChangeModelContent(() => {
        if (currentFile && currentProject) {
            FileService.updateFile(currentFile.id, editor.getValue(), currentProject);
            
            // Sync to collaboration session
            if (CollaborationService.isInSession()) {
                CollaborationService.updateFile(currentFile.id, editor.getValue());
            }
            
            clearTimeout(autoSaveTimeout);
            autoSaveTimeout = setTimeout(() => {
                ProjectService.saveProject(currentProject);
                updatePreview();
                showSaveIndicator();
            }, 1000);
        }
    });
}


// Confirmation Modal
function showConfirmModal(title, message, onConfirm) {
    document.getElementById('confirm-title').textContent = title;
    document.getElementById('confirm-message').textContent = message;
    
    const yesBtn = document.getElementById('confirm-yes-btn');
    const noBtn = document.getElementById('confirm-no-btn');
    
    // Remove old listeners
    const newYesBtn = yesBtn.cloneNode(true);
    const newNoBtn = noBtn.cloneNode(true);
    yesBtn.parentNode.replaceChild(newYesBtn, yesBtn);
    noBtn.parentNode.replaceChild(newNoBtn, noBtn);
    
    // Add new listeners
    newYesBtn.onclick = () => {
        hideModal('confirm-modal');
        onConfirm();
    };
    
    newNoBtn.onclick = () => {
        hideModal('confirm-modal');
    };
    
    showModal('confirm-modal');
    lucide.createIcons();
}


// Offline Detection
function updateOnlineStatus() {
    const offlineBanner = document.getElementById('offline-banner');
    if (offlineBanner) {
        if (!navigator.onLine) {
            offlineBanner.classList.remove('hidden');
        } else {
            offlineBanner.classList.add('hidden');
        }
    }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Check on load
updateOnlineStatus();

// Enhanced keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // F11 for fullscreen preview
    if (e.key === 'F11') {
        e.preventDefault();
        if (currentPage === 'editor') {
            togglePreviewFullscreen();
        }
    }
    
    // Ctrl+? or Ctrl+/ to show shortcuts
    if ((e.ctrlKey || e.metaKey) && (e.key === '?' || e.key === '/')) {
        if (!e.shiftKey) {
            e.preventDefault();
            if (currentPage === 'editor') {
                showModal('shortcuts-modal');
            }
        }
    }
});

// Navigation Event Listeners (safe initialization)
function initializeNavigationEventListeners() {
    const navHome = document.getElementById('nav-home');
    if (navHome) {
        navHome.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('landing');
        });
    }

    const navTutorials = document.getElementById('nav-tutorials');
    if (navTutorials) {
        navTutorials.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('tutorial-hub');
        });
    }
}

document.getElementById('nav-editor')?.addEventListener('click', (e) => {
    e.preventDefault();
    // Redirect to dedicated editor page
    window.location.href = 'editor.html';
});

// Landing Page Event Listeners
document.getElementById('start-learning-btn')?.addEventListener('click', () => {
    window.location.href = 'components.html';
});

document.getElementById('open-editor-btn')?.addEventListener('click', () => {
    // Redirect to dedicated editor page
    window.location.href = 'editor.html';
});



// Tutorial Hub Event Listeners
document.querySelectorAll('.tutorial-item').forEach(item => {
    item.addEventListener('click', () => {
        const tutorialId = item.dataset.tutorial;
        startTutorialFromHub(tutorialId);
    });
});

// Map tutorial hub items to actual tutorial IDs
const tutorialMapping = {
    'hero-section': 'Hero Section',
    'contact-form': 'Contact Form',
    'navbar-basic': 'Build a Navigation Bar',
    'navbar-responsive': 'Responsive Navigation', 
    'card-component': 'Card Component',
    'interactive-button': 'Interactive Button'
};

function startTutorialFromHub(tutorialId) {
    const actualTutorialId = tutorialMapping[tutorialId] || tutorialId;
    const tutorial = TutorialEngine.getTutorialDefinition(actualTutorialId);
    
    if (!tutorial) {
        showToast('Tutorial not found. Coming soon!', 'info');
        return;
    }
    
    // Store tutorial selection for editor page
    localStorage.setItem('webforge_start_tutorial', JSON.stringify({
        tutorialId: actualTutorialId,
        mode: 'tutorial',
        timestamp: new Date().toISOString()
    }));
    
    // Redirect to editor page
    window.location.href = 'editor.html';
}

// Enhanced tutorial start function for new structure
function startTutorialFromHub(tutorialId) {
    const tutorial = TutorialEngine.getTutorialDefinition(tutorialId);
    if (!tutorial) return;
    
    // Store tutorial selection for editor page
    localStorage.setItem('webforge_start_tutorial', JSON.stringify({
        tutorialId: tutorialId,
        mode: 'tutorial',
        timestamp: new Date().toISOString()
    }));
    
    // Redirect to editor page
    window.location.href = 'editor.html';
}

// Tutorial-specific Monaco Editor enhancements

/**
 * Highlight target location for tutorial step
 */
function highlightTargetLocation(targetFile, targetLocation) {
    if (!editor || !currentFile || currentFile.name !== targetFile) {
        return;
    }

    // Clear existing tutorial decorations
    clearTutorialDecorations();

    const model = editor.getModel();
    if (!model) return;

    let range = null;

    // Find target location in the code
    if (targetLocation === 'body') {
        const content = model.getValue();
        const bodyMatch = content.match(/<body[^>]*>/i);
        if (bodyMatch) {
            const position = model.getPositionAt(bodyMatch.index + bodyMatch[0].length);
            range = new monaco.Range(position.lineNumber, 1, position.lineNumber + 1, 1);
        }
    } else if (targetLocation === 'head') {
        const content = model.getValue();
        const headMatch = content.match(/<head[^>]*>/i);
        if (headMatch) {
            const position = model.getPositionAt(headMatch.index + headMatch[0].length);
            range = new monaco.Range(position.lineNumber, 1, position.lineNumber + 1, 1);
        }
    } else if (targetLocation.startsWith('/*') && targetLocation.endsWith('*/')) {
        // CSS comment location
        const content = model.getValue();
        const commentIndex = content.indexOf(targetLocation);
        if (commentIndex !== -1) {
            const position = model.getPositionAt(commentIndex + targetLocation.length);
            range = new monaco.Range(position.lineNumber, 1, position.lineNumber + 1, 1);
        }
    }

    if (range) {
        // Add tutorial highlight decoration
        const decorations = editor.deltaDecorations([], [{
            range: range,
            options: {
                className: 'tutorial-target-highlight',
                glyphMarginClassName: 'tutorial-target-glyph',
                hoverMessage: { value: 'Add your code here' },
                minimap: {
                    color: '#4CAF50',
                    position: monaco.editor.MinimapPosition.Inline
                }
            }
        }]);

        // Store decoration IDs for cleanup
        window.tutorialDecorations = decorations;

        // Scroll to and focus the target location
        editor.revealRangeInCenter(range);
        editor.setPosition(range.getEndPosition());
        editor.focus();
    }
}

/**
 * Focus editing area for tutorial step
 */
function focusEditingArea(targetFile, targetLocation) {
    if (!editor || !currentFile || currentFile.name !== targetFile) {
        // Switch to target file if needed
        if (currentProject) {
            const file = currentProject.files.find(f => f.name === targetFile);
            if (file) {
                openFile(file.id);
                // Retry after file is loaded
                setTimeout(() => focusEditingArea(targetFile, targetLocation), 100);
                return;
            }
        }
        return;
    }

    highlightTargetLocation(targetFile, targetLocation);
}

/**
 * Show input guides for tutorial step
 */
function showInputGuides(step) {
    if (!editor || !step) return;

    // Add tutorial-specific autocomplete suggestions
    const disposable = monaco.languages.registerCompletionItemProvider('html', {
        provideCompletionItems: (model, position) => {
            if (!step.codeSnippet) return { suggestions: [] };

            const word = model.getWordUntilPosition(position);
            const range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn
            };

            return {
                suggestions: [{
                    label: 'tutorial-snippet',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: step.codeSnippet,
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: `Tutorial step: ${step.title}`,
                    detail: 'Tutorial code snippet',
                    range: range,
                    sortText: '0000' // Ensure it appears first
                }]
            };
        }
    });

    // Store disposable for cleanup
    window.tutorialCompletionProvider = disposable;
}

/**
 * Highlight code area for tutorial
 */
function highlightCodeArea(targetFile, targetLocation) {
    highlightTargetLocation(targetFile, targetLocation);
}

/**
 * Add tutorial-specific autocomplete
 */
function addTutorialAutocomplete(step) {
    showInputGuides(step);
}

/**
 * Detect step completion based on code changes
 */
function detectStepCompletion(step) {
    if (!editor || !step) return false;

    const currentContent = editor.getValue();
    
    // Basic completion detection - check if code snippet is present
    if (step.codeSnippet) {
        // Remove whitespace and normalize for comparison
        const normalizedSnippet = step.codeSnippet.replace(/\s+/g, ' ').trim();
        const normalizedContent = currentContent.replace(/\s+/g, ' ').trim();
        
        return normalizedContent.includes(normalizedSnippet);
    }

    return true; // If no code snippet, consider complete
}

/**
 * Check tutorial step completion
 */
function checkTutorialStepCompletion() {
    if (!TutorialEngine.currentStep) return;

    const isComplete = StepManager.validateStepCompletion();
    
    if (isComplete) {
        // Show completion indicator
        showStepCompletionFeedback();
        
        // Auto-advance after a short delay
        setTimeout(() => {
            if (confirm('Step completed! Move to next step?')) {
                advanceToNextStep();
            }
        }, 1500);
    }
}

/**
 * Show step completion feedback
 */
function showStepCompletionFeedback() {
    // Add completion decoration
    const model = editor.getModel();
    if (!model) return;

    const lineCount = model.getLineCount();
    const range = new monaco.Range(1, 1, lineCount, model.getLineMaxColumn(lineCount));

    const decorations = editor.deltaDecorations([], [{
        range: range,
        options: {
            className: 'tutorial-step-complete',
            glyphMarginClassName: 'tutorial-complete-glyph',
            hoverMessage: { value: 'Step completed! ✓' }
        }
    }]);

    // Remove decoration after a few seconds
    setTimeout(() => {
        editor.deltaDecorations(decorations, []);
    }, 3000);
}

/**
 * Advance to next tutorial step
 */
function advanceToNextStep() {
    try {
        const result = TutorialEngine.nextStep();
        
        if (result.completed) {
            showTutorialCompletionModal(result.tutorial);
        } else {
            updateTutorialUI(result);
            setupStepEditor(result.step);
        }
    } catch (error) {
        console.error('Error advancing to next step:', error);
        showToast('Error advancing to next step', 'error');
    }
}

/**
 * Setup editor for tutorial step
 */
function setupStepEditor(step) {
    if (!step) return;

    // Clear previous tutorial enhancements
    clearTutorialDecorations();
    clearTutorialCompletionProvider();

    // Setup new step
    if (step.targetFile && step.targetLocation) {
        focusEditingArea(step.targetFile, step.targetLocation);
    }

    if (step.codeSnippet) {
        addTutorialAutocomplete(step);
    }
}

/**
 * Clear tutorial decorations
 */
function clearTutorialDecorations() {
    if (window.tutorialDecorations && editor) {
        editor.deltaDecorations(window.tutorialDecorations, []);
        window.tutorialDecorations = null;
    }
}

/**
 * Clear tutorial completion provider
 */
function clearTutorialCompletionProvider() {
    if (window.tutorialCompletionProvider) {
        window.tutorialCompletionProvider.dispose();
        window.tutorialCompletionProvider = null;
    }
}

/**
 * Highlight tutorial changes in preview
 */
function highlightTutorialChanges() {
    // This would highlight the visual changes made in the current step
    // Implementation depends on preview integration
    const stepData = StepManager.getCurrentStepData();
    if (stepData && stepData.step) {
        // Could add visual indicators in preview iframe
        console.log('Highlighting changes for step:', stepData.step.title);
    }
}

/**
 * Update tutorial UI elements
 */
function updateTutorialUI(stepResult) {
    // Update step counter, progress bar, etc.
    // This would integrate with tutorial UI components
    console.log('Updating tutorial UI for step:', stepResult.stepIndex + 1);
}

/**
 * Show tutorial completion modal
 */
function showTutorialCompletionModal(tutorial) {
    showToast(`Tutorial "${tutorial.title}" completed!`, 'success', 'Congratulations!');
    
    // Suggest next tutorial
    const suggestions = TutorialEngine.getSuggestedNextTutorials?.(tutorial.id);
    if (suggestions && suggestions.length > 0) {
        setTimeout(() => {
            if (confirm(`Great job! Would you like to try "${suggestions[0].title}" next?`)) {
                TutorialEngine.startTutorial(suggestions[0].id);
            }
        }, 2000);
    }
}
function renderForgeProfile(profile, achievements) {
    // Update profile header
    document.getElementById('profile-level').textContent = profile.level;
    document.getElementById('profile-title').textContent = profile.title;
    document.getElementById('profile-xp').textContent = profile.xp.toLocaleString();
    document.getElementById('profile-streak').textContent = profile.stats.currentStreak;
    document.getElementById('profile-achievements').textContent = achievements.unlocked;
    
    // Update XP progress
    const nextLevel = ForgeMaster.getXPForNextLevel(profile.xp);
    const currentLevelXP = ForgeMaster.LEVELS.find(l => l.level === profile.level)?.xp || 0;
    const progressXP = profile.xp - currentLevelXP;
    const neededXP = nextLevel.total - currentLevelXP;
    const percentage = nextLevel.isMaxLevel ? 100 : (progressXP / neededXP) * 100;
    
    document.getElementById('profile-xp-bar').style.width = `${percentage}%`;
    document.getElementById('profile-xp-text').textContent = nextLevel.isMaxLevel 
        ? 'MAX LEVEL REACHED' 
        : `${progressXP}/${neededXP} XP to next level`;
    
    // Update statistics
    document.getElementById('stat-tutorial-steps').textContent = profile.stats.tutorialStepsCompleted;
    document.getElementById('stat-tutorials-complete').textContent = profile.stats.tutorialsCompleted;
    document.getElementById('stat-projects-created').textContent = profile.stats.projectsCreated;
    document.getElementById('stat-projects-exported').textContent = profile.stats.projectsExported;
    
    // Render achievements
    const achievementsGrid = document.getElementById('achievements-grid');
    achievementsGrid.innerHTML = '';
    
    Object.values(ForgeMaster.ACHIEVEMENTS).forEach(achievement => {
        const isUnlocked = profile.achievements.includes(achievement.id);
        const unlockedData = profile.unlockedAchievements.find(a => a.id === achievement.id);
        
        const card = document.createElement('div');
        card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;
        
        card.innerHTML = `
            <div class="achievement-rarity ${achievement.rarity}">${achievement.rarity}</div>
            <div class="achievement-icon">
                <i data-lucide="${achievement.icon}"></i>
            </div>
            <div class="achievement-name">${achievement.name}</div>
            <div class="achievement-description">${achievement.description}</div>
            ${isUnlocked && unlockedData ? `<div class="achievement-date">Unlocked: ${new Date(unlockedData.unlockedAt).toLocaleDateString()}</div>` : ''}
        `;
        
        achievementsGrid.appendChild(card);
    });
    
    // Initialize icons
    initIcons();
}

// Hook into existing tutorial and project functions to award XP
function awardForgeXP(action, amount, reason) {
    if (typeof ForgeMaster !== 'undefined') {
        ForgeMaster.awardXP('default-user', amount, reason);
    }
}

// Override tutorial completion to award XP
const originalNextStep = TutorialEngine.nextStep;
TutorialEngine.nextStep = function() {
    const result = originalNextStep.call(this);
    
    if (result && !result.completed) {
        // Award XP for step completion
        ForgeMaster.recordTutorialStep('default-user');
    } else if (result && result.completed) {
        // Award XP for tutorial completion
        ForgeMaster.recordTutorialComplete('default-user', this.currentTutorial.id);
    }
    
    return result;
};

// Override project creation to award XP
const originalCreateProject = ProjectService.createProject;
ProjectService.createProject = function(name, templateId) {
    const project = originalCreateProject.call(this, name, templateId);
    
    // Award XP for project creation
    ForgeMaster.recordProjectCreate('default-user');
    
    return project;
};

// Override project export to award XP
const originalExportProject = ProjectService.exportProject;
ProjectService.exportProject = async function(projectId) {
    const result = await originalExportProject.call(this, projectId);
    
    // Award XP for project export
    ForgeMaster.recordProjectExport('default-user');
    
    return result;
};
// Tutorial Navigation Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Tutorial category navigation is now handled by direct links to separate HTML files
    
    // Tutorial start buttons and back navigation are now handled in separate HTML files
});

// Tutorial category pages are now separate HTML files, so no special handling needed in showPage

// Update navigation highlighting for tutorial pages
const originalUpdateNavigation = updateNavigation;
updateNavigation = function(activePageId) {
    // Clear all active states
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Set active state based on page
    if (activePageId === 'landing') {
        document.getElementById('nav-landing')?.classList.add('active');
    } else if (activePageId === 'tutorial-hub' || activePageId.includes('tutorials')) {
        document.getElementById('nav-tutorial-hub')?.classList.add('active');
    } else if (activePageId === 'editor') {
        document.getElementById('nav-editor')?.classList.add('active');
    }
    
    // Update mobile nav if it exists
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    if (activePageId === 'landing') {
        document.querySelector('.mobile-nav-link[href="index.html"]')?.classList.add('active');
    } else if (activePageId === 'tutorial-hub' || activePageId.includes('tutorials')) {
        document.querySelector('.mobile-nav-link[href="index.html?page=tutorials"]')?.classList.add('active');
    } else if (activePageId === 'editor') {
        document.querySelector('.mobile-nav-link[href="editor.html"]')?.classList.add('active');
    }
};