// the implementation
const duplicate = (array) => [...array, ...array]; // [1,2,3,4,5,1,2,3,4,5]

// in-source test suites
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("duplicate", () => {
    expect(duplicate([1, 2, 3, 4, 5])).toStrictEqual([
      1, 2, 3, 4, 5, 1, 2, 3, 4, 5,
    ]);
    expect(duplicate([1, 2])).toStrictEqual([1, 2, 1, 2]);
    expect(duplicate([1, 2, 3])).toStrictEqual([1, 2, 3, 1, 2, 3]);
  });
}

console.log(duplicate([1, 2, 3]));
