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

async function getPhotographers() {
  // Requête fetch qui cible le fichier json : "photographers.json"
  const response = await fetch('./data/photographers.json');
  if (!response.ok) {
    console.log('ERREUR récupération données des photographes');
    return;
  }

  // les données du fichier JSON sont récupérés sous forme d'un tableau, nommé : data
  const data = await response.json();
  console.log(data); // TEST console

  // Retourner le tableau photographers.
  return data;
}

console.log(getPhotographers()); // TEST console

// Boucle forEach sur chaque élément du tableau "data"
async function displayData(data) {
  const photographersSection = document.querySelector('.photographer_section');

  data.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes par le nom de son tableau : "photographers"
  const tabNamePhotographers = await getPhotographers();
  const tabResult = tabNamePhotographers.photographers;
  displayData(tabResult);
  console.log(tabResult);
}

init();


