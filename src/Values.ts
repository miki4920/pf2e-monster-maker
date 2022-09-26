import {Options, Statistics} from "./Keys";

const aliases = {
    abilityScores: {
        "-1": {
            [Options.extreme]: "4",
            [Options.high]: "3",
            [Options.moderate]: "2",
            [Options.low]: "0"
        },
        "0": {
            [Options.extreme]: "4",
            [Options.high]: "3",
            [Options.moderate]: "2",
            [Options.low]: "0"
        },
        "1": {
            [Options.extreme]: "5",
            [Options.high]: "4",
            [Options.moderate]: "3",
            [Options.low]: "1"
        },
        "2": {
            [Options.extreme]: "5",
            [Options.high]: "4",
            [Options.moderate]: "3",
            [Options.low]: "1"
        },
        "3": {
            [Options.extreme]: "5",
            [Options.high]: "4",
            [Options.moderate]: "3",
            [Options.low]: "1"
        },
        "4": {
            [Options.extreme]: "6",
            [Options.high]: "5",
            [Options.moderate]: "3",
            [Options.low]: "2"
        },
        "5": {
            [Options.extreme]: "6",
            [Options.high]: "5",
            [Options.moderate]: "4",
            [Options.low]: "2"
        },
        "6": {
            [Options.extreme]: "7",
            [Options.high]: "5",
            [Options.moderate]: "4",
            [Options.low]: "2"
        },
        "7": {
            [Options.extreme]: "7",
            [Options.high]: "6",
            [Options.moderate]: "4",
            [Options.low]: "2"
        },
        "8": {
            [Options.extreme]: "7",
            [Options.high]: "6",
            [Options.moderate]: "4",
            [Options.low]: "3"
        },
        "9": {
            [Options.extreme]: "7",
            [Options.high]: "6",
            [Options.moderate]: "4",
            [Options.low]: "3"
        },
        "10": {
            [Options.extreme]: "8",
            [Options.high]: "7",
            [Options.moderate]: "5",
            [Options.low]: "3"
        },
        "11": {
            [Options.extreme]: "8",
            [Options.high]: "7",
            [Options.moderate]: "5",
            [Options.low]: "3"
        },
        "12": {
            [Options.extreme]: "8",
            [Options.high]: "7",
            [Options.moderate]: "5",
            [Options.low]: "4"
        },
        "13": {
            [Options.extreme]: "9",
            [Options.high]: "8",
            [Options.moderate]: "5",
            [Options.low]: "4"
        },
        "14": {
            [Options.extreme]: "9",
            [Options.high]: "8",
            [Options.moderate]: "5",
            [Options.low]: "4"
        },
        "15": {
            [Options.extreme]: "9",
            [Options.high]: "8",
            [Options.moderate]: "6",
            [Options.low]: "4"
        },
        "16": {
            [Options.extreme]: "10",
            [Options.high]: "9",
            [Options.moderate]: "6",
            [Options.low]: "5"
        },
        "17": {
            [Options.extreme]: "10",
            [Options.high]: "9",
            [Options.moderate]: "6",
            [Options.low]: "4"
        },
        "18": {
            [Options.extreme]: "10",
            [Options.high]: "9",
            [Options.moderate]: "6",
            [Options.low]: "5"
        },
        "19": {
            [Options.extreme]: "11",
            [Options.high]: "10",
            [Options.moderate]: "6",
            [Options.low]: "5"
        },
        "20": {
            [Options.extreme]: "11",
            [Options.high]: "10",
            [Options.moderate]: "7",
            [Options.low]: "6"
        },
        "21": {
            [Options.extreme]: "11",
            [Options.high]: "10",
            [Options.moderate]: "7",
            [Options.low]: "6"
        },
        "22": {
            [Options.extreme]: "11",
            [Options.high]: "10",
            [Options.moderate]: "8",
            [Options.low]: "6"
        },
        "23": {
            [Options.extreme]: "11",
            [Options.high]: "10",
            [Options.moderate]: "8",
            [Options.low]: "6"
        },
        "24": {
            [Options.extreme]: "13",
            [Options.high]: "12",
            [Options.moderate]: "9",
            [Options.low]: "7"
        }
    },
    hitPoints: {
        "-1": {
            [Options.high]: "9",
            [Options.moderate]: "7",
            [Options.low]: "5"
        },
        "0": {
            [Options.high]: "18",
            [Options.moderate]: "15",
            [Options.low]: "12"
        },
        "1": {
            [Options.high]: "25",
            [Options.moderate]: "20",
            [Options.low]: "15"
        },
        "2": {
            [Options.high]: "38",
            [Options.moderate]: "30",
            [Options.low]: "23"
        },
        "3": {
            [Options.high]: "56",
            [Options.moderate]: "45",
            [Options.low]: "34"
        },
        "4": {
            [Options.high]: "75",
            [Options.moderate]: "60",
            [Options.low]: "45"
        },
        "5": {
            [Options.high]: "94",
            [Options.moderate]: "75",
            [Options.low]: "56"
        },
        "6": {
            [Options.high]: "119",
            [Options.moderate]: "95",
            [Options.low]: "71"
        },
        "7": {
            [Options.high]: "144",
            [Options.moderate]: "115",
            [Options.low]: "86"
        },
        "8": {
            [Options.high]: "169",
            [Options.moderate]: "135",
            [Options.low]: "101"
        },
        "9": {
            [Options.high]: "194",
            [Options.moderate]: "155",
            [Options.low]: "116"
        },
        "10": {
            [Options.high]: "219",
            [Options.moderate]: "175",
            [Options.low]: "131"
        },
        "11": {
            [Options.high]: "244",
            [Options.moderate]: "195",
            [Options.low]: "146"
        },
        "12": {
            [Options.high]: "269",
            [Options.moderate]: "215",
            [Options.low]: "161"
        },
        "13": {
            [Options.high]: "294",
            [Options.moderate]: "235",
            [Options.low]: "176"
        },
        "14": {
            [Options.high]: "319",
            [Options.moderate]: "255",
            [Options.low]: "191"
        },
        "15": {
            [Options.high]: "344",
            [Options.moderate]: "275",
            [Options.low]: "206"
        },
        "16": {
            [Options.high]: "369",
            [Options.moderate]: "295",
            [Options.low]: "221"
        },
        "17": {
            [Options.high]: "394",
            [Options.moderate]: "315",
            [Options.low]: "236"
        },
        "18": {
            [Options.high]: "419",
            [Options.moderate]: "335",
            [Options.low]: "251"
        },
        "19": {
            [Options.high]: "444",
            [Options.moderate]: "355",
            [Options.low]: "266"
        },
        "20": {
            [Options.high]: "469",
            [Options.moderate]: "375",
            [Options.low]: "281"
        },
        "21": {
            [Options.high]: "500",
            [Options.moderate]: "400",
            [Options.low]: "300"
        },
        "22": {
            [Options.high]: "538",
            [Options.moderate]: "430",
            [Options.low]: "323"
        },
        "23": {
            [Options.high]: "575",
            [Options.moderate]: "460",
            [Options.low]: "345"
        },
        "24": {
            [Options.high]: "625",
            [Options.moderate]: "500",
            [Options.low]: "375"
        }
    },
    perceptionSaves: {
        "-1": {
            [Options.extreme]: "9",
            [Options.high]: "8",
            [Options.moderate]: "5",
            [Options.low]: "2",
            [Options.terrible]: "0"
        },
        "0": {
            [Options.extreme]: "10",
            [Options.high]: "9",
            [Options.moderate]: "6",
            [Options.low]: "3",
            [Options.terrible]: "1"
        },
        "1": {
            [Options.extreme]: "11",
            [Options.high]: "10",
            [Options.moderate]: "7",
            [Options.low]: "4",
            [Options.terrible]: "2"
        },
        "2": {
            [Options.extreme]: "12",
            [Options.high]: "11",
            [Options.moderate]: "8",
            [Options.low]: "5",
            [Options.terrible]: "3"
        },
        "3": {
            [Options.extreme]: "14",
            [Options.high]: "12",
            [Options.moderate]: "9",
            [Options.low]: "6",
            [Options.terrible]: "4"
        },
        "4": {
            [Options.extreme]: "15",
            [Options.high]: "14",
            [Options.moderate]: "11",
            [Options.low]: "8",
            [Options.terrible]: "6"
        },
        "5": {
            [Options.extreme]: "17",
            [Options.high]: "15",
            [Options.moderate]: "12",
            [Options.low]: "9",
            [Options.terrible]: "7"
        },
        "6": {
            [Options.extreme]: "18",
            [Options.high]: "17",
            [Options.moderate]: "14",
            [Options.low]: "11",
            [Options.terrible]: "8"
        },
        "7": {
            [Options.extreme]: "20",
            [Options.high]: "18",
            [Options.moderate]: "15",
            [Options.low]: "12",
            [Options.terrible]: "10"
        },
        "8": {
            [Options.extreme]: "21",
            [Options.high]: "19",
            [Options.moderate]: "16",
            [Options.low]: "13",
            [Options.terrible]: "11"
        },
        "9": {
            [Options.extreme]: "23",
            [Options.high]: "21",
            [Options.moderate]: "18",
            [Options.low]: "15",
            [Options.terrible]: "12"
        },
        "10": {
            [Options.extreme]: "24",
            [Options.high]: "22",
            [Options.moderate]: "19",
            [Options.low]: "16",
            [Options.terrible]: "14"
        },
        "11": {
            [Options.extreme]: "26",
            [Options.high]: "24",
            [Options.moderate]: "21",
            [Options.low]: "18",
            [Options.terrible]: "15"
        },
        "12": {
            [Options.extreme]: "27",
            [Options.high]: "25",
            [Options.moderate]: "22",
            [Options.low]: "19",
            [Options.terrible]: "16"
        },
        "13": {
            [Options.extreme]: "29",
            [Options.high]: "26",
            [Options.moderate]: "23",
            [Options.low]: "20",
            [Options.terrible]: "18"
        },
        "14": {
            [Options.extreme]: "30",
            [Options.high]: "28",
            [Options.moderate]: "25",
            [Options.low]: "22",
            [Options.terrible]: "19"
        },
        "15": {
            [Options.extreme]: "32",
            [Options.high]: "29",
            [Options.moderate]: "26",
            [Options.low]: "23",
            [Options.terrible]: "20"
        },
        "16": {
            [Options.extreme]: "33",
            [Options.high]: "30",
            [Options.moderate]: "28",
            [Options.low]: "25",
            [Options.terrible]: "22"
        },
        "17": {
            [Options.extreme]: "35",
            [Options.high]: "32",
            [Options.moderate]: "29",
            [Options.low]: "26",
            [Options.terrible]: "23"
        },
        "18": {
            [Options.extreme]: "36",
            [Options.high]: "33",
            [Options.moderate]: "30",
            [Options.low]: "27",
            [Options.terrible]: "24"
        },
        "19": {
            [Options.extreme]: "38",
            [Options.high]: "35",
            [Options.moderate]: "32",
            [Options.low]: "29",
            [Options.terrible]: "26"
        },
        "20": {
            [Options.extreme]: "39",
            [Options.high]: "36",
            [Options.moderate]: "33",
            [Options.low]: "30",
            [Options.terrible]: "27"
        },
        "21": {
            [Options.extreme]: "41",
            [Options.high]: "38",
            [Options.moderate]: "35",
            [Options.low]: "32",
            [Options.terrible]: "28"
        },
        "22": {
            [Options.extreme]: "43",
            [Options.high]: "39",
            [Options.moderate]: "36",
            [Options.low]: "33",
            [Options.terrible]: "30"
        },
        "23": {
            [Options.extreme]: "44",
            [Options.high]: "40",
            [Options.moderate]: "37",
            [Options.low]: "34",
            [Options.terrible]: "31"
        },
        "24": {
            [Options.extreme]: "46",
            [Options.high]: "42",
            [Options.moderate]: "38",
            [Options.low]: "36",
            [Options.terrible]: "32"
        }
    },
    armorClass: {
        "-1": {
            [Options.extreme]: "18",
            [Options.high]: "15",
            [Options.moderate]: "14",
            [Options.low]: "12"
        },
        "0": {
            [Options.extreme]: "19",
            [Options.high]: "16",
            [Options.moderate]: "15",
            [Options.low]: "13"
        },
        "1": {
            [Options.extreme]: "19",
            [Options.high]: "16",
            [Options.moderate]: "15",
            [Options.low]: "13"
        },
        "2": {
            [Options.extreme]: "21",
            [Options.high]: "18",
            [Options.moderate]: "17",
            [Options.low]: "15"
        },
        "3": {
            [Options.extreme]: "22",
            [Options.high]: "19",
            [Options.moderate]: "18",
            [Options.low]: "16"
        },
        "4": {
            [Options.extreme]: "24",
            [Options.high]: "21",
            [Options.moderate]: "20",
            [Options.low]: "18"
        },
        "5": {
            [Options.extreme]: "25",
            [Options.high]: "22",
            [Options.moderate]: "21",
            [Options.low]: "19"
        },
        "6": {
            [Options.extreme]: "27",
            [Options.high]: "24",
            [Options.moderate]: "23",
            [Options.low]: "21"
        },
        "7": {
            [Options.extreme]: "28",
            [Options.high]: "25",
            [Options.moderate]: "24",
            [Options.low]: "22"
        },
        "8": {
            [Options.extreme]: "30",
            [Options.high]: "27",
            [Options.moderate]: "26",
            [Options.low]: "24"
        },
        "9": {
            [Options.extreme]: "31",
            [Options.high]: "28",
            [Options.moderate]: "27",
            [Options.low]: "25"
        },
        "10": {
            [Options.extreme]: "33",
            [Options.high]: "30",
            [Options.moderate]: "29",
            [Options.low]: "27"
        },
        "11": {
            [Options.extreme]: "34",
            [Options.high]: "31",
            [Options.moderate]: "30",
            [Options.low]: "28"
        },
        "12": {
            [Options.extreme]: "36",
            [Options.high]: "33",
            [Options.moderate]: "32",
            [Options.low]: "30"
        },
        "13": {
            [Options.extreme]: "37",
            [Options.high]: "34",
            [Options.moderate]: "33",
            [Options.low]: "31"
        },
        "14": {
            [Options.extreme]: "39",
            [Options.high]: "36",
            [Options.moderate]: "35",
            [Options.low]: "33"
        },
        "15": {
            [Options.extreme]: "40",
            [Options.high]: "37",
            [Options.moderate]: "36",
            [Options.low]: "34"
        },
        "16": {
            [Options.extreme]: "42",
            [Options.high]: "39",
            [Options.moderate]: "38",
            [Options.low]: "36"
        },
        "17": {
            [Options.extreme]: "43",
            [Options.high]: "40",
            [Options.moderate]: "39",
            [Options.low]: "37"
        },
        "18": {
            [Options.extreme]: "45",
            [Options.high]: "42",
            [Options.moderate]: "41",
            [Options.low]: "39"
        },
        "19": {
            [Options.extreme]: "46",
            [Options.high]: "43",
            [Options.moderate]: "42",
            [Options.low]: "40"
        },
        "20": {
            [Options.extreme]: "48",
            [Options.high]: "45",
            [Options.moderate]: "44",
            [Options.low]: "42"
        },
        "21": {
            [Options.extreme]: "49",
            [Options.high]: "46",
            [Options.moderate]: "45",
            [Options.low]: "43"
        },
        "22": {
            [Options.extreme]: "51",
            [Options.high]: "48",
            [Options.moderate]: "47",
            [Options.low]: "45"
        },
        "23": {
            [Options.extreme]: "52",
            [Options.high]: "49",
            [Options.moderate]: "48",
            [Options.low]: "46"
        },
        "24": {
            [Options.extreme]: "54",
            [Options.high]: "51",
            [Options.moderate]: "50",
            [Options.low]: "48"
        }
    },
    strikeBonus: {
        "-1": {
            [Options.extreme]: "10",
            [Options.high]: "8",
            [Options.moderate]: "6",
            [Options.low]: "4"
        },
        "0": {
            [Options.extreme]: "10",
            [Options.high]: "8",
            [Options.moderate]: "6",
            [Options.low]: "4"
        },
        "1": {
            [Options.extreme]: "11",
            [Options.high]: "9",
            [Options.moderate]: "7",
            [Options.low]: "5"
        },
        "2": {
            [Options.extreme]: "13",
            [Options.high]: "11",
            [Options.moderate]: "9",
            [Options.low]: "7"
        },
        "3": {
            [Options.extreme]: "14",
            [Options.high]: "12",
            [Options.moderate]: "10",
            [Options.low]: "8"
        },
        "4": {
            [Options.extreme]: "16",
            [Options.high]: "14",
            [Options.moderate]: "12",
            [Options.low]: "9"
        },
        "5": {
            [Options.extreme]: "17",
            [Options.high]: "15",
            [Options.moderate]: "13",
            [Options.low]: "11"
        },
        "6": {
            [Options.extreme]: "19",
            [Options.high]: "17",
            [Options.moderate]: "15",
            [Options.low]: "12"
        },
        "7": {
            [Options.extreme]: "20",
            [Options.high]: "18",
            [Options.moderate]: "16",
            [Options.low]: "13"
        },
        "8": {
            [Options.extreme]: "22",
            [Options.high]: "20",
            [Options.moderate]: "18",
            [Options.low]: "15"
        },
        "9": {
            [Options.extreme]: "23",
            [Options.high]: "21",
            [Options.moderate]: "19",
            [Options.low]: "16"
        },
        "10": {
            [Options.extreme]: "25",
            [Options.high]: "23",
            [Options.moderate]: "21",
            [Options.low]: "17"
        },
        "11": {
            [Options.extreme]: "27",
            [Options.high]: "24",
            [Options.moderate]: "22",
            [Options.low]: "19"
        },
        "12": {
            [Options.extreme]: "28",
            [Options.high]: "26",
            [Options.moderate]: "24",
            [Options.low]: "20"
        },
        "13": {
            [Options.extreme]: "29",
            [Options.high]: "27",
            [Options.moderate]: "25",
            [Options.low]: "21"
        },
        "14": {
            [Options.extreme]: "31",
            [Options.high]: "29",
            [Options.moderate]: "27",
            [Options.low]: "23"
        },
        "15": {
            [Options.extreme]: "32",
            [Options.high]: "30",
            [Options.moderate]: "28",
            [Options.low]: "24"
        },
        "16": {
            [Options.extreme]: "34",
            [Options.high]: "32",
            [Options.moderate]: "30",
            [Options.low]: "25"
        },
        "17": {
            [Options.extreme]: "35",
            [Options.high]: "33",
            [Options.moderate]: "31",
            [Options.low]: "27"
        },
        "18": {
            [Options.extreme]: "37",
            [Options.high]: "35",
            [Options.moderate]: "33",
            [Options.low]: "28"
        },
        "19": {
            [Options.extreme]: "38",
            [Options.high]: "36",
            [Options.moderate]: "34",
            [Options.low]: "29"
        },
        "20": {
            [Options.extreme]: "40",
            [Options.high]: "38",
            [Options.moderate]: "36",
            [Options.low]: "31"
        },
        "21": {
            [Options.extreme]: "41",
            [Options.high]: "39",
            [Options.moderate]: "37",
            [Options.low]: "32"
        },
        "22": {
            [Options.extreme]: "43",
            [Options.high]: "41",
            [Options.moderate]: "39",
            [Options.low]: "33"
        },
        "23": {
            [Options.extreme]: "44",
            [Options.high]: "42",
            [Options.moderate]: "40",
            [Options.low]: "35"
        },
        "24": {
            [Options.extreme]: "46",
            [Options.high]: "44",
            [Options.moderate]: "42",
            [Options.low]: "36"
        }
    },
    strikeDamage: {
        "-1": {
            [Options.extreme]: "1d6+1",
            [Options.high]: "1d4+1",
            [Options.moderate]: "1d4",
            [Options.low]: "1d4"
        },
        "0": {
            [Options.extreme]: "1d6+3",
            [Options.high]: "1d6+2",
            [Options.moderate]: "1d4+2",
            [Options.low]: "1d4+1"
        },
        "1": {
            [Options.extreme]: "1d8+4",
            [Options.high]: "1d6+3",
            [Options.moderate]: "1d6+2",
            [Options.low]: "1d4+2"
        },
        "2": {
            [Options.extreme]: "1d12+4",
            [Options.high]: "1d10+4",
            [Options.moderate]: "1d8+4",
            [Options.low]: "1d6+3"
        },
        "3": {
            [Options.extreme]: "1d12+8",
            [Options.high]: "1d10+6",
            [Options.moderate]: "1d8+6",
            [Options.low]: "1d6+5"
        },
        "4": {
            [Options.extreme]: "2d10+7",
            [Options.high]: "2d8+5",
            [Options.moderate]: "2d6+5",
            [Options.low]: "2d4+4"
        },
        "5": {
            [Options.extreme]: "2d12+7",
            [Options.high]: "2d8+7",
            [Options.moderate]: "2d6+6",
            [Options.low]: "2d4+6"
        },
        "6": {
            [Options.extreme]: "2d12+10",
            [Options.high]: "2d8+9",
            [Options.moderate]: "2d6+8",
            [Options.low]: "2d4+7"
        },
        "7": {
            [Options.extreme]: "2d12+12",
            [Options.high]: "2d10+9",
            [Options.moderate]: "2d8+8",
            [Options.low]: "2d6+6"
        },
        "8": {
            [Options.extreme]: "2d12+15",
            [Options.high]: "2d10+11",
            [Options.moderate]: "2d8+9",
            [Options.low]: "2d6+8"
        },
        "9": {
            [Options.extreme]: "2d12+17",
            [Options.high]: "2d10+13",
            [Options.moderate]: "2d8+11",
            [Options.low]: "2d6+9"
        },
        "10": {
            [Options.extreme]: "2d12+20",
            [Options.high]: "2d12+13",
            [Options.moderate]: "2d10+11",
            [Options.low]: "2d6+10"
        },
        "11": {
            [Options.extreme]: "2d12+22",
            [Options.high]: "2d12+15",
            [Options.moderate]: "2d10+12",
            [Options.low]: "2d8+10"
        },
        "12": {
            [Options.extreme]: "3d12+19",
            [Options.high]: "3d10+14",
            [Options.moderate]: "3d8+12",
            [Options.low]: "3d6+10"
        },
        "13": {
            [Options.extreme]: "3d12+21",
            [Options.high]: "3d10+16",
            [Options.moderate]: "3d8+14",
            [Options.low]: "3d6+11"
        },
        "14": {
            [Options.extreme]: "3d12+24",
            [Options.high]: "3d10+18",
            [Options.moderate]: "3d8+15",
            [Options.low]: "3d6+13"
        },
        "15": {
            [Options.extreme]: "3d12+26",
            [Options.high]: "3d12+17",
            [Options.moderate]: "3d10+14",
            [Options.low]: "3d6+14"
        },
        "16": {
            [Options.extreme]: "3d12+29",
            [Options.high]: "3d12+18",
            [Options.moderate]: "3d10+15",
            [Options.low]: "3d6+15"
        },
        "17": {
            [Options.extreme]: "3d12+31",
            [Options.high]: "3d12+19",
            [Options.moderate]: "3d10+16",
            [Options.low]: "3d6+16"
        },
        "18": {
            [Options.extreme]: "3d12+34",
            [Options.high]: "3d12+20",
            [Options.moderate]: "3d10+17",
            [Options.low]: "3d6+17"
        },
        "19": {
            [Options.extreme]: "4d12+29",
            [Options.high]: "4d10+20",
            [Options.moderate]: "4d8+17",
            [Options.low]: "4d6+14"
        },
        "20": {
            [Options.extreme]: "4d12+32",
            [Options.high]: "4d10+22",
            [Options.moderate]: "4d8+19",
            [Options.low]: "4d6+15"
        },
        "21": {
            [Options.extreme]: "4d12+34",
            [Options.high]: "4d10+24",
            [Options.moderate]: "4d8+20",
            [Options.low]: "4d6+17"
        },
        "22": {
            [Options.extreme]: "4d12+37",
            [Options.high]: "4d10+26",
            [Options.moderate]: "4d8+22",
            [Options.low]: "4d6+18"
        },
        "23": {
            [Options.extreme]: "4d12+39",
            [Options.high]: "4d12+24",
            [Options.moderate]: "4d10+20",
            [Options.low]: "4d6+19"
        },
        "24": {
            [Options.extreme]: "4d12+42",
            [Options.high]: "4d12+26",
            [Options.moderate]: "4d10+22",
            [Options.low]: "4d6+21"
        }
    },
    spellcasting: {
        "-1": {
            [Options.extreme]: "11",
            [Options.high]: "8",
            [Options.moderate]: "5",
        },
        "0": {
            [Options.extreme]: "11",
            [Options.high]: "8",
            [Options.moderate]: "5",
        },
        "1": {
            [Options.extreme]: "12",
            [Options.high]: "9",
            [Options.moderate]: "6",
        },
        "2": {
            [Options.extreme]: "14",
            [Options.high]: "10",
            [Options.moderate]: "7",
        },
        "3": {
            [Options.extreme]: "15",
            [Options.high]: "12",
            [Options.moderate]: "9",
        },
        "4": {
            [Options.extreme]: "17",
            [Options.high]: "13",
            [Options.moderate]: "10",
        },
        "5": {
            [Options.extreme]: "18",
            [Options.high]: "14",
            [Options.moderate]: "11",
        },
        "6": {
            [Options.extreme]: "19",
            [Options.high]: "16",
            [Options.moderate]: "13",
        },
        "7": {
            [Options.extreme]: "21",
            [Options.high]: "17",
            [Options.moderate]: "14",
        },
        "8": {
            [Options.extreme]: "22",
            [Options.high]: "18",
            [Options.moderate]: "15",
        },
        "9": {
            [Options.extreme]: "24",
            [Options.high]: "20",
            [Options.moderate]: "17",
        },
        "10": {
            [Options.extreme]: "25",
            [Options.high]: "21",
            [Options.moderate]: "18",
        },
        "11": {
            [Options.extreme]: "26",
            [Options.high]: "22",
            [Options.moderate]: "19",
        },
        "12": {
            [Options.extreme]: "28",
            [Options.high]: "24",
            [Options.moderate]: "21",
        },
        "13": {
            [Options.extreme]: "29",
            [Options.high]: "25",
            [Options.moderate]: "22",
        },
        "14": {
            [Options.extreme]: "31",
            [Options.high]: "26",
            [Options.moderate]: "23",
        },
        "15": {
            [Options.extreme]: "32",
            [Options.high]: "28",
            [Options.moderate]: "25",
        },
        "16": {
            [Options.extreme]: "33",
            [Options.high]: "29",
            [Options.moderate]: "26",
        },
        "17": {
            [Options.extreme]: "35",
            [Options.high]: "30",
            [Options.moderate]: "27",
        },
        "18": {
            [Options.extreme]: "36",
            [Options.high]: "32",
            [Options.moderate]: "29",
        },
        "19": {
            [Options.extreme]: "38",
            [Options.high]: "33",
            [Options.moderate]: "30",
        },
        "20": {
            [Options.extreme]: "39",
            [Options.high]: "34",
            [Options.moderate]: "31",
        },
        "21": {
            [Options.extreme]: "40",
            [Options.high]: "36",
            [Options.moderate]: "33",
        },
        "22": {
            [Options.extreme]: "42",
            [Options.high]: "37",
            [Options.moderate]: "34",
        },
        "23": {
            [Options.extreme]: "43",
            [Options.high]: "38",
            [Options.moderate]: "35",
        },
        "24": {
            [Options.extreme]: "44",
            [Options.high]: "40",
            [Options.moderate]: "37",
        }
    },
    skills: {
        "-1": {
            [Options.extreme]: "8",
            [Options.high]: "5",
            [Options.moderate]: "4",
            [Options.low]: "2"
        },
        "0": {
            [Options.extreme]: "9",
            [Options.high]: "6",
            [Options.moderate]: "5",
            [Options.low]: "3"
        },
        "1": {
            [Options.extreme]: "10",
            [Options.high]: "7",
            [Options.moderate]: "6",
            [Options.low]: "4"
        },
        "2": {
            [Options.extreme]: "11",
            [Options.high]: "8",
            [Options.moderate]: "7",
            [Options.low]: "5"
        },
        "3": {
            [Options.extreme]: "13",
            [Options.high]: "10",
            [Options.moderate]: "9",
            [Options.low]: "6"
        },
        "4": {
            [Options.extreme]: "15",
            [Options.high]: "12",
            [Options.moderate]: "10",
            [Options.low]: "8"
        },
        "5": {
            [Options.extreme]: "16",
            [Options.high]: "13",
            [Options.moderate]: "12",
            [Options.low]: "9"
        },
        "6": {
            [Options.extreme]: "18",
            [Options.high]: "15",
            [Options.moderate]: "13",
            [Options.low]: "10"
        },
        "7": {
            [Options.extreme]: "20",
            [Options.high]: "17",
            [Options.moderate]: "15",
            [Options.low]: "12"
        },
        "8": {
            [Options.extreme]: "21",
            [Options.high]: "18",
            [Options.moderate]: "16",
            [Options.low]: "13"
        },
        "9": {
            [Options.extreme]: "23",
            [Options.high]: "20",
            [Options.moderate]: "18",
            [Options.low]: "14"
        },
        "10": {
            [Options.extreme]: "25",
            [Options.high]: "22",
            [Options.moderate]: "19",
            [Options.low]: "16"
        },
        "11": {
            [Options.extreme]: "26",
            [Options.high]: "23",
            [Options.moderate]: "21",
            [Options.low]: "18"
        },
        "12": {
            [Options.extreme]: "28",
            [Options.high]: "25",
            [Options.moderate]: "22",
            [Options.low]: "19"
        },
        "13": {
            [Options.extreme]: "30",
            [Options.high]: "27",
            [Options.moderate]: "24",
            [Options.low]: "21"
        },
        "14": {
            [Options.extreme]: "31",
            [Options.high]: "28",
            [Options.moderate]: "25",
            [Options.low]: "22"
        },
        "15": {
            [Options.extreme]: "33",
            [Options.high]: "30",
            [Options.moderate]: "27",
            [Options.low]: "23"
        },
        "16": {
            [Options.extreme]: "35",
            [Options.high]: "32",
            [Options.moderate]: "28",
            [Options.low]: "25"
        },
        "17": {
            [Options.extreme]: "36",
            [Options.high]: "33",
            [Options.moderate]: "30",
            [Options.low]: "26"
        },
        "18": {
            [Options.extreme]: "38",
            [Options.high]: "35",
            [Options.moderate]: "31",
            [Options.low]: "28"
        },
        "19": {
            [Options.extreme]: "40",
            [Options.high]: "37",
            [Options.moderate]: "33",
            [Options.low]: "29"
        },
        "20": {
            [Options.extreme]: "41",
            [Options.high]: "38",
            [Options.moderate]: "34",
            [Options.low]: "30"
        },
        "21": {
            [Options.extreme]: "43",
            [Options.high]: "40",
            [Options.moderate]: "36",
            [Options.low]: "31"
        },
        "22": {
            [Options.extreme]: "45",
            [Options.high]: "42",
            [Options.moderate]: "37",
            [Options.low]: "32"
        },
        "23": {
            [Options.extreme]: "46",
            [Options.high]: "43",
            [Options.moderate]: "38",
            [Options.low]: "34"
        },
        "24": {
            [Options.extreme]: "48",
            [Options.high]: "45",
            [Options.moderate]: "40",
            [Options.low]: "36"
        }
    },
}

