const evalRPN = (tokens) => {
  const stack = [];
  let result = 0;

  for (let token of tokens) {
    if (token === "+") {
      const firstNum = stack.pop();
      const secondNum = stack.pop();
      const expression = secondNum + firstNum;
      result = expression;
      stack.push(expression);
      continue;
    }
    if (token === "-") {
      const firstNum = stack.pop();
      const secondNum = stack.pop();
      const expression = secondNum - firstNum;
      result = expression;
      stack.push(expression);
      continue;
    }
    if (token === "*") {
      console.log(stack, "*");
      const firstNum = stack.pop();
      const secondNum = stack.pop();
      const expression = secondNum * firstNum;
      result = expression;
      stack.push(expression);
      continue;
    }
    if (token === "/") {
      const firstNum = stack.pop();
      const secondNum = stack.pop();
      const expression = secondNum / firstNum;
      result = expression;
      stack.push(Math.trunc(expression));
      continue;
    }
    stack.push(Number(token));
  }
  return Math.floor(result);
};
