console.clear();

function createCube(size) {
  let top = [];
  let bottom = [];

  for (let i = 1; i <= size; i++) {
    top.push(' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size));
    bottom.push(
      ' '.repeat(i - 1) + '\\/'.repeat(size - (i - 1)) + '_/'.repeat(size)
    );
  }
  return [...top, ...bottom].join('\n');
}

// console.log(createCube(1));
// console.log(createCube2(2));
console.log(createCube(5));
