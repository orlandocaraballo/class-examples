// given an input of an array
//  it returns an array of size two
//  where each array element stores another array
//  each sub-array stores half of the values of the input array
function split(array) {
  const midPoint = Math.floor(array.length / 2);

  // create two arrays based on the mid point of the original array
  const leftHalf = array.slice(0, midPoint);
  const rightHalf = array.slice(midPoint);

  // return an array of two arrays
  //   where each array holds one half of the original array
  return [leftHalf, rightHalf];
}

// given an input of two arrays
//  this function returns a new array
//  that stores all elements from left and right
//  but in sorted order
function merge(leftUnsortedArray, rightUnsortedArray, comparator) {
  // set some base indices as the starting point for looping through
  //  the left and right unsorted arrays
  let leftIndex = 0,
    rightIndex = 0,
    sortedArrayIndex = 0;

  // create an empty array with a total size of both left and right unsorted arrays combined
  const sortedArray = new Array(
    leftUnsortedArray.length + rightUnsortedArray.length
  );

  // loop only while both the left and right indices
  //  have not exceeded the bounds of the their unsorted array counterparts
  while (
    leftIndex < leftUnsortedArray.length &&
    rightIndex < rightUnsortedArray.length
  ) {
    // we defer comparison to our comparator function
    if (
      comparator(leftUnsortedArray[leftIndex], rightUnsortedArray[rightIndex])
    ) {
      sortedArray[sortedArrayIndex] = leftUnsortedArray[leftIndex];
      leftIndex++;
    } else {
      // if first element of right array is smaller then the first element of the
      //  left array, then copy that element to the sorted array
      sortedArray[sortedArrayIndex] = rightUnsortedArray[rightIndex];
      rightIndex++;
    }

    sortedArrayIndex++;
  }

  // loop thru the remaining elements (there should be only 1 left)
  //  and copy that last element into the sorted array
  for (let i = leftIndex; i < leftUnsortedArray.length; i++) {
    sortedArray[sortedArrayIndex] = leftUnsortedArray[i];
    sortedArrayIndex++;
  }

  for (let i = rightIndex; i < rightUnsortedArray.length; i++) {
    sortedArray[sortedArrayIndex] = rightUnsortedArray[i];
    sortedArrayIndex++;
  }

  return sortedArray;
}

function mergeSort(array, comparator) {
  // --------- BASE CASE BELOW ---------

  // if array consists of only 1 element then return the array
  if (array.length === 1 || array.length === 0) return array;

  // -----------------------------------

  // --------- RECURSIVE STEP BELOW ---------

  // split the array in half
  const [left, right] = split(array);

  // sort left half
  const leftSortedHalf = mergeSort(left, comparator);

  // sort right half
  const rightSortedHalf = mergeSort(right, comparator);

  // -----------------------------------

  // merge the left and right arrays together
  return merge(leftSortedHalf, rightSortedHalf, comparator);
}

// get console arguments if they exist otherwise detault to 100
const numberOfElements = Number(process.argv[2]) || 100;
const constructRandomNumberArray = require("./constructRandomNumberArray");
const unsortedArray = constructRandomNumberArray(numberOfElements);
const sortedArray = mergeSort(
  unsortedArray,
  (valueA, valueB) => valueA < valueB // our comparator function is sorting in ascending order
);

console.log(unsortedArray, sortedArray);
