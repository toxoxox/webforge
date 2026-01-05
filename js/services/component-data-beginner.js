const BeginnerComponentData = {
  "components": [
    {
      "id": "responsive-navbar",
      "name": "Navigation Bar with Dropdown",
      "type": "navigation",
      "difficulty": "beginner",
      "hasJS": false,
      "mobileFirst": false,
      "tags": ["Beginner-Friendly", "Flexbox", "CSS-Only"],
      "description": "Build a professional navigation bar with logo, styled links, and dropdown menus.",
      "preview": "<div>Navbar Preview</div>",
      "workshop": {
        "goal": "Build a professional navigation bar",
        "duration": "30 minutes",
        "learningObjectives": ["HTML structure", "CSS styling"],
        "steps": [
          {
            "title": "Create Navbar",
            "description": "Create the navbar structure",
            "instruction": "Add navbar HTML",
            "code": "<nav class=\"navbar\"></nav>",
            "codeFile": "index.html",
            "tip": "Use semantic HTML",
            "explanation": "This creates a navbar",
            "validation": { "required": [] }
          }
        ]
      }
    }
  ]
};

if (typeof module !== "undefined" && module.exports) { 
  module.exports = BeginnerComponentData; 
}