const phi = (n, p) => {
  var value = n
  for(let i = 0; p[i]<n; i++) if(n%p[i]==0) value*=(1-(1/p[i]))
  return value
}, isPrime = num => { for(let i = 2; i*i <= num; i++) if(!(num % i)) return 0; return num > 1}

var i = 2, primes = [], max = {i:1, p:0}, bound = 1e6
for(; max.i<=bound; i++) if(isPrime(i))[max.i, primes] =[i*max.i, [...primes, i]] //generates intial guess for n
max.i /= i-1
max.p = max.i/phi(max.i, primes) 
for(let m = 0; max.i*m<bound; m++){ //checks mutiples
  let p = max.i*m/phi(max.i*m, primes)
  max = p > max.p ? {i:max.i*m,p} : max
}
console.log(max)
//.1ms