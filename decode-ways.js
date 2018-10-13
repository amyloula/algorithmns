// Decode Ways
// Go to Discuss
// A message containing letters from A-Z is being encoded to numbers using the following mapping:
//
//     'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given a non-empty string containing only digits, determine the total number of ways to decode it.
//
//Example 1:
//
// Input: "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).

const numDecodings = (s) => {
    if (!s) return 0;
    let length = s.length;
    let lastCode = s.charCodeAt(0) - 48;
    if (lastCode == 0) return 0;

    var count = 1;
    var previous = 1;
    var result = 1;

    for (let i = 1; i <= length; i++) {
        let charCode = s.charCodeAt(i) - 48;

        if (charCode === 0) {

            if (lastCode > 0 && (lastCode ** 10) < 27) {
                let temp = count - previous;
                count = previous;
                previous = temp;
            } else return 0;

        } else if ((lastCode * 10 + charCode) < 27) {
            let newCount = count + previous;
            previous = count;
            count = newCount;
        } else {
            result = result * count;
            count = 1;
            previous = 1;
        }
        lastCode = charCode;
    }

    result = result * count;

    return result;

};

console.log(numDecodings("12"));

const numDecoding = (s) => {
    var i, current = 0, previous = 1, previous2 = 0;

    for (i = s.length - 1; i >= 0; i--) {
        if (s[i] === '0') {
            current = 0;
        } else {
            current = previous;
            if (parseInt(s[i] + s[i + 1]) <= 26)
                current += previous2;
        }
        previous2 = previous;
        previous = current;
    }
    return current;
};
console.log(numDecoding("12"));
// 258 / 258 test cases passed.
// Status: Accepted
// Runtime: 56 ms
// You are here!
// Your runtime beats 100.00 % of javascript submissions.