var t0 = process.hrtime()
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
for(let i = 0; i<limit; i++){
  first = i
  if(recursive(i, cache)>5000) break
}
console.log(first, `${process.hrtime(t0)[0]}s, ${process.hrtime(t0)[1]/1e6}ms`)
//2.7ms, solved in 8m09s