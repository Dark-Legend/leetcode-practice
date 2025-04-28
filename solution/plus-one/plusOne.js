var plusOne = function (digits) {
  let str = digits.join("");

  let bigNum = BigInt(str) + BigInt(1);

  let result = Array.from(bigNum.toString(), Number);

  return result;
};
