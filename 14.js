function run(n) {
  var count = 1
  while (n > 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1
    count++
  }
  return count
}
var max = {
  num: 0,
  len: 0
}
for(n = 1; n<=1000000; n++){
  var len = run(n)
  if (len > max.len)
    max = {num: n, len: len}
}
console.log(max.num)
