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
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = __importStar(require("bcrypt"));
class ReQurvUtils {
    constructor() { }
    //#region PASSWORD
    password() {
        return {
            hashing: async (text) => {
                const salt = await this.passGenSalt();
                return await bcrypt.hash(text, salt);
            },
            compare: async (text, hash) => {
                return await bcrypt.compare(text, hash);
            },
        };
    }
    //#endregion
    //#region MARKED
    async marked() {
        return {
            parse: async (text) => {
                const marked = await import("marked");
                const DOMPurify = (await import("dompurify")).default;
                const html = await marked.parse(text);
                return DOMPurify.sanitize(html);
            },
        };
    }
    //#endregion
    //#region PRIVATE
    async passGenSalt() {
        return await bcrypt.genSalt();
    }
}
exports.default = ReQurvUtils;
