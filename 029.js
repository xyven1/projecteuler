list = []
for(a = 2n; a<=100n; a++)
	for(b = 2n; b<=100n; b++)
      if(list.indexOf(a**b)==-1)
        list.push(a**b)
console.log(list.length)
