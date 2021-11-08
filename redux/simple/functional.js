// DEFINITION: higher order functions are functions that accept functions as
//  are arguments or return functions themselves

// EXAMPLE A: we can pass functions into functions
function give10ToCallback(callback) {
  callback(30);
}

give10ToCallback((value) => {
  console.log(value);
});

// EXAMPLE B: we can also return functions from functions
function generateFunc() {
  return function (value) {
    console.log(2 * value);
  };
}

const multiplyBy2AndLog = generateFunc();
multiplyBy2AndLog(20);

// function generateFuncB() {
//   return function (argumentA) {
//     return function (argumentB) {
//       return argumentA + argumentB;
//     };
//   };
// }

const generateFuncB = () => ((argumentA) => ((argumentB) => argumentA + argumentB));

const func1 = generateFuncB();
const func2 = func1(10);

console.log(func2(20));

console.log(func1(10)(20));
// const ConnectedComponent = connect(mapState, mapDispatch)(Component)
