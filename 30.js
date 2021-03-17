isFifth = n => n == n.toString().split('').map(n=>n**5).reduce((a,b)=> a+b)
sum = 0
for(a = 2; a<=1000000; a++)
	if(isFifth(a)) sum +=a
console.log(sum)
