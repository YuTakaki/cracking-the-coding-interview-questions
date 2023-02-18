import { describe, it } from "mocha";
import { assert } from "chai";
import insertion_sort from "../../sorting_algorithm/insertion_sort";

describe("Chech Insertion Sort", () => {
  it("should return the sorted number in ascending order", () => {
    const result_1 = insertion_sort([5, 4, 3, 2, 1]);
    const expected_1 = [1, 2, 3, 4, 5];
    assert.deepEqual(result_1, expected_1);

    const result_2 = insertion_sort([3, 2, 1, 4, 5]);
    const expected_2 = [1, 2, 3, 4, 5];
    assert.deepEqual(result_2, expected_2);
  });
});
