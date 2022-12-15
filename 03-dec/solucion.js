console.clear();
const distributeGifts = (packOfGifts, reindeers) => {
  let maxReindeerWeight = 0;
  let weightGifts = 0;
  packOfGifts.map((gifs) => {
    weightGifts += gifs.length;
  });
  reindeers.map((weight) => {
    maxReindeerWeight += weight.length * 2;
  });
  const numberOfPackages = Math.floor(maxReindeerWeight / weightGifts);

  return numberOfPackages;
};

console.log(distributeGifts(['videogames', 'console'], ['midu']));
