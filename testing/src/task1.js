// the implementation
const duplicate = (array) => [...array, ...array]; // [1,2,3,4,5,1,2,3,4,5]

// in-source test suites
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;
  describe("duplicate", () => {
    it("predictable cases", () => {
      expect(duplicate([1, 2, 3, 4, 5])).toStrictEqual([
        1, 2, 3, 4, 5, 1, 2, 3, 4, 5,
      ]);
      expect(duplicate([1, 2, 3])).toStrictEqual([1, 2, 3, 1, 2, 3]);
      expect(duplicate(["a", "b", "hello"])).toStrictEqual([
        "a",
        "b",
        "hello",
        "a",
        "b",
        "hello",
      ]);
    });
    it("unpredictable cases", () => {
      expect(duplicate([{ a: 1, b: 2 }, { c: 3 }])).toStrictEqual([
        { a: 1, b: 2 },
        { c: 3 },
        { a: 1, b: 2 },
        { c: 3 },
      ]);
      expect(duplicate([[], [[1]]])).toStrictEqual([[], [[1]], [], [[1]]]);
      expect(duplicate("a")).toEqual(["a", "a"]);
    });
    it("invalid cases", () => {
      expect(() => duplicate(NaN)).toThrow(/is not iterable/);
      expect(() => duplicate(null)).toThrow(/is not iterable/);
      expect(() => duplicate(false)).toThrow(/is not iterable/);
      expect(() => duplicate(1)).toThrow(/is not iterable/);
    });
  });
}
