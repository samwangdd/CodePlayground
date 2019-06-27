/* 
* 旋转数组 
* 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数
*/

/**
 * 思路一：队列思想，队尾删除，队首新增
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop())
    }
};
/**
 * 找到数组元素的index、旋转次数和数组长度之间的关系
 * 所有的事物一旦可以量化，就可以通过数学找出他们之间的联系
 * 如果有人不认为数学是简单的，那是因为他还没有认识到生活有多复杂 - Von Neumann
 * 
 * @param {number[]} nums 原数组
 * @param {number} k 旋转次数
 * @return {void}
 */
var rotate = function(nums, k) {
  let res = new Array(len)
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (i+k < len -1) {
      res[i+k] = nums[i]
    } else {
      res[(i+k) % len] = nums[i]
    }
  }
  // nums = res
  for(let i = 0; i<len; i++) {
    nums[i] = res[i]
  }
}
