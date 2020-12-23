const { TestScheduler } = require('jest');
const BasicArrays = require('./BasicArrays');


test("getFirstElementTest", () => {

    let basicArrays = new BasicArrays();
    let inputArray = ["The", "quick", "brown"];
    let expected = "The";

    let actual = basicArrays.getFirstElement(inputArray);

    expect(actual).toEqual(expected);
});

test("getSecondTest", () => {

    let basicArrays = new BasicArrays();
    let inputArray = ["The", "quick", "brown"];
    let expected = "quick";

    let actual = basicArrays.getSecondElement(inputArray);

    expect(actual).toEqual(expected);
});

  test("reverseArrayTest", () => {

    let basicArrays = new BasicArrays();
      let inputArray = ["The", "quick", "brown"];
      let expected = ["brown", "quick", "The"];

      let actual = basicArrays.reverse(inputArray);

      expect(actual).toEqual(expected);
  });

 test("firstLetterTest", () => {

    let basicArrays = new BasicArrays();
    let inputArray = ["The", "quick", "brown", "fox"];
    let expected = "Tqbf";

    let actual = basicArrays.getFirstLetterOfEachElement(inputArray);

    expect(actual).toEqual(expected);
});

