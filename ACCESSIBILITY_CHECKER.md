# Accessibility Checker Feature

## Overview

The Accessibility Checker is an integrated tool in WebForge that helps students learn web accessibility best practices by providing real-time feedback on accessibility issues in their websites.

## Features

- **Real-time Analysis**: Automatically checks accessibility when the preview updates
- **WCAG Compliance**: Tests against WCAG 2.0 Level A and AA standards
- **Impact Levels**: Issues categorized as Critical, Serious, Moderate, or Minor
- **Detailed Guidance**: Each issue includes:
  - Clear description of the problem
  - Impact level and severity
  - Link to learn more about the issue
  - Specific HTML elements affected
- **Educational Focus**: Teaches students accessibility while they build

## How It Works

### Technology

- **axe-core**: Industry-standard accessibility testing engine by Deque Systems
- **Lucide Icons**: Professional icon library for consistent UI
- **Sandboxed iframe**: Safe testing environment for student code

### Architecture

1. **Service Layer** (`js/services/accessibility.js`):
   - `checkAccessibility()`: Runs axe-core on preview iframe
   - `formatViolation()`: Formats results for display
   - `getImpactColor()`: Returns color coding for severity
   - `getImpactIcon()`: Returns appropriate icon for severity

2. **UI Integration** (`js/app.js`):
   - Toggle button in preview header
   - Sliding panel at bottom of preview
   - Auto-refresh when preview updates
   - Summary statistics dashboard

3. **Styling** (`styles/main.css`):
   - Color-coded severity levels
   - Responsive panel layout
   - Clear visual hierarchy

## Usage

### For Students

1. Click the accessibility icon (♿) in the preview header
2. The panel shows a summary of issues by severity
3. Each issue displays:
   - Severity badge (Critical/Serious/Moderate/Minor)
   - Description of the problem
   - Link to learn more
   - Affected HTML elements
4. Fix issues in the code editor
5. Panel auto-updates when code changes

### For Teachers

The accessibility checker helps teach:
- **Alt text**: Missing image descriptions
- **Color contrast**: Text readability issues
- **Semantic HTML**: Proper heading hierarchy, landmarks
- **Form labels**: Input accessibility
- **Keyboard navigation**: Focus management
- **ARIA attributes**: Proper usage and requirements

## Common Issues Detected

### Critical Issues
- Missing alt text on images
- Form inputs without labels
- Insufficient color contrast
- Missing page language

### Serious Issues
- Skipped heading levels
- Empty links or buttons
- Missing ARIA roles
- Duplicate IDs

### Moderate Issues
- Non-descriptive link text
- Missing landmarks
- Redundant ARIA attributes

### Minor Issues
- Best practice recommendations
- Optimization suggestions

## Example Violations

### Missing Alt Text
```html
<!-- Bad -->
<img src="logo.png">

<!-- Good -->
<img src="logo.png" alt="Company Logo">
```

### Form Without Label
```html
<!-- Bad -->
<input type="text" placeholder="Name">

<!-- Good -->
<label for="name">Name:</label>
<input type="text" id="name" placeholder="Name">
```

### Low Color Contrast
```css
/* Bad - contrast ratio too low */
color: #999;
background: white;

/* Good - sufficient contrast */
color: #333;
background: white;
```

## Technical Details

### Dependencies

- **axe-core v4.8.2**: Accessibility testing engine
  - CDN: `https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.8.2/axe.min.js`
  - Size: ~230KB minified
  - License: MPL-2.0

### Performance

- Runs asynchronously to avoid blocking UI
- Debounced to prevent excessive checks
- Only runs when panel is visible
- Typical check time: 100-500ms

### Browser Compatibility

Works in all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Configuration

The checker tests against these rule sets:
- `wcag2a`: WCAG 2.0 Level A
- `wcag2aa`: WCAG 2.0 Level AA
- `best-practice`: Industry best practices

To modify rules, edit `js/services/accessibility.js`:

```javascript
const results = await axe.run(iframeDoc, {
    runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa', 'best-practice']
    }
});
```

## Future Enhancements

Potential improvements:
- Export accessibility report as PDF
- Track accessibility score over time
- Suggest code fixes automatically
- Custom rule configuration
- Integration with tutorials
- Accessibility score badge

## Resources

- [axe-core Documentation](https://github.com/dequelabs/axe-core)
- [WCAG 2.0 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

## Testing

To test the accessibility checker:

1. Open `test-a11y.html` in a browser
2. Click "Run Accessibility Check"
3. Verify issues are detected and displayed
4. Or use the main application:
   - Create a new project
   - Add HTML with accessibility issues
   - Open the accessibility panel
   - Verify issues are shown with proper formatting

## Troubleshooting

### Panel doesn't open
- Check browser console for errors
- Verify axe-core loaded: `typeof axe !== 'undefined'`
- Ensure Lucide icons initialized: `typeof lucide !== 'undefined'`

### No issues detected
- Verify iframe has content
- Check if HTML is valid
- Ensure axe-core can access iframe document

### Icons not showing
- Check Lucide CDN loaded
- Verify `lucide.createIcons()` called after DOM updates
- Check browser console for icon errors
