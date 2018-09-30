// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
//     An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Note that an empty string is also considered valid.
//
// Example 1:
// Input: "()"
// Output: true
//
// Example 2:
// Input: "()[]{}"
// Output: true
//
// Example 3:
// Input: "(]"
// Output: false
//
// Example 4:
// Input: "([)]"
// Output: false
//
// Example 5:
// Input: "{[]}"
// Output: true

const isValid = (string) => {
    const openingParens = "{[(";
    const mapOfParens = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
    let length = string.length;
    let stack = ["."];
    if (string === "") return true;
    //if there's not an even amount of elements, return false because it's impossible to be valid with an odd number
    if (length % 2 !== 0) return false;

    string = string + ".";
    for (let char of string) {
        if (openingParens.includes(char)) {
            stack.push(mapOfParens.get(char));
        } else {
            // check the correct closer.
            if (stack.pop() !== char) {
                return false;
            }
        }
    }
    return true;
};
console.log(isValid('[]{}([{()}])'));

// 76 / 76 test cases passed.
//  Status: Accepted
// Runtime: 52 ms
// LeetCode Accepted Solutions Runtime Distribution:
// Your runtime beats 99.65 % of javascript submissions.