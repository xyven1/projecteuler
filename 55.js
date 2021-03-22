var count = 0
for (let i = 1; i < 1e4; i++) {
  var found = 0
  for (let n = 1, num = i; n < 50 && !found; n++) {
    num += parseInt([...num+''].reverse().join(''))
    if([...num+''].reverse().join('') == num) found++
  }
  if(!found)
    count++
}
console.log(count) //32ms