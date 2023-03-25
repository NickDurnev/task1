//What is the value of foo.length?

// the implementation
const fooLength = () => {
  var foo = [];
  foo.push(1);
  foo.push(2);
  return foo.length;
};

// in-source test suites
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;
  describe("fooLength", () => {
    it("test1", () => {
      expect(fooLength()).toBe(2);
    });
  });
}
