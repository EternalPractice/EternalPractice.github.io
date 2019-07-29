import * as home from '../pages/home.js';
import * as attribute from '../pages/attributes.js';
import * as race from '../pages/races.js';
import * as rule from '../pages/rules.js';
import * as specialization from '../pages/specializations.js';
import * as item from '../pages/items.js';
import * as footer from '../pages/footer.js';

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('MainContent').innerHTML = home.pageHTML;
  document.getElementById('Footer').innerHTML = footer.pageHTML;

  // Place header links in array, assign click event listeners
  const links = Array.from(document.querySelectorAll('header a'));
  links.forEach(link => link.addEventListener('click', highlightActivePage));
  links.forEach(link => link.addEventListener('click', setMainArticle));

  function highlightActivePage(e) {
    const activePage = e.target.id;

    for (let i = 0; i < links.length; i++) {
      if (activePage === links[i].id) {
        links[i].classList.add('activePage');
      } else {
        links[i].classList.remove('activePage');
      }
    }
  }

  function setMainArticle(e) {
    const activePage = e.target.id;

    switch (activePage) {
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
        document.getElementById('MainContent').innerHTML = specialization.pageHTML;
        break;
      case 'Weapons-items':
        document.getElementById('MainContent').innerHTML = item.pageHTML;
        break;
    }
  }
});
