class Craze4Arrays {

    getNumberOfOccurrences(inputArray, valueToEvaluate) {
        let count = 0;
        for (let input of inputArray) {
            if (input === valueToEvaluate) {
                count++;
            }
        }
        return count;
    }

    /** 
        @param objectArray    an array of any type of Object
        @param objectToRemove a value to be removed from the `objectArray`
        @return an array with identical content excluding the specified `objectToRemove`
        Given an array of objects, name `objectArray`, and an object `objectToRemove`, return an array of objects with identical contents excluding `objectToRemove`
    */
    removeValue(objectArray, objectToRemove) {
        for (let i = 0; i < objectArray.length; i++) {
            if (objectArray[i] == objectToRemove) {
                objectArray.splice(i, 1);
            }
        }
        return objectArray;
    }

    /**
     * @param objectArray an array of any type of Object
     * @return the most frequently occurring object in the array
     * given an array of objects, named `objectArray` return the most frequently occuring object in the array
     */
    getMostCommon(objectArray) {
    }
    /**
     * @param objectArray an array of any type of Object
     * @return the least frequently occurring object in the array
     * given an array of objects, named `objectArray` return the least frequently occuring object in the array
     */
    getLeastCommon(objectArray) {
        // I know I could use getNumberOfOccurrences() here but I wanted to try out a Javascript hashmap.
        let map = new Map();
        for (let i = 0; i < objectArray.length; i++) {
            if (map.has(objectArray[i])) {
                let timeAppears = map.get(objectArray[i]);
                map.set(objectArray[i], timeAppears + 1);
            } else {
                map.set(objectArray[i], 1);
            }
        }

        let lowestTimesAppears = 1000;
        let lowestNum = Infinity;
        for (let k of map) {
            console.log(k);
            console.log(map.get(k));
            if (k[1] < lowestTimesAppears) {
                lowestTimesAppears = k[1];
                lowestNum = k[0];
            }
        }

        return lowestNum;
    }

    /**
     * @param objectArray      an array of any type of Object
     * @param objectArrayToAdd an array of Objects to add to the first argument
     * @return an array containing all elements in `objectArray` and `objectArrayToAdd`
     * given two arrays `objectArray` and `objectArrayToAdd`, return an array containing all elements in `objectArray` and `objectArrayToAdd`
     */
    mergeArrays(objectArray, objectArrayToAdd) {
        return objectArray.concat(objectArrayToAdd);
    }

}


module.exports = Craze4Arrays;