//What is the value

// the implementation
const concat = (a, b) => a + b;

// in-source test suites
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;
  describe("concat", () => {
    it("predictable cases", () => {
      expect(concat(10, "20")).toBe("1020");
      expect(concat("13", "27")).toBe("1327");
      expect(concat(1, 3)).toBe(4);
    });
    it("unpredictable cases", () => {
      expect(concat([], [])).toBe("");
      expect(concat({ a: 1 }, { b: 2 })).toBe("[object Object][object Object]");
      expect(concat(["1"], ["2"])).toBe("12");
      expect(concat([5], [6])).toBe("56");
      expect(concat(true, false)).toBe(1);
      expect(concat(1)).toBe(NaN);
      expect(concat(null)).toBe(NaN);
      expect(concat(null, null)).toBe(0);
      expect(concat([])).toBe("undefined");
      expect(concat({ a: 1 })).toBe("[object Object]undefined");
    });
  });
}
