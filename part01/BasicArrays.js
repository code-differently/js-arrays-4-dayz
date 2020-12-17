class BasicArrays {
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
        const length = stringArray.length;
        const halfLength = Math.floor(length / 2);
        for (let i = 0; i < halfLength; i++) {
            const rightNum = stringArray[length - 1 - i];
            stringArray[length - 1 - i] = stringArray[i];
            stringArray[i] = rightNum;
        }
        return stringArray;
    }

    /**
     * @param stringArray an array of String objects
     * @return String made up of the first character in each element of stringArray
     */
    getFirstLetterOfEachElement(stringArray) {
        for (let i = 0; i < stringArray.length; i++) {

        }
        return null;
    }
}

module.exports = BasicArrays;