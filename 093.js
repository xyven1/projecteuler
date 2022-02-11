const choose = (perms, arr, numToChoose, m = []) => {
  if (m.length === numToChoose)
    perms.push(m)
  else
    for (let i = 0; i < arr.length; i++)
      choose(perms, arr.slice(i).filter(v=>v!=arr[i]), numToChoose, m.concat(arr[i]))
}, permuteWithReplace = (perms, arr, numToChoose, m = []) => {
  if (m.length === numToChoose)
    perms.push(m)
  else
    for (let i = 0; i < arr.length; i++)
      permuteWithReplace(perms, arr, numToChoose, m.concat(arr[i]))
}, applyOperation = (op, num1, num2) => ({
    '+': num1+num2,
    '-': Math.abs(num1-num2),
    '*': num1*num2,
    '/': num1/num2
  })[op];


var t0 = process.hrtime()

const numDigits = 4;

let sets = [], operations = [], pairs = [], pairs2 = []
choose(sets, [...Array(10).keys()].slice(1), numDigits)
permuteWithReplace(operations, ['+', '-', '*', '/'], 3)
choose(pairs, [...Array(numDigits).keys()], 2)
choose(pairs2, [...Array(numDigits-1).keys()], 2)

pairs.forEach(pair => {
  let remaining = [0, 1, 2, 3].filter(v => !pair.includes(v))
  pair.push(...remaining)
})
pairs2.forEach(pair => {
  let remaining = [0, 1, 2].filter(v => !pair.includes(v))
  pair.push(...remaining)
})
const max = {n: 0, str: ''};

for(const set of sets){
  const possibleNumbers = {}
  for(const o of operations){
    for(const [a, b, r1, r2] of pairs){
      const arr2 = [set[r1], set[r2], applyOperation(o[0], set[a], set[b])]
      for(const [c, d, r] of pairs2){
        let result = applyOperation(o[2], arr2[r], applyOperation(o[1], arr2[c], arr2[d]))
        if(result>0 && parseInt(result) === result)
          possibleNumbers[result] = true
      }
    }
  }
  let sorted = Object.keys(possibleNumbers).map(Number).sort((a, b)=>a-b)
  let highest = sorted.length-1;
  while(highest>0 && sorted[highest-1]!=highest){
    highest--
  }
  if(sorted[highest] > max.n){
    max.n = sorted[highest]
    max.str = set.join('')
  }
}

console.log(max.str, `${process.hrtime(t0)[0]}s, ${process.hrtime(t0)[1]/1e6}ms`)
//80ms