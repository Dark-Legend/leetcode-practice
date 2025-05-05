var finalPrices = function (prices) {
  const result = [];

  for (let i = 0; i < price.length; i++) {
    for (let j = i; j < price.length; j++) {
      if (j > i && price[j] <= price[i]) {
        const discount = price[i] - price[j];
        result.push(discount);
        break;
      }

      if (j === price.length - 1) {
        result.push(price[i]);
      }
    }
  }
  return result;
};
