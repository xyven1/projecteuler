const fs = require('fs'),
capcon = require('capture-console'),
dir = fs.readdirSync('./'),
min = 1,max = 100

var results = []
capcon.captureStdout(function scope(){
  for(var file of dir.filter(v=>v.split('.')[1]=='js' && parseInt(v.split('.')[0])<=max && parseInt(v.split('.')[0])>=min).sort((a,b)=>parseInt(a.split('.')[0])-parseInt(b.split('.')[0]))){
    var t1 = process.hrtime()
    require(`./${file}`)
    results.push({file,time: process.hrtime(t1)})
    if(process.hrtime(t1)[0]>1)
      throw Error(file + " failed 1 second test")
  }
}).split('\n').filter(v=>v).forEach((v,i)=>results[i].result=v)
var totalTime = results.reduce((a,v)=>a + v.time[0]*1e9 + v.time[1],0)/1e9
results.sort((a,b)=>-(a.time[0]*1e9+a.time[1])+(b.time[0]*1e9+b.time[1])).map(v=>{v.time = `${v.time[0]}s, ${v.time[1]/1e6}ms`; return v})
console.log("completed all solved problems below 100 in ", `${totalTime}s`)
console.log(JSON.stringify(results, null, 2))

//currently 6.7054455s total for problems 1-78
//average of 85ms, median of 15ms