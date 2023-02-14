// implement an algorithm if a string has all unique characters

const check_unique = (word: string): boolean => {
  const hashmap: Record<string, number> = {};
  for (let letter of word) {
    if (letter in hashmap) {
      return false;
    }
    hashmap[letter] = 1;
  }
  return true;
};

export default check_unique;
