function countOfAllNumbersSmallerThanTarget(nums, target) {
  let smaller = 0;

  for(let i = 0; i<nums.length;i++){ // Loop through the array.
    if(nums[i]<target){ //if the value is less than the targer, then smaller number incremented.
      smaller++;
    }
  }
  return smaller;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;