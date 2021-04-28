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
}, primes = eratosthenes(1e4).filter(n=>n>1e3), //assume answer must be at least 7 digits
perms = (n1, n2) => (''+n1).split('').sort().join('') == (''+n2).split('').sort().join('')
var max = {p:1.5}, test = []
for(let i = 0; i<primes.length; i++){
  for(let j = i; j<primes.length; j++){
    var n = primes[i]*primes[j]
    if(n>1e7) break
    var p = (primes[i]-!(i==j))*(primes[j]-1)
    if(n/p<max.p && perms(p, n)) max = {n: n, phi:p, p:n/p}
  }
}
console.log(max, `${process.hrtime(t0)[0]}s, ${process.hrtime(t0)[1]/1e6}ms`)
//58ms