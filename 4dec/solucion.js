console.clear();

function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => b.l * b.w * b.h - a.l * a.w * a.h)
    .every((b, index) => {
      if (!boxes[index + 1]) return true;
      return (
        b.l > boxes[index + 1].l &&
        b.w > boxes[index + 1].w &&
        b.h > boxes[index + 1].h
      );
    });
}

// TESTS:

// console.log(
//   fitsInOneBox([
//     { l: 1, w: 1, h: 10 },
//     { l: 3, w: 3, h: 12 },
//     { l: 2, w: 2, h: 1 },
//   ])
// ); // false

// console.log(
//   fitsInOneBox([
//     { l: 1, w: 1, h: 1 },
//     { l: 2, w: 2, h: 2 },
//   ])
// ); // true

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
