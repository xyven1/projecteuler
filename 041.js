const isPrime = num => { for(let i = 2; i*i <= num; i++) if(num % i === 0) return 0; return num > 1},
findPermutations = string => {
	if (string.length < 2 ) return string
  let perms = [] 
  for (let i = 0; i < string.length; i++)
		for (let p of findPermutations(string.slice(0, i) + string.slice(i + 1, string.length)))
      perms.push(string[i] + p)
  return perms
}
console.log(findPermutations('1234567').reduce((a,b) => b>a && isPrime(b)?b:a, 2))