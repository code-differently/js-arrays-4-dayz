class BasicArrays{
    /**
     * @param stringArray an array of String objects
     * @return the first element in the array
     */
    getFirstElement(stringArray) {
        let first = stringArray[0]
        return first;
    }

    /**
     * @param stringArray an array of String objects
     * @return the second element in the array
     */
    getSecondElement(stringArray) {
        let second = stringArray[1]
        return second;
    }

    /**
     * @param stringArray an array of String objects
     * @return stringArray with the elements in reverse order
     */
    reverse(stringArray) {
        const length = stringArray.length;
        const halfIndex = Math.floor(length / 2);
        for (let i = 0; i < halfIndex; i++) {
            const rightNum = stringArray[length - i - 1];
            stringArray[length - i - 1] = stringArray[i];
            stringArray[i] = rightNum;
        }
            return stringArray;
            
        //let reversed = stringArray.reverse();
        //return reversed;
    }

    /**
     * @param stringArray an array of String objects
     * @return String made up of the first character in each element of stringArray
     */
   getFirstLetterOfEachElement(stringArray) {   
        let result = "";
        for (let i = 0; i < stringArray.length; i++) {
            result += stringArray[i].charAt(0);
    }   
        return result;
    }
    
}
module.exports = BasicArrays;