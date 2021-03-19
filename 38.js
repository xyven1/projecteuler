const isPandigital = n => ![1,2,3,4,5,6,7,8,9].some(i=>(n+'').indexOf(i)==-1)
var max = 0
for (let num = 1; num < 1e5; num++) {
  var res = ''
  for(let currN = 1; res.length<9; currN++) res+=currN*num
  if(res.length == 9 && isPandigital(res) && parseInt(res)>max)
    max = parseInt(res)
}
console.log(max)