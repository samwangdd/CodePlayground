/**
 * 两两反转链表，递归
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  // head 表示原链表第一个节点
  // newHead 表示新链表第一个节点
  const newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;

  return newHead;
};

/**
 * 两两反转链表，迭代
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs2 = function (head) {
  const dummyHead = new ListNode(0); // 定义哑节点
  dummyHead.next = head;
  let temp = dummyHead;
  // 哑节点后的两个节点交换
  while (temp.next !== null && temp.next.next !== null) {
    const first = temp.next;
    const second = first.next;
    temp.next = second;
    first.next = second.next;
    second.next = first;
    temp = first; // 继续迭代
  }
  return dummyHead.next; // 返回新链表的头节点
};
