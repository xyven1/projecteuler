var total = 0;
for (let i = 1, n = 1n, d = 1n; i <= 1000; i++) {
  [n,d] = [2n*d+n, d+n]
  total+=n.toString().length > d.toString().length
}
console.log(total)
//10.5ms