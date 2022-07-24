import type { Engraving, Engravings } from "./Types";

export default class DAO {
    public static global = {
        marketURL: 'https://www.lostarkmarket.online/api/export-market-live/',
        region: 'euc',
    };

    private static regions = {
        nae: 'North America East',
        naw: 'North America West',
        euc: 'Europe Central',
        euw: 'Europe West',
        sa: 'South America',
    };

    private static engravingsList: Engraving[] = [
        { key: 'Adrenaline', name: "Adrenaline", desc: "", type: "battle" },
        { key: 'AllOutAttack', name: "All-Out Attack", desc: "", type: "battle" },
        { key: 'AmbushMaster', name: "Ambush Master", desc: "", type: "battle" },
        { key: 'Awakening', name: "Awakening", desc: "", type: "battle" },
        { key: 'Barricade', name: "Barricade", desc: "", type: "battle" },
        { key: 'BrokenBone', name: "Broken Bone", desc: "", type: "battle" },
        { key: 'Contender', name: "Contender", desc: "", type: "battle" },
        { key: 'CrisisEvasion', name: "Crisis Evasion", desc: "", type: "battle" },
        { key: 'CrushingFist', name: "Crushing Fist", desc: "", type: "battle" },
        { key: 'CursedDoll', name: "Cursed Doll", desc: "", type: "battle" },
        { key: 'Disrespect', name: "Disrespect", desc: "", type: "battle" },
        { key: 'DivineProtection', name: "Divine Protection", desc: "", type: "battle" },
        { key: 'DropsOfEther', name: "Drops of Ether", desc: "", type: "battle" },
        { key: 'EmergencyRescue', name: "Emergency Rescue", desc: "", type: "battle" },
        { key: 'EnhancedShield', name: "Enhanced Shield", desc: "", type: "battle" },
        { key: 'EtherPredator', name: "Ether Predator", desc: "", type: "battle" },
        { key: 'Expert', name: "Expert", desc: "", type: "battle" },
        { key: 'ExplosiveExpert', name: "Explosive Expert", desc: "", type: "battle" },
        { key: 'Fortitude', name: "Fortitude", desc: "", type: "battle" },
        { key: 'Grudge', name: "Grudge", desc: "", type: "battle" },
        { key: 'HeavyArmor', name: "Heavy Armor", desc: "", type: "battle" },
        { key: 'HitMaster', name: "Hit Master", desc: "", type: "battle" },
        { key: 'IncreasesMass', name: "Increases Mass", desc: "", type: "battle" },
        { key: 'KeenBluntWeapon', name: "Keen Blunt Weapon", desc: "", type: "battle" },
        { key: 'LightningFury', name: "Lightning Fury", desc: "", type: "battle" },
        { key: 'MagickStream', name: "Magick Stream", desc: "", type: "battle" },
        { key: 'MasterBrawler', name: "Master Brawler", desc: "", type: "battle" },
        { key: 'MasterOfEscape', name: "Master of Escape", desc: "", type: "battle" },
        { key: 'MastersTenacity', name: "Master's Tenacity", desc: "", type: "battle" },
        { key: 'MaxMPIncrease', name: "Max MP Increase", desc: "", type: "battle" },
        { key: 'MPEfficiencyIncrease', name: "MP Efficiency Increase", desc: "", type: "battle" },
        { key: 'Necromancy', name: "Necromancy", desc: "", type: "battle" },
        { key: 'PreciseDagger', name: "Precise Dagger", desc: "", type: "battle" },
        { key: 'PreemptiveStrike', name: "Preemptive Strike", desc: "", type: "battle" },
        { key: 'Propulsion', name: "Propulsion", desc: "", type: "battle" },
        { key: 'RaidCaptain', name: "Raid Captain", desc: "", type: "battle" },
        { key: 'ShieldPiercing', name: "Shield Piercing", desc: "", type: "battle" },
        { key: 'SightFocus', name: "Sight Focus", desc: "", type: "battle" },
        { key: 'SpiritAbsorption', name: "Spirit Absorption", desc: "", type: "battle" },
        { key: 'StabilizedStatus', name: "Stabilized Status", desc: "", type: "battle" },
        { key: 'StrongWill', name: "Strong Will", desc: "", type: "battle" },
        { key: 'SuperCharge', name: "Super Charge", desc: "", type: "battle" },
        { key: 'VitalPointHit', name: "Vital Point Hit", desc: "", type: "battle" },
        { key: 'AtkS', name: "Atk. Speed Reduction", desc: "", type: "reduction" },
        { key: 'AtkP', name: "Atk. Power Reduction", desc: "", type: "reduction" },
        { key: 'Def', name: "Defense Reduction", desc: "", type: "reduction" },
        { key: 'Spd', name: "Moce Speed Reduction", desc: "", type: "reduction" },
        { key: 'BarrageEnhancement', class: "artillerist", type: "class", name: "Barrage Enhancement", desc: "" },
        { key: 'FirepowerEnhancement', class: "artillerist", type: "class", name: "Firepower Enhancement", desc: "" },
        { key: 'DesperateSalvation', class: "bard", type: "class", name: "Desperate Salvation", desc: "" },
        { key: 'TrueCourage', class: "bard", type: "class", name: "TrueCourage", desc: "" },
        { key: 'BerserkersTechnique', class: "berserker", type: "class", name: "Berserkers Technique", desc: "" },
        { key: 'Mayhem', class: "berserker", type: "class", name: "Mayhem", desc: "" },
        { key: 'EnhancedWeapon', class: "deadeye", type: "class", name: "Enhanced Weapon", desc: "" },
        { key: 'Pistoleer', class: "deadeye", type: "class", name: "Pistoleer", desc: "" },
        { key: 'RemainingEnergy', class: "deathblade", type: "class", name: "Remaining Energy", desc: "" },
        { key: 'Surge', class: "deathblade", type: "class", name: "Surge", desc: "" },
        { key: 'GravityTraining', class: "destroyer", type: "class", name: "Gravity Training", desc: "" },
        { key: 'RageHammer', class: "destroyer", type: "class", name: "Rage Hammer", desc: "" },
        { key: 'Control', class: "glaivier", type: "class", name: "Control", desc: "" },
        { key: 'Pinnacle', class: "glaivier", type: "class", name: "Pinnacle", desc: "" },
        { key: 'CombatReadiness', class: "gunlancer", type: "class", name: "Combat Readiness", desc: "" },
        { key: 'LoneKnight', class: "gunlancer", type: "class", name: "Lone Knight", desc: "" },
        { key: 'Peacemaker', class: "gunslinger", type: "class", name: "Peacemaker", desc: "" },
        { key: 'TimeToHunt', class: "gunslinger", type: "class", name: "Time to Hunt", desc: "" },
        { key: 'BlessedAura', class: "paladin", type: "class", name: "Blessed Aura", desc: "" },
        { key: 'Judgment', class: "paladin", type: "class", name: "Judgment", desc: "" },
        { key: 'ShockTraining', class: "scrapper", type: "class", name: "Shock Training", desc: "" },
        { key: 'UltimateSkillTaijutsu', class: "scrapper", type: "class", name: "Ultimate Skill: Taijutsu", desc: "" },
        { key: 'DemonicImpulse', class: "shadowhunter", type: "class", name: "Demonic Impulse", desc: "" },
        { key: 'PerfectSuppression', class: "shadowhunter", type: "class", name: "Perfect Suppression", desc: "" },
        { key: 'DeathStrike', class: "sharpshooter", type: "class", name: "Death Strike", desc: "" },
        { key: 'LoyalCompanion', class: "sharpshooter", type: "class", name: "Loyal Companion", desc: "" },
        { key: 'Igniter', class: "sorcerss", type: "class", name: "Igniter", desc: "" },
        { key: 'Reflux', class: "sorcerss", type: "class", name: "Reflux", desc: "" },
        { key: 'EnergyOverflow', class: "soulfist", type: "class", name: "Energy Overflow", desc: "" },
        { key: 'RobustSpirit', class: "soulfist", type: "class", name: "Robust Spirit", desc: "" },
        { key: 'Deathblow', class: "striker", type: "class", name: "Deathblow", desc: "" },
        { key: 'EsotericFlurry', class: "striker", type: "class", name: "Esoteric Flurry", desc: "" },
        { key: 'EsotericSkillEnhancement', class: "wardancer", type: "class", name: "Esoteric Skill Enhancement", desc: "" },
        { key: 'FirstIntention', class: "wardancer", type: "class", name: "First Intention", desc: "" },
    ];

    private static engravings: Engravings = {};
    private static classes: string[] = [];

    public static initialise(): void {
        // Creating engraving Map
        this.engravingsList.forEach(e => this.engravings[e.key] = e);

        // Populating class array
        this.classes = this.getEngravings()
            .filter(e => e.class)
            .map(e => e.class);
    }

    public static getEngravings(): Engraving[] {
        return Object.values(this.engravings);
    }

    public static getEngraving(key: string): Engraving {
        return this.engravings[key];
    }

    public static getClasses(): string[] {
        return this.classes
    }

    public static getRegions(): object {
        return this.regions;
    }

    public static getRegion(regionCode: string): string {
        return this.regions[regionCode];
    }

    public static getSelectedRegion(): string {
        return this.getRegion(this.global.region);
    }

    public static httpGet(url: string): Promise<any> {
        return fetch(url).then(r => r.json()).then(d => d).catch(e => console.log(e));
    }
}