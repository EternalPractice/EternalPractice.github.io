import * as home from '../pages/home.js';
import * as attribute from '../pages/attributes.js';
import * as race from '../pages/races.js';
import * as rule from '../pages/rules.js';
import * as specialization from '../pages/specializations.js';
import * as item from '../pages/items.js';
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
  document.getElementById('Main').addEventListener('click', setMainArticle);

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

  function setCurrentSection(e) {
    pageObject.currentSection = e.target.id;

    // TODO = Break this switch statement into a function setMainArticle()
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
      case 'Rules':
        document.getElementById('MainContent').innerHTML = rule.pageHTML;
        break;
      case 'Specializations':
        document.getElementById('MainContent').innerHTML = specialization.selectSpecialization(e);
        break;
      case 'Weapons-items':
        document.getElementById('MainContent').innerHTML = item.pageHTML;
        break;
    }
    highlightActivePage(pageObject.currentSection);
  }
});
