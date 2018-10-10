//
// Reverse a singly linked list.
//
//     Example:
//
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:
//
// A linked list can be reversed either iteratively or recursively. Could you implement both?

//Iterative method
function reverseList(root) {
    var currNode = root, prevNode = temp = null;

    while (currNode != null) {
        temp = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = temp;
    }
    return prevNode;
}

console.log(reverseList([1, 2, 3, 4, 5]));