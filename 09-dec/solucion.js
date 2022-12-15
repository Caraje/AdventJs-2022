console.clear();

function countTime(leds) {
  const joined = leds.join('').split('1');
  joined[0] = joined[0] + joined.pop();
  joined.sort((a, b) => b.length - a.length);
  return joined[0].length * 7;
}

console.log(countTime([0, 1, 1, 0, 1])); //7
console.log(countTime([0, 0, 0, 1])); //21
console.log(countTime([0, 0, 1, 0, 0])); //28
console.log(countTime([1, 0, 0, 1, 0, 0])); //14
console.log(countTime([1, 1, 0, 0, 0, 0])); //28
console.log(countTime([1, 1, 1])); //0
