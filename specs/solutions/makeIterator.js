function makeIterator(array) {
  let index = 0;
  return {
    getNext: () => {
      const value = array[index];
      index++;
      return { value: value, done: index > array.length };
    },
    getIndex: () => {
      return index;
    }
  };
}
