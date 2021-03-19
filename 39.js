const areCoprimes = (n1, n2) => {
    for (let i = 2; i <= (n1 > n2 ? n2 : n1); i++)
      if (n1 % i == 0 && n2 % i == 0) return false
    return true
  },
  pLim = 1e3,
  perimeters = {}
for (let m = 1; 2 * m * (m + 1) <= pLim; m++) //these loops generate all possible pythagorean triples under pLim using Euclid formula
  for (let n = 1 + 1 * (m % 2 == 1); n < m; n += 2)
    if (areCoprimes(m, n))
      for (let k = 1, p = 2 * m * (m + n); p * k <= pLim; k++)
        perimeters[p * k] = (perimeters[p * k] || 0) + 1
console.log(Object.keys(perimeters).reduce((a, b) => perimeters[a] > perimeters[b] ? a : b)) //finds the key with greated value