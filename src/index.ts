import * as bcrypt from "bcrypt";
import sanitizeHtml from "sanitize-html";
import marked from "marked";

export default class ReQurvUtils {
  constructor() {}

  //#region PASSWORD
  public password() {
    return {
      hashing: async (text: string) => {
        const salt = await this.passGenSalt();
        return await bcrypt.hash(text, salt);
      },

      compare: async (text: string, hash: string) => {
        return await bcrypt.compare(text, hash);
      },
    };
  }
  //#endregion

  //#region MARKED
  public async marked() {
    return {
      parse: async (text: string) => {
        const html = await marked.parse(text);

        return sanitizeHtml(html);
      },
    };
  }
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

  //#region PRIVATE
  private async passGenSalt() {
    return await bcrypt.genSalt();
  }
}
