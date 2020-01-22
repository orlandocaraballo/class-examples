// these are referred to as named exports
//    we can have as many named exports as we please
// we must remember that whatever we name our exports
//    will be the same name that is used on the file that imports these variables
export const orlandoName = "orlando";
export const orlandoAge = 35;
export const orlandoGender = "male";

// this is referred to as a default export
// there can be only default export per module
//    we can rename our default export in the file that imports it
export default () => {
  return `${orlandoName} / ${orlandoAge} / ${orlandoGender}`;
};
