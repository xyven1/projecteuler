const eratosthenes = n => {
  var array = Array(n).fill(1), output = [2];
  for (var i = 3; i*i <= n; i += 2)
    if (array[i])
      for (var j = i * i; j < n; j += i*2)
        array[j] = 0
  for (var i = 3; i < n; i += 2)
    if(array[i])
      output.push(i)
  return output 
}, limit = 50e6,
p = eratosthenes(Math.sqrt(limit)|0)
var total = []
for(let i = 0; p[i]**2<=limit; i++)
  for(let j = 0, s = p[i]**2; s+p[j]**3<=limit; j++)
    for(let k = 0, s2 = p[j]**3+s; p[k]**4+s2<=limit; k++)
      total.push(p[k]**4+s2)
console.log(new Set(total).size)
//234ms