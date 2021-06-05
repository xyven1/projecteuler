var first = 0
for(let m=2; !first; m++)
  for(let n = 1; n<m && !first; n+=1)
    if(1e3%(2*m*(m+n))==0)
      first = (1e3/(2*m*(m+n)))**3 *(m**4-n**4)*(2*m*n)
console.log(first)