//What is the value of window.foo?

// in-source test suites
const windowProperty = () => window.foo || (window.foo = "bar");

// in-source test suites
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;
  describe("windowProperty", () => {
    it("foo", () => {
      expect(windowProperty()).toBe("bar");
    });
  });
}
