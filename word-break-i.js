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
canStringBeBrokenWhile({string: inputString, dictionary: dictionaryArray, answer: ''});