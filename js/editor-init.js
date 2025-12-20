// Editor Initialization Script
// Handles Monaco Editor setup and workshop mode

// Direct editor initialization
if (typeof currentPage !== 'undefined') {
    currentPage = 'editor';
}

// Initialize Monaco Editor immediately for direct editor access
require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' } });
require(['vs/editor/editor.main'], function () {
    console.log('Monaco loaded in editor-init.js');
    
    // Create the Monaco editor instance
    if (typeof editor === 'undefined' || editor === null) {
        console.log('Creating Monaco editor instance...');
        const editorContainer = document.getElementById('editor');
        if (editorContainer) {
            window.editor = monaco.editor.create(editorContainer, {
                value: '',
                language: 'html',
                theme: 'vs-dark',
                automaticLayout: true,
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                roundedSelection: false,
                scrollBeyondLastLine: false,
                readOnly: false,
                wordWrap: 'on'
            });
            
            // Make editor globally accessible
            if (typeof window.editor !== 'undefined') {
                editor = window.editor;
            }
            
            // Set up auto-save on content change
            window.editor.onDidChangeModelContent(() => {
                if (typeof autoSaveTimeout !== 'undefined' && autoSaveTimeout) {
                    clearTimeout(autoSaveTimeout);
                }
                
                if (typeof window.autoSaveTimeout !== 'undefined') {
                    window.autoSaveTimeout = setTimeout(() => {
                        if (typeof currentFile !== 'undefined' && currentFile && typeof currentProject !== 'undefined' && currentProject) {
                            const content = window.editor.getValue();
                            if (typeof FileService !== 'undefined') {
                                FileService.updateFile(currentFile.id, currentProject, { content });
                                if (typeof ProjectService !== 'undefined') {
                                    ProjectService.saveProject(currentProject);
                                }
                                if (typeof updatePreview === 'function') {
                                    updatePreview();
                                }
                            }
                        }
                    }, 2000);
                }
            });
            
            console.log('Monaco editor created:', !!editor);
        } else {
            console.error('Editor container not found!');
        }
    }
    
    // Wait for app.js to fully load
    const initEditor = () => {
        // Check if required functions are available
        if (typeof ProjectService === 'undefined' || typeof renderProjectsList === 'undefined') {
            console.log('Waiting for app.js functions...');
            setTimeout(initEditor, 100);
            return;
        }
        
        console.log('App.js loaded, initializing editor...');
        
        // Load projects after Monaco is initialized
        setTimeout(() => {
            try {
                const projects = ProjectService.listProjects();
                console.log('Projects found:', projects.length);
                renderProjectsList(projects);

                // Check for workshop mode
                const urlParams = new URLSearchParams(window.location.search);
                const mode = urlParams.get('mode');
                const componentId = urlParams.get('component');
                
                if (mode === 'workshop' && componentId) {
                    // Initialize workshop mode
                    initWorkshopMode(componentId);
                } else {
                    // Normal editor mode
                    if (projects.length > 0) {
                        const lastProject = ProjectService.getCurrentProject() || projects[0];
                        loadProject(lastProject.id);
                    }
                    
                    // Show welcome screen for first-time users
                    const hasSeenWelcome = localStorage.getItem('webforge-welcome-seen');
                    if (!hasSeenWelcome) {
                        if (typeof showWelcomeScreen === 'function') {
                            showWelcomeScreen();
                        }
                    } else {
                        // Try to restore tutorial state for returning users
                        if (typeof restoreTutorialState === 'function') {
                            restoreTutorialState();
                        }
                    }
                }
                
                // Initialize icons
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            } catch (error) {
                console.error('Error during editor initialization:', error);
                // Don't let errors break the editor - just show it empty
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }
        }, 100);
    };
    
    // Initialize workshop mode
    function initWorkshopMode(componentId) {
        console.log('Initializing workshop mode for component:', componentId);
        
        // Get workshop data from localStorage
        const workshopData = localStorage.getItem('webforge-workshop-start');
        if (workshopData) {
            try {
                const workshop = JSON.parse(workshopData);
                console.log('Workshop data loaded:', workshop);
                
                // Create or load workshop project
                const workshopProject = createWorkshopProject(workshop);
                loadProject(workshopProject.id);
                
                // Show workshop guidance
                showWorkshopGuidance(workshop);
                
                // Clear the workshop start data
                localStorage.removeItem('webforge-workshop-start');
                
            } catch (error) {
                console.error('Error loading workshop data:', error);
                // Fallback to normal mode
                initNormalMode();
            }
        } else {
            console.warn('No workshop data found, falling back to normal mode');
            initNormalMode();
        }
    }
    
    // Create a workshop project
    function createWorkshopProject(workshop) {
        const projectName = 'Workshop - ' + workshop.name;
        const project = ProjectService.createProject(projectName, 'workshop');
        
        // Add starter files using the factory function
        const htmlFile = createProjectFile(project.id, 'index.html', FileType.HTML, getWorkshopStarterHTML(workshop));
        const cssFile = createProjectFile(project.id, 'styles.css', FileType.CSS, getWorkshopStarterCSS(workshop));
        const jsFile = createProjectFile(project.id, 'script.js', FileType.JAVASCRIPT, getWorkshopStarterJS(workshop));
        
        project.files = [htmlFile, cssFile, jsFile];
        ProjectService.saveProject(project);
        
        return project;
    }
    
    // Get starter HTML for workshop
    function getWorkshopStarterHTML(workshop) {
        return '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Workshop: ' + workshop.name + '</title>\n</head>\n<body>\n    <!-- Start building your ' + workshop.name.toLowerCase() + ' here -->\n    \n</body>\n</html>';
    }
    
    // Get starter CSS for workshop
    function getWorkshopStarterCSS(workshop) {
        return '/* Workshop: ' + workshop.name + ' */\n/* Follow the step-by-step guide to build your component */\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;\n    line-height: 1.6;\n}\n\n/* Add your styles here */\n';
    }
    
    // Get starter JavaScript for workshop
    function getWorkshopStarterJS(workshop) {
        return '// Workshop: ' + workshop.name + '\n// Add your JavaScript functionality here\n\ndocument.addEventListener("DOMContentLoaded", function() {\n    // Your code goes here\n});';
    }
    
    // Show workshop guidance
    function showWorkshopGuidance(workshop) {
        console.log('Showing workshop guidance for:', workshop.name);
        
        // Create workshop panel
        const workshopPanel = document.createElement('div');
        workshopPanel.id = 'workshop-panel';
        workshopPanel.className = 'workshop-panel';
        
        const panelHTML = '<div class="workshop-header"><h3>Workshop: ' + workshop.name + '</h3><p>' + (workshop.workshop ? workshop.workshop.goal : 'Follow the steps to build this component') + '</p></div><div class="workshop-steps"><p>Workshop guidance will be implemented here.</p><p>For now, use the editor to start building your component.</p></div>';
        workshopPanel.innerHTML = panelHTML;
        
        // Add to page
        document.body.appendChild(workshopPanel);
        
        // Add basic styling
        const style = document.createElement('style');
        const styleCSS = '.workshop-panel { position: fixed; top: 80px; right: 20px; width: 300px; background: white; border: 1px solid #ddd; border-radius: 8px; padding: 1rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1); z-index: 1000; } .workshop-header h3 { margin-bottom: 0.5rem; color: #333; } .workshop-header p { color: #666; font-size: 0.9rem; margin-bottom: 1rem; } .workshop-steps { color: #555; font-size: 0.9rem; }';
        style.textContent = styleCSS;
        document.head.appendChild(style);
    }
    
    // Initialize normal editor mode
    function initNormalMode() {
        const projects = ProjectService.listProjects();
        if (projects.length > 0) {
            const lastProject = ProjectService.getCurrentProject() || projects[0];
            loadProject(lastProject.id);
        }
        
        // Show welcome screen for first-time users
        const hasSeenWelcome = localStorage.getItem('webforge-welcome-seen');
        if (!hasSeenWelcome && typeof showWelcomeScreen === 'function') {
            showWelcomeScreen();
        } else {
            // Try to restore tutorial state for returning users
            if (typeof restoreTutorialState === 'function') {
                restoreTutorialState();
            }
        }
    }
    
    initEditor();
});
