/*
Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first element of the unsorted portion. This process is repeated for the remaining unsorted portion of the list until the entire list is sorted. One variation of selection sort is called “Bidirectional selection sort” that goes through the list of elements by alternating between the smallest and largest element, this way the algorithm can be faster in some cases.

The algorithm maintains two subarrays in a given array.

  - The subarray which already sorted. 
  - The remaining subarray was unsorted.
  
In every iteration of the selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the beginning of unsorted subarray. 

After every iteration sorted subarray size increase by one and unsorted subarray size decrease by one.
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
 * sort array in selection sort algorithm
 * @param arr array to sort
 * @returns sorted array
 */
const selection_sort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex === i) {
      break;
    }

    swap(arr, i, minIndex);
  }
  return arr;
};

export default selection_sort;
