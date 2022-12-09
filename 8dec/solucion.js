console.clear();

function checkPart(part) {
  return part === [...part].reverse().join('')
    ? true
    : [...part].filter((item, index) => {
        const str = part.substring(0, index) + part.substring(index + 1);
        return str === [...str].reverse().join('');
      }).length >= 1;
}

console.log(checkPart('uwu')); //true

// console.log(checkPart('midu')); //false
// console.log(checkPart('lolol')); //true
// console.log(checkPart('yolooloy')); //true
// console.log(checkPart('zzzoonzzz')); //true
