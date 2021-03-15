function d(n){
  var sum = 0
	for(var i = 0; i<=n/2; i++)
  	if(n%i == 0)
    	sum+=i
  return sum
}
function summable(n, l){
	for(let i = 0; i<l.length && l[i]<=n-12; i++)
  	if(isIn(n - l[i], l))
        return true
  return false
}
function isIn(n, l){
	for(let i = 0; i<l.length && l[i]<=n; i++)
  	if(l[i]==n)
    	return true
  return false
}
var abundantNumbers = [...Array(28123).keys()].filter(n=>d(n)>n) 

var notSummable = [...Array(28123).keys()].filter(n=>!summable(n, abundantNumbers))

console.log(notSummable.reduce((a,b) => a+b, 0))
