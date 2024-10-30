const sumAll = function(firstPosInt, secondPosInt) {
    if (!(
        secondPosInt > 0 &&
        firstPosInt > 0 &&
        Number.isInteger(firstPosInt) &&
        Number.isInteger(secondPosInt)
    )) return "ERROR";

    let sum = firstPosInt < secondPosInt? firstPosInt: secondPosInt;
    for (let i = sum + 1; 
        i <= (firstPosInt < secondPosInt? secondPosInt: firstPosInt);
        i++) {
            sum += i;
        }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
