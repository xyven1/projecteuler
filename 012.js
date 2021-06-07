const numFactors = n =>{
  var num = 0
  for(let i = 1; i*i<=n; i++)
    num+= n%i==0 ? i*i==n ? 1 : 2 : 0
  return num
}, tri = n => n*(n+1)/2
var i
for(i = 1; numFactors(tri(i))<5e2; i++);
console.log(tri(i))