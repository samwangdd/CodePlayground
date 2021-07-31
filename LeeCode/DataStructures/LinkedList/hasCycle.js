/**
 * 是否有环
 *
 */

// ❌ 方法一，暴力枚举
function hasCycle(head) {
  while (head) {
    if (!head) return false;
    head = head.next;
  }
  return true;
}

// ✅ 方法二，Set 判重
function hasCycle2(head) {
  const set = new Set();
  while (head) {
    if (set.has(head)) {
      return true;
    }
    set.add(head);
    head = head.next;
  }
  return false;
}

// 快慢指针
function hasCycle3(head) {
  if (!head || !head.next) {
    return false;
  }
  let slow = head;
  let fast = head;

  // REVIEW: while (slow && fast && fast.next) {
  while (fast && fast.next) {
    slow = head.next;
    fast = head.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
