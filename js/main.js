// @ts-check
import * as basic from "../pages/home.js";

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("MainContent").innerHTML = basic.basicHTML;

  // Place header links in array, assign click even listeners
  const links = Array.from(document.querySelectorAll("header a"));
  links.forEach(link => link.addEventListener("click", makeActivePage));
  const articles = Array.from(document.querySelectorAll("article"));

  function makeActivePage(e) {
    const activePage = e.target.id;

    for (let i = 0; i < links.length; i++) {
      if (activePage === links[i].id) {
        links[i].classList.add("activePage");
      } else {
        links[i].classList.remove("activePage");
      }
    }
  }
});
