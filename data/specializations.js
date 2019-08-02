let specializationData = [
  {
    name: "Alchemy",
    description: `Alchemy is the study of potions and their ingredients.</br>
    Alchemists tend to make concoctions to solve their problems.</br>
    I'm tired, so this is as far as I will write.`,
    perks: [
      {
        level: 1,
        type: "Exploration",
        name: "Identify Ingredient",
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
        type: "Exploration",
        name: "Create burn salve",
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
            Result: "1"
          },
          {
            Score: 2,
            Result: "2"
          },
          {
            Score: 3,
            Result: "3"
          },
          {
            Score: 4,
            Result: "4"
          },
          {
            Score: 5,
            Result: "5"
          },
          {
            Score: 6,
            Result: "6"
          },
          {
            Score: 7,
            Result: "7"
          },
          {
            Score: 8,
            Result: "8"
          },
          {
            Score: 9,
            Result: "9"
          },
          {
            Score: 10,
            Result: "10"
          }
        ]
      },
      {
        level: 1,
        type: "Combat",
        name: "Throw Vial",
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
        level: 1,
        type: "Interaction",
        name: "Perfume",
        AP: 100,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `You can create a perfume that gives you a bonus to <em>persuasion</em> checks equal to the victory score on a successful <em>Craft-Alchemy</em> check.</br>
        This bonus lasts for 1-hour upon applying the perfume.`
      },
      {
        level: 2,
        type: "Exploration",
        name: "Craft Basic Potion",
        AP: 100,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 3,
          specialization: false
        },
        details: `Adventurers can use a <em>Craft-Alchemy</em> skill check to create a basic potion (see items section).<br>
            It's potentcy is equal to the victory score.`
      }
    ]
  },
  {
    name: "Arcane",
    description: `Arcane is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Archery",
    description: `Archery is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Artifice",
    description: `Artifice is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Bardic Lore",
    description: `Bardic Lore is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Beast Master",
    description: `Beast Master is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Brute Force",
    description: `Brute Force is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Cavalier",
    description: `Cavalier is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Commander",
    description: `Commander is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Dual Wielder",
    description: `Dual Wielder is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Elements",
    description: `Elements is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Faith",
    description: `Faith is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Flail Master",
    description: `Flail Master is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Martial Arts",
    description: `Martial Arts is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Nature",
    description: `Nature is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Occultism",
    description: `Occultism is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Psionics",
    description: `Psionics is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Raptor fighting",
    description: `Raptor fighting is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Brawler",
    description: `Brawler is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Thievery",
    description: `Thievery is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Tracking",
    description: `Tracking is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Shapeshifting",
    description: `Shapeshifting is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Skulker",
    description: `Skulker is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Blood Mage",
    description: `Blood Mage is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
    name: "Undeath",
    description: `Undeath is some stuff.`,
    perks: [
      {
        level: 0,
        type: "Exploration",
        name: "<place holder>",
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
