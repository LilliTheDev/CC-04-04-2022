// Given a non-empty array of integers, return the result of multiplying the values together in order.
// Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// Test Cases
// [1, 2, 3, 4] => [24]
// [4, 1, 1, 2, 8] => [64]
// [2, 4, 6,] => [48]


// Make a function that takes in an array
// Declare inital sum for multiplication
// Loop through array and multiply each value by the next
// Return the total after all multiplication

function multiplyAll(arr){
  let sum = 1;
  for (let i = 0; i < arr.length; i++){
     sum *= arr[i];
  }
  return sum;
}

// Check for Test Cases

console.log(multiplyAll([1, 2, 3, 4]), [24]);
console.log(multiplyAll([4, 1, 1, 2, 8]), [64]);
console.log(multiplyAll([2, 4, 6,]), [48]);
