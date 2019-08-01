import * as data from '../data/specializations.js';

let chosenSpecialization = data.specializationData[0];

function selectSpecialization(e) {
  if (e.target.className === 'specialization') {
    chosenSpecialization = data.specializationData.find(o => o.name == e.target.innerHTML);
    return renderHTML(chosenSpecialization);
  } else if (e.target.className === 'perk') {
    let chosenPerk = chosenSpecialization.perks.find(p => p.name == e.target.innerHTML);

    return `
    ${renderHTML(chosenSpecialization)}
    ${displayPerk(chosenPerk)}
    `;
  } else {
    return renderHTML(chosenSpecialization);
  }
}

function selectPerks(data, tier, type) {
  return data
    .filter(function(perk) {
      if (perk.level === tier && perk.type === type) {
        return perk;
      }
    })
    .sort();
}

function printPerksToTable(perkArray) {
  if (perkArray === undefined || perkArray.length == 0) {
    return `NO PERK YET`;
  } else if (perkArray.length === 1) {
    return `<div class="perk">${perkArray[0].name}</div>`;
  } else {
    let returnPerks = '';
    for (var i = 0; i < perkArray.length; i++) {
      returnPerks += `<div class="perk">${perkArray[i].name}</div>`;
    }
    return returnPerks;
  }
}

function displayPerk(perk) {
  let returnString = `<div class="perk-info">`;

  for (const prop in perk) {
    if (typeof perk[prop] === 'object') {
      returnString += `<div class="perk-${prop}">`;
      for (const innerProp in perk[prop]) {
        returnString += `<div class="perk-requirement-${innerProp}">${innerProp} = ${
          perk[prop][innerProp]
        }</div>`;
      }
      returnString += `</div>`;
    } else {
      returnString += `<div class="perk-${prop}">${prop} = ${perk[prop]}</div>`;
    }
  }
  returnString += `</div>`;
  return returnString;
}

//prettier-ignore
function renderHTML(specialization) {
  return `
  <div class="twoColumnPage">
    <div class="col-1">
     <ul class="SpecializationList">
      ${data.specializationData.map(specialization => `
      <li class="specialization">${specialization.name}</li>
      `.trim()).sort().join('')
      }
      </ul>
    </div>

<div class="col-2">
  <h1 class="center">Specializations</h1>
  <h2 class="center">${specialization.name}</h2>

  <p>${specialization.description}</p>

  <table>
    <tr>
      <th></th>
      <th>Combat</th>
      <th>Exploration</th>
      <th>Interaction</th>
    </tr>

    <tr>
      <td>1</td>
      <td>${printPerksToTable(selectPerks(chosenSpecialization.perks, 1, 'Combat'))}</td>
      <td>${printPerksToTable(selectPerks(chosenSpecialization.perks, 1, 'Exploration'))}</td>
      <td>${printPerksToTable(selectPerks(chosenSpecialization.perks, 1, 'Interaction'))}</td>
    </tr>

    <tr>
      <td>2</td>
      <td>${printPerksToTable(selectPerks(chosenSpecialization.perks, 2, 'Combat'))}</td>
      <td>${printPerksToTable(selectPerks(chosenSpecialization.perks, 2, 'Exploration'))}</td>
      <td>${printPerksToTable(selectPerks(chosenSpecialization.perks, 2, 'Interaction'))}</td>
    </tr>

    <tr>
      <td>3</td>
      <td>${printPerksToTable(selectPerks(chosenSpecialization.perks, 3, 'Combat'))}</td>
      <td>${printPerksToTable(selectPerks(chosenSpecialization.perks, 3, 'Exploration'))}</td>
      <td>${printPerksToTable(selectPerks(chosenSpecialization.perks, 3, 'Interaction'))}</td>
    </tr>

    <tr>
      <td>4</td>
      <td>${printPerksToTable(selectPerks(chosenSpecialization.perks, 4, 'Combat'))}</td>
      <td>${printPerksToTable(selectPerks(chosenSpecialization.perks, 4, 'Exploration'))}</td>
      <td>${printPerksToTable(selectPerks(chosenSpecialization.perks, 4, 'Interaction'))}</td>
    </tr>

    <tr>
       <td>5</td>
       <td>${printPerksToTable(selectPerks(chosenSpecialization.perks, 5, 'Combat'))}</td>
       <td>${printPerksToTable(selectPerks(chosenSpecialization.perks, 5, 'Exploration'))}</td>
       <td>${printPerksToTable(selectPerks(chosenSpecialization.perks, 5, 'Interaction'))}</td>
     </tr>
  </table>

</div>

</div>`;
}

export { selectSpecialization };
