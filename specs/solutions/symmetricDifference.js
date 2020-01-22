function difference(array, arrayTwo) {
  return array.filter(element => !arrayTwo.includes(element));
}

function symmetricDiff(array, arrayTwo) {
  return [...difference(array, arrayTwo), ...difference(arrayTwo, array)];
}
