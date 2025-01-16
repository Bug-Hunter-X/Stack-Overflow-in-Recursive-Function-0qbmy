function foo(x) {
  // Input validation
  if (!Number.isInteger(x) || x < 1) {
    return "Invalid input";
  }

  if (x === 1) {
    return true;
  } else if (x === 2) {
    return false;
  } else if (x % 2 === 0) {
    return foo(x / 2);
  } else {
    return foo(x - 1); // Correct base case
  }
}
console.log(foo(5)); // Corrected output
console.log(foo(6));
console.log(foo(1));
console.log(foo(0)); //Handles Invalid input
console.log(foo(2.5)); // Handles invalid input