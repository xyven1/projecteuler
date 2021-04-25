var count = 0;
for(let p = 1n;p<22n; p++)
  for(let b = 1n; (''+b**p).length<=p; b++)
    if((''+b**p).length==p)
      count++
console.log(count)
//.14ms