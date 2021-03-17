isFifth = n => n == n.toString().split('').map(n=>n**5).reduce((a,b)=> a+b)
sum = 0
for(a = 2; a<=6*9**5; a++)
	sum += isFifth(a)*a //non branching code. Woo hoo!
console.log(sum)
