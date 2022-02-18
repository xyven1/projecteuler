const triangles = require('fs').readFileSync('./data/p102_triangles.txt', 'utf-8').trim().split('\n').map(line => line.split(',').map(Number))
const sign = (v1, v2) => (v1[0] * v2[1] - v2[0] * v1[1]) >= 0,
  containsOrigin = arr => {
    let first = sign(arr[2], arr[0])
    return sign(arr[0], arr[1]) === first && sign(arr[1], arr[2]) === first
  }
let total = 0
for (let i = 0; i < triangles.length; i++)
  total += containsOrigin([triangles[i].slice(0, 2), triangles[i].slice(2, 4), triangles[i].slice(4, 6)])
console.log(total)
//0.61ms