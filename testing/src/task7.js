//What value is returned?

// the implementation
const reverseString = (string) => string.split("").reverse().join("");

//in-source test suites
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;
  describe("reverseString", () => {
    it("predictable cases with string", () => {
      expect(reverseString("i'm a lasagna hog")).toBe("goh angasal a m'i");
      expect(reverseString("hello world")).toBe("dlrow olleh");
      expect(reverseString("testing is important")).toBe(
        "tnatropmi si gnitset"
      );
      expect(reverseString("")).toBe("");
    });
    it("invalid cases", () => {
      expect(() => reverseString([1])).toThrow(/is not a function/);
      expect(() => reverseString({ a: 5 })).toThrow(/is not a function/);
      expect(() => reverseString(1)).toThrow(/is not a function/);
      expect(() => reverseString(true)).toThrow(/is not a function/);
      expect(() => reverseString(NaN)).toThrow(/is not a function/);
      expect(() => reverseString(null)).toThrow(
        /Cannot read properties of null/
      );
    });
  });
}
