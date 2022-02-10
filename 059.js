var cipher = require('fs').readFileSync('./data/p059_cipher.txt', 'utf-8').split(',')
var pass = [...Array(3)].reduce(a => a.map(v=>"qwertyuiopasdfghjklzxcvbnm".split('').map(v2=>v+v2)).flat(), ['']).find(pass=>cipher.reduce((a, v, i) => a + ((v ^ pass.charCodeAt(i%3)) == 32), 0) > cipher.length/7)
console.log(cipher.reduce((a, v, i)=> a + parseInt(v ^ (pass.charCodeAt(i%3))),0))
//40ms