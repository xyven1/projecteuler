var a = 1n, b = 1n, index = 1
while ( a < 10n**999n )
  [a,b, index] = [b, a+b, index+1]
console.log(index)
