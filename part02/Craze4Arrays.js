class Craze4Arrays{

    getNumberOfOccurrences(objectArray, objectToEvaluate) {
        let count = objectArray.reduce(function(n, val) {
           let search = objectToEvaluate;
           return n + (val === search);
        }, 0);
        
        return count;
    }

    /** 
        @param objectArray    an array of any type of Object
        @param objectToRemove a value to be removed from the `objectArray`
        @return an array with identical content excluding the specified `objectToRemove`
        Given an array of objects, name `objectArray`, and an object `objectToRemove`, return an array of objects with identical contents excluding `objectToRemove`
    */
    
    removeValue(objectArray, objectToRemove) {
        let i = 0;
        while (i < objectArray.length) {
            if (objectArray[i] === objectToRemove) {
            objectArray.splice(i, 1);
            } else {
            ++i;
            }
        }
        return objectArray;
        }        

    /**
     * @param objectArray an array of any type of Object
     * @return the most frequently occurring object in the array
     * given an array of objects, named `objectArray` return the most frequently occuring object in the array
     */
   
    /**
     * @param objectArray an array of any type of Object
     * @return the least frequently occurring object in the array
     * given an array of objects, named `objectArray` return the least frequently occuring object in the array
     */
   getLeastCommon(objectArray) {
        let count = objectArray.reduce(function(n, val) {
            let search = objectArray;
            return n + (val === search);
        }, 2);
        
        return count;
    }

    /**
     * @param objectArray      an array of any type of Object
     * @param objectArrayToAdd an array of Objects to add to the first argument
     * @return an array containing all elements in `objectArray` and `objectArrayToAdd`
     * given two arrays `objectArray` and `objectArrayToAdd`, return an array containing all elements in `objectArray` and `objectArrayToAdd`
     */
    mergeArrays(objectArray, objectArrayToAdd) {
        let result = objectArray.concat(objectArrayToAdd);
            return result;
    }
}


module.exports = Craze4Arrays;