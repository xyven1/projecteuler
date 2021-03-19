const pent = n => n*(3*n-1)/2,
isPent = n => (1+Math.sqrt(1+24*n))%6 == 0

o:for (let k = 1; k < Infinity; k++) {
  for (let j = 1; j < k; j++) {
    const kP = pent(k), jP = pent(j)
    if(isPent(kP+jP) && isPent(kP-jP)){
      console.log(kP-jP)
      break o
    }
  } 
}