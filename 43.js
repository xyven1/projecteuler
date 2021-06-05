const permute = (perms, arr, m = '') => {
  if (arr.length === 0)
    perms.push(m)
  else
    for (let i = 0; i < arr.length; i++){
      var newStr = m+arr[i]
      if(newStr.length<4 || (parseInt(newStr.substring(newStr.length - 3))%divisors[newStr.length-4])==0)
        permute(perms, arr.filter((v, ind)=>ind!=i), m+arr[i])
    }
}, divisors = [2,3,5,7,11,13,17]
var perms = []
permute(perms, [...Array(10).keys()])
console.log(perms.reduce((a,b)=>a+parseInt(b), 0))