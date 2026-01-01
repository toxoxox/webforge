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
                        <div style="display: inline-block; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); padding: 0.3rem 0.75rem; border-radius: 20px; font-size: 0.65rem; font-weight: 600; margin-bottom: 0.75rem; border: 1px solid rgba(255,255,255,0.3);">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: middle; margin-right: 0.25rem;">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            Welcome
                        </div>
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
        return `
            <div class="component-preview-placeholder">
                <div style="padding: 1.5rem; max-width: 300px; margin: 0 auto;">
                    <div style="position: relative; padding-left: 2.5rem; padding-bottom: 1.5rem; border-left: 3px solid #667eea;">
                        <div style="position: absolute; left: -8px; top: 0; width: 12px; height: 12px; background: #667eea; border-radius: 50%;"></div>
                        <div style="color: #667eea; font-weight: 700; font-size: 0.8rem; margin-bottom: 0.3rem;">2024</div>
                        <h4 style="margin: 0 0 0.3rem 0; font-size: 0.95rem; font-weight: 700; color: #333;">Latest Event</h4>
                        <p style="margin: 0; font-size: 0.75rem; color: #666; line-height: 1.5;">Something amazing happened this year</p>
                    </div>
                    <div style="position: relative; padding-left: 2.5rem; padding-bottom: 1.5rem; border-left: 3px solid #667eea;">
                        <div style="position: absolute; left: -8px; top: 0; width: 12px; height: 12px; background: #667eea; border-radius: 50%;"></div>
                        <div style="color: #667eea; font-weight: 700; font-size: 0.8rem; margin-bottom: 0.3rem;">2020</div>
                        <h4 style="margin: 0 0 0.3rem 0; font-size: 0.95rem; font-weight: 700; color: #333;">Major Milestone</h4>
                        <p style="margin: 0; font-size: 0.75rem; color: #666; line-height: 1.5;">Important event in our history</p>
                    </div>
                    <div style="position: relative; padding-left: 2.5rem; border-left: 3px solid #667eea;">
                        <div style="position: absolute; left: -8px; top: 0; width: 12px; height: 12px; background: #667eea; border-radius: 50%;"></div>
                        <div style="color: #667eea; font-weight: 700; font-size: 0.8rem; margin-bottom: 0.3rem;">2015</div>
                        <h4 style="margin: 0 0 0.3rem 0; font-size: 0.95rem; font-weight: 700; color: #333;">The Beginning</h4>
                        <p style="margin: 0; font-size: 0.75rem; color: #666; line-height: 1.5;">Where our story started</p>
                    </div>
                </div>
            </div>
        `;
    },

    generatePricingPreview() {
        return `
            <div class="component-preview-placeholder">
                <div style="display: flex; gap: 1rem; padding: 1rem; justify-content: center; align-items: center;">
                    <div style="background: white; border: 2px solid #e5e7eb; border-radius: 15px; padding: 1.5rem; width: 140px; transition: transform 0.3s;">
                        <h4 style="margin: 0 0 0.5rem 0; font-size: 1rem; font-weight: 700; color: #333; text-align: center;">Basic</h4>
                        <div style="font-size: 1.8rem; font-weight: 700; color: #667eea; margin-bottom: 1rem; text-align: center;">$29<span style="font-size: 0.7rem; font-weight: 400; color: #666;">/mo</span></div>
                        <ul style="list-style: none; padding: 0; margin: 0 0 1rem 0; font-size: 0.7rem; color: #666;">
                            <li style="padding: 0.4rem 0; border-bottom: 1px solid #e5e7eb;">5 Projects</li>
                            <li style="padding: 0.4rem 0; border-bottom: 1px solid #e5e7eb;">Basic Support</li>
                            <li style="padding: 0.4rem 0;">1 GB Storage</li>
                        </ul>
                        <button style="width: 100%; padding: 0.6rem; background: #667eea; color: white; border: none; border-radius: 8px; font-size: 0.75rem; font-weight: 600; cursor: pointer;">Select</button>
                    </div>
                    <div style="background: #667eea; border: 2px solid #667eea; border-radius: 15px; padding: 1.5rem; width: 140px; transform: scale(1.05); color: white; position: relative;">
                        <div style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); background: #4CAF50; color: white; padding: 0.2rem 0.7rem; border-radius: 20px; font-size: 0.65rem; font-weight: 600;">Popular</div>
                        <h4 style="margin: 0 0 0.5rem 0; font-size: 1rem; font-weight: 700; color: white; text-align: center;">Pro</h4>
                        <div style="font-size: 1.8rem; font-weight: 700; color: white; margin-bottom: 1rem; text-align: center;">$49<span style="font-size: 0.7rem; font-weight: 400;">/mo</span></div>
                        <ul style="list-style: none; padding: 0; margin: 0 0 1rem 0; font-size: 0.7rem;">
                            <li style="padding: 0.4rem 0; border-bottom: 1px solid rgba(255,255,255,0.2);">Unlimited</li>
                            <li style="padding: 0.4rem 0; border-bottom: 1px solid rgba(255,255,255,0.2);">Priority Support</li>
                            <li style="padding: 0.4rem 0;">10 GB Storage</li>
                        </ul>
                        <button style="width: 100%; padding: 0.6rem; background: white; color: #667eea; border: none; border-radius: 8px; font-size: 0.75rem; font-weight: 600; cursor: pointer;">Select</button>
                    </div>
                </div>
            </div>
        `;
    },

    generateTestimonialPreview() {
        return `
            <div class="component-preview-placeholder">
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; padding: 1rem; max-width: 350px; margin: 0 auto;">
                    <div style="background: white; padding: 1.25rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <img src="https://i.pravatar.cc/60?img=1" style="width: 45px; height: 45px; border-radius: 50%; object-fit: cover;" alt="Customer">
                            <div>
                                <h5 style="margin: 0; color: #333; font-size: 0.85rem; font-weight: 700;">Sarah Johnson</h5>
                                <p style="margin: 0.15rem 0 0 0; color: #667eea; font-size: 0.7rem;">Happy Customer</p>
                            </div>
                        </div>
                        <p style="color: #666; line-height: 1.5; font-style: italic; margin: 0; font-size: 0.75rem;">"Amazing service! Highly recommend to everyone."</p>
                    </div>
                    <div style="background: white; padding: 1.25rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <img src="https://i.pravatar.cc/60?img=5" style="width: 45px; height: 45px; border-radius: 50%; object-fit: cover;" alt="Customer">
                            <div>
                                <h5 style="margin: 0; color: #333; font-size: 0.85rem; font-weight: 700;">Mike Chen</h5>
                                <p style="margin: 0.15rem 0 0 0; color: #667eea; font-size: 0.7rem;">Regular Client</p>
                            </div>
                        </div>
                        <p style="color: #666; line-height: 1.5; font-style: italic; margin: 0; font-size: 0.75rem;">"Best experience ever! Will definitely come back."</p>
                    </div>
                </div>
            </div>
        `;
    },

    generateFooterPreview() {
        return `
            <div class="component-preview-placeholder">
                <div style="background: #2c3e50; color: white; padding: 1.5rem; border-radius: 12px;">
                    <div style="display: flex; justify-content: space-between; gap: 2rem; margin-bottom: 1rem; font-size: 0.7rem;">
                        <div style="flex: 1;">
                            <h5 style="margin: 0 0 0.5rem 0; font-size: 0.85rem; font-weight: 700;">My Company</h5>
                            <p style="margin: 0; color: #bdc3c7; font-size: 0.65rem;">Building amazing websites</p>
                        </div>
                        <div style="flex: 1;">
                            <h5 style="margin: 0 0 0.5rem 0; font-size: 0.85rem; font-weight: 700;">Quick Links</h5>
                            <div style="display: flex; flex-direction: column; gap: 0.3rem;">
                                <a href="#" style="color: #bdc3c7; text-decoration: none; font-size: 0.65rem;">Home</a>
                                <a href="#" style="color: #bdc3c7; text-decoration: none; font-size: 0.65rem;">About</a>
                                <a href="#" style="color: #bdc3c7; text-decoration: none; font-size: 0.65rem;">Contact</a>
                            </div>
                        </div>
                        <div style="flex: 1;">
                            <h5 style="margin: 0 0 0.5rem 0; font-size: 0.85rem; font-weight: 700;">Follow Us</h5>
                            <div style="display: flex; gap: 0.5rem;">
                                <div style="width: 28px; height: 28px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </div>
                                <div style="width: 28px; height: 28px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="text-align: center; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
                        <p style="margin: 0; color: #bdc3c7; font-size: 0.65rem;">© 2024 My Company. All rights reserved.</p>
                    </div>
                </div>
            </div>
        `;
    },

    // Remaining 18 component previews - using generic colored previews for now
    // These can be customized later based on specific component designs
    
    generateBeforeAfterSliderPreview() {
        return this.generateGenericPreview('Before-After Slider', '#f093fb', 'image');
    },

    generateAppointmentSelectorPreview() {
        return this.generateGenericPreview('Appointment Selector', '#4facfe', 'calendar');
    },

    generateGenreFilterTabsPreview() {
        return this.generateGenericPreview('Genre Filter Tabs', '#43e97b', 'filter');
    },

    generateProgressBarPreview() {
        return this.generateGenericPreview('Progress Bar', '#fa709a', 'trending-up');
    },

    generateAnnouncementBannerPreview() {
        return this.generateGenericPreview('Announcement Banner', '#30cfd0', 'alert-circle');
    },

    generateDifficultyBadgePreview() {
        return this.generateGenericPreview('Difficulty Badge', '#667eea', 'award');
    },

    generateAdoptionStatusBadgePreview() {
        return this.generateGenericPreview('Adoption Status', '#f5576c', 'heart');
    },

    generatePetTypeFilterPreview() {
        return this.generateGenericPreview('Pet Type Filter', '#38f9d7', 'filter');
    },

    generateCityStatisticsPreview() {
        return this.generateGenericPreview('City Statistics', '#fee140', 'bar-chart-2');
    },

    generateQuoteHighlightPreview() {
        return this.generateGenericPreview('Quote Highlight', '#764ba2', 'message-circle');
    },

    generateWorkoutSchedulePreview() {
        return this.generateGenericPreview('Workout Schedule', '#00f2fe', 'calendar');
    },

    generateExpandableTimelinePreview() {
        return this.generateGenericPreview('Expandable Timeline', '#667eea', 'git-branch');
    },

    generateGameInfoModalPreview() {
        return this.generateGenericPreview('Game Info Modal', '#f093fb', 'info');
    },

    generateTribeProfilePreview() {
        return this.generateGenericPreview('Tribe Profile', '#43e97b', 'users');
    },

    generateCulturalArtifactPreview() {
        return this.generateGenericPreview('Cultural Artifact', '#fa709a', 'package');
    },

    generateTeamHistoryTablePreview() {
        return this.generateGenericPreview('Team History Table', '#30cfd0', 'list');
    },

    generatePlayerStatsPanelPreview() {
        return this.generateGenericPreview('Player Stats Panel', '#667eea', 'activity');
    },

    generateLessonProgressPreview() {
        return this.generateGenericPreview('Lesson Progress', '#4facfe', 'check-circle');
    },

    generateBmiCalculatorPreview() {
        return this.generateGenericPreview('BMI Calculator', '#f5576c', 'calculator');
    },

    // Generic preview generator helper
    generateGenericPreview(title, color, iconName) {
        const icons = {
            'image': '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
            'calendar': '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
            'filter': '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
            'trending-up': '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
            'alert-circle': '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
            'award': '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
            'heart': '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
            'bar-chart-2': '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
            'message-circle': '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
            'git-branch': '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
            'info': '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
            'users': '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
            'package': '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
            'list': '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
            'activity': '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
            'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
            'calculator': '<rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><line x1="8" y1="14" x2="8" y2="18"></line><line x1="12" y1="14" x2="12" y2="18"></line><line x1="8" y1="10" x2="16" y2="10"></line>'
        };

        const iconSvg = icons[iconName] || icons['package'];

        return `
            <div class="component-preview-placeholder">
                <div style="background: linear-gradient(135deg, ${color} 0%, ${color}dd 100%); padding: 2rem; border-radius: 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 180px; box-shadow: 0 10px 40px rgba(0,0,0,0.15);">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 1rem; opacity: 0.9;">
                        ${iconSvg}
                    </svg>
                    <h4 style="margin: 0; color: white; font-size: 1rem; font-weight: 700; text-align: center;">${title}</h4>
                </div>
            </div>
        `;
    }
};
