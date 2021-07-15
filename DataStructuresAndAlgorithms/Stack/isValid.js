// https://leetcode-cn.com/problems/valid-parentheses/solution/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  const map = { '(': ')', '{': '}', '[': ']' };

  for (const x of s) {
    if (x in map) {
      stack.push(x);
      continue; // 跳出本次循环，开始下一次循环
      // brake 终止循环
    }

    if (x !== map(stack.pop())) {
      return false; // return 终止函数，也终止了循环
    }
  }

  return !stack.length;
};
