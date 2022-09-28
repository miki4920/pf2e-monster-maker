export const Levels: String[] = ['-1', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14',
    '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']

export enum Statistics {
    name = 'Name',
    level = 'Level',
    // Ability Scores
    str = 'Strength',
    dex = 'Dexterity',
    con = 'Constitution',
    int = 'Intelligence',
    wis = 'Wisdom',
    cha = 'Charisma',

    hp = 'Hit Points',

    per = 'Perception',

    ac = 'Armor Class',

    // Saves
    fort = 'Fortitude',
    ref = 'Reflex',
    wil = 'Will',

    // Strikes
    strikeBonus = 'Strike Attack Bonus',
    strikeDamage = 'Strike Damage',
    spellcasting = 'Spellcasting',

    // Skills
    acrobatics = 'Acrobatics',
    arcana = 'Arcana',
    athletics = 'Athletics',
    crafting = 'Crafting',
    deception = 'Deception',
    diplomacy = 'Diplomacy',
    intimidation = 'Intimidation',
    medicine = 'Medicine',
    nature = 'Nature',
    occultism = 'Occultism',
    performance = 'Performance',
    religion = 'Religion',
    society = 'Society',
    stealth = 'Stealth',
    survival = 'Survival',
    thievery = 'Thievery',
}

export const Skills: Statistics[] = [Statistics.acrobatics, Statistics.arcana, Statistics.athletics, Statistics.crafting,
    Statistics.deception, Statistics.diplomacy, Statistics.intimidation, Statistics.medicine, Statistics.nature,
    Statistics.occultism, Statistics.performance, Statistics.religion, Statistics.society, Statistics.stealth,
    Statistics.survival, Statistics.thievery]

export const actorFields = {
    // Ability Scores
    [Statistics.str]: 'system.abilities.str.mod',
    [Statistics.dex]: 'system.abilities.dex.mod',
    [Statistics.con]: 'system.abilities.con.mod',
    [Statistics.int]: 'system.abilities.int.mod',
    [Statistics.wis]: 'system.abilities.wis.mod',
    [Statistics.cha]: 'system.abilities.cha.mod',

    [Statistics.hp]: 'system.attributes.hp.max',

    [Statistics.per]: 'system.attributes.perception.value',

    [Statistics.ac]: 'system.attributes.ac.value',

    // Saves
    [Statistics.fort]: 'system.saves.fortitude.value',
    [Statistics.ref]: 'system.saves.reflex.value',
    [Statistics.wil]: 'system.saves.will.value',
}


export enum Options {
    extreme = 'Extreme',
    high = 'High',
    moderate = 'Moderate',
    low = 'Low',
    terrible = 'Terrible',
    none = 'None',
}

// TODO: Add a default roadmap that sets all options to default values.
export const RoadMaps = {
    "Brute": {
        [Statistics.per]: Options.low, [Statistics.str]: Options.extreme, [Statistics.con]: Options.high,
        [Statistics.dex]: Options.low, [Statistics.int]: Options.low, [Statistics.wis]: Options.low,
        [Statistics.cha]: Options.low, [Statistics.ac]: Options.low, [Statistics.fort]: Options.high,
        [Statistics.ref]: Options.low, [Statistics.wil]: Options.low, [Statistics.hp]: Options.high,
        [Statistics.strikeBonus]: Options.moderate, [Statistics.strikeDamage]: Options.extreme
    },
    "Magical Striker": {
        [Statistics.strikeBonus]: Options.high, [Statistics.strikeDamage]: Options.high,
        [Statistics.spellcasting]: Options.high
    },
    "Skirmisher": {[Statistics.dex]: Options.high, [Statistics.fort]: Options.low, [Statistics.ref]: Options.high},
    "Sniper": {
        [Statistics.per]: Options.high, [Statistics.dex]: Options.high, [Statistics.fort]: Options.low,
        [Statistics.ref]: Options.high, [Statistics.hp]: Options.low, [Statistics.strikeBonus]: Options.high,
        [Statistics.strikeDamage]: Options.high
    },
    "Soldier": {
        [Statistics.str]: Options.high, [Statistics.ac]: Options.high, [Statistics.fort]: Options.high,
        [Statistics.strikeBonus]: Options.high, [Statistics.strikeDamage]: Options.high
    },
    "Spellcaster": {
        [Statistics.int]: Options.high,
        [Statistics.wis]: Options.high,
        [Statistics.cha]: Options.high,
        [Statistics.fort]: Options.low,
        [Statistics.wil]: Options.high,
        [Statistics.hp]: Options.low,
        [Statistics.strikeBonus]: Options.low,
        [Statistics.strikeDamage]: Options.low,
        [Statistics.spellcasting]: Options.high
    }
}

export class CreatureStatistic {
    name: string;
    availableOptions?: Options[];
}

export class CreatureStatisticCategory {
    name: string;
    availableOptions: Options[];
    defaultValue: Options;
    statisticEntries: CreatureStatistic[];
}

export const DefaultCreatureStatistics: CreatureStatisticCategory[] = [
    {
        name: 'Ability Scores',
        availableOptions: [Options.terrible, Options.low, Options.moderate, Options.high, Options.extreme],
        defaultValue: Options.moderate,
        statisticEntries: [
            {
                name: Statistics.str,
            },
            {
                name: Statistics.dex,
            },
            {
                name: Statistics.con,
            },
            {
                name: Statistics.int,
            },
            {
                name: Statistics.wis,
            },
            {
                name: Statistics.cha,
            }
        ]
    },
    {
        name: "Defence + Perception",
        availableOptions: [Options.terrible, Options.low, Options.moderate, Options.high, Options.extreme],
        defaultValue: Options.moderate,
        statisticEntries: [
            {
                name: Statistics.hp,
                availableOptions: [Options.low, Options.moderate, Options.high]
            },
            {
                name: Statistics.per,
            },
            {
                name: Statistics.ac,
                availableOptions: [Options.low, Options.moderate, Options.high, Options.extreme],
            },
            {
                name: Statistics.fort,
            },
            {
                name: Statistics.ref,
            },
            {
                name: Statistics.wil,
            }
        ]
    },
    {
        name: 'Strikes',
        availableOptions: [Options.low, Options.moderate, Options.high, Options.extreme],
        defaultValue: Options.moderate,
        statisticEntries: [
            {
                name: Statistics.strikeBonus,
            },
            {
                name: Statistics.strikeDamage,
            }]
    },
    {
        name: Statistics.spellcasting,
        defaultValue: Options.none,
        availableOptions: [Options.none, Options.moderate, Options.high, Options.extreme],
        statisticEntries: [
            {
                name: Statistics.spellcasting,
            },
        ]
    },
    {
        name: 'Skills',
        defaultValue: Options.none,
        availableOptions: [Options.none, Options.low, Options.moderate, Options.high, Options.extreme],
        statisticEntries: [
            {
                name: Statistics.acrobatics,
            },
            {
                name: Statistics.arcana,
            },
            {
                name: Statistics.athletics,
            },
            {
                name: Statistics.crafting,
            },
            {
                name: Statistics.deception,
            },
            {
                name: Statistics.diplomacy,
            },
            {
                name: Statistics.intimidation,
            },
            {
                name: Statistics.medicine,
            },
            {
                name: Statistics.nature,
            },
            {
                name: Statistics.occultism,
            },
            {
                name: Statistics.performance,
            },
            {
                name: Statistics.religion,
            },
            {
                name: Statistics.society,
            },
            {
                name: Statistics.stealth,
            },
            {
                name: Statistics.survival,
            },
            {
                name: Statistics.thievery,
            }]
    },
]