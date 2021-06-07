const isPrime = num => { for(let i = 2; i*i <= num; i++) if(num % i === 0) return 0; return num > 1}
l:for(let i = 5; ; i+=2){
  if(!isPrime(i)){
    var found = 0
    for(let s = 1; 2*s*s<i && !found; s++)
      found+=isPrime(i-2*s*s)
    if(!found){
      console.log(i)
      break l
    }
  }
}