/**
 * Project Service - Handles project operations
 */

const ProjectService = {
    STORAGE_KEY: 'webforge_projects',
    CURRENT_PROJECT_KEY: 'webforge_current_project',

    /**
     * Create a new project with default files
     */
    createProject(name, templateId = null) {
        if (!isValidProjectName(name)) {
            throw new Error('Invalid project name');
        }

        const project = createProject(name);
        
        // Add default files if no template
        if (!templateId) {
            const defaultHTML = createProjectFile(
                project.id,
                'index.html',
                FileType.HTML,
                '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>My Website</title>\n    <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n    <h1>Hello World!</h1>\n    <script src="script.js"></script>\n</body>\n</html>'
            );
            
            const defaultCSS = createProjectFile(
                project.id,
                'styles.css',
                FileType.CSS,
                'body {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 20px;\n    background: #f0f0f0;\n}\n\nh1 {\n    color: #333;\n}'
            );
            
            const defaultJS = createProjectFile(
                project.id,
                'script.js',
                FileType.JAVASCRIPT,
                'console.log("Hello from JavaScript!");\n'
            );
            
            project.files = [defaultHTML, defaultCSS, defaultJS];
        }
        
        // Save project
        this.saveProject(project);
        
        return project;
    },

    /**
     * Get a project by ID
     */
    getProject(projectId) {
        const projects = this.listProjects();
        return projects.find(p => p.id === projectId);
    },

    /**
     * Delete a project
     */
    deleteProject(projectId) {
        const projects = this.listProjects();
        const filtered = projects.filter(p => p.id !== projectId);
        StorageService.save(this.STORAGE_KEY, filtered);
        return true;
    },

    /**
     * List all projects
     */
    listProjects() {
        return StorageService.load(this.STORAGE_KEY) || [];
    },

    /**
     * Save a project
     */
    saveProject(project) {
        project.updatedAt = new Date().toISOString();
        const projects = this.listProjects();
        const index = projects.findIndex(p => p.id === project.id);
        
        if (index !== -1) {
            projects[index] = project;
        } else {
            projects.push(project);
        }
        
        StorageService.save(this.STORAGE_KEY, projects);
        return project;
    },

    /**
     * Get current project
     */
    getCurrentProject() {
        const projectId = StorageService.load(this.CURRENT_PROJECT_KEY);
        return projectId ? this.getProject(projectId) : null;
    },

    /**
     * Set current project
     */
    setCurrentProject(projectId) {
        StorageService.save(this.CURRENT_PROJECT_KEY, projectId);
    },

    /**
     * Export project as ZIP
     */
    async exportProject(projectId) {
        const project = this.getProject(projectId);
        if (!project) {
            throw new Error('Project not found');
        }

        const zip = new JSZip();
        
        // Add all files to ZIP
        project.files.forEach(file => {
            zip.file(file.name, file.content);
        });
        
        // Add README
        const readme = `# ${project.name}\n\nCreated with WebForge\n\n## How to use\n\n1. Extract this ZIP file\n2. Open index.html in your web browser\n3. Or upload to a web hosting service\n\nEnjoy your website!`;
        zip.file('README.md', readme);
        
        // Generate ZIP
        const blob = await zip.generateAsync({ type: 'blob' });
        
        // Trigger download
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${project.name}.zip`;
        a.click();
        URL.revokeObjectURL(url);
        
        return blob;
    }
};
