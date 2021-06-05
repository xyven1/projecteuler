var fib = [1,2]
while(fib[fib.length-1]<4e6)
  fib.push(fib[fib.length-1]+fib[fib.length-2])
console.log(fib.reduce((a,v)=>a+v*(v%2==0),0))
