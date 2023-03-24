//What is the outcome of the two alerts below?

// in-source test suites
const showAlert = () => {
  var foo = "Hello";
  (function () {
    var bar = " World";
    alert(foo + bar);
  })();
  alert(foo + bar);
};

// in-source test suites
if (import.meta.vitest) {
  const { it, expect, vi } = import.meta.vitest;
  const alertSpy = vi.spyOn(window, "alert");
  it("alerts", () => {
    try {
      showAlert();
      expect(alertSpy).toHaveBeenCalledTimes(1);
      expect(alertSpy).toHaveBeenCalledWith("Hello World");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("bar is not defined");
    }
  });
}
