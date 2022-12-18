console.clear();

function carryGifts(gifts, maxWeight) {
  // Creamos 3 variables:
  // la primera para crear un set donde guardaremos todos los sacos de regalos.
  // el segundo, corresponde a un array donde guardaremos los regalos.
  // y el tercero que almacena el peso del regalo que acabamos de meter en el saco.

  let coatOfGifts = new Set();
  let bagOfGift = [];
  let giftsWeight = 0;

  // Ahora pasamos el array de Gifts, primero por un filter, para descartar todos los regalos que pesen mas del peso maximo que se puede cargar.( de este modo, si todos los regalos pesan mas, devolvera el array vacio.)
  // hacemos un forEach del resultado del filter y lo primero que hacemos es una comprobacion
  // Si el peso de los regalos anteriores ( si lo hubiera si no es 0) y el actual es superior al peso maximo, entonces reseteamos el saco de los regalos a un array vacio y el peso lo reiniciamos a cero, para que comience un nuevo elemento a formarse.
  // despues de la comprobacion, vamos haciendo un push(), para ir metiendo los regalos actuales en el saco.
  // ademas en cada parte del ciclo, tambien sumamos el peso del regalo actual y añadimos el array del saco actual al conjunto de sacos.

  gifts
    .filter((gift) => gift.length <= maxWeight)
    .forEach((gift) => {
      if (giftsWeight + gift.length > maxWeight) {
        bagOfGift = [];
        giftsWeight = 0;
      }
      bagOfGift.push(gift);
      giftsWeight += gift.length;
      coatOfGifts.add(bagOfGift);
    });

  // Finalmente, devolvemos un arreglo de todos los elementos del grupo de sacos y le pasamos un map, para que cada uno de los elementos hagan un join, dandole el espacio para separar los regalos.

  return [...coatOfGifts].map((bag) => bag.join(' '));
}

/*
======================================================
                  TESTS DE PRUEBA
======================================================
*/

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 10));
/**
[
  "game bike",
  "book toy"
]
 */

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 7));
/**
[
  "game",
  "bike",
  "book toy"
]
 */

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 4));
/**
[
  "game",
  "bike",
  "book",
  "toy"
]
 */

console.log(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6));
/**
[
  "toy",
  "gamme",
  "toy",
  "bike"
]
 */

console.log(carryGifts(['toy', 'toy', 'toy', 'toy'], 2));
/**
[]
 */

console.log(carryGifts(['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7));
/**
[
  "toy toy",
  "disk",
  "disk toy",
  "toy"
]
 */
