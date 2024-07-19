import { describe, it, expect } from "vitest";
import { add } from "..";

describe("string calculation", () => {
  it("should return zero if it is empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return first number if it is contains one number string", () => {
    expect(add("5")).toBe(5);
  });

  it("should return sum of first two number if a string contains two number separated by ','", () => {
    expect(add("5,3")).toBe(8);
  });

  it("should return sum of all numbers if a string contains numbers separated by ','", () => {
    expect(add("5,3,14,23")).toBe(45);
  });
});
