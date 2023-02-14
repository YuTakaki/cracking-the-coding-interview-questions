import { describe, it } from "mocha";
import { assert } from "chai";
import selection_sort from "../../sorting_algorithm/selection_sort";

describe("Chech Selection Sort", () => {
  it("should return the sorted number in ascending order", () => {
    const result_1 = selection_sort([5, 4, 3, 2, 1]);
    const expected_1 = [1, 2, 3, 4, 5];
    assert.deepEqual(result_1, expected_1);

    const result_2 = selection_sort([3, 2, 1, 4, 5]);
    const expected_2 = [1, 2, 3, 4, 5];
    assert.deepEqual(result_2, expected_2);
  });
});
