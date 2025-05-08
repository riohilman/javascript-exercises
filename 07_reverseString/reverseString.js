const reverseString = function(string) {
    const strArray = string.split("");
    let text = "";
    for (let i = strArray.length - 1; i >= 0; i--) {
        text += strArray[i];
    }
    return text;
};

// Do not edit below this line
module.exports = reverseString;
