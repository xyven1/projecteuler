months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
numSun = 0
for(y = 1901, d = 365; y<=2000; y++)
	for(m = 0; m<12; m++)
    [numSun, d] = [numSun + 1*(d%7==6), d + months[m] + 1*(((y%4==0 && y%100!=0) || y%400==0) && m == 1)]
console.log(numSun)
