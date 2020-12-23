class Craze4Arrays {
  /** 
    //     @param objectArray    an array of any type of Object
    //     @param objectToRemove a value to be removed from the `objectArray`
    //     @return an array with id
    //     identical content excluding the specified `objectToRemove`
    //     Given an array of objects, name `objectArray`, and an object `objectToRemove`, return an array of objects with identical contents excluding `objectToRemove`
    // */
  removeValue(objectArray, objectToRemove) {
    let newArray = objectArray.filter((i) => i !== objectToRemove);
    return newArray;
    console.log(newArray);
  }

  //        )

  //     /**      * @param objectArray an array of any type of Object
  //      * @return the most frequently occurring object in the array
  //      * given an array of objects, named `objectArray` return the most frequently occuring object in the array
  //      */
  // getMostCommon(objectArray) {
  //     return null;
  // }

  //     /**
  //      * @param objectArray an array of any type of Object
  //      * @return the least frequently occurring object in the array
  //      * given an array of objects, named `objectArray` return the least frequently occuring object in the array
  //      */
  getLeastCommon(array) {
    const numberOfElementOccurances = {};
    for (let i = 0; i < array.length; i++) {
      const currentElement = array[i];
      if (numberOfElementOccurances.hasOwnProperty(currentElement)) {
        const currentNumberOfElementOccurances =
          numberOfElementOccurances[currentElement];
        numberOfElementOccurances[currentElement] =
          currentNumberOfElementOccurances + 1;
      } else {
        numberOfElementOccurances[currentElement] = 1;
      }
    }
    let leastCommonlyOccuringElement;
    let lowestAmountOfOccurences = Number.MAX_SAFE_INTEGER;
    for (let element in numberOfElementOccurances) {
      const numberOfTimesElementOccurs = numberOfElementOccurances[element];
      if (numberOfTimesElementOccurs < lowestAmountOfOccurences) {
        lowestAmountOfOccurences = numberOfTimesElementOccurs;
        leastCommonlyOccuringElement = element;
      }
    }
    return parseInt(leastCommonlyOccuringElement);
  }

  //     /**
  //      * @param objectArray      an array of any type of Object
  //      * @param objectArrayToAdd an array of Objects to add to the first argument
  //      * @return an array containing all elements in `objectArray` and `objectArrayToAdd`
  //      * given two arrays `objectArray` and `objectArrayToAdd`, return an array containing all elements in `objectArray` and `objectArrayToAdd`
  //      */

  mergeArrays(objectArray, objectArrayToAdd) {
    let newArr = objectArray.concat(objectArrayToAdd);
    return newArr;
  }
}

module.exports = Craze4Arrays;
