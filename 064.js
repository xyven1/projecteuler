const period = num => {
  var sqrt = Math.sqrt(num), a0, d0
  for(let i = 0, a = Math.floor(sqrt), d = 0; ; i++){
    let dTemp = num-a**2
    d = Number.isInteger(dTemp/d) ? dTemp/d : dTemp
    a = d*Math.floor((sqrt+a)/d)-a
    if(d==d0 && a==a0) return i
    if(i==0) [a0, d0] = [a,d]
  }
}
var count = 0
for(let n = 2; n<=1e4; n++)
  if(!Number.isInteger(Math.sqrt(n)) && period(n)%2==1)
    count++
console.log(count)
//11ms