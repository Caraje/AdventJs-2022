console.clear();

/*
=======================================================
                        SOLUCIÓN
=======================================================
*/

function checkStepNumbers(systemNames, stepNumbers) {
  const stored = {};

  return systemNames.every((system, index) => {
    const prevStepSystem = stored[system];
    const actualStepSystem = stepNumbers[index];
    if (
      typeof prevStepSystem !== 'undefined' &&
      prevStepSystem >= actualStepSystem
    ) {
      return false;
    }
    stored[system] = stepNumbers[index];
    return true;
  });
}

/*
=======================================================
                        TESTS
=======================================================
*/
// console.log('\n=========================================\n');

console.log(
  checkStepNumbers(
    ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house'],
    [1, 33, 10, 2, 44, 20]
  )
); //true
// console.log('\n=========================================\n');

console.log(checkStepNumbers(['tree_1', 'tree_1', 'house'], [2, 1, 10])); //false

// console.log('\n=========================================\n');

console.log(checkStepNumbers(['tree_1', 'tree_1', 'house'], [1, 2, 10])); //true

// console.log('\n=========================================\n');

console.log(
  checkStepNumbers(
    [
      'house',
      'house',
      'tree_1',
      'tree_1',
      'house',
      'tree_2',
      'tree_2',
      'tree_3',
    ],
    [5, 2, 1, 2, 3, 4, 5, 6]
  )
); //false
// console.log('\n=========================================\n');
