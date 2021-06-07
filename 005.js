var facts = {}
for(let i = 2; i<20; i++)
  for(let j = 2, val = i; j<=i; j++){
    var total = 0
    while(val%j==0)
      [total,val]=[total+1, val/j]
    facts[j] = !facts[j] || total>facts[j] ? total : facts[j]
  }
console.log(Object.entries(facts).reduce((a,v)=>a*v[0]**v[1],1))