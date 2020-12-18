class BasicArrays{
    /**
     * @param stringArray an array of String objects
     * @return the first element in the array
     */
    getFirstElement(stringArray) {
        return stringArray[0];
    }

    /**
     * @param stringArray an array of String objects
     * @return the second element in the array
     */
    getSecondElement(stringArray) {
        return stringArray[1];
    }

    /**
     * @param stringArray an array of String objects
     * @return stringArray with the elements in reverse order
     */
    reverse(stringArray) {
        let newArray = [];
        for(let i = stringArray.length - 1; i >= 0; i--){
            newArray.push(stringArray[i]);
        }
        return newArray;
    }

    /**
     * @param stringArray an array of String objects
     * @return String made up of the first character in each element of stringArray
     */
   getFirstLetterOfEachElement(stringArray) {
       let output = "";
       for(let i = 0; i < stringArray.length; i++){
         output += stringArray[i][0];
       }
        return output;
    }   
}

module.exports = BasicArrays;