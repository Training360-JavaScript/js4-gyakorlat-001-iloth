const sorterPromise = (arr = []) =>
  new Promise((resolve, reject) => {
    if (arr.every((item) => typeof item === 'string')) {
      resolve(arr.sort(new Intl.Collator('hu').compare));
    } else {
      reject('Error: Not all elements are string type!');
    }
  });

export default sorterPromise;
