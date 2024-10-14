import * as bcrypt from "bcrypt";

export default class ReQurvUtils {
  constructor() {}

  //#region PASSWORD
  public async passHashing(text: string) {
    const salt = await this.passGenSalt();
    return await bcrypt.hash(text, salt);
  }

  public async passCompare(text: string, hash: string) {
    return await bcrypt.compare(text, hash);
  }

  private async passGenSalt() {
    return await bcrypt.genSalt();
  }
  //#endregion

  //#region Marked
  public async markedParser(text: string) {
    const marked = await import("marked");
    const DOMPurify = await import("dompurify");
    const html = await marked.parse(text);
    return DOMPurify.sanitize(html);
  }
  //#endregion
  //#endregion
}
