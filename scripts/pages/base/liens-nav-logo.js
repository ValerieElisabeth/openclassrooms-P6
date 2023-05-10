// CONTRUCTION DE L'ENTÊTE DE LA PAGE D'ACCUEIL.
// 1) Créer les éléments du DOM.
const imgLogo = document.createElement('img');
imgLogo.setAttribute('src', 'assets/images/logo.png');
imgLogo.classList.add('logo');

const aLinkIndex = document.createElement('a');
aLinkIndex.setAttribute('href', '/index.html');
aLinkIndex.appendChild(imgLogo);

const title = document.createElement('h1');
title.innerText = 'Nos photographes';

// 2) Lier les éléments du DOM entre eux.
const headerSection = document.querySelector('header');
headerSection.appendChild(aLinkIndex);
headerSection.appendChild(title);
