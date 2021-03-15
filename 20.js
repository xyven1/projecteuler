const factorial = val => val > BigInt(1) ? val*factorial(val- BigInt(1)) : BigInt(1)

console.log(factorial(BigInt(100))
            .toString()
            .split('')
            .map(Number)
            .reduce((a,b)=> a+b)))
