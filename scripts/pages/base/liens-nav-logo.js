// CONTRUCTION DE L'ENTÊTE DE LA PAGE D'ACCUEIL.
// 1) Créer les éléments du DOM.

const imgLogo = document.createElement('img');
imgLogo.setAttribute('src', 'assets/images/logo.png');
imgLogo.classList.add('logo');

const aLinkIndex = document.createElement('a');
aLinkIndex.setAttribute('href', '/index.html');

const h1 = document.querySelector('h1');

// 2) Lier les éléments du DOM entre eux.
const header = document.querySelector('header');
header.appendChild(aLinkIndex);
aLinkIndex.appendChild(imgLogo);
header.appendChild(h1);
