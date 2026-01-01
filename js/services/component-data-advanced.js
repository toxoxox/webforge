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