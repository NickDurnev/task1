//Consider the two functions below. Will they both return the same thing? Why or why not?

// the implementation
function foo1() {
  return {
    bar: "hello",
  };
}

function foo2() {
  return;
  // {
  //   bar: "hello";
  // }
}

// in-source test suites
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;
  describe("isReturnSmth", () => {
    it("foo1", () => {
      expect(foo1()).toStrictEqual({ bar: "hello" });
    });

    it("foo2", () => {
      expect(foo2()).toBe(undefined);
    });
  });
}
