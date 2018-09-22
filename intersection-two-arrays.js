let Benchmark = require('benchmark');
let suite = new Benchmark.Suite();
// Given two arrays, write a function to compute their intersection.
//
//     Example 1:
//
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

const intersectTwoArraysWhile = (nums1, nums2) => {
    let arr = [];

    while (nums2.length > 0) {
        let temp = nums2.pop();

        if (nums1.indexOf(temp) > -1) {
            let indexTemp = nums1.indexOf(temp);

            nums1.splice(indexTemp, 1);

            arr.push(temp);
        }
    }
    return arr;
};
intersectTwoArraysWhile([1, 2, 2, 1], [2, 2]);

const intersectTwoArraysMap = (nums1, nums2) => {
    return nums2.map((number2) => {
        if (nums1.includes(number2)) {
            let tempIndex = nums1.indexOf(number2);
            nums1.splice(tempIndex, 1);
            return number2;
        }
    });
};
const intersectTwoArraysFor = (nums1, nums2) => {
    let array = [];

    for (let i = nums2.length; i >= 0; i--) {
        let temp = nums2.pop();
        if (nums1.includes(temp)) {
            let indexTemp = nums1.indexOf(temp);
            nums1.splice(indexTemp, 1);
            array.push(temp);
        }
    }
    return array;
};

suite.add('while #whileLoop', function () {
    intersectTwoArraysWhile([1, 2, 2, 1], [2, 2]);
});
suite.add('for #forLoop', function () {
    intersectTwoArraysFor([1, 2, 2, 1], [2, 2]);
});
suite.add('map #map', function () {
    intersectTwoArraysMap([1, 2, 2, 1], [2, 2]);
});
suite
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log(`Fastest is ${this.filter('fastest').map('name')}`);
        console.log(`Completed without error : ${this.filter('successful').map('name')}`);
    })
    .run({'async': true});

// while #whileLoop x 1,350,201 ops/sec ±6.26% (71 runs sampled)
// for #forLoop x 1,380,598 ops/sec ±2.62% (71 runs sampled)
// map #map x 1,347,681 ops/sec ±21.12% (69 runs sampled)
// Fastest is for #forLoop,while #whileLoop
//     Completed without error : while #whileLoop,for #forLoop,map #map