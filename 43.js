const findPermutations = string => {
  if (string.length < 2) return string
  let perms = []
  for (let i = 0; i < string.length; i++)
    for (let p of findPermutations(string.slice(0, i) + string.slice(i + 1, string.length)))
      perms.push(string[i] + p)
  return perms
},
condition = n =>{
  for(var i = 1; i<8; i++)
    if(n.substr(i,3)%[2,3,5,7,11,13,17][i-1] != 0)
      return 0
  return 1
}
console.log(findPermutations('1234567890').reduce((a,b)=>a+b*condition(b), 0))