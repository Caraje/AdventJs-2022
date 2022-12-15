console.clear();

function getFilesToBackup(lastBackup, changes) {
  // Primero ordenamos los arrays por orden de mayor a menor
  // le pasamos un map para ver cuales son superiores al numero del ultimo change y los que coindian, metemos el ID en un nuevo Array
  // finalmente hacemos un new Set para que los ids sevueltos sean unicos
  let userIds = [];
  changes
    .sort((a, b) => a[0] - b[0])
    .map((change) => {
      if (change[1] > lastBackup) {
        userIds += change[0];
        // userIds.push(change[0]);
      }
    });
  let ids = [...new Set([...userIds])];
  return ids;
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
