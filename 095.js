const limit = 1e6;
let sumDivs = new Array(limit).fill(0)
for (let i = 1; i < limit; i++) {
  sumDivs[i] -= i;
  for (let j = i; j < limit; j += i)
    sumDivs[j] += i;
}
let longestChain = [],
  checked = new Array(limit).fill(0)
for (let i = 0; i < limit; i++) {
  let current = i
  let chain = [i]
  while (checked[current] === 0 && current < limit) {
    checked[current] = 1
    if (chain.includes(sumDivs[current])) {
      let actualChain = chain.slice(chain.indexOf(sumDivs[current]))
      if (actualChain.length > longestChain.length) {
        longestChain = actualChain
      }
      break
    }
    current = sumDivs[current]
    chain.push(current)
  }
}

console.log(Math.min(...longestChain))
//120ms