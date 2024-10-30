const removeFromArray = function(array, ...args) {
    const outputArray = [];
    array.forEach(element => {
        if (!args.includes(element)) {
            outputArray.push(element);
        }
    });
    return outputArray;
};
// Do not edit below this line
module.exports = removeFromArray;
