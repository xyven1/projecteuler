const isPal  = num => num.split('').reduce((a,v,i)=> a*(v==num[num.length-1-i]), 1)
var max = 0
for(let i = 110; i<1e3; i+=11) //palindrom must be divisble by 11
  for(let j = i; j<1e3; j++)
    max = (isPal(i*j+'') && i*j>max) ? i*j : max
console.log(max)