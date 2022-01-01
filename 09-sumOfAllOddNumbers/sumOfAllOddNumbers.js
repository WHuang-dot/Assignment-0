function sumOfAllOddNumbers(nums) {
  let tally = 0;
  for(let i = 0; i<nums.length;i++){
    if(nums[i]%2 === 1){
      tally++;
    }
  }
  return tally;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;