function findMax(array) {
  // Initialize the maximum number to the first element in the array.
  let maxNumber = array[0];

  // Loop through the array and compare each element to the current maximum number.
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }

  // Return the maximum number.
  return maxNumber;
}
