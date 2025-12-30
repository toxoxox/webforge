// Editor Initialization Script
// Handles Monaco Editor setup and workshop mode

// Direct editor initialization
if (typeof currentPage !== 'undefined') {
    currentPage = 'editor';
}

// Initialize Monaco Editor immediately for direct editor access
require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' } });
require(['vs/editor/editor.main'], function () {
    console.log('Monaco loaded in editor-init.js');
    
    // Configure HTML language features for VS Code-like behavior
    monaco.languages.html.htmlDefaults.setOptions({
        suggest: {
            html5: true,
            angular1: false,
            ionic: false
        },
        format: {
            tabSize: 2,
            insertSpaces: true,
            wrapLineLength: 120,
            unformatted: 'wbr',
            contentUnformatted: 'pre,code,textarea',
            indentInnerHtml: false,
            preserveNewLines: true,
            maxPreserveNewLines: null,
            indentHandlebars: false,
            endWithNewline: false,
            extraLiners: 'head, body, /html',
            wrapAttributes: 'auto'
        }
    });
    
    // Enhanced HTML autocomplete provider
    monaco.languages.registerCompletionItemProvider('html', {
        triggerCharacters: ['<', ' ', '"', '=', '/', '!'],
        provideCompletionItems: function(model, position) {
            const textUntilPosition = model.getValueInRange({
                startLineNumber: position.lineNumber,
                startColumn: 1,
                endLineNumber: position.lineNumber,
                endColumn: position.column
            });
            
            const word = model.getWordUntilPosition(position);
            const range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn
            };
            
            // Check for ! (Emmet abbreviation for HTML boilerplate)
            if (textUntilPosition.trim() === '!') {
                return {
                    suggestions: [{
                        label: '! - HTML5 boilerplate',
                        kind: monaco.languages.CompletionItemKind.Snippet,
                        insertText: [
                            '<!DOCTYPE html>',
                            '<html lang="en">',
                            '<head>',
                            '\t<meta charset="UTF-8">',
                            '\t<meta name="viewport" content="width=device-width, initial-scale=1.0">',
                            '\t<title>${1:Document}</title>',
                            '</head>',
                            '<body>',
                            '\t$0',
                            '</body>',
                            '</html>'
                        ].join('\n'),
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: 'HTML5 boilerplate template',
                        detail: 'Emmet abbreviation',
                        range: {
                            startLineNumber: position.lineNumber,
                            endLineNumber: position.lineNumber,
                            startColumn: 1,
                            endColumn: position.column
                        },
                        sortText: '0'
                    }]
                };
            }
            
            // Check if we're inside a tag (for attributes)
            const insideTag = /<[a-zA-Z][^>]*$/.test(textUntilPosition);
            const afterEquals = /=["']?$/.test(textUntilPosition);
            
            let suggestions = [];
            
            if (afterEquals) {
                // Attribute value suggestions
                if (/type=["']?$/.test(textUntilPosition)) {
                    suggestions = ['text', 'password', 'email', 'number', 'tel', 'url', 'search', 'date', 'checkbox', 'radio', 'submit', 'button'].map(val => ({
                        label: val,
                        kind: monaco.languages.CompletionItemKind.Value,
                        insertText: val,
                        range: range
                    }));
                } else if (/rel=["']?$/.test(textUntilPosition)) {
                    suggestions = ['stylesheet', 'icon', 'preload', 'prefetch', 'dns-prefetch'].map(val => ({
                        label: val,
                        kind: monaco.languages.CompletionItemKind.Value,
                        insertText: val,
                        range: range
                    }));
                }
            } else if (insideTag) {
                // Attribute suggestions
                suggestions = [
                    { label: 'class', insertText: 'class="$1"', detail: 'CSS class' },
                    { label: 'id', insertText: 'id="$1"', detail: 'Unique identifier' },
                    { label: 'style', insertText: 'style="$1"', detail: 'Inline styles' },
                    { label: 'src', insertText: 'src="$1"', detail: 'Source URL' },
                    { label: 'href', insertText: 'href="$1"', detail: 'Link URL' },
                    { label: 'alt', insertText: 'alt="$1"', detail: 'Alternative text' },
                    { label: 'title', insertText: 'title="$1"', detail: 'Tooltip text' },
                    { label: 'type', insertText: 'type="$1"', detail: 'Element type' },
                    { label: 'name', insertText: 'name="$1"', detail: 'Element name' },
                    { label: 'value', insertText: 'value="$1"', detail: 'Element value' },
                    { label: 'placeholder', insertText: 'placeholder="$1"', detail: 'Placeholder text' },
                    { label: 'disabled', insertText: 'disabled', detail: 'Disable element' },
                    { label: 'required', insertText: 'required', detail: 'Required field' },
                    { label: 'readonly', insertText: 'readonly', detail: 'Read-only field' },
                    { label: 'onclick', insertText: 'onclick="$1"', detail: 'Click event handler' },
                    { label: 'onchange', insertText: 'onchange="$1"', detail: 'Change event handler' },
                    { label: 'data-', insertText: 'data-$1="$2"', detail: 'Custom data attribute' }
                ].map(attr => ({
                    label: attr.label,
                    kind: monaco.languages.CompletionItemKind.Property,
                    insertText: attr.insertText,
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    detail: attr.detail,
                    range: range
                }));
            } else {
                // HTML tag suggestions with VS Code-style expansion
                const voidElements = ['img', 'input', 'meta', 'link', 'br', 'hr', 'source', 'track', 'area', 'base', 'col', 'embed', 'param', 'wbr'];
                
                const htmlTags = [
                    // Void/Self-closing elements (no closing tag)
                    { tag: 'img', desc: 'Image', snippet: '<img src="$1" alt="$2"$0>', void: true, attrs: ['src', 'alt', 'width', 'height', 'loading', 'decoding'] },
                    { tag: 'input', desc: 'Input field', snippet: '<input type="$1" name="$2"$0>', void: true, attrs: ['type', 'name', 'value', 'placeholder', 'required', 'disabled'] },
                    { tag: 'meta', desc: 'Metadata', snippet: '<meta name="$1" content="$2"$0>', void: true, attrs: ['name', 'content', 'charset', 'http-equiv'] },
                    { tag: 'link', desc: 'External resource', snippet: '<link rel="$1" href="$2"$0>', void: true, attrs: ['rel', 'href', 'type', 'media', 'crossorigin'] },
                    { tag: 'br', desc: 'Line break', snippet: '<br$0>', void: true, attrs: [] },
                    { tag: 'hr', desc: 'Horizontal rule', snippet: '<hr$0>', void: true, attrs: [] },
                    { tag: 'source', desc: 'Media source', snippet: '<source src="$1" type="$2"$0>', void: true, attrs: ['src', 'type', 'media', 'srcset', 'sizes'] },
                    { tag: 'track', desc: 'Text track', snippet: '<track src="$1" kind="$2"$0>', void: true, attrs: ['src', 'kind', 'srclang', 'label', 'default'] },
                    { tag: 'area', desc: 'Image map area', snippet: '<area shape="$1" coords="$2" href="$3"$0>', void: true, attrs: ['shape', 'coords', 'href', 'alt', 'target'] },
                    { tag: 'base', desc: 'Base URL', snippet: '<base href="$1"$0>', void: true, attrs: ['href', 'target'] },
                    { tag: 'col', desc: 'Table column', snippet: '<col$0>', void: true, attrs: ['span'] },
                    { tag: 'embed', desc: 'Embedded content', snippet: '<embed src="$1" type="$2"$0>', void: true, attrs: ['src', 'type', 'width', 'height'] },
                    { tag: 'param', desc: 'Object parameter', snippet: '<param name="$1" value="$2"$0>', void: true, attrs: ['name', 'value'] },
                    { tag: 'wbr', desc: 'Word break opportunity', snippet: '<wbr$0>', void: true, attrs: [] },
                    
                    // Form elements
                    { tag: 'form', desc: 'Form', snippet: '<form action="$1" method="$2">\n\t$0\n</form>', attrs: ['action', 'method', 'enctype', 'target', 'autocomplete', 'novalidate'] },
                    { tag: 'textarea', desc: 'Text area', snippet: '<textarea name="$1" rows="$2" cols="$3">$0</textarea>', attrs: ['name', 'rows', 'cols', 'placeholder', 'required', 'disabled', 'readonly', 'maxlength'] },
                    { tag: 'button', desc: 'Button', snippet: '<button type="$1">$0</button>', attrs: ['type', 'name', 'value', 'disabled', 'form', 'formaction'] },
                    { tag: 'select', desc: 'Dropdown', snippet: '<select name="$1">\n\t<option value="$2">$3</option>\n\t$0\n</select>', attrs: ['name', 'id', 'multiple', 'required', 'disabled', 'size', 'autocomplete'] },
                    { tag: 'option', desc: 'Select option', snippet: '<option value="$1">$0</option>', attrs: ['value', 'selected', 'disabled', 'label'] },
                    { tag: 'label', desc: 'Form label', snippet: '<label for="$1">$0</label>', attrs: ['for', 'form'] },
                    { tag: 'fieldset', desc: 'Form fieldset', snippet: '<fieldset>\n\t<legend>$1</legend>\n\t$0\n</fieldset>', attrs: ['disabled', 'form', 'name'] },
                    { tag: 'legend', desc: 'Fieldset legend', snippet: '<legend>$0</legend>', attrs: [] },
                    { tag: 'datalist', desc: 'Input options', snippet: '<datalist id="$1">\n\t<option value="$2">\n\t$0\n</datalist>', attrs: ['id'] },
                    { tag: 'output', desc: 'Calculation result', snippet: '<output name="$1" for="$2">$0</output>', attrs: ['name', 'for', 'form'] },
                    { tag: 'progress', desc: 'Progress bar', snippet: '<progress value="$1" max="$2">$0</progress>', attrs: ['value', 'max'] },
                    { tag: 'meter', desc: 'Scalar measurement', snippet: '<meter value="$1" min="$2" max="$3">$0</meter>', attrs: ['value', 'min', 'max', 'low', 'high', 'optimum'] },
                    
                    // Media elements
                    { tag: 'audio', desc: 'Audio player', snippet: '<audio src="$1" controls$0>\n\t$2\n</audio>', attrs: ['src', 'controls', 'autoplay', 'loop', 'muted', 'preload', 'crossorigin'] },
                    { tag: 'video', desc: 'Video player', snippet: '<video src="$1" controls$0>\n\t$2\n</video>', attrs: ['src', 'controls', 'autoplay', 'loop', 'muted', 'poster', 'width', 'height', 'preload'] },
                    { tag: 'iframe', desc: 'Inline frame', snippet: '<iframe src="$1"$0></iframe>', attrs: ['src', 'width', 'height', 'loading', 'allow', 'sandbox', 'referrerpolicy', 'title'] },
                    { tag: 'object', desc: 'Embedded object', snippet: '<object data="$1" type="$2">$0</object>', attrs: ['data', 'type', 'width', 'height', 'name', 'form'] },
                    { tag: 'picture', desc: 'Responsive image', snippet: '<picture>\n\t<source srcset="$1" media="$2">\n\t<img src="$3" alt="$4">\n</picture>', attrs: [] },
                    
                    // Linking elements
                    { tag: 'a', desc: 'Anchor/link', snippet: '<a href="$1">$0</a>', attrs: ['href', 'target', 'rel', 'download', 'hreflang', 'type', 'referrerpolicy'] },
                    
                    // Script and style
                    { tag: 'script', desc: 'JavaScript', snippet: '<script src="$1"$0></script>', attrs: ['src', 'type', 'defer', 'async', 'crossorigin', 'integrity', 'nomodule'] },
                    { tag: 'style', desc: 'CSS styles', snippet: '<style$0>\n\t$1\n</style>', attrs: ['type', 'media', 'scoped'] },
                    
                    // Semantic elements
                    { tag: 'section', desc: 'Section', snippet: '<section$0>\n\t$1\n</section>', attrs: ['id', 'class', 'role', 'aria-label', 'aria-labelledby'] },
                    { tag: 'article', desc: 'Article', snippet: '<article$0>\n\t$1\n</article>', attrs: ['id', 'class', 'role', 'aria-label'] },
                    { tag: 'nav', desc: 'Navigation', snippet: '<nav$0>\n\t$1\n</nav>', attrs: ['id', 'class', 'role', 'aria-label'] },
                    { tag: 'header', desc: 'Header section', snippet: '<header$0>\n\t$1\n</header>', attrs: ['id', 'class', 'role'] },
                    { tag: 'footer', desc: 'Footer section', snippet: '<footer$0>\n\t$1\n</footer>', attrs: ['id', 'class', 'role'] },
                    { tag: 'main', desc: 'Main content', snippet: '<main$0>\n\t$1\n</main>', attrs: ['id', 'class', 'role'] },
                    { tag: 'aside', desc: 'Sidebar', snippet: '<aside$0>\n\t$1\n</aside>', attrs: ['id', 'class', 'role', 'aria-label'] },
                    { tag: 'figure', desc: 'Figure with caption', snippet: '<figure$0>\n\t$1\n\t<figcaption>$2</figcaption>\n</figure>', attrs: ['id', 'class'] },
                    { tag: 'figcaption', desc: 'Figure caption', snippet: '<figcaption>$0</figcaption>', attrs: [] },
                    { tag: 'details', desc: 'Disclosure widget', snippet: '<details$0>\n\t<summary>$1</summary>\n\t$2\n</details>', attrs: ['open'] },
                    { tag: 'summary', desc: 'Details summary', snippet: '<summary>$0</summary>', attrs: [] },
                    { tag: 'dialog', desc: 'Dialog box', snippet: '<dialog$0>\n\t$1\n</dialog>', attrs: ['open'] },
                    { tag: 'time', desc: 'Date/time', snippet: '<time datetime="$1">$0</time>', attrs: ['datetime'] },
                    { tag: 'data', desc: 'Machine-readable data', snippet: '<data value="$1">$0</data>', attrs: ['value'] },
                    
                    // Common elements
                    { tag: 'div', desc: 'Division container', snippet: '<div$0>\n\t$1\n</div>', attrs: ['id', 'class', 'role', 'aria-label', 'tabindex'] },
                    { tag: 'span', desc: 'Inline container', snippet: '<span$0>$1</span>', attrs: ['id', 'class', 'role', 'aria-label'] },
                    { tag: 'p', desc: 'Paragraph', snippet: '<p$0>$1</p>', attrs: ['id', 'class'] },
                    { tag: 'h1', desc: 'Heading 1', snippet: '<h1$0>$1</h1>', attrs: ['id', 'class'] },
                    { tag: 'h2', desc: 'Heading 2', snippet: '<h2$0>$1</h2>', attrs: ['id', 'class'] },
                    { tag: 'h3', desc: 'Heading 3', snippet: '<h3$0>$1</h3>', attrs: ['id', 'class'] },
                    { tag: 'h4', desc: 'Heading 4', snippet: '<h4$0>$1</h4>', attrs: ['id', 'class'] },
                    { tag: 'h5', desc: 'Heading 5', snippet: '<h5$0>$1</h5>', attrs: ['id', 'class'] },
                    { tag: 'h6', desc: 'Heading 6', snippet: '<h6$0>$1</h6>', attrs: ['id', 'class'] },
                    { tag: 'ul', desc: 'Unordered list', snippet: '<ul$0>\n\t<li>$1</li>\n</ul>', attrs: ['id', 'class', 'role'] },
                    { tag: 'ol', desc: 'Ordered list', snippet: '<ol$0>\n\t<li>$1</li>\n</ol>', attrs: ['id', 'class', 'role', 'start', 'reversed', 'type'] },
                    { tag: 'li', desc: 'List item', snippet: '<li$0>$1</li>', attrs: ['value'] },
                    { tag: 'table', desc: 'Table', snippet: '<table$0>\n\t<tr>\n\t\t<td>$1</td>\n\t</tr>\n</table>', attrs: ['id', 'class', 'role'] },
                    { tag: 'thead', desc: 'Table header', snippet: '<thead$0>\n\t<tr>\n\t\t<th>$1</th>\n\t</tr>\n</thead>', attrs: [] },
                    { tag: 'tbody', desc: 'Table body', snippet: '<tbody$0>\n\t$1\n</tbody>', attrs: [] },
                    { tag: 'tfoot', desc: 'Table footer', snippet: '<tfoot$0>\n\t$1\n</tfoot>', attrs: [] },
                    { tag: 'tr', desc: 'Table row', snippet: '<tr$0>\n\t<td>$1</td>\n</tr>', attrs: ['id', 'class'] },
                    { tag: 'td', desc: 'Table cell', snippet: '<td$0>$1</td>', attrs: ['colspan', 'rowspan', 'headers'] },
                    { tag: 'th', desc: 'Table header cell', snippet: '<th$0>$1</th>', attrs: ['scope', 'colspan', 'rowspan', 'headers'] },
                    { tag: 'caption', desc: 'Table caption', snippet: '<caption>$0</caption>', attrs: [] },
                    { tag: 'colgroup', desc: 'Table column group', snippet: '<colgroup$0>\n\t<col>\n</colgroup>', attrs: ['span'] }
                ];
                
                suggestions = htmlTags.map(item => ({
                    label: item.tag,
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: item.snippet,
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: item.desc,
                    detail: item.void ? `<${item.tag}> (void element)` : `<${item.tag}>`,
                    range: range,
                    sortText: '0' + item.tag // Prioritize in suggestions
                }));
            }
            
            return { suggestions };
        }
    });
    
    // Enhanced CSS autocomplete provider
    monaco.languages.registerCompletionItemProvider('css', {
        triggerCharacters: [':', ' ', '-'],
        provideCompletionItems: function(model, position) {
            const textUntilPosition = model.getValueInRange({
                startLineNumber: position.lineNumber,
                startColumn: 1,
                endLineNumber: position.lineNumber,
                endColumn: position.column
            });
            
            const word = model.getWordUntilPosition(position);
            const range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn
            };
            
            // Check if we're in a value position (after :)
            const inValue = /:\s*[^;]*$/.test(textUntilPosition);
            
            let suggestions = [];
            
            if (inValue) {
                // CSS value suggestions
                const property = textUntilPosition.match(/([a-z-]+)\s*:\s*[^;]*$/)?.[1];
                
                if (property === 'display') {
                    suggestions = ['block', 'inline', 'inline-block', 'flex', 'grid', 'none'].map(val => ({
                        label: val,
                        kind: monaco.languages.CompletionItemKind.Value,
                        insertText: val,
                        range: range
                    }));
                } else if (property === 'position') {
                    suggestions = ['static', 'relative', 'absolute', 'fixed', 'sticky'].map(val => ({
                        label: val,
                        kind: monaco.languages.CompletionItemKind.Value,
                        insertText: val,
                        range: range
                    }));
                } else if (['width', 'height', 'margin', 'padding', 'font-size'].includes(property)) {
                    suggestions = ['px', '%', 'em', 'rem', 'vh', 'vw', 'auto'].map(unit => ({
                        label: unit,
                        kind: monaco.languages.CompletionItemKind.Unit,
                        insertText: unit,
                        range: range
                    }));
                }
            } else {
                // CSS property suggestions
                const cssProperties = [
                    'display', 'position', 'top', 'right', 'bottom', 'left',
                    'width', 'height', 'margin', 'padding', 'border',
                    'background', 'color', 'font-size', 'font-family', 'font-weight',
                    'text-align', 'line-height', 'flex', 'grid', 'gap',
                    'justify-content', 'align-items', 'flex-direction',
                    'z-index', 'opacity', 'transform', 'transition', 'animation',
                    'box-shadow', 'border-radius', 'overflow', 'cursor'
                ];
                
                suggestions = cssProperties.map(prop => ({
                    label: prop,
                    kind: monaco.languages.CompletionItemKind.Property,
                    insertText: prop + ': $0;',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    range: range
                }));
            }
            
            return { suggestions };
        }
    });
    
    // Enhanced JavaScript autocomplete provider
    monaco.languages.registerCompletionItemProvider('javascript', {
        triggerCharacters: ['.', ' '],
        provideCompletionItems: function(model, position) {
            const textUntilPosition = model.getValueInRange({
                startLineNumber: position.lineNumber,
                startColumn: 1,
                endLineNumber: position.lineNumber,
                endColumn: position.column
            });
            
            const word = model.getWordUntilPosition(position);
            const range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn
            };
            
            let suggestions = [];
            
            // Check for object method access
            if (/document\.$/.test(textUntilPosition)) {
                suggestions = [
                    { label: 'getElementById', detail: '(id: string): Element' },
                    { label: 'querySelector', detail: '(selector: string): Element' },
                    { label: 'querySelectorAll', detail: '(selector: string): NodeList' },
                    { label: 'createElement', detail: '(tagName: string): Element' },
                    { label: 'addEventListener', detail: '(type: string, listener: Function): void' }
                ].map(method => ({
                    label: method.label,
                    kind: monaco.languages.CompletionItemKind.Method,
                    insertText: method.label + '($0)',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    detail: method.detail,
                    range: range
                }));
            } else if (/console\.$/.test(textUntilPosition)) {
                suggestions = ['log', 'error', 'warn', 'info', 'table'].map(method => ({
                    label: method,
                    kind: monaco.languages.CompletionItemKind.Method,
                    insertText: method + '($0)',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    range: range
                }));
            } else {
                // General JavaScript keywords and globals
                const jsKeywords = [
                    'const', 'let', 'var', 'function', 'if', 'else', 'for', 'while',
                    'return', 'break', 'continue', 'switch', 'case', 'default',
                    'try', 'catch', 'finally', 'throw', 'async', 'await',
                    'class', 'extends', 'constructor', 'this', 'super',
                    'import', 'export', 'from', 'default'
                ];
                
                const jsGlobals = [
                    'document', 'window', 'console', 'Array', 'Object', 'String',
                    'Number', 'Boolean', 'Date', 'Math', 'JSON', 'Promise',
                    'setTimeout', 'setInterval', 'fetch', 'localStorage', 'sessionStorage'
                ];
                
                suggestions = [
                    ...jsKeywords.map(kw => ({
                        label: kw,
                        kind: monaco.languages.CompletionItemKind.Keyword,
                        insertText: kw,
                        range: range
                    })),
                    ...jsGlobals.map(global => ({
                        label: global,
                        kind: monaco.languages.CompletionItemKind.Variable,
                        insertText: global,
                        range: range
                    }))
                ];
            }
            
            return { suggestions };
        }
    });
    
    // Create the Monaco editor instance with VS Code-like settings
    if (typeof editor === 'undefined' || editor === null) {
        console.log('Creating Monaco editor instance...');
        const editorContainer = document.getElementById('editor');
        if (editorContainer) {
            window.editor = monaco.editor.create(editorContainer, {
                value: '',
                language: 'html',
                theme: 'vs-dark',
                automaticLayout: true,
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                roundedSelection: false,
                scrollBeyondLastLine: false,
                readOnly: false,
                wordWrap: 'on',
                // VS Code-like autocomplete settings
                suggestOnTriggerCharacters: true,
                acceptSuggestionOnCommitCharacter: true,
                acceptSuggestionOnEnter: 'on',
                tabCompletion: 'on',
                wordBasedSuggestions: true,
                quickSuggestions: {
                    other: true,
                    comments: false,
                    strings: true
                },
                quickSuggestionsDelay: 10,
                suggest: {
                    filterGraceful: true,
                    snippetsPreventQuickSuggestions: false,
                    localityBonus: true,
                    shareSuggestSelections: true,
                    showWords: true,
                    showMethods: true,
                    showFunctions: true,
                    showConstructors: true,
                    showFields: true,
                    showVariables: true,
                    showClasses: true,
                    showStructs: true,
                    showInterfaces: true,
                    showModules: true,
                    showProperties: true,
                    showEvents: true,
                    showOperators: true,
                    showUnits: true,
                    showValues: true,
                    showConstants: true,
                    showEnums: true,
                    showEnumMembers: true,
                    showKeywords: true,
                    showSnippets: true
                }
            });
            
            // Make editor globally accessible
            if (typeof window.editor !== 'undefined') {
                editor = window.editor;
            }
            
            // Initialize auto-save timeout variable
            let editorAutoSaveTimeout = null;
            
            // Set up auto-save on content change
            window.editor.onDidChangeModelContent(() => {
                if (editorAutoSaveTimeout) {
                    clearTimeout(editorAutoSaveTimeout);
                }
                
                editorAutoSaveTimeout = setTimeout(() => {
                    // Check if we have a current file and project
                    if (typeof currentFile !== 'undefined' && currentFile && 
                        typeof currentProject !== 'undefined' && currentProject) {
                        const content = window.editor.getValue();
                        if (typeof FileService !== 'undefined') {
                            // Update file with correct parameter order: (fileId, content, project)
                            FileService.updateFile(currentFile.id, content, currentProject);
                            if (typeof ProjectService !== 'undefined') {
                                ProjectService.saveProject(currentProject);
                            }
                            if (typeof updatePreview === 'function') {
                                updatePreview();
                            }
                        }
                    }
                }, 500);
            });
            
            console.log('Monaco editor created:', !!editor);
        } else {
            console.error('Editor container not found!');
        }
    }
    
    // Wait for app.js to fully load
    const initEditor = () => {
        // Check if required functions are available
        if (typeof ProjectService === 'undefined' || typeof renderProjectsList === 'undefined') {
            console.log('Waiting for app.js functions...');
            setTimeout(initEditor, 100);
            return;
        }
        
        console.log('App.js loaded, initializing editor...');
        
        // Initialize ComponentService first (needed for workshop mode)
        if (typeof ComponentService !== 'undefined' && ComponentService.components.length === 0) {
            console.log('Initializing ComponentService...');
            ComponentService.loadComponents();
            console.log('ComponentService loaded with', ComponentService.components.length, 'components');
        }
        
        // Load projects after Monaco is initialized
        setTimeout(() => {
            try {
                const projects = ProjectService.listProjects();
                console.log('Projects found:', projects.length);
                renderProjectsList(projects);

                // Check for workshop mode
                const urlParams = new URLSearchParams(window.location.search);
                const mode = urlParams.get('mode');
                const componentId = urlParams.get('component');
                
                console.log('URL params:', { mode, componentId });
                console.log('Workshop mode check:', mode === 'workshop', componentId);
                
                if (mode === 'workshop' && componentId) {
                    console.log('Entering workshop mode...');
                    // Initialize workshop mode
                    initWorkshopMode(componentId);
                } else {
                    console.log('Entering normal mode...');
                    // Normal editor mode
                    if (projects.length > 0) {
                        const lastProject = ProjectService.getCurrentProject() || projects[0];
                        loadProject(lastProject.id);
                    }
                    
                    // Show welcome screen for first-time users
                    const hasSeenWelcome = localStorage.getItem('webforge-welcome-seen');
                    if (!hasSeenWelcome) {
                        if (typeof showWelcomeScreen === 'function') {
                            showWelcomeScreen();
                        }
                    } else {
                        // Try to restore tutorial state for returning users
                        if (typeof restoreTutorialState === 'function') {
                            restoreTutorialState();
                        }
                    }
                }
                
                // Initialize icons
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            } catch (error) {
                console.error('Error during editor initialization:', error);
                // Don't let errors break the editor - just show it empty
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }
        }, 100);
    };
    
    // Initialize workshop mode
    function initWorkshopMode(componentId) {
        console.log('=== WORKSHOP MODE INITIALIZATION ===');
        console.log('Component ID:', componentId);
        
        // Get workshop data from localStorage
        let workshopData = localStorage.getItem('webforge-workshop-start');
        console.log('Workshop data from localStorage:', workshopData);
        
        // Check for active workshop state (which includes project ID)
        const activeWorkshop = localStorage.getItem('webforge-active-workshop');
        let existingProjectId = null;
        
        if (activeWorkshop) {
            try {
                const active = JSON.parse(activeWorkshop);
                existingProjectId = active.projectId;
                console.log('Found existing workshop project ID:', existingProjectId);
                
                // If no workshop-start data, reconstruct it from active state
                if (!workshopData) {
                    workshopData = JSON.stringify({
                        id: active.componentId,
                        name: active.componentName,
                        type: 'workshop'
                    });
                    console.log('Reconstructed workshop data from active state');
                }
            } catch (e) {
                console.error('Failed to parse active workshop:', e);
            }
        }
        
        if (workshopData) {
            try {
                const workshop = JSON.parse(workshopData);
                console.log('Parsed workshop data:', workshop);
                
                // Try to load existing project first, or create new one
                let workshopProject;
                if (existingProjectId) {
                    workshopProject = ProjectService.getProject(existingProjectId);
                    if (workshopProject) {
                        console.log('Loaded existing workshop project:', existingProjectId);
                    } else {
                        console.log('Existing project not found, creating new one');
                        workshopProject = createWorkshopProject(workshop);
                    }
                } else {
                    workshopProject = createWorkshopProject(workshop);
                }
                
                console.log('Workshop project ready:', workshopProject.id);
                
                loadProject(workshopProject.id);
                console.log('Workshop project loaded');
                
                // Load workshop into WorkshopManager (new system)
                if (typeof WorkshopManager !== 'undefined') {
                    console.log('WorkshopManager found, loading component...');
                    
                    // Switch to workshop tab
                    WorkshopManager.switchTab('workshop');
                    console.log('Switched to workshop tab');
                    
                    // Load the component workshop (small delay to ensure DOM is ready)
                    setTimeout(() => {
                        console.log('Loading component into WorkshopManager:', componentId);
                        console.log('ComponentService components count:', ComponentService?.components?.length || 0);
                        
                        WorkshopManager.loadComponent(componentId);
                    }, 300);
                } else {
                    console.error('WorkshopManager not found!');
                }
                
                // DON'T clear the workshop start data - keep it for reloads
                // It will be cleared when workshop is completed
                console.log('Workshop data kept in localStorage for persistence');
                
            } catch (error) {
                console.error('Error loading workshop data:', error);
                console.error('Error stack:', error.stack);
                // Fallback to normal mode
                initNormalMode();
            }
        } else {
            console.warn('No workshop data found in localStorage, falling back to normal mode');
            initNormalMode();
        }
    }
    
    // Create a workshop project
    function createWorkshopProject(workshop) {
        const projectName = 'Workshop - ' + workshop.name;
        
        // Check if a workshop project already exists for this workshop
        const existingProjects = ProjectService.listProjects();
        const existingWorkshop = existingProjects.find(p => 
            p.name === projectName && p.type === 'workshop'
        );
        
        if (existingWorkshop) {
            console.log('Found existing workshop project:', existingWorkshop.id);
            return existingWorkshop;
        }
        
        // Create new workshop project
        console.log('Creating new workshop project:', projectName);
        const project = ProjectService.createProject(projectName, 'workshop');
        
        // Add starter files using the factory function
        const htmlFile = createProjectFile(project.id, 'index.html', FileType.HTML, getWorkshopStarterHTML(workshop));
        const cssFile = createProjectFile(project.id, 'styles.css', FileType.CSS, getWorkshopStarterCSS(workshop));
        const jsFile = createProjectFile(project.id, 'script.js', FileType.JAVASCRIPT, getWorkshopStarterJS(workshop));
        
        project.files = [htmlFile, cssFile, jsFile];
        ProjectService.saveProject(project);
        
        return project;
    }
    
    // Get starter HTML for workshop
    function getWorkshopStarterHTML(workshop) {
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Workshop: ${workshop.name}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Start building your ${workshop.name.toLowerCase()} here -->
    
    <script src="script.js"></script>
</body>
</html>`;
    }
    
    // Get starter CSS for workshop
    function getWorkshopStarterCSS(workshop) {
        return '/* Workshop: ' + workshop.name + ' */\n/* Follow the step-by-step guide to build your component */\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;\n    line-height: 1.6;\n}\n\n/* Add your styles here */\n';
    }
    
    // Get starter JavaScript for workshop
    function getWorkshopStarterJS(workshop) {
        return '// Workshop: ' + workshop.name + '\n// Add your JavaScript functionality here\n\ndocument.addEventListener("DOMContentLoaded", function() {\n    // Your code goes here\n});';
    }
    
    // Initialize normal editor mode
    function initNormalMode() {
        const projects = ProjectService.listProjects();
        if (projects.length > 0) {
            const lastProject = ProjectService.getCurrentProject() || projects[0];
            loadProject(lastProject.id);
        }
        
        // Show welcome screen for first-time users
        const hasSeenWelcome = localStorage.getItem('webforge-welcome-seen');
        if (!hasSeenWelcome && typeof showWelcomeScreen === 'function') {
            showWelcomeScreen();
        } else {
            // Try to restore tutorial state for returning users
            if (typeof restoreTutorialState === 'function') {
                restoreTutorialState();
            }
        }
    }
    
    initEditor();
});
