var n=1, d=1
for(var i = 10; i<100; i++){
  for(var j = 10; j<i; j++){
    i.toString().split('').forEach(x=>{
      if(j.toString().indexOf(x)!=-1 && parseInt(j.toString().replace(x, ''))/parseInt(i.toString().replace(x, '')) == j /i && j%10!=0)
        [n,d] = [n*j, d*i]
    })
  }
}
console.log(d/n)
