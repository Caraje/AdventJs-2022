console.clear();

/*
=======================================================
                        SOLUCIÓN
=======================================================
*/
function sortToys(toys, positions) {
  let giftsSorted = [];

  toys.map((toy, i) => {
    giftsSorted.push({
        toy: toy,
        id: positions[i],
      })
  });
  return giftsSorted.sort((a, b) => a.id - b.id).map((toy) => toy.toy);
}

/*
=======================================================
                        TESTS
=======================================================
*/

console.log(sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0]));

/*
[
  "puzzle",
  "car",
  "ball",
  "doll"
]
*/

console.log(
  sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [3, 1, 0, 2, 4])
);

/*
[
  "ps4",
  "xbox",
  "switch",
  "pc",
  "nintendo"
]
*/

console.log(
  sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9])
);

/*
[
  "ps4",
  "xbox",
  "switch",
  "pc",
  "nintendo"
]
*/

// console.log(
//   sortToys(
//     ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'],
//     [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111]
//   )
// );

/*
[
  "l",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "j",
  "k"
]
*/
