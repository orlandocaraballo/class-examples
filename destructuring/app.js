const array = [1, 2, 3, 4, 5];
const object = {
  name: "orlando",
  coffeePreference: "cold",
  mood: "😴",
  students: ["student1", "student2", "student3"],
};

// here we destructure the object
function objectToString({ coffeePreference, mood, name, students: [,second] }) {
  return `${coffeePreference} ${mood} ${name}`;
}

const objectString = objectToString(object);

// array destructure
const [first, second, third, fourth, fifth] = array;

console.log(objectString);
console.log(first, second, third, fourth, fifth);

const [, number2, , number4] = array;

console.log(number2, number4);

const [, secondValue, , ...theRest] = array;

console.log(secondValue, theRest);
