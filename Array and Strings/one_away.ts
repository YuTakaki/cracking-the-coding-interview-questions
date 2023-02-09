/* 

There are three types of edits that can be performed on strings:
insert a character, remove character, or replace a character.
Given two strings, write a function to check if there are one edit (
or zero edits) away

pale, ple   -> true
pales, pale -> true
pale, bale  -> true
pale, bake  -> false

*/

const check_one_way = (str1: string, str2: string): boolean => {
  if (str1.length === str2.length) return equal_length(str1, str2);
  if (str1.length + 1 === str2.length) return equal_length(str1, str2);
  if (str1.length - 1 === str2.length) return equal_length(str2, str1);

  return false;
};

const equal_length = (str1: string, str2: string): boolean => {
  let notMatch = false;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (notMatch) return false;
      notMatch = true;
    }
  }
  return true;
};

const not_equal_length = (str1: string, str2: string): boolean => {
  let index1 = 0;
  let index2 = 0;

  while (index1 < str1.length && index2 < str2.length) {
    if (str1[index1] !== str2[index2]) {
      if (index1 !== index2) {
        return false;
      }
      index2 += 1;
    } else {
      index1 += 1;
      index2 += 1;
    }
  }
  return true;
};

const case1 = check_one_way("pale", "bale");
const case2 = check_one_way("pale", "bake");
const case3 = check_one_way("pale", "ple");
const case4 = check_one_way("pales", "pale");

console.log(case1);
console.log(case2);
console.log(case3);
console.log(case4);
