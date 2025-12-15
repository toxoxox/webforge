# Student Guide: Using the Accessibility Checker

## What is Web Accessibility?

Web accessibility means making websites usable by everyone, including people with disabilities. This includes:
- People who are blind or have low vision
- People who are deaf or hard of hearing
- People with motor disabilities
- People with cognitive disabilities

## Why Does It Matter?

- **Legal requirement**: Many countries require accessible websites
- **Better for everyone**: Accessible sites work better for all users
- **More users**: 15% of the world's population has some form of disability
- **Better SEO**: Search engines prefer accessible websites
- **Professional skill**: Employers value accessibility knowledge

## How to Use the Checker

### Step 1: Open the Accessibility Panel

Click the accessibility icon (♿) in the preview header to open the checker panel.

### Step 2: Review the Summary

The panel shows a summary with four categories:
- **Critical** (Red): Must fix - site is unusable for some users
- **Serious** (Orange): Should fix - major barriers to access
- **Moderate** (Yellow): Important to fix - affects usability
- **Minor** (Blue): Nice to fix - best practice improvements

### Step 3: Fix Issues One by One

Each issue shows:
- What's wrong
- Why it matters
- Which elements are affected
- A link to learn more

### Step 4: Test Again

The panel automatically updates when you save your code. Watch the numbers go down as you fix issues!

## Common Issues and How to Fix Them

### 1. Missing Alt Text on Images

**Problem**: Screen readers can't describe images without alt text.

**Bad:**
```html
<img src="photo.jpg">
```

**Good:**
```html
<img src="photo.jpg" alt="A sunset over the ocean">
```

**Tips:**
- Describe what's in the image
- Keep it concise (under 125 characters)
- For decorative images, use `alt=""`

### 2. Form Inputs Without Labels

**Problem**: Users can't tell what information to enter.

**Bad:**
```html
<input type="text" placeholder="Enter your name">
```

**Good:**
```html
<label for="name">Name:</label>
<input type="text" id="name" placeholder="Enter your name">
```

**Tips:**
- Always use `<label>` elements
- Connect labels with `for` and `id` attributes
- Don't rely only on placeholders

### 3. Low Color Contrast

**Problem**: Text is hard to read for people with low vision.

**Bad:**
```css
color: #999999;
background: white;
```

**Good:**
```css
color: #333333;
background: white;
```

**Tips:**
- Use dark text on light backgrounds (or vice versa)
- Test contrast at [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Aim for at least 4.5:1 ratio for normal text

### 4. Skipped Heading Levels

**Problem**: Screen readers use headings to navigate. Skipping levels is confusing.

**Bad:**
```html
<h1>Main Title</h1>
<h4>Subsection</h4>
```

**Good:**
```html
<h1>Main Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
```

**Tips:**
- Start with `<h1>` (only one per page)
- Don't skip levels (h1 → h2 → h3)
- Use headings for structure, not styling

### 5. Empty Links

**Problem**: Links without text are invisible to screen readers.

**Bad:**
```html
<a href="page.html"></a>
<a href="page.html"><img src="icon.png"></a>
```

**Good:**
```html
<a href="page.html">Read more</a>
<a href="page.html">
  <img src="icon.png" alt="Home page">
</a>
```

**Tips:**
- Always include link text
- Make link text descriptive
- Avoid "click here" - say what you're linking to

### 6. Missing Page Language

**Problem**: Screen readers need to know what language to use.

**Bad:**
```html
<html>
```

**Good:**
```html
<html lang="en">
```

**Tips:**
- Always set `lang` attribute on `<html>`
- Use correct language code (en, es, fr, etc.)
- Change language for foreign phrases

## Quick Checklist

Before submitting your website, check:

- [ ] All images have alt text
- [ ] All form inputs have labels
- [ ] Text has sufficient color contrast
- [ ] Headings are in logical order (h1, h2, h3...)
- [ ] Links have descriptive text
- [ ] Page has a language attribute
- [ ] Page has a descriptive title
- [ ] Content is keyboard accessible

## Learn More

### Tutorials in WebForge
Click the "Help" button and explore accessibility tutorials.

### External Resources
- [WebAIM](https://webaim.org/) - Accessibility guides and tools
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility) - Technical documentation
- [A11y Project](https://www.a11yproject.com/) - Beginner-friendly checklist
- [WAVE Tool](https://wave.webaim.org/) - Browser extension for testing

## Tips for Success

1. **Check early and often**: Don't wait until the end to test
2. **Fix critical issues first**: Start with red, then orange, yellow, blue
3. **Learn from each issue**: Click "Learn more" links to understand why
4. **Test with real tools**: Try using your site with a screen reader
5. **Make it a habit**: Accessibility should be part of every project

## Remember

Making accessible websites isn't just about passing tests - it's about making the web work for everyone. Every issue you fix makes the internet a little bit better!
