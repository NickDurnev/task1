// the implementation
const duplicate = (array) => [...array, ...array]; // [1,2,3,4,5,1,2,3,4,5]

// in-source test suites
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;
  describe("duplicate", () => {
    it("test1", () => {
      expect(duplicate([1, 2, 3, 4, 5])).toStrictEqual([
        1, 2, 3, 4, 5, 1, 2, 3, 4, 5,
      ]);
      expect(duplicate([1, 2])).toStrictEqual([1, 2, 1, 2]);
      expect(duplicate([1, 2, 3])).toStrictEqual([1, 2, 3, 1, 2, 3]);
    });
  });
}