export const statisticValues = {
    [Statistics.str]: aliases.abilityScores,
    [Statistics.dex]: aliases.abilityScores,
    [Statistics.con]: aliases.abilityScores,
    [Statistics.int]: aliases.abilityScores,
    [Statistics.wis]: aliases.abilityScores,
    [Statistics.cha]: aliases.abilityScores,

    [Statistics.hp]: aliases.hitPoints,

    [Statistics.per]: aliases.perceptionSaves,

    [Statistics.ac]: aliases.armorClass,

    [Statistics.fort]: aliases.perceptionSaves,
    [Statistics.ref]: aliases.perceptionSaves,
    [Statistics.wil]: aliases.perceptionSaves,

    [Statistics.strikeBonus]: aliases.strikeBonus,
    [Statistics.strikeDamage]: aliases.strikeDamage,
    [Statistics.spellcasting]: aliases.spellcasting,

    [Statistics.acrobatics]: aliases.skills,
    [Statistics.arcana]: aliases.skills,
    [Statistics.athletics]: aliases.skills,
    [Statistics.crafting]: aliases.skills,
    [Statistics.deception]: aliases.skills,
    [Statistics.diplomacy]: aliases.skills,
    [Statistics.intimidation]: aliases.skills,
    [Statistics.medicine]: aliases.skills,
    [Statistics.nature]: aliases.skills,
    [Statistics.occultism]: aliases.skills,
    [Statistics.performance]: aliases.skills,
    [Statistics.religion]: aliases.skills,
    [Statistics.society]: aliases.skills,
    [Statistics.stealth]: aliases.skills,
    [Statistics.survival]: aliases.skills,
    [Statistics.thievery]: aliases.skills,
}