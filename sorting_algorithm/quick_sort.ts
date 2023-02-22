/*
Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element 
as a pivot and partitions the given array around the picked pivot. There are many 
different versions of quickSort that pick pivot in different ways. 

- Always pick the first element as a pivot.
- Always pick the last element as a pivot (implemented below)
- Pick a random element as a pivot.
- Pick median as the pivot.

The key process in quickSort is a partition(). The target of partitions is, 
given an array and an element x of an array as the pivot, put x at its correct position 
in a sorted array and put all smaller elements (smaller than x) before x, and put all 
greater elements (greater than x) after x. All this should be done in linear time.
*/

/**
 * swap places
 * @param arr array to update
 * @param x index 1
 * @param y index 2
 */
const swap = (arr: number[], x: number, y: number) => {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};

/**
 * find the partition
 * @param arr array to sort
 * @param start starting index (default: 0)
 * @param end ending index (default: length arr - 1)
 * @returns correct index of the pivot
 */
const partition = (arr: number[], start: number, end: number): number => {
  const pivot = arr[end];
  let i = start - 1;

  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      ++i;
      swap(arr, j, i);
    }
  }
  ++i;
  swap(arr, i, end);
  return i;
};

/**
 *sort array using quick sort
 * @param arr array to sort
 * @param start starting index (default: 0)
 * @param end ending index (default: length arr - 1)
 */
const quick_sort = (arr: number[], start = 0, end = arr.length - 1) => {
  if (start >= end) return;
  const pivot = partition(arr, start, end);
  quick_sort(arr, start, pivot - 1);
  quick_sort(arr, pivot + 1, end);
  return arr;
};

export default quick_sort;
