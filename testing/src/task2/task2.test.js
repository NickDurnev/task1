import { it, expect, describe, vi } from "vitest";
import fizzBuzz from "./task2";

describe("fizzBuzz", () => {
  it("consoleLogs", () => {
    console.log = vi.fn();
    fizzBuzz();

    expect(console.log).not.toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledTimes(100);
    expect(console.log.mock.calls[2][0]).toEqual(3, "fizz");
    expect(console.log.mock.calls[4][0]).toEqual(5, "buzz");
    expect(console.log.mock.calls[8][0]).toEqual(9, "buzz");
    expect(console.log.mock.calls[14][0]).toEqual(15, "fizzbuzz");
    expect(console.log.mock.calls[44][0]).toEqual(45, "fizzbuzz");
    expect(console.log.mock.calls[69][0]).toEqual(70, "buzz");
    expect(console.log.mock.calls[80][0]).toEqual(81, "fizzbuzz");
    expect(console.log.mock.calls[86][0]).toEqual(87, "fizz");
    expect(console.log.mock.calls[98][0]).toEqual(99, "fizz");
  });
});
