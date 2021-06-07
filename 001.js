console.log([...Array(1e3).keys()].reduce((a,v)=>a+v*(v%3*v%5==0),0))
//.09ms