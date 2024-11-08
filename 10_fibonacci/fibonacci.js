const fibonacci = function(num) {
    const numInt = +num;
    let first = 0;
    let second = 1; 
    let iter = numInt;

    if (numInt < 0) {
        return "OOPS";
    } 

    if (numInt == 0) {
        return 0;
    }

    while (iter > 1) {
        let tmp = second;
        second = first + second;
        first = tmp;
        iter--;
    }

    return second;
};

// Do not edit below this line
module.exports = fibonacci;
