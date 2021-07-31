function defaultCompare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

const Compare = {
  BIGGER_THAN: 1,
  LESS_THAN: -1,
  EQUALS: 0,
};

/**
 * 二分搜索，使用分而治之思想解决
 * @param {*} params
 */
function binarySearchRecursive(array, value, low, high, compareFn = defaultCompare) {
  if (low <= high) { // 基准条件
    const mid = Math.floor((low + high) / 2);
    const element = array[mid];
    if (compareFn(element, value) === Compare.BIGGER_THAN) {
      return binarySearchRecursive(array, value, low, mid - 1, compareFn);
    } else if (compareFn(element, value) === Compare.LESS_THAN) {
      return binarySearchRecursive(array, value, mid + 1, high, compareFn);
    } else {
      return mid;
    }
  }

  return -1;
}

const arr = new Array(1, 2, 3, 4, 5);
const result = binarySearchRecursive(arr, 4, 0, 4);
console.log('arr :>> ', arr);
console.log('result :>> ', result);
