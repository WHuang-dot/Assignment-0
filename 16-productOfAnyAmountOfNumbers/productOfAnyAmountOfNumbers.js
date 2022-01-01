function productOfAnyAmountOfNumbers(...args) {
let product=1;
  for(let i of args){
    product=product*i;
  }
return product;  // Insert code here;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;