var matrix = require('fs').readFileSync('./data/p081_matrix.txt', 'utf-8').split('\n').map(v=>v.split(',').map(Number))
for(let i = matrix.length-1; i>=0; i--)
  for(let j = matrix[0].length-1; j>=0; j--){
    var newVal = Math.min(matrix[i+1]?.[j]||Infinity, matrix[i][j+1]||Infinity)
    matrix[i][j] += (newVal == Infinity) ? 0 : newVal
  }
console.log(matrix[0][0])
//.9ms (exluding file load)