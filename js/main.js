// @ts-check

// TODO: Add template strings to Specialization page.
// TODO: Export data into JSON file for Specialization page.
// TODO:

const homeHTML = `
<h1 class="center">Hello World!</h1>
<p>This is a work in progress for my upcoming RPG system.</p>

<p>Currently, I'm in the process of getting this site functional before I add content.</p>
<p>Please check back once content is loaded</p>
`;

const attributeHTML = `
<h1 class="center">Attributes</h1>
`;

const racesHTML = `
<h1 class="center">Races</h1>
`;

const rulesHTML = `
<h1 class="center">Rules</h1>
`;

const specializationsHTML = `

<div class="twoColumnPage">
  <div class="col-1">
    <ul>
      <li>Archery</li>
      <li>Blood Magic</li>
      <li>Other Example 1</li>
      <li>Other Example 2</li>
      <li>Other Example 3</li>
      <li>Other Example 4</li>
      <li>Other Example 5</li>
      <li>Other Example 6</li>
      <li>Other Example 7</li>
      <li>Other Example 8</li>
      <li>Other Example 9</li>
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

const itemsHTML = `
<h1 class="center">Weapons & Items</h1>
`;

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("MainContent").innerHTML = homeHTML;

  // Place header links in array, assign click even listeners
  const links = Array.from(document.querySelectorAll("header a"));
  links.forEach(link => link.addEventListener("click", highlightActivePage));
  links.forEach(link => link.addEventListener("click", setMainArticle));
  const articles = Array.from(document.querySelectorAll("article"));

  function highlightActivePage(e) {
    const activePage = e.target.id;

    for (let i = 0; i < links.length; i++) {
      if (activePage === links[i].id) {
        links[i].classList.add("activePage");
      } else {
        links[i].classList.remove("activePage");
      }
    }
  }

  function setMainArticle(e) {
    const activePage = e.target.id;

    switch (activePage) {
      case "Home":
        document.getElementById("MainContent").innerHTML = homeHTML;
        break;
      case "Attributes":
        document.getElementById("MainContent").innerHTML = attributeHTML;
        break;
      case "Races":
        document.getElementById("MainContent").innerHTML = racesHTML;
        break;
      case "Rules":
        document.getElementById("MainContent").innerHTML = rulesHTML;
        break;
      case "Specializations":
        document.getElementById("MainContent").innerHTML = specializationsHTML;
        break;
      case "Weapons-items":
        document.getElementById("MainContent").innerHTML = itemsHTML;
        break;
    }
  }
});
