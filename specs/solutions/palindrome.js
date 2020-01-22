// Examples:
// - poop
// - tacocat
// - anna
// - mom

function palindrome(string) {
  for (let i = 0, j = string.length - 1; i < j; ++i, --j) {
    if (string[i] !== string[j]) {
      return false;
    }
  }

  return true;
}

console.log(palindrome("tacocat"));
