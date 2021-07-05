// 已知listA, listB两个Array，都由int组成，需要筛选出两个Array的交集
const listA = [1, 2, 3, 4, 5];
const listB = [2, 3, 4];

const checkDataExist = (list) => (target) => list.some((val) => val === target);

const ifDataExist = checkDataExist(listB);

const intersectList = listA.filter((val) => ifDataExist(val));

console.log('intersectList :>> ', intersectList);
