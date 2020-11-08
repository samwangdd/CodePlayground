/**
 * 利用 Promise 与 setTimeout 创建一个延迟执行的函数
 *
 * @param {*} duration 延迟执行时间
 * @returns
 */
function sleep(duration) {
  return new Promise((resolve) => {
    console.log('b :>> ');
    setTimeout(resolve, duration);
  });
}

console.log('a :>> ');

sleep(5000).then(console.log('c :>> '));
