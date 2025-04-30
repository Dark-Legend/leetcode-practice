const productOfArray = (arr) => {
  let result = new Array(arr.length).fill(1);

  let prefix = 1;
  for (let i = 0; i < arr.length; i++) {
    result[i] = prefix;
    prefix *= arr[i];
  }

  let suffix = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= arr[i];
  }

  return result;
};

console.log(productOfArray([1, 2, 3, 4]));
