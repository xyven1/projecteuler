var max = 0;
for (let i = 90n; i < 100n; i++)
  for (let j = 90n; j < 100n; j++)
    max = Math.max(max, (i**j).toString().split('').reduce((a,b)=> a+parseInt(b), 0))
console.log(max)
//2.4ms
