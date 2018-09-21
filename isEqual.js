const isEqual = ({object, targetObject}) => {
    let objectProperties = Object.keys(object);

    let unEqualPropertiesAndOrValues = objectProperties.filter((property) => {
        if (targetObject.hasOwnProperty(property)) {
            //check if the property value is the same
            if (object[property] !== targetObject[property]) {
                return property;
            }
        }
    });

    return (unEqualPropertiesAndOrValues.length <= 0);
};

let a = {a: '2', b: '2'};
let b = {a: '2', b: '3'};
isEqual({object: a, targetObject: b});

