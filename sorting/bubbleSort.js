// swaps elements in an array based on two indices
function swap(array, indexA, indexB) {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;

  return array;
}

function bubbleSort(array) {
  // this variable represents the left most index
  //  of sorted elements in our array
  let sortedElementIndex = array.length;

  // we need two loops here because we need to run the
  for (let outerIndex = 0; outerIndex < array.length; ++outerIndex) {
    for (
      let innerIndex = 0;
      innerIndex < sortedElementIndex - 1;
      ++innerIndex
    ) {
      // check innerIndex and innerIndex + 1 to see if
      //  they are in the correct order, if not swap
      if (array[innerIndex] > array[innerIndex + 1]) {
        swap(array, innerIndex, innerIndex + 1);
      }
    }

    // this represents the outer sorted edge
    //  of our array, we reduce it to indicate
    //  any index after this point represents an index
    //  pointing to sorted elements
    sortedElementIndex--;
  }

  return array;
}

// get console arguments if they exist otherwise detault to 100
const numberOfElements = Number(process.argv[2]) || 100;
const constructRandomNumberArray = require("./constructRandomNumberArray");
const array = constructRandomNumberArray(numberOfElements);

console.log(array);
console.log(bubbleSort(array));
