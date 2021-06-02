export let data = {
    "keys":
            {
            "Ability Scores": [{"name": "Strength", "values": ["extreme", "high", "moderate", "low"], "selected": "moderate"},
                {"name": "Dexterity", "values": ["extreme", "high", "moderate", "low"], "selected": "moderate"},
                {"name": "Constitution", "values": ["extreme", "high", "moderate", "low"], "selected": "moderate"},
                {"name": "Intelligence", "values": ["extreme", "high", "moderate", "low"], "selected": "moderate"},
                {"name": "Wisdom", "values": ["extreme", "high", "moderate", "low"], "selected": "moderate"},
                {"name": "Charisma", "values": ["extreme", "high", "moderate", "low"], "selected": "moderate"}],
            "Main Statistics": [{"name": "Hit Points", "values": ["high", "moderate", "low"], "selected": "moderate"},
                {"name": "Armor Class", "values": ["extreme", "high", "moderate", "low"], "selected": "moderate"},
                {"name": "Perception", "values": ["extreme", "high", "moderate", "low", "terrible"], "selected": "moderate"}],
            "Saving Throws": [{"name": "Fortitude", "values": ["extreme", "high", "moderate", "low", "terrible"], "selected": "moderate"},
                {"name": "Reflex", "values": ["extreme", "high", "moderate", "low", "terrible"], "selected": "moderate"},
                {"name": "Willpower", "values": ["extreme", "high", "moderate", "low", "terrible"], "selected": "moderate"}],
            "Attacks": [{"name": "Strike Attack Bonus", "values": ["extreme", "high", "moderate", "low"], "selected": "moderate"},
                {"name": "Strike Damage", "values": ["extreme", "high", "moderate", "low"], "selected": "moderate"}],
            "Skills": [
                {"name": "Acrobatics", "values": ["extreme", "high", "moderate", "low", "none"], "selected": "none"},
                {"name": "Arcana", "values": ["extreme", "high", "moderate", "low", "none"], "selected": "none"},
                {"name": "Athletics", "values": ["extreme", "high", "moderate", "low", "none"], "selected": "none"},
                {"name": "Crafting", "values": ["extreme", "high", "moderate", "low", "none"], "selected": "none"},
                {"name": "Deception", "values": ["extreme", "high", "moderate", "low", "none"], "selected": "none"},
                {"name": "Diplomacy", "values": ["extreme", "high", "moderate", "low", "none"], "selected": "none"},
                {"name": "Intimidation", "values": ["extreme", "high", "moderate", "low", "none"], "selected": "none"},
                {"name": "Medicine", "values": ["extreme", "high", "moderate", "low", "none"], "selected": "none"},
                {"name": "Nature", "values": ["extreme", "high", "moderate", "low", "none"], "selected": "none"},
                {"name": "Occultism", "values": ["extreme", "high", "moderate", "low", "none"], "selected": "none"},
                {"name": "Performance", "values": ["extreme", "high", "moderate", "low", "none"], "selected": "none"},
                {"name": "Religion", "values": ["extreme", "high", "moderate", "low", "none"], "selected": "none"},
                {"name": "Society", "values": ["extreme", "high", "moderate", "low", "none"], "selected": "none"},
                {"name": "Stealth", "values": ["extreme", "high", "moderate", "low", "none"], "selected": "none"},
                {"name": "Survival", "values": ["extreme", "high", "moderate", "low", "none"], "selected": "none"},
                {"name": "Thievery", "values": ["extreme", "high", "moderate", "low", "none"], "selected": "none"}
            ]
        },
    "values": {
        "Strength": ["data.abilities.str.mod", "abilities"],
        "Dexterity": ["data.abilities.dex.mod", "abilities"],
        "Constitution": ["data.abilities.con.mod", "abilities"],
        "Intelligence": ["data.abilities.int.mod", "abilities"],
        "Wisdom": ["data.abilities.wis.mod", "abilities"],
        "Charisma": ["data.abilities.cha.mod", "abilities"],
        "Hit Points": ["", "hit_points"],
        "Armor Class": ["data.attributes.ac.base", "armor_class"],
        "Perception": ["data.attributes.perception.base", "perception/saves"],
        "Strike Attack Bonus": ["", "strike_attack_bonus"],
        "Strike Damage": ["", "strike_damage"],
        "Fortitude": ["data.saves.fortitude.base", "perception/saves"],
        "Reflex": ["data.saves.reflex.base", "perception/saves"],
        "Willpower": ["data.saves.will.base", "perception/saves"]
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
    },
    "hit_points": {
        "-1": {
            "high": "9",
            "moderate": "7",
            "low": "5"
        },
        "0": {
            "high": "18",
            "moderate": "15",
            "low": "12"
        },
        "1": {
            "high": "25",
            "moderate": "20",
            "low": "15"
        },
        "2": {
            "high": "38",
            "moderate": "30",
            "low": "23"
        },
        "3": {
            "high": "56",
            "moderate": "45",
            "low": "34"
        },
        "4": {
            "high": "75",
            "moderate": "60",
            "low": "45"
        },
        "5": {
            "high": "94",
            "moderate": "75",
            "low": "56"
        },
        "6": {
            "high": "119",
            "moderate": "95",
            "low": "71"
        },
        "7": {
            "high": "144",
            "moderate": "115",
            "low": "86"
        },
        "8": {
            "high": "169",
            "moderate": "135",
            "low": "101"
        },
        "9": {
            "high": "194",
            "moderate": "155",
            "low": "116"
        },
        "10": {
            "high": "219",
            "moderate": "175",
            "low": "131"
        },
        "11": {
            "high": "244",
            "moderate": "195",
            "low": "146"
        },
        "12": {
            "high": "269",
            "moderate": "215",
            "low": "161"
        },
        "13": {
            "high": "294",
            "moderate": "235",
            "low": "176"
        },
        "14": {
            "high": "319",
            "moderate": "255",
            "low": "191"
        },
        "15": {
            "high": "344",
            "moderate": "275",
            "low": "206"
        },
        "16": {
            "high": "369",
            "moderate": "295",
            "low": "221"
        },
        "17": {
            "high": "394",
            "moderate": "315",
            "low": "236"
        },
        "18": {
            "high": "419",
            "moderate": "335",
            "low": "251"
        },
        "19": {
            "high": "444",
            "moderate": "355",
            "low": "266"
        },
        "20": {
            "high": "469",
            "moderate": "375",
            "low": "281"
        },
        "21": {
            "high": "500",
            "moderate": "400",
            "low": "300"
        },
        "22": {
            "high": "538",
            "moderate": "430",
            "low": "323"
        },
        "23": {
            "high": "575",
            "moderate": "460",
            "low": "345"
        },
        "24": {
            "high": "625",
            "moderate": "500",
            "low": "375"
        }
    },
    "armor_class": {
        "-1": {
            "extreme": "18",
            "high": "15",
            "moderate": "14",
            "low": "12"
        },
        "0": {
            "extreme": "19",
            "high": "16",
            "moderate": "15",
            "low": "13"
        },
        "1": {
            "extreme": "19",
            "high": "16",
            "moderate": "15",
            "low": "13"
        },
        "2": {
            "extreme": "21",
            "high": "18",
            "moderate": "17",
            "low": "15"
        },
        "3": {
            "extreme": "22",
            "high": "19",
            "moderate": "18",
            "low": "16"
        },
        "4": {
            "extreme": "24",
            "high": "21",
            "moderate": "20",
            "low": "18"
        },
        "5": {
            "extreme": "25",
            "high": "22",
            "moderate": "21",
            "low": "19"
        },
        "6": {
            "extreme": "27",
            "high": "24",
            "moderate": "23",
            "low": "21"
        },
        "7": {
            "extreme": "28",
            "high": "25",
            "moderate": "24",
            "low": "22"
        },
        "8": {
            "extreme": "30",
            "high": "27",
            "moderate": "26",
            "low": "24"
        },
        "9": {
            "extreme": "31",
            "high": "28",
            "moderate": "27",
            "low": "25"
        },
        "10": {
            "extreme": "33",
            "high": "30",
            "moderate": "29",
            "low": "27"
        },
        "11": {
            "extreme": "34",
            "high": "31",
            "moderate": "30",
            "low": "28"
        },
        "12": {
            "extreme": "36",
            "high": "33",
            "moderate": "32",
            "low": "30"
        },
        "13": {
            "extreme": "37",
            "high": "34",
            "moderate": "33",
            "low": "31"
        },
        "14": {
            "extreme": "39",
            "high": "36",
            "moderate": "35",
            "low": "33"
        },
        "15": {
            "extreme": "40",
            "high": "37",
            "moderate": "36",
            "low": "34"
        },
        "16": {
            "extreme": "42",
            "high": "39",
            "moderate": "38",
            "low": "36"
        },
        "17": {
            "extreme": "43",
            "high": "40",
            "moderate": "39",
            "low": "37"
        },
        "18": {
            "extreme": "45",
            "high": "42",
            "moderate": "41",
            "low": "39"
        },
        "19": {
            "extreme": "46",
            "high": "43",
            "moderate": "42",
            "low": "40"
        },
        "20": {
            "extreme": "48",
            "high": "45",
            "moderate": "44",
            "low": "42"
        },
        "21": {
            "extreme": "49",
            "high": "46",
            "moderate": "45",
            "low": "43"
        },
        "22": {
            "extreme": "51",
            "high": "48",
            "moderate": "47",
            "low": "45"
        },
        "23": {
            "extreme": "52",
            "high": "49",
            "moderate": "48",
            "low": "46"
        },
        "24": {
            "extreme": "54",
            "high": "51",
            "moderate": "50",
            "low": "48"
        }
    },
    "skills": {
        "-1": {
            "extreme": "+8",
            "high": "+5",
            "moderate": "+4",
            "low": "+2"
        },
        "0": {
            "extreme": "+9",
            "high": "+6",
            "moderate": "+5",
            "low": "+3"
        },
        "1": {
            "extreme": "+10",
            "high": "+7",
            "moderate": "+6",
            "low": "+4"
        },
        "2": {
            "extreme": "+11",
            "high": "+8",
            "moderate": "+7",
            "low": "+5"
        },
        "3": {
            "extreme": "+13",
            "high": "+10",
            "moderate": "+9",
            "low": "+6"
        },
        "4": {
            "extreme": "+15",
            "high": "+12",
            "moderate": "+10",
            "low": "+8"
        },
        "5": {
            "extreme": "+16",
            "high": "+13",
            "moderate": "+12",
            "low": "+9"
        },
        "6": {
            "extreme": "+18",
            "high": "+15",
            "moderate": "+13",
            "low": "+10"
        },
        "7": {
            "extreme": "+20",
            "high": "+17",
            "moderate": "+15",
            "low": "+12"
        },
        "8": {
            "extreme": "+21",
            "high": "+18",
            "moderate": "+16",
            "low": "+13"
        },
        "9": {
            "extreme": "+23",
            "high": "+20",
            "moderate": "+18",
            "low": "+14"
        },
        "10": {
            "extreme": "+25",
            "high": "+22",
            "moderate": "+19",
            "low": "+16"
        },
        "11": {
            "extreme": "+26",
            "high": "+23",
            "moderate": "+21",
            "low": "+18"
        },
        "12": {
            "extreme": "+28",
            "high": "+25",
            "moderate": "+22",
            "low": "+19"
        },
        "13": {
            "extreme": "+30",
            "high": "+27",
            "moderate": "+24",
            "low": "+21"
        },
        "14": {
            "extreme": "+31",
            "high": "+28",
            "moderate": "+25",
            "low": "+22"
        },
        "15": {
            "extreme": "+33",
            "high": "+30",
            "moderate": "+27",
            "low": "+23"
        },
        "16": {
            "extreme": "+35",
            "high": "+32",
            "moderate": "+28",
            "low": "+25"
        },
        "17": {
            "extreme": "+36",
            "high": "+33",
            "moderate": "+30",
            "low": "+26"
        },
        "18": {
            "extreme": "+38",
            "high": "+35",
            "moderate": "+31",
            "low": "+28"
        },
        "19": {
            "extreme": "+40",
            "high": "+37",
            "moderate": "+33",
            "low": "+29"
        },
        "20": {
            "extreme": "+41",
            "high": "+38",
            "moderate": "+34",
            "low": "+30"
        },
        "21": {
            "extreme": "+43",
            "high": "+40",
            "moderate": "+36",
            "low": "+31"
        },
        "22": {
            "extreme": "+45",
            "high": "+42",
            "moderate": "+37",
            "low": "+32"
        },
        "23": {
            "extreme": "+46",
            "high": "+43",
            "moderate": "+38",
            "low": "+34"
        },
        "24": {
            "extreme": "+48",
            "high": "+45",
            "moderate": "+40",
            "low": "+36"
        }
    },
    "strike_attack_bonus": {
        "-1": {
            "extreme": "+10",
            "high": "+8",
            "moderate": "+6",
            "low": "+4"
        },
        "0": {
            "extreme": "+10",
            "high": "+8",
            "moderate": "+6",
            "low": "+4"
        },
        "1": {
            "extreme": "+11",
            "high": "+9",
            "moderate": "+7",
            "low": "+5"
        },
        "2": {
            "extreme": "+13",
            "high": "+11",
            "moderate": "+9",
            "low": "+7"
        },
        "3": {
            "extreme": "+14",
            "high": "+12",
            "moderate": "+10",
            "low": "+8"
        },
        "4": {
            "extreme": "+16",
            "high": "+14",
            "moderate": "+12",
            "low": "+9"
        },
        "5": {
            "extreme": "+17",
            "high": "+15",
            "moderate": "+13",
            "low": "+11"
        },
        "6": {
            "extreme": "+19",
            "high": "+17",
            "moderate": "+15",
            "low": "+12"
        },
        "7": {
            "extreme": "+20",
            "high": "+18",
            "moderate": "+16",
            "low": "+13"
        },
        "8": {
            "extreme": "+22",
            "high": "+20",
            "moderate": "+18",
            "low": "+15"
        },
        "9": {
            "extreme": "+23",
            "high": "+21",
            "moderate": "+19",
            "low": "+16"
        },
        "10": {
            "extreme": "+25",
            "high": "+23",
            "moderate": "+21",
            "low": "+17"
        },
        "11": {
            "extreme": "+27",
            "high": "+24",
            "moderate": "+22",
            "low": "+19"
        },
        "12": {
            "extreme": "+28",
            "high": "+26",
            "moderate": "+24",
            "low": "+20"
        },
        "13": {
            "extreme": "+29",
            "high": "+27",
            "moderate": "+25",
            "low": "+21"
        },
        "14": {
            "extreme": "+31",
            "high": "+29",
            "moderate": "+27",
            "low": "+23"
        },
        "15": {
            "extreme": "+32",
            "high": "+30",
            "moderate": "+28",
            "low": "+24"
        },
        "16": {
            "extreme": "+34",
            "high": "+32",
            "moderate": "+30",
            "low": "+25"
        },
        "17": {
            "extreme": "+35",
            "high": "+33",
            "moderate": "+31",
            "low": "+27"
        },
        "18": {
            "extreme": "+37",
            "high": "+35",
            "moderate": "+33",
            "low": "+28"
        },
        "19": {
            "extreme": "+38",
            "high": "+36",
            "moderate": "+34",
            "low": "+29"
        },
        "20": {
            "extreme": "+40",
            "high": "+38",
            "moderate": "+36",
            "low": "+31"
        },
        "21": {
            "extreme": "+41",
            "high": "+39",
            "moderate": "+37",
            "low": "+32"
        },
        "22": {
            "extreme": "+43",
            "high": "+41",
            "moderate": "+39",
            "low": "+33"
        },
        "23": {
            "extreme": "+44",
            "high": "+42",
            "moderate": "+40",
            "low": "+35"
        },
        "24": {
            "extreme": "+46",
            "high": "+44",
            "moderate": "+42",
            "low": "+36"
        }
    },
    "strike_damage": {
        "-1": {
            "extreme": "1d6+1",
            "high": "1d4+1",
            "moderate": "1d4",
            "low": "1d4"
        },
        "0": {
            "extreme": "1d6+3",
            "high": "1d6+2",
            "moderate": "1d4+2",
            "low": "1d4+1"
        },
        "1": {
            "extreme": "1d8+4",
            "high": "1d6+3",
            "moderate": "1d6+2",
            "low": "1d4+2"
        },
        "2": {
            "extreme": "1d12+4",
            "high": "1d10+4",
            "moderate": "1d8+4",
            "low": "1d6+3"
        },
        "3": {
            "extreme": "1d12+8",
            "high": "1d10+6",
            "moderate": "1d8+6",
            "low": "1d6+5"
        },
        "4": {
            "extreme": "2d10+7",
            "high": "2d8+5",
            "moderate": "2d6+5",
            "low": "2d4+4"
        },
        "5": {
            "extreme": "2d12+7",
            "high": "2d8+7",
            "moderate": "2d6+6",
            "low": "2d4+6"
        },
        "6": {
            "extreme": "2d12+10",
            "high": "2d8+9",
            "moderate": "2d6+8",
            "low": "2d4+7"
        },
        "7": {
            "extreme": "2d12+12",
            "high": "2d10+9",
            "moderate": "2d8+8",
            "low": "2d6+6"
        },
        "8": {
            "extreme": "2d12+15",
            "high": "2d10+11",
            "moderate": "2d8+9",
            "low": "2d6+8"
        },
        "9": {
            "extreme": "2d12+17",
            "high": "2d10+13",
            "moderate": "2d8+11",
            "low": "2d6+9"
        },
        "10": {
            "extreme": "2d12+20",
            "high": "2d12+13",
            "moderate": "2d10+11",
            "low": "2d6+10"
        },
        "11": {
            "extreme": "2d12+22",
            "high": "2d12+15",
            "moderate": "2d10+12",
            "low": "2d8+10"
        },
        "12": {
            "extreme": "3d12+19",
            "high": "3d10+14",
            "moderate": "3d8+12",
            "low": "3d6+10"
        },
        "13": {
            "extreme": "3d12+21",
            "high": "3d10+16",
            "moderate": "3d8+14",
            "low": "3d6+11"
        },
        "14": {
            "extreme": "3d12+24",
            "high": "3d10+18",
            "moderate": "3d8+15",
            "low": "3d6+13"
        },
        "15": {
            "extreme": "3d12+26",
            "high": "3d12+17",
            "moderate": "3d10+14",
            "low": "3d6+14"
        },
        "16": {
            "extreme": "3d12+29",
            "high": "3d12+18",
            "moderate": "3d10+15",
            "low": "3d6+15"
        },
        "17": {
            "extreme": "3d12+31",
            "high": "3d12+19",
            "moderate": "3d10+16",
            "low": "3d6+16"
        },
        "18": {
            "extreme": "3d12+34",
            "high": "3d12+20",
            "moderate": "3d10+17",
            "low": "3d6+17"
        },
        "19": {
            "extreme": "4d12+29",
            "high": "4d10+20",
            "moderate": "4d8+17",
            "low": "4d6+14"
        },
        "20": {
            "extreme": "4d12+32",
            "high": "4d10+22",
            "moderate": "4d8+19",
            "low": "4d6+15"
        },
        "21": {
            "extreme": "4d12+34",
            "high": "4d10+24",
            "moderate": "4d8+20",
            "low": "4d6+17"
        },
        "22": {
            "extreme": "4d12+37",
            "high": "4d10+26",
            "moderate": "4d8+22",
            "low": "4d6+18"
        },
        "23": {
            "extreme": "4d12+39",
            "high": "4d12+24",
            "moderate": "4d10+20",
            "low": "4d6+19"
        },
        "24": {
            "extreme": "4d12+42",
            "high": "4d12+26",
            "moderate": "4d10+22",
            "low": "4d6+21"
        }
    }
}
