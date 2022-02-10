const squares = ['01', '04', '09', '16', '25', '36', '49', '64', '81'].map(v=>v.split('').map(Number));
const checkArrangment = (arr, arr2) => {
  for(const [a, b] of squares)
    if(!((arr.includes(a) && arr2.includes(b)) || (arr.includes(b) && arr2.includes(a))))
      return false
  return true
}, choose = (perms, arr, numToChoose, m = []) => {
  if (m.length === numToChoose)
    perms.push(m)
  else
    for (let i = 0; i < arr.length; i++)
      choose(perms, arr.slice(i).filter(v=>v!=arr[i]), numToChoose, m.concat(arr[i]))
}
//generate all possible die
const perms1 = [], perms2 = [], nums = [...Array(10).keys()]
choose(perms1, nums.slice(1), 5) //at least one of the die must have a 0
perms1.forEach(v=>v.unshift(0))
choose(perms2, nums, 6)

;[perms1, perms2].forEach(perms=>{
  perms.forEach(v=>{
    if(v.includes(6)) 
      v.push(9)
    else if (v.includes(9))
      v.push(6)
  })
})

const checked = {}
let count = 0;
for(const arr of perms1){
  for(const arr2 of perms2){
    if(checkArrangment(arr, arr2)){
      if(checked[arr2.join('')+arr.join('')]) //avoids double counting situations where die are swaped
        continue
      checked[arr.join('')+arr2.join('')] = true
      count++
    }
  }
}

console.log(count)
//12ms