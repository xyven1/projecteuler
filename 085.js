var c = {w: 0, h:0, d: 2e6}
for(let w = 1; (w*(w+1)/2)<(2e6+c.d); w++)
  for (let h = 1, pW = (w*(w+1)/2); pW*(h*(h+1)/2)<(2e6+c.d); h++){
    var d = Math.abs(2e6 - pW*(h*(h+1)/2))
    if(d<c.d) c = {w,h,d}
  }
console.log(c.w*c.h)
//2.5ms