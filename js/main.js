import * as home from '../pages/home.js';
import * as rule from '../pages/rules.js';
import * as attribute from '../pages/attributes.js';
import * as race from '../pages/races.js';
import * as skill from '../pages/skills.js';
import * as specialization from '../pages/specializations.js';
// import * as item from '../pages/items.js';
import * as magic from '../pages/magic.js';
import * as glossary from '../pages/glossary.js';
import * as footer from '../pages/footer.js';

// Runs everything once document is ready
document.addEventListener('DOMContentLoaded', function() {
  // Creates page object that is referenced.
  const pageObject = {
    currentSection: 'Home'
  };

  // Loads initial home page & footer
  document.getElementById('MainContent').innerHTML = home.pageHTML;
  document.getElementById('Footer').innerHTML = footer.pageHTML;

  // Adds event listeners to page, attaching logic and HTML
  document.getElementById('Header').addEventListener('click', setCurrentSection);
  document.getElementById('Main').addEventListener('click', updatePage);

  function setCurrentSection(e) {
    pageObject.currentSection = e.target.id;

    highlightActivePage(pageObject.currentSection);
  }

  function highlightActivePage(currentSection) {
    const links = Array.from(document.querySelectorAll('header a'));

    for (let i = 0; i < links.length; i++) {
      if (currentSection === links[i].id) {
        links[i].classList.add('activePage');
      } else {
        links[i].classList.remove('activePage');
      }
    }
  }

  function updatePage(e) {
    console.log(`updatePage target = ${e.target.classList}`);

    if (e.target.classList.contains('updatable')) {
      console.log(
        `It's updatable!  Running update on ${e.target.innerHTML} & current selection is ${pageObject.currentSection}`
      );

      switch (pageObject.currentSection) {
        case 'Home':
          document.getElementById('MainContent').innerHTML = home.pageHTML;
          break;
        case 'Attributes':
          document.getElementById('MainContent').innerHTML = attribute.pageHTML;
          break;
        case 'Races':
          document.getElementById('MainContent').innerHTML = race.pageHTML;
          break;
        case 'Skills':
          document.getElementById('MainContent').innerHTML = skill.pageHTML;
          break;
        case 'Rules':
          document.getElementById('MainContent').innerHTML = rule.pageHTML;
          break;
        case 'Specializations':
          console.log(`updating specializations`);
          document.getElementById('MainContent').innerHTML = specialization.selectSpecialization(e);
          break;
        // case 'Weapons-items':
        //   document.getElementById('MainContent').innerHTML = item.pageHTML;
        //   break;
        case 'Magic':
          document.getElementById('MainContent').innerHTML = magic.renderHTML();
          break;
        case 'Glossary':
          document.getElementById('MainContent').innerHTML = glossary.pageHTML;
          break;
      }
    }
  }
});
