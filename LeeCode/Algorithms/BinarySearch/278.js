/**
 * 第一个错误的版本
 * https://leetcode-cn.com/problems/first-bad-version/
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1,
      right = n;
    while (left < right) {
      // 左闭右开 [left, right)
      const mid = Math.floor(left + (right - left) / 2); // 防止计算时溢出
      if (isBadVersion(mid)) {
        right = mid; // mid 左边可能还有 bad version
      } else {
        left = mid + 1; // bad version 在 mid 右侧
      }
    }
    // 最终将 left, right 收拢为一个值，可以通过画图推断
    return left;
  };
};
