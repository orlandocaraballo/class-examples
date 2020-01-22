function sometimes(fn) {
  let times = 0;
  let output;

  return function() {
    if (times > 2 && times % 2 === 1) {
      output = "I do not know!";
    } else {
      output = fn.apply(null, arguments);
    }

    times++;

    return output;
  };
}
