var n
for (n = 1e5; !((6*n).toString().length == (2*n).toString().length && [...Array(4).keys()].reduce((a,b, i)=> a*(((i+3)*n).toString().split('').sort().join('') == (n*2).toString().split('').sort().join('')), 1)); n++);
console.log(n)