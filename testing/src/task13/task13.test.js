import { expect, describe, it } from "vitest";
import { promise1, promise2, promise3, promise4 } from "./task13";

describe("promises", () => {
  it("promise1", async () => {
    await expect(promise1()).resolves.toBe("do something else");
  });
  it("promise2", async () => {
    await expect(promise2()).resolves.toBe(undefined);
  });
  it("promise3", async () => {
    await expect(promise3()).not.resolves.toBe("do something else");
  });
  it("promise4", async () => {
    await expect(promise4()).resolves.toBe("arg from Promise");
  });
});
