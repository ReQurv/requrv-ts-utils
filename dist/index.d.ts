export default class ReQurvUtils {
    constructor();
    passHashing(text: string): Promise<string>;
    passCompare(text: string, hash: string): Promise<boolean>;
    private passGenSalt;
    markedParser(text: string): Promise<string>;
}
//# sourceMappingURL=index.d.ts.map