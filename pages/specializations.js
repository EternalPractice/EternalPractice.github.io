import * as data from "../data/specializations.js";

function selectSpecialization(e) {
  activatedSpecialization = e.target.innerHTML;
  console.log(activatedSpecialization);
}

let activatedSpecialization = "Alchemy";

// prettier-ignore
let pageHTML = `
<div class="twoColumnPage">
  <div class="col-1">
  <ul id="SpecializationList">
      ${data.specializationData.map(specialization => `
      <li>${specialization.name}</li>
      `.trim()).sort().join('')
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

export { pageHTML, selectSpecialization };
