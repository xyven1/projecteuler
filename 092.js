
var t0 = process.hrtime()
const nextNum = (num) => {
  let next = 0;
  while(num > 0){
    next += (num%10)*(num%10);
    num = Math.floor(num/10);
  }
  return next;
}
const limit = 1e7;
const to1 = {}, to89 = {};
let count = 0;
for(let i = 16; i < limit; i++) {
  let n = i;
  while(n != 1 && n != 89){
    n = nextNum(n);
    if(n in to1)
      n = 1;
    else if(n in to89) 
      n = 89;
  }
  if(n == 1)
    to1[i] = true;
  else{
    to89[i] = true;
    count++;
  }
}
console.log(count, `${process.hrtime(t0)[0]}s, ${process.hrtime(t0)[1]/1e6}ms`);