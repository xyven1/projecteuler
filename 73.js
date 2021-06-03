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
}, limit = 12000,
primes = eratosthenes(limit/2)
var total = 0
for(let d = 5; d<=limit; d++){
  var facts  = []
  for (var i = 0; 2*primes[i]<=d; i++)
    if(d%primes[i]==0)
      facts.push(primes[i])
  l:for(var n = (d/3+1) | 0; 2*n<d; n++){
    for(var i = 0; 2*facts[i]<=n; i++)
      if(n%facts[i] == 0)
        continue l
    total++
  }
}
console.log(total)
//94ms