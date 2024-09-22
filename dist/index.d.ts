export default class ReQurvUtils {
    constructor();
    passHashing(text: string): Promise<string>;
    passCompare(text: string, hash: string): Promise<boolean>;
    private passGenSalt;
}
//# sourceMappingURL=index.d.ts.map