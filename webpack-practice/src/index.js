// ALL CODE IMPORTED FROM THIS FILE WILL BE BUNDLED
// INTO OUR bundle.js THAT IS USED IN OUR index.html FILE

// this style of module is called CommonJS module
//    typically you will see this in your backend
const {
  patrishaName,
  patrishaAge,
  patrishaGender,
  patrishaInfo
} = require("./patrisha");

console.log("Patrisha's info ->", patrishaName, patrishaAge, patrishaGender);
console.log(patrishaInfo());

// this is called a EcmaScript module
//    typically you will see in your frontend
//    Note: NodeJS is slowly moving towards this style of module going forward
import orlandoInfo, { orlandoName, orlandoAge, orlandoGender } from "./orlando";

console.log("Orlando's info ->", orlandoName, orlandoAge, orlandoGender);
console.log(orlandoInfo());
