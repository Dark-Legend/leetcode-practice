var dailyTemperatures = function (arr) {
    const stack = [];
    const answer = Array(arr.length).fill(0);
    
    for (let i = 0; i < arr.length; i++) {
        while (answer.length && arr[i] > arr[stack[stack.length - 1]]) {
            const current = stack.pop();
            answer[current] = i - current
        };
        stack.push(i)
    };


    return answer;
};