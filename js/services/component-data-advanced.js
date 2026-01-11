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
      <i data-lucide="settings"></i>
    </div>
    <div class="admin-title">
      <h2>Pet Admin Panel</h2>
      <p>Add New Pet • Manage Listings</p>
    </div>
  </div>
</div>`,
                        codeFile: 'index.html',
                        tip: 'Admin panels should be clearly labeled so staff know they\'re in the management area!',
                        explanation: 'What this creates:\n• <div class="pet-admin-panel"> - Main container for the entire admin system\n• <div class="admin-header"> - Top section with title and icon\n• <i data-lucide="settings"> - Settings icon using Lucide icons\n• <h2> and <p> - Clear title and subtitle for the admin area'
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
      <i data-lucide="camera"></i>
    </div>
    <p>Click to upload photo or drag and drop</p>
    <input type="file" id="petPhoto" name="petPhoto" accept="image/*" hidden>
  </div>
</div>`,
                        codeFile: 'index.html',
                        tip: 'The accept="image/*" attribute only allows image files to be selected!',
                        explanation: 'What this upload area does:\n• <div class="upload-area"> - Creates a clickable area for file uploads\n• <input type="file"> - The actual file input (hidden for better design)\n• accept="image/*" - Only allows image files (jpg, png, etc.)\n• <i data-lucide="camera"> - Camera icon shows this is for photos'
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
    <i data-lucide="plus"></i>
    Add Pet
  </button>
  <button type="button" class="btn btn-secondary" id="previewBtn">
    <i data-lucide="eye"></i>
    Preview
  </button>
  <button type="button" class="btn btn-danger" id="clearBtn">
    <i data-lucide="trash-2"></i>
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
    <div class="upload-icon"><i data-lucide="camera"></i></div>
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
                goal: 'Create an advanced game database with API integration and complex search',
                duration: '150 minutes',
                steps: [
                    {
                        title: 'Create the Database Container',
                        description: 'Let\'s start by building the main container for our game database with a dark gaming theme!',
                        instruction: 'Add this HTML structure:',
                        code: `<div class="game-database">
  <div class="database-header">
    <h2>Game Database</h2>
    <p>Explore thousands of games</p>
  </div>
</div>`,
                        codeFile: 'index.html',
                        tip: 'Dark themes are popular for gaming websites - they reduce eye strain during long sessions!',
                        explanation: 'What this creates:\\n• Main container with game-database class\\n• Header section with title and subtitle\\n• We\'ll add search and filters next'
                    },
                    {
                        title: 'Add the Search Bar',
                        description: 'Now let\'s add a search bar so users can find games quickly!',
                        instruction: 'Add this search section inside the database container:',
                        code: `  <div class="search-section">
    <div class="search-bar">
      <input type="text" id="gameSearch" placeholder="Search games..." class="search-input">
      <button class="search-btn" aria-label="Search">
        <i data-lucide="search"></i>
      </button>
    </div>
  </div>`,
                        codeFile: 'index.html',
                        tip: 'Using Lucide icons keeps the interface clean and professional!',
                        explanation: 'What this adds:\\n• Search input with placeholder text\\n• Search button with icon\\n• aria-label for accessibility'
                    },
                    {
                        title: 'Add Filter Tags',
                        description: 'Let\'s add genre filter tags so users can browse by category!',
                        instruction: 'Add these filter tags after the search section:',
                        code: `  <div class="filter-tags">
    <button class="filter-tag active" data-genre="all">All</button>
    <button class="filter-tag" data-genre="action">Action</button>
    <button class="filter-tag" data-genre="rpg">RPG</button>
    <button class="filter-tag" data-genre="strategy">Strategy</button>
    <button class="filter-tag" data-genre="sports">Sports</button>
  </div>`,
                        codeFile: 'index.html',
                        tip: 'data-genre attributes will help us filter games with JavaScript later!',
                        explanation: 'What this adds:\\n• Filter buttons for each genre\\n• "active" class shows current selection\\n• data-genre stores the filter value'
                    },
                    {
                        title: 'Add the Games Grid',
                        description: 'Now let\'s create a grid to display our game cards!',
                        instruction: 'Add this games grid section:',
                        code: `  <div class="games-grid" id="gamesGrid">
    <div class="game-card">
      <div class="game-image" style="background: #4f46e5;"></div>
      <div class="game-info">
        <h4 class="game-title">Super Adventure</h4>
        <div class="game-meta">
          <span class="game-rating"><i data-lucide="star"></i> 4.8</span>
          <span class="game-year">2023</span>
          <span class="game-genre">Action</span>
        </div>
      </div>
    </div>
  </div>`,
                        codeFile: 'index.html',
                        tip: 'We\'ll duplicate this card structure for more games!',
                        explanation: 'What this creates:\\n• Grid container for game cards\\n• Sample game card with image placeholder\\n• Game info with rating, year, and genre'
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
  max-width: 900px;
  margin: 2rem auto;
}

.database-header {
  text-align: center;
  margin-bottom: 2rem;
}

.database-header h2 {
  margin: 0;
  font-size: 1.75rem;
}

.database-header p {
  margin: 0.5rem 0 0;
  color: #9ca3af;
}`,
                        codeFile: 'styles.css',
                        tip: 'Dark backgrounds with light text create that gaming aesthetic!',
                        explanation: 'What this styling does:\\n• Dark gray background (#1f2937)\\n• White text for contrast\\n• Centered header with subtle subtitle'
                    },
                    {
                        title: 'Style the Search Bar',
                        description: 'Let\'s make the search bar look modern and easy to use!',
                        instruction: 'Add this CSS:',
                        code: `.search-section {
  margin-bottom: 1.5rem;
}

.search-bar {
  display: flex;
  gap: 0.5rem;
}

.search-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #374151;
  background: #374151;
  color: white;
  border-radius: 8px;
  font-size: 1rem;
}

.search-input::placeholder {
  color: #9ca3af;
}

.search-btn {
  padding: 0.75rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.search-btn:hover {
  background: #2563eb;
}`,
                        codeFile: 'styles.css',
                        tip: 'The blue search button creates a nice accent against the dark theme!',
                        explanation: 'What this does:\\n• Flexbox layout for input and button\\n• Dark input field that matches theme\\n• Blue accent button for the search action'
                    },
                    {
                        title: 'Style the Filter Tags',
                        description: 'Let\'s make the genre filters look like clickable pills!',
                        instruction: 'Add this CSS:',
                        code: `.filter-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.filter-tag {
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
}`,
                        codeFile: 'styles.css',
                        tip: 'The green active state clearly shows which filter is selected!',
                        explanation: 'What this does:\\n• Pill-shaped buttons with border-radius\\n• Gray inactive, green active state\\n• Hover effects for interactivity'
                    },
                    {
                        title: 'Style the Games Grid',
                        description: 'Let\'s create a responsive grid for our game cards!',
                        instruction: 'Add this CSS:',
                        code: `.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.game-card {
  background: #374151;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.game-image {
  height: 150px;
  background-size: cover;
  background-position: center;
}`,
                        codeFile: 'styles.css',
                        tip: 'auto-fill with minmax creates a responsive grid automatically!',
                        explanation: 'What this does:\\n• Responsive grid that adjusts to screen size\\n• Cards lift on hover for interactivity\\n• Image area for game artwork'
                    },
                    {
                        title: 'Style the Game Info',
                        description: 'Let\'s style the game details section of each card!',
                        instruction: 'Add this CSS:',
                        code: `.game-info {
  padding: 1rem;
}

.game-title {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  color: white;
}

.game-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.8rem;
  color: #9ca3af;
}

