/**
 * 计算一个数的阶乘
 *
 * @param {number} n
 * @returns {number} 计算结果
 */
function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// 尾递归：尾调用自身，只有一个调用栈，可以节约内寸
function factorial2(n, total) {
  if (n === 1 || n === 0) {
    return total;
  }
  return factorial2(n - 1, n * total);
}

console.log('factorial(5) :>> ', factorial(5));
console.log('factorial2(5) :>> ', factorial2(5, 1));
