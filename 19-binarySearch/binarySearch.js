class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let mid = Math.floor(nums.length / 2); //set mid
    if (nums.length === 1 && nums[0] != target) {
      return false; //if target still not found, return false
    }
    if (target === nums[mid]) {
      return true; // target found at mid
    } else if (target < nums[mid]) {
      return this.binarySearch(nums.slice(0, mid), target); //recursively check the right side
    } else if (target > nums[mid]) {
      return this.binarySearch(nums.slice(mid), target); //recursively check the left side
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;