function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  return arr;
}

const myArray = [1, 2, 3, 4, 5];
console.log(reverseArray(myArray)); // Output: [5, 4, 3, 2, 1]
