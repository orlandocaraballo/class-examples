// we can use the following three functions to target things on the document
//  and store its reference within a variable
const specialAnchors = document.getElementsByClassName("special-link");
const firstAnchor = document.getElementById("first-one");
const anchors = document.getElementsByTagName("a");

// we can also use richer css style quering syntax by utilizing:
//  - querySelector - retrieves the first match
//  - querySelectorAll - retrieves a list of all matches
const nav = document.querySelector("header > nav");

// using this information, we can use it to manipulate properties of
//  individual elements
firstAnchor.innerText = "Casa";
firstAnchor.classList.add("special-link");

// we can set the properties of a group of elements
for (let i = 0; i < anchors.length; ++i) {
  anchors[i].style.backgroundColor = "red";
}

// we can use these references to reach other nodes on the DOM

// first / last children
console.log(nav.firstElementChild, nav.lastElementChild);
// Note: firstChild and lastChild exist but the methods above
//  will look for only element nodes as opposed to all nodes

// siblings
console.log(firstAnchor.nextElementSibling, anchors[3].previousElementSibling);
// Note: nextSibling and lastSibling exist but the methods above
//  will look for only element nodes as opposed to all nodes

// we can also create nodes on the DOM
const footer = document.getElementsByTagName("footer")[0];
const p = document.createElement("p");

p.innerText = "END OF THE FOOTER";

footer.appendChild(p);

// or delete nodes
const main = document.getElementsByTagName("main")[0];

// removes the article within main
article.removeChild(main.firstElementChild);
