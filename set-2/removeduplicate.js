function removeDuplicates(arr) {
  const uniqueArray = [...new Set(arr)]; // Convert array to Set and then back to array
  return uniqueArray.length; // Return the length of the unique elements
}

// Example usage:
const nums = [1, 1, 2, 2, 3, 4, 4, 5];
const newLength = removeDuplicates(nums);
console.log("New length:", newLength); // Output: 5
console.log("Modified array:", [...new Set(nums)]); // Output: [1, 2, 3, 4, 5]
