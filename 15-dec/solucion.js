console.clear();

/*
    SOLUCION CODELY => https://www.twitch.tv/videos/1679797982
*/

function decorateTree(base) {
  const ornamentFormula = {
    BB: 'B',
    RR: 'R',
    PP: 'P',

    BP: 'R',
    RP: 'B',
    BR: 'P',

    PB: 'R',
    PR: 'B',
    RB: 'P',
  };
  const splittedBase = base.split(' ');
  const addOrnament = (accumulator, currentValue, currentIndex, original) => {
    const nextValue = original[currentIndex + 1];
    accumulator.push(ornamentFormula[currentValue + nextValue]);
    return accumulator;
  };

  const createTree = (accumulator, currentValue, currentIndex, original) => {
    const nextLine = accumulator[currentIndex]
      .reduce(addOrnament, [])
      .filter((value) => value !== undefined);
    accumulator.push(nextLine);
    return accumulator;
  };

  return [...Array(splittedBase.length - 1)]
    .reduce(createTree, [splittedBase])
    .reverse()
    .map((elements) => elements.join(' '));
}

console.log(decorateTree('B P R P'));
/*
[
  "R",
  "P B",
  "R B B",
  "B P R P"
]
*/
// console.log(decorateTree('B B'));
/*
[
  "B",
  "B B"
]

*/
// console.log(decorateTree('B B P R P R R'));
/*
[
  "B",
  "R P",
  "B P P",
  "P R B R",
  "P P B B P",
  "B R B B B R",
  "B B P R P R R"
]
*/
// console.log(decorateTree('R R P R R'));
/*
[
  "R",
  "R R",
  "P B P",
  "R B B R",
  "R R P R R"
]
*/
