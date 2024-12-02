import * as bcrypt from "bcrypt";

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
        const marked = await import("marked");
        const DOMPurify = (await import("dompurify")).default;
        const html = await marked.parse(text);
        return DOMPurify.sanitize(html);
      },
    };
  }
  //#endregion

  //#region PRIVATE
  private async passGenSalt() {
    return await bcrypt.genSalt();
  }
}
