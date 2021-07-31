/* 
* 只出现一次的数字：a = [2,3,2,4,4];

* 这里涉及到离散数学的异或运算性质
* 1.交换律：a ^ b ^ c  <=> a ^ c ^ b
* 2.相同的数异或为0: n ^ n => 0
* 3.任何数于0异或为任何数 0 ^ n => n

* 因此上面的例子2 ^ 3  ^ 2 ^ 4 ^ 4等价于  2 ^ 2  ^ 4 ^ 4 ^ 3  =>  0 ^ 0 ^3  => 3
*/
var singleNumber = function(nums) {
  let only = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    only = only ^ nums[i];
  }
  return only;
};

var singleNumber = function(nums) {
  let list = nums.sort();
  let only = null;
  const len = list.length;
  if (len !== 1) {
    for (let i = 0; i < len; i++) {
      if (i === 0 && list[i] !== list[i + 1]) {
        return (only = list[i]);
      } else if (list[i] !== list[i - 1] && list[i] !== list[i + 1]) {
        return (only = list[i]);
      }
    }
  } else {
    only = list[0];
  }
  return only;
};
