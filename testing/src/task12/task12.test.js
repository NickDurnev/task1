import { it, expect, vi, describe } from "vitest";
import asyncLogger from "./task12";

vi.useFakeTimers();
vi.spyOn(global, "setTimeout");

describe("asyncLogger", () => {
  it("test1", async () => {
    const logSpy = vi.spyOn(global.console, "log").mockImplementation();

    asyncLogger();
    expect(logSpy).toHaveBeenNthCalledWith(1, "one");

    expect(logSpy).toHaveBeenNthCalledWith(2, "four");

    await expect(new Promise(() => {})).resolves;
    expect(logSpy).toHaveBeenNthCalledWith(3, "three");

    vi.runAllTimers();
    expect(logSpy).toHaveBeenNthCalledWith(4, "two");

    logSpy.mockRestore();
  });
});
