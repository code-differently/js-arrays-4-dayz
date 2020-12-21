class BasicArrays{
    /**
     * @param stringArray an array of String objects
     * @return the first element in the array
     */
    getFirstElement(stringArray) {
        let firstEle = stringArray[0]
        return firstEle;
    }

    /**
     * @param stringArray an array of String objects
     * @return the second element in the array
     */
    getSecondElement(stringArray) {
        let secondEle = stringArray[1]
        return secondEle;
    }

    /**
     * @param stringArray an array of String objects
     * @return stringArray with the elements in reverse order
     */
    reverse(stringArray) {
        const length = stringArray.length;
        const halfLength = Math.floor(length / 2 );
        for(let i = 0; i < halfLength; i++){
            const rightNum = stringArray[length - 1 - i];
            stringArray[length - 1 - i] = stringArray[i];
          stringArray[i] = rightNum;
        }return stringArray;
    }

    /**
     * @param stringArray an array of String objects
     * @return String made up of the first character in each element of stringArray
     */
   getFirstLetterOfEachElement(stringArray) {
        let finalAns = '';
        for(let i = 0; i < stringArray.length; i++){
            finalAns += stringArray[i].charAt(0);
        }
        return finalAns;
    }   
}

module.exports = BasicArrays;