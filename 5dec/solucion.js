console.clear();

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let cities = 0;
  return giftsCities
    .sort((a, b) => b - a)
    .reduce((total, current) => {
      if (
        cities == maxCities ||
        total + current > maxGifts ||
        total + current === maxGifts - 1
      ) {
        return total;
      }
      cities++;
      return (total += current);
    }, 0);
}
console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)); // 20
console.log(getMaxGifts([50], 15, 1)); // 0
console.log(getMaxGifts([50], 100, 1)); // 50
console.log(getMaxGifts([50, 70], 100, 1)); // 70
console.log(getMaxGifts([50, 70, 30], 100, 2)); // 100
console.log(getMaxGifts([50, 70, 30], 100, 3)); // 100
console.log(getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4));
console.log(getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000));
