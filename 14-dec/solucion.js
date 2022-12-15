console.clear();

function getOptimalPath(path) {
  const countSteps = (path, a, b) => {
    if (a == path.length) return 0;
    return (
      path[a][b] +
      Math.min(countSteps(path, a + 1, b), countSteps(path, a + 1, b + 1))
    );
  };
  const maxSteps = countSteps(path, 0, 0);
  return maxSteps;
}

// console.log(Math.max(3, 5, 90));

console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])); //8
// console.log(getOptimalPath([[0], [2, 3]])); //2
//  [0]
// [2][3]

// console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]])); //5
//   [0]
//  [3][4]
// [9][8][1]

// console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])); //8
//     [1]
//    [1][5]
//   [7][5][8]
// [9][4][1][3]
// console.log(
//   getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]])
// ); //7
//          [1]
//        [1][5]
//      [7][5][8]
//     [9][4][1][3]
// [-1][-1][-1][-1][-1]
