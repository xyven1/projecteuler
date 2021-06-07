const sqrt =  n=> {
  var x1 = (1n << 52n) - 2n, x0 = -1n
	while(x0 != x1 && x0 != (x1 - 1n))
		[x0, x1]= [x1, ((n / x1) + x1) >> 1n]
	return x0
}
console.log(Array(100).fill().flatMap((v,i)=> Number.isInteger(Math.sqrt(i+1)) ? [] :
[(''+sqrt(BigInt(i+1+Array(202).fill('0').join('')))).slice(0, 100)]
).reduce((a,v)=>a+(''+v).split('').reduce((a,v)=> a+parseInt(v),0), 0))
//15ms