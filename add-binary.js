let Benchmark = require('benchmark');
let suite = new Benchmark.Suite();
// Given two binary strings, return their sum (also a binary string).
//
// The input strings are both non-empty and contains only characters 1 or 0.
//
// Example 1:
//
// Input: a = "11", b = "1"
// Output: "100"
// Example 2:
//
// Input: a = "1010", b = "1011"
// Output: "10101"a

let addBinaryFor = (string1, string2) => {
    let sum = '';
    let carry = 0;

    let i = string1.length - 1;
    let j = string2.length - 1;
    for (i, j; i >= 0 || j >= 0; i--, j--) {
        let a = string1[i] ? string1[i] : '0';
        let b = string2[j] ? string2[j] : '0';
        sum = String(a ^ b ^ carry) + sum;
        if (a === b && a !== String(carry)) {
            carry = Number(!carry);
        }
    }
    if (carry) {
        sum = String(carry) + sum;
    }
    return sum;
};

let addBinaryWhile = (string1, string2) => {
    let sum = '';
    let carry = 0;

    let i = string1.length - 1;
    let j = string2.length - 1;

    while (i >= 0 || j >= 0) {
        let a = string1[i] ? string1[i] : '0';
        let b = string2[j] ? string2[j] : '0';
        sum = String(a ^ b ^ carry) + sum;
        if (a === b && a !== String(carry)) {
            carry = Number(!carry);
        }
        i--;
        j--;
    }
    if (carry) {
        sum = String(carry) + sum;
    }
    return sum;
};

suite.add('while #whileLoop', function () {
    addBinaryWhile("1010", "1011");
});
suite.add('for #forLoop', function () {
    addBinaryFor("1010", "1011");
});
suite
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log(`Completed without error : ${this.filter('successful').map('name')}`);
        console.log(`Fastest is ${this.filter('fastest').map('name')}`);
    })
    // run async
    .run({'async': true});

// while #whileLoop x 2,739,623 ops/sec ±2.13% (75 runs sampled)
// for #forLoop x 2,618,947 ops/sec ±3.01% (74 runs sampled)
// Completed without error : while #whileLoop,for #forLoop
//     Fastest is while #whileLoop