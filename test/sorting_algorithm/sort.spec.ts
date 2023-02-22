import { describe, it } from "mocha";
import { assert } from "chai";

import insertion_sort from "../../sorting_algorithm/insertion_sort";
import selection_sort from "../../sorting_algorithm/selection_sort";
import bubble_sort from "../../sorting_algorithm/bubble_sort";
import merge_sort from "../../sorting_algorithm/merge_sort";
import merge_sort2 from "../../sorting_algorithm/merge_2_sort";
import quick_sort from "../../sorting_algorithm/quick_sort";

describe("Check Insertion Sort", () => {
  it("should return the sorted number in ascending order", () => {
    const result_1 = insertion_sort([5, 4, 3, 2, 1]);
    const expected_1 = [1, 2, 3, 4, 5];
    assert.deepEqual(result_1, expected_1);

    const result_2 = insertion_sort([3, 2, 1, 4, 5]);
    const expected_2 = [1, 2, 3, 4, 5];
    assert.deepEqual(result_2, expected_2);
  });
});

describe("Check Selection Sort", () => {
  it("should return the sorted number in ascending order", () => {
    const result_1 = selection_sort([5, 4, 3, 2, 1]);
    const expected_1 = [1, 2, 3, 4, 5];
    assert.deepEqual(result_1, expected_1);

    const result_2 = selection_sort([3, 2, 1, 4, 5]);
    const expected_2 = [1, 2, 3, 4, 5];
    assert.deepEqual(result_2, expected_2);
  });
});

describe("Check Bubble Sort", () => {
  it("should return the sorted number in ascending order", () => {
    const result_1 = bubble_sort([5, 4, 3, 2, 1]);
    const expected_1 = [1, 2, 3, 4, 5];
    assert.deepEqual(result_1, expected_1);

    const result_2 = bubble_sort([3, 2, 1, 4, 5]);
    const expected_2 = [1, 2, 3, 4, 5];
    assert.deepEqual(result_2, expected_2);
  });
});

describe("Check Merge Sort", () => {
  it("should return the sorted number in ascending order", () => {
    const result_1 = merge_sort([5, 4, 3, 2, 1]);
    const expected_1 = [1, 2, 3, 4, 5];
    assert.deepEqual(result_1, expected_1);

    const result_2 = merge_sort([3, 2, 1, 4, 5]);
    const expected_2 = [1, 2, 3, 4, 5];
    assert.deepEqual(result_2, expected_2);
  });

  it("should return the sorted number in ascending order", () => {
    const test1 = [5, 4, 3, 2, 1];
    const output1 = merge_sort2(test1);
    const expected_1 = [1, 2, 3, 4, 5];
    assert.deepEqual(test1, expected_1);
    assert.equal(test1, output1);

    const test2 = [3, 5, 4, 2, 1];
    const output2 = merge_sort2(test2);
    const expected_2 = [1, 2, 3, 4, 5];
    assert.deepEqual(test2, expected_2);
    assert.equal(test2, output2);
  });
});

describe("Check Quick Sort", () => {
  it("should return the sorted number in ascending order", () => {
    const test1 = [5, 4, 3, 2, 1];
    const output1 = quick_sort(test1);
    const expected_1 = [1, 2, 3, 4, 5];
    assert.deepEqual(test1, expected_1);
    assert.equal(test1, output1);

    const test2 = [3, 5, 4, 2, 1];
    const output2 = quick_sort(test2);
    const expected_2 = [1, 2, 3, 4, 5];
    assert.deepEqual(test2, expected_2);
    assert.equal(test2, output2);
  });
});
