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
}, phi = n => {
  var res = i, iTemp = i
  for(var p = 0; primes[p]*2<=i && iTemp>1; p++){
    if(iTemp%primes[p]==0){
      res*= 1-1/primes[p]
      while(iTemp%primes[p]==0)
        iTemp/=primes[p]
    }
  }
  return Math.trunc(res - 1*(iTemp > 1))
}, limit = 1e6, primes = eratosthenes(limit), array = [...Array(limit-1).keys()].map(v=>v+2)
var total = 0
for(var i = 2; i<=limit; i++)
  total+=phi(i)
console.log(total)
//20s