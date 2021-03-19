const distinct = (num, d) => {
  var numP = 0
  for (let factor = 2; factor <= num && numP<d; factor++) {
    if(num%factor == 0) numP++
    while (num % factor == 0)
      num /= factor
  }
  return numP==d
}
var prev4 = [0, 0, 0, 0]
l:for(let i = 1; ; i++){
  prev4 = [...prev4.slice(1,4), 1*distinct(i, 4)]
  if(prev4.every(a=>a)){
    console.log(i-3)
    break l
  }
}