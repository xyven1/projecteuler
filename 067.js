const triangle =  require('fs').readFileSync('./data/p067_triangle.txt', 'utf-8').trim()
const arr = triangle.split('\n').map(r=>r.split(' ').map(Number))
for (let i = arr.length-2; i >= 0; i--)
  for (let j = 0; j < arr[i].length; j++)
    arr[i][j] +=  Math.max(arr[i+1][j], arr[i+1][j+1])
console.log(arr[0][0])
//1.3ms