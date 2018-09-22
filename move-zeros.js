let Benchmark = require('benchmark');
let suite = new Benchmark.Suite();
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// Example:
//
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:
//
//     You must do this in-place without making a copy of the array.
//     Minimize the total number of operations.


const moveZeroes = nums => {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            let temp = nums.splice(i, 1);
            nums.push(temp[0])
        }
    }
};

const moveZeroesWhile = nums => {
    let i = nums.length - 1;

    while (i >= 0) {
        if (nums[i] === 0) {
            let temp = nums.splice(i, 1);
            nums.push(temp[0]);
        }
        i--;
    }
};
suite.add('for #forLoop', function () {
    moveZeroes([1, 0, 3, 5, 0, 1, 4, 0, 7]);
});
suite.add('while #whileLoop', function () {
    moveZeroesWhile([1, 0, 3, 5, 0, 1, 4, 0, 7]);
});
suite
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({'async': true});

// for #forLoop x 916,295 ops/sec ±12.88% (61 runs sampled)
// while #whileLoop x 1,009,609 ops/sec ±10.48% (64 runs sampled)
// Fastest is while #whileLoop