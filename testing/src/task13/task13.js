//What is the difference between these four promises?

const doSomething = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved");
    }, 1000);
  });
};

const doSomethingElse = (string) => {
  return string ? "arg from Promise" : "do something else";
};

export const promise1 = async () => {
  return doSomething()
    .then(function () {
      return doSomethingElse();
    })
    .then((string) => string);
};

export const promise2 = async () => {
  return doSomething()
    .then(function () {
      doSomethingElse();
    })
    .then((string) => string);
};

export const promise3 = async () => {
  return doSomething().then(doSomethingElse());
};

export const promise4 = async () => {
  return doSomething()
    .then(doSomethingElse)
    .then((string) => string);
};
