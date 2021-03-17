const permute = (c, r, i = c.length-1) => {
	if(r*i == 0) return 1
	let total = 0
	for(let n = 0; n<=r/c[i]; n++)
    total += permute(c, r - n*c[i], i-1)
  return total
}
console.log(permute([1, 2, 5, 10, 20, 50, 100, 200], 200))
