const puzzles = require('fs').readFileSync('./data/p096_sudoku.txt', 'utf-8').split('Grid').slice(1).map(v => v.split('\n').slice(1, 10).map(v => v.split('').map(Number)))

const prunePossibilities = (puzzleOptions, row, col, val) => {
    for (let k = 0; k < 9; k++) {
      puzzleOptions[row][k] = puzzleOptions[row][k].filter(v => v !== val)
      puzzleOptions[k][col] = puzzleOptions[k][col].filter(v => v !== val)
    }
    let x = Math.floor(row / 3) * 3,
      y = Math.floor(col / 3) * 3
    for (let k = 0; k < 3; k++)
      for (let l = 0; l < 3; l++)
        puzzleOptions[x + k][y + l] = puzzleOptions[x + k][y + l].filter(v => v !== val)
    puzzleOptions[row][col] = []
  },
  applyDeductions = puzzle => {
    let deductions = true,
      solved = false;
    let puzzleOptions = new Array(9).fill(0).map(v => new Array(9).fill([1, 2, 3, 4, 5, 6, 7, 8, 9]))
    //first round of elimination
    for (let i = 0; i < 9; i++)
      for (let j = 0; j < 9; j++)
        if (puzzle[i][j] !== 0)
          prunePossibilities(puzzleOptions, i, j, puzzle[i][j])
    //subsequent rounds of elimination
    while (deductions) {
      deductions = false, solved = true
      //find naked singles
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (puzzleOptions[i][j].length === 0 && puzzle[i][j] === 0) //these conditions are impossible in a valid sudoku
            return {
              somethingIsWrong: true
            }
          if (puzzleOptions[i][j].length === 1) {
            deductions = true
            puzzle[i][j] = puzzleOptions[i][j][0]
            prunePossibilities(puzzleOptions, i, j, puzzleOptions[i][j][0])
          } else if (puzzleOptions[i][j].length !== 0) {
            solved = false
          }
        }
      }
      //find hidden singles and pointing pairs
      for (let grpIndex = 0; grpIndex < 9; grpIndex++) {
        let row = puzzleOptions[grpIndex]
        let col = puzzleOptions.map(v => v[grpIndex])
        let box = puzzleOptions.slice(Math.floor(grpIndex / 3) * 3, Math.floor(grpIndex / 3) * 3 + 3).flatMap(v => v.slice(grpIndex % 3 * 3, grpIndex % 3 * 3 + 3))
        for (let digit = 1; digit < 10; digit++) {
          //hidden singles
          if (row.filter(v => v.includes(digit)).length === 1) {
            let index = row.findIndex(v => v.includes(digit))
            puzzle[grpIndex][index] = digit
            prunePossibilities(puzzleOptions, grpIndex, index, digit)
            deductions = true
          }
          if (col.filter(v => v.includes(digit)).length === 1) {
            let index = col.findIndex(v => v.includes(digit))
            puzzle[index][grpIndex] = digit
            prunePossibilities(puzzleOptions, index, grpIndex, digit)
            deductions = true
          }
          if (box.filter(v => v.includes(digit)).length === 1) {
            let index = box.findIndex(v => v.includes(digit))
            let x = Math.floor(grpIndex / 3) * 3,
              y = Math.floor(grpIndex % 3) * 3
            puzzle[x + Math.floor(index / 3)][y + index % 3] = digit
            prunePossibilities(puzzleOptions, x + Math.floor(index / 3), y + index % 3, digit)
            deductions = true
          }
          //pointing pairs
          if (box.filter(v => v.includes(digit)).length === 2) {
            let index1 = box.findIndex(v => v.includes(digit))
            let index2 = index1 + 1 + box.slice(index1 + 1).findIndex(v => v.includes(digit))
            //same row
            if (Math.floor(index1 / 3) === Math.floor(index2 / 3)) {
              let row = Math.floor(grpIndex / 3) * 3 + Math.floor(index1 / 3)
              for (let k = 0; k < 9; k++) {
                if (Math.floor(k / 3) != grpIndex % 3)
                  puzzleOptions[row][k] = puzzleOptions[row][k].filter(v => v !== digit)
              }
            }
            //same column
            else if (index1 % 3 === index2 % 3) {
              let col = (grpIndex % 3) * 3 + index1 % 3
              for (let k = 0; k < 9; k++) {
                if (Math.floor(k / 3) != Math.floor(grpIndex / 3))
                  puzzleOptions[k][col] = puzzleOptions[k][col].filter(v => v !== digit)
              }
            }
          }
        }
      }
    }
    return {
      solved,
      puzzleOptions
    }
  },
  solve = puzzle => {
    let solved = applyDeductions(puzzle)
    if (solved.somethingIsWrong)
      return false
    else if (solved.solved)
      return puzzle
    else { //guessing phase with recursion
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (puzzle[i][j] === 0) {
            let options = solved.puzzleOptions[i][j]
            for (let k = 0; k < options.length; k++) {
              let newPuzzle = puzzle.map(v => v.slice())
              newPuzzle[i][j] = options[k]
              let solved = solve(newPuzzle)
              if (solved)
                return solved
            }
          }
        }
      }
    }
    return false
  }
let total = 0;
for (let i = 0; i < puzzles.length; i++) {
  let solved = solve(puzzles[i])
  let num = solved[0][0] * 100 + solved[0][1] * 10 + solved[0][2]
  total += num
}
console.log(total)
//48ms