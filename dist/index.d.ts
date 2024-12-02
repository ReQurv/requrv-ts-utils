export default class ReQurvUtils {
    constructor();
    password(): {
        hashing: (text: string) => Promise<string>;
        compare: (text: string, hash: string) => Promise<boolean>;
    };
    marked(): Promise<{
        parse: (text: string) => Promise<string>;
    }>;
    private passGenSalt;
}
//# sourceMappingURL=index.d.ts.map