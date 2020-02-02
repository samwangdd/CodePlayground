/* 两个数组的交集 II 

示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]

*/

/**
 * 方法一：先排序，再从左开始比较两个数据，利用指针控制剩余的元素
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var intersect = function(nums1, nums2) {
  // 利用sort()实现递增排序
  nums1.sort((E1, E2) => E1 - E2);
  nums2.sort((E1, E2) => E1 - E2);
  let result = [];
  // 指针
  let n1 = 0;
  let n2 = 0;
  while (n1 < num1.length && n2 < nums2.length) {
    if (num1[n1] == num2[n2]) {
      result.push(nums1[n1]);
      n1++;
      n2++;
    } else if (nums1[n1] > nums2[n2]) {
      n2++;
    } else {
      n1++;
    }
  }
  return result;
};

/**
 * 方法二
 * @param {*} nums1
 * @param {*} nums2
 */
var intersect = function(nums1, nums2) {
  let newArr = [];
  // 循环nums2
  for (let i = 0; i < nums1.length; i++) {
    // 如果nums1[i]也存在于nums2，返回下标
    if (num2.indexOf(num1[i]) !== -1) {
      // 将nums1[i]加入到newArr
      newArr.push(nums1[i]);
      // 同时从nums2中删除
      nums2.splice(num2.indexOf(num1[i]), 1);
    }
  }
  return newArr;
};
