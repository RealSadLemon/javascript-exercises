const removeFromArray = function(firstArray, ...itemsToRemove) {
    let finalArray = firstArray;
    let currentItem;
    for (let arrayCycle = 0;arrayCycle < firstArray.length;++arrayCycle) {
        currentItem = finalArray[arrayCycle];
        for (let removeCycle = 0;removeCycle < itemsToRemove.length; ++removeCycle){
            if (currentItem === itemsToRemove[removeCycle]) {
                finalArray.splice(arrayCycle,1);
                //the --arrayCycle is so that when an item is removed the first for loop doesn't skip an item to check
                --arrayCycle;
                break;
            }
        }    
    }
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;