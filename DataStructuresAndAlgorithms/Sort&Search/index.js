function defaultCompare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a必须等于b
  return 0;
}

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};

// 方式一，冒泡排序：双重循环，元素向上移动至正确的位置，就好像气泡升至表面一样
function bubbleSort(array, compareFn = defaultCompare) {
  const { length } = array;
  // 外循环：每个元素都要循环，判断是否要交换位置
  for (let i = 0; i < length; i++) {
    // 内循环：与它下一个元素比较
    // 数字都要比较 length - 1 次；优化改进后已经正确的位置就不再比较了
    for (let j = 0; j < length - 1 - i; j++) {
      // 如果左侧的元素比右侧大，则交换位置
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

// 交换数组元素顺序
function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}

// 创建倒序数组
function createNonStoredArray(size) {
  const array = [];
  for (let i = size; i > 0; i--) {
    array.push(i);
  }
  return array;
}

// 方式二，选择排序：找到数据结构中的最小值，并将其放置在第一位，接着找到第二小的值...
function selectionSort(array, compareFn = defaultCompare) {
  const { length } = array;
  let indexMin;
  // 外循环
  for (let i = 0; i < length - 1; i++) {
    indexMin = i; // 假设本迭代的第一个值，为当前的最小值
    // 内循环，找到最小值
    for (let j = i; j < length; j++) {
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        indexMin = j; // 交换最小值的序号
      }
    }
    // 如果最小值并不是 i，则交换值
    if (i !== indexMin) {
      swap(array, i, indexMin);
    }
  }
  return array;
}

// 方式三，插入排序：假设第一个值已经排好序，第二项与它比较应该放置在哪里？
function insertionSort(array, compareFn = defaultCompare) {
  const len = array.length;
  let temp; // 用变量保存模版值！
  // 假设第一个值已经排好了
  for (let i = 1; i < len; i++) {
    let j = i;
    temp = array[i];
    // 如果前一个值大于模版值，则调换位置；同时 j 减小，向前移动，直到j <= 0
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }
  return array;
}

// 方式四，归并排序
// 分治思想，将数组拆分成小数组，递归调用，直到每个数组只有一个元素
function mergeSort(array, compareFn = defaultCompare) {
  // 递归基线条件
  if (array.length > 1) {
    const length = array.length;
    const middle = Math.floor(length / 2);
    const left = mergeSort(array.slice(0, middle), compareFn);
    const right = mergeSort(array.slice(middle, length), compareFn);
    array = merge(left, right, compareFn);
  }
  return array;
}

// 归并排序辅助函数，负责排序与合并数组
function merge(left, right, compareFn = defaultCompare) {
  let i = 0;
  let j = 0;
  const result = [];
  // 每一次递归调用都会遍历，但是调用和执行顺序是相反的
  // i 或 j 至少有一个完成了遍历
  while (i < left.length && j < right.length) {
    result.push(compareFn(left[i], right[j]) === Compare.BIGGER_THAN ? right[j++] : left[i++]);
  }
  // !! result将合并剩下的元素，i < left.length 说明left还没有循环完，这时 right 已经遍历完成
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

// 快速排序：http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  // 找到主元的序号
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0]; // ！！改变了原数组长度
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    // 小于主元的放在left, 大于主元的放在right
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // 递归调用
  return quickSort(left).concat([pivot], quickSort(right));
}

// 二分搜索，迭代版本
function BinarySearch(array, targetVal, compareFn = defaultCompare) {
  const sortArray = quickSort(array); // 排序
  let low = 0;
  let high = sortArray.length - 1;
  while (lesserOrEquals(low, high, compareFn)) {
    const mid = Math.floor((low + high) / 2);
    const element = sortArray[mid]; // 找到中间值
    if (compareFn(element, targetVal) === Compare.BIGGER_THAN) {
      high = mid - 1;
    } else if (compareFn(element, targetVal) === Compare.LESS_THAN) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function lesserOrEquals(low, high, compareFn = defaultCompare) {
  const comp = compareFn(low, high);
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

let array = createNonStoredArray(5);
console.log('array :>> ', array);
// array = bubbleSort(array);
// array = selectionSort(array);
// array = insertionSort(array);
// array = mergeSort(array);
array = quickSort(array);
console.log('sorted array :>> ', array);
