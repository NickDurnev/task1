//What is the difference between these four promises?

const doSomething = async () => "resolved";

const doSomethingElse = (string) => {
  return string ? "arg from Promise" : "do something else";
};

export const promise1 = async () => {
  return doSomething().then(function () {
    return doSomethingElse();
  });
};

export const promise2 = async () => {
  return doSomething().then(function () {
    doSomethingElse();
  });
};

export const promise3 = async () => {
  return doSomething().then(doSomethingElse());
};

export const promise4 = async () => {
  return doSomething().then(doSomethingElse);
};
