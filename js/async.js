// callback

function someFunction(param1, param2) {
  // some code
  console.log('done been loaded');
}

window.onload = someFunction;

document.getElementById('greeting').onclick = () => {
  console.log('got clicked');
};

setTimeout(() => {
  console.log('done and done');
}, 2000);

const array = ['we', 'are', 'done', 'and', 'done'];

document.getElementById('array').innerText = array;

function capAsync(anArray, callback) {
  window.setTimeout(function () {
    callback(anArray.toString().toUpperCase().split(','));
  }, Math.random() * 2000 + 1000);
}

function handleModifiedArray(modifiedArrayStr) {
  document.getElementById('array').innerText = modifiedArrayStr;
}

let newCoolStr = capAsync(array, handleModifiedArray); //not what you think will happen

function capFirstLetterAsync(array, cb) {
  setTimeout(() => {
    const newArray = array.map(
      (string) => string[0].toUpperCase() + string.substr(1)
    );
    cb(newArray);
  }, Math.random() * 2000 + 1000);
}

function handler(array) {
  console.log('got an array: ', array);
}

capFirstLetterAsync(['somethings', 'never', 'change'], handler);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('all done here');
  }, Math.random() * 2000 + 10000);
});

promise.then((str) => {
  console.log(str);
});

promise.then((str) => {
  console.log(2 + ' ' + str);
});

promise.then((str) => {
  console.log(3 + ' ' + str);
});

// capAsync now with promise

const someOtherArray = ['some', 'other', 'strings', 'in', 'here'];

document.getElementById('array').innerText = someOtherArray;

function capAsync2(anArray) {
  return new Promise((resolve, reject) => {
    window.setTimeout(function () {
      const newArray = anArray.toString().toUpperCase().split(',');
      reject('things went south at some point');
    }, Math.random() * 2000 + 5000);
  });
}

let capAsync2Promise = capAsync2(someOtherArray);

capAsync2Promise.then(handleModifiedArray, (error) => {
  console.log('here is the error: ' + error);
});

capAsync2Promise.catch((error) => {
  console.log('here is the error in the catch: ' + error);
});

function handleModifiedArray(modifiedArrayStr) {
  document.getElementById('array').innerText = modifiedArrayStr;
}
