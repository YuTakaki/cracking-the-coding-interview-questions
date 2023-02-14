// tests/is_unique.spec.tx
import { assert } from "chai";
import { describe, it } from "mocha";
import check_unique from "../../array_string/is_unique";

describe("Check Unique of the word", () => {
  it("should return true", () => {
    const result = check_unique("dog");
    assert.equal(result, true);
  });
  it("should return false", () => {
    const result = check_unique("doog");
    assert.equal(result, false);
  });
});
