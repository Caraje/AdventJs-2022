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

  gifts.map((gift) => {
    if (maxLengthName < gift.name.length) {
      maxLengthName = gift.name.length;
    }
    if (maxLengthquantity < gift.quantity.toString().length) {
      maxLengthquantity = gift.quantity.toString().length;
    }
  });

  const lineTop = '+'.repeat(maxLengthName + maxLengthquantity + 7);
  const nameTitle = `Gift${' '.repeat(maxLengthName - 4)}`;
  const quantityTitle = `Quantity${' '.repeat(maxLengthquantity - 8)}`;
  const head = `| ${nameTitle} | ${quantityTitle} |`;
  const sep = `| ${'-'.repeat(maxLengthName)} | ${'-'.repeat(
    maxLengthquantity
  )} |`;
  const lineBottom = '*'.repeat(maxLengthName + maxLengthquantity + 7);
  for (let i = 0; i < gifts.length; i++) {
    giftList.push(
      `| ${gifts[i].name}${' '.repeat(
        maxLengthName - gifts[i].name.length
      )} | ${gifts[i].quantity}${' '.repeat(
        maxLengthquantity - gifts[i].quantity.toString().length
      )} |`
    );
  }
  return [lineTop, head, sep, giftList.join('\n'), lineBottom].join('\n');
}

/*
=======================================================
                        TESTS
=======================================================
*/

console.log(
  printTable([
    { name: 'PlayStation 5', quantity: 9234782374892 },
    { name: 'Book Learn Web Dev', quantity: 23531 },
  ])
);

// "++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************"

console.log(
  printTable([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 },
  ])
);

// "+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************"

console.log(printTable([{ name: 'Game', quantity: 10000 }]));
//"+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 10000    |\n*******************"

console.log(printTable([{ name: 'Game', quantity: 1234567890 }]));
//"+++++++++++++++++++++\n| Gift | Quantity   |\n| ---- | ---------- |\n| Game | 1234567890 |\n*********************"

console.log(
  printTable([
    { name: 'Toy', quantity: 12 },
    { name: 'Mic', quantity: 123 },
  ])
);
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
