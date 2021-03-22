const eratosthenes = n => {
  var array = [], output = [2];
  for (var i = 0; i < n; i++) array.push(1)
  for (var i = 3; i*i <= n; i += 2)
    if (array[i])
      for (var j = i * i; j < n; j += i*2)
        array[j] = 0
  for (var i = 3; i < n; i += 2){
    if(array[i])
      output.push(i)
  }
  return output
}, replaceAt = (s, index, replacement) => s.substring(0, index) + replacement + s.substring(index + 1),
isPrime = num => { for(let i = 2; i*i <= num; i++) if(num % i === 0) return 0; return num > 1},
primes= eratosthenes(1e6) //assume 6 digit number
l:for(var p of primes){
  var inner  = p.toString().slice(0,-1).split('') //last number must be static
  for(var d of [...Array(3).keys()]) //check for repeating 0s, 1s, 2s (any greater and its impossible to have 8 primes)
    if(inner.reduce((a,x) => (x==d ? a+1 : a), 0) == 3){ //repeating digit must appear 3 times
      var indexL = [...inner.map(digit=>(digit==d)*1), 0]
      for (let d = indexL[0], numP = 0; d < 10 && (9-d+numP>=7); d++) {
        var num = indexL.reduce((a, c, i)=> c ? replaceAt(a, i, d) : a, p+'')
        numP+=isPrime(num)
        if(numP==8){
          console.log(p)
          break l
        }
      }
    }
}