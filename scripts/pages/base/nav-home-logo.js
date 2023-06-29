// CONTRUCTION DE L'ENTÊTE DE LA PAGE D'ACCUEIL.
// 1) Créer les éléments du DOM.
const sectionHeaderHomePage_Class = document.querySelector(
  '.section-header-home-page'
);
sectionHeaderHomePage_Class.classList.add('container-03');

const a_Link_element = document.createElement('a');
a_Link_element.setAttribute('href', '/index.html');

const h1_Element = document.querySelector('h1');
h1_Element.classList.add('h1');

const imgLogo = document.createElement('img');
imgLogo.setAttribute('src', 'assets/images/logo.png');
imgLogo.classList.add('logo');

// 2) Lier les éléments du DOM entre eux.
sectionHeaderHomePage_Class.appendChild(a_Link_element);
sectionHeaderHomePage_Class.appendChild(h1_Element);
a_Link_element.appendChild(imgLogo);
