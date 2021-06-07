const isPrime = num => { for(let i = 2; i*i <= num; i++) if(num % i === 0) return 0; return num > 1},
truncPrime = num=> ![...Array((num+'').length-1).keys()].some(n=>!isPrime((num+'').substr(n+1)) || !isPrime((num+'').substr(0, n+1)))
var sum = 0
for(var i = 8; i<1e6; i++) sum+= i*(isPrime(i) && truncPrime(i))
console.log(sum)
