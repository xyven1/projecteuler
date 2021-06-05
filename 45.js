const pent = n => n*(3*n-1)/2,
isHex = n => (1+Math.sqrt(1+8*n))%4 == 0 //all hexagonal number are triangular
for (let i = 167; !isHex(pent(i-1)); i++)
  if(isHex(pent(i)))
    console.log(pent(i))