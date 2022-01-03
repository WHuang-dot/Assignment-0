function countOfAllIndexMatchingNumbers(nums) {
  let matching = 0;
  for(let i = 0; i<nums.length;i++){ //Loop through the array.
    if(nums[i] === i){matching++;} //if index matching matching is incremented.
  }
  return matching;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;