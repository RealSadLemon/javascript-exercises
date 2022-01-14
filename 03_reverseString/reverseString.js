const reverseString = function(str) {
    if (str.length === 0) return str;
    let firstString = str;
    let finalString;
    let reverseArray = [];
    //loop to check each character in the given argument
    for(let i = 0;i < str.length; i++){
        //put the last character into the reversal array
        reverseArray.push(firstString.slice(-1));
        //remove the last character from the string
        firstString = firstString.slice(0,-1);
        //turn that array into a string
        finalString = reverseArray.join("");
    };
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
