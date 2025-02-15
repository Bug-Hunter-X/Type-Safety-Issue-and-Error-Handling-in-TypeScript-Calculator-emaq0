# Type Safety Issue and Error Handling in TypeScript Calculator

This repository demonstrates a common type safety issue and error handling problem in TypeScript. The code implements a simple calculator with functions for addition, subtraction, multiplication, and division. However, the `operate` function, which takes the operator as a string, lacks robust type safety and error handling.  This can lead to runtime errors if an invalid operator is provided.

## Bug Description
The primary issue lies within the `operate` function.  The `operator` parameter is a string, which means any string value can be passed, even if it's not a valid arithmetic operator ('+', '-', '*', '/'). This can lead to a runtime `'Invalid operator'` error.  Additionally, while the code includes a check for division by zero, it could benefit from more comprehensive error handling and better type safety. 

## Solution
The provided solution introduces a type-safe enum for operators, eliminating the string-based ambiguity and enhancing type safety.  More robust error handling is also implemented. 