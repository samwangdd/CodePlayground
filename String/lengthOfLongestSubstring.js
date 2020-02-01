/**
 * 无重复最长子字符串
 * @param {string} s
 * 滑动窗口
 */
function lengthOfLongestSubstring(s) {
  let len = 0; // 最长无重复子串的长度
  let str = ''; // 当前无重复子串，即窗口
  const l = s.length; // 目标字符串的长度
  for (let i = 0; i < l; i++) {
    let chart = s[i];
    let index = str.indexOf(chart); // 找出chart在窗口中的位置
    if (index === -1) {
      str += chart; // 如果chart不在窗口中，则扩大窗口
      len = len < str.length ? str.length : len; // 窗口中子串的长度和len之间取最大值
    } else {
      // 如果chart在窗口中，则表示字符重复，重新给str赋值
      // substring表示截取字符串，但不应该包含当前位置，所以要index+1
      str = str.substring(index + 1) + chart;
    }
  }
  return len;
}

console.log('lengthOfLongestSubstring :', lengthOfLongestSubstring('pwwkewn'));
