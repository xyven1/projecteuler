total = 0
for(i = 1, prev = 1; i<(1001)*2; i++)
	[prev, total] = [prev + 2*(Math.floor((i-1)/4)+1), total+prev]
console.log(total)
