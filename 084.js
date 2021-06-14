const rollDie = n => (Math.random()*n|0)+1,
squares = {...Array(40).fill(0)},
numIterations = 1e6,
CC = {2:1,17:1, 33:1},
CH = {7:1, 22:1, 36:1},
DIE_SIDES  = 4

var currentSquare = 0, numDoubles = 0, ccI = 0, chI = 0
for(let i = 0; i<numIterations; i++){
  var rolls = [rollDie(DIE_SIDES), rollDie(DIE_SIDES)]
  numDoubles+= rolls[0]==rolls[1] //increment doubles counter
  currentSquare+=rolls[0]+rolls[1] //advance the players position
  currentSquare%=40
  if(numDoubles==3 || currentSquare==30){//if the player has rolled doubles a third time or lands on go to jail
    currentSquare = 10
  }else if(CC[currentSquare]){
    currentSquare=({1:0, 2:10})[ccI%16]??currentSquare
    ccI++
  }else if(CH[currentSquare]){
    currentSquare = ({
      1: 0, // Advance to GO
      2: 10,// Go to JAIL
      3: 11,// Go to C1
      4: 24,// Go to E3
      5: 39,// Go to H2
      6: 5,// Go to R1
      7: Math.trunc(((currentSquare+5)%40)/10)*10+5,// Go to next R (railway company)
      8: Math.trunc(((currentSquare+5)%40)/10)*10+5,// Go to next R
      9: (currentSquare>11 && currentSquare< 28) ? 28: 11,// Go to next U (utility company)
      10: currentSquare - 3// Go back 3 squares.
    })[chI%16]??currentSquare
    chI++
  }
  squares[currentSquare]++
  if(numDoubles && rolls[0]!=rolls[1] || numDoubles==3) numDoubles=0 //reset double counter
}
console.log(Object.entries(squares).sort((a,b)=>b[1]-a[1]).slice(0,3).reduce((a,v)=>a+('0'+v[0]).slice(-2),""))
//52ms, used monte carlo simulation