function countOfAllBooleansAndStrings(arr) {
  let count = 0;
  for(let i = 0; i<arr.length;i++){ //loop through the array.
    if(typeof arr[i] === 'string' || typeof arr[i] === 'boolean'){ //if the type of the value is string or boolean, then count is incremented.
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;