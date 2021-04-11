var max = 0;
for (let i = 90n; i < 100n; i++) {
  for (let j = 90n; j < 100n; j++) {
    var sumOfDigits = (i**j).toString().split('').reduce((a,b)=> a+parseInt(b), 0)
    max = (sumOfDigits > max)*sumOfDigits||max
  }
}
console.log(max)
//4.4ms