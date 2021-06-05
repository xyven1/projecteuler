var fs = require('fs')
var dir = fs.readdirSync('./')
for(var file of dir.filter(v=>v.split('.')[1]=='js' && parseInt(v.split('.')[0])<=100)){
  var t0 = process.hrtime()
  require(`./${file}`)
  console.log(file, `${process.hrtime(t0)[0]}s, ${process.hrtime(t0)[1]/1e6}ms`)
}