import * as data from '../data/specializations.js';

let usingSpecialization = data.specializationData[0];

function selectSpecialization(e) {
  if (e.target.className === 'specialization') {
    usingSpecialization = data.specializationData.find(o => o.name == e.target.innerHTML);
    return renderHTML(usingSpecialization);
  } else {
    console.log('Selected link');
    return renderHTML(usingSpecialization);
  }
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

export { selectSpecialization };
