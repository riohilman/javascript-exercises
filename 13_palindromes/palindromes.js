const palindromes = function (word) {
    let regex = /[a-z0-9]/;
    const string = word
        .toLowerCase()
        .split('')
        .filter((char) => regex.test(char))
        .join('');
    const reverseString = string.split('').reverse().join('');
    return string === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
