const numbers= [...Array(6).keys()].flatMap(s=>
  [...Array(141).keys()].map(n=>((s+1)*n*n - (s-1)*n)/2).filter(n=>n<=1e4 && n>=1e3).map(v=>({val:''+v, typ: s}))
), recursive = (list, arr = []) => {
  if(arr.length==6 && arr[arr.length-1].val.slice(-2)==arr[0].val.slice(0,2))
    return arr.reduce((a,v) =>a+parseInt(v.val),0)
  for(var num of arr.length == 0 ? list : list.filter(n=>n.val.slice(0,2) == arr[arr.length-1].val.slice(-2))){
    var val = recursive(list.filter(n=>n.typ!=num.typ), [...arr, num])
    if(val) return val
  }
}
console.log(recursive(numbers))
//17.2ms