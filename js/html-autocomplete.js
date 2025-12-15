const HTML5_TAGS = {
    void: ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'],
    normal: ['html', 'head', 'title', 'style', 'body', 'header', 'nav', 'main', 'section', 'article', 'aside', 'footer', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'blockquote', 'ol', 'ul', 'li', 'dl', 'dt', 'dd', 'figure', 'figcaption', 'div', 'a', 'span', 'strong', 'em', 'b', 'i', 'u', 'mark', 'small', 'sub', 'sup', 'code', 'samp', 'kbd', 'var', 'abbr', 'cite', 'q', 'time', 'data', 'bdi', 'bdo', 'audio', 'video', 'picture', 'canvas', 'svg', 'iframe', 'object', 'table', 'caption', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'colgroup', 'form', 'label', 'textarea', 'button', 'select', 'option', 'optgroup', 'fieldset', 'legend', 'datalist', 'output', 'progress', 'meter', 'details', 'summary', 'dialog', 'script', 'noscript', 'template', 'slot', 'map']
};

const GLOBAL_ATTRS = ['id', 'class', 'style', 'title', 'hidden', 'tabindex', 'contenteditable', 'draggable', 'spellcheck', 'translate', 'dir', 'lang', 'accesskey', 'autofocus', 'inert', 'role', 'aria-label', 'aria-labelledby', 'aria-hidden', 'aria-expanded', 'aria-controls', 'aria-describedby', 'aria-live', 'aria-pressed', 'aria-selected'];

const BOOLEAN_ATTRS = ['hidden', 'required', 'disabled', 'readonly', 'checked', 'selected', 'multiple', 'autoplay', 'muted', 'loop', 'controls', 'async', 'defer', 'novalidate', 'autofocus', 'allowfullscreen'];

const EVENT_ATTRS = ['onclick', 'ondblclick', 'onmousedown', 'onmouseup', 'onmouseover', 'onmousemove', 'onmouseout', 'onmouseenter', 'onmouseleave', 'onkeydown', 'onkeyup', 'onkeypress', 'oninput', 'onchange', 'onsubmit', 'onreset', 'onfocus', 'onblur', 'onload', 'onerror', 'onscroll', 'onwheel', 'oncontextmenu', 'ondrag', 'ondrop', 'ondragstart', 'ondragend'];

const TAG_ATTRS = {
    a: ['href', 'target', 'download', 'rel', 'hreflang', 'type', 'referrerpolicy'],
    img: ['src', 'alt', 'width', 'height', 'loading', 'decoding', 'srcset', 'sizes', 'referrerpolicy', 'crossorigin'],
    link: ['rel', 'href', 'as', 'type', 'media', 'crossorigin', 'integrity', 'referrerpolicy'],
    script: ['src', 'type', 'async', 'defer', 'nomodule', 'crossorigin', 'integrity', 'referrerpolicy'],
    meta: ['name', 'content', 'charset', 'http-equiv'],
    form: ['action', 'method', 'enctype', 'autocomplete', 'novalidate', 'target'],
    input: ['type', 'name', 'value', 'placeholder', 'required', 'disabled', 'readonly', 'checked', 'minlength', 'maxlength', 'min', 'max', 'step', 'pattern', 'autocomplete', 'autofocus', 'multiple', 'accept', 'size'],
    textarea: ['name', 'rows', 'cols', 'minlength', 'maxlength', 'placeholder', 'required', 'readonly', 'disabled', 'wrap'],
    button: ['type', 'name', 'value', 'disabled', 'autofocus', 'form'],
    select: ['name', 'multiple', 'size', 'required', 'disabled'],
    option: ['value', 'selected', 'disabled', 'label'],
    label: ['for', 'form'],
    video: ['src', 'controls', 'autoplay', 'muted', 'loop', 'preload', 'crossorigin'],
    audio: ['src', 'controls', 'autoplay', 'muted', 'loop', 'preload', 'crossorigin'],
    source: ['src', 'type', 'media'],
    iframe: ['src', 'srcdoc', 'name', 'sandbox', 'allow', 'allowfullscreen', 'loading', 'referrerpolicy'],
    table: ['border'],
    th: ['colspan', 'rowspan', 'headers', 'scope'],
    td: ['colspan', 'rowspan', 'headers', 'scope'],
    progress: ['value', 'min', 'max'],
    meter: ['value', 'min', 'max', 'low', 'high', 'optimum']
};

