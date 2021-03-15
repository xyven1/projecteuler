function d(a,b,c){
	return Math.sqrt((Math.sqrt(6*a*a*(b*b + c*c) + 6*b*b*c*c - 3*a*a*a*a - 3*b*b*b*b - 3*c*c*c*c) + a*a + b*b + c*c)/2)
}
function isTorricelli(a,b,c){
	return Number.isInteger(d(a,b,c))
}
const t0 = window.performance.now()
var count = 0
for (let a = 1; a < 520; a++) {
  for (let b = Math.floor(a/2+1); b <= a; b++) { //ensures that b is always at least half of a, so that while it is bigger than c, b+c is necessarily greater than a
    for (let c = Math.max(a-b+1, Math.floor((-b + Math.sqrt(4*a*a - 3*b*b))/2 + 1)); c <= b; c++) { //b+c>a, angle formed is > 120 degrees
      console.log(Math.acos((b*b + c*c - a*a)/(2*b*c))*180/Math.PI, a, b, c, d(a,b,c))
    }
  }
}
