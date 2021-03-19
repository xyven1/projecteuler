var d = ''
for (let i = 0; d.length<=1e6; i++) d+=i
console.log([...Array(7).keys()].reduce((a,b)=> a*d[10**b], 1))