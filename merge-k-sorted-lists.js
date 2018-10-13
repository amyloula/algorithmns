// var mergeKLists = function (lists) {
//     let length = lists.length;
//
//     for (let i = 0; i <= lists.length; i++) {
//         if (lists[i].val && lists[i + 1].val) {
//
//         }
//     }
// };
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function mergeKLists(lists) {
    const result = [];
    for (let head of lists) {
        while (head) {
            result.push(head.val);
            head = head.next
        }
    }
    //Resorting a sorted list - not ideal but simplest solution
    result.sort((a, b) => a - b);
    return result;
}

console.log(mergeKLists([[1, 4, 5], [1, 3, 4], [2, 6]]));
// You are here!
// Your runtime beats 59.69 % of javascript submissions.
// 131 / 131 test cases passed.
// Status: Accepted
// Runtime: 100 ms

const mergeKLists1 = (lists) => {
    const array = [];
    for (let i = 0; i <= lists.length; i++) {
        let firstArray = lists[i];
        while (firstArray !== null) {
            array.push(firstArray.val);
            firstArray = firstArray.next;
        }
    }
    array.sort((a, b) => a - b);
    const dummy = {next: null};
    let currentList = dummy;

    for (let i = 0; i < array.length; i++) {
        currentList.next = new ListNode(array[i]);
        currentList = currentList.next;
    }

    return dummy.next;
};