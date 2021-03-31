/**
 * 两数之和
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 方法一, 暴力枚举
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j];
      }
    }
  }
};

// 方法二, 哈希表
var getTwoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i];
    if (map.has(res)) {
      return [map.get(res), i];
    } else {
      map.set(nums[i], i);
    }
  }
};

console.log('twoSum :>> ', twoSum([2, 7, 11, 15], 9));
