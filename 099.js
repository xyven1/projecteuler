const expPairs = require('fs').readFileSync('./data/p099_base_exp.txt', 'utf-8').split('\n').map(v => v.split(',').map(Number))
let max = {v:0, i:0}
for (let i = 0; i < expPairs.length; i++) {
  let v = expPairs[i][1] * Math.log(expPairs[i][0])
  max = v > max.v ? {v, i} : max
}
console.log(max.i+1)
//0.76ms