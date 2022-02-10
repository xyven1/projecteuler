const mode = (arr)=>arr.sort((a,b) => arr.filter(v => v===a).length - arr.filter(v => v===b).length).pop()
var keyLog =  require('fs').readFileSync('./data/p079_keylog.txt', 'utf-8').trim().split('\n'), res = ''
while(keyLog.length>0){
  res+=mode(keyLog.map(v=>v[0]))
  keyLog = keyLog.map(v=>v[0]==res[res.length-1] ? v.slice(1) : v).filter(v=>v!='')
}
console.log(res)
//3.2ms