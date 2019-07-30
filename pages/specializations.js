import * as data from '../data/specializations.js';

function selectSpecialization(e) {
  const dummyData = data.specializationData[0];
  console.log(`Target is type ${e.target.type}`);

  return renderHTML(dummyData);
  // activatedSpecialization = e.target.innerHTML;
  // usingSpecialization = data.specializationData.find(o => o.name == activatedSpecialization);
}

// prettier-ignore
function renderHTML(specialization) {
  console.log(`Inside render, this is the object passed ${specialization.name}`)
  
  return  `
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

</div>`;
}

export { renderHTML, selectSpecialization };
