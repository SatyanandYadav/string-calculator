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

  it("should return sum of all numbers if a string contains numbers separated by ',' or '\\n'", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it("should return sum of all numbers if a string contains numbers separated given delimiter ';'", () => {
    expect(add("//;\n1;2;3;4")).toBe(10);
  });

  it("should return sum of all numbers if a string contains numbers separated given delimiter '?'", () => {
    expect(add("//?\n1?2?3?4")).toBe(10);
  });

  it("should return sum of all numbers if a string contains numbers separated given delimiter '!'", () => {
    expect(add("//!\n1!2!3!4")).toBe(10);
  });

  it("should throw an error if a string contains a single negative numbers", () => {
    expect(() => add("//!\n1!2!-3!4")).toThrow(
      "negative numbers not allowed -3."
    );
  });

  it("should throw an error if a string contains a multiple negative numbers", () => {
    expect(() => add("1\n2,-3,4,-5,-6,7")).toThrow(
      "negative numbers not allowed -3,-5,-6."
    );
  });

  it("should return sum of all numbers except numbers greater than 1000 in numbers string", () => {
    expect(add("//;\n1;2;1001;1010")).toBe(3);
  });
});
