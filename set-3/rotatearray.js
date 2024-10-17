function rotateArray(arr, k) {
  // Handle cases where k is larger than the length of the array
  k = k % arr.length;

  // Step 1: Slice the array into two parts
  let part1 = arr.slice(-k); // Get the last k elements
  let part2 = arr.slice(0, arr.length - k); // Get the first part

  // Step 2: Concatenate both parts to form the rotated array
  return part1.concat(part2);
}

// Example usage:
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const rotatedArray = rotateArray(nums, k);
console.log(rotatedArray);
