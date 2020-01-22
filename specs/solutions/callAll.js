function callAll(object, array) {
  return array.map(fn => {
    object[fn] = fn;
    return fn.call(object);
  });
}
