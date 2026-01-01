# Tutorial Writing Guide

## Philosophy: Teach Like You're Teaching a 5-Year-Old

Students using WebForge may have ZERO coding experience. Every tutorial step should be simple, clear, and encouraging.

## Step Structure

Each step should have:
1. **Title** - What we're doing (short, action-oriented)
2. **Description** - Why we're doing it (1-2 sentences max)
3. **Instruction** - What to do (clear, direct)
4. **Code** - The actual code to type
5. **Tip** - One helpful hint (1 sentence)
6. **Explanation** - Break down the code (keep it SHORT)

## Writing Rules

### ✅ DO:
- Use simple, everyday words
- Explain EVERY tag and property
- Keep explanations to 3-4 bullet points MAX
- Use analogies ("Think of it like a box...")
- Be encouraging and positive
- Break complex concepts into multiple steps

### ❌ DON'T:
- Assume any prior knowledge
- Use jargon without explaining it
- Write long paragraphs
- Combine multiple concepts in one step
- Skip explaining what tags do

## Example: TOO MUCH INFO (Bad)

```javascript
{
    title: 'Style the Navigation Bar',
    description: 'Let\'s add colors and spacing to make it look professional!',
    explanation: 'Understanding CSS properties:\n• background-color: #2c3e50 - This sets the background color using a hexadecimal color code. Hex codes are a way to represent colors in web development using numbers and letters. #2c3e50 is a dark blue-gray color.\n• padding: 1rem 2rem - Padding adds space inside an element. The first value (1rem) is for top and bottom, the second (2rem) is for left and right. "rem" is a relative unit that scales based on the root font size.\n• display: flex - This enables Flexbox layout, which is a powerful CSS layout system that makes it easy to align and distribute items.\n• justify-content: space-between - This Flexbox property pushes items to opposite ends with space between them.'
}
```

## Example: JUST RIGHT (Good)

```javascript
{
    title: 'Add a Background Color',
    description: 'Let\'s give our navbar a nice dark color!',
    code: `.navbar {
  background-color: #2c3e50;
}`,
    tip: 'The # symbol means this is a color code!',
    explanation: 'What this does:\n• background-color - Paints the background\n• #2c3e50 - A dark blue-gray color\n\nYou can use any color code you like!'
}

// THEN in the NEXT step:

{
    title: 'Add Space Inside',
    description: 'Let\'s add some breathing room so things aren\'t squished!',
    code: `.navbar {
  background-color: #2c3e50;
  padding: 1rem 2rem;
}`,
    tip: 'Padding is like adding cushions inside a box!',
    explanation: 'What padding does:\n• Adds space INSIDE the navbar\n• 1rem = top and bottom space\n• 2rem = left and right space'
}
```

## Explanation Format

Keep explanations SHORT and use this format:

```
What this does:
• property-name - Simple explanation in plain English
• value - What this specific value means

[Optional: One sentence about why this is useful]
```

## Language Guidelines

### Instead of: "Flexbox is a CSS layout module"
### Say: "Flexbox helps us line things up in a row"

### Instead of: "The position property specifies the type of positioning method"
### Say: "position tells the browser where to put something"

### Instead of: "This creates a pseudo-element"
### Say: "This adds a little circle without extra HTML"

## Step Length

- **Description**: 1-2 sentences
- **Tip**: 1 sentence
- **Explanation**: 3-4 bullet points MAX
- **Total reading time per step**: Under 30 seconds

## Breaking Down Complex Concepts

If a concept needs more than 4 bullet points to explain, split it into multiple steps!

### Bad (One Big Step):
"Add Flexbox Layout" - explains display, justify-content, align-items, gap all at once

### Good (Multiple Small Steps):
1. "Line Things Up in a Row" - just display: flex
2. "Space Things Apart" - just justify-content
3. "Center Things Vertically" - just align-items
4. "Add Space Between Items" - just gap

## Remember

Students are here to LEARN, not to feel overwhelmed. Every small success builds confidence!
