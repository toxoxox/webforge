# Icons and Visual Elements

## Icon Usage Policy

**DO NOT use emojis or HTML entities for icons** in the WebForge application. Instead, use a proper icon library API.

## Recommended Approach

Use a CDN-based icon library such as:

- **Lucide Icons**: `https://unpkg.com/lucide@latest` (lightweight, modern)
- **Feather Icons**: `https://unpkg.com/feather-icons` (simple, clean)
- **Font Awesome**: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css` (comprehensive)

## Implementation Pattern

### Bad Examples (Avoid)
```html
<!-- Don't use emojis -->
<button>📁 Open File</button>

<!-- Don't use HTML entities -->
<button>&#128193; Open File</button>
```

### Good Examples (Use)
```html
<!-- Use icon library with proper semantic markup -->
<button>
  <i data-lucide="folder-open"></i>
  <span>Open File</span>
</button>

<!-- Or with Font Awesome -->
<button>
  <i class="fa-solid fa-folder-open"></i>
  <span>Open File</span>
</button>
```

## Benefits

- **Accessibility**: Screen readers handle icon libraries better than emojis
- **Consistency**: Icons render identically across all browsers and platforms
- **Customization**: Easy to style with CSS (size, color, etc.)
- **Professional**: More polished appearance for educational software
- **Performance**: Icon fonts/SVGs are optimized for web delivery

## Adding Icons to WebForge

1. Add icon library CDN link to `index.html`
2. Initialize icon library in `app.js` if needed
3. Use semantic HTML with proper ARIA labels
4. Style icons consistently in `main.css`
