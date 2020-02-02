/**
 * 无重复最长子字符串
 * @param {string} s
 * 滑动窗口
 */
function lengthOfLongestSubstring(s) {
  let maxLen = 0; // 最长无重复子串的长度
  let logestSubStr = ''; // 当前无重复子串，即窗口
  const l = s.length; // 目标字符串的长度
  for (let i = 0; i < l; i++) {
    let chart = s[i];
    let index = logestSubStr.indexOf(chart); // 找出chart在窗口中的位置
    if (index === -1) {
      logestSubStr += chart; // 如果chart不在窗口中，则扩大窗口
      maxLen = maxLen < logestSubStr.length ? logestSubStr.length : maxLen; // 更新maxLen；窗口中子串的长度和len之间取最大值，如测试用例："nfpdmpi"
    } else {
      // 如果chart在窗口中，则表示字符重复，重新给logestSubStr赋值
      // substring表示截取字符串，但不应该包含当前位置，所以要index+1
      logestSubStr = logestSubStr.substring(index + 1) + chart;
    }
  }
  console.log('logestSubStr :', logestSubStr);
  return maxLen;
}

console.log('lengthOfLongestSubstring :', lengthOfLongestSubstring('nfpdmpi'));
