// Examples:
// - poop
// - tacocat
// - anna
// - mom
function palindome(string) {
  for (let i = 0, j = string.length - 1; j > i; ++i, j--) {
    if (string[i] !== string[j]) {
      return false;
    }
  }

  return true;
}

console.log(palindome("mom"));
