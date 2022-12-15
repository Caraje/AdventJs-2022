console.clear();

function fitsInOneBox(boxes) {
  return boxes
    .sort((boxA, boxB) => boxB.l * boxB.w * boxB.h - boxA.l * boxA.w * boxA.h)
    .every((box, index) => {

      if (!boxes[index + 1]) return true;
      return (
        box.l > boxes[index + 1].l &&
        box.w > boxes[index + 1].w &&
        box.h > boxes[index + 1].h
      );
    });
}

// TESTS:

console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 10 },
    { l: 3, w: 3, h: 12 },
    { l: 2, w: 2, h: 1 },
  ])
); // false

console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
  ])
); // true

// console.log(
//   fitsInOneBox([
//     { l: 1, w: 1, h: 1 },
//     { l: 2, w: 2, h: 2 },
//     { l: 3, w: 1, h: 3 },
//   ])
// ); // false

// console.log(
//   fitsInOneBox([
//     { l: 1, w: 1, h: 1 },
//     { l: 3, w: 3, h: 3 },
//     { l: 2, w: 2, h: 2 },
//   ])
// ); // true
