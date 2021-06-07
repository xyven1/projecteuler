const isPrime = num => { for(let i = 2; i*i <= num; i++) if(num % i === 0) return false; return num > 1},
rotations = str => [...Array(str.length).keys()].map(n=>str.substr(-n, n) + str.substr(0, str.length-n)),
allOdd = num => (num==2) || ![...num+''].some(n=>n%2==0)
var count = 0;
for(i = 1; i<1000000; i++)
	if(isPrime(i) && allOdd(i) && !rotations(i.toString()).some(n=>!isPrime(n)))
  	count++
console.log(count)
