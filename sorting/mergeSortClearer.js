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
function merge(left, right) {
  // a new array to store out sorted results
  const sortedArray = [];

  // loop only while both the left and right
  //  arrays have length greater than 0
  while (left.length > 0 && right.length > 0) {
    // if first element of left array is smaller then the first element of the
    //  right array, then push the first left element to the sorted array
    if (left[0] < right[0]) {
      sortedArray.push(left[0]);
      left = left.slice(1);
    } else {
      // if first element of right array is smaller then the first element of the
      //  left array, then push the first right element to the sorted array
      sortedArray.push(right[0]);
      right = right.slice(1);
    }
  }

  // loop thru the remaining elements (there should be only 1 left)
  //  and push it into the sorted array
  left.forEach(element => sortedArray.push(element));
  right.forEach(element => sortedArray.push(element));

  return sortedArray;
}

function mergeSort(array) {
  // --------- BASE CASE BELOW ---------

  // if array consists of only 1 element then return the array
  if (array.length === 1 || array.length === 0) return array;

  // -----------------------------------

  // --------- RECURSIVE STEP BELOW ---------

  // split the array in half
  const [left, right] = split(array);

  // sort left half
  const leftSortedHalf = mergeSort(left);

  // sort right half
  const rightSortedHalf = mergeSort(right);

  // -----------------------------------

  // merge the left and right arrays together
  return merge(leftSortedHalf, rightSortedHalf);
}

// get console arguments if they exist otherwise detault to 100
const numberOfElements = Number(process.argv[2]) || 100;
const constructRandomNumberArray = require("./constructRandomNumberArray");
const unsortedArray = constructRandomNumberArray(numberOfElements);
const sortedArray = mergeSort(unsortedArray);

console.log(unsortedArray, sortedArray);
