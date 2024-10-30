const reverseString = function(string) {
    const strLen = string.length;
    let outString = ""
    for (let i = strLen - 1; i >=0; i--){
        outString += string[i];
    }
    return outString;

};

// Do not edit below this line
module.exports = reverseString;
