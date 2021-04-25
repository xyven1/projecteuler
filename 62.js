
var t0 = process.hrtime()
l:for(var i = 345, c = {}; ; i++){
  let o = (''+i**3).split('').sort().join('')
  c[o] = c[o]||{n:0, i:i}
  c[o].n++;
  if(c[o].n==5){
    console.log(c[o].i**3)
    break l;
  }
}
console.log(`${process.hrtime(t0)[0]}s, ${process.hrtime(t0)[1]/1e6}ms`)
//25ms