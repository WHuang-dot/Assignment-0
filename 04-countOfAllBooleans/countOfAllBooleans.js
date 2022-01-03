function countOfAllBooleans(arr) {
  let counter = 0;
  for(let i = 0; i<arr.length;i++){ //loop through the the array
    if(arr[i] === true || arr[i] === false){ // if the value of the array is true or false, counter is increased
      counter++;
    }
  }

  return counter;
}

// Do not edit this line;
module.exports = countOfAllBooleans;