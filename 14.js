const run = (n, cache) => {
  var count = 1, o = n
  while (n > 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1
    if(cache[n])
      [count, n] = [count+cache[n]-1, 1]
    count++
  }
  cache[o] = count
  return count
},
cache=Array(1e6).fill(0)
var max = { num: 0, len: 0}
for(var num = 1; num<=1e6; num++){
  var len = run(num, cache)
  max =  len > max.len ? {num, len} : max
}
console.log(max.num)
