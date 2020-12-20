class Craze4Arrays{

    /** 
        @param objectArray    an array of any type of Object
        @param objectToRemove a value to be removed from the `objectArray`
        @return an array with identical content excluding the specified `objectToRemove`
        Given an array of objects, name `objectArray`, and an object `objectToRemove`, return an array of objects with identical contents excluding `objectToRemove`
    */
    removeValue(objectArray, objectToRemove) {
        
        let i = 0;
        while(i < objectArray.length) {
            if (objectArray[i] === objectToRemove) {
                objectArray.splice(i, 1);
            }else {
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
    getMostCommon(objectArray) {

        var counts = {};
        var compare = 0;
        var mostFrequent;

        for(var i = 0, len = objectArray.length; i < len; i++){
            var num = objectArray[i];
            if(counts[num] === undefined){
                counts[num] = 1;
            }else{
                counts[num] = counts[num] + 1;
            }
            if(counts[num] > compare){
                  compare = counts[num];
                  mostFrequent = objectArray[i];
            }
         }
       return mostFrequent;
    }

    /**
     * @param objectArray an array of any type of Object
     * @return the least frequently occurring object in the array
     * given an array of objects, named `objectArray` return the least frequently occuring object in the array
     */
    getLeastCommon(objectArray) {
        
    const result = [...objectArray.reduce((r, n) => // create a map of occurrences
        r.set(n, (r.get(n) || 0) + 1), new Map()
      )]
      .reduce((r, v) => v[1] < r[1] ? v : r)[0]; // get the the item that appear less times
    
        return result;
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