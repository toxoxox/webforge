// Component Loader - Loads navbar and footer components
const ComponentLoader = {
    // Load navbar component
    async loadNavbar() {
        try {
            const response = await fetch('component-navbar.html');
            const html = await response.text();
            const navbarContainer = document.getElementById('navbar-container');
            if (navbarContainer) {
                navbarContainer.innerHTML = html;
                
                // Set active nav link based on current page
                this.setActiveNavLink();
                
                // Initialize scroll detection for navbar background
                this.initScrollDetection();
                
                // Initialize icons after loading
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }
        } catch (error) {
            console.error('Error loading navbar:', error);
        }
    },

    // Initialize scroll detection for navbar background
    initScrollDetection() {
        const navbar = document.querySelector('.main-nav');
        if (!navbar) return;

        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Don't check initial scroll position - let navbar start transparent
        // Only add scrolled class when user actually scrolls
    },

    // Load footer component
    async loadFooter() {
        try {
            const response = await fetch('component-footer.html');
            const html = await response.text();
            const footerContainer = document.getElementById('footer-container');
            if (footerContainer) {
                footerContainer.innerHTML = html;
                
                // Initialize icons after loading
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }
        } catch (error) {
            console.error('Error loading footer:', error);
        }
    },

    // Set active navigation link based on current page
    setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const urlParams = new URLSearchParams(window.location.search);
        const pageParam = urlParams.get('page');
        
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Set active class based on current page
        if (currentPage === 'index.html' && !pageParam) {
            // Home page
            document.getElementById('nav-landing')?.classList.add('active');
            document.querySelector('.mobile-nav-link[href="index.html"]')?.classList.add('active');
        } else if (currentPage === 'index.html' && pageParam === 'tutorials') {
            // Tutorial hub
            document.getElementById('nav-tutorial-hub')?.classList.add('active');
            document.querySelector('.mobile-nav-link[href="index.html?page=tutorials"]')?.classList.add('active');
        } else if (currentPage === 'components.html') {
            // Components page
            document.getElementById('nav-components')?.classList.add('active');
            document.querySelector('.mobile-nav-link[href="components.html"]')?.classList.add('active');
        } else if (currentPage === 'editor.html') {
            // Editor page
            document.getElementById('nav-editor')?.classList.add('active');
            document.querySelector('.mobile-nav-link[href="editor.html"]')?.classList.add('active');
        }
    },

    // Load all components
    async loadAll() {
        await Promise.all([
            this.loadNavbar(),
            this.loadFooter()
        ]);
    }
};

// Auto-load components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    ComponentLoader.loadAll();
});