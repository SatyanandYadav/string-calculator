import { describe, it, expect } from "vitest";
import { stringCalculator } from "..";

describe("string calculation", () => {
    it("should return zero if it is empty string", () => {
         expect(stringCalculator("")).toBe(0);
    })
})