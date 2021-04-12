/**
 * 寻找两个正序数组的中位数
 * https://leetcode-cn.com/leetbook/read/tencent/xx6c46/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 方法一，暴力查找
var findMedianSortedArrays = function (nums1, nums2) {
  var arr = nums1.concat(nums2).sort((a, b) => a - b);
  console.log('arr :>> ', arr);
  var rest = arr.length % 2;
  let value = null;
  if (rest === 0) {
    const midIndex = arr.length / 2;
    const preIndex = midIndex - 1;
    value = (arr[midIndex] + arr[preIndex]) / 2;
  } else {
    if (arr.length === 1) {
      value = arr[0];
    } else {
      const midIndex = Math.floor(arr.length / 2);
      value = arr[midIndex];
    }
  }
  return value;
};

const a = [];
const b = [1, 2, 3, 4, 5];
console.log('findMedianSortedArrays :>> ', findMedianSortedArrays(a, b));

// TODO: 方法二，二分查找
