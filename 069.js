const  isPrime = num => { for(let i = 2; i*i <= num; i++) if(!(num % i)) return 0; return num > 1}
var i = 2, num = 1, bound = 1e6
for( ; num<=bound; i++) if(isPrime(i)) num =i*num
num /= i-1
console.log(num)
//.024ms