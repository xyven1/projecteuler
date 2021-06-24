var t0 = process.hrtime()
const gcd = (a, b) => b ? gcd(b, a % b) : a,
numUniqueCuboids = limit => {
  var total = 0
  for(let m=2; m<=limit; m++)
    for(let n = 1+!(m%2==0); n<m && m*n<=limit; n+=1+!(m%2==0))
      if(gcd(m,n) == 1)
        for(let k = 1;; k++){
          let a = k*Math.min(m*m-n*n, 2*m*n), b = k*Math.max(m*m-n*n, 2*m*n)
          if(a>limit || b>limit*2) break
          total+=Math.max(0, Math.trunc(a-b/2+1)) + (b<=limit)*Math.trunc(a/2)
        }
  return total
}, target = 1e6
var L =100, U = 2*L
while(U!=L+1){
  if(numUniqueCuboids(L)<target && numUniqueCuboids(U)>target){
    var mid = Math.trunc((L+U)/2)
    if(target<numUniqueCuboids(mid)) U = mid
    else L = mid
  }else {
    U*=2
    L*=2
  }
}

console.log(U, `${process.hrtime(t0)[0]}s, ${process.hrtime(t0)[1]/1e6}ms`)
//7.1ms