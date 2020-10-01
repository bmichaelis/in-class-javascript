let shoppingList = { banana: 4, bread: 2, egg: 12, sugar: 1 };

for (let itemName in shoppingList) {
  sendKidToGet(itemName, shoppingList[itemName]);
}

function sendKidToGet(itemName, itemCount) {
  console.log(`I got ${itemCount} ${itemName}${itemCount > 1 ? 's' : ''}`);
}

// write a function that will take an array and a function and it will run the function on each
// item in the array and return a new array with the items that the function returned true for

// example

// let array = [9, 34, 5, 23, 12, 50];
// function isGraterThan10(number) {
//  return number > 10
// }
// let numbersGraterThan10 = filter(array, isGraterThan10)

function filter(array, fn) {
  let resultArray = [];
  array.forEach((item) => {
    if (fn(item)) {
      resultArray.push(item);
    }
  });

  return resultArray;
}

let array = [9, 34, 5, 23, 12, 50];

function isGraterThan10(number) {
  return number > 10;
}

let numbersGraterThan10 = filter(array, isGraterThan10);

console.log(numbersGraterThan10);

// Write a function that takes an array and a function and returns true or false depending on whether
// all the elements of the array return true when passed into the function

// example

// let array = [9, 34, 5, 23, 12, 50];
// let array2 = [90, 34, 23, 12, 50];
// function isGraterThan10(number) {
//  return number > 10
// }
// let allNumbersAreGraterThan10 = every(array, isGraterThan10)  // allNumbersAreGraterThan10 == false
// allNumbersAreGraterThan10 = every(array2, isGraterThan10)  // allNumbersAreGraterThan10 == true

function every(array, fn) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!fn(element)) {
      return false;
    }
  }

  return true;
}

let array1 = [9, 34, 5, 23, 12, 50];
let array2 = [90, 34, 23, 12, 50];
function isGraterThan10(number) {
  return number > 10;
}
let allNumbersAreGraterThan10 = every(array1, isGraterThan10); // allNumbersAreGraterThan10 == false
allNumbersAreGraterThan10 = every(array2, isGraterThan10); // allNumbersAreGraterThan10 == true

// Array.prototype.filter(fn)

let array3 = [9, 34, 5, 23, 12, 50];

let resultArray = array3.filter((number) => number < 10);

console.log(resultArray);

// Array.prototype.map(fn)

let array4 = [9, 34, 5, 23, 12, 50];

let resultArray4 = array4.map((number) => ({ number: number }));

console.log(resultArray4);

// Array.prototype.some(fn)

let array5 = [9, 34, 5, 23, 12, 50];

let resultArray5 = array5.some((number) => number > 50);

console.log(resultArray5);
