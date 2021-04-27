var list = [], n=5
const combinations = (total, arr, chain = []) =>{
  if(total==0) return chain.length==3 ? chain.toString() : []
  if(total<0) return []
  return arr.reduce((a,num)=> [...a, combinations(total-num, arr.filter(v=>v!=num), [...chain, num])], []).flat()
},
order = (combs, arr = [], used = [], middle = []) =>{
  if(arr.length==n && arr[arr.length-1][2]==arr[0][1]) 
   return rotate(arr, arr.findIndex(t=>t[0]==Math.min(...arr.map(v=>v[0])))).flat().join('')
  if(arr.length>n) return []
  return (arr.length == 0 ? combs.filter(t=>t[0]==n||t[0]==n+1) : combs.filter(t=>arr[arr.length-1][2]==t[1])).reduce(
    (a,t) =>[...a, order(combs.filter(t=>t[0]>(arr[0]?.[0]||0) && used.every(n=>t.indexOf(n)==-1) && middle.every(n=>t[0]!=n && t[1]!=n)), [...arr, t], [...used, t[0]], [...middle, t[1]])], []//<0 && middle.indexOf(t[0])<0
  ).flat()
},
rotate = (arr, n) => arr.slice(n, arr.length).concat(arr.slice(0, n))
for(let total = 3+2*n; total<=4*n; total++)
  list = [...list, ...order(combinations(total, [...Array(2*n).keys()].map(n=>n+1)).map(v=>v.split(',').map(Number)))]
console.log(Math.max(...list.filter(v=>v.length<=16).map(Number)))
//23ms