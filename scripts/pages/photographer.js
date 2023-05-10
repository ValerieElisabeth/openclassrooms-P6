/*
LA FONCTION : init()
Récupère uniquement les données liées au tableau d'objets : "photographers" (pas les "media")
du fichier JSON, depuis la fonction : fecthGetPhotographers()
Et affiche ces données, en faisant appel à la fonction : displayData.
*/
async function init() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const allMedias = urlSearchParams.get("id")
}
init();
//

// MAIN --------------------------------------------
// CONTRUCTION DE L'ENTÊTE DE LA PAGE DU PHOTOGRAPHE
// 1) Créer les éléments du DOM.
const containerParent = document.createElement('section');
containerParent.classList.add('photograph-header');

const photographeName = document.createElement('div');
photographeName.innerText = 'NOM du PHOTOGRAPHE';

const buttonContactMe = document.createElement('button');
buttonContactMe.classList.add('contact_button');
buttonContactMe.innerText = 'Contactez-moi';
buttonContactMe.addEventListener('click', () => {
  displayModal();
});

const profilContainer = document.createElement('div');
profilContainer.classList.add('apparenceContainer');
const profilImage = document.createElement('img');
profilImage.setAttribute('src', '/assets/images/Mimi/Portrait_Nora.jpg');
profilContainer.appendChild(profilImage);

// 2) Lier les éléments du DOM entre eux.
const mainSection = document.querySelector('main');
mainSection.appendChild(containerParent);
containerParent.appendChild(photographeName);
containerParent.appendChild(buttonContactMe);
containerParent.appendChild(profilContainer);
