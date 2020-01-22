process.on("message", numbers => {
  console.log(`Worker ${process.pid} started`);

  const total = numbers.reduce((previousValue, currentValue) => {
    if (Array.isArray(currentValue)) {
      currentValue = currentValue.reduce((prev, cur) => prev + cur);
    }

    return previousValue + currentValue;
  }, 0);

  process.send(total);

  process.disconnect();
});
