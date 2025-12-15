/**
 * Storage Service - Handles browser storage operations
 */

const StorageService = {
    /**
     * Save data to localStorage
     */
    save(key, data) {
        try {
            const serialized = JSON.stringify(data);
            localStorage.setItem(key, serialized);
            return true;
        } catch (e) {
            if (e.name === 'QuotaExceededError') {
                console.error('Storage quota exceeded');
                if (typeof showToast === 'function') {
                    showToast('Storage is full. Please delete some projects or export your work.', 'error', 'Storage Full');
                }
            }
            return false;
        }
    },

    /**
     * Load data from localStorage
     */
    load(key) {
        try {
            const serialized = localStorage.getItem(key);
            return serialized ? JSON.parse(serialized) : null;
        } catch (e) {
            console.error('Error loading from storage:', e);
            return null;
        }
    },

    /**
     * Delete data from localStorage
     */
    delete(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Error deleting from storage:', e);
            return false;
        }
    },

    /**
     * Clear all storage
     */
    clear() {
        try {
            localStorage.clear();
            return true;
        } catch (e) {
            console.error('Error clearing storage:', e);
            return false;
        }
    },

    /**
     * Get storage information
     */
    getStorageInfo() {
        try {
            let total = 0;
            for (let key in localStorage) {
                if (localStorage.hasOwnProperty(key)) {
                    total += localStorage[key].length + key.length;
                }
            }
            
            // Approximate 5MB limit for localStorage
            const limit = 5 * 1024 * 1024;
            
            return {
                used: total,
                available: limit - total,
                percentage: (total / limit) * 100
            };
        } catch (e) {
            return { used: 0, available: 0, percentage: 0 };
        }
    }
};
