const isPrime = num => {
  for(let i = 2; i*i <= num; i++) if(num % i === 0) return false
  return num > 1
}
const findPermutations = (string) => {
	if (string.length < 2 ) return string
  let perms = [] 
  for (let i = 0; i < string.length; i++)
		for (let p of findPermutations(string.slice(0, i) + string.slice(i + 1, string.length)))
      perms.push(string[i] + p)
  return perms
}

var fourDigitPrimes = []

for(i = 1000; i<10000; i++)
	if(isPrime(i)) fourDigitPrimes.push(i)
  
var t0 = window.performance.now()
fourDigitPrimes.forEach(p=>{
	let perms = []
  findPermutations(p.toString()).forEach((p, i)=>{
  	if(fourDigitPrimes.indexOf(parseInt(p))!=-1){
    	perms.push(p)
      fourDigitPrimes.splice(fourDigitPrimes.indexOf(parseInt(p)),1)
    }
  })
  if(perms.length>2){
   	p = perms.sort().map(Number)
    var diffs = []
    for(let i = 0; i<p.length; i++)
      for(let j = i+1; j<p.length; j++)
        diffs.push(p[j]-p[i])
    diffs.sort()
    for(let i = 0; i<diffs.length-1; i++)
      if(diffs[i]==diffs[i+1])
        for(let j = 0; j<p.length; j++)
          if(p.indexOf(p[j]+diffs[i])!=-1 &&  p.indexOf(p[j]+2*diffs[i])!=-1)
          	console.log(p[j], p[j]+diffs[i], p[j]+2*diffs[i], diffs[i])
  }
})
console.log(window.performance.now()-t0)
