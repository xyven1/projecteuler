max = {d: 0, l: 0}
for(i = 1; i<1000; i++){
  l = 1, d = i
  while(d%2 == 0) d /= 2
  while(d%5 == 0) d /= 5
  if(d != 1)
  	while(10n**BigInt(l)%BigInt(d) != 1)
      l++
  if(l>max.l) max = {d, l}
}
console.log(max)
