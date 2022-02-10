const words = require('fs').readFileSync('./data/p042_words.txt', 'utf-8').split(',').map(v=>v.slice(1, -1)),
  isTriangular = (num) => {
    for (var n = 1, sum = 0; sum <= num; n++) {
      sum = sum + n;
      if (sum == num) return 1
    }
    return 0
  }
console.log(words.reduce((a, b) => a + 1 * (isTriangular(b.split('').reduce((a, char) => a + char.charCodeAt(0) - 64, 0))), 0))