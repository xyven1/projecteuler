const nextNum = (num) => {
  let next = 0;
  while(num > 0){
    next += (num%10)*(num%10);
    num = Math.floor(num/10);
  }
  return next;
}
const limit = 1e7, maxSecond = (9**2)*Math.floor(Math.log10(limit)+1);
const to1 = {}, to89 = {};
let count = 0;
for(let i = 1; i < limit; i++) {
  let n = i;
  while(n != 1 && n != 89){
    n = nextNum(n);
    if(n in to1)
      n = 1;
    else if(n in to89) 
      n = 89;
  }
  if(i<=maxSecond) {
    if(n == 1)
      to1[i] = 1;
    else
      to89[i] = 1;
  }
  if(n == 89)
    count++;
}
console.log(count);
//425ms