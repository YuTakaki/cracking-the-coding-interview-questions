/*
Bubble Sort is the simplest sorting algorithm
that works by repeatedly swapping the 
adjacent elements if they are in the wrong order.
This algorithm is not suitable for large data sets
as its average and worst-case time complexity is 
quite high.

Follow the below steps to solve the problem:

Run a nested for loop to traverse the input array using two variables i and j, such that 0 ≤ i < n-1 and 0 ≤ j < n-i-1
If arr[j] is greater than arr[j+1] then swap these adjacent elements, else move on
Print the sorted array
*/

/**
 * swap position of two index in an array
 * @param arr: array = array to switch
 * @param x: number = position 1
 * @param y: number = position 2
 * @returns void
 */
const swap = (arr: number[], x: number, y: number) => {
  const temp = arr[y];
  arr[y] = arr[x];
  arr[x] = temp;
};

/**
 * sort array in bubble sort algorithm
 * @param arr array to sort
 * @returns sorted array
 */
const bubble_sort = (arr: number[]) => {
  for (let x = 0; x < arr.length; x++) {
    let swapped = false;
    for (let y = 0; y < arr.length - 1; y++) {
      if (arr[y + 1] < arr[y]) {
        swap(arr, y + 1, y);
        swapped = true;
      }
    }

    if (!swapped) break;
  }
  return arr;
};

export default bubble_sort;
