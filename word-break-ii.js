// Given a string ss and a dictionary of words dictdict, add spaces in ss to construct every possible sentence such that
// each word is valid as per the given dictionary. Return all such possible sentences.

//Naive approach - recursion, we check every possible prefix of that string in the dictionary of words, if it is found
//in the dictionary, then the recursive function is called for the remainder of the string, the function returns the prefix,
// appended by the result of the recursive call, (s - s1) if the remainder of the string is a substring which can lead to the formation
//of a valid sentence as per the dictionary. Otherwise, return an empty list.

//O(n^n)
function canStringBeBroken({string, dictionary, answer}) {
    let stringLength = string.length;
    if (stringLength === 0) return true;

    let prefix = "";
    for (let i = 0; i < stringLength; i++) {
        prefix += string.charAt(i);
        if (dictionary.includes(prefix)) {
            answer += `${prefix}  `;
            let suffix = string.slice(i + 1);
            //If true, return true, if false return false.
            return !!canStringBeBroken({string: suffix, dictionary, answer});
        }
    }
}

let dictionaryArray = ['hi', 'i', 'what', 'up', 'name', 'amy', 'dog', 'am', 'have'];
let inputString = 'whatup';
canStringBeBroken({string: inputString, dictionary: dictionaryArray, answer: ''});