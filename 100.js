let blue = [1, 3], total = [1,4]
while(total[1] < 1e12){
  blue = [blue[1], 6*blue[1] - blue[0] -2]
  total = [total[1], 6*total[1] - total[0] -2]
}
console.log(blue[1])
//0.01ms, blue and total are the solution to m(m-1)= 2n(n-1), with blue = n and total = m