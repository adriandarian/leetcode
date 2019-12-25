/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} listOne
 * @param {ListNode} listTwo
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  let combined = 0,
    placeholder = null,
    i = 0,
    result,
    curr;

  while (l1 !== null || l2 !== null) {
    // Adds the current index of each together if a value exists or defaults value to 0
    combined = (l1 !== null ? l1.val : 0) + (l2 !== null ? l2.val : 0);

    // Iterates l1 to next node
    if (l1 !== null) {
      l1 = l1.next;
    }

    // Iterates l2 to next node
    if (l2 !== null) {
      l2 = l2.next;
    }

    // Adds previous placeholder if one exists to the current value
    if (placeholder !== null) {
      combined += placeholder;
      placeholder = null;
    }

    // Splits two digit value into 2 variables (one global and one scoped)
    if (combined > 9) {
      placeholder = +combined.toString()[0];
      combined = +combined.toString()[1];
    }

    // Creates head node if not already created otherwise appends next node
    if (i === 0) {
      result = new ListNode(combined);
      curr = result;
      i++;
    } else {
      curr.next = new ListNode(combined);
      curr = curr.next;
    }
  }

  // Append extra node if last computation returned a two digit number
  if (placeholder !== null) {
    curr.next = new ListNode(placeholder);
    curr = curr.next;
  }

  return result;
};

/**
 * Test Cases
 *
 * Test One:
 * [1,8]
 * [0]
 *
 * Test Two:
 * [2,4,3]
 * [5,6,4]
 *
 * Test Three:
 * [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
 * [5,6,4]
 *
 * Test Four:
 * [5]
 * [5]
 */
