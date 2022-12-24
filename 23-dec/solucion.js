console.clear();

/*
=======================================================
                        SOLUCIÓN
=======================================================
*/

function executeCommands(commands) {
  const MAX_VALUE = 256;

  const run = (action, i) => {
    const [command, args] = action.split(' ');
    const commandArgs = args
      .split(',')
      .map((a) => a.replace(/V(\d+)/, (_, p1) => `V0${p1 % 8}`));
    actions[command](...commandArgs, i);
  };

  const registries = {
    V00: 0,
    V01: 0,
    V02: 0,
    V03: 0,
    V04: 0,
    V05: 0,
    V06: 0,
    V07: 0,
  };
  const actions = {
    MOV: (value, id) => {
      let r = +value;
      registries[id] = r;
      value[0] === 'V' && (registries[id] = registries[value]);
    },
    ADD: (value1, value2) => {
      registries[value1] =
        (registries[value1] + registries[value2]) % MAX_VALUE;
    },
    DEC: (value1) => {
      registries[value1] = (registries[value1] - 1 + MAX_VALUE) % MAX_VALUE;
    },
    INC: (value1) => {
      registries[value1] = (registries[value1] + 1) % MAX_VALUE;
    },
    JMP: (i, idx) => {
      registries.V00 > 0 &&
        commands.slice(i, idx + 1).forEach((c) => run(c, idx));
    },
  };

  commands.forEach(run);

  return Object.values(registries);
}

/*
=======================================================
                        TESTS
=======================================================
*/

console.log(
  executeCommands(['MOV 5,V00', 'MOV 10,V01', 'DEC V00', 'ADD V00,V01'])
);
//[14,10,0,0,0,0,0,]

console.log(executeCommands(['MOV 255,V00', 'INC V00', 'DEC V01', 'DEC V01']));
//[0,254,0,0,0,0,0,0]
console.log(
  executeCommands(['MOV 10,V00', 'DEC V00', 'INC V01', 'JMP 1', 'INC V06'])
);
//[0,10,0,0,0,0,1,0]

console.log(
  executeCommands([
    'MOV 10,V00',
    'MOV V00,V01',
    'MOV V01,V02',
    'MOV V02,V03',
    'MOV V03,V04',
  ])
);
//[10,10,10,10,10,0,0,0]
