/*
Merge sort is a sorting algorithm that works by dividing an array into 
smaller subarrays, sorting each subarray, and then merging the sorted 
subarrays back together to form the final sorted array.

In simple terms, we can say that the process of merge sort 
is to divide the array into two halves, sort each half, and 
then merge the sorted halves back together. This process is 
repeated until the entire array is sorted.

One thing that you might wonder is what is the specialty 
of this algorithm. We already have a number of sorting algorithms
then why do we need this algorithm? One of the main advantages of
merge sort is that it has a time complexity of O(n log n), which
means it can sort large arrays relatively quickly. It is also a 
stable sort, which means that the order of elements with equal 
values is preserved during the sort.

Merge sort is a popular choice for sorting large datasets 
because it is relatively efficient and easy to implement. 
It is often used in conjunction with other algorithms, such 
as quicksort, to improve the overall performance of a sorting routine.


Merge Sort Working Process:
Think of it as a recursive algorithm continuously splits the array 
in half until it cannot be further divided. This means that if the 
array becomes empty or has only one element left, the dividing will 
stop, i.e. it is the base case to stop the recursion. If the array 
has multiple elements, split the array into halves and recursively 
invoke the merge sort on each of the halves. Finally, when both 
halves are sorted, the merge operation is applied. Merge operation 
is the process of taking two smaller sorted arrays and combining them 
to eventually make a larger one.
*/

/**
 * merge arrays
 * @param arr array to sort
 * @param l left index
 * @param pivot middle pivot
 * @param r right index
 */
const merge = (arr: number[], l: number, pivot: number, r: number) => {
  const arr1 = arr.slice(l, pivot - l + 1 + l);
  const arr2 = arr.slice(pivot + 1, pivot + 1 + r - pivot);
  let i = l;
  while (arr1.length > 0 && arr2.length > 0) {
    arr[i] = arr1[0] < arr2[0] ? arr1.shift()! : arr2.shift()!;

    i++;
  }
  while (arr1.length > 0) {
    arr[i] = arr1.shift()!;
    i++;
  }

  while (arr2.length > 0) {
    arr[i] = arr2.shift()!;
    i++;
  }
};

/**
 * sort array using merge sort
 * @param arr array to sort
 * @param left starting index (default: 0)
 * @param right ending index (default: length arr - 1)
 */
const merge_sort_2 = (
  arr: number[],
  left: number = 0,
  right: number = arr.length - 1
) => {
  // find the pivot
  if (left >= right) {
    return;
  }
  const pivot = left + Math.floor((right - left) / 2);
  merge_sort_2(arr, left, pivot);
  merge_sort_2(arr, pivot + 1, right);
  merge(arr, left, pivot, right);
  return arr;
};

export default merge_sort_2;
