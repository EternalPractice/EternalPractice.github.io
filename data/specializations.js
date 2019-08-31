let specializationData = [
  {
    name: "Alchemy",
    description: `Alchemy is the study of potions and their ingredients.</br>
    Adventurers who study alchemy can make potions to solve a wide variety of problems.</br>
    From making oils that set things on fire, to love potions, to healing salves.`,
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
        level: 3,
        type: "Interaction",
        name: "Perfume",
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
        type: "Exploration",
        name: "Craft Basic Potion",
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
        type: "Exploration",
        name: "Craft Intermediate Potion",
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
        type: "Exploration",
        name: "Craft Expert Potion",
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
        type: "Exploration",
        name: "Craft Master Potion",
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
        type: "Combat",
        name: "Poison Immunity",
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
        type: "Interaction",
        name: "Better Flavor Food",
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
            Result: "2"
          },
          {
            Score: 2,
            Result: "2"
          },
          {
            Score: 3,
            Result: "2"
          },
          {
            Score: 4,
            Result: "4"
          },
          {
            Score: 5,
            Result: "4"
          },
          {
            Score: 6,
            Result: "4"
          },
          {
            Score: 7,
            Result: "6"
          },
          {
            Score: 8,
            Result: "6"
          },
          {
            Score: 9,
            Result: "6"
          },
          {
            Score: 10,
            Result: "8"
          }
        ]
      },
      {
        level: 2,
        type: "Combat",
        name: "Potion Spray",
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
        type: "Combat",
        name: "Create Potion Cloud",
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
        type: "Interaction",
        name: "Appraise Potion",
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
            Result: "Incorrect Appraisal, +/- 100% value"
          },
          {
            Score: 2,
            Result: "Incorrect Appraisal, +/- 50% value"
          },
          {
            Score: 3,
            Result: "Incorrect Appraisal, +/- 20% value"
          },
          {
            Score: 4,
            Result: "Incorrect Appraisal, +/- 10% value"
          },
          {
            Score: 5,
            Result: "Correct Appraisal, +/- 80% value"
          },
          {
            Score: 6,
            Result: "Correct Appraisal, +/- 60% value"
          },
          {
            Score: 7,
            Result: "Correct Appraisal, +/- 40% value"
          },
          {
            Score: 8,
            Result: "Correct Appraisal, +/- 20% value"
          },
          {
            Score: 9,
            Result: "Correct Appraisal, +/- 10% value"
          },
          {
            Score: 10,
            Result: "Correct Appraisal, correct value"
          }
        ]
      },
      {
        level: 4,
        type: "Interaction",
        name: "Pheromones",
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
        type: "Interaction",
        name: "Pheromone Incense",
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
        type: "Combat",
        name: "Create Makeshift Bomb",
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
            Result: "2"
          },
          {
            Score: 2,
            Result: "4"
          },
          {
            Score: 3,
            Result: "6"
          },
          {
            Score: 4,
            Result: "8"
          },
          {
            Score: 5,
            Result: "10"
          },
          {
            Score: 6,
            Result: "12"
          },
          {
            Score: 7,
            Result: "14"
          },
          {
            Score: 8,
            Result: "16"
          },
          {
            Score: 9,
            Result: "18"
          },
          {
            Score: 10,
            Result: "20"
          }
        ]
      }
    ]
  },
  {
    name: "Arcane",
    description: `Arcane is the study of magic and it's effects on the world, the keyword being <em>study</em>.</br>
    Those who focus on the arcane has access to some unique spells and also (and more importantly) modify spells from other disciplines.</br>
    The arcane favors intelligence and knowledge over instinct.`,
    perks: [
      {
        level: 1,
        type: "Combat",
        name: "Magic Missile",
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
            Result: "2"
          },
          {
            Score: 2,
            Result: "4"
          },
          {
            Score: 3,
            Result: "6"
          },
          {
            Score: 4,
            Result: "8"
          },
          {
            Score: 5,
            Result: "10"
          },
          {
            Score: 6,
            Result: "12"
          },
          {
            Score: 7,
            Result: "14"
          },
          {
            Score: 8,
            Result: "16"
          },
          {
            Score: 9,
            Result: "18"
          },
          {
            Score: 10,
            Result: "20"
          }
        ]
      },
      {
        level: 2,
        type: "Combat",
        name: "Meta Magic: Extend Spell",
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
        type: "Combat",
        name: "Meta Magic: Duplicate Spell",
        AP: 2,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 3,
          specialization: true
        },
        details: `You can spend 30 MP to target more creatures when casting a spell.</br>
      When you cast another spell, the degree of success determines how many targets the effect will work on.`
      },
      {
        level: 1,
        type: "Exploration",
        name: "Detect Magic",
        AP: 10,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer who studies the arcane can use their knowledge to detect the presence of magical auras.</br>
      With a successful magic check, the adventurer can detect a number of auras equal to the degree of success.</br>`
      },
      {
        level: 2,
        type: "Exploration",
        name: "Arcane Recovery",
        AP: 2,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 2,
          specialization: true
        },
        details: `An adventurer who has specialized in the arcane is adept at recovering there MP.</br>
      They can spend time in quiet reflection to recover lost MP, centering themselves and finding their inner reserve.</br>
      Adventurers can make a <em>Magic</em> check to recover MP based on the table below.`,
        table: [
          {
            Score: 1,
            Result: "1"
          },
          {
            Score: 2,
            Result: "1"
          },
          {
            Score: 3,
            Result: "1"
          },
          {
            Score: 4,
            Result: "1"
          },
          {
            Score: 5,
            Result: "2"
          },
          {
            Score: 6,
            Result: "2"
          },
          {
            Score: 7,
            Result: "2"
          },
          {
            Score: 8,
            Result: "2"
          },
          {
            Score: 9,
            Result: "2"
          },
          {
            Score: 10,
            Result: "3"
          }
        ]
      },
      {
        level: 3,
        type: "Exploration",
        name: "Meta Magic: Create Spell Vessel",
        AP: 5,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 3,
          specialization: true
        },
        details: `An adventurer can store a spell into a magical vessel to be used later by a creature.</br>
        By spending 20 MP on top of casting a spell, the adventurer can create a glowing baseball sized orb that stores the spell for later use.</br>
        If the spell is used by another creature, the goal roll is equal to the degree of success while casting the spell.</br>
        The spell can last in this state for as long as the 5 AP is maintained.`
      },
      {
        level: 1,
        type: "Interaction",
        name: "Overburden with Knowledge",
        AP: 20,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer who has studied the Arcane needs to read a lot about a wide array of magical subjects.</br>
        The adventurer can use this vast amount of knowledge in conversation to overwhelm people with large and numerous words.</br>
        With a successful <em>Deceive</em> check, the adventurer can appear smarter than they are and apply it's degree of success to the next <em>Persuade</em>check.`
      },
      {
        level: 2,
        type: "Interaction",
        name: "Recall Factoid",
        AP: 20,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 2,
          specialization: false
        },
        details: `An adventurer can attempt to recall a fact about any subject they have read about when studying the arcane.</br>
        When making a successful check with any related skill, the adventurer can recall a fact relevant to their current conversation.</br>
        It's up to the GM's deaccession how rare this fact will be based on the degree of success.  Specializations in related skills will also stack with this check.`
      },
      {
        level: 3,
        type: "Interaction",
        name: "Charge Environment",
        AP: 20,
        requirements: {
          strength: 1,
          perception: 3,
          intelligence: 3,
          specialization: true
        },
        details: `An adventurer can use their magic ability to change the energy in the environment around them.</br>
        With a successful <em>Magic</em> check, the adventurer can charm an amount of creatures equal to the degree of success while in the same environment.</br>
        Charmed creatures (see Glossary for more details) can be persuaded with a +2 to the goal.`
      },
      {
        level: 4,
        type: "Exploration",
        name: "Teleportation",
        AP: 20,
        requirements: {
          strength: 1,
          perception: 3,
          intelligence: 4,
          specialization: false
        },
        details: `An adventurer can use their magic to teleport themselves across large distances.</br>
        With a successful <em>Magic</em> check, the adventurer can teleport up to x00 feet in one direction, where x is the degree of success.`
      },
      {
        level: 5,
        type: "Exploration",
        name: "Teleportation Circle",
        AP: 20,
        requirements: {
          strength: 1,
          perception: 3,
          intelligence: 5,
          specialization: true
        },
        details: `An adventurer can use their magic to teleport themselves and everyone in a 5-foot radius circle across large distances.</br>
        With a successful <em>Magic</em> check, the adventurer can teleport willing creatures up to x00 feet in one direction, where x is the degree of success.</br>
        Unwilling creature are also teleported upon a failed will save.`
      },
      {
        level: 4,
        type: "Combat",
        name: "Barrier",
        AP: 5,
        requirements: {
          strength: 1,
          perception: 2,
          intelligence: 4,
          specialization: false
        },
        details: `An adventurer can use their magical ability to create a barrier around themselves that will block damage.</br>
      A successful <em>Magic-Matter</em> check will block the following amount of damage:`,
        table: [
          {
            Score: 1,
            Result: "2"
          },
          {
            Score: 2,
            Result: "4"
          },
          {
            Score: 3,
            Result: "6"
          },
          {
            Score: 4,
            Result: "8"
          },
          {
            Score: 5,
            Result: "10"
          },
          {
            Score: 6,
            Result: "12"
          },
          {
            Score: 7,
            Result: "15"
          },
          {
            Score: 8,
            Result: "18"
          },
          {
            Score: 9,
            Result: "20"
          },
          {
            Score: 10,
            Result: "25"
          }
        ]
      },
      {
        level: 5,
        type: "Combat",
        name: "Magic Eruption",
        AP: 20,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 5,
          specialization: true
        },
        details: `An adventurer can burn their entire MP pool to create an explosion emanating from their body.</br>
      Upon a successful <em>magic</em> check, a magical blast explodes from them, dealing their MP total times the degree of success to everything within 20 feet of them.`
      },
      {
        level: 4,
        type: "Interaction",
        name: "One-on-One",
        AP: 20,
        requirements: {
          strength: 1,
          perception: 4,
          intelligence: 4,
          specialization: false
        },
        details: `An adventurer can make such a strong connection with another being that the rest of the universe seems to melt away.</br>
      Upon a successful <em>magic</em> check, the adventurer and it's target are taken to a pocket dimension (from their perspective) and can have a completely one-on-one interaction.</br>
      From an outside perspective, non of this happens and no time takes place.</br>
      This will last a number of minutes equal to the degree of success, or until the adventurer willing ends the interaction.`
      },
      {
        level: 5,
        type: "Interaction",
        name: "Forgetful Presence",
        AP: 20,
        requirements: {
          strength: 1,
          perception: 4,
          intelligence: 5,
          specialization: false
        },
        details: `An adventurer can use their magical ability to blend into the background of an interaction.</br>
      After making a successful <em>magic</em> check, the adventurer is completely ignored & forgotten in an interaction.</br>
      Beings in the interaction completely ignore and forget the presence of the adventurer for as many minutes as the degree of success.`
      }
    ]
  },
  {
    name: "Arcing Weapons",
    description: `Arcing weapons are projectile weapons that travel through the air in an arc.</br>
    These can include anything fired from a bow and thrown weapons.`,
    perks: [
      {
        level: 1,
        type: "Combat",
        name: "Far shot",
        AP: 3,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer is well versed with how their weapon arcs through the air, and is able to extend the range of their weapon.</br>
        When making a <em>ranged weapon attack</em> with a weapon that arcs, they can use this to extend the maximum range of the shot equal to the table below:`,
        table: [
          {
            Score: 1,
            Result: "5 ft"
          },
          {
            Score: 2,
            Result: "10 ft"
          },
          {
            Score: 3,
            Result: "15 ft"
          },
          {
            Score: 4,
            Result: "20 ft"
          },
          {
            Score: 5,
            Result: "25 ft"
          },
          {
            Score: 6,
            Result: "30 ft"
          },
          {
            Score: 7,
            Result: "35 ft"
          },
          {
            Score: 8,
            Result: "40 ft"
          },
          {
            Score: 9,
            Result: "45 ft"
          },
          {
            Score: 10,
            Result: "50"
          }
        ]
      },
      {
        level: 2,
        type: "Combat",
        name: "Arc shot",
        AP: 3,
        requirements: {
          strength: 1,
          perception: 2,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer can arc the projectile in such a way they can ignore cover than an enemy is crouched behind.</br>
      When making a successful <em>Ranged attack</em>, you can ignore the benefit of ducking behind cover if the range is within the outcome table below:`,
        table: [
          {
            Score: 1,
            Result: "5 ft"
          },
          {
            Score: 2,
            Result: "10 ft"
          },
          {
            Score: 3,
            Result: "15 ft"
          },
          {
            Score: 4,
            Result: "20 ft"
          },
          {
            Score: 5,
            Result: "25 ft"
          },
          {
            Score: 6,
            Result: "30 ft"
          },
          {
            Score: 7,
            Result: "35 ft"
          },
          {
            Score: 8,
            Result: "40 ft"
          },
          {
            Score: 9,
            Result: "45 ft"
          },
          {
            Score: 10,
            Result: "50 ft"
          }
        ]
      },
      {
        level: 3,
        type: "Combat",
        name: "Multi-fire",
        AP: 0,
        requirements: {
          strength: 3,
          perception: 3,
          intelligence: 1,
          specialization: true
        },
        details: `An adventurer can fire 2 projectiles at once at half the accuracy.</br>
      When making a successful <em>ranged attack check</em>, the adventurer can fire 2 projectiles at once if working within half maximum firing range.`
      },
      {
        level: 4,
        type: "Combat",
        name: "Bank Shot",
        AP: 3,
        requirements: {
          strength: 3,
          perception: 4,
          intelligence: 1,
          specialization: true
        },
        details: `An adventurer can bounce projectiles off hard surfaces in order to hit their target.</br>
      When making a successful <em>ranged attack check</em>, the projectile can bounce off the amount of surfaces less than or equal to the outcome table below.</br>
      Such a shot however will always minus 4 to the check.`,
        table: [
          {
            Score: 1,
            Result: "1"
          },
          {
            Score: 2,
            Result: "1"
          },
          {
            Score: 3,
            Result: "2"
          },
          {
            Score: 4,
            Result: "2"
          },
          {
            Score: 5,
            Result: "3"
          },
          {
            Score: 6,
            Result: "3"
          },
          {
            Score: 7,
            Result: "4"
          },
          {
            Score: 8,
            Result: "4"
          },
          {
            Score: 9,
            Result: "5"
          },
          {
            Score: 10,
            Result: "6"
          }
        ]
      },
      {
        level: 5,
        type: "Combat",
        name: "Rapid Fire",
        AP: 0,
        requirements: {
          strength: 4,
          perception: 5,
          intelligence: 1,
          specialization: true
        },
        details: `An adventurer, due to extensive practice, is capable of slinging projectiles quickly and accurately.</br>
      With this perk, they can use a <em>ranged attack</em> with an arcing weapon at half the AP cost.`
      },
      {
        level: 2,
        type: "Exploration",
        name: "Grapple Hook Expertise",
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `When using a grappling hook, you can add +2 to the goal roll when making a <em>1-handed ranged attack</em>.`
      },
      {
        level: 3,
        type: "Exploration",
        name: "Setup Zipline",
        AP: 20,
        requirements: {
          strength: 1,
          perception: 2,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer can shoot a rope with an arrow to setup a zipline across two points.</br>
      After a successful <em>ranged</em> check, a number of creatures can zip across equal to the degree of success.`
      },
      {
        level: 4,
        type: "Exploration",
        name: "Determine trajectory",
        AP: 20,
        requirements: {
          strength: 1,
          perception: 3,
          intelligence: 3,
          specialization: true
        },
        details: `An adventurer can examine a projectile and determine the trajectory & point of origin from where it came.</br>
      With a successful <em>ranged</em> check, an adventurer can determine the direction of a projectile and the exact point of origin if it's within the distance on the outcome table:`,
        table: [
          {
            Score: 1,
            Result: "5 ft"
          },
          {
            Score: 2,
            Result: "10 ft"
          },
          {
            Score: 3,
            Result: "20 ft"
          },
          {
            Score: 4,
            Result: "40 ft"
          },
          {
            Score: 5,
            Result: "80 ft"
          },
          {
            Score: 6,
            Result: "100 ft"
          },
          {
            Score: 7,
            Result: "150 ft"
          },
          {
            Score: 8,
            Result: "200 ft"
          },
          {
            Score: 9,
            Result: "250 ft"
          },
          {
            Score: 10,
            Result: "300 ft"
          }
        ]
      },
      {
        level: 1,
        type: "Exploration",
        name: "Determine depth specialization",
        AP: 20,
        requirements: {
          strength: 1,
          perception: 2,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer when using a <em>ranged attack</em> check to determine depth gets a +2 to the goal roll.`
      },
      {
        level: 5,
        type: "Exploration",
        name: "Embed rope",
        AP: 20,
        requirements: {
          strength: 5,
          perception: 3,
          intelligence: 1,
          specialization: true
        },
        details: `An adventurer can shoot an arrow (or throw a piercing weapon) with rope attached into a solid surface in order to climb it.</br>
      After a successful <em>ranged</em> check, a number of creatures can climb up the rope equal to the degree of success`
      },
      {
        level: 1,
        type: "Interaction",
        name: "Toss coin",
        AP: 20,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer can throw a coin at a hard surface in order to create a distraction while sneaking.</br>
        After a successful <em>1-handed ranged attack</em> check, the closest x creatures within a 25 foot radius will be distracted, x equal to the degree of success.`
      },
      {
        level: 2,
        type: "Interaction",
        name: "Trick Shot",
        AP: 20,
        requirements: {
          strength: 1,
          perception: 3,
          intelligence: 1,
          specialization: true
        },
        details: `An adventurer can show off their skill with ranged weapons by making a trick shot, changing the favor of their next interaction with someone.</br>
        When a situation is appropriate (GM discretion), a successful <em>ranged attack</em> check will yield a charisma bonus equal to the degree of success.`
      },
      {
        level: 5,
        type: "Interaction",
        name: "Influence Dice",
        AP: 20,
        requirements: {
          strength: 1,
          perception: 5,
          intelligence: 4,
          specialization: true
        },
        details: `An adventurer can toss dice in such a way that they can call to a degree of accuracy what number will come up on a d6.</br>
        When making a successful <em>Ranged attack</em> check, pick from the list of results of the die throw based on the degree of success.`,
        table: [
          {
            Score: 1,
            Result: "1"
          },
          {
            Score: 2,
            Result: "1,2"
          },
          {
            Score: 3,
            Result: "1,2"
          },
          {
            Score: 4,
            Result: "1,2,3"
          },
          {
            Score: 5,
            Result: "1,2,3"
          },
          {
            Score: 6,
            Result: "1,2,3,4"
          },
          {
            Score: 7,
            Result: "1,2,3,4"
          },
          {
            Score: 8,
            Result: "1,2,3,4,5"
          },
          {
            Score: 9,
            Result: "1,2,3,4,5"
          },
          {
            Score: 10,
            Result: "1,2,3,4,5,6"
          }
        ]
      }
    ]
  },
  {
    name: "Artifice",
    description: `Artifice is some stuff. `,
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
