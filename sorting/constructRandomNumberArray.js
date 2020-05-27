// generates a random number between min and max inclusively
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = length => {
  return Array(length)
    .fill()
    .map(() => randomNumber(-length, length));
};
