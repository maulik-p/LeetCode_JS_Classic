function reverse(x) {
  // Find length of number
  const length = (number) => {
    let count = 0;
    while (number > 0) {
      count++;
      number = Math.floor(number / 10);
    }

    return count;
  };

  let isNegative = x < 0;
  if (isNegative) {
    x = x * -1;
  }
  let reverse = 0;
  let pos = length(x) - 1;
  while (x > 0) {
    let mod = x % 10;
    x = Math.floor(x / 10);
    reverse += mod * 10 ** pos;
    pos--;
  }

  x = (isNegative ? -1 : 1) * reverse;

  if (x < -(2 ** 31) || x > 2 ** 31 - 1) {
    return 0;
  }

  return x;
}

console.log("456846", reverse(456846));
console.log("-456846", reverse(-456846));
console.log("-2 ** 32", reverse(-(2 ** 32)));
