/**
 * File Service - Handles file operations
 */

const FileService = {
    /**
     * Create a new file
     */
    createFile(projectId, name, type) {
        if (!isValidFileName(name)) {
            throw new Error('Invalid file name');
        }
        
        return createProjectFile(projectId, name, type, '');
    },

    /**
     * Read a file
     */
    readFile(fileId, project) {
        return project.files.find(f => f.id === fileId);
    },

    /**
     * Update file content
     */
    updateFile(fileId, content, project) {
        const file = project.files.find(f => f.id === fileId);
        if (file) {
            file.content = content;
            file.updatedAt = new Date().toISOString();
            return true;
        }
        return false;
    },

    /**
     * Delete a file
     */
    deleteFile(fileId, project) {
        const index = project.files.findIndex(f => f.id === fileId);
        if (index !== -1) {
            project.files.splice(index, 1);
            return true;
        }
        return false;
    },

    /**
     * Rename a file
     */
    renameFile(fileId, newName, project) {
        if (!isValidFileName(newName)) {
            throw new Error('Invalid file name');
        }
        
        const file = project.files.find(f => f.id === fileId);
        if (file) {
            file.name = newName;
            file.updatedAt = new Date().toISOString();
            return true;
        }
        return false;
    },

    /**
     * List all files in a project
     */
    listFiles(project) {
        return project.files;
    }
};
