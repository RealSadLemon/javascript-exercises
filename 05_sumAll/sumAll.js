const sumAll = function(firstInteger, secondInteger) {
    let finalNumber;
    if (checkErrorSumAll(firstInteger, secondInteger)) {
        return "ERROR";
    } else if (firstInteger < secondInteger) {
        finalNumber = firstInteger++;
        for(;firstInteger <= secondInteger;++firstInteger){
            finalNumber = finalNumber + firstInteger;
        }
        return finalNumber;
    } else if (firstInteger > secondInteger) {
        finalNumber = secondInteger++;
        for(;secondInteger <= firstInteger;++secondInteger) {
            finalNumber = finalNumber + secondInteger;
        }
        return finalNumber;
    } 
};
const checkErrorSumAll = function(firstTest, secondTest) {
    if (firstTest < 0 || secondTest < 0) {
        return true;
    } else if (typeof firstTest !== 'number' || typeof secondTest !== 'number') {
        return true;
    }
}

// Do not edit below this line
module.exports = sumAll;
