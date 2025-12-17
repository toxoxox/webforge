# Requirements Document

## Introduction

This document specifies the requirements for transforming WebForge from a traditional code editor into a guided tutorial-based learning platform inspired by CodeDex. The platform will teach web development through component-based tutorials where students build real website parts (navbar, footer, hero sections, cards, forms, layouts) using step-by-step instructions with immediate visual feedback.

## Glossary

- **Platform**: The WebForge guided tutorial learning system
- **Student**: A beginner learning web development through the platform
- **Tutorial**: A component-based lesson teaching how to build a specific website element
- **Step**: An individual instruction within a tutorial with a specific coding task
- **Level**: A single step within a tutorial (used interchangeably with step)
- **Component**: A website element being built (navbar, footer, hero section, card, form, etc.)
- **Code Snippet**: A small piece of code provided for the student to type or complete
- **Live Preview**: Real-time visual rendering of the student's code as they build
- **Reset**: Function to restore a step to its starting state if student gets stuck
- **Progress Tracker**: Visual indicator showing completion status of steps and tutorials

## Requirements

### Requirement 1

**User Story:** As a student, I want to learn web development by building real website components through guided tutorials, so that I can understand how each part works by doing rather than reading.

#### Acceptance Criteria

1. WHEN a student selects a tutorial, THE Platform SHALL display the tutorial broken into numbered steps with clear progress indication
2. WHEN a tutorial begins, THE Platform SHALL show the goal for the current step in one sentence or less
3. WHEN a step is displayed, THE Platform SHALL provide a small code snippet for the student to type manually
4. WHEN a student completes typing the code snippet, THE Platform SHALL update the live preview immediately
5. WHEN a step is completed, THE Platform SHALL advance to the next step automatically and show progress

### Requirement 2

**User Story:** As a student, I want to type code manually in small chunks rather than copy large blocks, so that I can learn through muscle memory and understand each line.

#### Acceptance Criteria

1. WHEN a step provides code, THE Platform SHALL present it as a small snippet of 1-10 lines maximum
2. WHEN code is provided, THE Platform SHALL clearly indicate where to type it with labels like "paste into &lt;body&gt;" or "add to styles.css"
3. WHEN a student types code, THE Platform SHALL highlight or focus the exact file and line location for editing
4. WHEN a student struggles, THE Platform SHALL provide an optional "Insert completed version" button as a fallback only
5. WHEN code is inserted automatically, THE Platform SHALL still require the student to understand what was added through brief explanation

### Requirement 3

**User Story:** As a student, I want immediate visual feedback when I write code, so that I can see the results of my work and understand the connection between code and output.

#### Acceptance Criteria

1. WHEN a student types HTML code, THE Platform SHALL update the live preview within 2 seconds
2. WHEN a student adds CSS styles, THE Platform SHALL show the visual changes immediately in the preview
3. WHEN a student adds JavaScript functionality, THE Platform SHALL demonstrate the interactive behavior in the preview
4. WHEN code contains errors, THE Platform SHALL show the preview with the last working state and display helpful error messages
5. WHEN a step is completed successfully, THE Platform SHALL highlight the visual change that was accomplished

### Requirement 4

**User Story:** As a student, I want to easily recover from mistakes or confusion, so that I can continue learning without getting stuck or frustrated.

#### Acceptance Criteria

1. WHEN a student clicks the reset button, THE Platform SHALL restore the current step to its starting state
2. WHEN a step is reset, THE Platform SHALL preserve progress on all previous steps
3. WHEN a student gets stuck, THE Platform SHALL provide hints or guidance without giving away the complete solution
4. WHEN a student uses the "Insert completed version" button, THE Platform SHALL explain what code was added and why
5. WHEN errors occur, THE Platform SHALL provide beginner-friendly explanations with suggestions for fixes

### Requirement 5

**User Story:** As a student, I want to see my progress through tutorials clearly, so that I can track my learning and feel motivated to continue.

#### Acceptance Criteria

