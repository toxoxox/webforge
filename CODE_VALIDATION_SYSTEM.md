# Code Validation System for Workshop

## Overview

The code validation system checks the user's code before allowing them to proceed to the next workshop step. It provides friendly, kid-appropriate error messages and helpful suggestions.

## How It Works

### 1. Validation Rules
Each workshop step can include a `validation` object with:
- **required**: Array of elements/patterns that must be present
- **forbidden**: Array of elements/patterns that should not be present
- **custom**: Custom validation function for complex checks

### 2. Validation Types

#### HTML Validation
- `tag`: Check for HTML tags (e.g., `<nav>`, `<ul>`, `<li>`)
- `class`: Check for CSS classes (e.g., `class="navbar"`)
- `id`: Check for HTML IDs (e.g., `id="menu"`)
- `attribute`: Check for HTML attributes (e.g., `href`, `src`)
- `text`: Check for specific text content

#### CSS Validation
- `property`: Check for CSS properties (e.g., `display`, `background-color`)
- `selector`: Check for CSS selectors (e.g., `.navbar`, `#menu`)
- `pattern`: Check for regex patterns (e.g., `@media`)

#### JavaScript Validation
- `pattern`: Check for code patterns
- `text`: Check for specific code snippets
- `custom`: Custom validation logic

### 3. Validation Flow

```
User clicks "Next" button
    ↓
WorkshopManager.nextStep()
    ↓
WorkshopManager.validateCurrentStep()
    ↓
CodeValidator.validateCurrentStep()
    ↓
Check all validation rules
    ↓
If valid: Proceed to next step
If invalid: Show friendly error messages
```

## Example Validation Rules

```javascript
{
    title: 'Let\'s Make a Menu Bar!',
    code: `<nav class="navbar">
  <div class="nav-brand">My Website</div>
</nav>`,
    codeFile: 'index.html',
    validation: {
        required: [
            {
                type: 'tag',
                value: 'nav',
                message: 'We need a <nav> tag to make our menu!',
                hint: 'Type <nav> to start your navigation bar'
            },
            {
                type: 'class',
                value: 'navbar',
                message: 'Don\'t forget to add class="navbar" to your <nav> tag!',
                hint: 'Add class="navbar" inside the <nav> tag'
            }
        ]
    }
}
```

## Error Messages

### Kid-Friendly Messages
The system converts technical errors into simple, encouraging messages:

**Technical**: "Missing <nav> tag"
**Kid-Friendly**: "Oops! We need a <nav> tag. That's like making a sign that says 'This is a menu!'"

### Error Display
When validation fails, users see:
1. **Friendly header**: "Oops! Let's fix a few things first"
2. **Encouraging intro**: "Don't worry! Everyone makes mistakes."
3. **List of errors**: What's missing or wrong
4. **Helpful suggestions**: How to fix each issue
5. **Try Again button**: Re-validates when clicked

## Visual Design

### Error Box
- Red border and background (rgba(244, 67, 54, 0.1))
- Shake animation to draw attention
- Alert icon for visual clarity

### Suggestions Box
- Green border and background (rgba(76, 175, 80, 0.1))
- Lightbulb icon
- Arrow bullets for each suggestion

### Try Again Button
- Green background (#4CAF50)
- Refresh icon
- Full width for easy clicking

## Files Created/Modified

### New Files
1. **js/services/code-validator.js**
   - Main validation logic
   - Pattern matching for HTML, CSS, JS
   - Friendly error message conversion

### Modified Files
1. **js/services/component.js**
   - Added validation rules to all 5 Responsive Navbar steps
   - Each step has specific requirements

2. **js/workshop-manager.js**
   - Added `validateCurrentStep()` method
   - Added `showValidationErrors()` method
   - Added `hideValidationErrors()` method
   - Modified `nextStep()` to validate before proceeding

3. **styles/workshop.css**
   - Added validation error styling
   - Added shake animation
   - Added suggestion box styling

4. **editor.html**
   - Added code-validator.js script tag

## Testing the System

### Test Step 1 (HTML - Nav Tag)
1. Go to workshop
2. Don't add `<nav>` tag
3. Click "Next"
4. Should see: "We need a <nav> tag to make our menu!"

### Test Step 2 (HTML - Menu Items)
1. Add `<nav>` but no `<ul>`
2. Click "Next"
3. Should see: "We need a <ul> tag to make our list of menu items!"

### Test Step 3 (CSS - Navbar Styling)
1. Don't add `.navbar` selector in CSS
2. Click "Next"
3. Should see: "We need to style .navbar in our CSS!"

### Test Step 4 (CSS - Flexbox)
1. Don't add `display: flex`
2. Click "Next"
3. Should see: "We need display: flex to arrange items nicely!"

### Test Step 5 (CSS - Media Query)
1. Don't add `@media` rule
2. Click "Next"
3. Should see: "We need a @media rule for small screens!"

## Benefits

✅ **Prevents frustration**: Users know exactly what's wrong
✅ **Educational**: Teaches proper syntax and structure
✅ **Encouraging**: Friendly messages keep users motivated
✅ **Progressive**: Can't skip ahead without learning
✅ **Flexible**: Easy to add validation to new components

## Future Enhancements

- [ ] Add visual highlighting of errors in the editor
- [ ] Add "Show me" button to auto-insert correct code
- [ ] Add partial credit for close attempts
- [ ] Add hints that unlock after multiple failed attempts
- [ ] Add celebration animations for correct code
- [ ] Track common mistakes for better error messages
