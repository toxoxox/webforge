/**
 * Asset Service - Handles image and asset uploads
 */

const AssetService = {
    /**
     * Upload an asset file and convert to base64
     * @param {File} file - The file to upload
     * @param {string} projectId - The project ID
     * @returns {Promise<Object>} - The created asset file
     */
    async uploadAsset(file, projectId) {
        return new Promise((resolve, reject) => {
            // Validate file
            if (!file) {
                reject(new Error('No file provided'));
                return;
            }

            // Check file size (limit to 5MB)
            const maxSize = 5 * 1024 * 1024; // 5MB
            if (file.size > maxSize) {
                reject(new Error('File too large. Maximum size is 5MB'));
                return;
            }

            // Validate file type
            const allowedTypes = [
                'image/jpeg', 'image/jpg', 'image/png', 'image/gif', 
                'image/svg+xml', 'image/webp', 'image/bmp',
                'font/woff', 'font/woff2', 'font/ttf', 'font/otf',
                'application/font-woff', 'application/font-woff2'
            ];

            if (!allowedTypes.includes(file.type)) {
                reject(new Error('Unsupported file type. Supported: images (jpg, png, gif, svg, webp) and fonts (woff, woff2, ttf, otf)'));
                return;
            }

            // Read file as base64
            const reader = new FileReader();
            
            reader.onload = (e) => {
                try {
                    const base64Content = e.target.result;
                    const assetFile = createProjectFile(
                        projectId,
                        file.name,
                        FileType.ASSET,
                        base64Content
                    );
                    
                    // Add metadata
                    assetFile.mimeType = file.type;
                    assetFile.size = file.size;
                    
                    resolve(assetFile);
                } catch (error) {
                    reject(error);
                }
            };

            reader.onerror = () => {
                reject(new Error('Failed to read file'));
            };

            reader.readAsDataURL(file);
        });
    },

    /**
     * Get asset URL for use in HTML/CSS
     * @param {Object} assetFile - The asset file object
     * @returns {string} - Data URL for the asset
     */
    getAssetUrl(assetFile) {
        if (!assetFile || assetFile.type !== FileType.ASSET) {
            return '';
        }
        return assetFile.content;
    },

    /**
     * Generate HTML img tag for an asset
     * @param {Object} assetFile - The asset file object
     * @param {string} alt - Alt text for the image
     * @returns {string} - HTML img tag
     */
    generateImgTag(assetFile, alt = '') {
        const url = this.getAssetUrl(assetFile);
        return `<img src="${url}" alt="${alt || assetFile.name}">`;
    },

    /**
     * Generate CSS background-image for an asset
     * @param {Object} assetFile - The asset file object
     * @returns {string} - CSS background-image property
     */
    generateCssBackground(assetFile) {
        const url = this.getAssetUrl(assetFile);
        return `background-image: url('${url}');`;
    },

    /**
     * Check if file is an image
     * @param {Object} assetFile - The asset file object
     * @returns {boolean}
     */
    isImage(assetFile) {
        if (!assetFile || !assetFile.mimeType) return false;
        return assetFile.mimeType.startsWith('image/');
    },

    /**
     * Check if file is a font
     * @param {Object} assetFile - The asset file object
     * @returns {boolean}
     */
    isFont(assetFile) {
        if (!assetFile || !assetFile.mimeType) return false;
        return assetFile.mimeType.includes('font') || 
               assetFile.name.match(/\.(woff|woff2|ttf|otf)$/i);
    },

    /**
     * Format file size for display
     * @param {number} bytes - File size in bytes
     * @returns {string} - Formatted size
     */
    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    }
};
