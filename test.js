var fs = require('fs')
var dir = fs.readdirSync('./')
var t0 = process.hrtime()
for(var file of dir.filter(v=>v.split('.')[1]=='js' && parseInt(v.split('.')[0])<=100)){
  var t1 = process.hrtime()
  require(`./${file}`)
  console.log(file, `${process.hrtime(t1)[0]}s, ${process.hrtime(t1)[1]/1e6}ms`)
  if(process.hrtime(t1)[0]>1)
    throw Error(file + " failed 1 second test")
}
console.log("completed all solved problems below 100 in ", `${process.hrtime(t0)[0]}s, ${process.hrtime(t0)[1]/1e6}ms`)