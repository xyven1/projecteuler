const numbers = require('fs').readFileSync('./data/p089_roman.txt', 'utf-8').split('\n')
const totalChars = arr => arr.reduce((a, v) => a + v.length, 0)

const romanToInt = str => {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let sum = 0
  for (let i = 0; i < str.length; i++) {
    if (i < str.length - 1 && roman[str[i]] < roman[str[i + 1]])
      sum -= roman[str[i]]
    else
      sum += roman[str[i]]
  }
  return sum
}, intToRoman = num => {
  const roman = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  }
  let str = ''
  for (let i = 1000; i > 0; i /= 10) {
    let digit = Math.floor(num / i)
    num %= i
    if(i == 1000){
      for(let j = 0; j < digit; j++)
        str += roman[i]
    }else if (digit === 9)
      str += roman[i] + roman[i * 10]
    else if (digit >= 5){
      str += roman[i * 5]
      for(let j = 0; j < digit - 5; j++)
        str += roman[i]
    }
    else if (digit === 4)
      str += roman[i] + roman[i * 5]
    else
      for (let j = 0; j < digit; j++)
        str += roman[i]
  }
  return str
}

const ints = numbers.map(romanToInt)
const mapped = ints.map(intToRoman)
console.log(totalChars(numbers)-totalChars(mapped))
//18ms