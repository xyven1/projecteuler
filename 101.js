const polynomial = (n, coeffs) => {
    return coeffs.reduce((a, v, i) => a + v * (n ** i), 0)
  },
  rowReduceAugmentedMatrix = m => {
    var n = m.length,
      x = [...new Array(n)].map(v => 0)
    for (var i = 0; i < n; i++) {
      var t = m[i][i]
      for (var j = 0; j < n + 1; j++) {
        m[i][j] = m[i][j] / t
      }
      for (var j = 0; j < n; j++) {
        if (j != i) {
          t = m[j][i]
          for (var k = 0; k < n + 1; k++) {
            m[j][k] = m[j][k] - m[i][k] * t
          }
        }
      }
    }
    for (var i = 0; i < n; i++) {
      x[i] = m[i][n]
    }
    return x
  }
const order = 10,
  func = new Array(order + 1).fill(0).map((v, i) => i % 2 ? -1 : 1), //polynomial with alternating sign
  firstNterms = new Array(order + 1).fill(0).map((v, i) => polynomial(i, func)) //precompute values up to order
let total = 0;
for (let i = 1; i <= order; i++) {
  let mat = new Array(i).fill(0).map((v, r) => (new Array(i).fill(0).map((v, c) => (r + 1) ** c)).concat(firstNterms[r+1]))
  let ans = rowReduceAugmentedMatrix(mat)
  let FIT = polynomial(i + 1, ans)
  total += FIT
}
console.log(total)
//.62ms