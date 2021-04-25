
l:for(var i = 345, c = {}; ; i++){
  let o = (''+i**3).split('').sort().join('')
  c[o] = c[o]||{n:0, i:i}
  c[o].n++
  if(c[o].n==5){
    console.log(c[o].i**3)
    break l;
  }
}
//22ms