var addTwoNumbers = function(l1, l2) {
  const result = new ListNode();

  for (let tail = result, carry = 0; l1 || l2 || carry;) {
    const value = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    tail.next = new ListNode(value % 10);
    tail = tail.next;
    carry = value >= 10 ? 1 : 0;
    [l1, l2] = [l1 && l1.next, l2 && l2.next];
  }

  return result.next;
};