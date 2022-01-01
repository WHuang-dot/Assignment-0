function countOfAllIndexMatchingNumbers(nums) {
  let matching = 0;
  for(let i = 0; i<nums.length;i++){
    if(nums[i] === i){matching++;}
  }
  return matching;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;