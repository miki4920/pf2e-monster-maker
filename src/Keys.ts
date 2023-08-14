export const Levels: String[] = ['-1', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14',
    '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']

export enum Statistics {
    name = 'PF2EMONSTERMAKER.name',
    level = 'PF2EMONSTERMAKER.level',
    // Ability Scores
    str = 'PF2EMONSTERMAKER.str',
    dex = 'PF2EMONSTERMAKER.dex',
    con = 'PF2EMONSTERMAKER.con',
    int = 'PF2EMONSTERMAKER.int',
    wis = 'PF2EMONSTERMAKER.wis',
    cha = 'PF2EMONSTERMAKER.cha',

    hp = 'PF2EMONSTERMAKER.hp',

    per = 'PF2EMONSTERMAKER.per',

    ac = 'PF2EMONSTERMAKER.ac',

    // Saves
    fort = 'PF2EMONSTERMAKER.fort',
    ref = 'PF2EMONSTERMAKER.ref',
    wil = 'PF2EMONSTERMAKER.wil',

    // Strikes
    strikeBonus = 'PF2EMONSTERMAKER.strikeBonus',
    strikeDamage = 'PF2EMONSTERMAKER.strikeDamage',
    spellcasting = 'PF2EMONSTERMAKER.spellcasting',

    // Skills
    acrobatics = 'PF2EMONSTERMAKER.acrobatics',
    arcana = 'PF2EMONSTERMAKER.arcana',
    athletics = 'PF2EMONSTERMAKER.athletics',
    crafting = 'PF2EMONSTERMAKER.crafting',
    deception = 'PF2EMONSTERMAKER.deception',
    diplomacy = 'PF2EMONSTERMAKER.diplomacy',
    intimidation = 'PF2EMONSTERMAKER.intimidation',
    medicine = 'PF2EMONSTERMAKER.medicine',
    nature = 'PF2EMONSTERMAKER.nature',
    occultism = 'PF2EMONSTERMAKER.occultism',
    performance = 'PF2EMONSTERMAKER.performance',
    religion = 'PF2EMONSTERMAKER.religion',
    society = 'PF2EMONSTERMAKER.society',
    stealth = 'PF2EMONSTERMAKER.stealth',
    survival = 'PF2EMONSTERMAKER.survival',
    thievery = 'PF2EMONSTERMAKER.thievery',
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
    extreme = 'PF2EMONSTERMAKER.extreme',
    high = 'PF2EMONSTERMAKER.high',
    moderate = 'PF2EMONSTERMAKER.moderate',
    low = 'PF2EMONSTERMAKER.low',
    terrible = 'PF2EMONSTERMAKER.terrible',
    abysmal = "PF2EMONSTERMAKER.abysmal",
    none = 'PF2EMONSTERMAKER.none',
}

export const RoadMaps = {
    "PF2EMONSTERMAKER.brute": {
        [Statistics.per]: Options.low, [Statistics.str]: Options.extreme, [Statistics.con]: Options.high,
        [Statistics.dex]: Options.low, [Statistics.int]: Options.low, [Statistics.wis]: Options.low,
        [Statistics.cha]: Options.low, [Statistics.ac]: Options.low, [Statistics.fort]: Options.high,
        [Statistics.ref]: Options.low, [Statistics.wil]: Options.low, [Statistics.hp]: Options.high,
        [Statistics.strikeBonus]: Options.moderate, [Statistics.strikeDamage]: Options.extreme
    },
    "PF2EMONSTERMAKER.magicalStriker": {
        [Statistics.strikeBonus]: Options.high, [Statistics.strikeDamage]: Options.high,
        [Statistics.spellcasting]: Options.high
    },
    "PF2EMONSTERMAKER.skirmisher": {[Statistics.dex]: Options.high, [Statistics.fort]: Options.low, [Statistics.ref]: Options.high},
    "PF2EMONSTERMAKER.sniper": {
        [Statistics.per]: Options.high, [Statistics.dex]: Options.high, [Statistics.fort]: Options.low,
        [Statistics.ref]: Options.high, [Statistics.hp]: Options.low, [Statistics.strikeBonus]: Options.high,
        [Statistics.strikeDamage]: Options.high
    },
    "PF2EMONSTERMAKER.soldier": {
        [Statistics.str]: Options.high, [Statistics.ac]: Options.high, [Statistics.fort]: Options.high,
        [Statistics.strikeBonus]: Options.high, [Statistics.strikeDamage]: Options.high
    },
    "PF2EMONSTERMAKER.spellcaster": {
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
        name: 'PF2EMONSTERMAKER.abilityScores',
        availableOptions: [Options.abysmal, Options.terrible, Options.low, Options.moderate, Options.high, Options.extreme],
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
        name: 'PF2EMONSTERMAKER.strikes',
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
        name: 'PF2EMONSTERMAKER.skills',
        defaultValue: Options.none,
        availableOptions: [Options.none, Options.terrible, Options.low, Options.moderate, Options.high, Options.extreme],
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