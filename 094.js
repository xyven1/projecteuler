// const areCoprimes = (n1, n2) => {
//   for (let i = 2; i <= (n1 > n2 ? n2 : n1); i++)
//     if (n1 % i == 0 && n2 % i == 0) return false
//   return true
// },
// pLim = 1e9
// let triples = []
// let total = 0;
// l:for (let m = 1;; m++) //these loops generate all possible pythagorean triples under pLim using Euclid formula
//   for (let n = 1 + 1 * (m % 2 == 1); n < m; n += 2)
//     if (areCoprimes(m, n)){
//       let a = Math.min(m * m - n * n,  2 * m * n),
//           c = m * m + n * n;
//       if(Math.abs(2*a-c)==1){
//         triples.push([2*a,c, m, n])
//         total+=2*a+2*c
//         if(2*a+2*c>pLim) break l
//       }
//     }
// console.log(total)
//
//The above code is too slow, so I looked up the patterns of m and n for valid pythagorean triples and found two series which matched
//I then pulled the extended list of numbers off OEIS and now it runs instantly (in the microseconds)
//
//let list1 = [2, 4, 7, 15, 26, 56, 97, 209, 362, 780, 1351, 2911, 5042, 10864, 18817, 40545, 70226, 151316, 262087, 564719, 978122, 2107560, 3650401, 7865521, 13623482, 29354524, 50843527, 109552575, 189750626, 408855776, 708158977, 1525870529, 2642885282, 5694626340],
//     list2 = [1, 4, 15, 56, 209, 780, 2911, 10864, 40545, 151316, 564719, 2107560, 7865521, 29354524, 109552575, 408855776, 1525870529, 5694626340, 21252634831, 79315912984, 296011017105, 1104728155436, 4122901604639, 15386878263120 ],
//     total = 0;
// for(let i = 0; i < list1.length; i++){
//   let m = list1[i];
//   let n = list2[Math.floor(i/2)]
//   console.log(m, n)
//   let a = Math.min(m * m - n * n,  2 * m * n),
//       c = m * m + n * n;
//   if(2*a+2*c>limit) 
//     break
//   total+=2* a+2*c
//   // console.log(total)
// }
// console.log(total, `${process.hrtime(t0)[0]}s, ${process.hrtime(t0)[1]/1e6}ms`)

//Generates pythagorean triples using euclids formula, but for the exact 
//values of m & n such that with triple (a,b,c) | a < b, abs(2*a-c)==1.
//uses two magic infinite series to generate m & n to produce a triple
var t0 = process.hrtime()
const bigIntMin = (a, b) => a > b ? b : a,
  limit = 10n ** 9n

let genN = [0n, 1n], //starting values for series
  genM = [1n, 2n, 4n, 7n],
  total = 0n;
for (let i = 0;; i++) {
  genM = genM.slice(1).concat(4n * genM[2] - genM[0]) //generating the next m
  if (i % 2 == 0)
    genN = genN.slice(1).concat(4n * genN[1] - genN[0]) //generating the next n, but only every other time
  let n = genN[0],
    m = genM[0]
  let a = i % 2 == 0 ? m ** 2n - n ** 2n : 2n * m * n,
    c = m ** 2n + n ** 2n;
  let p = 2n * a + 2n * c
  if (p > limit)
    break
  total += p
}
console.log(total.toString(), `${process.hrtime(t0)[0]}s, ${process.hrtime(t0)[1]/1e6}ms`)
//.07ms