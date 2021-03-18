const isPal  = num => [...num+''].reverse().join('') == num
const isBinPal = (n) => { 
  var rev = 0, c = n
  while (n > 0){ 
    rev <<= 1
    if ((n & 1) == 1) 
      rev ^= 1
    n >>= 1
  } 
  return rev == c; 
}
var sum = 0
for(var i = 1; i<1000000; i++) sum += i*(isBinPal(i)&&isPal(i))
console.log(sum)
