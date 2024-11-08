const palindromes = function (string) {
    const strLen = string.length;
    let head = 0;
    let tail = strLen - 1;

    function isAlphabet(char) {
        return /^[a-zA-Z0-9]$/.test(char);
      }

    while (head < tail){
        if (!isAlphabet(string[head])) {
            head++;
            continue;
        }
        if (!isAlphabet(string[tail])) {
            tail--;
            continue
        }
        if (string[head].toLowerCase() != string[tail].toLowerCase()) {
            return false; 
        } else {
            head++;
            tail--;
        }
    }

    return true; 
};

// Do not edit below this line
module.exports = palindromes;
