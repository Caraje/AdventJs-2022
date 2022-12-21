console.clear();

/*
=======================================================
                        SOLUCIÓN
=======================================================
*/
function howManyReindeers(reindeerTypes, gifts) {
  reindeerTypes.sort((a, b) => b.weightCapacity - a.weightCapacity);
  return gifts.reduce((acc, country) => {
    const filteredReindeers = reindeerTypes.filter(
      (reindeer) => reindeer.weightCapacity < country.weight
    );

    let totalSum = filteredReindeers.reduce((acc, reindeer) => {
      return acc + reindeer.weightCapacity;
    }, 0);

    const reindeers = filteredReindeers.map((reindeer) => {
      let num = Math.floor(country.weight / totalSum);
      country.weight -= num * reindeer.weightCapacity;
      totalSum -= reindeer.weightCapacity;
      return { type: reindeer.type, num };
    });

    acc = [...acc, { country: country.country, reindeers }];

    return acc;
  }, []);
}

/*
=======================================================
                        TESTS
=======================================================
*/

console.log(
  howManyReindeers(
    [
      { type: 'Nuclear', weightCapacity: 50 },
      { type: 'Electric', weightCapacity: 10 },
      { type: 'Gasoline', weightCapacity: 5 },
      { type: 'Diesel', weightCapacity: 1 },
    ],
    [
      { country: 'Spain', weight: 30 },
      { country: 'France', weight: 17 },
      { country: 'Italy', weight: 50 },
    ]
  )
);

/*
[
  {
    "country": "Spain",
    "reindeers": [
      {
        "type": "Electric",
        "num": 1
      },
      {
        "type": "Gasoline",
        "num": 3
      },
      {
        "type": "Diesel",
        "num": 5
      }
    ]
  },
  {
    "country": "France",
    "reindeers": [
      {
        "type": "Electric",
        "num": 1
      },
      {
        "type": "Gasoline",
        "num": 1
      },
      {
        "type": "Diesel",
        "num": 2
      }
    ]
  },
  {
    "country": "Italy",
    "reindeers": [
      {
        "type": "Electric",
        "num": 3
      },
      {
        "type": "Gasoline",
        "num": 3
      },
      {
        "type": "Diesel",
        "num": 5
      }
    ]
  }
]
*/

console.log(
  howManyReindeers(
    [
      { type: 'Electric', weightCapacity: 10 },
      { type: 'Gasoline', weightCapacity: 5 },
      { type: 'Diesel', weightCapacity: 1 },
    ],
    [{ country: 'Spain', weight: 37 }]
  )
);

/*
[
  {
    "country": "Spain",
    "reindeers": [
      {
        "type": "Electric",
        "num": 2
      },
      {
        "type": "Gasoline",
        "num": 2
      },
      {
        "type": "Diesel",
        "num": 7
      }
    ]
  }
]
*/

console.log(
  howManyReindeers(
    [
      { type: 'Nuclear', weightCapacity: 50 },
      { type: 'Electric', weightCapacity: 10 },
      { type: 'Gasoline', weightCapacity: 5 },
      { type: 'Diesel', weightCapacity: 1 },
    ],
    [
      { country: 'Spain', weight: 30 },
      { country: 'Germany', weight: 7 },
      { country: 'France', weight: 17 },
      { country: 'Italy', weight: 50 },
    ]
  )
);

/*
[
  {
    "country": "Spain",
    "reindeers": [
      {
        "type": "Electric",
        "num": 1
      },
      {
        "type": "Gasoline",
        "num": 3
      },
      {
        "type": "Diesel",
        "num": 5
      }
    ]
  },
  {
    "country": "Germany",
    "reindeers": [
      {
        "type": "Gasoline",
        "num": 1
      },
      {
        "type": "Diesel",
        "num": 2
      }
    ]
  },
  {
    "country": "France",
    "reindeers": [
      {
        "type": "Electric",
        "num": 1
      },
      {
        "type": "Gasoline",
        "num": 1
      },
      {
        "type": "Diesel",
        "num": 2
      }
    ]
  },
  {
    "country": "Italy",
    "reindeers": [
      {
        "type": "Electric",
        "num": 3
      },
      {
        "type": "Gasoline",
        "num": 3
      },
      {
        "type": "Diesel",
        "num": 5
      }
    ]
  }
]
*/

console.log(
  howManyReindeers(
    [
      { type: 'Diesel', weightCapacity: 1 },
      { type: 'Gasoline', weightCapacity: 5 },
    ],
    [
      { country: 'Spain', weight: 30 },
      { country: 'Germany', weight: 7 },
    ]
  )
);

/*
[
  {
    "country": "Spain",
    "reindeers": [
      {
        "type": "Gasoline",
        "num": 5
      },
      {
        "type": "Diesel",
        "num": 5
      }
    ]
  },
  {
    "country": "Germany",
    "reindeers": [
      {
        "type": "Gasoline",
        "num": 1
      },
      {
        "type": "Diesel",
        "num": 2
      }
    ]
  }
]
*/
