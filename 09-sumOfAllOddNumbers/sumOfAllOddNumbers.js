function sumOfAllOddNumbers(nums) {
  let tally = 0;
  for(let i = 0; i<nums.length;i++){ //Loop through the array.
    if(nums[i]%2 === 1){ //check if odd.
      tally++; //tally incremented if odd.
    }
  }
  return tally;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;