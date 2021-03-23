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
}, isPrime = num => { for(let i = 2; i*i <= num; i++) if(num % i === 0) return 0; return num > 1},
primes = eratosthenes(1e4)
var solution  = null
for(let i = 0; i<primes.length-1 && !solution; i++){
  [...Array(i+1).keys()].map(n=>primes.slice(n, n+primes.length-i)).forEach(a=>{
    if(a.reduce((a,b)=>a+b)<1e6 && isPrime(a.reduce((a,b)=>a+b)))
      solution = a.reduce((a,b)=>a+b, 0)
  })
}
console.log(solution)