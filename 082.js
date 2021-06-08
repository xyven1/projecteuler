var matrix = require('fs').readFileSync('./data/p082_matrix.txt', 'utf-8').split('\n').filter(a=>a.length>0).map(v=>v.split(',').map(Number))

for(let col = matrix[0].length-2; col>=0; col--){
  var minGoingUp = [], minGoingDown = []
  for(let i = 0; i<matrix.length; i++){
    minGoingUp.push(matrix[i][col] + Math.min((minGoingUp[i-1])||Infinity,matrix[i][col+1]))
    minGoingDown.push(matrix[matrix.length-1-i][col] + Math.min((minGoingDown[i-1])||Infinity,matrix[matrix.length-1-i][col+1]))
  }
  minGoingDown.reverse()
  for(let row = 0; row<matrix.length; row++)
    matrix[row][col] += Math.min((minGoingUp[row-1])||Infinity, matrix[row][col+1],(minGoingDown[row+1])||Infinity)
}
console.log(Math.min(...matrix.map(v=>v[0])))
//8ms (exluding file load)