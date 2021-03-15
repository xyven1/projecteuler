console.log(BigInt(Math.pow(2,1000))
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0))
