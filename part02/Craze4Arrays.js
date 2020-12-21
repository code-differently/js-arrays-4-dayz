class Craze4Arrays{

    getNumberOfOccurrences(objectArray, objectToEvaluate) {
        let numOfOccurrences = 0;
        
        for (let i = 0; i<objectArray.length; ++i ){
            if (objectArray[i] == objectToEvaluate)
            numOfOccurrences++;
        }
        return numOfOccurrences;
    }



    /** 
        @param objectArray    an array of any type of Object
        @param objectToRemove a value to be removed from the `objectArray`
        @return an array with identical content excluding the specified `objectToRemove`
        Given an array of objects, name `objectArray`, and an object `objectToRemove`, return an array of objects with identical contents excluding `objectToRemove`
    */
    removeValue(objectArray, objectToRemove) {
        for (let i=0; i<objectArray.length; i++){
        if (objectArray[i] === objectToRemove){
            objectArray.splice(i, 1);
            i--;
        }
       } 
        return  objectArray;
    }

    /**
     * @param objectArray an array of any type of Object
     * @return the most frequently occurring object in the array
     * given an array of objects, named `objectArray` return the most frequently occuring object in the array
     */
    getMostCommon(objectArray) {
        let m = 0;
        let mf = 1;
        let mode;
        for (let i=0; i<objectArray.length; i++){
            for (let j = i; j<objectArray.length; j++){
                if (objectArray[i] == objectArray[j])
                m++;
                if (mf<m){
                    mf=m;
                }
            }
            mode = mf;
            m=0; 
        }

        return mode;
        }
       
    

    /**
     * @param objectArray an array of any type of Object
     * @return the least frequently occurring object in the array
     * given an array of objects, named `objectArray` return the least frequently occuring object in the array
     */
   getLeastCommon(objectArray){
       let leastCommon = objectArray.sort((a,b) =>
            objectArray.filter(v => v===b).length
          - objectArray.filter(v => v===a).length
          ).pop();

        return leastCommon;
    }

    /**
     * @param objectArray      an array of any type of Object
     * @param objectArrayToAdd an array of Objects to add to the first argument
     * @return an array containing all elements in `objectArray` and `objectArrayToAdd`
     * given two arrays `objectArray` and `objectArrayToAdd`, return an array containing all elements in `objectArray` and `objectArrayToAdd`
     */
    mergeArrays(objectArray, objectArrayToAdd) {
        let mergedArray = objectArray.concat(objectArrayToAdd);
        return mergedArray;
    }

}


module.exports = Craze4Arrays;