function generateHtml(input) {
  return `<div>${input.trim()}</div>`;
}

// console.log(generateHtml("  orlando     "));

// OR

export const trim = (string) => string.trim();
export const wrapInDiv = (string) => `<div>${string}</div>`;

// console.log(wrapInDiv(trim("  orlando     ")));
