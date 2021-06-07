const largestPrime  = 999983
var max = {n:0,d:0, p: Math.floor(largestPrime*3/7)/largestPrime}
for(let d = largestPrime; d<1e6; d++)
  for(let n = Math.floor(d*max.p); n<d*3/7; n++)
    if(n/d>max.p)
      max = {n, d, p: n/d}
console.log(max.n)
//.0313ms