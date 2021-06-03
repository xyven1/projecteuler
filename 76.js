const recursive = (v, cache, remaining = v, prev) =>{
  if(cache[remaining][prev]>0) //function only depends on remaining sum and previous value. If value has been cached, then just use that value
    return cache[remaining][prev]
  var count = 0
  for(let i = Math.min(remaining, prev||(v-1)); i>0; i--)
    count += remaining-i==0 ? 1 : recursive(v, cache, remaining-i, i)
  cache[remaining][prev] = count
  return count
}, limit = 100 
var cache = Array(limit+1).fill().map(()=>Array(limit+1).fill(0));
console.log(recursive(limit, cache))
//3ms