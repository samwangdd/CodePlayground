// Returns an array of lines from the specified file.
// 从指定文件中将每行内容组成数组返回
const fs = require('fs');
const readFileLines = (fileName) =>
  fs
    .readFileSync(__dirname + fileName)
    .toString('UTF-8')
    .split('\n');

let arr = readFileLines('/test.txt');
console.log('arr', arr);
