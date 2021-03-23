var t0 = process.hrtime()
const eratosthenes = n => {
  var array = Array(n).fill(1), output = [2];
  for (var i = 3; i*i <= n; i += 2)
    if (array[i])
      for (var j = i * i; j < n; j += i*2)
        array[j] = 0
  for (var i = 3; i < n; i += 2)
    if(array[i])
      output.push(i)
  return output
}, primes = eratosthenes(1e5), isPrime = (num, primes) => { for(let i = 0; primes[i]**2 <= num; i++) if(num % primes[i] === 0) return 0; return num > 1}
for(i = 1, prev = 1,prime = 0;; i++){
  prime += 1*isPrime(prev, primes)
	prev = prev + 2*(Math.floor((i-1)/4)+1)
  if(i>1 && (prime/i)<.1){
    console.log(Math.ceil((i+1)/2))
    break
  }
}
//53ms