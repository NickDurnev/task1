//What value is returned?

// the implementation
const reverseString = (string) => string.split("").reverse().join("");

//in-source test suites
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;
  describe("reverseString", () => {
    it("test1", () => {
      expect(reverseString("i'm a lasagna hog")).toBe("goh angasal a m'i");
      expect(reverseString("hello world")).toBe("dlrow olleh");
      expect(reverseString("testing is important")).toBe(
        "tnatropmi si gnitset"
      );
    });
  });
}