.game-rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #fbbf24;
}`,
                        codeFile: 'styles.css',
                        tip: 'Yellow star ratings are instantly recognizable!',
                        explanation: 'What this does:\\n• Clean padding around game info\\n• Meta info displayed in a row\\n• Yellow color for star ratings'
                    },
                    {
                        title: 'Add Search JavaScript',
                        description: 'Let\'s make the search bar actually filter games!',
                        instruction: 'Add this JavaScript:',
                        code: `const searchInput = document.getElementById('gameSearch');
const gamesGrid = document.getElementById('gamesGrid');

searchInput.addEventListener('input', function(e) {
  const searchTerm = e.target.value.toLowerCase();
  const gameCards = gamesGrid.querySelectorAll('.game-card');
  
  gameCards.forEach(card => {
    const title = card.querySelector('.game-title').textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});`,
                        codeFile: 'script.js',
                        tip: 'toLowerCase() makes the search case-insensitive!',
                        explanation: 'What this does:\\n• Listens for typing in search input\\n• Filters cards based on game title\\n• Shows/hides cards that match'
                    },
                    {
                        title: 'Add Filter JavaScript',
                        description: 'Now let\'s make the genre filter tags work!',
                        instruction: 'Add this JavaScript:',
                        code: `const filterTags = document.querySelectorAll('.filter-tag');

filterTags.forEach(tag => {
  tag.addEventListener('click', function() {
    // Update active state
    filterTags.forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    
    // Filter games
    const genre = this.dataset.genre;
    const gameCards = gamesGrid.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
      const cardGenre = card.querySelector('.game-genre').textContent.toLowerCase();
      if (genre === 'all' || cardGenre === genre) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});`,
                        codeFile: 'script.js',
                        tip: 'dataset.genre reads the data-genre attribute we added earlier!',
                        explanation: 'What this does:\\n• Adds click handlers to filter tags\\n• Updates active state visually\\n• Shows only games matching the genre'
                    },
                    {
                        title: 'Make It Responsive',
                        description: 'Finally, let\'s ensure it works great on mobile!',
                        instruction: 'Add this media query:',
                        code: `@media (max-width: 600px) {
  .game-database {
    padding: 1rem;
    margin: 1rem;
  }
  
  .filter-tags {
    justify-content: center;
  }
  
  .games-grid {
    grid-template-columns: 1fr;
  }
}`,
                        codeFile: 'styles.css',
                        tip: 'Single column layout works best on mobile phones!',
                        explanation: 'What this does:\\n• Reduces padding on mobile\\n• Centers filter tags\\n• Single column grid for small screens'
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
                        <div style="width: 50px; height: 50px; background: #3b82f6; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white;">
                            <i data-lucide="settings"></i>
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
                                <div style="width: 40px; height: 40px; background: #fbbf24; border-radius: 50%; margin: 0 auto 0.5rem; display: flex; align-items: center; justify-content: center;">
                                    <i data-lucide="camera"></i>
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
                            <i data-lucide="plus"></i> Add Pet
                        </button>
                        <button style="flex: 1; padding: 0.75rem; background: #6366f1; color: white; border: none; border-radius: 8px; font-size: 0.8rem; font-weight: 600;">
                            <i data-lucide="eye"></i> Preview
                        </button>
                    </div>
                </div>
            </div>`,
            workshop: {
                goal: 'Build a complete admin panel for managing pet listings dynamically',
                duration: '200 minutes',
                steps: [
                    {
                        title: 'Create the Admin Panel Container',
                        description: 'Let\'s start by creating the main container for our pet management system!',
                        instruction: 'Add this HTML structure:',
                        code: `<div class="pet-admin-panel">
  <div class="admin-header">
    <div class="admin-icon">
      <i data-lucide="settings"></i>
    </div>
    <div class="admin-title">
      <h2>Pet Admin Panel</h2>
      <p>Add New Pet • Manage Listings</p>
    </div>
  </div>
</div>`,
                        codeFile: 'index.html',
                        tip: 'Admin panels should be clearly labeled so staff know they\'re in the management area!',
                        explanation: 'What this creates:\\n• Main container for the admin system\\n• Header with icon and title\\n• Subtitle showing available actions'
                    },
                    {
                        title: 'Add the Pet Form Container',
                        description: 'Now let\'s add the form where staff can enter pet details!',
                        instruction: 'Add this form structure inside the admin panel:',
                        code: `  <div class="pet-form-container">
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
                        explanation: 'What this form does:\\n• Creates a form for data collection\\n• Groups related fields in rows\\n• Labels tell users what each field is for'
                    },
                    {
                        title: 'Add Photo Upload Section',
                        description: 'Every pet needs a photo! Let\'s add an upload area.',
                        instruction: 'Add this photo upload section to your form:',
                        code: `      <div class="form-group photo-upload">
        <label>Pet Photo</label>
        <div class="upload-area" id="uploadArea">
          <div class="upload-icon">
            <i data-lucide="camera"></i>
          </div>
          <p>Click to upload photo or drag and drop</p>
          <input type="file" id="petPhoto" name="petPhoto" accept="image/*" hidden>
        </div>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'The accept="image/*" attribute only allows image files!',
                        explanation: 'What this upload area does:\\n• Creates a clickable upload zone\\n• Hidden file input for better design\\n• Camera icon shows this is for photos'
                    },
                    {
                        title: 'Add Pet Type and Status Dropdowns',
                        description: 'Let\'s add dropdown menus for pet type and adoption status!',
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
                        tip: 'Dropdowns prevent typos and ensure consistent data!',
                        explanation: 'What these dropdowns do:\\n• Select menus for pet type and status\\n• Empty first option forces a choice\\n• Predefined options ensure consistency'
                    },
                    {
                        title: 'Add Action Buttons',
                        description: 'Let\'s add buttons to save, preview, and clear the form!',
                        instruction: 'Add these buttons after your form fields:',
                        code: `      <div class="form-actions">
        <button type="submit" class="btn btn-primary">
          <i data-lucide="plus"></i> Add Pet
        </button>
        <button type="button" class="btn btn-secondary" id="previewBtn">
          <i data-lucide="eye"></i> Preview
        </button>
        <button type="button" class="btn btn-danger" id="clearBtn">
          <i data-lucide="trash-2"></i> Clear
        </button>
      </div>`,
                        codeFile: 'index.html',
                        tip: 'Different button colors help users understand each action!',
                        explanation: 'What these buttons do:\\n• Add Pet (green) - Saves the new pet\\n• Preview (blue) - Shows how it will look\\n• Clear (red) - Resets the form'
                    },
                    {
                        title: 'Style the Admin Panel',
                        description: 'Let\'s make our admin panel look professional!',
                        instruction: 'Add this CSS:',
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
}

.admin-title p {
  margin: 0;
  color: #64748b;
  font-size: 0.9rem;
}`,
                        codeFile: 'styles.css',
                        tip: 'Light backgrounds make admin panels feel clean!',
                        explanation: 'What this styling does:\\n• Light gray background\\n• Blue icon for visual interest\\n• Clean typography hierarchy'
                    },
                    {
                        title: 'Style the Form',
                        description: 'Let\'s style the form layout and inputs!',
                        instruction: 'Add this CSS:',
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
}

.form-group label {
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
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #3b82f6;
}`,
                        codeFile: 'styles.css',
                        tip: 'Blue focus borders show which field is active!',
                        explanation: 'What this does:\\n• Two-column grid layout\\n• Clean input styling\\n• Focus states for accessibility'
                    },
                    {
                        title: 'Style the Upload Area',
                        description: 'Let\'s make the photo upload area inviting!',
                        instruction: 'Add this CSS:',
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
  color: white;
}`,
                        codeFile: 'styles.css',
                        tip: 'Dashed borders are a universal sign for drop zones!',
                        explanation: 'What this does:\\n• Dashed border shows it\'s a drop zone\\n• Hover effect provides feedback\\n• Yellow icon is friendly and visible'
                    },
                    {
                        title: 'Style the Buttons',
                        description: 'Let\'s create distinct button styles for each action!',
                        instruction: 'Add this CSS:',
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

.btn-secondary {
  background: #6366f1;
  color: white;
}

.btn-danger {
  background: #ef4444;
  color: white;
}

.btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}`,
                        codeFile: 'styles.css',
                        tip: 'Color coding helps users understand button purposes!',
                        explanation: 'What this does:\\n• Green for primary action\\n• Blue for secondary action\\n• Red for destructive action'
                    },
                    {
                        title: 'Add Form Submission JavaScript',
                        description: 'Let\'s handle form submission and save pet data!',
                        instruction: 'Add this JavaScript:',
                        code: `const petForm = document.getElementById('petForm');

petForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = new FormData(petForm);
  const petData = {
    name: formData.get('petName'),
    age: formData.get('petAge'),
    type: formData.get('petType'),
    status: formData.get('petStatus'),
    id: Date.now()
  };
  
  // Save to localStorage
  let pets = JSON.parse(localStorage.getItem('pets')) || [];
  pets.push(petData);
  localStorage.setItem('pets', JSON.stringify(pets));
  
  alert('Pet added successfully!');
  petForm.reset();
});`,
                        codeFile: 'script.js',
                        tip: 'localStorage keeps data even when the browser closes!',
                        explanation: 'What this does:\\n• Prevents default form submission\\n• Collects form data\\n• Saves to localStorage\\n• Resets form after saving'
                    },
                    {
                        title: 'Add Photo Upload JavaScript',
                        description: 'Let\'s make the photo upload area work!',
                        instruction: 'Add this JavaScript:',
                        code: `const uploadArea = document.getElementById('uploadArea');
const petPhotoInput = document.getElementById('petPhoto');

uploadArea.addEventListener('click', () => {
  petPhotoInput.click();
});

petPhotoInput.addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
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
                        tip: 'FileReader lets us preview images before uploading!',
                        explanation: 'What this does:\\n• Makes upload area clickable\\n• Shows preview of selected image\\n• Displays filename for confirmation'
                    },
                    {
                        title: 'Add Clear Button JavaScript',
                        description: 'Finally, let\'s make the clear button reset everything!',
                        instruction: 'Add this JavaScript:',
                        code: `const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', function() {
  petForm.reset();
  uploadArea.innerHTML = \`
    <div class="upload-icon">
      <i data-lucide="camera"></i>
    </div>
    <p>Click to upload photo or drag and drop</p>
  \`;
  // Re-initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});`,
                        codeFile: 'script.js',
                        tip: 'Don\'t forget to restore the upload area\'s original content!',
                        explanation: 'What this does:\\n• Resets all form fields\\n• Restores upload area to original state\\n• Re-initializes icons if needed'
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
                goal: 'Create a real-time emergency alert system with geolocation and notifications',
                duration: '160 minutes',
                steps: [
                    {
                        title: 'Create the Alert Container',
                        description: 'Let\'s build the main emergency alert banner with a striking red design!',
                        instruction: 'Add this HTML structure:',
                        code: `<div class="emergency-alert" id="emergencyAlert">
  <div class="alert-header">
    <div class="alert-icon">
      <i data-lucide="alert-triangle"></i>
    </div>
    <div class="alert-title">
      <h3>EMERGENCY ALERT</h3>
      <p class="alert-location">Active Now • Downtown Area</p>
    </div>
    <button class="alert-close" aria-label="Dismiss alert">
      <i data-lucide="x"></i>
    </button>
  </div>
</div>`,
                        codeFile: 'index.html',
                        tip: 'Emergency alerts need to be immediately visible and attention-grabbing!',
                        explanation: 'What this creates:\\n• Main alert container\\n• Warning icon and title\\n• Location indicator\\n• Dismiss button'
                    },
                    {
                        title: 'Add Alert Message Content',
                        description: 'Now let\'s add the alert message and action buttons!',
                        instruction: 'Add this content inside the alert container:',
                        code: `  <div class="alert-content">
    <p class="alert-message">Severe weather warning in effect. Seek shelter immediately. Avoid downtown area until further notice.</p>
  </div>
  <div class="alert-actions">
    <button class="alert-btn alert-btn-info">
      <i data-lucide="info"></i> More Info
    </button>
    <button class="alert-btn alert-btn-share">
      <i data-lucide="share-2"></i> Share
    </button>
  </div>`,
                        codeFile: 'index.html',
                        tip: 'Clear, actionable messages help people respond quickly!',
                        explanation: 'What this adds:\\n• Alert message text\\n• More Info button for details\\n• Share button for spreading awareness'
                    },
                    {
                        title: 'Style the Alert Container',
                        description: 'Let\'s create an urgent red design that demands attention!',
                        instruction: 'Add this CSS:',
                        code: `.emergency-alert {
  background: #dc2626;
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  max-width: 500px;
  margin: 2rem auto;
  position: relative;
  overflow: hidden;
  animation: pulse-border 2s infinite;
}

@keyframes pulse-border {
  0%, 100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.4); }
  50% { box-shadow: 0 0 0 10px rgba(220, 38, 38, 0); }
}`,
                        codeFile: 'styles.css',
                        tip: 'The pulsing animation draws attention to the alert!',
                        explanation: 'What this does:\\n• Bright red background for urgency\\n• Pulsing shadow animation\\n• Rounded corners for modern look'
                    },
                    {
                        title: 'Style the Alert Header',
                        description: 'Let\'s arrange the icon, title, and close button!',
                        instruction: 'Add this CSS:',
                        code: `.alert-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.alert-icon {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.alert-title h3 {
  margin: 0;
  font-size: 1.1rem;
  letter-spacing: 0.05em;
}

.alert-location {
  margin: 0;
  font-size: 0.8rem;
  opacity: 0.9;
}

.alert-close {
  margin-left: auto;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}`,
                        codeFile: 'styles.css',
                        tip: 'Semi-transparent backgrounds work great on colored containers!',
                        explanation: 'What this does:\\n• Flexbox layout for header\\n• Circular icon and close button\\n• Auto margin pushes close button right'
                    },
                    {
                        title: 'Style the Alert Content',
                        description: 'Let\'s style the message and action buttons!',
                        instruction: 'Add this CSS:',
                        code: `.alert-message {
  margin: 0 0 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.alert-actions {
  display: flex;
  gap: 0.75rem;
}

.alert-btn {
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background 0.3s;
}

.alert-btn-info {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.alert-btn-share {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.alert-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}`,
                        codeFile: 'styles.css',
                        tip: 'Consistent button styling keeps the interface clean!',
                        explanation: 'What this does:\\n• Readable message text\\n• Equal-width action buttons\\n• Hover effects for interactivity'
                    },
                    {
                        title: 'Add Dismiss Functionality',
                        description: 'Let\'s make the close button dismiss the alert!',
                        instruction: 'Add this JavaScript:',
                        code: `const alertElement = document.getElementById('emergencyAlert');
const closeBtn = alertElement.querySelector('.alert-close');

closeBtn.addEventListener('click', function() {
  alertElement.style.animation = 'slideOut 0.3s ease forwards';
  setTimeout(() => {
    alertElement.style.display = 'none';
  }, 300);
});

// Add slide out animation
const style = document.createElement('style');
style.textContent = \`
  @keyframes slideOut {
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
\`;
document.head.appendChild(style);`,
                        codeFile: 'script.js',
                        tip: 'Smooth animations make dismissing feel natural!',
                        explanation: 'What this does:\\n• Adds click handler to close button\\n• Animates the alert sliding out\\n• Hides element after animation'
                    },
                    {
                        title: 'Add Alert Sound (Optional)',
                        description: 'Let\'s add an optional alert sound for urgent notifications!',
                        instruction: 'Add this JavaScript:',
                        code: `// Function to play alert sound
function playAlertSound() {
  // Create audio context for alert tone
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.value = 800;
  oscillator.type = 'sine';
  gainNode.gain.value = 0.3;
  
  oscillator.start();
  setTimeout(() => oscillator.stop(), 200);
}

// Uncomment to play sound when alert appears
// playAlertSound();`,
                        codeFile: 'script.js',
                        tip: 'Audio alerts should be optional and not too loud!',
                        explanation: 'What this does:\\n• Creates a simple alert tone\\n• Uses Web Audio API\\n• Commented out by default'
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
                goal: 'Build a comprehensive digital archive system for cultural preservation',
                duration: '200 minutes',
                steps: [
                    {
                        title: 'Create the Archive Container',
                        description: 'Let\'s build the main container with a warm, cultural theme!',
                        instruction: 'Add this HTML structure:',
                        code: `<div class="digital-archive">
  <div class="archive-header">
    <div class="archive-icon">
      <i data-lucide="archive"></i>
    </div>
    <div class="archive-title">
      <h2>Cultural Archive</h2>
      <p>Preserving Heritage • 1,247 Items</p>
    </div>
  </div>
</div>`,
                        codeFile: 'index.html',
                        tip: 'Warm colors like amber and brown evoke tradition and heritage!',
                        explanation: 'What this creates:\\n• Main archive container\\n• Header with icon and title\\n• Item count shows collection size'
                    },
                    {
                        title: 'Add Category Cards',
                        description: 'Let\'s add cards showing different archive categories!',
                        instruction: 'Add these category cards:',
                        code: `  <div class="archive-categories">
    <div class="category-card">
      <div class="category-icon">
        <i data-lucide="image"></i>
      </div>
      <p class="category-name">Photos</p>
      <p class="category-count">342</p>
    </div>
    <div class="category-card">
      <div class="category-icon">
        <i data-lucide="mic"></i>
      </div>
      <p class="category-name">Audio</p>
      <p class="category-count">89</p>
    </div>
    <div class="category-card">
      <div class="category-icon">
        <i data-lucide="scroll"></i>
      </div>
      <p class="category-name">Stories</p>
      <p class="category-count">156</p>
    </div>
  </div>`,
                        codeFile: 'index.html',
                        tip: 'Category cards help users navigate large collections!',
                        explanation: 'What this adds:\\n• Three category cards\\n• Icons representing each type\\n• Item counts for each category'
                    },
                    {
                        title: 'Add Search and Explore Button',
                        description: 'Let\'s add a search bar and explore button!',
                        instruction: 'Add this search section:',
                        code: `  <div class="archive-search">
    <input type="text" placeholder="Search the archive..." class="search-input">
    <button class="search-btn">
      <i data-lucide="search"></i>
    </button>
  </div>
  <button class="explore-btn">
    <i data-lucide="compass"></i> Explore Archive
  </button>`,
                        codeFile: 'index.html',
                        tip: 'A prominent explore button encourages discovery!',
                        explanation: 'What this adds:\\n• Search input for finding items\\n• Search button with icon\\n• Large explore button'
                    },
                    {
                        title: 'Style the Archive Container',
                        description: 'Let\'s create a warm, heritage-inspired design!',
                        instruction: 'Add this CSS:',
                        code: `.digital-archive {
  background: #f7f3e9;
  padding: 2rem;
  border-radius: 16px;
  max-width: 500px;
  margin: 2rem auto;
  border: 2px solid #d97706;
}

.archive-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.archive-icon {
  width: 50px;
  height: 50px;
  background: #d97706;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.archive-title h2 {
  margin: 0;
  color: #92400e;
  font-size: 1.25rem;
}

.archive-title p {
  margin: 0;
  color: #a16207;
  font-size: 0.85rem;
}`,
                        codeFile: 'styles.css',
                        tip: 'Amber and brown tones feel warm and traditional!',
                        explanation: 'What this does:\\n• Warm cream background\\n• Amber accent colors\\n• Brown text for readability'
                    },
                    {
                        title: 'Style the Category Cards',
                        description: 'Let\'s make the category cards look inviting!',
                        instruction: 'Add this CSS:',
                        code: `.archive-categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.category-card {
  background: white;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #fbbf24;
  transition: transform 0.3s, box-shadow 0.3s;
}

.category-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(217, 119, 6, 0.15);
}

.category-icon {
  width: 40px;
  height: 40px;
  background: #fbbf24;
  border-radius: 8px;
  margin: 0 auto 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #92400e;
}

.category-name {
  margin: 0;
  font-size: 0.85rem;
  color: #92400e;
  font-weight: 600;
}

.category-count {
  margin: 0.25rem 0 0;
  font-size: 0.75rem;
  color: #a16207;
}`,
                        codeFile: 'styles.css',
                        tip: 'Hover effects make cards feel interactive!',
                        explanation: 'What this does:\\n• Three-column grid layout\\n• White cards with amber borders\\n• Lift effect on hover'
                    },
                    {
                        title: 'Style the Search and Button',
                        description: 'Let\'s style the search bar and explore button!',
                        instruction: 'Add this CSS:',
                        code: `.archive-search {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.archive-search .search-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #d97706;
  border-radius: 8px;
  background: white;
  font-size: 0.9rem;
}

.archive-search .search-btn {
  padding: 0.75rem 1rem;
  background: #d97706;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.explore-btn {
  width: 100%;
  padding: 1rem;
  background: #d97706;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background 0.3s;
}

.explore-btn:hover {
  background: #b45309;
}`,
                        codeFile: 'styles.css',
                        tip: 'The explore button is the main call-to-action!',
                        explanation: 'What this does:\\n• Flexbox search layout\\n• Amber-themed buttons\\n• Full-width explore button'
                    },
                    {
                        title: 'Add Search Functionality',
                        description: 'Let\'s make the search bar functional!',
                        instruction: 'Add this JavaScript:',
                        code: `const searchInput = document.querySelector('.archive-search .search-input');
const searchBtn = document.querySelector('.archive-search .search-btn');

function performSearch() {
  const query = searchInput.value.trim();
  if (query) {
    console.log('Searching for:', query);
    // In a real app, this would search the database
    alert(\`Searching archive for: "\${query}"\`);
  }
}

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    performSearch();
  }
});`,
                        codeFile: 'script.js',
                        tip: 'Supporting Enter key makes search more accessible!',
                        explanation: 'What this does:\\n• Handles search button click\\n• Supports Enter key to search\\n• Shows search query (demo)'
                    },
                    {
                        title: 'Add Category Click Handlers',
                        description: 'Let\'s make the category cards clickable!',
                        instruction: 'Add this JavaScript:',
                        code: `const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', function() {
    const categoryName = this.querySelector('.category-name').textContent;
    console.log('Browsing category:', categoryName);
    // In a real app, this would filter the archive
    alert(\`Browsing \${categoryName} collection\`);
  });
});`,
                        codeFile: 'script.js',
                        tip: 'Visual cursor change shows cards are clickable!',
                        explanation: 'What this does:\\n• Makes cards clickable\\n• Gets category name on click\\n• Would filter archive in real app'
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
                goal: 'Create a real-time sports game tracking system with live updates',
                duration: '170 minutes',
                steps: [
                    {
                        title: 'Create the Game Tracker Container',
                        description: 'Let\'s build the main scoreboard with a dark sports theme!',
                        instruction: 'Add this HTML structure:',
                        code: `<div class="game-tracker">
  <div class="scoreboard">
    <div class="team team-home">
      <div class="team-logo">SMB</div>
      <p class="team-name">San Miguel</p>
    </div>
    <div class="score-center">
      <div class="score">98 - 102</div>
      <div class="game-status">LIVE • Q4 2:34</div>
    </div>
    <div class="team team-away">
      <div class="team-logo">GIN</div>
      <p class="team-name">Ginebra</p>
    </div>
  </div>
</div>`,
                        codeFile: 'index.html',
                        tip: 'Sports interfaces need to show scores prominently!',
                        explanation: 'What this creates:\\n• Main tracker container\\n• Two team sections\\n• Central score display\\n• Live game status'
                    },
                    {
                        title: 'Add Play-by-Play Section',
                        description: 'Let\'s add a section showing the latest play!',
                        instruction: 'Add this play-by-play section:',
                        code: `  <div class="latest-play">
    <p class="play-label">Latest Play:</p>
    <p class="play-text">Thompson scores 3-pointer! Ginebra extends lead.</p>
  </div>`,
                        codeFile: 'index.html',
                        tip: 'Play-by-play keeps fans engaged with the action!',
                        explanation: 'What this adds:\\n• Latest play label\\n• Play description text\\n• Updates in real-time'
                    },
                    {
                        title: 'Add Action Buttons',
                        description: 'Let\'s add buttons for stats, plays, and sharing!',
                        instruction: 'Add these action buttons:',
                        code: `  <div class="tracker-actions">
    <button class="tracker-btn active">
      <i data-lucide="bar-chart-2"></i> Stats
    </button>
    <button class="tracker-btn">
      <i data-lucide="list"></i> Plays
    </button>
    <button class="tracker-btn">
      <i data-lucide="share-2"></i> Share
    </button>
  </div>`,
                        codeFile: 'index.html',
                        tip: 'Quick access buttons improve user experience!',
                        explanation: 'What this adds:\\n• Stats button (active by default)\\n• Plays history button\\n• Share button'
                    },
                    {
                        title: 'Style the Game Tracker',
                        description: 'Let\'s create a dark, sporty design!',
                        instruction: 'Add this CSS:',
                        code: `.game-tracker {
  background: #1f2937;
  color: white;
  padding: 2rem;
  border-radius: 16px;
  max-width: 450px;
  margin: 2rem auto;
}

.scoreboard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.team {
  text-align: center;
}

.team-logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
  margin: 0 auto 0.5rem;
}

.team-home .team-logo {
  background: #dc2626;
}

.team-away .team-logo {
  background: #2563eb;
}

.team-name {
  margin: 0;
  font-size: 0.85rem;
}`,
                        codeFile: 'styles.css',
                        tip: 'Team colors help fans identify their team quickly!',
                        explanation: 'What this does:\\n• Dark background for sports feel\\n• Flexbox scoreboard layout\\n• Colored team logos'
                    },
                    {
                        title: 'Style the Score Display',
                        description: 'Let\'s make the score big and prominent!',
                        instruction: 'Add this CSS:',
                        code: `.score-center {
  text-align: center;
}

.score {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.game-status {
  background: #dc2626;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  display: inline-block;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}`,
                        codeFile: 'styles.css',
                        tip: 'The pulsing LIVE indicator shows the game is active!',
                        explanation: 'What this does:\\n• Large, bold score\\n• Red LIVE badge\\n• Pulsing animation for attention'
                    },
                    {
                        title: 'Style the Play-by-Play',
                        description: 'Let\'s style the latest play section!',
                        instruction: 'Add this CSS:',
                        code: `.latest-play {
  background: #374151;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.play-label {
  margin: 0;
  font-size: 0.8rem;
  color: #9ca3af;
}

.play-text {
  margin: 0.25rem 0 0;
  font-size: 0.95rem;
}`,
                        codeFile: 'styles.css',
                        tip: 'Subtle background separates the play from the score!',
                        explanation: 'What this does:\\n• Darker background for contrast\\n• Small label text\\n• Clear play description'
                    },
                    {
                        title: 'Style the Action Buttons',
                        description: 'Let\'s create toggle-style action buttons!',
                        instruction: 'Add this CSS:',
                        code: `.tracker-actions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.tracker-btn {
  padding: 0.75rem;
  background: #374151;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background 0.3s;
}

.tracker-btn:hover {
  background: #4b5563;
}

.tracker-btn.active {
  background: #4f46e5;
}`,
                        codeFile: 'styles.css',
                        tip: 'The active state shows which view is selected!',
                        explanation: 'What this does:\\n• Three equal-width buttons\\n• Purple active state\\n• Hover effects'
                    },
                    {
                        title: 'Add Button Toggle JavaScript',
                        description: 'Let\'s make the buttons toggle between views!',
                        instruction: 'Add this JavaScript:',
                        code: `const trackerBtns = document.querySelectorAll('.tracker-btn');

trackerBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active from all buttons
    trackerBtns.forEach(b => b.classList.remove('active'));
    // Add active to clicked button
    this.classList.add('active');
    
    // Get button text to determine action
    const action = this.textContent.trim();
    console.log('Switched to:', action);
  });
});`,
                        codeFile: 'script.js',
                        tip: 'Toggle buttons provide clear visual feedback!',
                        explanation: 'What this does:\\n• Handles button clicks\\n• Updates active state\\n• Logs the selected view'
                    },
                    {
                        title: 'Add Score Update Simulation',
                        description: 'Let\'s simulate live score updates!',
                        instruction: 'Add this JavaScript:',
                        code: `const scoreElement = document.querySelector('.score');
const playText = document.querySelector('.play-text');

const plays = [
  'Thompson scores 3-pointer! Ginebra extends lead.',
  'Fajardo with the slam dunk! San Miguel responds.',
  'Timeout called by San Miguel.',
  'Free throw made by Brownlee.',
  'Turnover! San Miguel steals the ball.'
];

let homeScore = 98;
let awayScore = 102;

// Simulate score updates every 10 seconds
setInterval(() => {
  // Random score update
  if (Math.random() > 0.5) {
    homeScore += Math.floor(Math.random() * 3) + 1;
  } else {
    awayScore += Math.floor(Math.random() * 3) + 1;
  }
  
  scoreElement.textContent = \`\${homeScore} - \${awayScore}\`;
  playText.textContent = plays[Math.floor(Math.random() * plays.length)];
}, 10000);`,
                        codeFile: 'script.js',
                        tip: 'In a real app, this would connect to a live data feed!',
                        explanation: 'What this does:\\n• Simulates score changes\\n• Updates play-by-play text\\n• Runs every 10 seconds'
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
                goal: 'Build an interactive music composition tool with Web Audio API',
                duration: '240 minutes',
                steps: [
                    {
                        title: 'Create the Composer Container',
                        description: 'Let\'s build the main container for our music composer!',
                        instruction: 'Add this HTML structure:',
                        code: `<div class="music-composer">
  <div class="composer-header">
    <div class="composer-icon">
      <i data-lucide="music"></i>
    </div>
    <div class="composer-title">
      <h2>Music Composer</h2>
      <p>Create • Record • Share</p>
    </div>
  </div>
</div>`,
                        codeFile: 'index.html',
                        tip: 'Music apps need a clean interface so users can focus on creating!',
                        explanation: 'What this creates:\\n• Main composer container\\n• Header with music icon\\n• Title and subtitle'
                    },
                    {
                        title: 'Add the Piano Keys',
                        description: 'Let\'s create a simple piano keyboard interface!',
                        instruction: 'Add this piano section:',
                        code: `  <div class="piano-container">
    <div class="piano-keys">
      <button class="piano-key white" data-note="C4">C</button>
      <button class="piano-key black" data-note="C#4"></button>
      <button class="piano-key white" data-note="D4">D</button>
      <button class="piano-key black" data-note="D#4"></button>
      <button class="piano-key white" data-note="E4">E</button>
      <button class="piano-key white" data-note="F4">F</button>
      <button class="piano-key black" data-note="F#4"></button>
      <button class="piano-key white" data-note="G4">G</button>
    </div>
  </div>`,
                        codeFile: 'index.html',
                        tip: 'data-note attributes store the musical note for each key!',
                        explanation: 'What this adds:\\n• Piano key container\\n• White and black keys\\n• Note data for each key'
                    },
                    {
                        title: 'Add Control Buttons',
                        description: 'Let\'s add play, record, and save buttons!',
                        instruction: 'Add these control buttons:',
                        code: `  <div class="composer-controls">
    <button class="control-btn play-btn" id="playBtn">
      <i data-lucide="play"></i> Play
    </button>
    <button class="control-btn record-btn" id="recordBtn">
      <i data-lucide="circle"></i> Record
    </button>
    <button class="control-btn save-btn" id="saveBtn">
      <i data-lucide="save"></i> Save
    </button>
  </div>`,
                        codeFile: 'index.html',
                        tip: 'Color-coded buttons help users understand each action!',
                        explanation: 'What this adds:\\n• Play button (green)\\n• Record button (red)\\n• Save button (blue)'
                    },
                    {
                        title: 'Style the Composer Container',
                        description: 'Let\'s create a clean, modern design!',
                        instruction: 'Add this CSS:',
                        code: `.music-composer {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 16px;
  border: 2px solid #e2e8f0;
  max-width: 500px;
  margin: 2rem auto;
}

.composer-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.composer-icon {
  width: 50px;
  height: 50px;
  background: #8b5cf6;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.composer-title h2 {
  margin: 0;
  color: #1e293b;
}

.composer-title p {
  margin: 0;
  color: #64748b;
  font-size: 0.85rem;
}`,
                        codeFile: 'styles.css',
                        tip: 'Purple is often associated with creativity and music!',
                        explanation: 'What this does:\\n• Light background\\n• Purple accent icon\\n• Clean typography'
                    },
                    {
                        title: 'Style the Piano Keys',
                        description: 'Let\'s make the piano look realistic!',
                        instruction: 'Add this CSS:',
                        code: `.piano-container {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  border: 1px solid #e2e8f0;
}

.piano-keys {
  display: flex;
  justify-content: center;
  position: relative;
  height: 120px;
}

.piano-key {
  border: none;
  cursor: pointer;
  transition: all 0.1s;
}

.piano-key.white {
  width: 40px;
  height: 120px;
  background: white;
  border: 2px solid #1e293b;
  border-radius: 0 0 6px 6px;
  margin: 0 1px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 8px;
  font-size: 0.75rem;
  font-weight: bold;
  color: #64748b;
}

.piano-key.black {
  width: 28px;
  height: 70px;
  background: #1e293b;
  border-radius: 0 0 4px 4px;
  position: absolute;
  z-index: 1;
}

.piano-key.white:active {
  background: #e2e8f0;
}

.piano-key.black:active {
  background: #374151;
}`,
                        codeFile: 'styles.css',
                        tip: 'The :active state shows when keys are pressed!',
                        explanation: 'What this does:\\n• White keys with labels\\n• Black keys positioned above\\n• Press feedback with :active'
                    },
                    {
                        title: 'Position the Black Keys',
                        description: 'Let\'s position each black key correctly!',
                        instruction: 'Add this CSS:',
                        code: `.piano-key.black:nth-of-type(2) { left: 30px; }
.piano-key.black:nth-of-type(4) { left: 72px; }
.piano-key.black:nth-of-type(7) { left: 156px; }`,
                        codeFile: 'styles.css',
                        tip: 'Black keys sit between specific white keys!',
                        explanation: 'What this does:\\n• Positions C# between C and D\\n• Positions D# between D and E\\n• Positions F# between F and G'
                    },
                    {
                        title: 'Style the Control Buttons',
                        description: 'Let\'s create distinct button styles!',
                        instruction: 'Add this CSS:',
                        code: `.composer-controls {
  display: flex;
  gap: 0.75rem;
}

.control-btn {
  flex: 1;
  padding: 0.75rem;
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

.play-btn {
  background: #10b981;
  color: white;
}

.record-btn {
  background: #ef4444;
  color: white;
}

.save-btn {
  background: #6366f1;
  color: white;
}

.control-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}`,
                        codeFile: 'styles.css',
                        tip: 'Green for play, red for record - intuitive colors!',
                        explanation: 'What this does:\\n• Three equal-width buttons\\n• Color-coded by function\\n• Hover lift effect'
                    },
                    {
                        title: 'Add Web Audio API Setup',
                        description: 'Let\'s set up the audio context for playing sounds!',
                        instruction: 'Add this JavaScript:',
                        code: `// Audio context for generating sounds
let audioContext;

function initAudio() {
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
}

// Note frequencies (Hz)
const noteFrequencies = {
  'C4': 261.63,
  'C#4': 277.18,
  'D4': 293.66,
  'D#4': 311.13,
  'E4': 329.63,
  'F4': 349.23,
  'F#4': 369.99,
  'G4': 392.00
};

function playNote(note) {
  if (!audioContext) initAudio();
  
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.value = noteFrequencies[note];
  oscillator.type = 'sine';
  
  gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
  
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.5);
}`,
                        codeFile: 'script.js',
                        tip: 'Web Audio API lets us generate sounds in the browser!',
                        explanation: 'What this does:\\n• Creates audio context\\n• Defines note frequencies\\n• Plays notes with oscillator'
                    },
                    {
                        title: 'Add Piano Key Event Listeners',
                        description: 'Let\'s make the piano keys playable!',
                        instruction: 'Add this JavaScript:',
                        code: `const pianoKeys = document.querySelectorAll('.piano-key');

pianoKeys.forEach(key => {
  key.addEventListener('mousedown', function() {
    const note = this.dataset.note;
    if (note) {
      playNote(note);
      this.classList.add('playing');
    }
  });
  
  key.addEventListener('mouseup', function() {
    this.classList.remove('playing');
  });
  
  key.addEventListener('mouseleave', function() {
    this.classList.remove('playing');
  });
});`,
                        codeFile: 'script.js',
                        tip: 'mousedown plays immediately, mouseup/leave stops the visual!',
                        explanation: 'What this does:\\n• Listens for mouse events\\n• Plays note on mousedown\\n• Adds visual feedback class'
                    },
                    {
                        title: 'Add Keyboard Support',
                        description: 'Let\'s allow playing with computer keyboard too!',
                        instruction: 'Add this JavaScript:',
                        code: `// Keyboard mapping
const keyboardMap = {
  'a': 'C4',
  'w': 'C#4',
  's': 'D4',
  'e': 'D#4',
  'd': 'E4',
  'f': 'F4',
  't': 'F#4',
  'g': 'G4'
};

document.addEventListener('keydown', function(e) {
  const note = keyboardMap[e.key.toLowerCase()];
  if (note && !e.repeat) {
    playNote(note);
    // Highlight the key
    const key = document.querySelector(\`[data-note="\${note}"]\`);
    if (key) key.classList.add('playing');
  }
});

document.addEventListener('keyup', function(e) {
  const note = keyboardMap[e.key.toLowerCase()];
  if (note) {
    const key = document.querySelector(\`[data-note="\${note}"]\`);
    if (key) key.classList.remove('playing');
  }
});`,
                        codeFile: 'script.js',
                        tip: 'A-S-D-F-G maps to white keys, W-E-T to black keys!',
                        explanation: 'What this does:\\n• Maps keyboard to notes\\n• Plays on keydown\\n• Visual feedback on keys'
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
                goal: 'Create an AI-powered workout planning system with adaptive algorithms',
                duration: '220 minutes',
                steps: [
                    {
                        title: 'Create the Planner Container',
                        description: 'Let\'s build the main container with a vibrant fitness theme!',
                        instruction: 'Add this HTML structure:',
                        code: `<div class="workout-planner">
  <div class="planner-header">
    <div class="planner-icon">
      <i data-lucide="zap"></i>
    </div>
    <h2>AI Workout Planner</h2>
    <p>Personalized for You</p>
  </div>
</div>`,
                        codeFile: 'index.html',
                        tip: 'Fitness apps should feel energetic and motivating!',
                        explanation: 'What this creates:\\n• Main planner container\\n• Header with energy icon\\n• Personalization message'
                    },
                    {
                        title: 'Add Today\'s Workout Section',
                        description: 'Let\'s show the user their workout for today!',
                        instruction: 'Add this workout section:',
                        code: `  <div class="todays-workout">
    <h3>Today's Workout</h3>
    <div class="exercise-list">
      <div class="exercise-item">
        <span class="exercise-name">Push-ups</span>
        <span class="exercise-reps">3x12</span>
      </div>
      <div class="exercise-item">
        <span class="exercise-name">Squats</span>
        <span class="exercise-reps">3x15</span>
      </div>
      <div class="exercise-item">
        <span class="exercise-name">Plank</span>
        <span class="exercise-reps">3x45s</span>
      </div>
    </div>
  </div>`,
                        codeFile: 'index.html',
                        tip: 'Clear exercise lists help users know exactly what to do!',
                        explanation: 'What this adds:\\n• Today\'s workout heading\\n• List of exercises\\n• Sets and reps for each'
                    },
                    {
                        title: 'Add Progress Stats',
                        description: 'Let\'s show the user their fitness progress!',
                        instruction: 'Add these stats:',
                        code: `  <div class="progress-stats">
    <div class="stat-item">
      <span class="stat-value">7</span>
      <span class="stat-label">Streak</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">85%</span>
      <span class="stat-label">Progress</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">12</span>
      <span class="stat-label">Level</span>
    </div>
  </div>
  <button class="start-workout-btn" id="startWorkoutBtn">
    <i data-lucide="play"></i> Start Workout
  </button>`,
                        codeFile: 'index.html',
                        tip: 'Gamification elements like streaks and levels motivate users!',
                        explanation: 'What this adds:\\n• Three progress stats\\n• Streak, progress, and level\\n• Start workout button'
                    },
                    {
                        title: 'Style the Planner Container',
                        description: 'Let\'s create an energetic gradient design!',
                        instruction: 'Add this CSS:',
                        code: `.workout-planner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 16px;
  max-width: 400px;
  margin: 2rem auto;
}

.planner-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.planner-icon {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.planner-header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.planner-header p {
  margin: 0.5rem 0 0;
  opacity: 0.9;
  font-size: 0.9rem;
}`,
                        codeFile: 'styles.css',
                        tip: 'Purple gradients feel energetic and modern!',
                        explanation: 'What this does:\\n• Vibrant gradient background\\n• Centered header\\n• Semi-transparent icon'
                    },
                    {
                        title: 'Style Today\'s Workout',
                        description: 'Let\'s style the workout list!',
                        instruction: 'Add this CSS:',
                        code: `.todays-workout {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
}

.todays-workout h3 {
  margin: 0 0 1rem;
  font-size: 1.1rem;
}

.exercise-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.exercise-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.exercise-name {
  font-size: 0.95rem;
}

.exercise-reps {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
}`,
                        codeFile: 'styles.css',
                        tip: 'Pill-shaped rep badges are easy to scan!',
                        explanation: 'What this does:\\n• Semi-transparent background\\n• Flexbox for exercise rows\\n• Pill badges for reps'
                    },
                    {
                        title: 'Style the Progress Stats',
                        description: 'Let\'s make the stats stand out!',
                        instruction: 'Add this CSS:',
                        code: `.progress-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 1.75rem;
  font-weight: bold;
}

.stat-label {
  font-size: 0.75rem;
  opacity: 0.8;
}

.start-workout-btn {
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background 0.3s;
}

.start-workout-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}`,
                        codeFile: 'styles.css',
                        tip: 'Large stat numbers are easy to read at a glance!',
                        explanation: 'What this does:\\n• Three-column grid for stats\\n• Large, bold numbers\\n• Full-width start button'
                    },
                    {
                        title: 'Add Workout Data',
                        description: 'Let\'s create the workout data structure!',
                        instruction: 'Add this JavaScript:',
                        code: `// Workout database
const workouts = {
  beginner: [
    { name: 'Push-ups', sets: 3, reps: '10' },
    { name: 'Squats', sets: 3, reps: '12' },
    { name: 'Plank', sets: 3, reps: '30s' }
  ],
  intermediate: [
    { name: 'Push-ups', sets: 3, reps: '15' },
    { name: 'Squats', sets: 4, reps: '15' },
    { name: 'Plank', sets: 3, reps: '45s' },
    { name: 'Lunges', sets: 3, reps: '12 each' }
  ],
  advanced: [
    { name: 'Diamond Push-ups', sets: 4, reps: '12' },
    { name: 'Jump Squats', sets: 4, reps: '15' },
    { name: 'Plank', sets: 3, reps: '60s' },
    { name: 'Burpees', sets: 3, reps: '10' }
  ]
};

// User progress
let userProgress = {
  level: 12,
  streak: 7,
  completionRate: 85,
  currentDifficulty: 'intermediate'
};`,
                        codeFile: 'script.js',
                        tip: 'Structured data makes it easy to generate workouts!',
                        explanation: 'What this does:\\n• Defines workouts by difficulty\\n• Tracks user progress\\n• Stores current difficulty level'
                    },
                    {
                        title: 'Add AI Workout Generation',
                        description: 'Let\'s create a simple AI that adapts workouts!',
                        instruction: 'Add this JavaScript:',
                        code: `function generateWorkout() {
  // Simple AI: adjust difficulty based on completion rate
  let difficulty = userProgress.currentDifficulty;
  
  if (userProgress.completionRate > 90 && userProgress.streak > 5) {
    // User is doing great, increase difficulty
    if (difficulty === 'beginner') difficulty = 'intermediate';
    else if (difficulty === 'intermediate') difficulty = 'advanced';
  } else if (userProgress.completionRate < 60) {
    // User is struggling, decrease difficulty
    if (difficulty === 'advanced') difficulty = 'intermediate';
    else if (difficulty === 'intermediate') difficulty = 'beginner';
  }
  
  userProgress.currentDifficulty = difficulty;
  return workouts[difficulty];
}

function displayWorkout(workout) {
  const exerciseList = document.querySelector('.exercise-list');
  exerciseList.innerHTML = workout.map(exercise => \`
    <div class="exercise-item">
      <span class="exercise-name">\${exercise.name}</span>
      <span class="exercise-reps">\${exercise.sets}x\${exercise.reps}</span>
    </div>
  \`).join('');
}`,
                        codeFile: 'script.js',
                        tip: 'The AI adjusts difficulty based on user performance!',
                        explanation: 'What this does:\\n• Analyzes user progress\\n• Adjusts difficulty level\\n• Generates appropriate workout'
                    },
                    {
                        title: 'Add Start Workout Functionality',
                        description: 'Let\'s make the start button work!',
                        instruction: 'Add this JavaScript:',
                        code: `const startBtn = document.getElementById('startWorkoutBtn');

startBtn.addEventListener('click', function() {
  // Generate new workout
  const workout = generateWorkout();
  displayWorkout(workout);
  
  // Update button to show workout started
  this.innerHTML = '<i data-lucide="check"></i> Workout Started!';
  this.style.background = 'rgba(16, 185, 129, 0.5)';
  
  // Re-initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  // Simulate workout completion after 3 seconds (demo)
  setTimeout(() => {
    completeWorkout();
  }, 3000);
});

function completeWorkout() {
  userProgress.streak++;
  userProgress.level++;
  
  // Update display
  document.querySelector('.stat-item:nth-child(1) .stat-value').textContent = userProgress.streak;
  document.querySelector('.stat-item:nth-child(3) .stat-value').textContent = userProgress.level;
  
  startBtn.innerHTML = '<i data-lucide="trophy"></i> Workout Complete!';
  
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}`,
                        codeFile: 'script.js',
                        tip: 'Visual feedback shows the workout is in progress!',
                        explanation: 'What this does:\\n• Generates personalized workout\\n• Updates button state\\n• Simulates workout completion\\n• Updates user stats'
                    },
                    {
                        title: 'Add Progress Persistence',
                        description: 'Let\'s save progress to localStorage!',
                        instruction: 'Add this JavaScript:',
                        code: `// Load saved progress
function loadProgress() {
  const saved = localStorage.getItem('workoutProgress');
  if (saved) {
    userProgress = JSON.parse(saved);
    updateStatsDisplay();
  }
}

// Save progress
function saveProgress() {
  localStorage.setItem('workoutProgress', JSON.stringify(userProgress));
}

// Update stats display
function updateStatsDisplay() {
  document.querySelector('.stat-item:nth-child(1) .stat-value').textContent = userProgress.streak;
  document.querySelector('.stat-item:nth-child(2) .stat-value').textContent = userProgress.completionRate + '%';
  document.querySelector('.stat-item:nth-child(3) .stat-value').textContent = userProgress.level;
}

// Load on page load
loadProgress();

// Save after completing workout
function completeWorkout() {
  userProgress.streak++;
  userProgress.level++;
  saveProgress();
  updateStatsDisplay();
  
  startBtn.innerHTML = '<i data-lucide="trophy"></i> Workout Complete!';
  if (typeof lucide !== 'undefined') lucide.createIcons();
}`,
                        codeFile: 'script.js',
                        tip: 'localStorage keeps progress even after closing the browser!',
                        explanation: 'What this does:\\n• Loads saved progress on start\\n• Saves after each workout\\n• Updates display with current stats'
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