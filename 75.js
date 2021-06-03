var t0 = process.hrtime()
const gcd = (a, b) => a==b? a : a > b? gcd(a-b, b) : gcd(a, b-a),
limit = 1.5e6
var unique = Array(limit).fill(0)
for(let m=2; m<Math.sqrt(limit/2); m++)
  for(let n = 1+!(m%2==0); n<m; n+=1+!(m%2==0))
    if(gcd(m,n) == 1)
      for(let k = 1, p = 2*m*(m+n); p*k<limit; k++)
        unique[k*p]++
console.log(unique.reduce((a,v)=>a+(v==1),0), `${process.hrtime(t0)[0]}s, ${process.hrtime(t0)[1]/1e6}ms`)
//90ms