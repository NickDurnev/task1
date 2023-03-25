//What is the value

// the implementation
const concat = (a, b) => a + b;

// in-source test suites
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;
  describe("concat", () => {
    it("test1", () => {
      expect(concat(10, "20")).toBe("1020");
      expect(concat(13, "27")).toBe("1327");
      expect(concat(1, "1")).toBe("11");
    });
  });
}
