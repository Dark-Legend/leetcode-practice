var isValid = function (str) {
  const stack = [];

  for (let i = 0; i < str?.length; i++) {
    const currentChar = str[i];

    if (stack.length) {
      const lastChar = stack[stack.length - 1];
      if (isHaveParantheses(lastChar, currentChar)) {
        stack.pop();
        continue;
      }
    }
    stack.push(currentChar);
  }

  return stack.length === 0;
};

const isHaveParantheses = (last, current) => {
  if (!last || !current) return false;

  return (
    (last === "{" && current === "}") ||
    (last === "(" && current === ")") ||
    (last === "[" && current === "]")
  );
};
