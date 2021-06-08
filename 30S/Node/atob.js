// 解码 base64 格式的字符串
const atob = (str) => Buffer.from(str, 'base64').toString('binary');
console.log('atob : >>', atob('Zm9vYmFy'));
