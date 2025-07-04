export default class ReQurvUtils {
    constructor();
    password: {
        hashing: (text: string) => Promise<string>;
        compare: (text: string, hash: string) => Promise<boolean>;
    };
    marked: {
        parse: (text: string) => Promise<string>;
    };
    /**
     * Generate OTP
     * @param ln Length of OTP (default: 6)
     * @returns 6 digit alphanumeric OTP
     */
    generateOtp(ln?: number, type?: "numeric" | "special" | "alphanumeric"): string;
    generateLicense(length: number, pairs?: number): string;
    csv: {
        loadCsv<T = any>(filePath: string): T[];
    };
    utility: {
        /**
         * Converts a string to a slug.
         * @param str - The string to be converted to a slug.
         * @returns A slugified version of the input string. Spaces are replaced with hyphens
         */
        createSlug: (str: string) => string;
    };
}
//# sourceMappingURL=index.d.ts.map