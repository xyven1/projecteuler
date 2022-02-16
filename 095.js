const divSum = (num) => {
  let result = 1;
  for (let i = 2; i * i <= num; i++) {
    result += num % i === 0
      ? (i + (i * i === num ? 0 : num / i) )
      : 0;
  }
  return result;
}
let sumDivs = []
var t0 = process.hrtime()
for (let i = 0; i < 1e6; i++) {
  sumDivs.push(divSum(i))
}
let longestChain = []

console.log(`${process.hrtime(t0)[0]}s, ${process.hrtime(t0)[1]/1e6}ms`)
