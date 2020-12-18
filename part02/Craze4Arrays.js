class Craze4Arrays{

    getNumberOfOccurrences(inputArray, valueToEvaluate) {
        let reoccurance = 0;
        for(let i = 0; i < inputArray.length; i++) {
            if (inputArray[i] == valueToEvaluate){
                reoccurance++;
            }
        }
        return reoccurance;
    }

    /** 
        @param objectArray    an array of any type of Object
        @param objectToRemove a value to be removed from the `objectArray`
        @return an array with identical content excluding the specified `objectToRemove`
        Given an array of objects, name `objectArray`, and an object `objectToRemove`, return an array of objects with identical contents excluding `objectToRemove`
    */
    removeValue(objectArray, objectToRemove) {
        let newArray = [];
        for(let i = 0; i < objectArray.length; i++){
            if(objectArray[i] != objectToRemove){
                newArray.push(objectArray[i]);
            }
        }
        return newArray;
    }

    /**
     * @param objectArray an array of any type of Object
     * @return the most frequently occurring object in the array
     * given an array of objects, named `objectArray` return the most frequently occuring object in the array
     */
    getMostCommon(objectArray) {
        let newArray = objectArray;
        let output = newArray.sort((a, b) =>
            newArray.filter(n => n===a).length - newArray.filter(n => n===b).length).pop();
        return output;
    }

    /**
     * @param objectArray an array of any type of Object
     * @return the least frequently occurring object in the array
     * given an array of objects, named `objectArray` return the least frequently occuring object in the array
     */
   getLeastCommon(objectArray) {
    let newArray = objectArray;
    let output = newArray.sort((a, b) =>
        newArray.filter(n => n===b).length - newArray.filter(n => n===a).length).pop();
    return output;
    }

    /**
     * @param objectArray      an array of any type of Object
     * @param objectArrayToAdd an array of Objects to add to the first argument
     * @return an array containing all elements in `objectArray` and `objectArrayToAdd`
     * given two arrays `objectArray` and `objectArrayToAdd`, return an array containing all elements in `objectArray` and `objectArrayToAdd`
     */
    mergeArrays(objectArray, objectArrayToAdd) {
        let newArray = objectArray.concat(objectArrayToAdd);
        return newArray;
    }

}


module.exports = Craze4Arrays;
