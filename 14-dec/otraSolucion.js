console.clear();

/*

ESTA SOLUCION ES GRACIAS AL USUARIO dgcabanillas EN EL DISCORD DE MIDUDEV

*/

// 1 - invertimos el arreglo
// 2 - tomando como arreglo inicial la primera
//     fila del arreglo invertido sumamos hacia abajo
// 3 - en cada iteración obtendremos un arreglo con los
//     valores mínimos del camino acumlado
// 4 - el resultado final sería el elemento 0 del
//     arreglo obtenido en la última iteración

function getOptimalPath(path) {
  const reversed = path.reverse();
  return reversed.slice(1).reduce((list, way = []) => {
    list = way.map((num, i) => Math.min(list[i], list[i + 1]) + num);
    return list;
  }, reversed[0])[0];
}

console.log(getOptimalPath([[0], [2, 3]])); //2
//  [0]
// [2][3]

console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]])); //5
//   [0]
//  [3][4]
// [9][8][1]

console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])); //8
//     [1]
//    [1][5]
//   [7][5][8]
// [9][4][1][3]
console.log(
  getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]])
); //7
//          [1]
//        [1][5]
//      [7][5][8]
//     [9][4][1][3]
// [-1][-1][-1][-1][-1]
