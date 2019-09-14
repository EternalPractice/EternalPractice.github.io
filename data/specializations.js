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
      },
      {
        level: 1,
        type: 'Exploration',
        name: 'Detect Magic',
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
        type: 'Exploration',
        name: 'Arcane Recovery',
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
            Result: '1'
          },
          {
            Score: 2,
            Result: '1'
          },
          {
            Score: 3,
            Result: '1'
          },
          {
            Score: 4,
            Result: '1'
          },
          {
            Score: 5,
            Result: '2'
          },
          {
            Score: 6,
            Result: '2'
          },
          {
            Score: 7,
            Result: '2'
          },
          {
            Score: 8,
            Result: '2'
          },
          {
            Score: 9,
            Result: '2'
          },
          {
            Score: 10,
            Result: '3'
          }
        ]
      },
      {
        level: 3,
        type: 'Exploration',
        name: 'Meta Magic: Create Spell Vessel',
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
        type: 'Interaction',
        name: 'Overburden with Knowledge',
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
        type: 'Interaction',
        name: 'Recall Factoid',
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
        type: 'Interaction',
        name: 'Charge Environment',
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
        type: 'Exploration',
        name: 'Teleportation',
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
        type: 'Exploration',
        name: 'Teleportation Circle',
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
        type: 'Combat',
        name: 'Barrier',
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
            Result: '15'
          },
          {
            Score: 8,
            Result: '18'
          },
          {
            Score: 9,
            Result: '20'
          },
          {
            Score: 10,
            Result: '25'
          }
        ]
      },
      {
        level: 5,
        type: 'Combat',
        name: 'Magic Eruption',
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
        type: 'Interaction',
        name: 'One-on-One',
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
        type: 'Interaction',
        name: 'Forgetful Presence',
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
    name: 'Arcing Weapons',
    description: `Arcing weapons are projectile weapons that travel through the air in an arc.</br>
    These can include anything fired from a bow and thrown weapons.`,
    perks: [
      {
        level: 1,
        type: 'Combat',
        name: 'Far shot',
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
            Result: '5 ft'
          },
          {
            Score: 2,
            Result: '10 ft'
          },
          {
            Score: 3,
            Result: '15 ft'
          },
          {
            Score: 4,
            Result: '20 ft'
          },
          {
            Score: 5,
            Result: '25 ft'
          },
          {
            Score: 6,
            Result: '30 ft'
          },
          {
            Score: 7,
            Result: '35 ft'
          },
          {
            Score: 8,
            Result: '40 ft'
          },
          {
            Score: 9,
            Result: '45 ft'
          },
          {
            Score: 10,
            Result: '50'
          }
        ]
      },
      {
        level: 2,
        type: 'Combat',
        name: 'Arc shot',
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
            Result: '5 ft'
          },
          {
            Score: 2,
            Result: '10 ft'
          },
          {
            Score: 3,
            Result: '15 ft'
          },
          {
            Score: 4,
            Result: '20 ft'
          },
          {
            Score: 5,
            Result: '25 ft'
          },
          {
            Score: 6,
            Result: '30 ft'
          },
          {
            Score: 7,
            Result: '35 ft'
          },
          {
            Score: 8,
            Result: '40 ft'
          },
          {
            Score: 9,
            Result: '45 ft'
          },
          {
            Score: 10,
            Result: '50 ft'
          }
        ]
      },
      {
        level: 3,
        type: 'Combat',
        name: 'Multi-fire',
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
        type: 'Combat',
        name: 'Bank Shot',
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
            Result: '1'
          },
          {
            Score: 2,
            Result: '1'
          },
          {
            Score: 3,
            Result: '2'
          },
          {
            Score: 4,
            Result: '2'
          },
          {
            Score: 5,
            Result: '3'
          },
          {
            Score: 6,
            Result: '3'
          },
          {
            Score: 7,
            Result: '4'
          },
          {
            Score: 8,
            Result: '4'
          },
          {
            Score: 9,
            Result: '5'
          },
          {
            Score: 10,
            Result: '6'
          }
        ]
      },
      {
        level: 5,
        type: 'Combat',
        name: 'Rapid Fire',
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
        type: 'Exploration',
        name: 'Grapple Hook Expertise',
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
        type: 'Exploration',
        name: 'Setup Zipline',
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
        type: 'Exploration',
        name: 'Determine trajectory',
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
            Result: '5 ft'
          },
          {
            Score: 2,
            Result: '10 ft'
          },
          {
            Score: 3,
            Result: '20 ft'
          },
          {
            Score: 4,
            Result: '40 ft'
          },
          {
            Score: 5,
            Result: '80 ft'
          },
          {
            Score: 6,
            Result: '100 ft'
          },
          {
            Score: 7,
            Result: '150 ft'
          },
          {
            Score: 8,
            Result: '200 ft'
          },
          {
            Score: 9,
            Result: '250 ft'
          },
          {
            Score: 10,
            Result: '300 ft'
          }
        ]
      },
      {
        level: 1,
        type: 'Exploration',
        name: 'Determine depth specialization',
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
        type: 'Exploration',
        name: 'Embed rope',
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
        type: 'Interaction',
        name: 'Toss coin',
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
        type: 'Interaction',
        name: 'Trick Shot',
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
        type: 'Interaction',
        name: 'Influence Dice',
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
            Result: '1'
          },
          {
            Score: 2,
            Result: '1,2'
          },
          {
            Score: 3,
            Result: '1,2'
          },
          {
            Score: 4,
            Result: '1,2,3'
          },
          {
            Score: 5,
            Result: '1,2,3'
          },
          {
            Score: 6,
            Result: '1,2,3,4'
          },
          {
            Score: 7,
            Result: '1,2,3,4'
          },
          {
            Score: 8,
            Result: '1,2,3,4,5'
          },
          {
            Score: 9,
            Result: '1,2,3,4,5'
          },
          {
            Score: 10,
            Result: '1,2,3,4,5,6'
          }
        ]
      }
    ]
  },
  {
    name: 'Engineering',
    description: `Engineering is the practice of building tools & machines to defeat obstacles.</br>
    Those specializing in engineering tend to want to build machines that solve the problem once and for all, instead of simply overcoming the problem then and there.</br>
    `,
    perks: [
      {
        level: 1,
        type: 'Combat',
        name: 'Field Disassemble',
        AP: 5,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 3,
          specialization: false
        },
        details: `An adventurer can disassemble a machine that they have gotten a hold of in combat.</br>
        This can range from a weapon that has been disarmed, to attempting to remove attachments from armor.</br>
        Upon a successful <em>craft-engineering</em> check, the adventurer can undo a number of steps equal to the degree of success.`
      },
      {
        level: 2,
        type: 'Combat',
        name: 'Pilot Vehicle',
        AP: 5,
        requirements: {
          strength: 1,
          perception: 2,
          intelligence: 3,
          specialization: false
        },
        details: `An adventurer can pilot and control a vehicle in combat.</br>
      With a successful <em>craft-engineering</em> check, the adventurer can take as many vehicle actions (see glossary) equal to the degree of success.</br>
      The AP cost is ongoing while controlling the vehicle.`
      },
      {
        level: 3,
        type: 'Combat',
        name: 'Operate Machine',
        AP: 5,
        requirements: {
          strength: 1,
          perception: 3,
          intelligence: 3,
          specialization: false
        },
        details: `An adventurer can operate a machine while in combat.</br>
        With a successful <em>craft-engineering</em> check, the adventurer can use as much AP for that machine as the degree of success.</br>
        The AP cost is ongoing while controlling the machine.  Only 1 Operate Machine check can be made each round per machine.`
      },
      {
        level: 4,
        type: 'Combat',
        name: 'Hijack Machine',
        AP: 10,
        requirements: {
          strength: 1,
          perception: 3,
          intelligence: 4,
          specialization: true
        },
        details: `An adventurer can attempt to hijack another machine and use it for themselves.</br>
      With a successful <em>craft-engineering</em> check, the adventurer can hijack a machine of level equal to or less than the degree of success.</br>
      Once hijacked, Operate Machine must be used or the machine becomes "off"`
      },
      {
        level: 5,
        type: 'Combat',
        name: 'Repurpose Machine',
        AP: 10,
        requirements: {
          strength: 1,
          perception: 3,
          intelligence: 5,
          specialization: true
        },
        details: `An adventurer can attempt to repurpose/reprogram an existing machine to fit their needs.</br>
      With a successful <em>craft-engineering</em> check, the adventurer can repurpose a machine of level equal to or less than the degree of success.</br>
      The adventurer can then change one function of the machine to do something else (or nothing).`
      },
      {
        level: 1,
        type: 'Exploration',
        name: 'Identify Machine Specialization',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 3,
          specialization: false
        },
        details: `An adventurer is specialized in idenfifying machines, and enjoys a +2 bonus to all <em>craft-engineering</em> checks made to identify.`
      },
      {
        level: 2,
        type: 'Exploration',
        name: 'Craft basic machine',
        AP: 100,
        requirements: {
          strength: 1,
          perception: 2,
          intelligence: 3,
          specialization: false
        },
        details: `Adventurers can use a <em>Craft-Engineering</em> skill check to create a basic machine (see items section).</br>
      It's level is equal to the degree of success.`
      },
      {
        level: 3,
        type: 'Exploration',
        name: 'Craft intermediate machine',
        AP: 100,
        requirements: {
          strength: 1,
          perception: 3,
          intelligence: 3,
          specialization: false
        },
        details: `Adventurers can use a <em>Craft-Engineering</em> skill check to create an intermediate machine (see items section).</br>
        It's level is equal to the degree of success.`
      },
      {
        level: 4,
        type: 'Exploration',
        name: 'Craft expert machine',
        AP: 100,
        requirements: {
          strength: 1,
          perception: 3,
          intelligence: 4,
          specialization: true
        },
        details: `Adventurers can use a <em>Craft-Engineering</em> skill check to create an expert machine (see items section).</br>
          It's level is equal to the degree of success.`
      },
      {
        level: 5,
        type: 'Exploration',
        name: 'Craft master machine',
        AP: 100,
        requirements: {
          strength: 1,
          perception: 3,
          intelligence: 5,
          specialization: true
        },
        details: `Adventurers can use a <em>Craft-Engineering</em> skill check to create a master machine (see items section).</br>
            It's level is equal to the degree of success.`
      },
      {
        level: 1,
        type: 'Interaction',
        name: 'Explain Machine',
        AP: 20,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 3,
          specialization: false
        },
        details: `An adventurer can more easily use a <em>Persuasion</em> check in order to explain how a  machine works.</br>
      Before talking, make a <em>craft-engineering</em> check.  Add to the <em>persuasion</em> goal a number equal to the degree of success.`
      },
      {
        level: 2,
        type: 'Interaction',
        name: 'Techobabble',
        AP: 20,
        requirements: {
          strength: 1,
          perception: 2,
          intelligence: 3,
          specialization: false
        },
        details: `An adventurer can use complicated jargon in attempt to confuse someone about how a machine works.</br>
      Make a <em>craft-engineering</em> check, upon success the target loses on their goal roll when using the machine equal to the degree of success.`
      },
      {
        level: 3,
        type: 'Interaction',
        name: 'Craft Jewelry',
        AP: 100,
        requirements: {
          strength: 1,
          perception: 3,
          intelligence: 3,
          specialization: false
        },
        details: `Adventurers can use a <em>Craft-Engineering</em> skill check to create jewelry that will influence those impressed by status/wealth.</br>
      Anyone who wears the jewelry gains a bonus to each persuasion roll equal to the degree of success against those who are influenced by wealth.`
      },
      {
        level: 4,
        type: 'Interaction',
        name: "Don't Push that Button!",
        AP: 20,
        requirements: {
          strength: 1,
          perception: 3,
          intelligence: 4,
          specialization: true
        },
        details: `Adventurers can use their expertise in engineering to convince another being that a machine is dangerous.</br>
      With a successful <em>craft-engineering</em> check, the target will avoid using the machine for a length of time described in the outcome table.</br>
      After half it's duration has passed, the target can make a will save to realize it's safe.`,
        table: [
          {
            Score: 1,
            Result: '1 minute'
          },
          {
            Score: 2,
            Result: '5 minutes'
          },
          {
            Score: 3,
            Result: '15 minutes'
          },
          {
            Score: 4,
            Result: '30 minutes'
          },
          {
            Score: 5,
            Result: '1 hour'
          },
          {
            Score: 6,
            Result: '3 hour'
          },
          {
            Score: 7,
            Result: '12 hours'
          },
          {
            Score: 8,
            Result: '1 day'
          },
          {
            Score: 9,
            Result: '5 days'
          },
          {
            Score: 10,
            Result: 'Permanent'
          }
        ]
      },
      {
        level: 5,
        type: 'Interaction',
        name: 'Social Engineering',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 4,
          intelligence: 5,
          specialization: true
        },
        details: `An adventurer is so used to seeing everything as a system, that they can apply that mindset to social situations.</br>
      Choose either <em>Persuasion</em> or <em>Deception</em>, you can instead use <em>craft-engineering</em> for those rolls instead.</br>
      This can be taken twice to gain the benefit for both skills.`
      }
    ]
  },
  {
    name: 'Bardic Lore',
    description: `Bardic Lore is the making of stories, the crafting of songs, and the all out production of theatre.</br>
    Those who practice Bardic Lore usually travel and explore for the sake of a good experience and are well versed in many lands/cultures`,
    perks: [
      {
        level: 1,
        type: 'Combat',
        name: 'Distract Opponent',
        AP: 5,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer can use their performance ability to temporarily distract an opponent in the heat of combat.</br>
        With a successful <em>performance</em> check, the next time the target is attacked the attacker gains a bonus equal to the degree of success.`
      },
      {
        level: 2,
        type: 'Combat',
        name: 'Combat Stance: Stylish',
        AP: 2,
        requirements: {
          strength: 1,
          perception: 2,
          intelligence: 2,
          specialization: false
        },
        details: `An adventurer can add movement to their melee attacks making it harder for opponents to predict their attacks.</br>
      When using this combat stance, opponents get -4 to all attempts to parry.`
      },
      {
        level: 3,
        type: 'Combat',
        name: 'Mocking Words',
        AP: 3,
        requirements: {
          strength: 1,
          perception: 3,
          intelligence: 3,
          specialization: false
        },
        details: `An adventurer can use their words to throw off their opponent.</br>
      With a successful <em>performance</em> check, the target loses an amount of AP based on the outcome table.</br>
      Multiple attempts against the same target will become harder.`,
        table: [
          {
            Score: 1,
            Result: '1 AP'
          },
          {
            Score: 2,
            Result: '1 AP'
          },
          {
            Score: 3,
            Result: '2 AP'
          },
          {
            Score: 4,
            Result: '2 AP'
          },
          {
            Score: 5,
            Result: '3 AP'
          },
          {
            Score: 6,
            Result: '3 AP'
          },
          {
            Score: 7,
            Result: '4 AP'
          },
          {
            Score: 8,
            Result: '4 AP'
          },
          {
            Score: 9,
            Result: '5 AP'
          },
          {
            Score: 10,
            Result: '5 AP'
          }
        ]
      },
      {
        level: 4,
        type: 'Combat',
        name: 'Combat Stance: Inspiring',
        AP: 3,
        requirements: {
          strength: 1,
          perception: 4,
          intelligence: 3,
          specialization: true
        },
        details: `An adventurer can fight in a way that inspires nearby allies.</br>
      When using this combat stance, allies attacking the same target get +2 to all combat checks.`
      },
      {
        level: 5,
        type: 'Combat',
        name: 'Dualist',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 5,
          intelligence: 3,
          specialization: true
        },
        details: `An adventurer with the dualist perk is an expert to one on one fighting.</br>
      When in combat with only one opponent, they gain a +2 bonus to all combat related checks.`
      },
      {
        level: 1,
        type: 'Exploration',
        name: 'Efficient Traveler',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 2,
          specialization: false
        },
        details: `An adventurer who has taken this perk is used to traveling between populations and is knowledgeable on the quickest methods to places.</br>
      When making a successful <em>Craft-Cartography</em> check, the adventurer knows the best route between points equal to the degree of success.</br>
      This may be any travel method, including the obscure (like a hidden teleportation circle in a club).  GM can modify the roll based on this obscurity.`
      },
      {
        level: 2,
        type: 'Exploration',
        name: 'Hitchhike',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 2,
          intelligence: 2,
          specialization: false
        },
        details: `An adventurer who has taken this perk has success in hitchhiking, and can catch a ride when needed.</br>
        When making a successful <em>Persuasion</em> check, the adventurer can hitch a ride for as many miles equal to the outcome table:`,
        table: [
          {
            Score: 1,
            Result: '1 Mile'
          },
          {
            Score: 2,
            Result: '2 Miles'
          },
          {
            Score: 3,
            Result: '6 Miles'
          },
          {
            Score: 4,
            Result: '8 Miles'
          },
          {
            Score: 5,
            Result: '10 Miles'
          },
          {
            Score: 6,
            Result: '12 Miles'
          },
          {
            Score: 7,
            Result: '15 Miles'
          },
          {
            Score: 8,
            Result: '20 Miles'
          },
          {
            Score: 9,
            Result: '30 Miles'
          },
          {
            Score: 10,
            Result: '50 Miles'
          }
        ]
      },
      {
        level: 4,
        type: 'Exploration',
        name: 'Locating the Underground',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 3,
          intelligence: 4,
          specialization: true
        },
        details: `An adventurer has traveled to enough places to know how to quickly locate the smaller scenes and lesser known groups.</br>
      When making a successful <em>Craft-Cartography</em> check, the adventurer knows of a number of small groups & their meetup locations equal to the degree of success.`
      },
      {
        level: 3,
        type: 'Exploration',
        name: 'Cheap Room and Board',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 3,
          intelligence: 3,
          specialization: false
        },
        details: `An adventurer has traveled enough to gain a reputation, and can convince innkeepers to reduce their prices for them.</br>
      When making a successful <em>persuasion</em> check, the adventurer can obtain half off boarding for a number of companions equal to the degree of success.</br>
      If the degree of success exceeds the number of rooms needed, a room is free per extra success.`
      },
      {
        level: 5,
        type: 'Exploration',
        name: 'Locating the Hidden',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 5,
          intelligence: 3,
          specialization: true
        },
        details: `An adventurer who is well traveled can use their knowledge to find hidden areas.</br>
      When making a successful <em>Craft-Cartography</em> check, the adventurer knows of gaps in the map that could conceal hidden places.</br>
      The number of these gaps known is equal to the degree of success.`
      },
      {
        level: 1,
        type: 'Interaction',
        name: 'Toastmaster',
        AP: 20,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer can make a toast during a meal revolving around a particular subject.</br>
      When making a successful <em>performance</em> check, the adventurer gains a bonus to all persuasion rolls during the same meal involving the subject of toast.</br>
      The bonus is equal to the degree of success.`
      },
      {
        level: 2,
        type: 'Interaction',
        name: 'Memorable Performance',
        AP: 20,
        requirements: {
          strength: 1,
          perception: 2,
          intelligence: 2,
          specialization: false
        },
        details: `An adventurer can make a performance that has a memorable message.</br>
      When making a successful <em>performance</em> check, the adventurer can instill a memory a number of creatures equal to the degree of success.</br>
      This message/memory is limited to one phrase.`
      },
      {
        level: 3,
        type: 'Interaction',
        name: 'Enchanting Performance',
        AP: 20,
        requirements: {
          strength: 1,
          perception: 3,
          intelligence: 3,
          specialization: false
        },
        details: `An adventurer can make a performance that holds it's audience captive.</br>
      When making a successful <em>performance</em> check, the adventurer can make a number of creatures captivated equal to the degree of success.</br>
      This effect lasts as long as the performance lasts, or until the creature is interrupted from it's trance.`
      },
      {
        level: 4,
        type: 'Interaction',
        name: 'Learn Secret',
        AP: 20,
        requirements: {
          strength: 1,
          perception: 4,
          intelligence: 3,
          specialization: true
        },
        details: `An adventurer can use their wit and charm when interacting with a person in order to learn a secret about them.</br>
      When making a successful <em>persuasion</em> check, the adventurer can uncover a secret with sensitivity equal to or less than the outcome table:`,
        table: [
          {
            Score: 1,
            Result: 'Common knowledge'
          },
          {
            Score: 2,
            Result: 'Common knowledge'
          },
          {
            Score: 3,
            Result: 'Common knowledge'
          },
          {
            Score: 4,
            Result: 'Uncommon knowledge'
          },
          {
            Score: 5,
            Result: 'Uncommon knowledge'
          },
          {
            Score: 6,
            Result: 'Uncommon knowledge'
          },
          {
            Score: 7,
            Result: 'Rare knowledge'
          },
          {
            Score: 8,
            Result: 'Rare knowledge'
          },
          {
            Score: 9,
            Result: 'Rare knowledge'
          },
          {
            Score: 10,
            Result: 'Extremely rare knowledge'
          }
        ]
      },
      {
        level: 5,
        type: 'Interaction',
        name: 'Recall Secret',
        AP: 20,
        requirements: {
          strength: 1,
          perception: 5,
          intelligence: 4,
          specialization: true
        },
        details: `An adventurer can use their vast knowledge gathered while traveling to recall a secret they overheard about a particular person.</br>
      When making a successful <em>persuasion</em> check, the adventurer can uncover a secret with sensitivity equal to or less than the outcome table`,
        table: [
          {
            Score: 1,
            Result: 'Common knowledge'
          },
          {
            Score: 2,
            Result: 'Common knowledge'
          },
          {
            Score: 3,
            Result: 'Common knowledge'
          },
          {
            Score: 4,
            Result: 'Uncommon knowledge'
          },
          {
            Score: 5,
            Result: 'Uncommon knowledge'
          },
          {
            Score: 6,
            Result: 'Uncommon knowledge'
          },
          {
            Score: 7,
            Result: 'Rare knowledge'
          },
          {
            Score: 8,
            Result: 'Rare knowledge'
          },
          {
            Score: 9,
            Result: 'Rare knowledge'
          },
          {
            Score: 10,
            Result: 'Extremely rare knowledge'
          }
        ]
      }
    ]
  },
  {
    name: 'Beast Master',
    description: `A Beast Master is an adventurer who has gained mastery over animals and can encourage them to work with them.</br>
    Whether by fighting amongst a pack of wolves, having a pigeon deliver a message, or commanding an otter to disable a torpedo.</br> 
    A Beast Master can always find an animal that works with it's needs.`,
    perks: [
      {
        level: 1,
        type: 'Combat',
        name: 'Command: Move',
        AP: 3,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer who has befriended a creature (see glossary) can command it to move to a specific point.</br>
        When making a successful <em>Animal handling</em> check, th creature will move a total distance when able equal to the degree of success.</br>
        If the creature must take multiple turns to do so it will.  The AP cost is used until the creature has completed the move.`
      },
      {
        level: 2,
        type: 'Combat',
        name: 'Command: Attack',
        AP: 3,
        requirements: {
          strength: 2,
          perception: 2,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer who has befriended a creature (see glossary) can command it to attack a specific target within range.</br>
      When making a successful <em>Animal handling</em> check, the creature will attack a target, sharing the roll of the adventurer.</br>
      If the creature is not within range, it will not attack.`
      },
      {
        level: 3,
        type: 'Combat',
        name: 'Command: Defend',
        AP: 3,
        requirements: {
          strength: 3,
          perception: 3,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer who has befriended a creature (see glossary) can command it to defend a specific target or space.</br>
      When making a successful <em>Animal handling</em> check, the creature will actively fight any other creature who threatens the space for a number of turns equal to the degree of success.`
      },
      {
        level: 4,
        type: 'Combat',
        name: 'Combat Stance: Beastly',
        AP: 3,
        requirements: {
          strength: 3,
          perception: 4,
          intelligence: 2,
          specialization: true
        },
        details: `An adventurer can fight in a way that speaks subconsciously to befriended creatures, encouraging them to fight harder.</br>
      When using this combat stance, befriended creatures get +2 to all combat checks`
      },
      {
        level: 5,
        type: 'Combat',
        name: 'Command: Any',
        AP: 5,
        requirements: {
          strength: 4,
          perception: 5,
          intelligence: 2,
          specialization: true
        },
        details: `An adventurer who has befriended a creature (see glossary) can command it to do any specific action that it's capable of doing.</br>
      When making a successful <em>Animal handling</em> check, the creature will perform the action, sharing the roll of the adventurer.</br>
      The action can be as specific and long as the adventurer wants, and every sub action will share the same roll.</br>
      AP cost is held until the action is completed.  The creature must be within senses range during this entire time.`
      },
      {
        level: 1,
        type: 'Exploration',
        name: 'Creature Befriender',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: true
        },
        details: `An adventurer who has this perk finds befriending creatures to be second nature.</br>
      When making a successful <em>animal handling</em> check to befriend a creature, they gain an additional +2 to the goal.`
      },
      {
        level: 2,
        type: 'Exploration',
        name: 'Heightened Danger Sense',
        AP: 20,
        requirements: {
          strength: 1,
          perception: 2,
          intelligence: 1,
          specialization: false
        },
        details: `Creatures living in the wild have a heightened sense of danger, an ability that an adventurer can tap into.</br>
      When making a successful <em>Animal handling</em> check, the adventurer is alerted to all creatures within the area of the outcome table`,
        table: [
          {
            Score: 1,
            Result: '10 ft'
          },
          {
            Score: 2,
            Result: '20 ft'
          },
          {
            Score: 3,
            Result: '30 ft'
          },
          {
            Score: 4,
            Result: '40 ft'
          },
          {
            Score: 5,
            Result: '50 ft'
          },
          {
            Score: 6,
            Result: '60 ft'
          },
          {
            Score: 7,
            Result: '70 ft'
          },
          {
            Score: 8,
            Result: '80 ft'
          },
          {
            Score: 9,
            Result: '90 ft'
          },
          {
            Score: 10,
            Result: '100 ft'
          }
        ]
      },
      {
        level: 3,
        type: 'Exploration',
        name: 'Command: Scout',
        AP: 20,
        requirements: {
          strength: 2,
          perception: 3,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer who has befriended a creature (see glossary) can command it to scout ahead and look for a certain object.</br>
      When making a successful <em>Animal handling</em> check, the creature will look for the object in the direction requested by the adventurer.</br>
      The creature will scout as far as the outcome table states, return, and show the adventurer where it was found.</br>
      The creature must have a way to know what it's looking for, whether this is a scent, a picture, or being told to find something it already knows about.`,
        table: [
          {
            Score: 1,
            Result: '50 feet'
          },
          {
            Score: 2,
            Result: '100 feet'
          },
          {
            Score: 3,
            Result: '150 feet'
          },
          {
            Score: 4,
            Result: '250 feet'
          },
          {
            Score: 5,
            Result: '500 feet'
          },
          {
            Score: 6,
            Result: '1,000 feet'
          },
          {
            Score: 7,
            Result: '2,500 feet'
          },
          {
            Score: 8,
            Result: '1 mile'
          },
          {
            Score: 9,
            Result: '3 miles'
          },
          {
            Score: 10,
            Result: '5 miles'
          }
        ]
      },
      {
        level: 4,
        type: 'Exploration',
        name: 'Command: Stalk',
        AP: 20,
        requirements: {
          strength: 2,
          perception: 4,
          intelligence: 1,
          specialization: true
        },
        details: `An adventurer who has befriended a creature (see glossary) can command it to stalk a creature and report it's location.</br>
      When making a successful <em>Animal handling</em> check, the creature will locate and follow a target for as many hours as degrees of success.`
      },
      {
        level: 5,
        type: 'Exploration',
        name: 'Command: Interact',
        AP: 20,
        requirements: {
          strength: 2,
          perception: 5,
          intelligence: 1,
          specialization: true
        },
        details: `An adventurer who has befriended a creature (see glossary) can command it to interact with an object in any way the adventurer wants.</br>
      When making a successful <em>Animal handling</em> check, the creature will follow the command sharing the result of the roll.</br>
      This can be used to disable a trap, unlock a door, or any other action that the creature has the physical ability to do so.`
      },
      {
        level: 1,
        type: 'Interaction',
        name: 'Cute Presence',
        AP: 20,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer who has an animal in his/her presence when making a persuasion check can use it's cuteness as an advantage.</br>
      All <em>persuasion</em> checks made to creatures who like the animal have a +2 bonus to the goal roll.`
      },
      {
        level: 2,
        type: 'Interaction',
        name: 'Distracting Presence',
        AP: 20,
        requirements: {
          strength: 1,
          perception: 2,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer can command a befriended creature (see glossary) to distract others while talking.</br>
      When making a successful <em>Animal handling</em> check, all <em>Pickpocket</em> checks made against a distracted creature get a bonus equal to the degree of success.</br>
      NOTE:  This does not work in a crowd, as the animal would bring attention to the pickpocket attempt.`
      },
      {
        level: 3,
        type: 'Interaction',
        name: 'Send Message',
        AP: 20,
        requirements: {
          strength: 2,
          perception: 3,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer who has befriended a creature (see glossary) can command it to delivery a written message to a location it knows already.</br>
      When making a successful <em>Animal handling</em> check, the creature will deliver the message as many miles away as equal to the degree of success.`
      },
      {
        level: 4,
        type: 'Interaction',
        name: 'Command: Parrot',
        AP: 20,
        requirements: {
          strength: 1,
          perception: 4,
          intelligence: 1,
          specialization: true
        },
        details: `An adventurer who has befriended a creature (see glossary) that has any speech ability can command it to listen and parrot back information later.</br>
      When making a successful <em>Animal handling</em> check, the creature will parrot back a number of words as described in the outcome table:`,
        table: [
          {
            Score: 1,
            Result: '10 words'
          },
          {
            Score: 2,
            Result: '20 words'
          },
          {
            Score: 3,
            Result: '30 words'
          },
          {
            Score: 4,
            Result: '40 words'
          },
          {
            Score: 5,
            Result: '50 words'
          },
          {
            Score: 6,
            Result: '60 words'
          },
          {
            Score: 7,
            Result: '70 words'
          },
          {
            Score: 8,
            Result: '80 words'
          },
          {
            Score: 9,
            Result: '90 words'
          },
          {
            Score: 10,
            Result: '100 words'
          }
        ]
      },
      {
        level: 5,
        type: 'Interaction',
        name: 'Speak on Behalf',
        AP: 20,
        requirements: {
          strength: 2,
          perception: 5,
          intelligence: 2,
          specialization: true
        },
        details: `An adventurer who has befriended a creature (see glossary) can instruct it to deliver a message on the adventurer's behalf.</br>
      When making a successful <em>Animal handling</em> check, the creature will be able to convey a message with a persuasion check equal to the degree of success.`
      }
    ]
  },
  {
    name: 'Brutality',
    description: `Actions of brutality involve anything that uses brute force to overcome obstacles.</br>
    From bashing in doors, bashing in someone's face, or simply threatening to do so all are examples of brutality.</br>
    Brutality favors 2-handed melee weapons since they allow adventurers to put their full strength behind it.`,
    perks: [
      {
        level: 1,
        type: 'Combat',
        name: 'Charge',
        AP: 3,
        requirements: {
          strength: 2,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer can initiate a charge, moving at double speed as long as they move at least 4 squares.</br>
        At the end of the charge they will gain a +2 to a melee attack goal roll.`
      },
      {
        level: 2,
        type: 'Combat',
        name: 'Power Attack',
        AP: 4,
        requirements: {
          strength: 3,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer can put their full force behind a blow, trading accuracy for damage.</br>
      Before making a <em>melee attack</em> check, the adventurer can choose to give themselves a penalty to the goal for the extra damage in the outcome table:`,
        table: [
          {
            Score: 1,
            Result: '+1 Damage'
          },
          {
            Score: 2,
            Result: '+5 Damage'
          },
          {
            Score: 3,
            Result: '+10 Damage'
          },
          {
            Score: 4,
            Result: '+15 Damage'
          },
          {
            Score: 5,
            Result: '+20 Damage'
          },
          {
            Score: 6,
            Result: 'x1.5 Damage'
          },
          {
            Score: 7,
            Result: 'x2 Damage'
          },
          {
            Score: 8,
            Result: 'x3 Damage'
          },
          {
            Score: 9,
            Result: 'x4 Damage'
          },
          {
            Score: 10,
            Result: 'x5 Damage'
          }
        ]
      },
      {
        level: 3,
        type: 'Combat',
        name: 'Combat Stance: Raging',
        AP: 3,
        requirements: {
          strength: 4,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer can enter a rage while in combat throwing caution to the wind.</br>
      While holding the AP needed, the adventurer will gain +4 to all combat rolls while getting -4 to all defensive stats.`
      },
      {
        level: 4,
        type: 'Combat',
        name: 'Sunder Equipment',
        AP: 4,
        requirements: {
          strength: 5,
          perception: 1,
          intelligence: 1,
          specialization: true
        },
        details: `An adventurer can choose to attack what a being is wearing/holding.</br>
      When making a successful <em>2-handed melee attack</em> check, the adventurer will instead transfer the damage to the equipment instead of the creature.`
      },
      {
        level: 5,
        type: 'Combat',
        name: 'Sever Limb',
        AP: 5,
        requirements: {
          strength: 5,
          perception: 1,
          intelligence: 1,
          specialization: true
        },
        details: `An adventurer can sever the limb of a wounded creature.</br>
        When making a successful <em>2-handed melee attack</em> check, the adventurer can sever a limb that's at 0 HP and transfer the remaining damage to the torso.`
      },
      {
        level: 3,
        type: 'Exploration',
        name: 'Break Lock',
        AP: 20,
        requirements: {
          strength: 4,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer can attempt to break a padlock (or any other external lock).</br>
      When making a successful <em>melee attack</em> check, the adventurer can break a lock of level equal to or lower than degree of success.`
      },
      {
        level: 4,
        type: 'Exploration',
        name: 'Break Door',
        AP: 20,
        requirements: {
          strength: 5,
          perception: 1,
          intelligence: 1,
          specialization: true
        },
        details: `An adventurer can attempt to break a door.</br>
      When making a successful <em>melee attack</em> check, the adventurer can break a door of level equal to or lower than degree of success.`
      },
      {
        level: 2,
        type: 'Exploration',
        name: 'Lifting Expertise',
        AP: 0,
        requirements: {
          strength: 3,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer with lifting expertise is stronger than most.</br>
      When calculating lifting & carrying capacity, the adventurer can double the amount.`
      },
      {
        level: 5,
        type: 'Exploration',
        name: 'Break Wall',
        AP: 20,
        requirements: {
          strength: 5,
          perception: 1,
          intelligence: 1,
          specialization: true
        },
        details: `An adventurer can attempt to break a wall.</br>
      When making a successful <em>melee attack</em> check, the adventurer can break a wall of level equal to or lower than degree of success.`
      },
      {
        level: 1,
        type: 'Exploration',
        name: 'Climbing Expertise',
        AP: 0,
        requirements: {
          strength: 2,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer with climbing expertise is better at climbing than most and gets a +2 to all <em>athletics</em> checks towards climbing.`
      },
      {
        level: 1,
        type: 'Interaction',
        name: '"I\'m with them"',
        AP: 0,
        requirements: {
          strength: 2,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer who is visibly strong standing behind a group can be an intimidating presence.</br>
      While advertising alliance with a party, members of that party have a +2 bonus to all <em>persuasion</em> checks towards creatures with less strength than the adventurer.`
      },
      {
        level: 2,
        type: 'Interaction',
        name: 'Intimidation',
        AP: 0,
        requirements: {
          strength: 3,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer can choose to intimidate a being with threats or scare tactics.</br>
      When making a successful <em>Athletics or Melee</em> check, the adventurer can add the degree of success towards their next <em>persuasion</em> roll.`
      },
      {
        level: 3,
        type: 'Interaction',
        name: 'When negotiations fail...',
        AP: 0,
        requirements: {
          strength: 4,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer practiced in brutality doesn't take much stock in negotiations, and is always prepared for violence.</br>
      During an interaction that turns into combat, the adventurer with this perk will always get top of initiative.`
      },
      {
        level: 4,
        type: 'Interaction',
        name: 'Enhanced Interrogation',
        AP: 20,
        requirements: {
          strength: 5,
          perception: 1,
          intelligence: 1,
          specialization: true
        },
        details: `An adventurer can perform "enhanced interrogation" (or torture) on a being to extract information.</br>
      When making a <em>melee attack</em> check on a subject, you can gain knowledge according to the outcome table.</br>
      This is generally a loud and messy process that takes at least 10 minutes to complete.`,
        table: [
          {
            Score: 1,
            Result: 'Common knowledge'
          },
          {
            Score: 2,
            Result: 'Common knowledge'
          },
          {
            Score: 3,
            Result: 'Common knowledge'
          },
          {
            Score: 4,
            Result: 'Uncommon knowledge'
          },
          {
            Score: 5,
            Result: 'Uncommon knowledge'
          },
          {
            Score: 6,
            Result: 'Uncommon knowledge'
          },
          {
            Score: 7,
            Result: 'Rare knowledge'
          },
          {
            Score: 8,
            Result: 'Rare knowledge'
          },
          {
            Score: 9,
            Result: 'Rare knowledge'
          },
          {
            Score: 10,
            Result: 'Extremely rare knowledge'
          }
        ]
      },
      {
        level: 5,
        type: 'Interaction',
        name: 'Too Strong to Stop',
        AP: 0,
        requirements: {
          strength: 5,
          perception: 1,
          intelligence: 1,
          specialization: true
        },
        details: `An adventurer with this perk gives off an intimidating presence at all times, making others fear the worst if they get on their bad side.</br>
      When committing brutal acts and being witnessed by one or two people, the adventurer can avoid them telling authorities if they have less strength.`
      }
    ]
  },
  {
    name: 'Cavalier',
    description: `Cavaliers are adventurers who prefer to ride into battle instead of wading into it.</br>
    Cavalier perks are aimed towards working with mounts, whether that be beasts, horses, motorcycles or jet skis.`,
    perks: [
      {
        level: 1,
        type: 'Combat',
        name: 'Calming mount expertise',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer is adept at calming a mount when it's feared during the heat of combat.</br>
        When making a successful <em>handle animal</em> check to calm a creature, the adventurer gets a +2 bonus.`
      },
      {
        level: 2,
        type: 'Combat',
        name: 'Turn on a dime',
        AP: 0,
        requirements: {
          strength: 2,
          perception: 2,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer is adept and turning their mount and can manuever better than most.</br>
      When making a sharp turn (see glossary: mount rules), it costs 0 AP instead of 1 AP.`
      },
      {
        level: 3,
        type: 'Combat',
        name: 'Charge into Battle',
        AP: 3,
        requirements: {
          strength: 3,
          perception: 2,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer can initiate a charge with their mount, moving at top speed for at least two moves.</br>
      At the end of the charge they will gain a +4 to a melee attack goal roll.`
      },
      {
        level: 4,
        type: 'Combat',
        name: 'Mounted Ranged Combat Expertise',
        AP: 0,
        requirements: {
          strength: 4,
          perception: 3,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer is adept at handing a ranged weapon while riding a mount and no longer takes a penalty for doing so.`
      },
      {
        level: 5,
        type: 'Combat',
        name: 'Push Harder',
        AP: 0,
        requirements: {
          strength: 5,
          perception: 3,
          intelligence: 1,
          specialization: true
        },
        details: `An adventurer can gain more speed out of the mount they are riding, increasing the top speed by 2.`
      },
      {
        level: 1,
        type: 'Exploration',
        name: 'Calm Animal Expertise',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer is skilled at calming a wild animal and gets a +2 bonus to all <em>Handle Animal</em> checks to do so.`
      },
      {
        level: 2,
        type: 'Exploration',
        name: 'Find Trail',
        AP: 20,
        requirements: {
          strength: 2,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer who has this perk knows intuitively the best paths to take a vehicle/mount, and can spot trails made by them faster than most</br>
      When making a <em>Tracking</em> check, an adventurer can find a trail that extends for as many miles as the degree of success.`
      },
      {
        level: 3,
        type: 'Exploration',
        name: 'Guide Group',
        AP: 20,
        requirements: {
          strength: 3,
          perception: 2,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer can guide a group on vehicles/mounts well enough to increase the total travel speed of the group.</br>
      When traveling for a long distance, the group shares the same speed as the adventurer regardless of the slowest member.`
      },
      {
        level: 4,
        type: 'Exploration',
        name: 'Double Up',
        AP: 0,
        requirements: {
          strength: 4,
          perception: 3,
          intelligence: 1,
          specialization: true
        },
        details: `An adventurer with this perk can also take another person for a ride on their mount/vehicle, regardless if it supports another person or not.</br>
      This may include slinging an orc over your shoulder on a jet ski, or any other creative way to get another creature onboard.</br>
      Regardless on how it's achieved, it will not slow down the adventurer.`
      },
      {
        level: 5,
        type: 'Exploration',
        name: 'Ride Silently',
        AP: 0,
        requirements: {
          strength: 5,
          perception: 3,
          intelligence: 1,
          specialization: true
        },
        details: `An adventurer can attempt to make a <em>Sneak</em> check while on a mount/vehicle at a -2/-4/-6 to the goal roll.</br>
      The penalty must be decided by the GM depending on mount (a motorcycle is much louder than a horse).`
      },
      {
        level: 1,
        type: 'Interaction',
        name: 'Fellow Enthusiast',
        AP: 0,
        requirements: {
          strength: 1,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `When an adventurer sees another being with a similar mount/vehicle as their own, they can have a bond with that being based on it.</br>
      When making a <em>persuasion</em> check with another person with this condition, the adventurer gets a +2 to the goal roll.`
      },
      {
        level: 2,
        type: 'Interaction',
        name: 'Cheaper Rentals',
        AP: 0,
        requirements: {
          strength: 2,
          perception: 1,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer can apply their knowledge of mounts/vehicles in order to get a discount on renting one.</br>
      When making a successful <em>persuasion</em> check to rent a vehicle, the adventurer can get a discount based on the outcome table.`,
        table: [
          {
            Score: 1,
            Result: '10% Discount'
          },
          {
            Score: 2,
            Result: '20% Discount'
          },
          {
            Score: 3,
            Result: '30% Discount'
          },
          {
            Score: 4,
            Result: '40% Discount'
          },
          {
            Score: 5,
            Result: '50% Discount'
          },
          {
            Score: 6,
            Result: '60% Discount'
          },
          {
            Score: 7,
            Result: '70% Discount'
          },
          {
            Score: 8,
            Result: '80% Discount'
          },
          {
            Score: 9,
            Result: '90% Discount'
          },
          {
            Score: 10,
            Result: '100% Discount'
          }
        ]
      },
      {
        level: 3,
        type: 'Interaction',
        name: 'Deceive Rider',
        AP: 20,
        requirements: {
          strength: 3,
          perception: 2,
          intelligence: 1,
          specialization: false
        },
        details: `An adventurer can use riding itself as "body language", and deceive a rider that s/he sees.</br>
      When making a successful <em>Deceive</em> check against another rider, they receive a penalty to their next <em>ride</em> check equal to the degree of success.`
      },
      {
        level: 4,
        type: 'Interaction',
        name: 'Inspire Riding',
        AP: 20,
        requirements: {
          strength: 4,
          perception: 3,
          intelligence: 1,
          specialization: true
        },
        details: `An adventurer can use riding itself as "body language", and inspire ally riders around him/her.</br>
      When making a successful <em>Deceive</em> check all allies gain a bonus to their next <em>ride</em> check equal to the degree of success.`
      },
      {
        level: 5,
        type: 'Interaction',
        name: 'Presence of a Legendary Rider',
        AP: 0,
        requirements: {
          strength: 5,
          perception: 3,
          intelligence: 1,
          specialization: true
        },
        details: `An adventure with this perk is so good at riding they can give off an aura while showing off.</br>
      When making a successful <em>Ride/Pilot</em> check, they can take a -4 penalty to influence the riding abilities of those around them.</br>
      The degree of success remaining after the penalty can be applied to either boost allies or penalize enemies, or both at the same time.`
      }
    ]
  },
  {
    name: 'Command',
    description: `The study of Command is all about getting others to do what you want, and improving their abilities through words.</br>
    Adventurers who study the ways of command are able to aid others in combat strategy, walk them through skills, and train people to perform tasks.`,
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
