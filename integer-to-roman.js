// // Integer to Roman
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.
//
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
const intToRoman = (num) => {
    if (num === 0) return 0;
    let answer = '';
    for (let i = 0; i < decimal.length; i++) {
        while (num % decimal[i] < num) {
            answer += roman[i];
            num -= decimal[i];
        }
    }
    return answer;
};
console.log(intToRoman(58));
console.log(intToRoman(1994));
console.log(intToRoman(3));

// You are here!
// Your runtime beats 99.09 % of javascript submissions.

// 3999 / 3999 test cases passed.
// Status: Accepted
// Runtime: 132 ms