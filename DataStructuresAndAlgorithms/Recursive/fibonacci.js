/**
 * 递归求斐波那契数
 *
 * @param {*} n
 * @returns
 */
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciIterative(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let fibN1 = 0;
  let fibN2 = 1;

  for (let i = 1; i <= n; i++) {
    fibN = fibN1 + fibN2;
    fibN2 = fibN1;
    fibN1 = fibN;
  }
  return fibN;
}

/**
 * 记忆函数
 * @param {Function} fn 处理的函数
 * @param {any} n
 */
const memorized = (fn) => {
  let cache = {};
  return (n) => {
    if (cache[n] !== undefined) {
      return cache[n];
    } else {
      cache[n] = fn(n);
      return fn(n);
    }
  };
};

const memorizedFibonacci = memorized((n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

// console.log('fibonacci(5) :>> ', fibonacci(9));
// console.log('fibonacci(5) :>> ', fibonacciIterative(9));
console.log('memorizedFibonacci(5) :>> ', memorizedFibonacci(9));
console.log('memorizedFibonacci(10) :>> ', memorizedFibonacci(10));
console.log('memorizedFibonacci(11) :>> ', memorizedFibonacci(11));
