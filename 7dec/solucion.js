console.clear();

function getGiftsToRefill(a1, a2, a3) {
  // Al usar el "new Set" lo que hacemos es crear un nuevo array donde solo se guarda un elemento sin repetirse
  /*
    Ej: si tenemos dos arrays 
    a: ['camion', 'perro', 'camion']
    b: ['camion', 'gato']

    al juntarlos con el new Set, nos devuelve un unico Array, con 
    newA: ['camion', 'perro', 'gato']
  */

  const totalGifts = [...new Set([...a1, ...a2, ...a3])];

  // Ahora le podemos pasar un filter a este nuevo array
  // y miramos a ver si el actual elemento se encuentra en los arrays originales, con includes()
  // En caso de existir al menos un elemento, nos devolvera true, en caso contrario un false.
  // Podemos sumar los 3 trues, que se le da valor numerico de 1, entonces si la suma de los tres es igual a 1, devuelve el elemento, en caso contrario no lo devuelve, dejando asi, un filtrado del array que hemos creado solo con los elementos que no se repiten mas de una vez.

  return totalGifts.filter(
    (gift) => a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1
  );
}

// Tests

const a1 = ['bici', 'coche', 'bici', 'bici'];
const a2 = ['coche', 'bici', 'muñeca', 'coche'];
const a3 = ['bici', 'pc', 'pc'];

console.log(getGiftsToRefill(a1, a2, a3));
// console.log(getGiftsToRefill([], [], []));
// console.log(getGiftsToRefill(['a', 'a'], ['a', 'a'], ['a', 'a']));
// console.log(getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c']));
// console.log(getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f']));
