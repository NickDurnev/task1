//Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(i, `${!(i % 3) ? "fizz" : ""}${!(i % 5) ? "buzz" : ""}`);
  }
};

export default fizzBuzz;
