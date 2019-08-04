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

<h3>1.4 - Roll Modifiers</h3>
<p>Modifiers are used in situations where the task at hand is either easier or harder to perform due to specific circumstances.</p>
<p>Making an attack against a restrained enemy, attempting to sneak past a guard while wearing bells, and balancing on a tightrope with heavy winds are all examples of circumstances that change the difficulty of the task.</p>
<p>The GM can decide to add or subtract to the skill check goal depending on the situation.  These modifiers can be +/- 2, 4, 6, 8, or 10.  Modifiers can also stack.</p>
<p>Example: A player decides to shoot an arrow at a bear who is unaware of her presence (+4 modifier), but during a light rainstorm (-2 modifier).</p>
<p>The GM would inform the player that she only receives a +2 bonus after adding all modifiers.</p>
<p>Modifiers can also be permanently added through perks (such as the Archery Specialization), and are usually recoded next to the skill on the character sheet.</p>


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
  <p>There are 19 races in total</p>

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

  <h2>3 - Turns, using AP, and general combat</h2>

</div>
`;

export { pageHTML };
