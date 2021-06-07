const choose = (n,k) => Math.exp(logf(n) - logf(n-k) - logf(k)),
logf = n => (n + .5) * Math.log(n) - n + 0.9189385332046728 + 0.08333333333333333 / n - 0.002777777777777778 * Math.pow(n, -3);
var count = 0
for(let n = 23; n<=100; n++)
  for(let k = 1; k<=n/2; k++)
    if(choose(n,k)>1e6){
      count += n+1-2*k
      break
    }
console.log(count)