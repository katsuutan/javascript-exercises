const repeatString = function(str, num) {
    // No negative numbers
    if (num < 0)
        return 'ERROR';
    // Returns "blank" for blank inputs or 0 repeats
    else if (num === 0 || str === '')
        return '';
    else{
        let word = str;
        let numOfRepeat = num;
        for (i = 1; i < num; i++) {
            word = word + str;
        }
        return word;
    }
};

// Do not edit below this line
module.exports = repeatString;
