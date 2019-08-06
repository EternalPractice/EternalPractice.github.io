let pageHTML = `
<h1 class="title-rules">Rules</h1>

<div class="content-rules">

  <h2>1 - Dice Mechanics</h2>
  
  <h3>1.1 - Rolling for Success/Failure</h3>
  <p>This RPG system only uses one die: the d20.  
  <p>For every action that does not have a guaranteed result and known outcome, the GM will have the player roll the d20 to determine it's outcome.</p>
  <p>In order to succeed in the roll, players must roll under their current rating for the appropriate skill after adding any modifiers that may apply.</p>
  <p>For example: if a player wants to attempt to balance on the edge of a building while having plenty of time to do so (thus not applying a modifier), they would roll an <em>Acrobatics check</em>.</br></p>
  <p>If the roll on the die matches or is under their Acrobatics skill level, then they succeed.</p>
  <p>This roll simultaneously determines their degree of success (if applicable).</p>
  
  <h3>1.2 - Degree of Success</h3>
  <p>Often when performing actions, it's not enough to know that it succeeded but instead how successful the action was.</p>
  <p>When you swing a sword, you want to know how much damage it does.  When you treat a wound, how much health is restored?</p>
  <p>In order to find the degree of success, take the result from a successful d20 roll and divide that number by 2 (rounding up).</p>
  <p>Use this degree of success number in the Outcome Table to see the results of an action.</p>

  <h3>1.3 - Outcome Table</h3>
  <p>Outcome tables are found with the perk, weapon/item, or spell you are using.  These tables have rows labeled with numbers 1 - 10, and describe what happens at each degree of success.</p>
  <p>Below is an example of an Outcome Table for a Treat Wounds perk check:</p>
  <table class="outcome-table">
    <tr>
      <th>Degree of Success</th>
      <th>Damage Healed</th>
    </tr>
    <tr>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>2</td>
      <td>2</td>
    </tr>
    <tr>
      <td>3</td>
      <td>5</td>
    </tr>
    <tr>
      <td>4</td>
      <td>8</td>
    </tr>
    <tr>
      <td>5</td>
      <td>13</td>
    </tr>
    <tr>
      <td>6</td>
      <td>18</td>
    </tr>
    <tr>
      <td>7</td>
     <td>25</td>
    </tr>
    <tr>
      <td>8</td>
      <td>32</td>
    </tr>
    <tr>
      <td>9</td>
      <td>42</td>
    </tr>
    <tr>
      <td>10</td>
      <td>50</td>
    </tr>
  </table>
  <p>So if a character was using the Treat Wounds perk, they would roll the appropriate skill (in this case First aid).</p>
  <p>If they succeed with a roll of 10, they would have a degree of success at 5.  Therefor they would heal 13 HP.</p>

  <h3>1.4 - Critical Fail & Success</h3>
  <p>Whenever a 1 or 20 is rolled on die, it is considered a critical fail or success respectively.</p>
  <p>Critical failures result in the skill automatically failing, and additional bad things happening.</p>
  <p>To determine what bad things happen, consult the "critical failure" table in the glossary.</p>
  </br>
  <p>Critical successes always succeed no matter what the goal for the roll was.  Thus a character with no skills has a 5% to succeed at anything.</p>
  <p>Critical successes always have 10 degrees of success.</p>

  <h3>1.5 - Roll Modifiers</h3>
  <p>Modifiers are used in situations where the task at hand is either easier or harder to perform due to specific circumstances.</p>
  <p>Making an attack against a restrained enemy, attempting to sneak past a guard while wearing bells, and balancing on a tightrope with heavy winds are all examples of circumstances that change the difficulty of the task.</p>
  <p>The GM can decide to add or subtract to the skill check goal depending on the situation.  These modifiers can be +/- 2, 4, 6, 8, or 10.  Modifiers can also stack.</p>
  <p>Example: A player decides to shoot an arrow at a bear who is unaware of her presence (+4 modifier), but during a light rainstorm (-2 modifier).</p>
  <p>The GM would inform the player that she only receives a +2 bonus after adding all modifiers.</p>
  <p>Modifiers can also be permanently added through perks (such as the Archery Specialization), and are usually recoded next to the skill on the character sheet.</p>

  <h3>1.6 - Positive vs Negative Modifiers</h3>
  <p>Positive modifiers not only affect the target goal for a skill, but also the outcome.</p>
  <p>If a player with 10 acrobatics skill rolls an 8, they would pass (rolled 10 or under) with 4 degrees of success.</p>
  <p>If that same player had a +2 modifier, they would pass with 5 degrees of success, since the modifier is included in the roll calculation.</p>
  </br>
  <p>Negative modifiers are not considered when calculating degrees of success.</p>
  <p>If the same player with 10 acrobatics skill has a -2 modifier, they would have to roll an 8 or under (as opposed to the normal 10 or under)</p>
  <p>If they roll an 8, they still get 4 degrees of success.</p>



  <h2>2 - Character Creation</h2>

  <h3>2.1 - Step Order</h3>
  <p>In order to create a character, follow these steps:</p>
  <ol>
    <li>Select Race</li>
    <li>Set Attributes</li>
    <li>Select 3 skills to tag</li>
    <li>Spend starting XP</li>
    <li>Spend starting GP</li>
  </ol>

  <h3>2.2 - Select Race</h3>
  <p>Your race will determine your size and give you perks only found to that race.</p>
  <p>There are 19 races in total.</p>
  </br>
  <p>Robots/Constructs are the exception to character building, as they do not calculate attributes normally.</p>
  <p>They instead have their attributes built into their body parts that are purchased.  To them heros are made, not born.</p>

  <h3>2.3 - Set Attributes</h3>
  <p>Attributes are what determines your AP, MP, HP, and what perks/items/spells you can use.</p>
  <p>All attributes start out at 3 out of 5.  You can lower a attributes to raise another.</p>
  <p>See the attribute section on this site for further details.</p>

  <h3>2.4 - Select 3 skills to tag</h3>
  <p>Choose 3 skills, those skills will start at a 10 out of 20.</p>

  <h3>2.5 - Spend starting XP</h3>
  <p>Each player starts out with 30 XP to be spent on more skills, perks, spells, or added to the total starting gold.</p>
  <p>Humans are the exception to this rule, and get 35 XP starting out.</p>
  <p>Each point of XP spent on increasing your starting gold is converted into 100 GP.  This conversion can only be done at character creation.</p>

  <h3>2.6 - Spend starting GP</h3>
  <p>Each player starts out with 500 GP</p>



  <h2>3 - Turns & using AP</h2>

  <h3>3.1 - Initiative</h3>
  <p>Initiative in this system is taken at the beginning of each session.  To get your initiative, roll the d20 and have the GM record the score.  Players with higher initiative go first.</p>
  <p>The first reason to only take initiative at the beginning of the session is to avoid giving away surprising moments.  Nothing puts a player on guard like the GM saying "roll initiative".</p>
  <p>The second reason is to keep things streamlined and sped up.</p>
  </br>
  <p>During sections that don't require AP (or roleplaying sections), initiative is still used.  Players who rolled the highest initiative will be able to act first in each session.</p>

  <h3>3.2 - AP & Turns</h3>
  <p>AP (action points) determine how much a character can do in each turn.  Each action costs an amount of AP, and turns end when the player has used all of their AP.</p>
  <p>AP refreshes with each turn.</p>
  <p>Some actions might require more AP than a player has left in that turn.  In these situations the action will take place over multiple turns.</p>
  </br>
  <p>Example: Say a player with 12 AP wants to run over to a player 4 squares away (4 AP) and perform a Treat Wounds skill (10 AP).   Since the player only has 8 AP after moving, she will spend 8 this turn and 2 from her next turn to complete the action.</p>
  <p>The action will end on the players next turn (when she spends all the AP required), and she can be interrupted before the action ends.  See the Combat section for more details on skill interruption.</p>



  <h2>4 - Health, damage, conditions, and death</h2>

  <h3>4.1 - Health and Damage</h3>
  <p>Health (or HP) is determined from the players endurance score, and each body section has an individual health score.</p>
  <p>There are 4 body sections for each character: Head, Torso, Arms, Legs.</p>
  <p>The body has HP equal to 50 time the character's endurance score.  Arms have 20 times the characters endurance, and legs have 20 times the characters endurance</p>
  <p>Head is a special case and shares the torso's HP pool.  Damage to the head is considered 2x damage.</p>

  <h3>4.2 - Damage</h3>
  <p>Damage is dealt to each section and is kept track of separately.</p>
  <p>When a player has 0 HP in their legs, they are considered crippled.  Crippled legs make movement cost 3 AP instead of 1 AP.</p>
  <p>When a player has 0 HP in their arms, they are considered crippled.  Crippled arms make every skill using arms cost 2 more AP.</p>
  <p>When a player has 0 HP in their torso, they are considered dying.  See the "Death & Dying" section for more details.</p>
  <p>Damage done to either the arms or legs after they reach 0 HP is transferred to the torso.  So if a player has crippled legs and takes 5 damage to their leg, they instead take 5 damage to the torso.</p>

  <h3>4.3 - Conditions</h3>
  <p>Conditions are long lasting effects that either boost or hinder the player.  Conditions can include being poisoned, exhausted, blessed, hasted, and many more.</p>
  <p>Conditions last for either a set amount of time, or until they are "cured".</p>
  <p>For a complete list of conditions and their effects, see the Glossary page.</p>

  <h3>4.4 - Death & Dying</h3>
  <p>When a player reaches 0 hit points or below, they are considered dying.  Dying characters fall prone, have an AP pool of 0, and 20 HP.</p>
  <p>Any healing performed on a dying character will spare them from death.  A player's first turn after being spared, they will only have half AP.</p>
  <p>If a player is not healed within 5 turns while dying, or if they lose another 20 HP, they are considered dead.</p>
  <p>Dead characters can be brought back to life with a resurrection spell, but only if their head is still attached to their body.</p>



  <h2>5 - Equipment, Weapons, & Armor</h2>
  
  <h3>5.1 - Equipment Location & Storage</h3>
  <p>Where equipment is stored on a character matters for both social interactions & combat.</p>
  <p>If a character walks into a shop with rifle in hand, they will be treated with caution.</p>
  <p>If a player walks into a secure site with a pistol at their side, they might be tackled and stripped of their weapon.</p>
  <p>Likewise, a player with a hidden pistol strapped to their leg will need to take longer in retrieving it than the person with a pistol in a holster.</p>
  </br>
  <p>Each location on the body (waist, back, legs, arms, backpack, etc.,) has available slots to store equipment.  Each pice of equipment will take up space (or slots).</p>
  <p>To retrieve items from the waste or arms will cost 1 AP, while legs is 2 AP, back costs 3 AP, and every else costs 5 AP.</p>
  <p>Individual clothing/armor pieces may affect this.  See armor descriptions for more details.</p>
  </br>
  <p>A character can store as much on them as they have slots available.</p>

  <h3>5.2 - Weapon Requirements</h3>
  <p>Weapons, like perks, have requirements in order to use them.  For the majority of the weapons, strength is the only requirement.  Some weapons might require specialization in a skill.</p>
  <p>Each weapon has a size, which matches the size of the creature it was intended for.</p>
  <p>If a character tries to wield a weapon that is designed for a larger (or smaller) creature, the strength requirement is increased (or decreased) by 1 for each size difference.</p>
  </br>
  <p>Example: If a halfling (size small) wants to wield a medium sized longsword (strength requirement 3), they would need a 4 strength to effectively use it.</p>

  <h3>5.3 - Weapon Actions & Damage</h3>
  <p>Each weapon will have an outcome table, which may have multiple columns for multiple actions.</p>
  <p>Melee weapons for example normally have attack, block, and parry options available to them.</p>
  <p>Each action may have a modifier assigned to them, indicating how easy/hard it is to use that action.</p>
  <p>A shield for example may have a positive modifier to block but a negative modifier to attack, while the opposite may be true for a sword.</p>
  <p>Regardless of the action chosen, the AP cost of using the weapon will be the same and listed in the description of the weapon (above the outcome table)</p>

  <h3>5.4 - Armor Requirements</h3>
  <p>Each piece of armor will have a encumbrance score, which will mean how much strength is required to wear it.</p>
  <p>The total encumbrance score cannot be higher than the character's total strength.</p>
  <p>For equipping the torso, the encumbrance score is doubled.</p>
  <p>This means if the player wants to wear full plate armor (1 encumbrance score/piece) for the head, legs, arms, and torso, they would need a total strength of 5.</p>

  <h3>5.5 - Armor Traits</h3>
  <p>Each piece of armor will have the following traits: Damage Reduction, Armor Score, Available Slots, Condition Reduction, & Special Traits.</p>
  </br>
  <p><strong>Damage reduction</strong> will reduce the total amount of damage taken per hit.</p>
  <p>Example: if a piece of armor has damage reduction 2, and you take 5 damage, it would be reduced to only 3 damage.</p>
  </br>
  <p><strong>Armor Score</strong> dictates how hard it is to hit you while wearing armor.  The armor score is used when calculating modifiers to the attacker's roll.</p>
  <p>Example: If you are wearing a piece of armor with an armor score of 2, then the attacker would apply -2 to their roll when attempting to attack you.</p>
  </br>
  <p><strong>Available slots</strong> determine how much a character can store on that section.</p>  
  <p>See "5.1 - Equipment Location & Storage" for more detail.</p>
  </br>
  <p>Some pieces of armor have <strong>Condition Reduction</strong> which acts as damage reduction for a certain negative condition.</p>
  <p>A robe might have fire resistance 5, which would reduce the fire damage taken by 5.</p>
  </br>
  <p><strong>Special Traits</strong> are unique qualities added to the piece of armor.  They can be added through crafting (such as adding more slots through pockets), or unique to that type of armor.</p>
  <p>See the glossary for more details on armor special traits.</p>



  <h2>6 - Magic & MP</h2>

  <h3>6.1 - Magic Casting</h3>
  <p>Magic is available to every character that meet the requirements, and is earned the same way perks are earned (though spending XP).</p>
  <p>A character must have at least one free hand available in order to cast magic, unless otherwise stated in the spell description/through a perk.</p>
  <p>Armor (unless specially stated) does not affect spell casting as it does in other table top systems.</p>

  <h3>6.2 - Casting Costs</h3>
  <p>Each spell will have varies casting costs associated with them through the forms of AP, MP, and other possible costs (such as HP in blood magic).</p>
  <p>Each spells base cost will be in the spell description, and can be modified through spending MP (see next section).</p>

  <h3>6.3 - Modifying Magic with MP</h3>
  <p>Each spell can be modified by spending additional MP while casting it, changing it's affects in a variety of ways.</p>
  <p>Spells can be made to affect more than one target, be made to last longer, cast at a further duration, etc.,</p>
  <p>When casting a spell, the player can inform the GM that they are modifying the spell.  MP is spent whether the spell succeeds or fails.</p>
  <p>MP cost will be listed with the spell modifications, the details found in the glossary.</p>

  <h3>6.4 - Spell Duration</h3>
  <p>Some spells have a longer duration than instantaneous.  If a spell has a longer duration, it will be listed in the description.</p>
  <p>Some other spells (like buffing magic) can also be extended throughout multiple turns through concentrating on them.</p>
  <p>If a player decides to extend the duration of a spell, and it is extendable, they will spend the AP cost each turn to maintain concentration.</p>
  <p>Concentration can be interrupted (see detailed combat section below for more detail).</p>
  <p>Additional costs (such as MP) do not have to be paid each round, only AP.</p>
  <p>A player must have enough AP for the round to concentrate on it.</p>
  <p>There is no limit (besides AP) to how many spells a player can concentrate on per round.  If one spell is interrupted, all spells are interrupted.</p>

  <h3>6.5 - MP Refresh Rate</h3>
  <p>Half a player's total MP will refresh at the end of an encounter.</p>
  <p>Encounters are defined as either a fight (so when the last enemy is slain), exploration (so when the destination is arrived to), or interaction (when the player stops talking to the NPC).</p>
  <p>After sleeping, all MP is restored.</p>



  <h2>7 - Earning & Spending XP</h2>

  <h3>7.1 - Earning XP</h3>
  <p>XP is earned through a game session for participating in successful encounter.</p>
  <p>XP is handed out through GM discretion, and can be modified for the type of game they are running.</p>
  <p>XP should be handed out for every successful encounter, whether through combat, exploration or interaction.</p>
  <p>When a player earns XP, they should feel that they have been rewarded for pushing the story further.</p>
  <p>Unlike video games, players should not be encouraged to "XP farm" by creating and grinding through encounters for encounters sake.</p>
  <p>Each group should come to an understanding before the game is run in how XP should be handed out.</p>

  <h3>7.2 - Spending XP</h3>
  <p>XP should be spent during a night's rest (sleep), or between game sessions.</p>
  <p>As much or as little XP can be spent during this time.  XP can be saved for another time.</p>


  
  <h2>8 - Combat Details</h2>

  <h3>8.1 - </h3>

</div>
`;

export { pageHTML };
