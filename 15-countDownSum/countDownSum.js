class MySolution {
  countDownSum(num) {
    if (num == 1){
      return num; // return the num when num reached 1
    }else {
      return num + this.countDownSum(num - 1); // recursively adds the number less than num
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;