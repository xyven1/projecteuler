var sum = 0
for(var i = 3, f = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880]; i<99999; i++)
	if([...i+''].reduce((a,b)=> a+f[b],0) == i)
  	sum+=i
console.log(sum)
