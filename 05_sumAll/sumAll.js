const sumAll = function(min, max) {
    // Negative number cases
    if (min < 0 || max < 0)
        return 'ERROR';
    // Non-integer number cases
    if (!Number.isInteger(min) || !Number.isInteger(max))
        return 'ERROR';
    // Swaps min and max if arguments are swapped.
    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    }

    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
