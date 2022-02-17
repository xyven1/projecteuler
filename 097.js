const exp = 7830457,
  mod = 1e10
let n = 28433;
for (let i = 0; i < exp; i++)
  n = (n * 2) % mod
console.log(n + 1)
//73ms