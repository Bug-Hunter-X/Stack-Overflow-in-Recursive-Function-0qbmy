# Stack Overflow Bug in JavaScript Recursive Function

This repository demonstrates a common error in JavaScript: stack overflow errors caused by unbounded recursion.  The `foo` function attempts to recursively call itself without a proper base case for odd numbers, leading to a stack overflow when called with an odd number greater than 1.  The solution demonstrates how to correct this by adding a check for invalid inputs and providing a robust base case.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` to see the buggy code.
3. Run `bug.js` (e.g., using Node.js): `node bug.js`. You'll observe a RangeError: Maximum call stack size exceeded.
4. Open `bugSolution.js` to view the corrected code.
5. Run `bugSolution.js`: `node bugSolution.js`.  This version will correctly handle various inputs, including odd numbers.

## Additional Notes

This example highlights the importance of proper base cases and input validation in recursive functions.  Unbounded recursion is a frequent source of errors, and careful design is crucial for preventing stack overflows.