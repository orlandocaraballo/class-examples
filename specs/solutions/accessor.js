function accessor(obj) {
  return (key, value) => {
    if (value === undefined) {
      return obj[key];
    } else {
      obj[key] = value;
    }
  };
}
