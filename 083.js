var matrix = require('fs').readFileSync('./data/p083_matrix.txt', 'utf-8').split('\n').filter(a=>a.length>0).map(v=>v.split(',').map(Number))
const minDistance = (dist, sptSet) => {
  let min = Infinity, minIndex = -1
  for (let i = 0; i < sptSet.length; i++)
    if (sptSet[i]==0 && dist[i] <= min) {
      min = dist[i]
      minIndex = i
    }
  return minIndex
}, dijkstra = (graph, size) => {
  let dist = Array(graph.length).fill(Infinity), sptSet = Array(graph.length).fill(0)
  dist[0] = graph[0]
  for (let i = 1; i < graph.length; i++) {
    let u = minDistance(dist, sptSet)
    sptSet[u] = 1;
    [u%size==0?0:-1, (u+1)%size==0?0:1, size, -size].forEach(o =>{
      let index = u+o
      if(!sptSet[index] && dist[u]!=Infinity && dist[u]+graph[index]<dist[index])
        dist[index] = dist[u]+graph[index]
    })
  }
  return dist[dist.length-1]
}
console.log(dijkstra(matrix.flat(), matrix.length))
//62ms (exluding file load)