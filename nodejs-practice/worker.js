function work(numbers) {
  return numbers.reduce((previousValue, currentValue) => {
    // check if array element has inner array then reduce again
    if (Array.isArray(currentValue)) {
      currentValue = currentValue.reduce((prev, cur) => prev + cur);
    }

    // add previous value to current one
    return previousValue + currentValue;
  }, 0);
}

process.on("message", numbers => {
  // indicate that worker process has ended
  console.log(`Worker ${process.pid} started`);

  // do some work and send message to parent and immediately exit
  process.send(work(numbers));
  process.disconnect();
});

module.exports = work;
