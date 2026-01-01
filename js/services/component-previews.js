/**
 * Component Preview Generators
 * Generates HTML preview snippets for component cards
 */

const ComponentPreviews = {
    generateNavbarPreview() {
        return `
            <div class="component-preview-placeholder">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1rem 1.5rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3); border-radius: 12px;">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 32px; height: 32px; background: rgba(255,255,255,0.25); backdrop-filter: blur(10px); border-radius: 8px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
                                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                        </div>
                        <span style="font-weight: 700; font-size: 0.95rem; letter-spacing: -0.02em;">WebForge</span>
                    </div>
                    <div style="display: flex; gap: 1.5rem; position: relative; align-items: center;">
                        <span style="padding: 0.4rem 0.75rem; border-radius: 8px; transition: all 0.3s; background: rgba(255,255,255,0.15); font-weight: 500;">Home</span>
                        <span style="padding: 0.4rem 0.75rem; border-radius: 8px; font-weight: 500; opacity: 0.9;">About</span>
                        <div style="position: relative;">
                            <span style="padding: 0.4rem 0.75rem; border-radius: 8px; background: rgba(255,255,255,0.1); font-weight: 500; display: flex; align-items: center; gap: 0.3rem;">
                                Services
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </span>
                        </div>
                        <span style="padding: 0.4rem 0.75rem; border-radius: 8px; font-weight: 500; opacity: 0.9;">Contact</span>
                    </div>
                </div>
            </div>
        `;
    },

    generateHeroPreview() {
        return `
            <div class="component-preview-placeholder">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem 1.5rem; height: 100%; display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; border-radius: 16px; box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);">
                    <div style="flex: 1; max-width: 55%;">
                        <div style="display: inline-block; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); padding: 0.3rem 0.75rem; border-radius: 20px; font-size: 0.65rem; font-weight: 600; margin-bottom: 0.75rem; border: 1px solid rgba(255,255,255,0.3);">✨ Welcome</div>
                        <h3 style="margin: 0 0 0.5rem 0; font-size: 1.2rem; font-weight: 800; letter-spacing: -0.03em; line-height: 1.2;">Build Amazing Websites</h3>
                        <p style="margin: 0 0 1rem 0; font-size: 0.75rem; opacity: 0.95; line-height: 1.5;">Create stunning web experiences with modern design and powerful features</p>
                        <div style="display: flex; gap: 0.75rem;">
                            <button style="background: white; color: #667eea; border: none; padding: 0.6rem 1.2rem; border-radius: 10px; font-size: 0.75rem; font-weight: 700; box-shadow: 0 8px 24px rgba(0,0,0,0.15); cursor: pointer;">Get Started</button>
                            <button style="background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); color: white; border: 1px solid rgba(255,255,255,0.3); padding: 0.6rem 1.2rem; border-radius: 10px; font-size: 0.75rem; font-weight: 600; cursor: pointer;">Learn More</button>
                        </div>
                    </div>
                    <div style="flex: 1; max-width: 45%; display: flex; align-items: center; justify-content: center;">
                        <div style="width: 100%; aspect-ratio: 1; background: rgba(255,255,255,0.15); backdrop-filter: blur(20px); border-radius: 20px; display: flex; align-items: center; justify-content: center; border: 2px solid rgba(255,255,255,0.2); box-shadow: 0 20px 40px rgba(0,0,0,0.2);">
                            <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    generateCardPreview() {
        return `
            <div class="component-preview-placeholder">
                <div style="background: white; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.12); overflow: hidden; max-width: 220px; margin: 1rem auto; border: 1px solid rgba(0,0,0,0.05); transition: transform 0.3s;">
                    <div style="position: relative; overflow: hidden;">
                        <img src="https://picsum.photos/220/140" style="width: 100%; height: 140px; object-fit: cover; display: block;" alt="Card preview">
                        <div style="position: absolute; top: 0.75rem; right: 0.75rem; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); padding: 0.3rem 0.6rem; border-radius: 20px; font-size: 0.65rem; font-weight: 700; color: #667eea; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">Featured</div>
                    </div>
                    <div style="padding: 1.5rem;">
                        <h4 style="margin: 0 0 0.5rem 0; font-size: 1rem; font-weight: 800; color: #1a1a1a; letter-spacing: -0.03em; line-height: 1.3;">Amazing Discovery</h4>
                        <p style="margin: 0 0 1rem 0; font-size: 0.75rem; color: #6b7280; line-height: 1.6;">Explore the beauty of modern web design with stunning components</p>
                        <button style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 0.65rem 1.25rem; border-radius: 12px; font-size: 0.75rem; width: 100%; font-weight: 700; box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3); cursor: pointer;">Learn More</button>
                    </div>
                </div>
            </div>
        `;
    },

    // Add more preview generators as needed
    generateFormPreview() {
        return `
            <div class="component-preview-placeholder">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 1.75rem; border-radius: 20px; box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4); max-width: 280px; margin: 0.5rem auto; border: 1px solid rgba(255,255,255,0.2);">
                    <h4 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; font-weight: 800; color: white; text-align: center; letter-spacing: -0.02em;">Get In Touch</h4>
                    <p style="margin: 0 0 1.25rem 0; font-size: 0.7rem; color: rgba(255,255,255,0.9); text-align: center;">We'd love to hear from you</p>
                    <div style="margin-bottom: 0.85rem;">
                        <input type="text" placeholder="Your Name" style="width: 100%; background: rgba(255,255,255,0.95); border: 2px solid transparent; padding: 0.75rem; border-radius: 12px; font-size: 0.75rem; box-sizing: border-box; font-weight: 500; transition: all 0.3s;">
                    </div>
                    <div style="margin-bottom: 0.85rem;">
                        <input type="email" placeholder="your@email.com" style="width: 100%; background: rgba(255,255,255,0.95); border: 2px solid transparent; padding: 0.75rem; border-radius: 12px; font-size: 0.75rem; box-sizing: border-box; font-weight: 500;">
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <textarea placeholder="Your message..." style="width: 100%; background: rgba(255,255,255,0.95); border: 2px solid transparent; padding: 0.75rem; border-radius: 12px; font-size: 0.75rem; height: 70px; resize: none; box-sizing: border-box; font-weight: 500; font-family: inherit;"></textarea>
                    </div>
                    <button style="background: white; color: #667eea; border: none; padding: 0.75rem; border-radius: 12px; font-size: 0.8rem; width: 100%; font-weight: 700; box-shadow: 0 8px 24px rgba(0,0,0,0.15); cursor: pointer;">Send Message</button>
                </div>
            </div>
        `;
    },

    generateGalleryPreview() {
        return `
            <div class="component-preview-placeholder">
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; padding: 1rem; max-width: 320px; margin: 0 auto;">
                    <div style="aspect-ratio: 1; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 16px; box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3); transition: transform 0.3s;"></div>
                    <div style="aspect-ratio: 1; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 16px; box-shadow: 0 8px 24px rgba(240, 147, 251, 0.3);"></div>
                    <div style="aspect-ratio: 1; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 16px; box-shadow: 0 8px 24px rgba(79, 172, 254, 0.3);"></div>
                    <div style="aspect-ratio: 1; background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); border-radius: 16px; box-shadow: 0 8px 24px rgba(67, 233, 123, 0.3);"></div>
                    <div style="aspect-ratio: 1; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); border-radius: 16px; box-shadow: 0 8px 24px rgba(250, 112, 154, 0.3);"></div>
                    <div style="aspect-ratio: 1; background: linear-gradient(135deg, #30cfd0 0%, #330867 100%); border-radius: 16px; box-shadow: 0 8px 24px rgba(48, 207, 208, 0.3);"></div>
                </div>
            </div>
        `;
    },

    generateTimelinePreview() {
        return `<div class="component-preview-placeholder"><div style="padding: 1.5rem;">Timeline preview...</div></div>`;
    },

    generatePricingPreview() {
        return `<div class="component-preview-placeholder"><div style="padding: 1.5rem;">Pricing preview...</div></div>`;
    },

    generateTestimonialPreview() {
        return `<div class="component-preview-placeholder"><div style="padding: 1.5rem;">Testimonial preview...</div></div>`;
    },

    generateFooterPreview() {
        return `<div class="component-preview-placeholder"><div style="padding: 1.5rem;">Footer preview...</div></div>`;
    }

    // TODO: Add remaining preview generators for all components
    // Copy from original component.js:
    // - generateTimelinePreview (full implementation)
    // - generatePricingPreview (full implementation)
    // - generateTestimonialPreview (full implementation)
    // - generateFooterPreview (full implementation)
    // And all other component previews
};
