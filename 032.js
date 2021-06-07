var products = []
const num = (arr, a, b) => arr.slice(a,b).reduce((a,b)=> b+10*a)
const permute = (arr, m = []) => {
  if (arr.length === 0
  	&& (num(m,0,4) == num(m,4,6) * num(m,6,9) || num(m,0,4) == num(m,4,5) * num(m,5,9))
    && products.indexOf(num(m,0,4)) == -1)
    return products.push(num(m,0,4))
  for (let i = 0; i < arr.length; i++) {
    let curr = arr.slice();
    let next = curr.splice(i, 1);
    permute(curr.slice(), m.concat(next))
  }
}
permute([...Array(10).keys()].slice(1))
console.log(products.reduce((a,b)=>a+b))
