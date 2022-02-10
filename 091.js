const gcd = (a, b) => b? gcd(b, a % b) : a;

const size = 50;
let count = 0;
for(let i = 0; i <= size; i++){
  for(let j = 0; j <= size; j++){
    if(i==0 || j==0){
      count += size*(!(j==0 && i==0));
    } else {
      let div = gcd(i, j);
      let perpVec = [j/div, i/div];
      let maxPosX = (size-i)/perpVec[0];
      let maxNegX = i/perpVec[0];
      let maxPosY = j/perpVec[1];
      let maxNegY = (size-j)/perpVec[1];
      let maxPos = Math.floor(Math.min(maxPosX, maxPosY));
      let maxNeg = Math.floor(Math.min(maxNegX, maxNegY));
      count += maxPos + maxNeg;
    }
  }
}
console.log(count+size**2); //account for triangles with right angle at origin
//1ms