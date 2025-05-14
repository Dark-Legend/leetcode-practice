var asteroidCollision = function (asteroids) {
  const stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    let collision = true;
    const element = asteroids[i];
    while (
      collision &&
      element < 0 &&
      stack.length &&
      stack[stack.length - 1] > 0
    ) {
      const top = stack[stack.length - 1];

      if (top < -element) {
        stack.pop();
      } else if (top === -element) {
        stack.pop();
        collision = false;
      } else {
        collision = false;
      }
    }
    if (collision) {
      stack.push(element);
    }
  }
  return stack;
};
