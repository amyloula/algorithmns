// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.
//
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
//
//     I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
//

// I - 1
// V - 5
// X - 10
// L - 50
// C - 100
// D - 500
// M - 1000

// * If I comes before V or X, subtract 1 eg: IV = 4 and IX = 9
// * If X comes before L or C, subtract 10 eg: XL = 40 and XC = 90
// * If C comes before D or M, subtract 100 eg: CD = 400 and CM = 900


const romanToInt = (s) => {
    let result = 0;
    let length = s.length;

    for (let i = 0; i < length; i++) {
        let roman = s.substring(i, i + 1);
        let next = s.substring(i + 1, i + 2);
        switch (roman) {
            case 'I':
                result += (next === "V" || next === "X") ? -1 : 1;
                break;
            case 'V':
                result += 5;
                break;
            case 'X':
                result += (next === "L" || next === "C") ? -10 : 10;
                break;
            case 'L':
                result += 50;
                break;
            case 'C':
                result += (next === "D" || next === "M") ? -100 : 100;
                break;
            case 'D':
                result += 500;
                break;
            case 'M':
                result += 1000;
                break;
        }
    }
    return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));

// 3999 / 3999 test cases passed.
// Status: Accepted
// Runtime: 136 ms
// You are here!
// Your runtime beats 85.57 % of javascript submissions.