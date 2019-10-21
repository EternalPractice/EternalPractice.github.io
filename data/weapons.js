let weapons = [
  {
    type: 'Swords',
    description: 'Typical stabby/swingy weapons',
    specificWeapon: [
      {
        name: 'Dagger',
        damageType: 'slash/pierce',
        slots: 1,
        AP: 2,
        actions: [
          {
            name: 'Attack',
            bonus: 0,
            table: [
              {
                score: 1,
                result: '1'
              },
              {
                score: 2,
                result: '2'
              },
              {
                score: 3,
                result: '3'
              },
              {
                score: 4,
                result: '4'
              },
              {
                score: 5,
                result: '5'
              },
              {
                score: 6,
                result: '6'
              },
              {
                score: 7,
                result: '7'
              },
              {
                score: 8,
                result: '8'
              },
              {
                score: 9,
                result: '9'
              },
              {
                score: 10,
                result: '10'
              }
            ]
          },
          {
            name: 'Parry',
            bonus: '-2',
            table: [
              {
                score: 1,
                result: '-1'
              },
              {
                score: 2,
                result: '-1'
              },
              {
                score: 3,
                result: '-1'
              },
              {
                score: 4,
                result: '-2'
              },
              {
                score: 5,
                result: '-2'
              },
              {
                score: 6,
                result: '-3'
              },
              {
                score: 7,
                result: '-3'
              },
              {
                score: 8,
                result: '-4'
              },
              {
                score: 9,
                result: '-4'
              },
              {
                score: 10,
                result: '-5'
              }
            ]
          },
          {
            name: 'Block',
            bonus: '-6',
            table: [
              {
                score: 1,
                result: '+1'
              },
              {
                score: 2,
                result: '+1'
              },
              {
                score: 3,
                result: '+1'
              },
              {
                score: 4,
                result: '+2'
              },
              {
                score: 5,
                result: '+2'
              },
              {
                score: 6,
                result: '+3'
              },
              {
                score: 7,
                result: '+3'
              },
              {
                score: 8,
                result: '+4'
              },
              {
                score: 9,
                result: '+4'
              },
              {
                score: 10,
                result: '+5'
              }
            ]
          }
        ]
      }
    ]
  }
];

export { weapons };
