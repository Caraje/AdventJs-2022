console.clear();

function fixLetter(letter) {
  return (
    letter
      // ✓ Eliminar espacios al inicio y al final
      .trim()
      // ✓ Las preguntas sólo deben terminar con un signo de interrogación
      .replace(/([.,?!])(?=\1)/g, '')
      // ✓ Quitar espacios antes de coma o punto
      .replace(/(\s+([,.?!]))/g, (m, $1, $2) => $2)
      // ✓ Dejar un espacio después de cada coma, punto o interrogación
      .replace(/([!?.,])\s+/g, '$1 ')
      // ✓ La primera letra de cada oración debe estar en mayúscula
      .replace(/(^|[.!?]\s+)([a-z])/g, (m, $1, $2) => $1 + $2.toUpperCase())
      .replace(/(^[a-z])/g, (m, $1) => $1.toUpperCase())
      // ✓ Eliminar múltiples espacios en blanco y dejar sólo uno
      .replace(/\s+/g, ' ')
      // ✓ Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
      .replace(/(santa claus)/gi, 'Santa Claus')
      // ✓ Poner un punto al final de la frase si no tiene puntuación
      .replace(/([A-z])$/, (m, $1) => `${$1}.`)
  );
}

console.log(
  fixLetter(
    ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
  )
);
//"Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye."

console.log(
  fixLetter(
    "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
  )
);
//"Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?"

console.log(fixLetter('  hi    santa    claus '));
//"Hi Santa Claus."

console.log(fixLetter('  hi    santa    claus . santa claus is the best  '));
//"Hi Santa Claus. Santa Claus is the best."

console.log(fixLetter('  hi    santa    claus ??'));
//"Hi Santa Claus. Are you there?"

console.log(
  fixLetter('Hey santa Claus .  I want a bike.   I want a videogame! ')
);
//"Hey Santa Claus. I want a bike. I want a videogame!"
