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
}, primes = eratosthenes(1e4).slice(1),
isPrime = num => { for(let i = 2; i*i <= num; i++) if(num % i === 0) return 0; return num > 1},
recursive = (n, arr = []) => {
  if(arr.length==n) return arr.reduce((a,v)=>a+primes[v],0)
  for (let p = arr[arr.length-1]||0; p < primes.length; p++){
    if(arr.map(v=>[[v,p],[p,v]]).flat().every(v=>isPrime(parseInt(''+primes[v[0]]+primes[v[1]]))))
      var t = recursive(n,[...arr, p])
      if(t) return t
    }
}
console.log(recursive(5))
//1s 300ms