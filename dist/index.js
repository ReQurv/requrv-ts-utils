"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = __importStar(require("bcrypt"));
const sanitize_html_1 = __importDefault(require("sanitize-html"));
const marked_1 = __importDefault(require("marked"));
class ReQurvUtils {
    constructor() { }
    //#region PASSWORD
    password = {
        hashing: async (text) => {
            const salt = await bcrypt.genSalt();
            return await bcrypt.hash(text, salt);
        },
        compare: async (text, hash) => {
            return await bcrypt.compare(text, hash);
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
