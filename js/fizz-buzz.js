// FizzBuzz

// Write a javascript program that takes a number and prints out “Fizz”
// if the number is a multiple of 3 and “Buzz” if it is a multiple of 5.
// For numbers which are multiples of both three and five print “FizzBuzz”.
// For numbers that are neither just print the number.
// Examples:
// 25 would print out "Buzz"
// 15 would print out "FizzBuzz"
// 34 would print out 34

function fizzBuzz(number) {
  let result = "";

  if (number % 3 == 0) {
    result = "Fizz";
  }

  if (number % 5 == 0) {
    result += "Buzz";
  }

  return result == "" ? number : result;
}

console.log(fizzBuzz(25));
