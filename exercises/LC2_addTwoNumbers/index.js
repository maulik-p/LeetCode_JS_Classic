// You are given two non-empty linked lists representing two non-negative
// integers. The digits are stored in reverse order and each of their nodes
// contain a single digit. Add the two numbers and return it as a linked list.
// --- Example
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function linkToPreviousNode(number, index) {
  if (number.length > 1) {
    number[index - 1].next = number[index];
  }
}
/**
 * Time Complexity:  O(max(l1.length, l2.length))
 * Space Complexity: sum(number l1 + number l2)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns
 */
function addTwoNumbers(l1, l2) {
  let number = [];
  let carry = 0;
  let index = 0;
  while (l1 !== null || l2 !== null) {
    let tempSum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + +carry;
    // Reset Carry
    carry = 0;

    // Push last digit of sum
    number.push(new ListNode(+tempSum % 10, null));
    linkToPreviousNode(number, index);

    // Take out Carry if any
    carry = Math.floor(tempSum / 10);

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    index++;
  }

  // Add last carry if any
  if (carry) {
    number.push(new ListNode(+carry), null);
    linkToPreviousNode(number, index);
  }

  return number[0];
}

module.exports = addTwoNumbers;
