// Valid Number
// Validate if a given string can be interpreted as a decimal number.
//
//     Some examples:
//     "0" => true
// " 0.1 " => true
// "abc" => false
// "1 a" => false
// "2e10" => true
// " -90e3   " => true
// " 1e" => false
// "e3" => false
// " 6e-1" => true
// " 99e2.5 " => false
// "53.5e93" => true
// " --6 " => false
// "-+3" => false
// "95a54e53" => false
//
// Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one. However, here is a list of characters that can be in a valid decimal number:
//
//     Numbers 0-9
// Exponent - "e"
// Positive/negative sign - "+"/"-"
// Decimal point - "."
// Of course, the context of these characters also matters in the input.

const isNumber = (string) => {
    let trimmedString = string.toString().trim();
    let length = trimmedString.length;

    if (length < 1) return false;
    if (length === 1) {
        return !isNaN(trimmedString);
    }
    for (let i = 0; i < length; i++) {
        let currentChar = trimmedString.charAt(i);

        if (checkForE(trimmedString)) {
            let toFixed = Number(trimmedString).toFixed(2);
            if (!isNaN(toFixed)) return true;
            else return false;
        } else {
            let toFixed = Number(trimmedString).toFixed(2);
            if (isNaN(toFixed)) return false;
            else if (!isNaN(trimmedString)) return true;
            else if (isALetter(currentChar)) return false;
            else if (!checkCharIsValid(currentChar)) return false;
        }
    }
};

const checkCharIsValid = (char) => {
    return (char !== '-' && char !== '+')
};

const checkForE = (string) => {
    return string.toString().toLowerCase().indexOf('e') > -1;
};
const isALetter = (char) => {
    return /^[a-zA-Z]+$/.test(char);
};

console.log(isNumber(" 99e2.5 ")); //should be false
console.log(isNumber("-+3")); // should be false
console.log(isNumber("95a54e53")); //should be false
console.log(isNumber("53.5e93")); //should be true
console.log(isNumber(" 6e-1")); //should be true
console.log(isNumber("0")); //should be true
console.log(isNumber(".")); //should be false
console.log(isNumber("1 a")); //should be false
console.log(isNumber("11")); //should be true
console.log(isNumber(" 1e")); //should be false
console.log(isNumber(".1")); //should be true
console.log(isNumber("-1.")); //should be true
console.log(isNumber("..")); //should be false
