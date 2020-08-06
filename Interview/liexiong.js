/**
 * 用于对象数组去重
 *
 * @param {Array} arr
 */
/* function deduplication(arr) {
  const hash = new WeakMap();
  const res = [];
  arr.forEach((i) => {
    if (hash.has(i)) return;
    res.push(i);
    hash.set(i, true);
  });
  return res;
} */
function deduplication(arr) {
  return arr.reduce((acc, cur) => {
    const ids = acc.map((i) => i.id);
    return ids.includes(cur.id) ? acc : [...acc, cur];
  }, []);
}

const result = deduplication(responseList);
console.log('result :>> ', result);

// 说出下面代码的执行顺序
async function async1() {
  console.log(1);
  const result = await async2();
  console.log(3);
}

async function async2() {
  console.log(2);
  /* // 变体
  Promise.resolve().then(() => {
    console.log(2);
  }); */
}

Promise.resolve().then(() => {
  console.log(4);
});

setTimeout(() => {
  console.log(5);
});

async1();
console.log(6);
/* -------- 数组去重 -------- */
const arr = [1, 2, 3, 5, 3, 7, 1, 0];
// 方式一：Set
const new_arr1 = Array.from(new Set(arr));
// 方式二：reduce
const new_arr2 = arr.reduce((acc, cur) => {
  if (!acc.includes(cur)) {
    return acc.concat(cur);
  } else {
    return acc;
  }
}, []);
// 方式三：for...of
const new_arr3 = [];
for (const i of arr) {
  if (!new_arr3.includes(i)) {
    new_arr3.push(i);
  }
}
// 方式四：双层循环
const new_arr4 = [...arr];
for (let i = 0; i < new_arr4.length; i++) {
  for (let j = i + 1; j < new_arr4.length; j++) {
    if (new_arr4[i] === new_arr4[j]) {
      new_arr4.splice(j, 1);
      j--;
    }
  }
}

console.log('new_arr :>> ', new_arr4);
