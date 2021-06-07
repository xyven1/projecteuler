var sum = 0n
for(let i = 1n; i <=1000n; i++) sum += i**i
console.log(sum.toString().slice(-10))
