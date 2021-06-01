/**
 * 过滤指定元素，同时改变原数组
 *
 * @param {*} arr
 * @param {*} args
 */
const pull = (arr, ...args) => {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter((v) => !argState.includes(v));
  arr.length = 0;
  pulled.forEach((v) => arr.push(v));
};

let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
pull(myArray, ['a', 'c']);
console.log('myArray :>> ', myArray);
