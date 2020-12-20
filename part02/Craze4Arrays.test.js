const { TestScheduler } = require('jest');
const Craze4Arrays = require('./Craze4Arrays');


test("getMostCommon", () => {
    let craze4Arrays = new Craze4Arrays();
    let expected = 7
    let inputArray = [1, 2, 7, 8, 4, 5, 7, 0, 9, 8, 7];
    let actual = craze4Arrays.getMostCommon(inputArray);
    expect(actual).toEqual(expected);
});

test("removeValueTest1", () => {

    let craze4Arrays = new Craze4Arrays();
    let valueToRemove = 7;
    let expected = [1, 2, 8, 4, 5, 0, 9, 8];
    let inputArray = [1, 2, 7, 8, 4, 5, 7, 0, 9, 8, 7];

    let actual = craze4Arrays.removeValue(inputArray, valueToRemove);

    expect(actual).toEqual(expected);
});

test("getLeastCommonTest", () => {
    let craze4Arrays = new Craze4Arrays();
    let expected = 2;
    let inputArray = [1,1,2,3,3,3,4,4,4,4];
    let actual = craze4Arrays.getLeastCommon(inputArray);
    expect(actual).toEqual(expected);
});

test("mergeArraysTest", () => {
    let craze4Arrays = new Craze4Arrays();
    let array1 = [1,1,1,2,2,2];
    let array2 = [3,3,3,4,4,4];
    let expected = [1,1,1,2,2,2,3,3,3,4,4,4];
    let actual = craze4Arrays.mergeArrays(array1, array2);
    expect(actual).toEqual(expected);
});