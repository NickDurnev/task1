//What will be returned by each of these?

// the implementation
const consoleLog = () => {
  console.log("hello" || "world");
  console.log("foo" && "bar");
};

// in-source test suites
if (import.meta.vitest) {
  const { it, expect, vi, describe } = import.meta.vitest;
  const logSpy = vi.spyOn(global.console, "log");
  describe("task3", () => {
    it("consoleLogs", () => {
      consoleLog();

      expect(logSpy).toHaveBeenCalledTimes(2);

      expect(logSpy).toHaveBeenCalledWith("hello");

      expect(logSpy).toHaveBeenCalledWith("bar");

      logSpy.mockRestore();
    });
  });
}
