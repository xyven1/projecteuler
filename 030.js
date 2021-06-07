isFifth = n => n == n.toString().split('').reduce((a,b)=> a+b**5, 0)
sum = 0
for(a = 2; a<=6*9**5; a++)
	sum += isFifth(a)*a
console.log(sum)
