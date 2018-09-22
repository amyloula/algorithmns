let Benchmark = require('benchmark');
let suite = new Benchmark.Suite();
// Given a string ss and a dictionary of words dictdict, add spaces in ss to construct every possible sentence such that
// each word is valid as per the given dictionary. Return all such possible sentences.

//Naive approach - recursion, we check every possible prefix of that string in the dictionary of words, if it is found
//in the dictionary, then the recursive function is called for the remainder of the string, the function returns the prefix,
// appended by the result of the recursive call, (s - s1) if the remainder of the string is a substring which can lead to the formation
//of a valid sentence as per the dictionary. Otherwise, return an empty list.

//O(n^n)
let canStringBeBrokenFor = ({string, dictionary, answer}) => {
    let stringLength = string.length;
    if (stringLength === 0) return true;

    let prefix = "";

    for (let i = 0; i < stringLength; i++) {
        prefix += string.charAt(i);
        if (dictionary.includes(prefix)) {
            answer += `${prefix}  `;
            let suffix = string.slice(i + 1);
            return !!canStringBeBrokenFor({string: suffix, dictionary, answer});
        }
    }
};

let canStringBeBrokenWhile = ({string, dictionary, answer}) => {
    let stringLength = string.length;
    if (stringLength === 0) return true;

    let i = 0;
    let prefix = '';

    while (i < stringLength) {
        prefix += string.charAt(i);

        if (dictionary.includes(prefix)) {
            answer += `${prefix}  `;
            let suffix = string.slice(i + 1);
            return (canStringBeBrokenWhile({string: suffix, dictionary, answer})) ? true : i++;
        } else i++;
    }
    return false;
};
let dictionaryArray = ['hi', 'i', 'what', 'up', 'name', 'amy', 'dog', 'am', 'have'];
let inputString = 'whatup';
canStringBeBrokenFor({string: inputString, dictionary: dictionaryArray, answer: ''});
canStringBeBrokenWhile({string: inputString, dictionary: dictionaryArray, answer: ''});

// Benchmark for testing and comparision of the two implementations

suite.add('for #forLoop', function () {
    canStringBeBrokenFor({string: inputString, dictionary: dictionaryArray, answer: ''});
});
suite.add('while #whileLoop', function () {
    canStringBeBrokenWhile({string: inputString, dictionary: dictionaryArray, answer: ''});
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

//for #forLoop x 1,650,145 ops/sec ±14.86% (67 runs sampled)
// while #whileLoop x 2,396,400 ops/sec ±6.11% (73 runs sampled)
// Fastest is while #whileLoop