function pairSum(nums, target) {
  if(nums.length <=1){
    throw "invalid"
  }
  for(let i = 0; i<nums.length;i++){ //loop through the array
    for(let j = 0; j<nums.length;j++){ //nest a loop to the array within the array
      if(nums[i] + nums[j] === target){ // if the value of the array adds up to the target with any value of the array, return true
        return true;
      }
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;