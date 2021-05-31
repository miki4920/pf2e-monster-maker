<<<<<<< Updated upstream
export let abilities = {
    "abilities": {
        "Strength": "data.abilities.str.mod",
        "Dexterity": "data.abilities.dex.mod",
        "Constitution": "data.abilities.con.mod",
        "Intelligence": "data.abilities.int.mod",
        "Wisdom": "data.abilities.wis.mod",
        "Charisma": "data.abilities.cha.mod"
    },
    "scores": {
    "-1": {
        "extreme": "4",
            "high": "3",
            "moderate": "2",
            "low": "0"
    },
    "0": {
        "extreme": "4",
            "high": "3",
            "moderate": "2",
            "low": "0"
    },
    "1": {
        "extreme": "5",
            "high": "4",
            "moderate": "3",
            "low": "1"
    },
    "2": {
        "extreme": "5",
            "high": "4",
            "moderate": "3",
            "low": "1"
    },
    "3": {
        "extreme": "5",
            "high": "4",
            "moderate": "3",
            "low": "1"
    },
    "4": {
        "extreme": "6",
            "high": "5",
            "moderate": "3",
            "low": "2"
    },
    "5": {
        "extreme": "6",
            "high": "5",
            "moderate": "4",
            "low": "2"
    },
    "6": {
        "extreme": "7",
            "high": "5",
            "moderate": "4",
            "low": "2"
    },
    "7": {
        "extreme": "7",
            "high": "6",
            "moderate": "4",
            "low": "2"
    },
    "8": {
        "extreme": "7",
            "high": "6",
            "moderate": "4",
            "low": "3"
    },
    "9": {
        "extreme": "7",
            "high": "6",
            "moderate": "4",
            "low": "3"
    },
    "10": {
        "extreme": "8",
            "high": "7",
            "moderate": "5",
            "low": "3"
    },
    "11": {
        "extreme": "8",
            "high": "7",
            "moderate": "5",
            "low": "3"
    },
    "12": {
        "extreme": "8",
            "high": "7",
            "moderate": "5",
            "low": "4"
    },
    "13": {
        "extreme": "9",
            "high": "8",
            "moderate": "5",
            "low": "4"
    },
    "14": {
        "extreme": "9",
            "high": "8",
            "moderate": "5",
            "low": "4"
    },
    "15": {
        "extreme": "9",
            "high": "8",
            "moderate": "6",
            "low": "4"
    },
    "16": {
        "extreme": "10",
            "high": "9",
            "moderate": "6",
            "low": "5"
    },
    "17": {
        "extreme": "10",
            "high": "9",
            "moderate": "6",
            "low": "4"
    },
    "18": {
        "extreme": "10",
            "high": "9",
            "moderate": "6",
            "low": "5"
    },
    "19": {
        "extreme": "11",
            "high": "10",
            "moderate": "6",
            "low": "5"
    },
    "20": {
        "extreme": "11",
            "high": "10",
            "moderate": "7",
            "low": "6"
    },
    "21": {
        "extreme": "11",
            "high": "10",
            "moderate": "7",
            "low": "6"
    },
    "22": {
        "extreme": "11",
            "high": "10",
            "moderate": "8",
            "low": "6"
    },
    "23": {
        "extreme": "11",
            "high": "10",
            "moderate": "8",
            "low": "6"
    },
    "24": {
        "extreme": "13",
            "high": "12",
            "moderate": "9",
            "low": "7"
    }
}
}
=======
export let data = {
    "keys": [
        {"name": "Strength", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Dexterity", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Constitution", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Intelligence", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Wisdom", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Charisma", "values": ["extreme", "high", "moderate", "low"]},

        {"name": "Hit Points", "values": ["high", "moderate", "low"]},
        {"name": "Armor Class", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Perception", "values": ["extreme", "high", "moderate", "low", "terrible"]},

        {"name": "Fortitude", "values": ["extreme", "high", "moderate", "low", "terrible"]},
        {"name": "Reflex", "values": ["extreme", "high", "moderate", "low", "terrible"]},
        {"name": "Willpower", "values": ["extreme", "high", "moderate", "low", "terrible"]},

        {"name": "Strike Attack Bonus", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Strike Damage", "values": ["extreme", "high", "moderate", "low"]},

        {"name": "Acrobatics", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Arcana", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Athletics", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Acrobatics", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Crafting", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Deception", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Diplomacy", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Intimidation", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Medicine", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Nature", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Occultism", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Performance", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Religion", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Society", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Stealth", "values": ["extreme", "high", "moderate", "low"]},
        {"name": "Survival", "values": ["extreme", "high", "moderate", "low"]},
    ],
    "values": {
        "Strength": ["data.abilities.str.mod", "abilities"],
        "Dexterity": ["data.abilities.dex.mod", "abilities"],
        "Constitution": ["data.abilities.con.mod", "abilities"],
        "Intelligence": ["data.abilities.int.mod", "abilities"],
        "Wisdom": ["data.abilities.wis.mod", "abilities"],
        "Charisma": ["data.abilities.cha.mod", "abilities"],
        "Perception": ["data.attributes.perception.base", "perception/saves"]
    },
    "abilities": {
        "-1": {
            "extreme": "4",
            "high": "3",
            "moderate": "2",
            "low": "0"
        },
        "0": {
            "extreme": "4",
            "high": "3",
            "moderate": "2",
            "low": "0"
        },
        "1": {
            "extreme": "5",
            "high": "4",
            "moderate": "3",
            "low": "1"
        },
        "2": {
            "extreme": "5",
            "high": "4",
            "moderate": "3",
            "low": "1"
        },
        "3": {
            "extreme": "5",
            "high": "4",
            "moderate": "3",
            "low": "1"
        },
        "4": {
            "extreme": "6",
            "high": "5",
            "moderate": "3",
            "low": "2"
        },
        "5": {
            "extreme": "6",
            "high": "5",
            "moderate": "4",
            "low": "2"
        },
        "6": {
            "extreme": "7",
            "high": "5",
            "moderate": "4",
            "low": "2"
        },
        "7": {
            "extreme": "7",
            "high": "6",
            "moderate": "4",
            "low": "2"
        },
        "8": {
            "extreme": "7",
            "high": "6",
            "moderate": "4",
            "low": "3"
        },
        "9": {
            "extreme": "7",
            "high": "6",
            "moderate": "4",
            "low": "3"
        },
        "10": {
            "extreme": "8",
            "high": "7",
            "moderate": "5",
            "low": "3"
        },
        "11": {
            "extreme": "8",
            "high": "7",
            "moderate": "5",
            "low": "3"
        },
        "12": {
            "extreme": "8",
            "high": "7",
            "moderate": "5",
            "low": "4"
        },
        "13": {
            "extreme": "9",
            "high": "8",
            "moderate": "5",
            "low": "4"
        },
        "14": {
            "extreme": "9",
            "high": "8",
            "moderate": "5",
            "low": "4"
        },
        "15": {
            "extreme": "9",
            "high": "8",
            "moderate": "6",
            "low": "4"
        },
        "16": {
            "extreme": "10",
            "high": "9",
            "moderate": "6",
            "low": "5"
        },
        "17": {
            "extreme": "10",
            "high": "9",
            "moderate": "6",
            "low": "4"
        },
        "18": {
            "extreme": "10",
            "high": "9",
            "moderate": "6",
            "low": "5"
        },
        "19": {
            "extreme": "11",
            "high": "10",
            "moderate": "6",
            "low": "5"
        },
        "20": {
            "extreme": "11",
            "high": "10",
            "moderate": "7",
            "low": "6"
        },
        "21": {
            "extreme": "11",
            "high": "10",
            "moderate": "7",
            "low": "6"
        },
        "22": {
            "extreme": "11",
            "high": "10",
            "moderate": "8",
            "low": "6"
        },
        "23": {
            "extreme": "11",
            "high": "10",
            "moderate": "8",
            "low": "6"
        },
        "24": {
            "extreme": "13",
            "high": "12",
            "moderate": "9",
            "low": "7"
        }
    },
    "perception/saves": {
        "-1": {
            "extreme": "+9",
            "high": "+8",
            "moderate": "+5",
            "low": "+2",
            "terrible": "+0"
        },
        "0": {
            "extreme": "+10",
            "high": "+9",
            "moderate": "+6",
            "low": "+3",
            "terrible": "+1"
        },
        "1": {
            "extreme": "+11",
            "high": "+10",
            "moderate": "+7",
            "low": "+4",
            "terrible": "+2"
        },
        "2": {
            "extreme": "+12",
            "high": "+11",
            "moderate": "+8",
            "low": "+5",
            "terrible": "+3"
        },
        "3": {
            "extreme": "+14",
            "high": "+12",
            "moderate": "+9",
            "low": "+6",
            "terrible": "+4"
        },
        "4": {
            "extreme": "+15",
            "high": "+14",
            "moderate": "+11",
            "low": "+8",
            "terrible": "+6"
        },
        "5": {
            "extreme": "+17",
            "high": "+15",
            "moderate": "+12",
            "low": "+9",
            "terrible": "+7"
        },
        "6": {
            "extreme": "+18",
            "high": "+17",
            "moderate": "+14",
            "low": "+11",
            "terrible": "+8"
        },
        "7": {
            "extreme": "+20",
            "high": "+18",
            "moderate": "+15",
            "low": "+12",
            "terrible": "+10"
        },
        "8": {
            "extreme": "+21",
            "high": "+19",
            "moderate": "+16",
            "low": "+13",
            "terrible": "+11"
        },
        "9": {
            "extreme": "+23",
            "high": "+21",
            "moderate": "+18",
            "low": "+15",
            "terrible": "+12"
        },
        "10": {
            "extreme": "+24",
            "high": "+22",
            "moderate": "+19",
            "low": "+16",
            "terrible": "+14"
        },
        "11": {
            "extreme": "+26",
            "high": "+24",
            "moderate": "+21",
            "low": "+18",
            "terrible": "+15"
        },
        "12": {
            "extreme": "+27",
            "high": "+25",
            "moderate": "+22",
            "low": "+19",
            "terrible": "+16"
        },
        "13": {
            "extreme": "+29",
            "high": "+26",
            "moderate": "+23",
            "low": "+20",
            "terrible": "+18"
        },
        "14": {
            "extreme": "+30",
            "high": "+28",
            "moderate": "+25",
            "low": "+22",
            "terrible": "+19"
        },
        "15": {
            "extreme": "+32",
            "high": "+29",
            "moderate": "+26",
            "low": "+23",
            "terrible": "+20"
        },
        "16": {
            "extreme": "+33",
            "high": "+30",
            "moderate": "+28",
            "low": "+25",
            "terrible": "+22"
        },
        "17": {
            "extreme": "+35",
            "high": "+32",
            "moderate": "+29",
            "low": "+26",
            "terrible": "+23"
        },
        "18": {
            "extreme": "+36",
            "high": "+33",
            "moderate": "+30",
            "low": "+27",
            "terrible": "+24"
        },
        "19": {
            "extreme": "+38",
            "high": "+35",
            "moderate": "+32",
            "low": "+29",
            "terrible": "+26"
        },
        "20": {
            "extreme": "+39",
            "high": "+36",
            "moderate": "+33",
            "low": "+30",
            "terrible": "+27"
        },
        "21": {
            "extreme": "+41",
            "high": "+38",
            "moderate": "+35",
            "low": "+32",
            "terrible": "+28"
        },
        "22": {
            "extreme": "+43",
            "high": "+39",
            "moderate": "+36",
            "low": "+33",
            "terrible": "+30"
        },
        "23": {
            "extreme": "+44",
            "high": "+40",
            "moderate": "+37",
            "low": "+34",
            "terrible": "+31"
        },
        "24": {
            "extreme": "+46",
            "high": "+42",
            "moderate": "+38",
            "low": "+36",
            "terrible": "+32"
        }
    }
}
>>>>>>> Stashed changes
