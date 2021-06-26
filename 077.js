const recursive = (v, cache, remaining = v, prev) =>{
  if(cache[remaining][prev]>0) //function only depends on remaining sum and previous value. If value has been cached, then just use that value
    return cache[remaining][prev]
  var count = 0
  for(let i = Math.min(remaining, prev||(v-1)); i>0; i--)
    if(isPrime(i))
      count += remaining-i==0 ? 1 : recursive(v, cache, remaining-i, i)
  cache[remaining][prev] = count
  return count
}, limit = 100,
isPrime = num => { for(let i = 2; i*i <= num; i++) if(!(num % i)) return 0; return num > 1 }
var cache = Array(limit+1).fill().map(()=>Array(limit+1).fill(0));
var first = 0
while(!(recursive(first, cache)>5000)) first++
console.log(first)
//2.5ms, solved in 8m09s