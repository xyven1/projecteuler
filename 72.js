var t0 = process.hrtime()
const modifiedEratosthenes = n => {
  var array = [...Array(n+1).keys()]
  for (let i = 2; i <= n; i += 1)
    if (array[i]==i) //number is prime if it equal to itself
      for (let j = i; j <= n; j += i) //every number divisible by prime i
        array[j] = array[j]/i * (i-1) //apply (1-1/p)
  return array.slice(2).reduce((a,v)=> a+v,0) //sum of all totients exluding 0 and 1
}
console.log(modifiedEratosthenes(1e6), `${process.hrtime(t0)[0]}s, ${process.hrtime(t0)[1]/1e6}ms`)