var t0 = process.hrtime()
l:for (let n = 1e5;; n++)
  if((6*n).toString().length == (2*n).toString().length && [...Array(4).keys()].reduce((a,b, i)=> a*(((i+3)*n).toString().split('').sort().join('') == (n*2).toString().split('').sort().join('')), 1) ){
    console.log(n)
    break l
  }
  console.log(`${process.hrtime(t0)[0]}s, ${process.hrtime(t0)[1]/1e6}ms`)