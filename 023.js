const d = (n) => {
  var sum = 0
	for(var i = 1; i*i<=n; i++)
  	sum += n%i==0 ? n/i==i ? i : i+n/i: 0
  return sum-n
}, max=28123,  abundantNumbers = [...Array(max).keys()].filter(n=>d(n)>n)
var sumOfAbudant = Array(max+1).fill(0)
for(let i = 0; i<abundantNumbers.length; i++)
	for(let j = 0; j<=i && abundantNumbers[i]+abundantNumbers[j]<=max; j++)
		sumOfAbudant[abundantNumbers[i] +abundantNumbers[j]] = 1
console.log(sumOfAbudant.reduce((a,b, i) => a+i*(b==0), 0))