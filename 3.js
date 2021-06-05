var val = 600851475143, i
for(i = 2; val>1; i++)
  while(val%i==0)
    val/=i
console.log(i-1)
