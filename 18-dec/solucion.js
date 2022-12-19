console.clear();

function dryNumber(dry, numbers) {
  let noInk = [];
  for (let i = 1; i <= numbers; i++) {
    `${i}`.includes(dry) && noInk.push(i);
  }
  return noInk;
}

/*
=======================================================
                        TESTS
=======================================================
*/
//
console.log(dryNumber(1, 15)); // [1,10,11,12,13,14,15]

// console.log(dryNumber(2, 20)); // [2,12,20]
//
// console.log(dryNumber(3, 33)); // [3,13,23,30,31,32,33]

// console.log(dryNumber(4, 45)); // [4,14,24,34,40,41,42,43,44,45]

// console.log(dryNumber(9, '9')); // []
