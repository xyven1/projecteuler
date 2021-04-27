//much easier solution, but I only came up with it after solving the problem
const isPrime = num => { for(let i = 2; i*i <= num; i++) if(!(num % i)) return 0; return num > 1}
var num = 1, i = 0
for(; num<1e6; i++) if(isPrime(i)) num*=i
console.log(num/(i-1))
//.029ms

//My original very slow and overly complex solution
//--------- 
// var t0 = process.hrtime()
// const eratosthenes = n => {
//   var array = Array(n).fill(1), output = [2];
//   for (var i = 3; i*i <= n; i += 2)
//     if (array[i])
//       for (var j = i * i; j < n; j += i*2)
//         array[j] = 0
//   for (var i = 3; i < n; i += 2)
//     if(array[i])
//       output.push(i)
//   return output 
// }, primes = eratosthenes(1e3),
// phi = n => {
//   var value = n
//   for(let i = 0; primes[i]<n; i++)
//     if(n%primes[i]==0)
//       value*=(1-(1/primes[i]))
//   return value
// }
// var t0 = process.hrtime()
// var max = {i: 0, p: 0}
// for(let i = 2; i<=1e6; i++ ){
//   let p = i/phi(i)
//   max = p > max.p ? {i,p} : max
// }
// console.log(max, `${process.hrtime(t0)[0]}s, ${process.hrtime(t0)[1]/1e6}ms`)
//957ms
