/*
 * 通过循环，reduce，链式方法 的实现来对比
 */
const files = ['foo.txt ', '.bar', '   ', 'baz.foo'];
let filePaths = [];

for (const file of files) {
  const fileName = file.trim();
  if (fileName) {
    const filePath = `~cool_app/${fileName}`;
    filePaths.push(filePath);
  }
}

console.log('filePaths :>> ', filePaths);

const filePaths_2 = files.reduce((acc, cur) => {
  const fileName = cur.trim();
  if (fileName) {
    const filePath = `~cool_app/${fileName}`;
    acc.push(filePath);
  }
  return acc;
}, []);
console.log('filePaths_2 :>> ', filePaths_2);

const filePaths_3 = files
  .map((file) => file.trim())
  .filter(Boolean)
  .map((fileName) => `~cool_app/${fileName}`);
console.log('filePaths_3 :>> ', filePaths_3);
