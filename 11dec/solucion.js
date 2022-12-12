console.clear();

function getCompleted(part, total) {
  const convert = (time) => {
    return time
      .split(':')
      .reduce((total, part, i) => total + part * 60 ** (2 - i), 0);
  };

  const partSeconds = convert(part);
  const totalSeconds = convert(total);

  let a = partSeconds;
  let b = totalSeconds;

  while (b) [a, b] = [b, a % b];
  const divisor = a;

  const top = partSeconds / divisor;
  const bottom = totalSeconds / divisor;

  return `${top}/${bottom}`;
}

console.log(getCompleted('01:00:00', '03:00:00')); // 1/3
console.log(getCompleted('02:00:00', '04:00:00')); // 1/2
console.log(getCompleted('01:00:00', '01:00:00')); // 1/1
console.log(getCompleted('00:10:00', '01:00:00')); // 1/6
console.log(getCompleted('01:10:10', '03:30:30')); // 1/3
console.log(getCompleted('02:20:20', '03:30:30')); // 2/3
console.log(getCompleted('03:30:30', '05:50:50')); // 3/5
