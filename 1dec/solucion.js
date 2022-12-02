const gifts = ['book', 'game', 'socks'];

const wrapping = (gifts) => {
  let wrapGifts = [];
  for (let gift of gifts) {
    let wrap = `*`.repeat(gift.length + 2);
    wrapGifts.push(`${wrap}\n*${gift}*\n${wrap}`);
  }
  return wrapGifts;
};

console.log(wrapping(gifts));
