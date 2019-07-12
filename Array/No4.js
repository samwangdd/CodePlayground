/*
  * 存在重复
  * 给定一个整数数组，判断是否存在重复元素
  * nums = [1, 2, 3, 1]
  * Set生成一个{1, 2, 3}的数据格式
*/
var containsDuplicate = function(nums) {
  const set = new Set(nums);
  return set.size < nums.length;
}
