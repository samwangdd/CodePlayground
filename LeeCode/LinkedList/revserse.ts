/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let cur = head;
  let prev = null;

  while (cur) {
    const next = cur.next; // 暂存 next 元素
    cur.next = prev; // 替换 next 指针，指向 prev 元素
    prev = cur; // 当前元素 cur，称为下一个元素的 pre
    cur = next; // 循环下一个元素
  }

  return prev;
};
