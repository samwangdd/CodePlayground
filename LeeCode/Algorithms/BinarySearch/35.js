/**
 * 搜索插入位置
 * https://leetcode-cn.com/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 方法一，二分法
var searchInsert = function (nums, target) {
  const n = nums.length;
  let left = 0,
    right = n - 1,
    ans = n; // 如果 target 比最后一个元素还大

  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (target <= nums[mid]) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};

// 方法二
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
    if (i == nums.length - 1) {
      return nums.length;
    }
  }
};
