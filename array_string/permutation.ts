// given two strings, write a method to decide if one is permutation of the other

const check_if_permutation = (str1: string, str2: string): boolean => {
  // check for the length of 2 string. return false if it's not equal
  if (str1.length != str2.length) return false;
  const hashmap: Record<string, number> = {};

  // count number of letters in the str1
  for (let letter of str1) {
    hashmap[letter] = hashmap[letter] + 1 || 1;
  }

  // compare the count in str2
  for (let letter of str2) {
    if (!(letter in hashmap)) return false;

    hashmap[letter] -= 1;

    if (hashmap[letter] < 0) return false;
  }

  // every values should be equal to zero
  return Object.values(hashmap).every((val: number) => val === 0);
};

console.log(check_if_permutation("assss   ", "assss 3 "));
