import { FalconTokenizer } from "../../../src/tokenizers.js";
import { BASE_TEST_STRINGS, FALCON_TEST_STRINGS } from "../test_strings.js";

export const TOKENIZER_CLASS = FalconTokenizer;
export const TEST_CONFIG = {
  "tiiuae/falcon-7b": {
    "SIMPLE": {
      "text": BASE_TEST_STRINGS.SIMPLE,
      "tokens": ["How", "\u0120are", "\u0120you", "\u0120doing", "?"],
      "ids": [1830, 362, 299, 1836, 42],
      "decoded": "How are you doing?"
    },
    "SIMPLE_WITH_PUNCTUATION": {
      "text": BASE_TEST_STRINGS.SIMPLE_WITH_PUNCTUATION,
      "tokens": ["You", "\u0120should", "'", "ve", "\u0120done", "\u0120this"],
      "ids": [1357, 808, 18, 298, 1782, 414],
      "decoded": "You should've done this"
    },
    "NUMBERS": {
      "text": BASE_TEST_STRINGS.NUMBERS,
      "tokens": ["012", "345", "678", "9", "\u0120", "0", "\u0120", "1", "\u0120", "2", "\u0120", "3", "\u0120", "4", "\u0120", "5", "\u0120", "6", "\u0120", "7", "\u0120", "8", "\u0120", "9", "\u0120", "10", "\u0120", "100", "\u0120", "100", "0"],
      "ids": [24445, 29094, 41583, 36, 204, 27, 204, 28, 204, 29, 204, 30, 204, 31, 204, 32, 204, 33, 204, 34, 204, 35, 204, 36, 204, 696, 204, 1425, 204, 1425, 27],
      "decoded": "0123456789 0 1 2 3 4 5 6 7 8 9 10 100 1000"
    },
    "TEXT_WITH_NUMBERS": {
      "text": BASE_TEST_STRINGS.TEXT_WITH_NUMBERS,
      "tokens": ["The", "\u0120company", "\u0120was", "\u0120founded", "\u0120in", "\u0120", "201", "6", "."],
      "ids": [487, 1438, 398, 9923, 272, 204, 626, 33, 25],
      "decoded": "The company was founded in 2016."
    },
    "PUNCTUATION": {
      "text": BASE_TEST_STRINGS.PUNCTUATION,
      "tokens": ["A", "\u010a", "'", "ll", "\u0120", "!!", "to", "?'", "d", "''", "d", "\u0120of", ",", "\u0120can", "'", "t", "."],
      "ids": [44, 193, 18, 567, 204, 1409, 534, 12493, 79, 7544, 79, 275, 23, 418, 18, 95, 25],
      "decoded": "A\n'll!!to?'d''d of, can't."
    },
    "PYTHON_CODE": {
      "text": BASE_TEST_STRINGS.PYTHON_CODE,
      "tokens": ["def", "\u0120main", "():", "\u010a", "\u0109", "pass"],
      "ids": [3071, 1316, 13160, 193, 192, 5412],
      "decoded": "def main():\n\tpass"
    },
    "JAVASCRIPT_CODE": {
      "text": BASE_TEST_STRINGS.JAVASCRIPT_CODE,
      "tokens": ["let", "\u0120a", "\u0120", "=", "\u0120obj", ".", "toString", "();", "\u010a", "toString", "();"],
      "ids": [1025, 241, 204, 40, 13756, 25, 19409, 2032, 193, 19409, 2032],
      "decoded": "let a = obj.toString();\ntoString();"
    },
    "NEWLINES": {
      "text": BASE_TEST_STRINGS.NEWLINES,
      "tokens": ["This", "\u010a", "\u010a", "is", "\u010a", "a", "\u010a", "test", "."],
      "ids": [1182, 193, 193, 259, 193, 76, 193, 4780, 25],
      "decoded": "This\n\nis\na\ntest."
    },
    "BASIC": {
      "text": BASE_TEST_STRINGS.BASIC,
      "tokens": ["UN", "want", "\u00c3\u00a9d", ",", "running"],
      "ids": [4000, 32108, 5706, 23, 27386],
      "decoded": "UNwant\u00e9d,running"
    },
    "CONTROL_TOKENS": {
      "text": BASE_TEST_STRINGS.CONTROL_TOKENS,
      "tokens": ["1", "\u0100", "2", "\u00ef\u00bf", "\u00bd", "3"],
      "ids": [28, 186, 29, 13112, 133, 30],
      "decoded": "1\u00002\ufffd3"
    },
    "HELLO_WORLD_TITLECASE": {
      "text": BASE_TEST_STRINGS.HELLO_WORLD_TITLECASE,
      "tokens": ["Hello", "\u0120World"],
      "ids": [9856, 2889],
      "decoded": "Hello World"
    },
    "HELLO_WORLD_LOWERCASE": {
      "text": BASE_TEST_STRINGS.HELLO_WORLD_LOWERCASE,
      "tokens": ["hello", "\u0120world"],
      "ids": [30835, 1079],
      "decoded": "hello world"
    },
    "CHINESE_ONLY": {
      "text": BASE_TEST_STRINGS.CHINESE_ONLY,
      "tokens": ["\u00e7\u0136\u0141\u00e6\u00b4\u00bb", "\u00e7\u013c\u0126", "\u00e7\u013e\u0141", "\u00e8\u00b0", "\u013d", "\u00e6\u013a\u00af"],
      "ids": [32725, 1105, 15498, 8061, 233, 2364],
      "decoded": "\u751f\u6d3b\u7684\u771f\u8c1b\u662f"
    },
    "LEADING_SPACE": {
      "text": BASE_TEST_STRINGS.LEADING_SPACE,
      "tokens": ["\u0120\u0120", "\u0120leading", "\u0120space"],
      "ids": [258, 3736, 2151],
      "decoded": "   leading space"
    },
    "TRAILING_SPACE": {
      "text": BASE_TEST_STRINGS.TRAILING_SPACE,
      "tokens": ["tra", "iling", "\u0120space", "\u0120\u0120\u0120"],
      "ids": [9172, 4447, 2151, 466],
      "decoded": "trailing space   "
    },
    "DOUBLE_SPACE": {
      "text": BASE_TEST_STRINGS.DOUBLE_SPACE,
      "tokens": ["Hi", "\u0120", "\u0120Hello"],
      "ids": [5516, 204, 23090],
      "decoded": "Hi  Hello"
    },
    "CURRENCY": {
      "text": BASE_TEST_STRINGS.CURRENCY,
      "tokens": ["test", "\u0120", "$", "1", "\u0120R", "2", "\u0120", "#", "3", "\u0120\u00e2\u0124\u00ac", "4", "\u0120\u00c2\u00a3", "5", "\u0120\u00c2", "\u00a5", "6", "\u0120\u00e2\u0124", "\u00a3", "7", "\u0120\u00e2\u0124", "\u00b9", "8", "\u0120\u00e2\u0124", "\u00b1", "9", "\u0120test"],
      "ids": [4780, 204, 15, 28, 382, 29, 204, 14, 30, 6471, 31, 5131, 32, 3068, 110, 33, 25631, 108, 34, 25631, 129, 35, 25631, 121, 36, 1318],
      "decoded": "test $1 R2 #3 \u20ac4 \u00a35 \u00a56 \u20a37 \u20b98 \u20b19 test"
    },
    "CURRENCY_WITH_DECIMALS": {
      "text": BASE_TEST_STRINGS.CURRENCY_WITH_DECIMALS,
      "tokens": ["I", "\u0120bought", "\u0120an", "\u0120apple", "\u0120for", "\u0120", "$", "1", ".", "00", "\u0120at", "\u0120the", "\u0120store", "."],
      "ids": [52, 5659, 267, 12381, 312, 204, 15, 28, 25, 527, 388, 248, 2946, 25],
      "decoded": "I bought an apple for $1.00 at the store."
    },
    "ELLIPSIS": {
      "text": BASE_TEST_STRINGS.ELLIPSIS,
      "tokens": ["you", "\u00e2\u0122\u00a6", "\u0120\u0120"],
      "ids": [5667, 898, 258],
      "decoded": "you\u2026  "
    },
    "TEXT_WITH_ESCAPE_CHARACTERS": {
      "text": BASE_TEST_STRINGS.TEXT_WITH_ESCAPE_CHARACTERS,
      "tokens": ["you", "\u00e2\u0122\u00a6", "\u00c2\u0142\u00c2\u0142"],
      "ids": [5667, 898, 60482],
      "decoded": "you\u2026\u00a0\u00a0"
    },
    "TEXT_WITH_ESCAPE_CHARACTERS_2": {
      "text": BASE_TEST_STRINGS.TEXT_WITH_ESCAPE_CHARACTERS_2,
      "tokens": ["you", "\u00e2\u0122\u00a6", "\u00c2\u0142", "\u00c2\u0142", "you", "\u00e2\u0122\u00a6", "\u00c2\u0142\u00c2\u0142"],
      "ids": [5667, 898, 4381, 4381, 5667, 898, 60482],
      "decoded": "you\u2026\u00a0\u00a0you\u2026\u00a0\u00a0"
    },
    "TILDE_NORMALIZATION": {
      "text": BASE_TEST_STRINGS.TILDE_NORMALIZATION,
      "tokens": ["we", "ird", "\u0120", "\u00ef", "\u00bd", "\u0140", "\u0120edge", "\u0120", "\u00ef", "\u00bd", "\u0140", "\u0120case"],
      "ids": [698, 1505, 204, 181, 133, 236, 5753, 204, 181, 133, 236, 1494],
      "decoded": "weird \uff5e edge \uff5e case"
    },
    "SPIECE_UNDERSCORE": {
      "text": BASE_TEST_STRINGS.SPIECE_UNDERSCORE,
      "tokens": ["\u00e2\u0138", "\u0123", "This", "\u0120\u00e2\u0138", "\u0123", "is", "\u0120\u00e2\u0138", "\u0123", "a", "\u0120\u00e2\u0138", "\u0123", "test", "\u0120\u00e2\u0138", "\u0123", "."],
      "ids": [13856, 207, 1182, 26607, 207, 259, 26607, 207, 76, 26607, 207, 4780, 26607, 207, 25],
      "decoded": "\u2581This \u2581is \u2581a \u2581test \u2581."
    },
    "NUMBERS_SPLIT": {
      "text": FALCON_TEST_STRINGS.NUMBERS_SPLIT,
      "tokens": ["12", "\u0120and", "\u0120", "123", "\u0120and", "\u0120", "123", "4"],
      "ids": [928, 273, 204, 10963, 273, 204, 10963, 31],
      "decoded": "12 and 123 and 1234"
    }
  },
  "tiiuae/falcon-rw-1b": {
    "SIMPLE_WITH_PUNCTUATION": {
      "text": BASE_TEST_STRINGS.SIMPLE_WITH_PUNCTUATION,
      "tokens": ["You", "\u0120should", "'ve", "\u0120done", "\u0120this"],
      "ids": [1639, 815, 1053, 1760, 428],
      "decoded": "You should've done this"
    },
    "NUMBERS": {
      "text": BASE_TEST_STRINGS.NUMBERS,
      "tokens": ["01", "23", "45", "67", "89", "\u01200", "\u01201", "\u01202", "\u01203", "\u01204", "\u01205", "\u01206", "\u01207", "\u01208", "\u01209", "\u012010", "\u0120100", "\u01201000"],
      "ids": [486, 1954, 2231, 3134, 4531, 657, 352, 362, 513, 604, 642, 718, 767, 807, 860, 838, 1802, 8576],
      "decoded": "0123456789 0 1 2 3 4 5 6 7 8 9 10 100 1000"
    },
    "TEXT_WITH_NUMBERS": {
      "text": BASE_TEST_STRINGS.TEXT_WITH_NUMBERS,
      "tokens": ["The", "\u0120company", "\u0120was", "\u0120founded", "\u0120in", "\u01202016", "."],
      "ids": [464, 1664, 373, 9393, 287, 1584, 13],
      "decoded": "The company was founded in 2016."
    },
    "PUNCTUATION": {
      "text": BASE_TEST_STRINGS.PUNCTUATION,
      "tokens": ["A", "\u010a", "'ll", "\u0120!!", "to", "?'", "d", "''", "d", "\u0120of", ",", "\u0120can", "'t", "."],
      "ids": [32, 198, 1183, 37867, 1462, 8348, 67, 7061, 67, 286, 11, 460, 470, 13],
      "decoded": "A\n'll!!to?'d''d of, can't."
    },
    "JAVASCRIPT_CODE": {
      "text": BASE_TEST_STRINGS.JAVASCRIPT_CODE,
      "tokens": ["let", "\u0120a", "\u0120=", "\u0120obj", ".", "to", "String", "();", "\u010a", "to", "String", "();"],
      "ids": [1616, 257, 796, 26181, 13, 1462, 10100, 9783, 198, 1462, 10100, 9783],
      "decoded": "let a = obj.toString();\ntoString();"
    },
    "BASIC": {
      "text": BASE_TEST_STRINGS.BASIC,
      "tokens": ["UN", "want", "\u00c3\u00a9", "d", ",", "running"],
      "ids": [4944, 42949, 2634, 67, 11, 20270],
      "decoded": "UNwant\u00e9d,running"
    },
    "CONTROL_TOKENS": {
      "text": BASE_TEST_STRINGS.CONTROL_TOKENS,
      "tokens": ["1", "\u0100", "2", "\u00ef\u00bf\u00bd", "3"],
      "ids": [16, 188, 17, 4210, 18],
      "decoded": "1\u00002\ufffd3"
    },
    "CHINESE_ONLY": {
      "text": BASE_TEST_STRINGS.CHINESE_ONLY,
      "tokens": ["\u00e7\u0136\u0141", "\u00e6", "\u00b4", "\u00bb", "\u00e7\u013c\u0126", "\u00e7\u013e", "\u0141", "\u00e8", "\u00b0", "\u013d", "\u00e6\u013a\u00af"],
      "ids": [37955, 162, 112, 119, 21410, 40367, 253, 164, 108, 249, 42468],
      "decoded": "\u751f\u6d3b\u7684\u771f\u8c1b\u662f"
    },
    "LEADING_SPACE": {
      "text": BASE_TEST_STRINGS.LEADING_SPACE,
      "tokens": ["\u0120", "\u0120", "\u0120leading", "\u0120space"],
      "ids": [220, 220, 3756, 2272],
      "decoded": "   leading space"
    },
    "TRAILING_SPACE": {
      "text": BASE_TEST_STRINGS.TRAILING_SPACE,
      "tokens": ["tra", "iling", "\u0120space", "\u0120", "\u0120", "\u0120"],
      "ids": [9535, 4386, 2272, 220, 220, 220],
      "decoded": "trailing space   "
    },
    "CURRENCY": {
      "text": BASE_TEST_STRINGS.CURRENCY,
      "tokens": ["test", "\u0120$", "1", "\u0120R", "2", "\u0120#", "3", "\u0120\u00e2\u0124\u00ac", "4", "\u0120\u00c2\u00a3", "5", "\u0120\u00c2\u00a5", "6", "\u0120\u00e2", "\u0124", "\u00a3", "7", "\u0120\u00e2", "\u0124", "\u00b9", "8", "\u0120\u00e2", "\u0124", "\u00b1", "9", "\u0120test"],
      "ids": [9288, 720, 16, 371, 17, 1303, 18, 10432, 19, 4248, 20, 38221, 21, 2343, 224, 96, 22, 2343, 224, 117, 23, 2343, 224, 109, 24, 1332],
      "decoded": "test $1 R2 #3 \u20ac4 \u00a35 \u00a56 \u20a37 \u20b98 \u20b19 test"
    },
    "CURRENCY_WITH_DECIMALS": {
      "text": BASE_TEST_STRINGS.CURRENCY_WITH_DECIMALS,
      "tokens": ["I", "\u0120bought", "\u0120an", "\u0120apple", "\u0120for", "\u0120$", "1", ".", "00", "\u0120at", "\u0120the", "\u0120store", "."],
      "ids": [40, 5839, 281, 17180, 329, 720, 16, 13, 405, 379, 262, 3650, 13],
      "decoded": "I bought an apple for $1.00 at the store."
    },
    "ELLIPSIS": {
      "text": BASE_TEST_STRINGS.ELLIPSIS,
      "tokens": ["you", "\u00e2\u0122\u00a6", "\u0120", "\u0120"],
      "ids": [5832, 1399, 220, 220],
      "decoded": "you\u2026  "
    },
    "TILDE_NORMALIZATION": {
      "text": BASE_TEST_STRINGS.TILDE_NORMALIZATION,
      "tokens": ["we", "ird", "\u0120\u00ef", "\u00bd", "\u0140", "\u0120edge", "\u0120\u00ef", "\u00bd", "\u0140", "\u0120case"],
      "ids": [732, 1447, 27332, 121, 252, 5743, 27332, 121, 252, 1339],
      "decoded": "weird \uff5e edge \uff5e case"
    },
    "NUMBERS_SPLIT": {
      "text": FALCON_TEST_STRINGS.NUMBERS_SPLIT,
      "tokens": ["12", "\u0120and", "\u0120123", "\u0120and", "\u012012", "34"],
      "ids": [1065, 290, 17031, 290, 1105, 2682],
      "decoded": "12 and 123 and 1234"
    }
  }
}
