//How would you make this work?

// the implementation
const add = (a, b) => {
  if (!b) {
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
      expect(add(99, 51)).toBe(150);
    });
    it("curry", () => {
      expect(add(2)(5)).toBe(7);
      expect(add(10)(5)).toBe(15);
      expect(add(99)(51)).toBe(150);
    });
  });
}
