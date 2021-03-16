var perms = []
function permute (arr, m = []){
  if (arr.length === 0)
    perms.push(m)
  else {
    for (let i = 0; i < arr.length; i++) {
      let curr = arr.slice();
      let next = curr.splice(i, 1);
      permute(curr.slice(), m.concat(next))
    }
  }
}
permute([...Array(10).keys()])
console.log(perms.map(n=>n.join('')).sort()[999999])
