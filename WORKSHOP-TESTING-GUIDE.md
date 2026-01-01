# Workshop Mode Testing Guide

## Quick Test Checklist

### **Basic Functionality Tests**

1. **Start a Workshop**
   - [ ] Go to `components.html`
   - [ ] Click "Preview" on any component (e.g., Card Component)
   - [ ] Click "Start Building" in the modal
   - [ ] Verify editor opens with workshop panel visible

2. **Workshop Panel**
   - [ ] Verify workshop panel is on the left side
   - [ ] Check that step 1 is displayed
   - [ ] Verify progress bar shows at top (should be ~7% for step 1 of 15)
   - [ ] Check step number badge is visible

3. **Step Content**
   - [ ] Verify step title is visible and styled
   - [ ] Check description text is readable
   - [ ] Verify "What to do:" instruction box is visible (blue accent)
   - [ ] Check code block has dark background and copy button
   - [ ] Verify tip section has green accent and lightbulb icon
   - [ ] Check explanation section has blue accent and info icon

4. **Copy Code Button**
   - [ ] Click "Copy" button on code block
   - [ ] Verify button changes to "Copied!" with checkmark
   - [ ] Verify toast notification appears
   - [ ] Wait 2 seconds, verify button returns to "Copy"

5. **Navigation**
   - [ ] Verify "Previous" button is disabled on step 1
   - [ ] Click "Next" button
   - [ ] Verify step 2 loads
   - [ ] Verify progress bar updates (~14% for step 2 of 15)
   - [ ] Verify "Previous" button is now enabled
   - [ ] Click "Previous" to go back to step 1

6. **Panel Controls**
   - [ ] Click collapse button (chevron-left icon)
   - [ ] Verify panel collapses to left edge
   - [ ] Verify expand button appears
   - [ ] Click expand button
   - [ ] Verify panel expands back

7. **Tab Switching**
   - [ ] Click "Projects" tab
   - [ ] Verify projects list appears
   - [ ] Click "Workshop" tab
   - [ ] Verify workshop content returns

8. **Complete Workshop**
   - [ ] Navigate to last step (click Next repeatedly)
   - [ ] Verify "Next" button changes to "Complete"
   - [ ] Click "Complete" button
   - [ ] Verify confetti animation plays
   - [ ] Verify completion screen shows with trophy icon
   - [ ] Verify progress bar shows 100%
   - [ ] Check "Browse More Components" and "Continue Coding" buttons work

### **Visual Design Tests**

1. **Dark Theme Consistency**
   - [ ] Verify workshop panel has dark background
   - [ ] Check step cards have gradient top accent bar
   - [ ] Verify text is readable (white/light gray)
   - [ ] Check all icons are visible

2. **Color Coding**
   - [ ] Tips: Green accent (#10b981)
   - [ ] Explanations: Blue accent (#3b82f6)
   - [ ] Warnings: Yellow accent (#f59e0b)
   - [ ] Code blocks: Dark with green dot indicator

3. **Buttons**
   - [ ] Primary buttons: Purple-pink gradient
   - [ ] Secondary buttons: Dark gray
   - [ ] Copy button: Purple accent
   - [ ] All buttons have hover effects

4. **Progress Bar**
   - [ ] Gradient fill (purple to pink)
   - [ ] Smooth animation when changing steps
   - [ ] Glowing effect visible

### **Responsive Tests**

1. **Panel Resizing**
   - [ ] Drag resize handle between workshop panel and editor
   - [ ] Verify panel width changes smoothly
   - [ ] Verify minimum width is enforced (280px)
   - [ ] Verify maximum width is enforced (500px)

2. **Mobile View** (resize browser to < 768px)
   - [ ] Verify workshop panel adapts to mobile
   - [ ] Check text remains readable
   - [ ] Verify buttons are touch-friendly
   - [ ] Check progress bar is visible

### **State Persistence Tests**

1. **Page Refresh**
   - [ ] Start a workshop
   - [ ] Navigate to step 3
   - [ ] Refresh the page (F5)
   - [ ] Verify workshop resumes at step 3
   - [ ] Verify component name is correct

2. **Browser Tab**
   - [ ] Start a workshop
   - [ ] Open new tab with same URL
   - [ ] Verify workshop state is maintained

### **Edge Cases**

1. **Component with Few Steps**
   - [ ] Try "Difficulty Badge" (10 minutes, ~5 steps)
   - [ ] Verify navigation works correctly
   - [ ] Verify progress bar updates properly

2. **Component with Many Steps**
   - [ ] Try "Responsive Navbar" (15 steps)
   - [ ] Verify all steps load correctly
   - [ ] Check progress bar accuracy

3. **Rapid Navigation**
   - [ ] Click "Next" button rapidly 5 times
   - [ ] Verify steps change smoothly
   - [ ] Check no errors in console

## Known Issues to Watch For

- [ ] Icons not rendering (check Lucide initialization)
- [ ] Copy button not working (check clipboard API)
- [ ] Progress bar not animating (check CSS transitions)
- [ ] Panel not collapsing (check JavaScript event listeners)
- [ ] Workshop not loading (check localStorage and ComponentService)

## Browser Compatibility

Test in:
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (if available)

## Console Checks

Open browser console (F12) and verify:
- [ ] No JavaScript errors
- [ ] Workshop loading messages appear
- [ ] Step navigation logs correctly
- [ ] No CSS warnings

## Performance Checks

- [ ] Workshop loads within 1 second
- [ ] Step transitions are smooth (< 300ms)
- [ ] No lag when typing in editor
- [ ] Preview updates without delay

## Success Criteria

✅ **Workshop mode is working if:**
- All basic functionality tests pass
- Visual design matches new dark theme
- No console errors
- Smooth user experience
- State persists across refreshes

## Quick Fix Guide

**If workshop doesn't load:**
1. Check browser console for errors
2. Verify `workshop-enhanced.css` is loaded
3. Check ComponentService is initialized
4. Verify localStorage has workshop data

**If styling looks wrong:**
1. Hard refresh (Ctrl+Shift+R)
2. Check CSS file order in editor.html
3. Verify no CSS conflicts

**If copy button doesn't work:**
1. Check HTTPS (clipboard API requires secure context)
2. Verify Lucide icons are initialized
3. Check browser clipboard permissions

## Recommended Test Components

**Easy (Quick Test):**
- Card Component (7 steps, 20 min)
- Difficulty Badge (5 steps, 10 min)

**Medium (Full Test):**
- Contact Form (17 steps, 45 min)
- Image Gallery (9 steps, 35 min)

**Advanced (Stress Test):**
- Responsive Navbar (15 steps, 40 min)
- BMI Calculator (20 steps, 50 min)

---

**Testing Status:** Ready for testing
**Last Updated:** Current session
**Priority:** High - Core feature
