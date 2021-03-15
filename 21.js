function d(n){
  var sum = 0
	for(var i = 0; i<=n/2; i++)
  	if(n%i == 0)
    	sum+=i
  return sum
}
function isAmicable(n){
	return d(d(n))==n && d(n)!=n 
}
console.log([...Array(10000).keys()].filter(isAmicable).reduce((o,n) => o + n))
