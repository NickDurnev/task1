//What will be the output of the code below?

// the implementation
const logger = (a, b, c) => {
  console.log(a + b == c);
};

// in-source test suites
if (import.meta.vitest) {
  const { it, expect, vi, describe } = import.meta.vitest;
  describe("logger", () => {
    it("notIntegerNumbers", () => {
      const logSpy = vi.spyOn(global.console, "log");
      logger(0.1, 0.2, 0.3);
      expect(logSpy).toHaveBeenCalledWith(false);

      logSpy.mockRestore();
    });
    it("integerNumbers", () => {
      const logSpy = vi.spyOn(global.console, "log");
      logger(1, 2, 3);
      expect(logSpy).toHaveBeenCalledWith(true);

      logSpy.mockRestore();
    });
    it("integerNumbers", () => {
      const logSpy = vi.spyOn(global.console, "log");
      logger(1, 2, 3);
      expect(logSpy).toHaveBeenCalledWith(true);

      logSpy.mockRestore();
    });
  });
}
