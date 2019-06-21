/* 
* 删除排序数组中的重复项
* 首先这是一个排序数组，其次，题目中不用考虑超出新数组长度的元素
* created by wangs
*/

/* 
* 思路一：双重循环
* 外层从左往右循环；内层从右往左，直到循环至外层的起点索引
* 如果内层元素遇到相同与外层元素相等，则删除内层元素
* 该方式容易理解，但是使用两次循环、操作数组，导致性能很糟糕
*
* @params {number[]} nums
* @return {number}
*/
function removeDuplicates(nums) {
  for(let i=0; i<nums.length; i++) {
    for(let j=nums.length-1; j>i; j--) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1)
      }
    }
  }
}

/**
 * 思路二：关注元素不同时的情况
 * 不相同元素的个数count，如果两个元素不一样，则count+1，
 * 并将索引为count+1的值覆盖，但是不会修改原数组，性能良好
 * 
 * @param {*} nums 
 */
function removeDuplicates(nums) {
  let count = 0;
  let len = nums.length;
  for (let i = 1; i < len; i++) {
    if (nums[count] !== nums[i]) {
      count += 1;
      // 将count+1，覆盖
      nums[count] = nums[i];
    }
  }
  return count+1;
};