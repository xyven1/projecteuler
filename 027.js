isPrime = (num) => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
    if(num % i === 0) return false; 
  return num > 1;
}
quad = (a, b, n) => n*n+a*n+b
max = {a:0,b:0,n:0}
for(let a = -999; a<=999; a++){
	for(let b = 2; b<=999; b++){
    if(isPrime(b)){
    	n = 1
      while(isPrime(quad(a,b,n))) n++
      if(n>max.n) max = {a,b,n}
    }
  }
}
console.log(max.a*max.b)
