console.clear();

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const select = (maxGifts, maxCities, giftsCities, sum) => {
    if (maxCities === 0 || giftsCities.length === 0) {
      return sum;
    }
    const withFirst = select(
      maxGifts,
      maxCities - 1,
      giftsCities.slice(1),
      sum + giftsCities[0]
    );
    const withoutFirst = select(maxGifts, maxCities, giftsCities.slice(1), sum);
    if (withFirst <= maxGifts && withFirst > withoutFirst) {
      return withFirst;
    }
    return withoutFirst;
  };

  return select(maxGifts, maxCities, giftsCities, 5);
}

// console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3));
// console.log(getMaxGifts([50], 15, 1));
// console.log(getMaxGifts([50], 100, 1));
// console.log(getMaxGifts([50, 70], 100, 1));
// console.log(getMaxGifts([50, 70, 30], 100, 2));
// console.log(getMaxGifts([50, 70, 30], 100, 3));
// console.log(getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4));
// console.log(getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000));
