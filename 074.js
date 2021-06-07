const sumFact = n =>{
  return (''+n).split('').reduce((a,v)=>a+factorials[v],0)
}, factorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880],
chain = (n, cache) => {
  var prev = n
  var length = 0
  var chain = []
  while(chain.indexOf(prev)==-1){
    if(cache[prev]){
      length+=cache[prev]
      break
    }
    chain.push(prev)
    prev = sumFact(prev)
    length++
  }
  chain.forEach((v,i)=>{
    cache[v] = length-i
  })
  return length
}, limit = 1e6, chainLength = 60
var cache = {}
var count = 0
for(let i = 0; i<limit; i++)
  count += chain(i, cache) == chainLength
console.log(count)
//550ms