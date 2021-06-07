const choose = (n, k)  =>  k === 0 ? 1 :(n * choose(n-1, k-1)) / k
console.log(choose(40,20))
