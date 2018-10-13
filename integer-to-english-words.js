// var makeTensHash = () => {
//     let obj = {};
//     let len = tens.length;
//
//     for (let i = 2; i <= len; i++) {
//         obj[i] = tens[i - 2];
//     }
//     return obj;
// };
// let tensHashTable = makeTensHash();

let tens = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
var scales = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];
let hundreds = ['Hundred'];
let basic = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
var numberToWords = function (num) {
    if (num === 0) return basic[0];
    let answer = '';
    for (let i = scales.length - 1; i >= 0; i -= 1) {
        const divider = Math.pow(1000, i);
        if (num < divider) {
            continue;
        }
        answer += threePack(Math.floor(num / divider));
        answer += scales[i] === '' ? '' : scales[i] + ' ';
        num %= divider;
    }
    return answer.substring(0, answer.length - 1);
};
const threePack = (num) => {
    var result = '';
    if (num >= 100) {
        result += basic[Math.floor(num / 100)] + ' ';
        result += hundreds[0] + ' ';
        num %= 100;
    }
    if (num >= 20) {
        result += tens[Math.floor(num / 10) - 2] + ' ';
        num %= 10;
    }
    if (num > 0) {
        result += basic[num] + ' ';
    }
    return result;
};
console.log(numberToWords('1240'));