"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const index_1 = __importDefault(require("../index"));
describe("requrv-class", () => {
    const requrv = new index_1.default();
    describe("password", () => {
        const password = "test123";
        describe("generateHash", () => {
            it("should generate a hash for the password", async () => {
                const hashed = await requrv.password.hashing(password);
                expect(hashed.length).toBeGreaterThan(password.length);
            });
        });
        describe("checkPassword", () => {
            it("should return true if the password matches the hash", async () => {
                const hashed = await requrv.password.hashing(password);
                const check = await requrv.password.compare(password, hashed);
                expect(check).toBeTruthy();
            });
        });
    });
    describe("marked", () => {
        it("should return HTML", async () => {
            const text = "Hello **World**!<script>alert('test');</script>";
            const html = await requrv.marked.parse(text);
            expect(html.replace(/\s/, " ")).toMatch("<p>Hello <strong>World</strong>!</p>");
        });
    });
    describe("OTP", () => {
        it("should generate a OTP", () => {
            const otp = requrv.generateOtp();
            expect(otp).toHaveLength(6);
        });
    });
    describe("Generate License", () => {
        it("should generate a OTP", () => {
            const license = requrv.generateLicense(32);
            expect(license).toMatch(/^([A-Z0-9]+-){7}([A-Z0-9]+$)/);
        });
    });
    describe("utility", () => {
        it("should return slug string", async () => {
            const text = "Hello World";
            const slug = await requrv.utility.createSlug(text);
            expect(slug).toMatch("hello-world");
        });
    });
    describe("csv", () => {
        it("should return json object", async () => {
            const csvPath = (0, path_1.resolve)(__dirname, "../../file_test/username.csv");
            const result = requrv.csv.loadCsv(csvPath);
            const first = result[0];
            expect(first.Username).toMatch("booker12");
        });
    });
});
