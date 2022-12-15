console.clear();

// ESta es una solucion alterntiva algo mas optima
function getFilesToBackup(lastBackup, changes) {
  // Guardamos en una variable los arrays que tengan el cambio superior a la fecha mostrada
  let filter = changes.filter((change) => change[1] > lastBackup);
  // obtenemos los Ids pasandoles un map
  let userIds = filter.map((change) => change[0]);
  // Ordenamos los Ids
  let listSort = userIds.sort((a, b) => a - b);
  // Retornamos un new Set, de la lista de los ids ordenados, para que sean unicos y no se repitan
  return [...new Set(listSort)];
}

console.log(
  getFilesToBackup(1546300800, [
    [1, 1546300800],
    [2, 1546300800],
    [1, 1546300900],
    [1, 1546301000],
    [3, 1546301100],
  ])
); // [1,3]
console.log(
  getFilesToBackup(1546300600, [
    [1, 1546300800],
    [2, 1546300800],
    [1, 1546300900],
    [1, 1546301000],
    [3, 1546301100],
  ])
); // [1,2,3]
console.log(
  getFilesToBackup(1556300600, [
    [1, 1546300800],
    [2, 1546300800],
    [1, 1546300900],
    [1, 1546301000],
    [3, 1546301100],
  ])
); // []
console.log(getFilesToBackup(1556300600, [])); //[]