1. WHEN a tutorial is active, THE Platform SHALL display a step counter showing current position like "2/6"
2. WHEN a step is completed, THE Platform SHALL mark it visually as complete with a checkmark or similar indicator
3. WHEN a tutorial is finished, THE Platform SHALL mark the entire tutorial as completed
4. WHEN a tutorial is completed, THE Platform SHALL suggest the next related tutorial to continue learning
5. WHEN viewing tutorial lists, THE Platform SHALL show completion status for each tutorial

### Requirement 6

**User Story:** As a student, I want to browse tutorials organized by what I want to build, so that I can find lessons relevant to my learning goals.

#### Acceptance Criteria

1. WHEN a student opens the tutorial browser, THE Platform SHALL display tutorials grouped by categories like Layout, Navigation, UI Components, Forms, and JavaScript Features
2. WHEN browsing tutorials, THE Platform SHALL show the component or feature that will be built in each tutorial
3. WHEN a tutorial is selected, THE Platform SHALL display a preview of the final result before starting
4. WHEN tutorials are listed, THE Platform SHALL indicate difficulty level and estimated completion time
5. WHEN a student completes a tutorial, THE Platform SHALL unlock related or more advanced tutorials

### Requirement 7

**User Story:** As a student, I want to practice tutorials within my own projects, so that I can apply what I learn to build my own websites.

#### Acceptance Criteria

1. WHEN a student starts a tutorial, THE Platform SHALL offer the option to practice in a dedicated tutorial space or within an existing project
2. WHEN practicing in an existing project, THE Platform SHALL guide the student to add the component to their project structure
3. WHEN a tutorial is completed in a project, THE Platform SHALL preserve the built component as part of the project
4. WHEN working in project mode, THE Platform SHALL maintain the tutorial guidance while respecting the project's existing code
5. WHEN switching between tutorial and project modes, THE Platform SHALL preserve progress and allow resuming

### Requirement 8

**User Story:** As a student, I want to download my completed projects and tutorial work, so that I can host my websites and show my progress to others.

#### Acceptance Criteria

1. WHEN a student completes tutorial work, THE Platform SHALL include the built components in their project files
2. WHEN a student exports a project, THE Platform SHALL generate a ZIP file containing all HTML, CSS, and JavaScript files with the completed components
3. WHEN exporting, THE Platform SHALL include a README file explaining what components were built and how to host the website
4. WHEN a project contains tutorial-built components, THE Platform SHALL organize the files in a logical structure for hosting
5. WHEN exporting tutorial work, THE Platform SHALL preserve all functionality and styling from the tutorial exercises

### Requirement 9

**User Story:** As a student, I want clear, beginner-friendly instructions without overwhelming text, so that I can focus on coding rather than reading long explanations.

#### Acceptance Criteria

1. WHEN a step is displayed, THE Platform SHALL limit the goal description to one sentence maximum
2. WHEN providing explanations, THE Platform SHALL use simple, non-technical language appropriate for beginners
3. WHEN showing code examples, THE Platform SHALL avoid long paragraphs and focus on brief, actionable instructions
4. WHEN errors occur, THE Platform SHALL provide concise, helpful error messages without technical jargon
5. WHEN a step includes explanation, THE Platform SHALL make it optional and brief, focusing on the "why" rather than lengthy theory

### Requirement 10

**User Story:** As a student, I want the tutorial interface to be clean and distraction-free, so that I can focus on learning without being overwhelmed by complex features.

#### Acceptance Criteria

1. WHEN the tutorial interface loads, THE Platform SHALL display a clean layout with large, readable text
2. WHEN tutorials are active, THE Platform SHALL minimize advanced features and focus on essential tutorial controls
3. WHEN displaying progress, THE Platform SHALL use clear visual indicators without cluttering the interface
4. WHEN showing code areas, THE Platform SHALL provide adequate spacing and contrast for easy reading
5. WHEN students interact with tutorials, THE Platform SHALL provide immediate visual feedback for all actions
