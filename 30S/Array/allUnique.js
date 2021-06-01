// Checks if all elements in an array are unique.
const allUnique = (arr) => arr.length === new Set(arr).size;

console.log('object :>> ', allUnique([1, 2, 3, 4]));
console.log('object :>> ', allUnique([1, 1, 3, 4]));
