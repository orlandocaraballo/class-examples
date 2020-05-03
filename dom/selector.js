function $(selectorText) {
  if (selectorText[0] === "#") {
    // #parent -> parent
    this.selector = document.getElementById(selectorText.slice(1));
  }
}

$.prototype.hide = function () {
  this.selector.style.display = "none";
  console.log(this.selector.style);
  return this;
};

const selector = new $("#parent");
selector.hide();
// console.log(selector);
