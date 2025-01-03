export default class ReQurvUtils {
    constructor();
    password(): {
        hashing: (text: string) => Promise<string>;
        compare: (text: string, hash: string) => Promise<boolean>;
    };
    marked(): Promise<{
        parse: (text: string) => Promise<string>;
    }>;
    /**
     * Generate OTP
     * @param ln Length of OTP (default: 6)
     * @returns 6 digit alphanumeric OTP
     */
    generateOtp(ln?: number): string;
    private passGenSalt;
}
//# sourceMappingURL=index.d.ts.map