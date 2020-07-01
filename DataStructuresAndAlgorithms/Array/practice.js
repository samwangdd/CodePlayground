const arr = [10, 11, 12, 13, 14, 15, 16, 17];
function push(items) {
  arr.push(items);
}
function addItemstart(items) {
    arr.unshift(items);
}
function pop(item) {
  arr.pop();
}
function deleteItemStart(item) {
    arr.shift()
}
function splice(item) {
    arr.splice(2, 3, 4)
}
splice();
console.log('arr :>> ', arr);
