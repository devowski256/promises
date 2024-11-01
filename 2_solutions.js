const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const results = Array(promises.length);
    let resolvedCount = 0;

    for (const [i, promise] of Object.entries(promises)) {
      promise
        .then((result) => {
          results[i] = result;
          resolvedCount++;

          if (resolvedCount == promises.length) {
            resolve();
          }
        })
        .catch(reject);
    }
  });
};

const race = (promises) => {
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      promise.then(resolve).catch(reject);
    }
  });
};

const chain = async (fns) => {
  for (const fn of fns) await fn();
};

const chainReduce = (fns) => {
  return fns.reduce((result, fn) => result.then(fn));
};
