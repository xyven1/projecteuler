const words = require('fs').readFileSync('./data/p098_words.txt', 'utf-8').split(',').map(v => v.slice(1, -1))
const choose = (perms, arr, numToChoose, m = []) => {
    if (m.length === numToChoose)
      perms.push(m)
    else
      for (let i = 0; i < arr.length; i++)
        choose(perms, arr.slice(i).filter(v => v != arr[i]), numToChoose, m.concat(arr[i]))
  },
  maxWordLength = 9,
  squares = new Array(Math.ceil(Math.sqrt(10 ** maxWordLength))).fill(0).map((v, i) => i * i),
  squaresOfLength = new Array(maxWordLength).fill(0).map((v, i) => squares.filter(v => v.toString().length === i + 1)),
  wordsSorted = words.map(v => v.split('').sort().join(''))


const seen = {}
let max = 0
for (let wordI = 0; wordI < wordsSorted.length; wordI++) {
  const word = wordsSorted[wordI]
  if (seen[wordI])
    continue
  let perms = wordsSorted.reduce((a, v, i) => v === word ? a.concat(i) : a, [])
  perms.forEach(v => seen[v] = true)
  if (perms.length < 2)
    continue
  //look at each pair of words in an anagram set
  let pairs = []
  choose(pairs, perms, 2)
  for (const [a, b] of pairs) {
    //generate array which contains the information about swapping the letters of each word
    let destWord = words[b].split('')
    let permSort = words[a].split('').map(v => {
      let index = destWord.indexOf(v)
      destWord[index] = ''
      return index
    })
    l: for (const square of squaresOfLength[word.length - 1]) {
      for (let digit = 0; digit < 10; digit++) { //check for different letters same digit
        let ocurrences = []
        for (let j = 0; j < word.length; j++)
          if (square.toString().charAt(j) === digit.toString())
            ocurrences.push(j)
        if (ocurrences.length > 1) {
          let letter = words[a].charAt(ocurrences[0])
          for (let j = 1; j < ocurrences.length; j++)
            if (letter !== words[a].charAt(ocurrences[j]))
              continue l
        }
      }
      //use the previously generated array to generate matching squares
      const swappedSqr = parseInt(permSort.map(v => square.toString().charAt(v)).join(''))
      if (swappedSqr != square && squaresOfLength[word.length - 1].includes(swappedSqr))
        max = Math.max(max, swappedSqr, square)
    }
  }
}
console.log(max)
//205ms