/**
 * Template Service - Handles template operations
 */

const TemplateService = {
    /**
     * Get all available templates
     */
    listTemplates() {
        return [
            {
                id: 'portfolio',
                name: 'Portfolio',
                description: 'A simple portfolio website',
                category: TemplateCategory.PORTFOLIO,
                files: [
                    { name: 'index.html', type: FileType.HTML, content: this.getPortfolioHTML() },
                    { name: 'styles.css', type: FileType.CSS, content: this.getPortfolioCSS() },
                    { name: 'script.js', type: FileType.JAVASCRIPT, content: '// Add your JavaScript here\n' }
                ]
            },
            {
                id: 'blog',
                name: 'Blog',
                description: 'A simple blog layout',
                category: TemplateCategory.BLOG,
                files: [
                    { name: 'index.html', type: FileType.HTML, content: this.getBlogHTML() },
                    { name: 'styles.css', type: FileType.CSS, content: this.getBlogCSS() },
                    { name: 'script.js', type: FileType.JAVASCRIPT, content: '// Add your JavaScript here\n' }
                ]
            }
        ];
    },

    /**
     * Get a template by ID
     */
    getTemplate(templateId) {
        return this.listTemplates().find(t => t.id === templateId);
    },

    /**
     * Apply template to project
     */
    applyTemplate(project, templateId) {
        const template = this.getTemplate(templateId);
        if (!template) {
            throw new Error('Template not found');
        }

        // Keep non-conflicting files
        const templateFileNames = template.files.map(f => f.name);
        const existingFiles = project.files.filter(f => !templateFileNames.includes(f.name));

        // Add template files
        const newFiles = template.files.map(tf => 
            createProjectFile(project.id, tf.name, tf.type, tf.content)
        );

        project.files = [...existingFiles, ...newFiles];
        project.updatedAt = new Date().toISOString();

        return project;
    },

    getPortfolioHTML() {
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>John Doe</h1>
        <p>Web Developer</p>
    </header>
    <main>
        <section>
            <h2>About Me</h2>
            <p>I'm a passionate web developer...</p>
        </section>
        <section>
            <h2>Projects</h2>
            <div class="project">
                <h3>Project 1</h3>
                <p>Description of project 1</p>
            </div>
        </section>
    </main>
    <script src="script.js"></script>
</body>
</html>`;
    },

    getPortfolioCSS() {
        return `body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
}

header {
    background: #333;
    color: white;
    text-align: center;
    padding: 2rem;
}

main {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
}

section {
    margin-bottom: 2rem;
}

.project {
    border: 1px solid #ddd;
    padding: 1rem;
    margin-bottom: 1rem;
}`;
    },

    getBlogHTML() {
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Blog</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>My Blog</h1>
    </header>
    <main>
        <article>
            <h2>First Blog Post</h2>
            <p class="date">January 1, 2024</p>
            <p>This is my first blog post...</p>
        </article>
    </main>
    <script src="script.js"></script>
</body>
</html>`;
    },

    getBlogCSS() {
        return `body {
    font-family: Georgia, serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
}

header {
    background: white;
    padding: 2rem;
    text-align: center;
    border-bottom: 2px solid #333;
}

main {
    max-width: 700px;
    margin: 2rem auto;
    padding: 0 1rem;
}

article {
    background: white;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.date {
    color: #666;
    font-size: 0.9rem;
}`;
    }
};
