const accuracy = 24,
  scale = (10n ** BigInt(accuracy)),
  floor = bigInt => bigInt / scale
let theta = 2n * scale,
  c = floor(theta).toString(),
  len = 0
while (c.length < 24) {
  len++
  let temp = theta
  for (let i = 0; i < len; i++)
    temp = floor(temp) * (temp - floor(temp) * scale) + floor(temp) * scale
  c += floor(temp)
  theta = BigInt(c.padEnd(accuracy + floor(theta).toString().length, '0'))
}

console.log(floor(theta) + '.' + (theta - floor(theta) * scale).toString().substring(0, 24))
// 0.20ms