//How would you make this work?

// the implementation
const add = (a, b) => {
  if (b === undefined) {
    return (c) => a + c;
  }
  return a + b;
};

// in-source test suites
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;
  describe("add", () => {
    it("twoArgs", () => {
      expect(add(2, 5)).toBe(7);
      expect(add(10, 5)).toBe(15);
      expect(add(2, 0)).toBe(2);
      expect(add("a", "b")).toBe("ab");
      expect(add([], [])).toBe("");
      expect(add(true, null)).toBe(1);
    });
    it("curry", () => {
      expect(add(2)(5)).toBe(7);
      expect(add(10)(5)).toBe(15);
      expect(add({ a: 1 })({ b: 2 })).toBe("[object Object][object Object]");
      expect(add(NaN)(null)).toBe(NaN);
      expect(add([1])({ a: 1 })).toBe("1[object Object]");
    });
    it("unpredictable cases", () => {
      expect(typeof add(1)).toBe("function");
      expect(typeof add(NaN)).toBe("function");
    });
  });
}
