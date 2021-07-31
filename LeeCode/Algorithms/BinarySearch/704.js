/**
 * 二分查找
 * https://leetcode-cn.com/problems/binary-search/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-er-fe-5a77/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 左闭右闭 [left, right]
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = (right + left) >> 1;
    if (nums[min] === target) {
      return mid;
    }
    let isSmall = nums[mid] < target;
    left = isSmall ? mid + 1 : left;
    right = isSmall ? right : mid - 1;
  }

  return -1;
};
