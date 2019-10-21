import * as schools from '../data/schoolsOfMagic.js';
import * as types from '../data/typesOfMagic.js';

function renderHTML() {
  let returnHTML = `
  <div class = "list-of-magic-schools">
    <h3>Schools of Magic</h3>
    <ul class = "SchoolsOfMagic">
      ${schools.schoolsData
        .map(school =>
          `
          <li class = "magicSchool updatable">${school.name}</li>`.trim()
        )
        .sort()
        .join('')}
    </ul>
  </div>

  <div class = "list-of-magic-types">
    <h3>Types of Magic</h3>
    <ul class = "typesOfMagic">
      ${types.typesData
        .map(types =>
          `
          <li class = "magicType updatable">${types.name}</li>`.trim()
        )
        .sort()
        .join('')}
    </ul>
  </div>
  `;

  return returnHTML;
}

export { renderHTML };
