const hands = require('fs').readFileSync('./data/p054_poker.txt', 'utf-8').trim(),
cards = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'],
hand = h => {
  var best = {g: 0, h: 0, set c(x) {this.g = (x>this.g)*x||this.g}, p1: null, p2: null}
  ordered = h.sort((c1, c2) => cards.indexOf(c1.v)-cards.indexOf(c2.v))
  groupedByValue = h.reduce((a, e) =>{a[e.v] = (a[e.v]||0)+1; return a},{})
  let highestGroup =  Object.keys(groupedByValue).map(key=>({n: groupedByValue[key], k:key })).sort((c1, c2) => c2.n - c1.n || cards.indexOf(c2.k)-cards.indexOf(c1.k))
  best.c = (ordered.reduce((a, e, i) => a*(i==0 || cards.indexOf(e.v)==cards.indexOf(ordered[i-1].v)+1), 1))*5
  best.c = ({2:2, 3:4, 4: 8})[highestGroup[0].n]
  best.c = (highestGroup[1].n==2)*(({2:3, 4:7})[best.g])
  best.c = h.every(c=>c.s == h[0].s)*((best.g==5)*((ordered[0].v=='T')*10||9)||6)
  numSets = ({2:1,3:2,4:1,7:2,8:1})[best.g]||0
  best.p1 = (numSets>0)?cards.indexOf(highestGroup[0].k):null
  best.p2 = (numSets>1)?cards.indexOf(highestGroup[1].k):null
  best.h = cards.indexOf(ordered.filter(v=>v.v!=best.p1 && v.v!=best.p2).slice(-1)[0]?.v)
  return best
}, parseHand = h => hand(h.split(' ').map(v=>({v: v.split('')[0], s: v.split('')[1]}))),
parseHands = hands => [hands.substring(0, 14), hands.substring(15)].map(v=>parseHand(v)),
compare = (h1, h2) => ['g', 'p1', 'p2', 'h'].reduce((a, v)=> a>0?a:(h1[v] == h2[v]?0:(h1[v] < h2[v]) + 1), 0)
console.log(hands.split('\n').map(v=>compare(...parseHands(v))).filter(v=>v==1).length)
//25ms