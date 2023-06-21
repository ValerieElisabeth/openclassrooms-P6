// CONTRUCTION DE L'ENTÊTE DE LA PAGE D'ACCUEIL.
// 1) Créer les éléments du DOM.
const sectionHeaderHomePage_Class = document.querySelector(
  '.section-header-photographer-page'
);
sectionHeaderHomePage_Class.classList.add('container-02');

const a_Link_element = document.createElement('a');
a_Link_element.setAttribute('href', '/index.html');


const imgLogo = document.createElement('img');
imgLogo.setAttribute('src', 'assets/images/logo.png');
imgLogo.classList.add('logo');

// 2) Lier les éléments du DOM entre eux.
sectionHeaderHomePage_Class.appendChild(a_Link_element);
a_Link_element.appendChild(imgLogo);
