"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const sanitize_html_1 = __importDefault(require("sanitize-html"));
const marked_1 = __importDefault(require("marked"));
const convert_csv_to_json_1 = __importDefault(require("convert-csv-to-json"));
class ReQurvUtils {
    constructor() { }
    //#region PASSWORD
    password = {
        hashing: async (text) => {
            const salt = await (0, bcryptjs_1.genSalt)();
            return await (0, bcryptjs_1.hash)(text, salt);
        },
        compare: async (text, hash) => {
            return await (0, bcryptjs_1.compare)(text, hash);
        },
    };
    //#endregion
    //#region MARKED
    marked = {
        parse: async (text) => {
            const html = await marked_1.default.parse(text);
            return (0, sanitize_html_1.default)(html);
        },
    };
    //#endregion
    //#region OTP
    /**
     * Generate OTP
     * @param ln Length of OTP (default: 6)
     * @returns 6 digit alphanumeric OTP
     */
    generateOtp(ln = 6, special = true) {
        const digits = "0123456789";
        const lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
        const upperCaseAlphabets = lowerCaseAlphabets.toUpperCase();
        const specialChars = special ? "!@#%*_+" : "";
        const availableChar = digits + lowerCaseAlphabets + upperCaseAlphabets + specialChars;
        let OTP = "";
        // Find the length of string
        const len = availableChar.length;
        for (let i = 0; i < ln; i++) {
            OTP += availableChar[Math.floor(Math.random() * len)];
        }
        return OTP;
    }
    //#endregion
    //#region LICENSING
    generateLicense(length, pairs = 4) {
        let result = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const digits = "0123456789";
        const availableChar = characters + digits;
        const charactersLength = availableChar.length;
        for (let i = 0; i < length; i += 1) {
            result += availableChar[Math.floor(Math.random() * charactersLength)];
        }
        return (result.match(new RegExp(`.{1,${pairs}}`, "g")) || []).join("-");
    }
    //#endregion
    //#region CSV
    csv = {
        loadCsv(filePath) {
            const jsonData = convert_csv_to_json_1.default.getJsonFromCsv(filePath);
            return jsonData;
        },
    };
    //#endregion
    //#region UTILITY
    utility = {
        /**
         * Converts a string to a slug.
         * @param str - The string to be converted to a slug.
         * @returns A slugified version of the input string. Spaces are replaced with hyphens
         */
        createSlug: (str) => {
            return str.toLowerCase().replace(" ", "-");
        },
    };
}
exports.default = ReQurvUtils;
