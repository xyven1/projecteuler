const period = num => {
  var sqrt = Math.sqrt(num), a0, d0, nList = []
  for(let i = 0, a = Math.floor(sqrt), d = 0; ; i++){
    let dTemp = num-a**2
    d = Number.isInteger(dTemp/d) ? dTemp/d : dTemp
    a = d*Math.floor((sqrt+a)/d)-a
    if(d==d0 && a==a0) return nList
    if(i==0) [a0, d0] = [a,d]
    nList.push(Math.floor((sqrt+a)/d))
  }
}
var max = {x:0, y: 0, D:0}
for(let D = 2; D<=1e3; D++){
  if(!Number.isInteger(Math.sqrt(D))){
    l:for(let i = 0, num = den = d2 = 0n, d1 = n2 = 1n, n1 = BigInt(Math.floor(Math.sqrt(D))), p = period(D);; i++){
      var n = BigInt(p[i%p.length]);
      [num, den] = [n*n1 + n2, n*d1 + d2];
      [n2, d2] = [n1,d1];
      [n1,d1] = [num, den];
      if(num**2n - BigInt(D)*den**2n == 1){
        max =  num>max.x ? {x: num, y:den, D} : max
        break l
      }
    }
  }
}
console.log(max.D)
//22ms