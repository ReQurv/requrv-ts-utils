import { compare, genSalt, hash } from "bcryptjs";
import sanitizeHtml from "sanitize-html";
import marked from "marked";

export default class ReQurvUtils {
  constructor() {}

  //#region PASSWORD
  public password = {
    hashing: async (text: string) => {
      const salt = await genSalt();
      return await hash(text, salt);
    },

    compare: async (text: string, hash: string) => {
      return await compare(text, hash);
    },
  };
  //#endregion

  //#region MARKED
  public marked = {
    parse: async (text: string) => {
      const html = await marked.parse(text);

      return sanitizeHtml(html);
    },
  };
  //#endregion

  //#region OTP
  /**
   * Generate OTP
   * @param ln Length of OTP (default: 6)
   * @returns 6 digit alphanumeric OTP
   */
  public generateOtp(ln = 6, special = true): string {
    const digits = "0123456789";
    const lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseAlphabets = lowerCaseAlphabets.toUpperCase();
    const specialChars = special ? "!@#%*_+" : "";
    const availableChar =
      digits + lowerCaseAlphabets + upperCaseAlphabets + specialChars;
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
  public generateLicense(length: number, pairs: number = 4): string {
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
  public utility = {
    /**
     * Converts a string to a slug.
     * @param str - The string to be converted to a slug.
     * @returns A slugified version of the input string. Spaces are replaced with hyphens
     */
    createSlug: (str: string) => {
      return str.toLowerCase().replace(" ", "-");
    },
  };
  //#endregion
}
