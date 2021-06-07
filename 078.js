const pent = n => n*(3*n-1)/2, coefficients = Array(1000).fill().flatMap((_,i)=>[pent(i+1), pent(i+1)+i+1])
var list = [1]
for(let j = 1; list[list.length-1]!=0; j++){
  var sum = 0
  for(let k = 0; j-coefficients[k]>=0; k++)
    sum += (k%4 >= 2 ? -1 : 1)*list[j-coefficients[k]]
  list[j] = sum % 1e6
}
console.log( list.length -1)
//2 hour solve. first solution took 3.2s. Simple optimization brought that down to 25ms
//https://en.wikipedia.org/wiki/Partition_function_(number_theory)#Generating_function