function isPalindrome(word) {
  let counter = word.length - 1; //count for the reversed String index
  for (let i = 0; i < word.length / 2; i++) { //loop String the word until the middle of the String
    if (word[i] !== word[counter]) return false; // if any of the letter is not equal from left to right to right to left, return false
    counter--;
  }
  return true; // return true if all the letters are equals
}

// Do not edit this line;
module.exports = isPalindrome;