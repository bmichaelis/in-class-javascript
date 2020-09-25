let celestialBodies = ['earth', 'moon', 'jupiter'];
let myPlanet = celestialBodies[0];
let anotherPlanet = celestialBodies[2];
celestialBodies[3] = 'Kepler-186f';

// modify the array so that it contains objects rather than just strings
// {fruit: '🍉', name: 'Watermelon'}
// modify the for loop code so that the name of the fruit is included in the <li> element

let fruits = [
  { icon: '🍉', name: 'Watermelon' },
  { icon: '🍌', name: 'Banana' },
  { icon: '🍓', name: 'Strawberry' },
];

let text = '<ul>';

for (let i = 0; i < fruits.length; i++) {
  let fruit = fruits[i];
  text += `<li>${fruit.icon} ${fruit.name}</li>`;
}

text += '</ul>';

let fruitListElm = document.getElementById('fruit-list');

fruitListElm.innerHTML = text;

let cars = ['Subaru', 'Ford', 'Toyota', 'Jeep'];

document.getElementById('cars').innerText = cars;

document.getElementById('car2').innerText = cars[1];

cars[0] = 'Tesla';

document.getElementById('cars-new').innerText = cars;

document.getElementById('car-count').innerText = cars.length;

cars[cars.length] = 'Mercedes';

document.getElementById('cars-again').innerText = cars;

// Write a function that multiplies the values of two arrays
// and returns a new array with the products.
function multiplyArrays(array1, array2) {
  let resultArray = [];

  if(array1.length != array2.length) {
      throw 'Array lengths are not equal'
  }

  for(let i = 0; i < array1.length; i++) {
      resultArray[i] = array1[i] * array2[i];
  }

  return resultArray;
}
// test
let answerArray = multiplyArrays([1, 2, 3, 4], [5, 6, 7, 8]);
// answerArray == [5, 12, 21, 32];


