let specializationData = [
  {
    name: 'Alchemy',
    description: `Alchemy is the study of potions and their ingredients.</br>
    Adventurers who study alchemy can make potions to solve a wide variety of problems.</br>
    From making oils that set things on fire, to love potions, to healing salves.`,
    perks: [
      {
        level: 1,
        type: 'Exploration',
        name: 'Identify Ingredient',
        AP: 3,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `Adventurers can use a <em>Craft-Alchemy</em> skill check to inspect an ingredient and get information about it.`
      },
      {
        level: 1,
        type: 'Exploration',
        name: 'Create burn salve',
        AP: 10,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `Adventurers can use a <em>Craft-Alchemy</em> skill check to create a salve to treat the burn condition.</br>
        This can be used to remove burn condition based on the table below:`,
        table: [
          {
            Score: 1,
            Result: '1'
          },
          {
            Score: 2,
            Result: '2'
          },
          {
            Score: 3,
            Result: '3'
          },
          {
            Score: 4,
            Result: '4'
          },
          {
            Score: 5,
            Result: '5'
          },
          {
            Score: 6,
            Result: '6'
          },
          {
            Score: 7,
            Result: '7'
          },
          {
            Score: 8,
            Result: '8'
          },
          {
            Score: 9,
            Result: '9'
          },
          {
            Score: 10,
            Result: '10'
          }
        ]
      },
      {
        level: 1,
        type: 'Combat',
        name: 'Throw Vial',
        AP: 2,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `Adventurers can use a <em>1-Handed Ranged</em> skill check to throw a vial at a target.</br>
          This can be used to either heal an ally without getting close, or applying a poison from afar.`
      },
      {
        level: 3,
        type: 'Interaction',
        name: 'Perfume',
        AP: 100,
        requirements: {
          strength: 1,
          perception: 3,
          intelligence: 3,
          specialization: false
        },
        details: `You can create a perfume that gives you a bonus to <em>persuasion</em> checks equal to the victory score on a successful <em>Craft-Alchemy</em> check.</br>
        This bonus lasts for 1-hour upon applying the perfume.`
      },
      {
        level: 2,
        type: 'Exploration',
        name: 'Craft Basic Potion',
        AP: 100,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 2,
          specialization: false
        },
        details: `Adventurers can use a <em>Craft-Alchemy</em> skill check to create a basic potion (see items section).<br>
            It's potency is equal to the degree of success.`
      },
      {
        level: 3,
        type: 'Exploration',
        name: 'Craft Intermediate Potion',
        AP: 100,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 3,
          specialization: false
        },
        details: `Adventurers can use a <em>Craft-Alchemy</em> skill check to create an intermediate potion (see items section).</br>
      It's potency is equal to the degree of success.`
      },
      {
        level: 4,
        type: 'Exploration',
        name: 'Craft Expert Potion',
        AP: 100,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 4,
          specialization: true
        },
        details: `Adventurers can use a <em>Craft-Alchemy</em> skill check to create an expert potion (see items section).</br>
      It's potency is equal to the degree of success.`
      },
      {
        level: 5,
        type: 'Exploration',
        name: 'Craft Master Potion',
        AP: 100,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 5,
          specialization: true
        },
        details: `Adventurers can use a <em>Craft-Alchemy</em> skill check to create a master potion (see items section).</br>
      It's potency is equal to the degree of success`
      },
      {
        level: 5,
        type: 'Combat',
        name: 'Poison Immunity',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 3,
          intelligence: 5,
          specialization: true
        },
        details: `Through research and experience, adventurers can gain an immunity to the effects of poison.`
      },
      {
        level: 1,
        type: 'Interaction',
        name: 'Better Flavor Food',
        AP: 100,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `Adventurers who apply their knowledge of mixing ingredients towards bettering their cooking can better influence diners.</br>
        You can make a <em>Craft-Alchemy</em> skill check to create food and apply the following bonuses to persuasion against those who ate it:`,
        table: [
          {
            Score: 1,
            Result: '2'
          },
          {
            Score: 2,
            Result: '2'
          },
          {
            Score: 3,
            Result: '2'
          },
          {
            Score: 4,
            Result: '4'
          },
          {
            Score: 5,
            Result: '4'
          },
          {
            Score: 6,
            Result: '4'
          },
          {
            Score: 7,
            Result: '6'
          },
          {
            Score: 8,
            Result: '6'
          },
          {
            Score: 9,
            Result: '6'
          },
          {
            Score: 10,
            Result: '8'
          }
        ]
      },
      {
        level: 2,
        type: 'Combat',
        name: 'Potion Spray',
        AP: 2,
        requirements: {
          strength: 1,
          perception: 2,
          intelligence: 1,
          specialization: false
        },
        details: `Adventurers who take a swig of a potion can choose to spit it in a 10-foot cone instead of ingesting it.</br>
      Every creature caught in this spray takes half benefit of the potion.`
      },
      {
        level: 3,
        type: 'Combat',
        name: 'Create Potion Cloud',
        AP: 5,
        requirements: {
          strength: 1,
          perception: 3,
          intelligence: 3,
          specialization: false
        },
        details: `Adventurers can purposely make a potion unstable, causing the liquid to change to gas and create a cloud.</br>
      A 10-foot radius cloud is formed around the potion and lasts for 3 turns.  Those in it's radius take half effect of the potion.`
      },
      {
        level: 2,
        type: 'Interaction',
        name: 'Appraise Potion',
        AP: 50,
        requirements: {
          strength: 1,
          perception: 2,
          intelligence: 2,
          specialization: false
        },
        details: `Adventuers can use their knowledge of potions to appraise the type and value of an unknown potion</br>
      Use a <em>Craft-Alchemy</em> check in the appraisal with the following results:`,
        table: [
          {
            Score: 1,
            Result: 'Incorrect Appraisal, +/- 100% value'
          },
          {
            Score: 2,
            Result: 'Incorrect Appraisal, +/- 50% value'
          },
          {
            Score: 3,
            Result: 'Incorrect Appraisal, +/- 20% value'
          },
          {
            Score: 4,
            Result: 'Incorrect Appraisal, +/- 10% value'
          },
          {
            Score: 5,
            Result: 'Correct Appraisal, +/- 80% value'
          },
          {
            Score: 6,
            Result: 'Correct Appraisal, +/- 60% value'
          },
          {
            Score: 7,
            Result: 'Correct Appraisal, +/- 40% value'
          },
          {
            Score: 8,
            Result: 'Correct Appraisal, +/- 20% value'
          },
          {
            Score: 9,
            Result: 'Correct Appraisal, +/- 10% value'
          },
          {
            Score: 10,
            Result: 'Correct Appraisal, correct value'
          }
        ]
      },
      {
        level: 4,
        type: 'Interaction',
        name: 'Pheromones',
        AP: 50,
        requirements: {
          strength: 1,
          perception: 4,
          intelligence: 4,
          specialization: true
        },
        details: `Adventurers can create a potion that affects the mood of a target on a primal level.</br>
      Choose a mood.  On a successful <em>Craft-Alchemy</em> check a potion is created that will affect a creature for 10 minutes per degree of success.</br>
      The creature must inhale the potion for this to work.`
      },
      {
        level: 5,
        type: 'Interaction',
        name: 'Pheromone Incense',
        AP: 50,
        requirements: {
          strength: 1,
          perception: 4,
          intelligence: 5,
          specialization: true
        },
        details: `Adventures can use a <em>Craft-Alchemy</em>check to create an incense stick that will burn for 10 minutes per degree of success.</br>
      The affects work as a successful pheromone (see above) but affects all creatures in a 50-foot radius.`
      },
      {
        level: 4,
        type: 'Combat',
        name: 'Create Makeshift Bomb',
        AP: 10,
        requirements: {
          strength: 1,
          perception: 4,
          intelligence: 4,
          specialization: true
        },
        details: `By mixing ingredients that become unstable once combined, adventurers can create bombs on the fly.</br>
      Bombs created this way detonate at the end of the adventurer's next round, and deal damage in a 10-foot radius based on the table below:`,
        table: [
          {
            Score: 1,
            Result: '2'
          },
          {
            Score: 2,
            Result: '4'
          },
          {
            Score: 3,
            Result: '6'
          },
          {
            Score: 4,
            Result: '8'
          },
          {
            Score: 5,
            Result: '10'
          },
          {
            Score: 6,
            Result: '12'
          },
          {
            Score: 7,
            Result: '14'
          },
          {
            Score: 8,
            Result: '16'
          },
          {
            Score: 9,
            Result: '18'
          },
          {
            Score: 10,
            Result: '20'
          }
        ]
      }
    ]
  },
  {
    name: 'Arcane',
    description: `Arcane is the study of magic and it's effects on the world, the keyword being <em>study</em>.</br>
    Those who focus on the arcane has access to some unique spells and also (and more importantly) modify spells from other disciplines.</br>
    The arcane favors intelligence and knowledge over instinct.`,
    perks: [
      {
        level: 1,
        type: 'Combat',
        name: 'Magic Missile',
        AP: 3,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `The caster shoots out a small invisible bolt of force that hits a target within a line of sight.</br>`,
        table: [
          {
            Score: 1,
            Result: '2'
          },
          {
            Score: 2,
            Result: '4'
          },
          {
            Score: 3,
            Result: '6'
          },
          {
            Score: 4,
            Result: '8'
          },
          {
            Score: 5,
            Result: '10'
          },
          {
            Score: 6,
            Result: '12'
          },
          {
            Score: 7,
            Result: '14'
          },
          {
            Score: 8,
            Result: '16'
          },
          {
            Score: 9,
            Result: '18'
          },
          {
            Score: 10,
            Result: '20'
          }
        ]
      },
      {
        level: 2,
        type: 'Combat',
        name: 'Meta Magic: Extend Spell',
        AP: 2,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 2,
          specialization: true
        },
        details: `You can spend 20 MP to extend the duration of a spell.</br>
      When you cast another spell, the degree of success determines how many turns the effect will last.</br>
      If the spell already lasts for multiple turns, this will add to the duration.</br>
      Damaging spells will damage on each turn.`
      },
      {
        level: 3,
        type: 'Combat',
        name: 'Meta Magic: Duplicate Spell',
        AP: 2,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 3,
          specialization: true
        },
        details: `You can spend 30 MP to target more creatures when casting a spell.</br>
      When you cast another spell, the degree of success determines how many targets the effect will work on.`
      }
    ]
  },
  {
    name: 'Archery',
    description: `Archery is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Artifice',
    description: `Artifice is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Bardic Lore',
    description: `Bardic Lore is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Beast Master',
    description: `Beast Master is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Brute Force',
    description: `Brute Force is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Cavalier',
    description: `Cavalier is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Commander',
    description: `Commander is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Dual Wielder',
    description: `Dual Wielder is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Elements',
    description: `Elements is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Faith',
    description: `Faith is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Flail Master',
    description: `Flail Master is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Martial Arts',
    description: `Martial Arts is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Nature',
    description: `Nature is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Occultism',
    description: `Occultism is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Psionics',
    description: `Psionics is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Raptor fighting',
    description: `Raptor fighting is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Brawler',
    description: `Brawler is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Thievery',
    description: `Thievery is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        requirements: {
          AP: 0,
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Tracking',
    description: `Tracking is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Shapeshifting',
    description: `Shapeshifting is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Skulker',
    description: `Skulker is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Blood Mage',
    description: `Blood Mage is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  },
  {
    name: 'Undeath',
    description: `Undeath is some stuff.`,
    perks: [
      {
        level: 0,
        type: 'Exploration',
        name: '<place holder>',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `<place holder>`
      }
    ]
  }
];

export { specializationData };
