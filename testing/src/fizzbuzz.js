//Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

// the implementation
export const fizzBuzz = () => {
  let logs = [];
  for (let i = 1; i <= 100; i++) {
    const string = `${!(i % 3) ? "fizz" : ""}${!(i % 5) ? "buzz" : ""}`;
    logs.push(`${i},${string}`);
    console.log(string);
  }
  return logs.filter((string) => string.length > 4);
};

const fizzCount = [
  3, 6, 9, 12, 18, 21, 24, 27, 33, 36, 39, 42, 48, 51, 54, 57, 63, 66, 69, 72,
  78, 81, 84, 87, 93, 96, 99,
];

const buzzCount = [5, 10, 20, 25, 35, 40, 50, 55, 65, 70, 80, 85, 95, 100];

const fizzBuzzCount = [15, 30, 45, 60, 75, 90];

// in-source test suites
if (import.meta.vitest) {
  const { it, expect, vi } = import.meta.vitest;
  it("fizzBuzzLogs", () => {
    const logSpy = vi.spyOn(global.console, "log");
    fizzBuzz();
    expect(logSpy).toHaveBeenCalledWith("fizz");

    expect(logSpy).toHaveBeenCalledWith("buzz");

    expect(logSpy).toHaveBeenCalledWith("fizzbuzz");

    logSpy.mockRestore();
  });
  it("fizzBuzzCounts", () => {
    const fizzResult = fizzBuzz().filter(
      (string) => string.includes("fizz") & !string.includes("fizzbuzz")
    );
    const buzzResult = fizzBuzz().filter(
      (string) => string.includes("buzz") & !string.includes("fizzbuzz")
    );
    const fizzBuzzResult = fizzBuzz().filter((string) =>
      string.includes("fizzbuzz")
    );
    expect(fizzResult).toStrictEqual(fizzCount.map((count) => `${count},fizz`));
    expect(buzzResult).toStrictEqual(buzzCount.map((count) => `${count},buzz`));
    expect(fizzBuzzResult).toStrictEqual(
      fizzBuzzCount.map((count) => `${count},fizzbuzz`)
    );
  });
}
