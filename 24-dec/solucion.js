console.clear();

/*
=======================================================
                        SOLUCIÓN
=======================================================
*/

function canExit(maze) {
  const r = ([x, y]) => {
    const val = maze[x][y];
    delete maze[x][y];
    return (
      ['E'].includes(val) +
      [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1],
      ]
        .filter((arr) => maze[arr[0]])
        .filter((arr) => ['E', ' '].includes(maze[arr[0]][arr[1]]))
        .some(r)
    );
  };

  const n = maze.flat().join('').indexOf('S');
  const x = ~~(n / maze[0].length);
  const y = n % maze[0].length;

  return !!r([x, y]);
}

/*
=======================================================
                        TESTS
=======================================================
*/

console.log(
  canExit([
    [' ', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E'],
  ])
);
//[true]

console.log(
  canExit([
    [' ', ' ', 'W', 'W', 'S'],
    [' ', ' ', ' ', 'W', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E'],
  ])
);
//[false]

console.log(
  canExit([
    [' ', ' ', 'W', 'W', 'S'],
    [' ', ' ', ' ', 'W', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', ' ', 'W'],
    [' ', ' ', ' ', ' ', 'E'],
  ])
);
//[false]

console.log(canExit([['E', ' ', ' ', ' ', 'S']]));
//[true]

console.log(canExit([['E', ' ', 'W', ' ', 'S']]));
//[false]

console.log(canExit([['E', ' ', 'W', ' ', 'S']]));
//[true]

console.log(
  canExit([
    ['E', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
  ])
);
//[true]
console.log(
  canExit([
    ['E', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
    ['W', 'W', 'W', 'W', 'W'],
  ])
);
//[true]
console.log(
  canExit([
    ['E', ' ', 'W', ' ', 'S'],
    [' ', ' ', 'W', ' ', ' '],
    ['W', 'W', 'W', 'W', 'W'],
  ])
);
//[false
console.log(
  canExit([
    ['E', 'S', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
  ])
);
//[true]
