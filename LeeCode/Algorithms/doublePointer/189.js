/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const len = nums.length;
  k %= len;
  const raw = nums.splice(len - m);
  nums.unshift(...raw);
  return nums;
};

const nums = [1, 2, 3, 4, 5, 6, 7];
console.log('nums :>> ', rotate(nums, 3));
