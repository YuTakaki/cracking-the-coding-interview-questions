/**
 * check if the word passed in the parameter is a plindrome
 * @param word
 * @return boolean
 */

const check_if_palindrome_permutation = (word: string): boolean => {
  // setup a map
  const map: Record<string, number> = {};

  for (let letter of word) {
    map[letter] = map[letter] + 1 || 1;
  }

  let isOdd: boolean = false;

  for (let count of Object.values(map)) {
    if (count % 2 === 1) {
      if (isOdd) return false;
      isOdd = true;
    }
  }
  return true;
};

const test1 = check_if_palindrome_permutation("ccoopp");
const test2 = check_if_palindrome_permutation("god");
console.log(test1);
console.log(test2);
