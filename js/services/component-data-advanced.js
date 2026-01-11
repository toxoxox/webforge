/**
 * Advanced Component Data - Complex components for experienced developers
 * These components involve advanced JavaScript patterns, APIs, and complex interactions
 */

const AdvancedComponentData = {
    components: [
        // Advanced components will be added here as they are developed
        // Examples might include:
        // - Real-time chat components with WebSocket integration
        // - Data visualization components with D3.js or Chart.js
        // - Complex state management patterns with custom frameworks
        // - API integration components with authentication
        // - Advanced animation libraries and WebGL components
        // - Canvas-based interactive graphics and games
        // - Progressive Web App features (service workers, offline functionality)
        // - Advanced accessibility patterns and screen reader optimization
        // - Complex form wizards with multi-step validation
        // - Real-time collaborative editing features
        // - Advanced performance optimization techniques
        // - Custom component libraries and design systems
        
        // SALON WEBSITE - Advanced Components
        {
            id: 'booking-system',
            name: 'Real-time Booking System',
            type: 'forms',
            difficulty: 'advanced',
            hasJS: true,
            mobileFirst: true,
            tags: ['Real-time', 'Calendar', 'State-Management', 'API-Integration'],
            description: 'Complete booking system with real-time availability, calendar integration, and payment processing. Handles conflicts and sends confirmations.',
            preview: `<div class="component-preview-placeholder">
                <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 12px 32px rgba(0,0,0,0.1); max-width: 400px; margin: 1rem auto;">
                    <h3 style="margin: 0 0 1.5rem 0; color: #1f2937; font-size: 1.25rem;">Book Appointment</h3>
                    <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.5rem; margin-bottom: 1.5rem;">
                        <div style="text-align: center; padding: 0.5rem; background: #f3f4f6; border-radius: 8px; font-size: 0.75rem;">S</div>
                        <div style="text-align: center; padding: 0.5rem; background: #3b82f6; color: white; border-radius: 8px; font-size: 0.75rem;">15</div>
                        <div style="text-align: center; padding: 0.5rem; background: #f3f4f6; border-radius: 8px; font-size: 0.75rem;">16</div>
                        <div style="text-align: center; padding: 0.5rem; background: #f3f4f6; border-radius: 8px; font-size: 0.75rem;">17</div>
                        <div style="text-align: center; padding: 0.5rem; background: #f3f4f6; border-radius: 8px; font-size: 0.75rem;">18</div>
                        <div style="text-align: center; padding: 0.5rem; background: #f3f4f6; border-radius: 8px; font-size: 0.75rem;">19</div>
                        <div style="text-align: center; padding: 0.5rem; background: #f3f4f6; border-radius: 8px; font-size: 0.75rem;">20</div>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-bottom: 1.5rem;">
                        <button style="padding: 0.75rem; background: #10b981; color: white; border: none; border-radius: 8px; font-size: 0.75rem;">9:00 AM</button>
                        <button style="padding: 0.75rem; background: #f3f4f6; color: #6b7280; border: none; border-radius: 8px; font-size: 0.75rem;">10:00 AM</button>
                        <button style="padding: 0.75rem; background: #10b981; color: white; border: none; border-radius: 8px; font-size: 0.75rem;">11:00 AM</button>
                    </div>
                    <button style="width: 100%; padding: 1rem; background: #3b82f6; color: white; border: none; border-radius: 12px; font-weight: 600;">Confirm Booking</button>
                </div>
            </div>`,
            workshop: {
                comingSoon: true,
                goal: 'Build a complete real-time booking system with calendar and payments',
                duration: '120 minutes',
                steps: [
                    {
                        title: 'Create the Admin Panel Container',
                        description: 'Let\'s start by creating the main container for our pet management system. This will hold all our admin tools!',
                        instruction: 'Add this HTML structure to create the admin panel:',
                        code: `<div class="pet-admin-panel">
  <div class="admin-header">
    <div class="admin-icon">
      <span class="icon">⚙️</span>
    </div>
    <div class="admin-title">
      <h2>Pet Admin Panel</h2>
      <p>Add New Pet • Manage Listings</p>
    </div>
  </div>
</div>`,
                        codeFile: 'index.html',
                        tip: 'Admin panels should be clearly labeled so staff know they\'re in the management area!',
                        explanation: 'What this creates:\n• <div class="pet-admin-panel"> - Main container for the entire admin system\n• <div class="admin-header"> - Top section with title and icon\n• ⚙️ - Settings icon using Unicode emoji\n• <h2> and <p> - Clear title and subtitle for the admin area'
                    },
                    {
                        title: 'Add the Pet Information Form',
                        description: 'Now let\'s add the form where staff can enter all the pet details. We\'ll make it easy to fill out!',
                        instruction: 'Add this form structure inside the admin panel:',
                        code: `<div class="pet-form-container">
  <form class="pet-form" id="petForm">
    <div class="form-row">
      <div class="form-group">
        <label for="petName">Pet Name</label>
        <input type="text" id="petName" name="petName" placeholder="Buddy" required>
      </div>
      <div class="form-group">
        <label for="petAge">Age</label>
        <input type="text" id="petAge" name="petAge" placeholder="3 years" required>
      </div>
    </div>
  </form>
</div>`,
                        codeFile: 'index.html',
                        tip: 'Using placeholder text shows staff exactly what format to use!',
                        explanation: 'What this form does:\n• <form class="pet-form"> - Creates a form that can collect and submit data\n• <div class="form-row"> - Groups related fields in the same row\n• <label for="petName"> - Labels tell users what each field is for\n• required attribute - Makes sure important fields aren\'t left empty'
                    },
                    {
                        title: 'Add Photo Upload Section',
                        description: 'Every pet needs a photo! Let\'s add a drag-and-drop area where staff can easily upload pet pictures.',
                        instruction: 'Add this photo upload section to your form:',
                        code: `<div class="form-group photo-upload">
  <label>Pet Photo</label>
  <div class="upload-area" id="uploadArea">
    <div class="upload-icon">
      <span class="icon">📷</span>
    </div>
    <p>Click to upload photo or drag and drop</p>
    <input type="file" id="petPhoto" name="petPhoto" accept="image/*" hidden>
  </div>
</div>`,
                        codeFile: 'index.html',
                        tip: 'The accept="image/*" attribute only allows image files to be selected!',
                        explanation: 'What this upload area does:\n• <div class="upload-area"> - Creates a clickable area for file uploads\n• <input type="file"> - The actual file input (hidden for better design)\n• accept="image/*" - Only allows image files (jpg, png, etc.)\n• 📷 - Camera icon shows this is for photos'
                    },
                    {
                        title: 'Add Pet Type and Status Dropdowns',
                        description: 'Let\'s add dropdown menus so staff can select the pet type and adoption status easily.',
                        instruction: 'Add these dropdown selections to your form:',
                        code: `<div class="form-row">
  <div class="form-group">
    <label for="petType">Pet Type</label>
    <select id="petType" name="petType" required>
      <option value="">Select Type</option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="rabbit">Rabbit</option>
      <option value="bird">Bird</option>
    </select>
  </div>
  <div class="form-group">
    <label for="petStatus">Status</label>
    <select id="petStatus" name="petStatus" required>
      <option value="available">Available</option>
      <option value="pending">Pending</option>
      <option value="adopted">Adopted</option>
    </select>
  </div>
</div>`,
                        codeFile: 'index.html',
                        tip: 'Dropdowns prevent typos and ensure consistent data entry!',
                        explanation: 'What these dropdowns do:\n• <select> - Creates a dropdown menu with multiple options\n• <option value=""> - Empty option forces users to make a choice\n• value attributes - Store the actual data when form is submitted\n• Different pet types and statuses give flexibility for various animals'
                    },
                    {
                        title: 'Style the Admin Panel Container',
                        description: 'Now let\'s make our admin panel look professional with clean styling and proper spacing.',
                        instruction: 'Add these styles for the main admin panel:',
                        code: `.pet-admin-panel {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 16px;
  border: 2px solid #e2e8f0;
  max-width: 600px;
  margin: 2rem auto;
}

.admin-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}`,
                        codeFile: 'styles.css',
                        tip: 'Light backgrounds make admin panels feel clean and professional!',
                        explanation: 'What this styling does:\n• background: #f8fafc - Light gray background that\'s easy on the eyes\n• padding: 2rem - Adds space inside the panel\n• border-radius: 16px - Rounds the corners for a modern look\n• max-width: 600px - Keeps the panel from getting too wide on large screens'
                    },
                    {
                        title: 'Style the Header and Icon',
                        description: 'Let\'s make the header look professional with a nice icon and clear typography.',
                        instruction: 'Add these styles for the header elements:',
                        code: `.admin-icon {
  width: 50px;
  height: 50px;
  background: #3b82f6;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.admin-title h2 {
  margin: 0;
  color: #1e293b;
  font-size: 1.25rem;
}

.admin-title p {
  margin: 0;
  color: #64748b;
  font-size: 0.9rem;
}`,
                        codeFile: 'styles.css',
                        tip: 'Blue is often used for admin areas because it feels trustworthy and professional!',
                        explanation: 'What this styling creates:\n• Blue icon background that stands out\n• Flexbox centers the icon perfectly\n• Dark text for the title (good contrast)\n• Lighter text for the subtitle (visual hierarchy)\n• Proper font sizes that are easy to read'
                    },
                    {
                        title: 'Style the Form Layout',
                        description: 'Now let\'s style the form to make it easy to fill out with proper spacing and alignment.',
                        instruction: 'Add these form layout styles:',
                        code: `.pet-form-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}`,
                        codeFile: 'styles.css',
                        tip: 'Grid layout automatically makes forms look organized and professional!',
                        explanation: 'What this layout does:\n• White background makes the form stand out from the panel\n• Grid with 1fr 1fr creates two equal columns\n• gap: 1rem adds space between form fields\n• flex-direction: column stacks labels above inputs'
                    },
                    {
                        title: 'Style Form Labels and Inputs',
                        description: 'Let\'s make the form fields look clean and easy to use with proper styling.',
                        instruction: 'Add these styles for labels and inputs:',
                        code: `.form-group label {
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.form-group input,
.form-group select {
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: border-color 0.2s;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #3b82f6;
}`,
                        codeFile: 'styles.css',
                        tip: 'The focus state with blue border shows users which field they\'re currently using!',
                        explanation: 'What this styling does:\n• Bold labels make it clear what each field is for\n• Consistent padding makes all inputs the same size\n• Rounded corners match the modern design\n• Blue focus border provides visual feedback\n• Smooth transition makes interactions feel polished'
                    },
                    {
                        title: 'Style the Photo Upload Area',
                        description: 'Let\'s make the photo upload area look inviting and clearly show it\'s for uploading images.',
                        instruction: 'Add these styles for the upload area:',
                        code: `.photo-upload .upload-area {
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  background: #f9fafb;
  cursor: pointer;
  transition: all 0.2s;
}

.photo-upload .upload-area:hover {
  border-color: #3b82f6;
  background: #f0f9ff;
}

.upload-icon {
  width: 40px;
  height: 40px;
  background: #fbbf24;
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}`,
                        codeFile: 'styles.css',
                        tip: 'Dashed borders are a universal sign for "drop files here"!',
                        explanation: 'What this upload styling does:\n• Dashed border shows this is a drop zone\n• Light background makes it feel clickable\n• Hover effect gives feedback when mouse is over it\n• Yellow camera icon is friendly and recognizable\n• cursor: pointer shows this area is interactive'
                    },
                    {
                        title: 'Add Action Buttons',
                        description: 'Let\'s add buttons so staff can save the pet information and preview how it will look on the website.',
                        instruction: 'Add these action buttons after your form:',
                        code: `<div class="form-actions">
  <button type="submit" class="btn btn-primary" id="addPetBtn">
    <span class="icon">➕</span>
    Add Pet
  </button>
  <button type="button" class="btn btn-secondary" id="previewBtn">
    <span class="icon">👁️</span>
    Preview
  </button>
  <button type="button" class="btn btn-danger" id="clearBtn">
    <span class="icon">🗑️</span>
    Clear Form
  </button>
</div>`,
                        codeFile: 'index.html',
                        tip: 'Different button colors help users understand what each action does!',
                        explanation: 'What these buttons do:\n• Add Pet button (green) - Saves the new pet to the system\n• Preview button (blue) - Shows how the pet will appear on the website\n• Clear Form button (red) - Resets all fields to start over\n• Icons make buttons easier to understand at a glance'
                    },
                    {
                        title: 'Style the Action Buttons',
                        description: 'Now let\'s style the buttons to make them look professional and clearly show their different purposes.',
                        instruction: 'Add these button styles:',
                        code: `.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s;
}

.btn-primary {
  background: #10b981;
  color: white;
}

.btn-primary:hover {
  background: #059669;
}`,
                        codeFile: 'styles.css',
                        tip: 'Flexbox with gap makes buttons automatically space evenly!',
                        explanation: 'What this button styling does:\n• flex: 1 makes all buttons the same width\n• Gap adds consistent space between buttons\n• Different colors show button importance (green for main action)\n• Hover effects provide feedback when buttons are clicked\n• Icons and text are centered with flexbox'
                    },
                    {
                        title: 'Add Secondary Button Styles',
                        description: 'Let\'s complete the button styling with colors for the preview and clear buttons.',
                        instruction: 'Add these additional button styles:',
                        code: `.btn-secondary {
  background: #6366f1;
  color: white;
}

.btn-secondary:hover {
  background: #4f46e5;
}

.btn-danger {
  background: #ef4444;
  color: white;
}

.btn-danger:hover {
  background: #dc2626;
}

.btn:active {
  transform: translateY(1px);
}`,
                        codeFile: 'styles.css',
                        tip: 'The active state with translateY makes buttons feel like they\'re being pressed!',
                        explanation: 'What these button colors mean:\n• Green (primary) - Main action (Add Pet)\n• Blue (secondary) - Secondary action (Preview)\n• Red (danger) - Destructive action (Clear Form)\n• Hover states darken colors for feedback\n• Active state adds a "pressed" feeling'
                    },
                    {
                        title: 'Add Form Submission JavaScript',
                        description: 'Now let\'s add JavaScript to handle when staff submit the form and save pet information.',
                        instruction: 'Add this JavaScript to handle form submission:',
                        code: `const petForm = document.getElementById('petForm');
const addPetBtn = document.getElementById('addPetBtn');

petForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(petForm);
  const petData = {
    name: formData.get('petName'),
    age: formData.get('petAge'),
    type: formData.get('petType'),
    status: formData.get('petStatus'),
    photo: formData.get('petPhoto'),
    id: Date.now() // Simple ID generation
  };
  
  // Save to localStorage
  savePetData(petData);
});`,
                        codeFile: 'script.js',
                        tip: 'preventDefault() stops the form from refreshing the page when submitted!',
                        explanation: 'What this JavaScript does:\n• addEventListener listens for form submission\n• preventDefault stops the default form behavior\n• FormData collects all the form field values\n• We create a petData object with all the information\n• Date.now() creates a unique ID for each pet'
                    },
                    {
                        title: 'Add Data Storage Functions',
                        description: 'Let\'s create functions to save pet data and retrieve it later. This lets the admin panel remember all the pets!',
                        instruction: 'Add these data management functions:',
                        code: `function savePetData(petData) {
  // Get existing pets from localStorage
  let pets = JSON.parse(localStorage.getItem('pets')) || [];
  
  // Add new pet to the array
  pets.push(petData);
  
  // Save back to localStorage
  localStorage.setItem('pets', JSON.stringify(pets));
  
  // Show success message
  showSuccessMessage('Pet added successfully!');
  
  // Clear the form
  petForm.reset();
}

function showSuccessMessage(message) {
  alert(message); // Simple success notification
}`,
                        codeFile: 'script.js',
                        tip: 'localStorage keeps data even when the browser is closed and reopened!',
                        explanation: 'What these functions do:\n• localStorage.getItem gets saved pets from browser storage\n• JSON.parse converts stored text back to JavaScript objects\n• pets.push adds the new pet to our list\n• JSON.stringify converts objects to text for storage\n• petForm.reset clears all the form fields'
                    },
                    {
                        title: 'Add Photo Upload Handling',
                        description: 'Let\'s make the photo upload area work by adding click and drag-and-drop functionality.',
                        instruction: 'Add this JavaScript for photo uploads:',
                        code: `const uploadArea = document.getElementById('uploadArea');
const petPhotoInput = document.getElementById('petPhoto');

// Make upload area clickable
uploadArea.addEventListener('click', () => {
  petPhotoInput.click();
});

// Handle file selection
petPhotoInput.addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    // Show preview of selected image
    const reader = new FileReader();
    reader.onload = function(e) {
      uploadArea.innerHTML = \`
        <img src="\${e.target.result}" style="max-width: 100px; border-radius: 8px;">
        <p>Photo selected: \${file.name}</p>
      \`;
    };
    reader.readAsDataURL(file);
  }
});`,
                        codeFile: 'script.js',
                        tip: 'FileReader lets us show a preview of the image before uploading!',
                        explanation: 'What this photo handling does:\n• Click on upload area triggers the hidden file input\n• FileReader converts the image to a data URL\n• We show a preview of the selected image\n• The file name is displayed so staff know what they selected\n• Images are automatically resized to fit the preview area'
                    },
                    {
                        title: 'Add Preview Functionality',
                        description: 'Finally, let\'s add the preview feature so staff can see exactly how the pet will appear on the website.',
                        instruction: 'Add this preview functionality:',
                        code: `const previewBtn = document.getElementById('previewBtn');
const clearBtn = document.getElementById('clearBtn');

previewBtn.addEventListener('click', function() {
  const formData = new FormData(petForm);
  
  // Create preview HTML
  const previewHTML = \`
    <div class="pet-preview">
      <h3>Preview: How this will look on your website</h3>
      <div class="pet-card">
        <h4>\${formData.get('petName') || 'Pet Name'}</h4>
        <p>Age: \${formData.get('petAge') || 'Not specified'}</p>
        <p>Type: \${formData.get('petType') || 'Not specified'}</p>
        <p>Status: \${formData.get('petStatus') || 'Available'}</p>
      </div>
    </div>
  \`;
  
  // Show preview in a modal or new section
  document.body.insertAdjacentHTML('beforeend', previewHTML);
});

clearBtn.addEventListener('click', function() {
  petForm.reset();
  uploadArea.innerHTML = \`
    <div class="upload-icon"><span class="icon">📷</span></div>
    <p>Click to upload photo or drag and drop</p>
  \`;
});`,
                        codeFile: 'script.js',
                        tip: 'Preview functionality helps staff catch mistakes before publishing!',
                        explanation: 'What the preview system does:\n• Collects current form data without saving it\n• Creates HTML showing how the pet card will look\n• Displays it so staff can review before adding\n• Clear button resets everything back to empty\n• Staff can make changes and preview again if needed'
                    }
                ],
                learningObjectives: [
                    'Create advanced form handling with validation',
                    'Implement file upload functionality',
                    'Build CRUD operations for data management',
                    'Design admin authentication systems',
                    'Handle image processing and optimization',
                    'Create real-time preview systems',
                    'Implement data persistence with localStorage',
                    'Build responsive admin interfaces'
                ]
            },
            useCases: [
                { title: 'Salon Appointments', description: 'Hair, nail, and spa service bookings' },
                { title: 'Medical Offices', description: 'Doctor and dentist appointments' },
                { title: 'Fitness Studios', description: 'Personal training and class bookings' }
            ]
        },

        // GAMES WEBSITE - Advanced Components
        {
            id: 'game-database-explorer',
            name: 'Interactive Game Database',
            type: 'interactions',
            difficulty: 'advanced',
            hasJS: true,
            mobileFirst: true,
            tags: ['API-Integration', 'Search', 'Filtering', 'Data-Visualization'],
            description: 'Advanced game database with real-time search, complex filtering, and interactive data visualizations. Connects to gaming APIs.',
            preview: `<div class="component-preview-placeholder">
                <div style="background: #1f2937; color: white; padding: 2rem; border-radius: 16px; max-width: 450px; margin: 1rem auto;">
                    <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                        <input style="flex: 1; padding: 0.75rem; border: 1px solid #374151; background: #374151; color: white; border-radius: 8px;" placeholder="Search games...">
                        <button style="padding: 0.75rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 8px;">
                            <i data-lucide="search"></i>
                        </button>
                    </div>
                    <div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
                        <span style="padding: 0.25rem 0.75rem; background: #10b981; border-radius: 20px; font-size: 0.75rem;">Action</span>
                        <span style="padding: 0.25rem 0.75rem; background: #374151; border-radius: 20px; font-size: 0.75rem;">RPG</span>
                        <span style="padding: 0.25rem 0.75rem; background: #374151; border-radius: 20px; font-size: 0.75rem;">Strategy</span>
                    </div>
                    <div style="display: grid; gap: 1rem;">
                        <div style="display: flex; gap: 1rem; padding: 1rem; background: #374151; border-radius: 12px;">
                            <div style="width: 60px; height: 60px; background: #4f46e5; border-radius: 8px;"></div>
                            <div style="flex: 1;">
                                <h4 style="margin: 0 0 0.5rem 0; font-size: 1rem;">Super Adventure</h4>
                                <div style="display: flex; gap: 1rem; font-size: 0.75rem; color: #9ca3af;">
                                    <span>★ 4.8</span>
                                    <span>2023</span>
                                    <span>Action</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
            workshop: {
                comingSoon: true,
                goal: 'Create an advanced game database with API integration and complex search',
                duration: '180 minutes',
                steps: [
                    {
                        title: 'Set Up Lucide Icons Library',
                        description: 'Before we start building, let\'s add the Lucide icons library. This gives us beautiful, professional icons for our game database!',
                        instruction: 'Add these two lines to your HTML - the script tag goes in the <head> section, and the initialization goes at the end of <body>:',
                        code: `<!-- Add this in your <head> section -->
<script src="https://unpkg.com/lucide@latest"></script>

<!-- Add this at the end of your <body>, before closing </body> tag -->
<script>
  // Initialize Lucide icons - this makes all the icons appear
  lucide.createIcons();
</script>`,
                        codeFile: 'index.html',
                        tip: 'Lucide icons use data-lucide attributes. After adding new icons to your HTML, call lucide.createIcons() to render them!',
                        explanation: 'What this does:\n• Loads the Lucide icon library from a CDN (no download needed)\n• lucide.createIcons() scans your page for <i data-lucide="icon-name"> elements\n• It replaces them with actual SVG icons\n• You can call createIcons() again after adding new HTML with icons\n\nWe\'ll use icons like "gamepad-2", "search", "star", "heart", and more throughout this tutorial.'
                    },
                    {
                        title: 'Create the Database Container',
                        description: 'Now let\'s build the main container for our game database with a dark gaming theme!',
                        instruction: 'Add this HTML structure:',
                        code: `<div class="game-database">
  <div class="database-header">
    <div class="header-icon">
      <i data-lucide="gamepad-2"></i>
    </div>
    <div class="header-text">
      <h2>Game Database</h2>
      <p>Explore thousands of games</p>
    </div>
  </div>
</div>`,
                        codeFile: 'index.html',
                        tip: 'Dark themes are popular for gaming websites - they reduce eye strain during long sessions!',
                        explanation: 'What this creates:\\n• Main container with game-database class\\n• Header with gamepad icon using Lucide\\n• Title and subtitle for the database\\n• We\'ll add search and filters next'
                    },
                    {
                        title: 'Add Stats Summary Bar',
                        description: 'Let\'s add a stats bar showing how many games are in our database!',
                        instruction: 'Add this stats section after the header:',
                        code: `  <div class="stats-bar">
    <div class="stat">
      <span class="stat-number" id="totalGames">0</span>
      <span class="stat-label">Total Games</span>
    </div>
    <div class="stat">
      <span class="stat-number" id="genreCount">5</span>
      <span class="stat-label">Genres</span>
    </div>
    <div class="stat">
      <span class="stat-number" id="avgRating">4.5</span>
      <span class="stat-label">Avg Rating</span>
    </div>
  </div>`,
                        codeFile: 'index.html',
                        tip: 'Stats give users a quick overview of the database size and quality!',
                        explanation: 'What this adds:\\n• Three stat boxes showing database info\\n• IDs for updating with JavaScript later\\n• Labels explaining each number'
                    },
                    {
                        title: 'Add the Search Bar',
                        description: 'Now let\'s add a powerful search bar so users can find games quickly!',
                        instruction: 'Add this search section inside the database container:',
                        code: `  <div class="search-section">
    <div class="search-bar">
      <i data-lucide="search" class="search-icon"></i>
      <input type="text" id="gameSearch" placeholder="Search by title, genre, or year..." class="search-input">
      <button class="search-btn" aria-label="Search">
        Search
      </button>
    </div>
  </div>`,
                        codeFile: 'index.html',
                        tip: 'A search icon inside the input makes it instantly recognizable!',
                        explanation: 'What this adds:\\n• Search input with descriptive placeholder\\n• Icon inside the input field\\n• Search button for explicit searching\\n• aria-label for accessibility'
                    },
                    {
                        title: 'Add Sort Dropdown',
                        description: 'Let\'s add a dropdown so users can sort games by different criteria!',
                        instruction: 'Add this sort dropdown after the search bar:',
                        code: `  <div class="sort-section">
    <label for="sortSelect">Sort by:</label>
    <select id="sortSelect" class="sort-select">
      <option value="rating">Highest Rated</option>
      <option value="newest">Newest First</option>
      <option value="oldest">Oldest First</option>
      <option value="title">Title A-Z</option>
    </select>
  </div>`,
                        codeFile: 'index.html',
                        tip: 'Sorting options help users find exactly what they\'re looking for!',
                        explanation: 'What this adds:\\n• Label for accessibility\\n• Dropdown with common sort options\\n• Value attributes for JavaScript sorting'
                    },
                    {
                        title: 'Add Filter Tags',
                        description: 'Let\'s add genre filter tags so users can browse by category!',
                        instruction: 'Add these filter tags after the sort section:',
                        code: `  <div class="filter-section">
    <p class="filter-label">Filter by Genre:</p>
    <div class="filter-tags">
      <button class="filter-tag active" data-genre="all">
        <i data-lucide="layers"></i> All
      </button>
      <button class="filter-tag" data-genre="action">
        <i data-lucide="swords"></i> Action
      </button>
      <button class="filter-tag" data-genre="rpg">
        <i data-lucide="wand-2"></i> RPG
      </button>
      <button class="filter-tag" data-genre="strategy">
        <i data-lucide="brain"></i> Strategy
      </button>
      <button class="filter-tag" data-genre="sports">
        <i data-lucide="trophy"></i> Sports
      </button>
      <button class="filter-tag" data-genre="puzzle">
        <i data-lucide="puzzle"></i> Puzzle
      </button>
    </div>
  </div>`,
                        codeFile: 'index.html',
                        tip: 'Icons make filter tags more visually appealing and easier to scan!',
                        explanation: 'What this adds:\\n• Filter label for clarity\\n• Six genre filter buttons with icons\\n• data-genre attributes for JavaScript filtering\\n• "active" class shows current selection'
                    },
                    {
                        title: 'Add Results Count',
                        description: 'Let\'s show users how many games match their search/filter!',
                        instruction: 'Add this results indicator:',
                        code: `  <div class="results-info">
    <span id="resultsCount">Showing 0 games</span>
    <button class="clear-filters" id="clearFilters">
      <i data-lucide="x"></i> Clear Filters
    </button>
  </div>`,
                        codeFile: 'index.html',
                        tip: 'Showing result counts helps users know if they need to adjust their search!',
                        explanation: 'What this adds:\\n• Dynamic results count\\n• Clear filters button to reset\\n• Will be updated by JavaScript'
                    },
                    {
                        title: 'Add the Games Grid Container',
                        description: 'Now let\'s create the grid container for our game cards!',
                        instruction: 'Add this games grid section:',
                        code: `  <div class="games-grid" id="gamesGrid">
    <!-- Game cards will be inserted here by JavaScript -->
  </div>
  
  <div class="load-more-section">
    <button class="load-more-btn" id="loadMoreBtn">
      <i data-lucide="plus"></i> Load More Games
    </button>
  </div>`,
                        codeFile: 'index.html',
                        tip: 'Loading games in batches improves performance for large databases!',
                        explanation: 'What this creates:\\n• Empty grid container for game cards\\n• Cards will be added dynamically\\n• Load more button for pagination'
                    },
                    {
                        title: 'Create a Game Card Template',
                        description: 'Let\'s add a sample game card to see the structure!',
                        instruction: 'Add this sample card inside the games-grid:',
                        code: `    <article class="game-card" data-genre="action" data-year="2023" data-rating="4.8">
      <div class="game-image">
        <img src="https://picsum.photos/300/200?random=1" alt="Super Adventure">
        <span class="game-badge">New</span>
      </div>
      <div class="game-info">
        <div class="game-header">
          <h3 class="game-title">Super Adventure</h3>
          <button class="favorite-btn" aria-label="Add to favorites">
            <i data-lucide="heart"></i>
          </button>
        </div>
        <p class="game-description">An epic journey through mystical lands filled with danger and discovery.</p>
        <div class="game-meta">
          <span class="game-rating">
            <i data-lucide="star"></i> 4.8
          </span>
          <span class="game-year">2023</span>
          <span class="game-genre">Action</span>
        </div>
        <div class="game-actions">
          <button class="btn-primary">View Details</button>
          <button class="btn-secondary">Add to List</button>
        </div>
      </div>
    </article>`,
                        codeFile: 'index.html',
                        tip: 'Using <article> is semantic HTML - it tells browsers this is self-contained content!',
                        explanation: 'What this card includes:\\n• Image with badge overlay\\n• Title with favorite button\\n• Description text\\n• Rating, year, and genre meta\\n• Action buttons for interaction'
                    },
                    {
                        title: 'Style the Database Container',
                        description: 'Let\'s give our database a sleek dark gaming theme!',
                        instruction: 'Add this CSS:',
                        code: `.game-database {
  background: #1f2937;
  color: white;
  padding: 2rem;
  border-radius: 16px;
  max-width: 1000px;
  margin: 2rem auto;
}

.database-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.header-icon {
  width: 50px;
  height: 50px;
  background: #4f46e5;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-text h2 {
  margin: 0;
  font-size: 1.5rem;
}

.header-text p {
  margin: 0.25rem 0 0;
  color: #9ca3af;
  font-size: 0.9rem;
}`,
                        codeFile: 'styles.css',
                        tip: 'Dark backgrounds with light text create that gaming aesthetic!',
                        explanation: 'What this styling does:\\n• Dark gray background (#1f2937)\\n• Purple icon for gaming feel\\n• Flexbox header layout\\n• Subtle subtitle color'
                    },
                    {
                        title: 'Style the Stats Bar',
                        description: 'Let\'s make the stats bar look impressive!',
                        instruction: 'Add this CSS:',
                        code: `.stats-bar {
  display: flex;
  justify-content: space-around;
  background: #374151;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  color: #10b981;
}

.stat-label {
  font-size: 0.75rem;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}`,
                        codeFile: 'styles.css',
                        tip: 'Green numbers stand out and feel positive!',
                        explanation: 'What this does:\\n• Darker background for contrast\\n• Evenly spaced stats\\n• Large green numbers\\n• Small uppercase labels'
                    },
                    {
                        title: 'Style the Search Bar',
                        description: 'Let\'s make the search bar look modern and easy to use!',
                        instruction: 'Add this CSS:',
                        code: `.search-section {
  margin-bottom: 1rem;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #374151;
  padding: 0.5rem;
  border-radius: 12px;
}

.search-icon {
  padding: 0 0.5rem;
  color: #9ca3af;
}

.search-input {
  flex: 1;
  padding: 0.75rem;
  border: none;
  background: transparent;
  color: white;
  font-size: 1rem;
}

.search-input::placeholder {
  color: #6b7280;
}

.search-input:focus {
  outline: none;
}

.search-btn {
  padding: 0.75rem 1.5rem;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.search-btn:hover {
  background: #4338ca;
}`,
                        codeFile: 'styles.css',
                        tip: 'The contained search bar feels more polished than a plain input!',
                        explanation: 'What this does:\\n• Contained search bar design\\n• Icon inside the bar\\n• Purple accent button\\n• Smooth hover transition'
                    },
                    {
                        title: 'Style the Sort Dropdown',
                        description: 'Let\'s style the sort dropdown to match our theme!',
                        instruction: 'Add this CSS:',
                        code: `.sort-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.sort-section label {
  color: #9ca3af;
  font-size: 0.9rem;
}

.sort-select {
  padding: 0.5rem 1rem;
  background: #374151;
  color: white;
  border: 1px solid #4b5563;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
}

.sort-select:focus {
  outline: none;
  border-color: #4f46e5;
}`,
                        codeFile: 'styles.css',
                        tip: 'Custom styled selects look much better than browser defaults!',
                        explanation: 'What this does:\\n• Inline label and dropdown\\n• Dark themed select\\n• Purple focus border\\n• Consistent styling'
                    },
                    {
                        title: 'Style the Filter Tags',
                        description: 'Let\'s make the genre filters look like clickable pills with icons!',
                        instruction: 'Add this CSS:',
                        code: `.filter-section {
  margin-bottom: 1rem;
}

.filter-label {
  color: #9ca3af;
  font-size: 0.85rem;
  margin: 0 0 0.75rem;
}

.filter-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #374151;
  color: #9ca3af;
  border: none;
  border-radius: 20px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-tag:hover {
  background: #4b5563;
  color: white;
}

.filter-tag.active {
  background: #10b981;
  color: white;
}

.filter-tag i {
  width: 16px;
  height: 16px;
}`,
                        codeFile: 'styles.css',
                        tip: 'Icons make filters more scannable and visually interesting!',
                        explanation: 'What this does:\\n• Pill-shaped buttons\\n• Icons aligned with text\\n• Green active state\\n• Smooth hover transitions'
                    },
                    {
                        title: 'Style the Results Info',
                        description: 'Let\'s style the results count and clear button!',
                        instruction: 'Add this CSS:',
                        code: `.results-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #374151;
}

.results-info span {
  color: #9ca3af;
  font-size: 0.9rem;
}

.clear-filters {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  background: transparent;
  color: #ef4444;
  border: 1px solid #ef4444;
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s;
}

.clear-filters:hover {
  background: #ef4444;
  color: white;
}`,
                        codeFile: 'styles.css',
                        tip: 'Red for the clear button signals a destructive/reset action!',
                        explanation: 'What this does:\\n• Space between count and button\\n• Subtle border separator\\n• Red outlined clear button\\n• Fills on hover'
                    },
                    {
                        title: 'Style the Games Grid',
                        description: 'Let\'s create a responsive grid for our game cards!',
                        instruction: 'Add this CSS:',
                        code: `.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.game-card {
  background: #374151;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.game-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}`,
                        codeFile: 'styles.css',
                        tip: 'auto-fill with minmax creates a responsive grid automatically!',
                        explanation: 'What this does:\\n• Responsive grid layout\\n• Cards at least 280px wide\\n• Lift effect on hover\\n• Strong shadow for depth'
                    },
                    {
                        title: 'Style the Game Card Image',
                        description: 'Let\'s style the image area with the badge overlay!',
                        instruction: 'Add this CSS:',
                        code: `.game-image {
  position: relative;
  height: 160px;
  overflow: hidden;
}

.game-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.game-card:hover .game-image img {
  transform: scale(1.1);
}

.game-badge {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  background: #10b981;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
}`,
                        codeFile: 'styles.css',
                        tip: 'The zoom effect on hover makes cards feel interactive!',
                        explanation: 'What this does:\\n• Fixed height image area\\n• Image zooms on card hover\\n• Badge positioned in corner\\n• Green badge for "New" games'
                    },
                    {
                        title: 'Style the Game Info Section',
                        description: 'Let\'s style the game details area!',
                        instruction: 'Add this CSS:',
                        code: `.game-info {
  padding: 1rem;
}

.game-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.game-title {
  margin: 0;
  font-size: 1.1rem;
  color: white;
  flex: 1;
}

.favorite-btn {
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.3s;
}

.favorite-btn:hover {
  color: #ef4444;
}

.favorite-btn.active {
  color: #ef4444;
}

.game-description {
  margin: 0 0 0.75rem;
  font-size: 0.85rem;
  color: #9ca3af;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`,
                        codeFile: 'styles.css',
                        tip: 'The line-clamp limits description to 2 lines with ellipsis!',
                        explanation: 'What this does:\\n• Title with favorite button\\n• Heart turns red on hover\\n• Description truncated to 2 lines\\n• Clean spacing throughout'
                    },
                    {
                        title: 'Style the Game Meta Info',
                        description: 'Let\'s style the rating, year, and genre tags!',
                        instruction: 'Add this CSS:',
                        code: `.game-meta {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
}

.game-rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #fbbf24;
  font-weight: 600;
}

.game-rating i {
  width: 14px;
  height: 14px;
}

.game-year {
  color: #9ca3af;
}

.game-genre {
  background: #4b5563;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  color: #d1d5db;
}`,
                        codeFile: 'styles.css',
                        tip: 'Yellow stars are universally recognized for ratings!',
                        explanation: 'What this does:\\n• Horizontal meta layout\\n• Yellow star rating\\n• Gray year text\\n• Pill-style genre tag'
                    },
                    {
                        title: 'Style the Game Action Buttons',
                        description: 'Let\'s style the View Details and Add to List buttons!',
                        instruction: 'Add this CSS:',
                        code: `.game-actions {
  display: flex;
  gap: 0.5rem;
}

.game-actions .btn-primary {
  flex: 1;
  padding: 0.6rem;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.game-actions .btn-primary:hover {
  background: #4338ca;
}

.game-actions .btn-secondary {
  padding: 0.6rem 0.75rem;
  background: transparent;
  color: #9ca3af;
  border: 1px solid #4b5563;
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s;
}

.game-actions .btn-secondary:hover {
  background: #4b5563;
  color: white;
}`,
                        codeFile: 'styles.css',
                        tip: 'Primary button takes more space, secondary is compact!',
                        explanation: 'What this does:\\n• Primary button fills space\\n• Secondary button outlined\\n• Hover effects on both\\n• Consistent border radius'
                    },
                    {
                        title: 'Style the Load More Button',
                        description: 'Let\'s style the pagination button!',
                        instruction: 'Add this CSS:',
                        code: `.load-more-section {
  text-align: center;
}

.load-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  color: #9ca3af;
  border: 2px solid #4b5563;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.load-more-btn:hover {
  background: #4b5563;
  color: white;
  border-color: #4b5563;
}

.load-more-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}`,
                        codeFile: 'styles.css',
                        tip: 'Outlined buttons work well for secondary actions!',
                        explanation: 'What this does:\\n• Centered button\\n• Outlined style\\n• Fills on hover\\n• Disabled state for when no more games'
                    },
                    {
                        title: 'Create the Game Data Array',
                        description: 'Let\'s create a JavaScript array to store our game data!',
                        instruction: 'Add this JavaScript:',
                        code: `// Game database
const gamesData = [
  {
    id: 1,
    title: 'Super Adventure',
    description: 'An epic journey through mystical lands filled with danger and discovery.',
    genre: 'action',
    year: 2023,
    rating: 4.8,
    image: 'https://picsum.photos/300/200?random=1',
    isNew: true
  },
  {
    id: 2,
    title: 'Dragon Quest XI',
    description: 'A classic RPG experience with stunning visuals and deep storytelling.',
    genre: 'rpg',
    year: 2022,
    rating: 4.9,
    image: 'https://picsum.photos/300/200?random=2',
    isNew: false
  },
  {
    id: 3,
    title: 'Chess Masters',
    description: 'Test your strategic thinking against AI or players worldwide.',
    genre: 'strategy',
    year: 2023,
    rating: 4.5,
    image: 'https://picsum.photos/300/200?random=3',
    isNew: true
  },
  {
    id: 4,
    title: 'Soccer Pro 2024',
    description: 'The most realistic soccer simulation with licensed teams.',
    genre: 'sports',
    year: 2024,
    rating: 4.7,
    image: 'https://picsum.photos/300/200?random=4',
    isNew: true
  },
  {
    id: 5,
    title: 'Mind Bender',
    description: 'Challenge your brain with hundreds of unique puzzles.',
    genre: 'puzzle',
    year: 2021,
    rating: 4.3,
    image: 'https://picsum.photos/300/200?random=5',
    isNew: false
  }
];

// State management
let filteredGames = [...gamesData];
let currentGenre = 'all';
let currentSort = 'rating';
let favorites = JSON.parse(localStorage.getItem('gameFavorites')) || [];`,
                        codeFile: 'script.js',
                        tip: 'Storing data in arrays makes it easy to filter and sort!',
                        explanation: 'What this does:\\n• Creates sample game data\\n• Each game has all needed properties\\n• State variables track current filters\\n• Favorites saved to localStorage'
                    },
                    {
                        title: 'Create the Render Function',
                        description: 'Let\'s create a function to render game cards from our data!',
                        instruction: 'Add this JavaScript:',
                        code: `function renderGames(games) {
  const gamesGrid = document.getElementById('gamesGrid');
  const resultsCount = document.getElementById('resultsCount');
  const totalGames = document.getElementById('totalGames');
  
  // Update counts
  resultsCount.textContent = \`Showing \${games.length} games\`;
  totalGames.textContent = gamesData.length;
  
  // Clear existing cards
  gamesGrid.innerHTML = '';
  
  // Render each game
  games.forEach(game => {
    const isFavorite = favorites.includes(game.id);
    const card = document.createElement('article');
    card.className = 'game-card';
    card.dataset.genre = game.genre;
    card.dataset.year = game.year;
    card.dataset.rating = game.rating;
    
    card.innerHTML = \`
      <div class="game-image">
        <img src="\${game.image}" alt="\${game.title}">
        \${game.isNew ? '<span class="game-badge">New</span>' : ''}
      </div>
      <div class="game-info">
        <div class="game-header">
          <h3 class="game-title">\${game.title}</h3>
          <button class="favorite-btn \${isFavorite ? 'active' : ''}" data-id="\${game.id}" aria-label="Add to favorites">
            <i data-lucide="heart"></i>
          </button>
        </div>
        <p class="game-description">\${game.description}</p>
        <div class="game-meta">
          <span class="game-rating">
            <i data-lucide="star"></i> \${game.rating}
          </span>
          <span class="game-year">\${game.year}</span>
          <span class="game-genre">\${game.genre}</span>
        </div>
        <div class="game-actions">
          <button class="btn-primary">View Details</button>
          <button class="btn-secondary">Add to List</button>
        </div>
      </div>
    \`;
    
    gamesGrid.appendChild(card);
  });
  
  // Re-initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  // Add favorite button listeners
  addFavoriteListeners();
}`,
                        codeFile: 'script.js',
                        tip: 'Template literals make it easy to create HTML with dynamic data!',
                        explanation: 'What this does:\\n• Clears existing cards\\n• Creates card HTML for each game\\n• Checks if game is favorited\\n• Updates result counts\\n• Re-initializes icons'
                    },
                    {
                        title: 'Add Search Functionality',
                        description: 'Let\'s make the search bar filter games in real-time!',
                        instruction: 'Add this JavaScript:',
                        code: `const searchInput = document.getElementById('gameSearch');

searchInput.addEventListener('input', function(e) {
  const searchTerm = e.target.value.toLowerCase().trim();
  
  filteredGames = gamesData.filter(game => {
    // Search in title, description, and genre
    return game.title.toLowerCase().includes(searchTerm) ||
           game.description.toLowerCase().includes(searchTerm) ||
           game.genre.toLowerCase().includes(searchTerm) ||
           game.year.toString().includes(searchTerm);
  });
  
  // Apply current genre filter too
  if (currentGenre !== 'all') {
    filteredGames = filteredGames.filter(game => game.genre === currentGenre);
  }
  
  // Apply current sort
  sortGames(currentSort);
  renderGames(filteredGames);
});

// Debounce for performance (optional enhancement)
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}`,
                        codeFile: 'script.js',
                        tip: 'Searching multiple fields gives users more flexibility!',
                        explanation: 'What this does:\\n• Listens for typing in search\\n• Searches title, description, genre, year\\n• Combines with genre filter\\n• Includes debounce helper for performance'
                    },
                    {
                        title: 'Add Genre Filter Functionality',
                        description: 'Let\'s make the genre filter tags work!',
                        instruction: 'Add this JavaScript:',
                        code: `const filterTags = document.querySelectorAll('.filter-tag');

filterTags.forEach(tag => {
  tag.addEventListener('click', function() {
    // Update active state
    filterTags.forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    
    // Get selected genre
    currentGenre = this.dataset.genre;
    
    // Filter games
    if (currentGenre === 'all') {
      filteredGames = [...gamesData];
    } else {
      filteredGames = gamesData.filter(game => game.genre === currentGenre);
    }
    
    // Apply search filter if there's a search term
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
      filteredGames = filteredGames.filter(game => 
        game.title.toLowerCase().includes(searchTerm) ||
        game.description.toLowerCase().includes(searchTerm)
      );
    }
    
    // Apply current sort and render
    sortGames(currentSort);
    renderGames(filteredGames);
  });
});`,
                        codeFile: 'script.js',
                        tip: 'Combining filters gives users powerful search capabilities!',
                        explanation: 'What this does:\\n• Updates active filter visually\\n• Filters by selected genre\\n• Preserves search term filter\\n• Applies sort and re-renders'
                    },
                    {
                        title: 'Add Sort Functionality',
                        description: 'Let\'s make the sort dropdown work!',
                        instruction: 'Add this JavaScript:',
                        code: `const sortSelect = document.getElementById('sortSelect');

sortSelect.addEventListener('change', function() {
  currentSort = this.value;
  sortGames(currentSort);
  renderGames(filteredGames);
});

function sortGames(sortBy) {
  switch(sortBy) {
    case 'rating':
      filteredGames.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      filteredGames.sort((a, b) => b.year - a.year);
      break;
    case 'oldest':
      filteredGames.sort((a, b) => a.year - b.year);
      break;
    case 'title':
      filteredGames.sort((a, b) => a.title.localeCompare(b.title));
      break;
  }
}`,
                        codeFile: 'script.js',
                        tip: 'localeCompare handles alphabetical sorting correctly!',
                        explanation: 'What this does:\\n• Listens for dropdown changes\\n• Sorts by rating, year, or title\\n• Uses appropriate comparison for each type\\n• Re-renders after sorting'
                    },
                    {
                        title: 'Add Favorites Functionality',
                        description: 'Let\'s make the heart buttons save favorites!',
                        instruction: 'Add this JavaScript:',
                        code: `function addFavoriteListeners() {
  const favoriteBtns = document.querySelectorAll('.favorite-btn');
  
  favoriteBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent card click
      
      const gameId = parseInt(this.dataset.id);
      
      if (favorites.includes(gameId)) {
        // Remove from favorites
        favorites = favorites.filter(id => id !== gameId);
        this.classList.remove('active');
      } else {
        // Add to favorites
        favorites.push(gameId);
        this.classList.add('active');
      }
      
      // Save to localStorage
      localStorage.setItem('gameFavorites', JSON.stringify(favorites));
      
      // Re-initialize icon
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    });
  });
}`,
                        codeFile: 'script.js',
                        tip: 'localStorage persists favorites even after closing the browser!',
                        explanation: 'What this does:\\n• Toggles favorite state\\n• Updates visual indicator\\n• Saves to localStorage\\n• Prevents event bubbling'
                    },
                    {
                        title: 'Add Clear Filters Functionality',
                        description: 'Let\'s make the clear filters button reset everything!',
                        instruction: 'Add this JavaScript:',
                        code: `const clearFiltersBtn = document.getElementById('clearFilters');

clearFiltersBtn.addEventListener('click', function() {
  // Reset search
  searchInput.value = '';
  
  // Reset genre filter
  currentGenre = 'all';
  filterTags.forEach(tag => {
    tag.classList.remove('active');
    if (tag.dataset.genre === 'all') {
      tag.classList.add('active');
    }
  });
  
  // Reset sort
  currentSort = 'rating';
  sortSelect.value = 'rating';
  
  // Reset filtered games
  filteredGames = [...gamesData];
  sortGames(currentSort);
  renderGames(filteredGames);
});`,
                        codeFile: 'script.js',
                        tip: 'A clear button improves UX by letting users start fresh easily!',
                        explanation: 'What this does:\\n• Clears search input\\n• Resets genre to "All"\\n• Resets sort to default\\n• Re-renders all games'
                    },
                    {
                        title: 'Initialize the Database',
                        description: 'Let\'s initialize everything when the page loads!',
                        instruction: 'Add this JavaScript:',
                        code: `// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Calculate average rating
  const avgRating = (gamesData.reduce((sum, game) => sum + game.rating, 0) / gamesData.length).toFixed(1);
  document.getElementById('avgRating').textContent = avgRating;
  
  // Count unique genres
  const genres = new Set(gamesData.map(game => game.genre));
  document.getElementById('genreCount').textContent = genres.size;
  
  // Initial sort and render
  sortGames(currentSort);
  renderGames(filteredGames);
  
  console.log('Game Database initialized with', gamesData.length, 'games');
});`,
                        codeFile: 'script.js',
                        tip: 'DOMContentLoaded ensures all HTML is ready before running JavaScript!',
                        explanation: 'What this does:\\n• Calculates average rating\\n• Counts unique genres\\n• Renders initial game list\\n• Logs initialization message'
                    },
                    {
                        title: 'Make It Responsive',
                        description: 'Finally, let\'s ensure it works great on all devices!',
                        instruction: 'Add this media query:',
                        code: `@media (max-width: 768px) {
  .game-database {
    padding: 1rem;
    margin: 1rem;
  }
  
  .database-header {
    flex-direction: column;
    text-align: center;
  }
  
  .stats-bar {
    flex-direction: column;
    gap: 1rem;
  }
  
  .search-bar {
    flex-direction: column;
  }
  
  .search-btn {
    width: 100%;
  }
  
  .filter-tags {
    justify-content: center;
  }
  
  .results-info {
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
  }
  
  .games-grid {
    grid-template-columns: 1fr;
  }
}`,
                        codeFile: 'styles.css',
                        tip: 'Stacking elements vertically works best on mobile!',
                        explanation: 'What this does:\\n• Stacks header vertically\\n• Full-width search button\\n• Centers filter tags\\n• Single column game grid\\n• Stacked results info'
                    }
                ],
                learningObjectives: [
                    'Integrate with external gaming APIs',
                    'Implement advanced search algorithms',
                    'Create complex filtering systems',
                    'Build data visualization charts',
                    'Handle API rate limiting and caching'
                ]
            },
            useCases: [
                { title: 'Gaming Websites', description: 'Comprehensive game databases and reviews' },
                { title: 'Game Development', description: 'Market research and competitor analysis' },
                { title: 'Gaming Communities', description: 'Game recommendation systems' }
            ]
        },

        // PET ADOPTION - Advanced Components
        {
            id: 'pet-admin-panel',
            name: 'Pet Management Admin Panel',
            type: 'forms',
            difficulty: 'advanced',
            hasJS: true,
            mobileFirst: true,
            tags: ['Admin-Panel', 'CRUD-Operations', 'File-Upload', 'Data-Management'],
            description: 'Complete admin panel for shelter staff to add, edit, and manage pet listings dynamically. Includes photo upload, detailed forms, and real-time preview.',
            preview: `<div class="component-preview-placeholder">
                <div style="background: #f8fafc; padding: 2rem; border-radius: 16px; border: 2px solid #e2e8f0; max-width: 500px; margin: 1rem auto;">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                        <div style="width: 50px; height: 50px; background: #3b82f6; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
                            ⚙️
                        </div>
                        <div>
                            <h3 style="margin: 0; color: #1e293b; font-size: 1.2rem;">Pet Admin Panel</h3>
                            <p style="margin: 0; color: #64748b; font-size: 0.8rem;">Add New Pet • Manage Listings</p>
                        </div>
                    </div>
                    <div style="background: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border: 1px solid #e2e8f0;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; font-size: 0.8rem; font-weight: 600; color: #374151;">Pet Name</label>
                                <input style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.8rem;" placeholder="Buddy" value="Buddy">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; font-size: 0.8rem; font-weight: 600; color: #374151;">Age</label>
                                <input style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.8rem;" placeholder="3 years" value="3 years">
                            </div>
                        </div>
                        <div style="margin-bottom: 1rem;">
                            <label style="display: block; margin-bottom: 0.5rem; font-size: 0.8rem; font-weight: 600; color: #374151;">Photo Upload</label>
                            <div style="border: 2px dashed #d1d5db; border-radius: 8px; padding: 1rem; text-align: center; background: #f9fafb;">
                                <div style="width: 40px; height: 40px; background: #fbbf24; border-radius: 50%; margin: 0 auto 0.5rem; display: flex; align-items: center; justify-content: center; font-size: 1.25rem;">
                                    📷
                                </div>
                                <p style="margin: 0; font-size: 0.75rem; color: #6b7280;">Click to upload photo</p>
                            </div>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <select style="padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.8rem;">
                                <option>Dog</option>
                                <option>Cat</option>
                            </select>
                            <select style="padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.8rem;">
                                <option>Available</option>
                                <option>Pending</option>
                                <option>Adopted</option>
                            </select>
                        </div>
                    </div>
                    <div style="display: flex; gap: 0.75rem;">
                        <button style="flex: 1; padding: 0.75rem; background: #10b981; color: white; border: none; border-radius: 8px; font-size: 0.8rem; font-weight: 600;">
                            ➕ Add Pet
                        </button>
                        <button style="flex: 1; padding: 0.75rem; background: #6366f1; color: white; border: none; border-radius: 8px; font-size: 0.8rem; font-weight: 600;">
                            👁️ Preview
                        </button>
                    </div>
                </div>
            </div>`,
            workshop: {
                comingSoon: true,
                goal: 'Build a complete admin panel for managing pet listings with full CRUD operations',
                duration: '240 minutes',
                steps: [
                    {
                        title: 'Create the Admin Panel Container',
                        description: 'Let\'s build the main container for our pet management system with a clean, professional look!',
                        instruction: 'Add this HTML structure:',
                        code: `<div class="pet-admin-panel">
  <div class="admin-header">
    <div class="admin-icon">
      <span class="icon">⚙️</span>
    </div>
    <div class="admin-title">
      <h2>Pet Admin Panel</h2>
      <p>Add New Pet • Manage Listings</p>
    </div>
  </div>
</div>`,
                        codeFile: 'index.html',
                        tip: 'Admin panels should be clearly labeled so staff know they\'re in the management area!',
                        explanation: 'What this creates:\n• Main container for the admin system\n• Header with settings icon (⚙️)\n• Title and subtitle for clear navigation\n• We\'ll add the form and pet list next'
                    },
                    {
                        title: 'Add Stats Summary Bar',
                        description: 'Let\'s add a stats bar showing how many pets are in the system!',
                        instruction: 'Add this stats section after the header:',
                        code: `  <div class="stats-bar">
    <div class="stat">
      <span class="stat-number" id="totalPets">0</span>
      <span class="stat-label">Total Pets</span>
    </div>
    <div class="stat">
      <span class="stat-number" id="availablePets">0</span>
      <span class="stat-label">Available</span>
    </div>
    <div class="stat">
      <span class="stat-number" id="pendingPets">0</span>
      <span class="stat-label">Pending</span>
    </div>
    <div class="stat">
      <span class="stat-number" id="adoptedPets">0</span>
      <span class="stat-label">Adopted</span>
    </div>
  </div>`,
                        codeFile: 'index.html',
                        tip: 'Stats give staff a quick overview of the shelter\'s current status!',
                        explanation: 'What this adds:\\n• Four stat boxes showing pet counts\\n• IDs for updating with JavaScript later\\n• Labels explaining each number\\n• Will update dynamically as pets are added'
                    },
                    {
                        title: 'Add the Pet Form Container',
                        description: 'Now let\'s add the form where staff can enter pet details with name and age fields!',
                        instruction: 'Add this form structure inside the admin panel:',
                        code: `  <div class="pet-form-container">
    <h3 class="form-title">
      <span class="icon">➕</span> Add New Pet
    </h3>
    <form class="pet-form" id="petForm">
      <div class="form-row">
        <div class="form-group">
          <label for="petName">Pet Name</label>
          <input type="text" id="petName" name="petName" placeholder="Buddy" required>
        </div>
        <div class="form-group">
          <label for="petAge">Age</label>
          <input type="text" id="petAge" name="petAge" placeholder="3 years" required>
        </div>
      </div>
    </form>
  </div>`,
                        codeFile: 'index.html',
                        tip: 'Using placeholder text shows staff exactly what format to use!',
                        explanation: 'What this form does:\n• Creates a form for data collection\n• Groups related fields in rows\n• Labels tell users what each field is for\n• required attribute ensures fields aren\'t empty'
                    },
                    {
                        title: 'Add Pet Description Field',
                        description: 'Let\'s add a textarea for staff to write a description about each pet!',
                        instruction: 'Add this description field to your form:',
                        code: `      <div class="form-group full-width">
        <label for="petDescription">Description</label>
        <textarea id="petDescription" name="petDescription" rows="3" 
          placeholder="Friendly and playful, loves belly rubs..."></textarea>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'Good descriptions help potential adopters connect with pets!',
                        explanation: 'What this adds:\\n• Textarea for longer text input\\n• full-width class spans both columns\\n• Placeholder gives example of good description\\n• rows="3" sets initial height'
                    },
                    {
                        title: 'Add Photo Upload Section',
                        description: 'Every pet needs a photo! Let\'s add a drag-and-drop upload area.',
                        instruction: 'Add this photo upload section to your form:',
                        code: `      <div class="form-group photo-upload">
        <label>Pet Photo</label>
        <div class="upload-area" id="uploadArea">
          <div class="upload-icon">
            <span class="icon">📷</span>
          </div>
          <p class="upload-text">Click to upload photo or drag and drop</p>
          <p class="upload-hint">PNG, JPG up to 5MB</p>
          <input type="file" id="petPhoto" name="petPhoto" accept="image/*" hidden>
        </div>
        <div class="photo-preview" id="photoPreview" hidden>
          <img id="previewImage" alt="Pet photo preview">
          <button type="button" class="remove-photo" id="removePhoto">
            <span class="icon">✕</span>
          </button>
        </div>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'The accept="image/*" attribute only allows image files!',
                        explanation: 'What this upload area does:\n• Creates a clickable upload zone\n• Hidden file input for better design\n• Camera icon shows this is for photos\n• Preview area shows selected image\n• Remove button lets staff change their selection'
                    },
                    {
                        title: 'Add Pet Type and Status Dropdowns',
                        description: 'Let\'s add dropdown menus for pet type, breed, and adoption status!',
                        instruction: 'Add these dropdowns to your form:',
                        code: `      <div class="form-row">
        <div class="form-group">
          <label for="petType">Pet Type</label>
          <select id="petType" name="petType" required>
            <option value="">Select Type</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="rabbit">Rabbit</option>
            <option value="bird">Bird</option>
            <option value="hamster">Hamster</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label for="petBreed">Breed</label>
          <input type="text" id="petBreed" name="petBreed" placeholder="Golden Retriever">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="petGender">Gender</label>
          <select id="petGender" name="petGender" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="form-group">
          <label for="petStatus">Status</label>
          <select id="petStatus" name="petStatus" required>
            <option value="available">Available</option>
            <option value="pending">Pending Adoption</option>
            <option value="adopted">Adopted</option>
          </select>
        </div>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'Dropdowns prevent typos and ensure consistent data!',
                        explanation: 'What these dropdowns do:\\n• Select menus for pet type, gender, and status\\n• Empty first option forces a choice\\n• Breed is a text input for flexibility\\n• Predefined options ensure consistency'
                    },
                    {
                        title: 'Add Action Buttons',
                        description: 'Let\'s add buttons to save, preview, and clear the form!',
                        instruction: 'Add these buttons after your form fields:',
                        code: `      <div class="form-actions">
        <button type="submit" class="btn btn-primary" id="addPetBtn">
          <span class="icon">➕</span> Add Pet
        </button>
        <button type="button" class="btn btn-secondary" id="previewBtn">
          <span class="icon">👁️</span> Preview
        </button>
        <button type="button" class="btn btn-danger" id="clearBtn">
          <span class="icon">🗑️</span> Clear
        </button>
      </div>
    </form>
  </div>`,
                        codeFile: 'index.html',
                        tip: 'Different button colors help users understand each action!',
                        explanation: 'What these buttons do:\n• Add Pet (green) - Saves the new pet to the system\n• Preview (blue) - Shows how the pet card will look\n• Clear (red) - Resets all form fields\n• Icons make buttons easier to scan'
                    },
                    {
                        title: 'Add Pet Listing Table',
                        description: 'Now let\'s add a table to display all the pets in the system!',
                        instruction: 'Add this table section after the form:',
                        code: `  <div class="pet-list-container">
    <div class="list-header">
      <h3><span class="icon">📋</span> Pet Listings</h3>
      <div class="list-controls">
        <input type="text" id="searchPets" placeholder="Search pets..." class="search-input">
        <select id="filterStatus" class="filter-select">
          <option value="all">All Status</option>
          <option value="available">Available</option>
          <option value="pending">Pending</option>
          <option value="adopted">Adopted</option>
        </select>
      </div>
    </div>
    <div class="pet-table-wrapper">
      <table class="pet-table" id="petTable">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Type</th>
            <th>Age</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="petTableBody">
          <!-- Pet rows will be inserted here by JavaScript -->
        </tbody>
      </table>
    </div>
    <p class="empty-message" id="emptyMessage">No pets found. Add your first pet above!</p>
  </div>`,
                        codeFile: 'index.html',
                        tip: 'Tables are great for displaying structured data like pet listings!',
                        explanation: 'What this table does:\\n• Displays all pets in organized rows\\n• Search input filters pets by name\\n• Status dropdown filters by adoption status\\n• Action buttons for edit/delete\\n• Empty message shows when no pets exist'
                    },
                    {
                        title: 'Style the Admin Panel Container',
                        description: 'Let\'s make our admin panel look professional with clean styling!',
                        instruction: 'Add this CSS:',
                        code: `.pet-admin-panel {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 16px;
  border: 2px solid #e2e8f0;
  max-width: 900px;
  margin: 2rem auto;
}

.admin-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.admin-icon {
  width: 50px;
  height: 50px;
  background: #3b82f6;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.admin-title h2 {
  margin: 0;
  color: #1e293b;
  font-size: 1.5rem;
}

.admin-title p {
  margin: 0;
  color: #64748b;
  font-size: 0.9rem;
}`,
                        codeFile: 'styles.css',
                        tip: 'Light backgrounds make admin panels feel clean and professional!',
                        explanation: 'What this styling does:\\n• Light gray background for the panel\\n• Blue icon creates visual interest\\n• Flexbox aligns header elements\\n• Clean typography hierarchy'
                    },
                    {
                        title: 'Style the Stats Bar',
                        description: 'Let\'s make the stats bar look impressive with colored numbers!',
                        instruction: 'Add this CSS:',
                        code: `.stats-bar {
  display: flex;
  justify-content: space-around;
  background: white;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  border: 1px solid #e2e8f0;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.75rem;
  font-weight: bold;
  color: #3b82f6;
}

.stat-label {
  font-size: 0.75rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat:nth-child(2) .stat-number { color: #10b981; }
.stat:nth-child(3) .stat-number { color: #f59e0b; }
.stat:nth-child(4) .stat-number { color: #8b5cf6; }`,
                        codeFile: 'styles.css',
                        tip: 'Different colors for each stat makes them easy to scan quickly!',
                        explanation: 'What this does:\\n• White background for contrast\\n• Evenly spaced stats\\n• Large colored numbers\\n• Small uppercase labels\\n• Each stat has a unique color'
                    },
                    {
                        title: 'Style the Form Container',
                        description: 'Let\'s style the form layout with proper spacing and inputs!',
                        instruction: 'Add this CSS:',
                        code: `.pet-form-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.form-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1.5rem;
  color: #1e293b;
  font-size: 1.1rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}`,
                        codeFile: 'styles.css',
                        tip: 'Grid layout automatically makes forms look organized!',
                        explanation: 'What this does:\\n• White background for the form\\n• Two-column grid layout\\n• full-width class spans both columns\\n• Bold labels for clarity'
                    },
                    {
                        title: 'Style Form Inputs and Selects',
                        description: 'Let\'s style the input fields and dropdowns to look consistent!',
                        instruction: 'Add this CSS:',
                        code: `.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 80px;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #9ca3af;
}`,
                        codeFile: 'styles.css',
                        tip: 'The focus ring helps users see which field they\'re typing in!',
                        explanation: 'What this does:\\n• Consistent padding and borders\\n• Blue focus state with subtle shadow\\n• Textarea can be resized vertically\\n• Light placeholder text color'
                    },
                    {
                        title: 'Style the Photo Upload Area',
                        description: 'Let\'s make the photo upload area inviting with drag-and-drop styling!',
                        instruction: 'Add this CSS:',
                        code: `.photo-upload .upload-area {
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  background: #f9fafb;
  cursor: pointer;
  transition: all 0.2s;
}

.photo-upload .upload-area:hover {
  border-color: #3b82f6;
  background: #f0f9ff;
}

.photo-upload .upload-area.drag-over {
  border-color: #10b981;
  background: #ecfdf5;
}

.upload-icon {
  width: 50px;
  height: 50px;
  background: #fbbf24;
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.upload-text {
  margin: 0 0 0.5rem;
  color: #374151;
  font-weight: 500;
}

.upload-hint {
  margin: 0;
  font-size: 0.8rem;
  color: #9ca3af;
}`,
                        codeFile: 'styles.css',
                        tip: 'Dashed borders are a universal sign for drop zones!',
                        explanation: 'What this does:\\n• Dashed border shows it\'s a drop zone\\n• Hover effect provides feedback\\n• drag-over class for when files are dragged\\n• Yellow icon is friendly and visible'
                    },
                    {
                        title: 'Style the Photo Preview',
                        description: 'Let\'s style the preview area that shows after selecting a photo!',
                        instruction: 'Add this CSS:',
                        code: `.photo-preview {
  position: relative;
  display: inline-block;
  margin-top: 1rem;
}

.photo-preview img {
  max-width: 150px;
  max-height: 150px;
  border-radius: 12px;
  object-fit: cover;
  border: 2px solid #e2e8f0;
}

.remove-photo {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.remove-photo:hover {
  background: #dc2626;
}

.remove-photo i {
  width: 14px;
  height: 14px;
}`,
                        codeFile: 'styles.css',
                        tip: 'The X button lets staff easily remove a photo and try again!',
                        explanation: 'What this does:\\n• Shows selected image with rounded corners\\n• Red X button positioned in corner\\n• object-fit: cover maintains aspect ratio\\n• Hover effect on remove button'
                    },
                    {
                        title: 'Style the Action Buttons',
                        description: 'Let\'s create distinct button styles for each action!',
                        instruction: 'Add this CSS:',
                        code: `.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.btn {
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s;
}

.btn-primary {
  background: #10b981;
  color: white;
}

.btn-primary:hover {
  background: #059669;
}

.btn-secondary {
  background: #6366f1;
  color: white;
}

.btn-secondary:hover {
  background: #4f46e5;
}

.btn-danger {
  background: #ef4444;
  color: white;
}

.btn-danger:hover {
  background: #dc2626;
}

.btn:active {
  transform: translateY(1px);
}`,
                        codeFile: 'styles.css',
                        tip: 'Color coding helps users understand button purposes at a glance!',
                        explanation: 'What this does:\\n• Green for primary action (Add)\\n• Blue for secondary action (Preview)\\n• Red for destructive action (Clear)\\n• Hover states darken colors\\n• Active state adds pressed feeling'
                    },
                    {
                        title: 'Style the Pet Table',
                        description: 'Let\'s style the pet listing table with clean rows and hover effects!',
                        instruction: 'Add this CSS:',
                        code: `.pet-list-container {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.list-header h3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  color: #1e293b;
}

.list-controls {
  display: flex;
  gap: 0.75rem;
}

.search-input {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.85rem;
  width: 200px;
}

.filter-select {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.85rem;
  background: white;
}`,
                        codeFile: 'styles.css',
                        tip: 'Search and filter controls help staff find pets quickly!',
                        explanation: 'What this does:\\n• White background for the table area\\n• Header with title and controls\\n• Search input for filtering by name\\n• Dropdown for status filtering'
                    },
                    {
                        title: 'Style the Table Rows',
                        description: 'Let\'s style the table rows with proper spacing and status badges!',
                        instruction: 'Add this CSS:',
                        code: `.pet-table-wrapper {
  overflow-x: auto;
}

.pet-table {
  width: 100%;
  border-collapse: collapse;
}

.pet-table th,
.pet-table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.pet-table th {
  background: #f8fafc;
  font-weight: 600;
  color: #64748b;
  font-size: 0.8rem;
  text-transform: uppercase;
}

.pet-table tbody tr:hover {
  background: #f8fafc;
}

.pet-table .pet-photo {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.status-available { background: #dcfce7; color: #166534; }
.status-pending { background: #fef3c7; color: #92400e; }
.status-adopted { background: #e0e7ff; color: #3730a3; }`,
                        codeFile: 'styles.css',
                        tip: 'Status badges with colors make it easy to scan the table!',
                        explanation: 'What this does:\\n• Responsive table with horizontal scroll\\n• Hover effect on rows\\n• Circular pet photos\\n• Colored status badges'
                    },
                    {
                        title: 'Style Table Action Buttons',
                        description: 'Let\'s add edit and delete buttons for each pet row!',
                        instruction: 'Add this CSS:',
                        code: `.table-actions {
  display: flex;
  gap: 0.5rem;
}

.btn-icon {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.btn-edit {
  background: #dbeafe;
  color: #2563eb;
}

.btn-edit:hover {
  background: #2563eb;
  color: white;
}

.btn-delete {
  background: #fee2e2;
  color: #dc2626;
}

.btn-delete:hover {
  background: #dc2626;
  color: white;
}

.empty-message {
  text-align: center;
  color: #9ca3af;
  padding: 2rem;
  font-style: italic;
}`,
                        codeFile: 'styles.css',
                        tip: 'Icon buttons save space while still being easy to click!',
                        explanation: 'What this does:\\n• Small icon buttons for actions\\n• Blue for edit, red for delete\\n• Hover fills with solid color\\n• Empty message when no pets'
                    },
                    {
                        title: 'Create the Pet Data Array',
                        description: 'Let\'s create JavaScript to manage our pet data with sample pets!',
                        instruction: 'Add this JavaScript:',
                        code: `// Pet data management
let petsData = JSON.parse(localStorage.getItem('shelterPets')) || [
  {
    id: 1,
    name: 'Buddy',
    type: 'dog',
    breed: 'Golden Retriever',
    age: '3 years',
    gender: 'male',
    status: 'available',
    description: 'Friendly and playful, loves belly rubs and fetch!',
    photo: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: 2,
    name: 'Whiskers',
    type: 'cat',
    breed: 'Tabby',
    age: '2 years',
    gender: 'female',
    status: 'pending',
    description: 'Calm and affectionate, perfect lap cat.',
    photo: 'https://picsum.photos/100/100?random=2'
  }
];

// State for filtering
let currentFilter = 'all';
let searchTerm = '';`,
                        codeFile: 'script.js',
                        tip: 'Starting with sample data helps test the admin panel immediately!',
                        explanation: 'What this does:\\n• Loads pets from localStorage or uses samples\\n• Each pet has all the form fields\\n• State variables track current filters\\n• Data persists between page loads'
                    },
                    {
                        title: 'Create the Render Function',
                        description: 'Let\'s create a function to display pets in the table!',
                        instruction: 'Add this JavaScript:',
                        code: `function renderPets() {
  const tbody = document.getElementById('petTableBody');
  const emptyMsg = document.getElementById('emptyMessage');
  
  // Filter pets
  let filtered = petsData.filter(pet => {
    const matchesFilter = currentFilter === 'all' || pet.status === currentFilter;
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pet.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  
  // Update stats
  updateStats();
  
  // Show/hide empty message
  emptyMsg.hidden = filtered.length > 0;
  
  // Render table rows
  tbody.innerHTML = filtered.map(pet => \`
    <tr data-id="\${pet.id}">
      <td><img src="\${pet.photo || 'https://via.placeholder.com/50'}" alt="\${pet.name}" class="pet-photo"></td>
      <td><strong>\${pet.name}</strong><br><small>\${pet.breed || pet.type}</small></td>
      <td>\${pet.type}</td>
      <td>\${pet.age}</td>
      <td><span class="status-badge status-\${pet.status}">\${pet.status}</span></td>
      <td class="table-actions">
        <button class="btn-icon btn-edit" onclick="editPet(\${pet.id})" aria-label="Edit">
          <span class="icon">✏️</span>
        </button>
        <button class="btn-icon btn-delete" onclick="deletePet(\${pet.id})" aria-label="Delete">
          <span class="icon">🗑️</span>
        </button>
      </td>
    </tr>
  \`).join('');
}`,
                        codeFile: 'script.js',
                        tip: 'Template literals make it easy to create HTML with dynamic data!',
                        explanation: 'What this does:\\n• Filters pets by status and search\\n• Creates table rows for each pet\\n• Shows status badges with colors\\n• Edit and delete buttons for each row'
                    },
                    {
                        title: 'Add Stats Update Function',
                        description: 'Let\'s create a function to update the stats bar!',
                        instruction: 'Add this JavaScript:',
                        code: `function updateStats() {
  document.getElementById('totalPets').textContent = petsData.length;
  document.getElementById('availablePets').textContent = 
    petsData.filter(p => p.status === 'available').length;
  document.getElementById('pendingPets').textContent = 
    petsData.filter(p => p.status === 'pending').length;
  document.getElementById('adoptedPets').textContent = 
    petsData.filter(p => p.status === 'adopted').length;
}

function savePets() {
  localStorage.setItem('shelterPets', JSON.stringify(petsData));
}`,
                        codeFile: 'script.js',
                        tip: 'Keeping stats updated gives staff instant feedback!',
                        explanation: 'What this does:\\n• Counts pets by status\\n• Updates the stats bar numbers\\n• savePets function persists to localStorage\\n• Called whenever pets change'
                    },
                    {
                        title: 'Add Form Submission Handler',
                        description: 'Let\'s handle form submission to add new pets!',
                        instruction: 'Add this JavaScript:',
                        code: `const petForm = document.getElementById('petForm');
let currentPhotoData = null;

petForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = new FormData(petForm);
  const newPet = {
    id: Date.now(),
    name: formData.get('petName'),
    age: formData.get('petAge'),
    type: formData.get('petType'),
    breed: formData.get('petBreed'),
    gender: formData.get('petGender'),
    status: formData.get('petStatus'),
    description: formData.get('petDescription'),
    photo: currentPhotoData || 'https://via.placeholder.com/100'
  };
  
  // Add to array and save
  petsData.push(newPet);
  savePets();
  
  // Reset form and photo
  petForm.reset();
  resetPhotoUpload();
  currentPhotoData = null;
  
  // Re-render table
  renderPets();
  
  // Show success message
  showNotification('Pet added successfully!', 'success');
});`,
                        codeFile: 'script.js',
                        tip: 'Always save to localStorage after modifying data!',
                        explanation: 'What this does:\\n• Prevents default form submission\\n• Creates pet object from form data\\n• Adds to array and saves\\n• Resets form and re-renders table'
                    },
                    {
                        title: 'Add Photo Upload Handler',
                        description: 'Let\'s make the photo upload area work with click and drag-drop!',
                        instruction: 'Add this JavaScript:',
                        code: `const uploadArea = document.getElementById('uploadArea');
const petPhotoInput = document.getElementById('petPhoto');
const photoPreview = document.getElementById('photoPreview');
const previewImage = document.getElementById('previewImage');
const removePhotoBtn = document.getElementById('removePhoto');

// Click to upload
uploadArea.addEventListener('click', () => petPhotoInput.click());

// Handle file selection
petPhotoInput.addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) handlePhotoFile(file);
});

// Drag and drop
uploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadArea.classList.add('drag-over');
});

uploadArea.addEventListener('dragleave', () => {
  uploadArea.classList.remove('drag-over');
});

uploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadArea.classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) {
    handlePhotoFile(file);
  }
});`,
                        codeFile: 'script.js',
                        tip: 'Drag-and-drop makes uploading photos much easier!',
                        explanation: 'What this does:\\n• Click triggers file input\\n• Drag-over adds visual feedback\\n• Drop handles the file\\n• Only accepts image files'
                    },
                    {
                        title: 'Add Photo Processing Function',
                        description: 'Let\'s create a function to process and preview uploaded photos!',
                        instruction: 'Add this JavaScript:',
                        code: `function handlePhotoFile(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    currentPhotoData = e.target.result;
    previewImage.src = currentPhotoData;
    uploadArea.hidden = true;
    photoPreview.hidden = false;
  };
  reader.readAsDataURL(file);
}

function resetPhotoUpload() {
  uploadArea.hidden = false;
  photoPreview.hidden = true;
  petPhotoInput.value = '';
  currentPhotoData = null;
}

// Remove photo button
removePhotoBtn.addEventListener('click', resetPhotoUpload);`,
                        codeFile: 'script.js',
                        tip: 'FileReader converts images to data URLs for preview and storage!',
                        explanation: 'What this does:\\n• Reads file as data URL\\n• Shows preview image\\n• Hides upload area\\n• Reset function restores original state'
                    },
                    {
                        title: 'Add Search and Filter Handlers',
                        description: 'Let\'s make the search and filter controls work!',
                        instruction: 'Add this JavaScript:',
                        code: `const searchInput = document.getElementById('searchPets');
const filterSelect = document.getElementById('filterStatus');

// Search handler
searchInput.addEventListener('input', function(e) {
  searchTerm = e.target.value;
  renderPets();
});

// Filter handler
filterSelect.addEventListener('change', function(e) {
  currentFilter = e.target.value;
  renderPets();
});`,
                        codeFile: 'script.js',
                        tip: 'Real-time filtering makes finding pets super fast!',
                        explanation: 'What this does:\\n• Updates search term on typing\\n• Updates filter on dropdown change\\n• Re-renders table with new filters\\n• No button needed - instant results'
                    },
                    {
                        title: 'Add Delete Pet Function',
                        description: 'Let\'s add the ability to delete pets with confirmation!',
                        instruction: 'Add this JavaScript:',
                        code: `function deletePet(id) {
  const pet = petsData.find(p => p.id === id);
  if (!pet) return;
  
  if (confirm(\`Are you sure you want to delete \${pet.name}? This cannot be undone.\`)) {
    petsData = petsData.filter(p => p.id !== id);
    savePets();
    renderPets();
    showNotification(\`\${pet.name} has been removed.\`, 'info');
  }
}`,
                        codeFile: 'script.js',
                        tip: 'Always confirm before deleting - accidents happen!',
                        explanation: 'What this does:\\n• Finds pet by ID\\n• Shows confirmation dialog\\n• Removes from array if confirmed\\n• Saves and re-renders'
                    },
                    {
                        title: 'Add Edit Pet Function',
                        description: 'Let\'s add the ability to edit existing pets!',
                        instruction: 'Add this JavaScript:',
                        code: `let editingPetId = null;

function editPet(id) {
  const pet = petsData.find(p => p.id === id);
  if (!pet) return;
  
  editingPetId = id;
  
  // Fill form with pet data
  document.getElementById('petName').value = pet.name;
  document.getElementById('petAge').value = pet.age;
  document.getElementById('petType').value = pet.type;
  document.getElementById('petBreed').value = pet.breed || '';
  document.getElementById('petGender').value = pet.gender;
  document.getElementById('petStatus').value = pet.status;
  document.getElementById('petDescription').value = pet.description || '';
  
  // Show photo if exists
  if (pet.photo && !pet.photo.includes('placeholder')) {
    currentPhotoData = pet.photo;
    previewImage.src = pet.photo;
    uploadArea.hidden = true;
    photoPreview.hidden = false;
  }
  
  // Change button text
  document.getElementById('addPetBtn').innerHTML = '<span class="icon">💾</span> Update Pet';
  
  // Scroll to form
  petForm.scrollIntoView({ behavior: 'smooth' });
}`,
                        codeFile: 'script.js',
                        tip: 'Reusing the add form for editing keeps the UI simple!',
                        explanation: 'What this does:\\n• Stores ID of pet being edited\\n• Fills form with existing data\\n• Shows existing photo\\n• Changes button to "Update"\\n• Scrolls to form'
                    },
                    {
                        title: 'Update Form Submit for Edit Mode',
                        description: 'Let\'s modify the form submission to handle both add and edit!',
                        instruction: 'Update the form submit handler:',
                        code: `// Update the submit handler to check for edit mode
petForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = new FormData(petForm);
  const petData = {
    name: formData.get('petName'),
    age: formData.get('petAge'),
    type: formData.get('petType'),
    breed: formData.get('petBreed'),
    gender: formData.get('petGender'),
    status: formData.get('petStatus'),
    description: formData.get('petDescription'),
    photo: currentPhotoData || 'https://via.placeholder.com/100'
  };
  
  if (editingPetId) {
    // Update existing pet
    const index = petsData.findIndex(p => p.id === editingPetId);
    if (index !== -1) {
      petsData[index] = { ...petsData[index], ...petData };
      showNotification('Pet updated successfully!', 'success');
    }
    editingPetId = null;
    document.getElementById('addPetBtn').innerHTML = '<span class="icon">➕</span> Add Pet';
  } else {
    // Add new pet
    petData.id = Date.now();
    petsData.push(petData);
    showNotification('Pet added successfully!', 'success');
  }
  
  savePets();
  petForm.reset();
  resetPhotoUpload();
  currentPhotoData = null;
  renderPets();
});`,
                        codeFile: 'script.js',
                        tip: 'The spread operator merges existing data with updates!',
                        explanation: 'What this does:\\n• Checks if editing or adding\\n• Updates existing pet if editing\\n• Adds new pet if not editing\\n• Resets edit mode after save'
                    },
                    {
                        title: 'Add Notification System',
                        description: 'Let\'s add a notification system for user feedback!',
                        instruction: 'Add this JavaScript and CSS:',
                        code: `function showNotification(message, type = 'info') {
  // Remove existing notification
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();
  
  // Create notification
  const notification = document.createElement('div');
  notification.className = \`notification notification-\${type}\`;
  notification.innerHTML = \`
    <span class="icon">\${type === 'success' ? '✅' : 'ℹ️'}</span>
    <span>\${message}</span>
  \`;
  
  document.body.appendChild(notification);
  
  // Auto-remove after 3 seconds
  setTimeout(() => notification.remove(), 3000);
}

// Add notification CSS
const notificationStyles = \`
.notification {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  animation: slideIn 0.3s ease;
  z-index: 1000;
}
.notification-success { background: #10b981; color: white; }
.notification-info { background: #3b82f6; color: white; }
@keyframes slideIn {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
\`;`,
                        codeFile: 'script.js',
                        tip: 'Toast notifications give feedback without interrupting workflow!',
                        explanation: 'What this does:\n• Creates floating notification\n• Different colors for success/info\n• Auto-removes after 3 seconds\n• Smooth slide-in animation'
                    },
                    {
                        title: 'Add Clear Form Handler',
                        description: 'Let\'s make the clear button reset everything properly!',
                        instruction: 'Add this JavaScript:',
                        code: `const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', function() {
  petForm.reset();
  resetPhotoUpload();
  currentPhotoData = null;
  
  // Reset edit mode if active
  if (editingPetId) {
    editingPetId = null;
    document.getElementById('addPetBtn').innerHTML = '<span class="icon">➕</span> Add Pet';
  }
});`,
                        codeFile: 'script.js',
                        tip: 'Clear should also cancel any edit in progress!',
                        explanation: 'What this does:\n• Resets all form fields\n• Clears photo upload\n• Cancels edit mode\n• Restores Add button text'
                    },
                    {
                        title: 'Initialize and Make Responsive',
                        description: 'Let\'s initialize everything and add responsive styles!',
                        instruction: 'Add this JavaScript and CSS:',
                        code: `// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  renderPets();
  console.log('Pet Admin Panel initialized with', petsData.length, 'pets');
});

/* Add to styles.css */
@media (max-width: 768px) {
  .pet-admin-panel {
    padding: 1rem;
    margin: 1rem;
  }
  
  .admin-header {
    flex-direction: column;
    text-align: center;
  }
  
  .stats-bar {
    flex-wrap: wrap;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .list-header {
    flex-direction: column;
    align-items: stretch;
  }
  
  .list-controls {
    flex-direction: column;
  }
  
  .search-input {
    width: 100%;
  }
}`,
                        codeFile: 'script.js',
                        tip: 'Mobile-first design ensures the admin panel works on tablets too!',
                        explanation: 'What this does:\\n• Initializes on page load\\n• Stacks elements on mobile\\n• Full-width inputs on small screens\\n• Maintains usability on all devices'
                    }
                ],
                learningObjectives: [
                    'Create advanced form handling with validation',
                    'Implement file upload functionality',
                    'Build CRUD operations for data management',
                    'Design admin authentication systems',
                    'Handle image processing and optimization',
                    'Create real-time preview systems',
                    'Implement data persistence with localStorage',
                    'Build responsive admin interfaces'
                ]
            },
            useCases: [
                { title: 'Animal Shelters', description: 'Staff can easily add new rescue animals to website' },
                { title: 'Pet Stores', description: 'Update available pets and inventory in real-time' },
                { title: 'Veterinary Clinics', description: 'Manage pet profiles and medical records' },
                { title: 'Rescue Organizations', description: 'Volunteers can add pets without technical knowledge' }
            ]
        },

        // CITY WEBSITE - Advanced Components
        {
            id: 'emergency-alert-system',
            name: 'Real-time Emergency Alert System',
            type: 'interactions',
            difficulty: 'advanced',
            hasJS: true,
            mobileFirst: true,
            tags: ['Real-time', 'WebSocket', 'Geolocation', 'Push-Notifications'],
            description: 'Advanced emergency alert system with real-time updates, geolocation targeting, push notifications, and multi-channel broadcasting.',
            preview: `<div class="component-preview-placeholder">
                <div style="background: #dc2626; color: white; padding: 1.5rem; border-radius: 12px; margin: 1rem auto; max-width: 400px; position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, #fbbf24 0%, #fbbf24 50%, transparent 50%, transparent 100%); animation: pulse 2s infinite;"></div>
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="alert-triangle"></i>
                        </div>
                        <div>
                            <h3 style="margin: 0; font-size: 1.1rem;">EMERGENCY ALERT</h3>
                            <p style="margin: 0; font-size: 0.75rem; opacity: 0.9;">Active Now • Downtown Area</p>
                        </div>
                    </div>
                    <p style="margin: 0 0 1rem 0; font-size: 0.9rem; line-height: 1.4;">Severe weather warning in effect. Seek shelter immediately. Avoid downtown area until further notice.</p>
                    <div style="display: flex; gap: 0.75rem;">
                        <button style="flex: 1; padding: 0.75rem; background: rgba(255,255,255,0.2); color: white; border: none; border-radius: 8px; font-size: 0.75rem;">More Info</button>
                        <button style="padding: 0.75rem; background: rgba(255,255,255,0.2); color: white; border: none; border-radius: 8px;">
                            <i data-lucide="x"></i>
                        </button>
                    </div>
                </div>
            </div>`,
            workshop: {
                comingSoon: true,
                goal: 'Create a real-time emergency alert system with geolocation and notifications',
                duration: 'Coming Soon',
                comingSoon: true,
                steps: [
                    {
                        title: 'Coming Soon',
                        description: 'This comprehensive tutorial is currently being developed. Check back soon for a full step-by-step guide covering real-time alerts, geolocation targeting, and push notifications!',
                        instruction: 'This tutorial will include:',
                        code: `// Coming Soon Features:
// - Real-time WebSocket connections
// - Geolocation API integration
// - Push notification system
// - Alert severity levels
// - Admin broadcast controls
// - Multi-channel notifications
// - Alert history and analytics`,
                        codeFile: 'preview.js',
                        tip: 'This advanced tutorial is being crafted to provide comprehensive coverage of emergency alert systems.',
                        explanation: 'What you\'ll learn:\\n• WebSocket real-time connections\\n• Geolocation API for targeted alerts\\n• Push notification implementation\\n• Emergency broadcast protocols\\n• Administrative alert management'
                    }
                ],
                learningObjectives: [
                    'Implement WebSocket real-time connections',
                    'Use Geolocation API for targeted alerts',
                    'Create push notification systems',
                    'Handle emergency broadcast protocols',
                    'Build administrative alert management'
                ]
            },
            useCases: [
                { title: 'City Governments', description: 'Emergency alerts for natural disasters' },
                { title: 'Universities', description: 'Campus safety notifications' },
                { title: 'Corporate Offices', description: 'Building emergency systems' }
            ]
        },

        // INDIGENOUS PEOPLE - Advanced Components
        {
            id: 'digital-archive-system',
            name: 'Interactive Digital Archive',
            type: 'interactions',
            difficulty: 'advanced',
            hasJS: true,
            mobileFirst: true,
            tags: ['Database', 'Search', 'Media-Management', 'Cultural-Preservation'],
            description: 'Comprehensive digital archive system for cultural preservation with advanced search, media management, and collaborative contribution features.',
            preview: `<div class="component-preview-placeholder">
                <div style="background: #f7f3e9; padding: 2rem; border-radius: 16px; max-width: 450px; margin: 1rem auto; border: 2px solid #d97706;">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                        <div style="width: 50px; height: 50px; background: #d97706; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;">
                            <i data-lucide="archive"></i>
                        </div>
                        <div>
                            <h3 style="margin: 0; color: #92400e; font-size: 1.2rem;">Cultural Archive</h3>
                            <p style="margin: 0; color: #a16207; font-size: 0.8rem;">Preserving Heritage • 1,247 Items</p>
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                        <div style="background: white; padding: 1rem; border-radius: 12px; text-align: center; border: 1px solid #fbbf24;">
                            <div style="width: 40px; height: 40px; background: #fbbf24; border-radius: 8px; margin: 0 auto 0.5rem; display: flex; align-items: center; justify-content: center;">
                                <i data-lucide="image"></i>
                            </div>
                            <p style="margin: 0; font-size: 0.75rem; color: #92400e;">Photos</p>
                            <p style="margin: 0; font-size: 0.7rem; color: #a16207;">342</p>
                        </div>
                        <div style="background: white; padding: 1rem; border-radius: 12px; text-align: center; border: 1px solid #fbbf24;">
                            <div style="width: 40px; height: 40px; background: #fbbf24; border-radius: 8px; margin: 0 auto 0.5rem; display: flex; align-items: center; justify-content: center;">
                                <i data-lucide="mic"></i>
                            </div>
                            <p style="margin: 0; font-size: 0.75rem; color: #92400e;">Audio</p>
                            <p style="margin: 0; font-size: 0.7rem; color: #a16207;">89</p>
                        </div>
                        <div style="background: white; padding: 1rem; border-radius: 12px; text-align: center; border: 1px solid #fbbf24;">
                            <div style="width: 40px; height: 40px; background: #fbbf24; border-radius: 8px; margin: 0 auto 0.5rem; display: flex; align-items: center; justify-content: center;">
                                <i data-lucide="scroll"></i>
                            </div>
                            <p style="margin: 0; font-size: 0.75rem; color: #92400e;">Stories</p>
                            <p style="margin: 0; font-size: 0.7rem; color: #a16207;">156</p>
                        </div>
                    </div>
                    <button style="width: 100%; padding: 1rem; background: #d97706; color: white; border: none; border-radius: 12px; font-weight: 600;">Explore Archive</button>
                </div>
            </div>`,
            workshop: {
                comingSoon: true,
                goal: 'Build a comprehensive digital archive system for cultural preservation',
                duration: 'Coming Soon',
                comingSoon: true,
                steps: [
                    {
                        title: 'Coming Soon',
                        description: 'This comprehensive tutorial is currently being developed. Check back soon for a full step-by-step guide covering digital archives, media management, and cultural preservation!',
                        instruction: 'This tutorial will include:',
                        code: `// Coming Soon Features:
// - Advanced database search systems
// - Media file management (photos, audio, video)
// - Collaborative contribution features
// - Cultural sensitivity interfaces
// - Large-scale data organization
// - Tagging and categorization
// - Timeline and historical views`,
                        codeFile: 'preview.js',
                        tip: 'This advanced tutorial is being crafted to provide comprehensive coverage of digital archive systems.',
                        explanation: 'What you\'ll learn:\\n• Advanced database search systems\\n• Media file management\\n• Collaborative contribution features\\n• Cultural sensitivity interfaces\\n• Large-scale data organization'
                    }
                ],
                learningObjectives: [
                    'Create advanced database search systems',
                    'Implement media file management',
                    'Build collaborative contribution features',
                    'Design cultural sensitivity interfaces',
                    'Handle large-scale data organization'
                ]
            },
            useCases: [
                { title: 'Cultural Centers', description: 'Preserve and share cultural heritage' },
                { title: 'Museums', description: 'Digital collection management' },
                { title: 'Educational Institutions', description: 'Research and learning resources' }
            ]
        },

        // PBA HISTORY - Advanced Components
        {
            id: 'live-game-tracker',
            name: 'Real-time Game Tracker',
            type: 'interactions',
            difficulty: 'advanced',
            hasJS: true,
            mobileFirst: true,
            tags: ['Real-time', 'Sports-Data', 'WebSocket', 'Data-Visualization'],
            description: 'Live sports game tracking with real-time score updates, play-by-play commentary, and interactive statistics visualization.',
            preview: `<div class="component-preview-placeholder">
                <div style="background: #1f2937; color: white; padding: 2rem; border-radius: 16px; max-width: 400px; margin: 1rem auto;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                        <div style="text-align: center;">
                            <div style="width: 60px; height: 60px; background: #dc2626; border-radius: 50%; margin: 0 auto 0.5rem; display: flex; align-items: center; justify-content: center; font-weight: bold;">SMB</div>
                            <p style="margin: 0; font-size: 0.8rem;">San Miguel</p>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2rem; font-weight: bold; margin-bottom: 0.5rem;">98 - 102</div>
                            <div style="background: #dc2626; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.7rem;">LIVE • Q4 2:34</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="width: 60px; height: 60px; background: #2563eb; border-radius: 50%; margin: 0 auto 0.5rem; display: flex; align-items: center; justify-content: center; font-weight: bold;">GIN</div>
                            <p style="margin: 0; font-size: 0.8rem;">Ginebra</p>
                        </div>
                    </div>
                    <div style="background: #374151; padding: 1rem; border-radius: 12px; margin-bottom: 1rem;">
                        <p style="margin: 0; font-size: 0.8rem; color: #d1d5db;">Latest Play:</p>
                        <p style="margin: 0.25rem 0 0 0; font-size: 0.9rem;">Thompson scores 3-pointer! Ginebra extends lead.</p>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem;">
                        <button style="padding: 0.75rem; background: #4f46e5; color: white; border: none; border-radius: 8px; font-size: 0.75rem;">Stats</button>
                        <button style="padding: 0.75rem; background: #374151; color: white; border: none; border-radius: 8px; font-size: 0.75rem;">Plays</button>
                        <button style="padding: 0.75rem; background: #374151; color: white; border: none; border-radius: 8px; font-size: 0.75rem;">Share</button>
                    </div>
                </div>
            </div>`,
            workshop: {
                comingSoon: true,
                goal: 'Create a real-time sports game tracking system with live updates',
                duration: 'Coming Soon',
                comingSoon: true,
                steps: [
                    {
                        title: 'Coming Soon',
                        description: 'This comprehensive tutorial is currently being developed. Check back soon for a full step-by-step guide covering real-time sports tracking, live scores, and play-by-play commentary!',
                        instruction: 'This tutorial will include:',
                        code: `// Coming Soon Features:
// - Real-time WebSocket data streaming
// - Live score updates
// - Play-by-play commentary system
// - Team statistics visualization
// - Quarter/period tracking
// - Player stats integration
// - Social sharing features`,
                        codeFile: 'preview.js',
                        tip: 'This advanced tutorial is being crafted to provide comprehensive coverage of live sports tracking systems.',
                        explanation: 'What you\'ll learn:\\n• Real-time data streaming\\n• Sports statistics visualizations\\n• Live commentary systems\\n• Responsive sports interfaces\\n• Real-time state management'
                    }
                ],
                learningObjectives: [
                    'Implement real-time data streaming',
                    'Create sports statistics visualizations',
                    'Handle live commentary systems',
                    'Build responsive sports interfaces',
                    'Manage real-time state updates'
                ]
            },
            useCases: [
                { title: 'Sports Websites', description: 'Live game tracking and statistics' },
                { title: 'Sports Apps', description: 'Real-time game updates' },
                { title: 'Broadcasting', description: 'Live sports data integration' }
            ]
        },

        // MUSIC TUTORIAL - Advanced Components
        {
            id: 'interactive-music-composer',
            name: 'Interactive Music Composer',
            type: 'interactions',
            difficulty: 'advanced',
            hasJS: true,
            mobileFirst: false,
            tags: ['Audio-Processing', 'Music-Theory', 'Canvas', 'Web-Audio-API'],
            description: 'Advanced music composition tool with virtual instruments, sheet music notation, and audio recording capabilities using Web Audio API.',
            preview: `<div class="component-preview-placeholder">
                <div style="background: #f8fafc; padding: 2rem; border-radius: 16px; border: 2px solid #e2e8f0; max-width: 500px; margin: 1rem auto;">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                        <div style="width: 50px; height: 50px; background: #8b5cf6; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white;">
                            <i data-lucide="music"></i>
                        </div>
                        <div>
                            <h3 style="margin: 0; color: #1e293b; font-size: 1.2rem;">Music Composer</h3>
                            <p style="margin: 0; color: #64748b; font-size: 0.8rem;">Create • Record • Share</p>
                        </div>
                    </div>
                    <div style="background: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border: 1px solid #e2e8f0;">
                        <div style="display: grid; grid-template-columns: repeat(8, 1fr); gap: 2px; margin-bottom: 1rem;">
                            <div style="height: 40px; background: #1e293b; border-radius: 4px 4px 0 0;"></div>
                            <div style="height: 30px; background: #1e293b; border-radius: 4px 4px 0 0; margin-top: 10px;"></div>
                            <div style="height: 40px; background: #1e293b; border-radius: 4px 4px 0 0;"></div>
                            <div style="height: 25px; background: #1e293b; border-radius: 4px 4px 0 0; margin-top: 15px;"></div>
                            <div style="height: 35px; background: #1e293b; border-radius: 4px 4px 0 0; margin-top: 5px;"></div>
                            <div style="height: 40px; background: #1e293b; border-radius: 4px 4px 0 0;"></div>
                            <div style="height: 30px; background: #1e293b; border-radius: 4px 4px 0 0; margin-top: 10px;"></div>
                            <div style="height: 20px; background: #1e293b; border-radius: 4px 4px 0 0; margin-top: 20px;"></div>
                        </div>
                        <div style="display: flex; gap: 0.5rem; justify-content: center;">
                            <button style="width: 30px; height: 30px; background: white; border: 2px solid #1e293b; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">C</button>
                            <button style="width: 20px; height: 20px; background: #1e293b; border: none; border-radius: 2px; margin-top: 5px;"></button>
                            <button style="width: 30px; height: 30px; background: white; border: 2px solid #1e293b; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">D</button>
                            <button style="width: 20px; height: 20px; background: #1e293b; border: none; border-radius: 2px; margin-top: 5px;"></button>
                            <button style="width: 30px; height: 30px; background: white; border: 2px solid #1e293b; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">E</button>
                            <button style="width: 30px; height: 30px; background: white; border: 2px solid #1e293b; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">F</button>
                        </div>
                    </div>
                    <div style="display: flex; gap: 0.75rem;">
                        <button style="flex: 1; padding: 0.75rem; background: #10b981; color: white; border: none; border-radius: 8px; font-size: 0.8rem;">
                            <i data-lucide="play"></i> Play
                        </button>
                        <button style="flex: 1; padding: 0.75rem; background: #dc2626; color: white; border: none; border-radius: 8px; font-size: 0.8rem;">
                            <i data-lucide="square"></i> Record
                        </button>
                        <button style="flex: 1; padding: 0.75rem; background: #6366f1; color: white; border: none; border-radius: 8px; font-size: 0.8rem;">
                            <i data-lucide="save"></i> Save
                        </button>
                    </div>
                </div>
            </div>`,
            workshop: {
                comingSoon: true,
                goal: 'Build an interactive music composition tool with Web Audio API',
                duration: 'Coming Soon',
                comingSoon: true,
                steps: [
                    {
                        title: 'Coming Soon',
                        description: 'This comprehensive tutorial is currently being developed. Check back soon for a full step-by-step guide covering Web Audio API, virtual instruments, and music composition!',
                        instruction: 'This tutorial will include:',
                        code: `// Coming Soon Features:
// - Web Audio API sound generation
// - Virtual piano keyboard
// - Music notation system
// - Audio recording and playback
// - Multiple instrument sounds
// - Tempo and rhythm controls
// - Export to audio file`,
                        codeFile: 'preview.js',
                        tip: 'This advanced tutorial is being crafted to provide comprehensive coverage of browser-based music creation.',
                        explanation: 'What you\'ll learn:\\n• Web Audio API for sound generation\\n• Virtual musical instruments\\n• Music notation systems\\n• Audio recording and playback\\n• Canvas-based interfaces'
                    }
                ],
                learningObjectives: [
                    'Master Web Audio API for sound generation',
                    'Create virtual musical instruments',
                    'Implement music notation systems',
                    'Handle audio recording and playback',
                    'Build complex canvas-based interfaces'
                ]
            },
            useCases: [
                { title: 'Music Education', description: 'Interactive composition lessons' },
                { title: 'Music Production', description: 'Browser-based music creation' },
                { title: 'Entertainment', description: 'Musical games and apps' }
            ]
        },

        // FITNESS WEBSITE - Advanced Components
        {
            id: 'ai-workout-planner',
            name: 'AI Workout Planner',
            type: 'interactions',
            difficulty: 'advanced',
            hasJS: true,
            mobileFirst: true,
            tags: ['AI-Algorithm', 'Fitness-Tracking', 'Machine-Learning', 'Progressive-Overload'],
            description: 'Intelligent workout planning system that adapts to user progress, creates personalized routines, and tracks fitness goals using AI algorithms.',
            preview: `<div class="component-preview-placeholder">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 16px; max-width: 400px; margin: 1rem auto;">
                    <div style="text-align: center; margin-bottom: 1.5rem;">
                        <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 50%; margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="zap"></i>
                        </div>
                        <h3 style="margin: 0; font-size: 1.3rem;">AI Workout Planner</h3>
                        <p style="margin: 0.5rem 0 0 0; opacity: 0.9; font-size: 0.8rem;">Personalized for You</p>
                    </div>
                    <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
                        <h4 style="margin: 0 0 1rem 0; font-size: 1rem;">Today's Workout</h4>
                        <div style="display: grid; gap: 0.75rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="font-size: 0.9rem;">Push-ups</span>
                                <span style="background: rgba(255,255,255,0.2); padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.75rem;">3x12</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="font-size: 0.9rem;">Squats</span>
                                <span style="background: rgba(255,255,255,0.2); padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.75rem;">3x15</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="font-size: 0.9rem;">Plank</span>
                                <span style="background: rgba(255,255,255,0.2); padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.75rem;">3x45s</span>
                            </div>
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                        <div style="text-align: center;">
                            <div style="font-size: 1.5rem; font-weight: bold;">7</div>
                            <div style="font-size: 0.7rem; opacity: 0.8;">Streak</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 1.5rem; font-weight: bold;">85%</div>
                            <div style="font-size: 0.7rem; opacity: 0.8;">Progress</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 1.5rem; font-weight: bold;">12</div>
                            <div style="font-size: 0.7rem; opacity: 0.8;">Level</div>
                        </div>
                    </div>
                    <button style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.2); color: white; border: none; border-radius: 12px; font-weight: 600;">Start Workout</button>
                </div>
            </div>`,
            workshop: {
                comingSoon: true,
                goal: 'Create an AI-powered workout planning system with adaptive algorithms',
                duration: 'Coming Soon',
                comingSoon: true,
                steps: [
                    {
                        title: 'Coming Soon',
                        description: 'This comprehensive tutorial is currently being developed. Check back soon for a full step-by-step guide covering AI-powered fitness planning, adaptive algorithms, and progress tracking!',
                        instruction: 'This tutorial will include:',
                        code: `// Coming Soon Features:
// - AI workout generation algorithms
// - Adaptive difficulty progression
// - Fitness tracking and analytics
// - Gamification (streaks, levels, achievements)
// - Exercise database management
// - Progress visualization charts
// - Personalized recommendations`,
                        codeFile: 'preview.js',
                        tip: 'This advanced tutorial is being crafted to provide comprehensive coverage of AI-powered fitness systems.',
                        explanation: 'What you\'ll learn:\\n• Machine learning for fitness\\n• Adaptive workout progression\\n• Fitness tracking and analytics\\n• Gamification features\\n• User preference systems'
                    }
                ],
                learningObjectives: [
                    'Implement machine learning algorithms for fitness',
                    'Create adaptive workout progression systems',
                    'Build fitness tracking and analytics',
                    'Design gamification and motivation features',
                    'Handle complex user preference systems'
                ]
            },
            useCases: [
                { title: 'Fitness Apps', description: 'Personalized workout recommendations' },
                { title: 'Gyms', description: 'Member workout planning systems' },
                { title: 'Personal Training', description: 'Client progress tracking' }
            ]
        }
    ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdvancedComponentData;
}