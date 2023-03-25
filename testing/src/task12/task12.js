//What does the following code print?

const asyncLogger = () => {
  console.log("one");
  setTimeout(function () {
    console.log("two");
  }, 0);
  Promise.resolve().then(function () {
    console.log("three");
  });
  console.log("four");
};

export default asyncLogger;
