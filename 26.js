const isPrime = num => { for(let i = 2; i*i <= num; i++) if(num % i === 0) return false; return num > 1}
var max = {d: 0, l: 0}
for(let i = 6; i<1000; i++){
  var l = 10n
  if(isPrime(i))
  	while(l%BigInt(i) != 1)
      l*=10n
  if(l>max.l) max = {i, l: l}
}
console.log(max.i)
