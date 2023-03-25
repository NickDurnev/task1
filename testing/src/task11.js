//What is the value of foo.x?

// the implementation
const foo = () => {
  var foo = { n: 1 };
  var bar = foo;
  foo.x = foo = { n: 2 };
  return foo;
};

// in-source test suites
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;
  describe("foo", () => {
    it("test1", () => {
      expect(foo().x).toBe(undefined);
    });
  });
}
