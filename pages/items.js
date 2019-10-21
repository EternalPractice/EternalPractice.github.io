import * as weapons from '../data/weapons.js';

let chosenWeaponType = weapons.weapons[0];

function selectWeaponType(e) {
  if (e.target.classList.contains('weaponType')) {
    chosenWeaponType = weapons.weapons.find(o => o.name == e.target.innerHTML);
    return renderHTML(chosenWeaponType);
  } else if (e.target.classList.contains('specificWeapon')) {
    let chosenSpecificWeapon = chosenWeaponType.specificWeapon.find(w => w.name == e.target.innerHTML);

    return `
    ${renderHTML(chosenWeaponType)}
    ${displayPerkDetails(chosenSpecificWeapon)}
    `;
  } else {
    return renderHTML(chosenWeaponType);
  }
}

//-----------------------
// Modify below this line
//-----------------------

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
    return `<div class="perk updatable">${perkArray[0].name}</div>`;
  } else {
    let returnPerks = '';
    for (var i = 0; i < perkArray.length; i++) {
      returnPerks += `<div class="perk updatable">${perkArray[i].name}</div>`;
    }
    return returnPerks;
  }
}

function displayPerkDetails(perk) {
  let returnString = `
    <div class="perk-info">
      <div class="updatable close-btn">CLICK TO CLOSE</div>
      <div class="perk-name">${perk.name}</div>
      <div class="perk-AP">AP Cost = ${perk.AP}</div>
      <div class="perk-details">${perk.details}</div>
    `;

  for (const prop in perk) {
    if (Array.isArray(perk[prop])) {
      returnString += displayPerkTable(perk[prop]);
    } else if (typeof perk[prop] === 'object') {
      returnString += `<div class="perk-${prop}">`;
      for (const innerProp in perk[prop]) {
        returnString += `<div class="perk-requirement-${innerProp}">${innerProp} = ${perk[prop][innerProp]}</div>`;
      }
      returnString += `</div>`;
    }
  }
  returnString += `</div>`;
  return returnString;
}

function displayPerkTable(tableArray) {
  let returnString = `
    <table class='outcome-table'>
      <tr>
        <th>Score</th>
        <th>Result</th>
      </tr>`;

  for (let i = 0; i < tableArray.length; i++) {
    returnString += `
    <tr>
      <td>${tableArray[i].Score}</td>
      <td>${tableArray[i].Result}</td>
    </tr>
    `;
  }

  returnString += `</table>`;
  return returnString;
}

function renderHTML(specialization) {
  let returnHTML = `

    <div class="list-of-specializations">
      <ul class="SpecializationList">
      ${data.specializationData
        .map(specialization =>
          `
      <li class="specialization updatable">${specialization.name}</li>`.trim()
        )
        .sort()
        .join('')}
      </ul>
    </div>

<div class="list-of-perks">
  <h2 class="center">${specialization.name}</h2>

  <p>${specialization.description}</p>

  <table class="perk-table">
    <tr>
      <th></th>
      <th>Combat</th>
      <th>Exploration</th>
      <th>Interaction</th>
    </tr>
`;

  for (let i = 1; i < 6; i++) {
    returnHTML += `
    <tr>
      <td>${i}</td>
      <td>${printPerksToTable(selectPerks(chosenSpecialization.perks, i, 'Combat'))}</td>
      <td>${printPerksToTable(selectPerks(chosenSpecialization.perks, i, 'Exploration'))}</td>
      <td>${printPerksToTable(selectPerks(chosenSpecialization.perks, i, 'Interaction'))}</td>
    </tr>`;
  }
  returnHTML += `
   </table>
  </div>`;

  return returnHTML;
}

export { selectSpecialization };
