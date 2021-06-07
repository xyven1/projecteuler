var num = 0n, den = 0n, n1 = 2n, d1 = 1n, n2 = 1n, d2 = 0n
for(let i = 0; i<99; i++){
  var n = BigInt((i%3==1)*2*Math.floor(i/3+1)||1);
  [num, den] = [n*n1 + n2, n*d1 + d2];
  [n2, d2] = [n1,d1];
  [n1,d1] = [num, den];
}
console.log((''+num).split('').reduce((a,n)=>a+parseInt(n), 0))
//0.14ms