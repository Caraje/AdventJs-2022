console.clear();

function selectSleigh(distance, sleighs) {
  let trineos = [];
  sleighs.sort((a, b) => b.consumption - a.consumption);

  console.log(sleighs);
  sleighs.map((sleigh) => {
    sleigh.consumption * distance <= 20 && trineos.push(sleigh);
  });
  return trineos[0] ? trineos[0].name : null;
}

console.log(
  selectSleigh(10, [
    { name: 'Pedrosillano', consumption: 1 }, //10
    { name: 'SamarJaffal', consumption: 2 }, // 20
    { name: 'marcospage', consumption: 3 }, // 30
  ])
); // "SamarJaffal"

console.log(
  selectSleigh(30, [
    { name: 'Dasher', consumption: 0.3 },
    { name: 'Dancer', consumption: 0.5 },
    { name: 'Rudolph', consumption: 0.7 },
    { name: 'Midu', consumption: 1 },
  ])
); //"Dancer"

console.log(
  selectSleigh(1, [
    { name: 'pheralb', consumption: 0.3 },
    { name: 'TMChein', consumption: 0.5 },
  ])
); //"TMChein"

console.log(
  selectSleigh(10, [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 5 },
  ])
); //"Pedrosillano"

console.log(
  selectSleigh(50, [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 2 },
    { name: 'marcospage', consumption: 3 },
  ])
); // null
