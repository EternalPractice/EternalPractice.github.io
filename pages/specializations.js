let specializationData = [
  {
    name: 'Alchemy'
  },
  {
    name: 'Arcane'
  },
  {
    name: 'Archery'
  },
  {
    name: 'Artifice'
  },
  {
    name: 'Bardic Lore'
  },
  {
    name: 'Beast Master'
  },
  {
    name: 'Brute Force'
  },
  {
    name: 'Cavalier'
  },
  {
    name: 'Commander'
  },
  {
    name: 'Dual Wielder'
  },
  {
    name: 'Elements'
  },
  {
    name: 'Faith'
  },
  {
    name: 'Flail Master'
  },
  {
    name: 'Martial Arts'
  },
  {
    name: 'Nature'
  },
  {
    name: 'Occultism'
  },
  {
    name: 'Psionics'
  },
  {
    name: 'Raptor fighting'
  },
  {
    name: 'Savagery / Tavern Brawler'
  },
  {
    name: 'Thievery'
  },
  {
    name: 'Tracking'
  },
  {
    name: 'Shapeshifting'
  },
  {
    name: 'Skulker'
  },
  {
    name: 'Undeath'
  }
];

// prettier-ignore
let pageHTML = `
<div class="twoColumnPage">
  <div class="col-1">
    <ul>
      ${specializationData.map(specialzation => `
      <li>${specialzation.name}</li>
      `.trim()).join('')
      }
    </ul>
  </div>
  
  <div class="col-2">
    <h1 class="center">Specializations</h1>
    <h2 class="center">Archery</h2>

    <p>Archery involves using a bow</p>

    <table>
      <tr>
        <th></th>
        <th>Combat</th>
        <th>Exploration</th>
        <th>Interaction</th>
      </tr>

      <tr>
        <td>1</td>
        <td>example</td>
        <td>example</td>
        <td>example</td>
      </tr>
      
      <tr>
        <td>2</td>
        <td>example</td>
        <td>example</td>
        <td>example</td>
      </tr>
      
      <tr>
        <td>3</td>
        <td>example</td>
        <td>example</td>
        <td>example</td>
      </tr>
      
      <tr>
        <td>4</td>
        <td>example</td>
        <td>example</td>
        <td>example</td>
      </tr>

      <tr>
        <td>5</td>
        <td>example</td>
        <td>example</td>
        <td>example</td>
      </tr>
    </table>

  </div>

</div>
`;

export { pageHTML };