function registerHTML5Autocomplete(monaco) {
    monaco.languages.registerCompletionItemProvider('html', {
        triggerCharacters: ['<', ' ', '"', '='],
        provideCompletionItems: (model, position) => {
            const textUntilPosition = model.getValueInRange({
                startLineNumber: position.lineNumber,
                startColumn: 1,
                endLineNumber: position.lineNumber,
                endColumn: position.column
            });

            const suggestions = [];
            const word = model.getWordUntilPosition(position);
            const range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn
            };

            // Check if we're inside an attribute value
            const insideValueMatch = textUntilPosition.match(/(\w+)="([^"]*)$/);
            if (insideValueMatch) {
                const attrName = insideValueMatch[1];
                const partialValue = insideValueMatch[2];
                
                // Suggest asset files for src attributes
                if (attrName === 'src' && typeof currentProject !== 'undefined' && currentProject) {
                    const assetFiles = currentProject.files.filter(f => f.type === 'asset');
                    
                    assetFiles.forEach(asset => {
                        suggestions.push({
                            label: asset.name,
                            kind: monaco.languages.CompletionItemKind.File,
                            insertText: asset.name,
                            documentation: `Uploaded asset: ${asset.name}\nUse the filename - it will be automatically resolved in the preview!`,
                            detail: 'Asset file',
                            range: {
                                startLineNumber: position.lineNumber,
                                endLineNumber: position.lineNumber,
                                startColumn: position.column - partialValue.length,
                                endColumn: position.column
                            }
                        });
                    });
                    
                    return { suggestions };
                }
                
                return { suggestions: [] };
            }

            const insideTagMatch = textUntilPosition.match(/<([a-zA-Z][a-zA-Z0-9]*)\s+[^>]*$/);
            const afterOpenBracket = textUntilPosition.match(/<[a-zA-Z]*$/);
            
            if (insideTagMatch && !afterOpenBracket) {
                const tagName = insideTagMatch[1].toLowerCase();
                const allAttrs = [...GLOBAL_ATTRS, ...EVENT_ATTRS];
                
                if (TAG_ATTRS[tagName]) {
                    allAttrs.push(...TAG_ATTRS[tagName]);
                }

                const uniqueAttrs = [...new Set(allAttrs)];
                
                uniqueAttrs.forEach(attr => {
                    const isBoolean = BOOLEAN_ATTRS.includes(attr);
                    suggestions.push({
                        label: attr,
                        kind: monaco.languages.CompletionItemKind.Property,
                        insertText: isBoolean ? attr : `${attr}="$0"`,
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        documentation: `${attr} attribute`,
                        range: range,
                        sortText: attr.startsWith('aria-') ? 'z' + attr : attr.startsWith('on') ? 'y' + attr : 'a' + attr
                    });
                });

                suggestions.push({
                    label: 'data-',
                    kind: monaco.languages.CompletionItemKind.Property,
                    insertText: 'data-${1:name}="$0"',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'Custom data attribute',
                    range: range,
                    sortText: 'zz'
                });
            } else {
                const beforeCursor = textUntilPosition.slice(Math.max(0, textUntilPosition.length - 50));
                const notInTag = !beforeCursor.match(/<[^>]*$/);
                
                if (notInTag || afterOpenBracket) {
                    HTML5_TAGS.void.forEach(tag => {
                        suggestions.push({
                            label: tag,
                            kind: monaco.languages.CompletionItemKind.Keyword,
                            insertText: afterOpenBracket ? `${tag}>` : `<${tag}>`,
                            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                            documentation: `<${tag}> (void element)`,
                            range: range,
                            sortText: 'a' + tag
                        });
                    });

                    HTML5_TAGS.normal.forEach(tag => {
                        suggestions.push({
                            label: tag,
                            kind: monaco.languages.CompletionItemKind.Keyword,
                            insertText: afterOpenBracket ? `${tag}>$0</${tag}>` : `<${tag}>$0</${tag}>`,
                            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                            documentation: `<${tag}></${tag}>`,
                            range: range,
                            sortText: 'a' + tag
                        });
                    });
                }
            }

            return { suggestions };
        }
    });
}
