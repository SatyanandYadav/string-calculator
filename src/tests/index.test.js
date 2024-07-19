import { describe, it, expect } from "vitest";
import { stringCalculator } from "..";

describe("string calculation", () => {
    it("should return zero if it is empty string", () => {
         expect(stringCalculator("")).toBe(0);
    })

    it("should return first number if it is contains one number string", () => {
        expect(stringCalculator("5")).toBe(5);
   })
})