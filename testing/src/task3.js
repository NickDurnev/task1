//What will be returned by each of these?

// the implementation
const consoleLog = () => {
  console.log("hello" || "world");
  console.log("foo" && "bar");
};

// in-source test suites
if (import.meta.vitest) {
  const { it, expect, vi } = import.meta.vitest;
  it("consoleLogs", () => {
    const logSpy = vi.spyOn(global.console, "log");
    consoleLog();
    expect(logSpy).toHaveBeenCalledWith("hello");

    expect(logSpy).toHaveBeenCalledWith("bar");

    logSpy.mockRestore();
  });
}
