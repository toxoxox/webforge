/**
 * Tutorial Service - Handles tutorial operations
 */

const TutorialService = {
    /**
     * Get all tutorials
     */
    listTutorials() {
        return [
            {
                id: 'html-basics',
                title: 'HTML Basics',
                topic: TutorialTopic.HTML_BASICS,
                steps: [
                    {
                        id: '1',
                        title: 'What is HTML?',
                        content: 'HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages.',
                        codeExample: '<!DOCTYPE html>\n<html>\n<head>\n    <title>My Page</title>\n</head>\n<body>\n    <h1>Hello World!</h1>\n</body>\n</html>',
                        completed: false
                    },
                    {
                        id: '2',
                        title: 'HTML Elements',
                        content: 'HTML elements are the building blocks of HTML pages. They are represented by tags.',
                        codeExample: '<h1>This is a heading</h1>\n<p>This is a paragraph</p>\n<a href="#">This is a link</a>',
                        completed: false
                    }
                ]
            },
            {
                id: 'css-basics',
                title: 'CSS Styling',
                topic: TutorialTopic.CSS_STYLING,
                steps: [
                    {
                        id: '1',
                        title: 'What is CSS?',
                        content: 'CSS stands for Cascading Style Sheets. It describes how HTML elements should be displayed.',
                        codeExample: 'body {\n    background-color: lightblue;\n}\n\nh1 {\n    color: navy;\n    font-size: 24px;\n}',
                        completed: false
                    }
                ]
            },
            {
                id: 'js-basics',
                title: 'JavaScript Fundamentals',
                topic: TutorialTopic.JAVASCRIPT_FUNDAMENTALS,
                steps: [
                    {
                        id: '1',
                        title: 'What is JavaScript?',
                        content: 'JavaScript is a programming language that adds interactivity to websites.',
                        codeExample: 'console.log("Hello World!");\n\nfunction greet(name) {\n    alert("Hello, " + name + "!");\n}',
                        completed: false
                    }
                ]
            }
        ];
    },

    /**
     * Get tutorial by ID
     */
    getTutorial(tutorialId) {
        return this.listTutorials().find(t => t.id === tutorialId);
    }
};
