class BigDecimal {
  static DECIMALS = 103; //precision
  static SHIFT = BigInt("1" + "0".repeat(BigDecimal.DECIMALS)); // derived constant
  constructor(value) {
    if (value instanceof BigDecimal) return value;
    let [ints, decis] = String(value).split(".").concat("");
    this._n = BigInt(ints + decis.padEnd(BigDecimal.DECIMALS, "0").slice(0, BigDecimal.DECIMALS));
  }
  static fromBigInt(bigint) {
    return Object.assign(Object.create(BigDecimal.prototype), {_n: bigint});
  }
  add(num) {
    return BigDecimal.fromBigInt(this._n + new BigDecimal(num)._n);
  }
  subtract(num) {
    return BigDecimal.fromBigInt(this._n - new BigDecimal(num)._n);
  }
  static _divRound(dividend, divisor) {
    return BigDecimal.fromBigInt(dividend / divisor);
  }
  multiply(num) {
    return BigDecimal._divRound(this._n * new BigDecimal(num)._n, BigDecimal.SHIFT);
  }
  divide(num) {
    return BigDecimal._divRound(this._n * BigDecimal.SHIFT, new BigDecimal(num)._n);
  }
  toString() {
    const s = this._n.toString().padStart(BigDecimal.DECIMALS + 1, "0");
    return s.slice(0, -BigDecimal.DECIMALS) + "." + s.slice(-BigDecimal.DECIMALS).replace(/\.?0+$/, "");
  }
}
const digitSum = n =>n.split('').reduce((a,v)=> a+parseInt(v),0),
withinRange = (d, b) => d>0n ? d < b : d > -b
arbitrarySqrtRoot = (n) => {
  var x = new BigDecimal(Math.sqrt(n)), prev = new BigDecimal(0)
  while(!withinRange(x.subtract(prev)._n, 5n)){
    prev = x
    x = x.subtract(x.multiply(x).subtract(n).divide(x.multiply(2)))
  }
  return x
}
console.log(Array(100).fill().flatMap((v,i)=>Number.isInteger(Math.sqrt(i+1))
  ? []
  : [arbitrarySqrtRoot(i+1).toString().slice(0,101).split('.').join('')]
  ).reduce((a,v)=>a+digitSum(v), 0))
//5ms, 1.5 hours to solve
