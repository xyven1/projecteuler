const eratosthenes = n => {
  var array = Array(n).fill(1), output = [2];
  for (var i = 3; i*i <= n; i += 2)
    if (array[i])
      for (var j = i * i; j < n; j += i*2)
        array[j] = 0
  for (var i = 3; i < n; i += 2)
    if(array[i])
      output.push(i)
  return output
}, primes = eratosthenes(1e6),
distinct = (num, d) => {
  var numP = 0
  for (let i = 0; primes[i]*(d-numP)<= num && numP<d; i++)
    if(num%primes[i] == 0){
      numP+=1
      while(num%primes[i] == 0)
        num /= primes[i]
    }
  return numP==d
}
var prev4 = [0, 0, 0, 0]
let i
for(i = 1; prev4.some(a=>!a); i++)
  prev4 = [...prev4.slice(1,4), 1*distinct(i, 4)]
console.log(i-4)