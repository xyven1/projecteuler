const fs = require('fs'),
capcon = require('capture-console'),
dir = fs.readdirSync('./'),
min = 1,max = 100

var results = [], totalLines = 0
capcon.captureStdout(function scope(){
  for(var file of dir.filter(v=>v.split('.')[1]=='js' && parseInt(v.split('.')[0])<=max && parseInt(v.split('.')[0])>=min).sort((a,b)=>parseInt(a.split('.')[0])-parseInt(b.split('.')[0]))){
    var t1 = process.hrtime()
    require(`./${file}`)
    results.push({file,time: process.hrtime(t1)})
    var fileData =  fs.readFileSync(`./${file}`, 'utf8')
    totalLines+=fileData.split('\n').length 
  }
}).split('\n').filter(v=>v).forEach((v,i)=>results[i].result=v)
var totalTime = results.reduce((a,v)=>a + v.time[0]*1e9 + v.time[1],0)/1e9
results.sort((a,b)=>-(a.time[0]*1e9+a.time[1])+(b.time[0]*1e9+b.time[1])).map(v=>{v.time = `${v.time[0]}s, ${v.time[1]/1e6}ms`; return v})
console.log("completed all solved problems below 100 in ", `${totalTime}s`)
console.log("total lines of code:", totalLines - 20 -100 -15)
console.log("median:", results[Math.trunc(results.length/2)].time)
console.log(JSON.stringify(results, null, 2))

//8.2661882s for problems 1-100
//average of 16 lines of code
//average of 83ms, median of 12ms