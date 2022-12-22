console.clear();

/*
=======================================================
                        SOLUCIÓN
=======================================================
*/
function printTable(gifts) {
  let maxLengthName = 4;
  let maxLengthquantity = 8;
  let giftList = [];

  gifts.forEach((gift) => {
    maxLengthName < gift.name.length && (maxLengthName = gift.name.length);
    maxLengthquantity < gift.quantity.toString().length &&
      (maxLengthquantity = gift.quantity.toString().length);
  });

  const maxWidthLine = maxLengthName + maxLengthquantity;
  const nameTitle = 'Gift' + ' '.repeat(maxLengthName - 4);
  const quantityTitle = 'Quantity' + ' '.repeat(maxLengthquantity - 8);

  const lineTop = '+'.repeat(maxWidthLine + 7);
  const head = '| ' + nameTitle + ' | ' + quantityTitle + ' |';
  const sep =
    '| ' +
    '-'.repeat(maxLengthName) +
    ' | ' +
    '-'.repeat(maxLengthquantity) +
    ' |';
  const lineBottom = '*'.repeat(maxWidthLine + 7);

  gifts.forEach((el) => {
    giftList.push(
      '| ' +
        el.name +
        ' '.repeat(maxLengthName - el.name.length) +
        ' | ' +
        el.quantity +
        ' '.repeat(maxLengthquantity - el.quantity.toString().length) +
        ' |'
    );
  });

  return [lineTop, head, sep, giftList.join('\n'), lineBottom].join('\n');
}

/*
=======================================================
                        TESTS
=======================================================
*/
console.log('\n\n\n=========================================\n\n\n');

console.log(
  printTable([
    { name: 'PlayStation 5', quantity: 9234782374892 },
    { name: 'Book Learn Web Dev', quantity: 23531 },
  ])
);
console.log('\n\n\n=========================================\n\n\n');

// "++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************"

console.log(
  printTable([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 },
  ])
);
console.log('\n\n\n=========================================\n\n\n');

// "+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************"

console.log(printTable([{ name: 'Game', quantity: 10000 }]));
console.log('\n\n\n=========================================\n\n\n');
//"+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 10000    |\n*******************"

console.log(printTable([{ name: 'Game', quantity: 1234567890 }]));
console.log('\n\n\n=========================================\n\n\n');
//"+++++++++++++++++++++\n| Gift | Quantity   |\n| ---- | ---------- |\n| Game | 1234567890 |\n*********************"

console.log(
  printTable([
    { name: 'Toy', quantity: 12 },
    { name: 'Mic', quantity: 123 },
  ])
);
console.log('\n\n\n=========================================\n\n\n');
//"+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Toy  | 12       |\n| Mic  | 123      |\n*******************"

/* 

++++++++++++++++++++++++++++++++++++++
| gift               | quantity      |
| ------------------ | ------------- |
| PlayStation 5      | 9234782374892 |
| Book Learn Web Dev | 23531         |
**************************************
12345678901234567890123456789012345678


*/
