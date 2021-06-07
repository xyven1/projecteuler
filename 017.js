const digit1 = [0, 3, 3, 5, 4, 4, 3, 5, 5, 4],
digit2 = [0, 0, 5, 6, 6, 5, 5, 7, 6, 6], 
teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen','sixteen', 'seventeen', 'eighteen', 'nineteen'],
numLetters = (n) => {
	var sum = 0
	var split = n.toString().split('').reverse()
  if(split.length>2 && (split[0]>0 || split[1]>0)) sum+=3 // to deal with and
  if(split[1] == 1){ // deal with numbers between ten and nineteen
  	sum+=teens[split[0]].length
  	split[0] = 0
    split[1] = 0
  }
  split.forEach((d, index)=>{
  	sum += ({
    	0: digit1[d],
      1: digit2[d],
      2: d>0 ? "hundred".length + digit1[d] : 0,
      3: "thousand".length + digit1[d]
    })[index]
  })
  return sum
}
var grandTotal = 0
for(var i = 1; i<=1000; i++)
  grandTotal+=numLetters(i)
console.log(grandTotal) 