function sumOfAllEvenNumbers(nums) {
  let tally = 0; //initialize a tally
  for(let i = 0; i<nums.length;i++){ //loop through the array
    if(nums[i]%2 === 0){ //check if even, tally incremented if even.
      tally++;
    }
  }
  return tally;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;