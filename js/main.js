// @ts-check

document.addEventListener('DOMContentLoaded', function() {
  // Place header links in array, assign click even listeners
  const links = Array.from(document.querySelectorAll('header a'));
  links.forEach(link => link.addEventListener('click', makeActivePage));

  const articles = Array.from(document.querySelectorAll('article'));

  //
  function makeActivePage(e) {
    const activePage = e.target.id;

    switch (activePage) {
      case 'HomeLink':
        links[0].classList.add('activePage');
        links[1].classList.remove('activePage');
        links[2].classList.remove('activePage');

        articles[0].classList.remove('hiddenPage');
        articles[1].classList.add('hiddenPage');
        articles[2].classList.add('hiddenPage');
        break;
      case 'ProjectLink':
        links[0].classList.remove('activePage');
        links[1].classList.add('activePage');
        links[2].classList.remove('activePage');

        articles[0].classList.add('hiddenPage');
        articles[1].classList.remove('hiddenPage');
        articles[2].classList.add('hiddenPage');
        break;
      case 'ContactLink':
        links[0].classList.remove('activePage');
        links[1].classList.remove('activePage');
        links[2].classList.add('activePage');

        articles[0].classList.add('hiddenPage');
        articles[1].classList.add('hiddenPage');
        articles[2].classList.remove('hiddenPage');
        break;
    }
  }
});
