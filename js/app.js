/**
 * Main Application
 */

let currentProject = null;
let currentFile = null;
let editor = null;
let autoSaveTimeout = null;

// Initialize Monaco Editor
require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' } });

require(['vs/editor/editor.main'], function () {
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
            
            // Auto-save with debounce
            clearTimeout(autoSaveTimeout);
            autoSaveTimeout = setTimeout(() => {
                ProjectService.saveProject(currentProject);
                updatePreview();
                showSaveIndicator();
            }, 1000);
        }
    });

    // Add keyboard shortcut for formatting (Ctrl+Shift+F)
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyF, () => {
        document.getElementById('format-btn').click();
    });

    // Load last project or show welcome
    loadInitialState();
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

function loadInitialState() {
    const projects = ProjectService.listProjects();
    renderProjectsList(projects);

    if (projects.length > 0) {
        const lastProject = ProjectService.getCurrentProject() || projects[0];
        loadProject(lastProject.id);
    }
    
    // Show welcome screen for first-time users
    const hasSeenWelcome = localStorage.getItem('webforge-welcome-seen');
    if (!hasSeenWelcome) {
        showWelcomeScreen();
    }
    
    // Initialize icons after DOM is ready
    setTimeout(initIcons, 100);
}

// Welcome Screen
function showWelcomeScreen() {
    const welcomeScreen = document.getElementById('welcome-screen');
    welcomeScreen.classList.remove('hidden');
    initIcons();
}

function hideWelcomeScreen() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const dontShow = document.getElementById('welcome-dont-show').checked;
    
    if (dontShow) {
        localStorage.setItem('webforge-welcome-seen', 'true');
    }
    
    welcomeScreen.classList.add('hidden');
}

document.getElementById('welcome-start-btn').onclick = () => {
    hideWelcomeScreen();
    
    // If no projects, show new project modal
    const projects = ProjectService.listProjects();
    if (projects.length === 0) {
        setTimeout(() => showModal('new-project-modal'), 300);
    }
};

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

// Event Listeners
document.getElementById('new-project-btn').onclick = () => {
    showModal('new-project-modal');
};

document.getElementById('create-blank-btn').onclick = () => {
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

document.getElementById('choose-template-btn').onclick = () => {
    hideModal('new-project-modal');
    showTemplateModal();
};

document.getElementById('save-btn').onclick = () => {
    if (currentProject) {
        ProjectService.saveProject(currentProject);
        showSaveIndicator();
    }
};

document.getElementById('export-btn').onclick = async () => {
    if (currentProject) {
        try {
            await ProjectService.exportProject(currentProject.id);
            showToast('Project exported successfully!', 'success', 'Export Complete');
        } catch (e) {
            showToast(e.message, 'error', 'Export Failed');
        }
    }
};

document.getElementById('import-btn').onclick = () => {
    document.getElementById('import-file-input').click();
};

document.getElementById('import-file-input').onchange = async (e) => {
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

document.getElementById('help-btn').onclick = () => {
    showModal('shortcuts-modal');
};

document.getElementById('tutorials-btn').onclick = () => {
    showTutorialModal();
};

document.getElementById('collaborate-btn').onclick = () => {
    showCollaborationModal();
};

document.getElementById('console-toggle-btn').onclick = () => {
    toggleConsole();
};

document.getElementById('console-clear-btn').onclick = () => {
    clearConsole();
};

document.getElementById('console-close-btn').onclick = () => {
    toggleConsole();
};

document.getElementById('theme-toggle-btn').onclick = () => {
    toggleTheme();
};

// Device preview buttons
document.querySelectorAll('.device-btn').forEach(btn => {
    btn.onclick = () => {
        setPreviewWidth(btn.dataset.width);
        
        // Update active state
        document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    };
});

// Fullscreen preview button
document.getElementById('preview-fullscreen-btn').onclick = () => {
    togglePreviewFullscreen();
};

document.getElementById('snippets-btn').onclick = () => {
    showSnippetsModal();
};

document.getElementById('new-file-btn').onclick = () => {
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

document.getElementById('create-file-btn').onclick = () => {
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

// Allow Enter key to create file
document.getElementById('file-name-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('create-file-btn').click();
    }
});

document.getElementById('upload-asset-btn').onclick = () => {
    if (!currentProject) {
        showToast('Please create or select a project first', 'warning');
        return;
    }
    document.getElementById('asset-file-input').click();
};

document.getElementById('asset-file-input').onchange = async (e) => {
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

function showTutorialModal() {
    const tutorials = TutorialService.listTutorials();
    const list = document.getElementById('tutorials-list');
    list.innerHTML = '';

    tutorials.forEach(tutorial => {
        const item = document.createElement('div');
        item.style.cssText = 'padding: 1rem; margin: 0.5rem 0; background: #f5f5f5; border-radius: 4px; cursor: pointer;';
        item.innerHTML = `<h3>${tutorial.title}</h3><p style="color: #666; font-size: 0.9rem;">${tutorial.steps.length} steps</p>`;
        item.onclick = () => {
            alert(`Tutorial: ${tutorial.title}\n\n${tutorial.steps[0].content}\n\nCode example:\n${tutorial.steps[0].codeExample || 'No example'}`);
        };
        list.appendChild(item);
    });

    showModal('tutorial-modal');
}

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

// Snippets modal event listeners
document.getElementById('snippet-search').addEventListener('input', (e) => {
    const searchQuery = e.target.value;
    const activeFilter = document.querySelector('.filter-btn.active');
    const language = activeFilter ? activeFilter.dataset.lang : 'all';
    renderSnippets(language, searchQuery);
});

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

document.getElementById('modal-overlay').onclick = () => {
    document.querySelectorAll('.modal').forEach(modal => {
        hideModal(modal.id);
    });
};

// Accessibility Checker
document.getElementById('a11y-toggle-btn').onclick = () => {
    const panel = document.getElementById('a11y-panel');
    if (panel.classList.contains('hidden')) {
        panel.classList.remove('hidden');
        runAccessibilityCheck();
    } else {
        panel.classList.add('hidden');
    }
};

document.getElementById('a11y-close-btn').onclick = () => {
    document.getElementById('a11y-panel').classList.add('hidden');
};

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

document.getElementById('start-collab-btn').onclick = async () => {
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

document.getElementById('join-collab-btn').onclick = async () => {
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

document.getElementById('copy-link-btn').onclick = () => {
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

document.getElementById('leave-session-btn').onclick = async () => {
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
    if (!navigator.onLine) {
        offlineBanner.classList.remove('hidden');
    } else {
        offlineBanner.classList.add('hidden');
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
        togglePreviewFullscreen();
    }
    
    // Ctrl+? or Ctrl+/ to show shortcuts
    if ((e.ctrlKey || e.metaKey) && (e.key === '?' || e.key === '/')) {
        if (!e.shiftKey) {
            e.preventDefault();
            showModal('shortcuts-modal');
        }
    }
});
