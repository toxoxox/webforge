/**
 * Forge Master Service - Handles gamification, XP, levels, and achievements
 */

const ForgeMaster = {
    STORAGE_KEY: 'webforge_forge_master',
    
    // XP values for different actions
    XP_VALUES: {
        TUTORIAL_STEP: 10,
        TUTORIAL_COMPLETE: 100,
        PROJECT_CREATE: 50,
        PROJECT_EXPORT: 25,
        DAILY_STREAK: 20,
        FIRST_TIME_BONUS: 50
    },
    
    // Level thresholds and titles
    LEVELS: [
        { level: 1, xp: 0, title: 'Apprentice Smith', description: 'Just starting your journey' },
        { level: 2, xp: 100, title: 'Novice Forger', description: 'Learning the basics' },
        { level: 3, xp: 250, title: 'Skilled Apprentice', description: 'Getting the hang of it' },
        { level: 4, xp: 450, title: 'Junior Craftsman', description: 'Building confidence' },
        { level: 5, xp: 700, title: 'Forge Worker', description: 'Steady progress' },
        { level: 6, xp: 1000, title: 'Journeyman Smith', description: 'Competent and capable' },
        { level: 7, xp: 1350, title: 'Skilled Artisan', description: 'Creating quality work' },
        { level: 8, xp: 1750, title: 'Expert Forger', description: 'Mastering the craft' },
        { level: 9, xp: 2200, title: 'Master Craftsman', description: 'Exceptional skill' },
        { level: 10, xp: 2700, title: 'Forge Master', description: 'True mastery achieved' },
        { level: 11, xp: 3250, title: 'Legendary Smith', description: 'Beyond ordinary limits' },
        { level: 12, xp: 3850, title: 'Grandmaster Forger', description: 'Legendary status' }
    ],
    
    // Achievement definitions
    ACHIEVEMENTS: {
        // Beginner achievements
        'first-strike': {
            id: 'first-strike',
            name: 'First Strike',
            description: 'Complete your first tutorial step',
            icon: 'hammer',
            xp: 25,
            rarity: 'common'
        },
        'apprentice-smith': {
            id: 'apprentice-smith',
            name: 'Apprentice Smith',
            description: 'Complete 5 tutorial steps',
            icon: 'award',
            xp: 50,
            rarity: 'common'
        },
        'forge-ignited': {
            id: 'forge-ignited',
            name: 'Forge Ignited',
            description: 'Create your first project',
            icon: 'flame',
            xp: 75,
            rarity: 'common'
        },
        'first-export': {
            id: 'first-export',
            name: 'First Masterwork',
            description: 'Export your first project',
            icon: 'package',
            xp: 50,
            rarity: 'common'
        },
        
        // Skill achievements
        'html-forger': {
            id: 'html-forger',
            name: 'HTML Forger',
            description: 'Complete all HTML tutorials',
            icon: 'layout-template',
            xp: 200,
            rarity: 'uncommon'
        },
        'css-artisan': {
            id: 'css-artisan',
            name: 'CSS Artisan',
            description: 'Complete all CSS tutorials',
            icon: 'paintbrush',
            xp: 200,
            rarity: 'uncommon'
        },
        'js-enchanter': {
            id: 'js-enchanter',
            name: 'JavaScript Enchanter',
            description: 'Complete all JavaScript tutorials',
            icon: 'zap',
            xp: 200,
            rarity: 'uncommon'
        },
        
        // Mastery achievements
        'master-forger': {
            id: 'master-forger',
            name: 'Master Forger',
            description: 'Complete all tutorials',
            icon: 'crown',
            xp: 500,
            rarity: 'rare'
        },
        'legendary-smith': {
            id: 'legendary-smith',
            name: 'Legendary Smith',
            description: 'Reach maximum level',
            icon: 'star',
            xp: 1000,
            rarity: 'legendary'
        },
        'forge-master': {
            id: 'forge-master',
            name: 'Forge Master',
            description: 'Maintain a 30-day streak',
            icon: 'calendar',
            xp: 300,
            rarity: 'rare'
        },
        'perfect-craft': {
            id: 'perfect-craft',
            name: 'Perfect Craft',
            description: 'Complete a tutorial with zero errors',
            icon: 'check-circle',
            xp: 100,
            rarity: 'uncommon'
        }
    },
    
    /**
     * Get user's forge profile
     */
    getProfile(userId = 'default-user') {
        const profile = StorageService.load(`${this.STORAGE_KEY}_${userId}`) || this.createNewProfile(userId);
        return profile;
    },
    
    /**
     * Create new forge profile
     */
    createNewProfile(userId) {
        const profile = {
            userId: userId,
            xp: 0,
            level: 1,
            title: 'Apprentice Smith',
            achievements: [],
            unlockedAchievements: [],
            stats: {
                tutorialStepsCompleted: 0,
                tutorialsCompleted: 0,
                projectsCreated: 0,
                projectsExported: 0,
                currentStreak: 0,
                longestStreak: 0,
                lastActiveDate: new Date().toISOString().split('T')[0]
            },
            inventory: {
                tools: [],
                blueprints: [],
                materials: []
            },
            createdAt: new Date().toISOString(),
            lastUpdated: new Date().toISOString()
        };
        
        this.saveProfile(profile);
        return profile;
    },
    
    /**
     * Save forge profile
     */
    saveProfile(profile) {
        profile.lastUpdated = new Date().toISOString();
        return StorageService.save(`${this.STORAGE_KEY}_${profile.userId}`, profile);
    },
    
    /**
     * Award XP and check for level up
     */
    awardXP(userId, amount, reason = '') {
        const profile = this.getProfile(userId);
        const oldLevel = profile.level;
        
        profile.xp += amount;
        
        // Check for level up
        const newLevel = this.calculateLevel(profile.xp);
        if (newLevel > oldLevel) {
            profile.level = newLevel;
            profile.title = this.LEVELS.find(l => l.level === newLevel)?.title || 'Unknown';
            
            // Show level up notification
            this.showLevelUpNotification(newLevel, profile.title);
            
            // Check for level-based achievements
            if (newLevel === 12) {
                this.unlockAchievement(userId, 'legendary-smith');
            }
        }
        
        this.saveProfile(profile);
        this.updateForgeUI(profile);
        
        return {
            xpAwarded: amount,
            totalXP: profile.xp,
            leveledUp: newLevel > oldLevel,
            newLevel: newLevel,
            newTitle: profile.title,
            reason: reason
        };
    },
    
    /**
     * Calculate level from XP
     */
    calculateLevel(xp) {
        for (let i = this.LEVELS.length - 1; i >= 0; i--) {
            if (xp >= this.LEVELS[i].xp) {
                return this.LEVELS[i].level;
            }
        }
        return 1;
    },
    
    /**
     * Get XP needed for next level
     */
    getXPForNextLevel(currentXP) {
        const currentLevel = this.calculateLevel(currentXP);
        const nextLevel = this.LEVELS.find(l => l.level === currentLevel + 1);
        
        if (!nextLevel) {
            return { needed: 0, total: currentXP, isMaxLevel: true };
        }
        
        return {
            needed: nextLevel.xp - currentXP,
            total: nextLevel.xp,
            isMaxLevel: false
        };
    },
    
    /**
     * Unlock achievement
     */
    unlockAchievement(userId, achievementId) {
        const profile = this.getProfile(userId);
        const achievement = this.ACHIEVEMENTS[achievementId];
        
        if (!achievement || profile.achievements.includes(achievementId)) {
            return false;
        }
        
        profile.achievements.push(achievementId);
        profile.unlockedAchievements.push({
            id: achievementId,
            unlockedAt: new Date().toISOString()
        });
        
        // Award achievement XP
        this.awardXP(userId, achievement.xp, `Achievement: ${achievement.name}`);
        
        // Show achievement notification
        this.showAchievementNotification(achievement);
        
        this.saveProfile(profile);
        return true;
    },
    
    /**
     * Check and award achievements based on stats
     */
    checkAchievements(userId) {
        const profile = this.getProfile(userId);
        const stats = profile.stats;
        
        // First strike
        if (stats.tutorialStepsCompleted >= 1 && !profile.achievements.includes('first-strike')) {
            this.unlockAchievement(userId, 'first-strike');
        }
        
        // Apprentice smith
        if (stats.tutorialStepsCompleted >= 5 && !profile.achievements.includes('apprentice-smith')) {
            this.unlockAchievement(userId, 'apprentice-smith');
        }
        
        // Forge ignited
        if (stats.projectsCreated >= 1 && !profile.achievements.includes('forge-ignited')) {
            this.unlockAchievement(userId, 'forge-ignited');
        }
        
        // First export
        if (stats.projectsExported >= 1 && !profile.achievements.includes('first-export')) {
            this.unlockAchievement(userId, 'first-export');
        }
        
        // Streak achievements
        if (stats.currentStreak >= 30 && !profile.achievements.includes('forge-master')) {
            this.unlockAchievement(userId, 'forge-master');
        }
    },
    
    /**
     * Update daily streak
     */
    updateStreak(userId) {
        const profile = this.getProfile(userId);
        const today = new Date().toISOString().split('T')[0];
        const lastActive = profile.stats.lastActiveDate;
        
        if (lastActive === today) {
            return profile.stats.currentStreak; // Already updated today
        }
        
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        
        if (lastActive === yesterdayStr) {
            // Continue streak
            profile.stats.currentStreak++;
            this.awardXP(userId, this.XP_VALUES.DAILY_STREAK, 'Daily streak bonus');
        } else {
            // Reset streak
            profile.stats.currentStreak = 1;
        }
        
        profile.stats.longestStreak = Math.max(profile.stats.longestStreak, profile.stats.currentStreak);
        profile.stats.lastActiveDate = today;
        
        this.saveProfile(profile);
        this.checkAchievements(userId);
        
        return profile.stats.currentStreak;
    },
    
    /**
     * Record tutorial step completion
     */
    recordTutorialStep(userId) {
        const profile = this.getProfile(userId);
        profile.stats.tutorialStepsCompleted++;
        
        this.awardXP(userId, this.XP_VALUES.TUTORIAL_STEP, 'Tutorial step completed');
        this.updateStreak(userId);
        this.checkAchievements(userId);
        
        this.saveProfile(profile);
    },
    
    /**
     * Record tutorial completion
     */
    recordTutorialComplete(userId, tutorialId) {
        const profile = this.getProfile(userId);
        profile.stats.tutorialsCompleted++;
        
        this.awardXP(userId, this.XP_VALUES.TUTORIAL_COMPLETE, 'Tutorial completed');
        this.checkAchievements(userId);
        
        this.saveProfile(profile);
    },
    
    /**
     * Record project creation
     */
    recordProjectCreate(userId) {
        const profile = this.getProfile(userId);
        profile.stats.projectsCreated++;
        
        this.awardXP(userId, this.XP_VALUES.PROJECT_CREATE, 'Project created');
        this.checkAchievements(userId);
        
        this.saveProfile(profile);
    },
    
    /**
     * Record project export
     */
    recordProjectExport(userId) {
        const profile = this.getProfile(userId);
        profile.stats.projectsExported++;
        
        this.awardXP(userId, this.XP_VALUES.PROJECT_EXPORT, 'Project exported');
        this.checkAchievements(userId);
        
        this.saveProfile(profile);
    },
    
    /**
     * Show level up notification
     */
    showLevelUpNotification(level, title) {
        if (typeof showToast === 'function') {
            showToast(
                `You've reached level ${level}! You are now a ${title}!`,
                'success',
                'Level Up!',
                6000
            );
        }
        
        // Add visual effects
        this.triggerLevelUpEffects();
    },
    
    /**
     * Show achievement notification
     */
    showAchievementNotification(achievement) {
        if (typeof showToast === 'function') {
            showToast(
                `${achievement.description}`,
                'success',
                `Achievement Unlocked: ${achievement.name}`,
                5000
            );
        }
        
        // Add visual effects
        this.triggerAchievementEffects();
    },
    
    /**
     * Trigger level up visual effects
     */
    triggerLevelUpEffects() {
        // Add golden glow effect to the page
        document.body.classList.add('level-up-effect');
        setTimeout(() => {
            document.body.classList.remove('level-up-effect');
        }, 3000);
    },
    
    /**
     * Trigger achievement visual effects
     */
    triggerAchievementEffects() {
        // Add achievement sparkle effect
        document.body.classList.add('achievement-effect');
        setTimeout(() => {
            document.body.classList.remove('achievement-effect');
        }, 2000);
    },
    
    /**
     * Update forge UI elements
     */
    updateForgeUI(profile) {
        // Update XP bar
        const xpBar = document.getElementById('forge-xp-bar');
        const xpText = document.getElementById('forge-xp-text');
        const levelText = document.getElementById('forge-level');
        const titleText = document.getElementById('forge-title');
        
        if (xpBar && xpText && levelText && titleText) {
            const nextLevel = this.getXPForNextLevel(profile.xp);
            const currentLevelXP = this.LEVELS.find(l => l.level === profile.level)?.xp || 0;
            const progressXP = profile.xp - currentLevelXP;
            const neededXP = nextLevel.total - currentLevelXP;
            const percentage = nextLevel.isMaxLevel ? 100 : (progressXP / neededXP) * 100;
            
            xpBar.style.width = `${percentage}%`;
            xpText.textContent = nextLevel.isMaxLevel ? 'MAX LEVEL' : `${progressXP}/${neededXP} XP`;
            levelText.textContent = profile.level;
            titleText.textContent = profile.title;
        }
    },
    
    /**
     * Get achievement progress
     */
    getAchievementProgress(userId) {
        const profile = this.getProfile(userId);
        const totalAchievements = Object.keys(this.ACHIEVEMENTS).length;
        const unlockedCount = profile.achievements.length;
        
        return {
            unlocked: unlockedCount,
            total: totalAchievements,
            percentage: (unlockedCount / totalAchievements) * 100,
            achievements: profile.achievements.map(id => ({
                ...this.ACHIEVEMENTS[id],
                unlockedAt: profile.unlockedAchievements.find(a => a.id === id)?.unlockedAt
            }))
        };
    }
};