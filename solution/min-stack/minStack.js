var MinStack = function () {
  this.stack = [];
};

MinStack.prototype.push = function (val) {
  this.stack.push(val);
};

MinStack.prototype.pop = function () {
  const poppedItem = this.stack.pop();
  return poppedItem;
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  const min = Math.min(...this.stack);
  return min;
};
