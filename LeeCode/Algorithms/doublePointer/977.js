/**
 * @param {number[]} nums
 * @return {number[]}
 */
// js 方法
var sortedSquares = function (nums) {
  return nums.map((i) => i * i).sort((a, b) => a - b);
};

var sortedSquares = function (nums) {
  let res = [];
  for (let i = 0, j = nums.length - 1; i <= j; ) {
    const left = Math.abs(nums[i]);
    const right = Math.abs(nums[j]);
    if (right > left) {
      res.unshift(right * right);
      j--;
    } else {
      res.unshift(left * left);
      i++;
    }
  }
  return res;
};

// 双指针
var sortedSquares = function (nums) {
  let k = nums.length - 1; // k 为数组最后一位
  let res = new Array(k);
  let i = 0,
    j = k;
  while (i <= j) {
    if (nums[i] * nums[i] > nums[j] * nums[j]) {
      res[k--] = nums[i] * nums[i];
      i++;
    } else {
      res[k--] = nums[j] * nums[j];
      j--;
    }
  }
  return res;
};

const arr = [-7, -3, 2, 3, 11];
const res = sortedSquares(arr);
console.log('res :>> ', res);
