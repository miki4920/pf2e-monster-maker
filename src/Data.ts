export const Levels: String[] = ['-1', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']

export enum Statistics {
    // Ability Scores
    str = 'Strength',
    dex = 'Dexterity',
    con = 'Constitution',
    int = 'Intelligence',
    wis = 'Wisdom',
    cha = 'Charisma',

    per = 'Perception',

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

    ac = 'Armor Class',

    // Saves
    fort = 'Fortitude',
    ref = 'Reflex',
    wil = 'Will',

    hp = 'Hit Points',

    // Strikes
    strikeBonus = 'Strike Attack Bonus',
    strikeDamage = 'Strike Damage',
    spellcasting = 'Spellcasting',
}

export enum Options {
    extreme = 'extreme',
    high = 'high',
    moderate = 'moderate',
    low = 'low',
    terrible = 'terrible',
    none = 'none',
}

export class CreatureStatistic {
    name: string;
    actorField?: string;
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
        availableOptions: [Options.extreme, Options.high, Options.moderate, Options.low, Options.terrible],
        defaultValue: Options.moderate,
        statisticEntries: [
            {
                name: Statistics.str,
                actorField: 'system.abilities.str.mod',
            },
            {
                name: Statistics.dex,
                actorField: 'system.abilities.dex.mod',
            },
            {
                name: Statistics.con,
                actorField: 'system.abilities.con.mod',
            },
            {
                name: Statistics.int,
                actorField: 'system.abilities.int.mod',
            },
            {
                name: Statistics.wis,
                actorField: 'system.abilities.wis.mod',
            },
            {
                name: Statistics.cha,
                actorField: 'system.abilities.cha.mod',
            }
        ]
    },
    {
        name: "Defence + Perception",
        availableOptions: [Options.extreme, Options.high, Options.moderate, Options.low, Options.terrible],
        defaultValue: Options.moderate,
        statisticEntries: [
            {
                name: Statistics.hp,
                actorField: 'data.attributes.hp.max',
                availableOptions: [Options.high, Options.moderate, Options.low]
            },
            {
                name: Statistics.per,
                actorField: 'data.attributes.perception.value',
            },
            {
                name: Statistics.ac,
                actorField: 'data.attributes.ac.value',
                availableOptions: [Options.extreme, Options.high, Options.moderate, Options.low],
            },
            {

                name: Statistics.fort,
                actorField: 'data.saves.fortitude.value',

            },
            {
                name: Statistics.ref,
                actorField: 'data.saves.reflex.value',
            },
            {
                name: Statistics.wil,
                actorField: 'data.saves.will.value',
            }
        ]
    },
    {
        name: 'Strikes',
        availableOptions: [Options.extreme, Options.high, Options.moderate, Options.low],
        defaultValue: Options.moderate,
        statisticEntries: [
            {
                name: Statistics.strikeBonus,
                actorField: 'none',
            },
            {
                name: Statistics.strikeDamage,
                actorField: 'none',
            }]
    },
    {
        name: Statistics.spellcasting,
        defaultValue: Options.none,
        availableOptions: [Options.extreme, Options.high, Options.moderate, Options.none],
        statisticEntries: [
            {
                name: Statistics.spellcasting,
                actorField: 'none'
            },
        ]
    },
    {
        name: 'Skills',
        defaultValue: Options.none,
        availableOptions: [Options.extreme, Options.high, Options.moderate, Options.low, Options.none],
        statisticEntries: [
            {
                name: Statistics.acrobatics,
                actorField: 'none',
            },
            {
                name: Statistics.arcana,
                actorField: 'none',
            },
            {
                name: Statistics.athletics,
                actorField: 'none',
            },
            {
                name: Statistics.crafting,
                actorField: 'none',
            },
            {
                name: Statistics.deception,
                actorField: 'none',
            },
            {
                name: Statistics.diplomacy,
                actorField: 'none',
            },
            {
                name: Statistics.intimidation,
                actorField: 'none',
            },
            {
                name: Statistics.medicine,
                actorField: 'none',
            },
            {
                name: Statistics.nature,
                actorField: 'none',
            },
            {
                name: Statistics.occultism,
                actorField: 'none',
            },
            {
                name: Statistics.performance,
                actorField: 'none',
            },
            {
                name: Statistics.religion,
                actorField: 'none',
            },
            {
                name: Statistics.society,
                actorField: 'none',
            },
            {
                name: Statistics.stealth,
                actorField: 'none',
            },
            {
                name: Statistics.survival,
                actorField: 'none',

            },
            {
                name: Statistics.thievery,
                actorField: 'none',
            }]
    },
]

