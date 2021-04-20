/**
 * 最长回文子串
 * https://leetcode-cn.com/leetbook/read/tencent/xxk4s2/
 * @param {string} s
 * @return {string}
 */

// 方法一：中心扩散，如果回文，中心两边是对称的（相等）
var longestPalindrome = function (str) {
  const length = str.length;
  let start = 0,
    end = 0;

  // 中心扩散，返回回文长度
  let centerExpend = (left, right) => {
    while (left >= 0 && right < length && str[left] === str[right]) {
      left--;
      right++;
    }
    // 为什么 -1 ？
    return right - left - 1;
  };

  for (let i = 0; i < length; i++) {
    const len1 = centerExpend(i, i);
    const len2 = centerExpend(i, i + 1);

    let maxLen = Math.max(len1, len2);
    if (maxLen > end - start) {
      // 为什么 maxLen - 1 ？
      start = i - ((maxLen - 1) >> 1);
      end = i + (maxLen >> 1);
      console.log('start :>> ', start);
      console.log('end :>> ', end);
    }
    console.log('maxLen :>> ', maxLen);
  }
  // 为什么 +1 ？要包含 end
  return str.substring(start, end + 1);
};

var a = 'ac';
console.log('longestPalindrome :>> ', longestPalindrome(a));

// 方法二，动态规划
