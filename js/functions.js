function splice(start, count, ...items) {
  console.log(items);
}

splice(0, 5); // works fine
splice(2, 4, 'banana', 'apple', 'fig'); // works fine

// Write a function that finds the longest word in an array of strings.
// Your function should take any amount of strings as a parameter via
// the rest parameter feature and return the longest string passed in.

//Example:

function findLongest(...strings) {
  let longest = strings[0];
  console.log('first longest: ' + longest, strings);

  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length > longest.length) {
      longest = strings[i];
    }
  }

  return longest;
}

let result = findLongest('dream', 'bananas', 'big', 'dreams');

console.log('The longest word was: ' + result);

// Write a function that takes two parameters.
// The first parameter is a function and the second one can be anything.
// Return the result of the function you passed in having given it the
// passed in parameter as a parameter.
// Test it with this:
function execute(fn, a) {
  let result = fn(a);
  return result;
}

function duplicate(p) {
  return p + p;
}

let answer = execute(duplicate, 'yum ');

let answer2 = execute((p) => 5 * p, 10);

console.log(answer);

// Arrow functions

// Recursion

// Write a function fib(n) that a takes an integer n and
// returns the nth fibonacci number
// Example:
// n = 10
// n:   0   1   2   3   4   5   6    7    8    9
// fib: 0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34

function fib(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }

  return fib(n - 2) + fib(n - 1);
}

let fib9 = fib(9);
console.log('fib where n = 9 is: ' + fib9);


/* 

1 1 0 1 0 0
0 1 0 1 0 1
0 1 1 1 0 0
0 1 0 1 0 1
0 0 0 1 1 1

*/