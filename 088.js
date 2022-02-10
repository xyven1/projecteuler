const set = {},
  limit = 12000,
  prodSum = new Array(limit + 1).fill(Infinity);

function recurse(prod = 1, s = 0, len = 0, k = 1) {
  if (len > 1)
    prodSum[k] = Math.min(prodSum[k], prod);
  for (let i = 2; i <= limit && k + (prod - 1) * (i - 1) <= limit; i++)
    recurse(prod * i, s + i, len + 1, k + (prod - 1) * (i - 1))
}

recurse();
for (let k = 2; k <= limit; k++)
  set[prodSum[k]] = true
console.log(Object.keys(set).reduce((a, b) => a + parseInt(b), 0))

//50ms