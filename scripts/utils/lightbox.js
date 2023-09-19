/*
--------------------------------------------------------------------
FONCTION QUI CONSTRUIT LA LIGHTBOX DANS LE DOM
--------------------------------------------------------------------
*/
let urlMediaSelected;

function openModalFunction(e, urlTarget, URL_href_Tab) {
  console.log('MODALE NIVEAU 01 Entrée');
  e.preventDefault();
  urlMediaSelected = urlTarget;

  //
  // Création d'une Lightbox, au dessus toute la page web.
  // LIGHTBOX BACKDROP CONTAINER
  const lightbox_backdrop_Cible = document.querySelector('.lightbox');
  lightbox_backdrop_Cible.classList.add(
    'lightbox-backdrop',
    'd-flex',
    'ai-c',
    'jc-c'
  );

  // CONTAINER PRINCIPAL
  const lightbox_Container_01 = document.createElement('div');
  lightbox_Container_01.classList.add(
    'lightbox-container',
    'container-02',
    'd-flex',
    'jc-c'
  );

  // BOUTON PRÉCÉDENT
  const backBtnContainer_02 = document.createElement('div');
  backBtnContainer_02.classList.add(
    'back-btn-container',
    'd-flex',
    'ai-fe',
    'jc-c'
  );

  const a_Back_Element = document.createElement('a');
  const i_Back_Element = document.createElement('i');
  i_Back_Element.classList.add('fa-sharp', 'fa-solid', 'fa-chevron-left');
  i_Back_Element.addEventListener('click', (e) => backBtn(e, URL_href_Tab));

  //
  // CENTRAL CONTAINER : BLOC IMAGE CONTAINER <div> + LÉGENDE IMAGE <p>
  const center_Block_Lightbox_Container_02 = document.createElement('div');
  center_Block_Lightbox_Container_02.classList.add(
    'block-img-lightbox-container',
    'd-flex',
    'fd-c',
    'jc-sb'
  );

  //  BLOC IMAGE CONTAINER <div>
  const div_Container_Medias = document.createElement('div');
  div_Container_Medias.classList.add('div-container-media');

  // AFFCIHAGE DU BON MÉDIA DANS LE BLOC IMAGE
  displayCorrectMedia(div_Container_Medias, urlTarget);

  // LÉGENDE IMAGE <p>
  const p_Element = document.createElement('p');
  p_Element.innerText = 'Titre image dynamique ici';

  const nextBtnContainer_02 = document.createElement('div');
  nextBtnContainer_02.classList.add(
    'next-btn-container',
    'd-flex',
    'fd-c',
    'jc-sb',
    'ai-c'
  );

  // BOUTON FERMETURE DE LA MODALE
  const button_Close_Modal_Element = document.createElement('button');
  const i_CLose_Element = document.createElement('i');
  i_CLose_Element.classList.add(
    'fa-sharp',
    'fa-solid',
    'fa-xmark',
    'close-modal'
  );

  // Close modal
  button_Close_Modal_Element.addEventListener('click', closeModalFunction);

  // BOUTON SUIVANT
  const a_Next_Element = document.createElement('a');
  const i_Next_Element = document.createElement('i');
  i_Next_Element.classList.add('fa-sharp', 'fa-solid', 'fa-chevron-right');
  a_Next_Element.addEventListener('click', (e) => nextBtn(e, URL_href_Tab));

  // RATTACHEMENT AU DOM
  lightbox_backdrop_Cible.appendChild(lightbox_Container_01);
  lightbox_Container_01.appendChild(backBtnContainer_02);
  backBtnContainer_02.appendChild(a_Back_Element);
  a_Back_Element.appendChild(i_Back_Element);
  lightbox_Container_01.appendChild(center_Block_Lightbox_Container_02);
  center_Block_Lightbox_Container_02.appendChild(div_Container_Medias);
  center_Block_Lightbox_Container_02.appendChild(p_Element);
  lightbox_Container_01.appendChild(nextBtnContainer_02);
  nextBtnContainer_02.appendChild(button_Close_Modal_Element);
  button_Close_Modal_Element.appendChild(i_CLose_Element);
  nextBtnContainer_02.appendChild(a_Next_Element);
  a_Next_Element.appendChild(i_Next_Element);
  console.log('MODALE 05 Terminé');
}

/*
--------------------------------------------------------------------
FONCTION CLOSE MODALE :
--------------------------------------------------------------------
Fonction Close Modal en ciblant le parent qui est le Body, puis en supprimant un de ses enfants,
Ici, la construction de notre Modale, en ciblant directement le Backdrop, comme enfant.
*/

function closeModalFunction() {
  const child_Islightbox_container = document.querySelector(
    '.lightbox-container'
  );
  const parent_Islightbox_backdrop = child_Islightbox_container.parentElement;
  parent_Islightbox_backdrop.removeChild(child_Islightbox_container);
}

/*
--------------------------------------------------------------------
FONCTION D'AFFICHAGE DU BON MEDIA ET DE CONSTRUCTION DU DOM
--------------------------------------------------------------------
*/

function displayCorrectMedia(mediaContainer, newUrlTarget) {
  const isMediaVideo = newUrlTarget.includes('.mp4');

  // Vider le conteneur de média au cas où
  mediaContainer.innerHTML = '';

  if (isMediaVideo) {
    const video_Element = document.createElement('video');
    video_Element.setAttribute('aria-label', 'titre dynamique de la vidéo');
    video_Element.setAttribute('alt', 'galerie vidéo du photographe');
    video_Element.setAttribute('autoplay', true);
    video_Element.setAttribute('controls', true);
    const source_Element = document.createElement('source');
    source_Element.setAttribute('src', newUrlTarget);
    source_Element.setAttribute('type', 'video/mp4');
    video_Element.appendChild(source_Element);
    mediaContainer.appendChild(video_Element);
  } else {
    const image = document.createElement('img');
    image.setAttribute('src', newUrlTarget);
    image.setAttribute('alt', "titre de l'image du Photographe dynamique ici");
    mediaContainer.appendChild(image);
  }
}

/*
--------------------------------------------------------------------
FONCTION NEXT SUIVANTE
--------------------------------------------------------------------
*/

function nextBtn(e, URL_href_Tab) {
  e.preventDefault();
  console.log("Le bouton 'Next' est cliqué");

  //===========================================

  const displayingIndexSelected = URL_href_Tab.findIndex(
    (image) => image === urlMediaSelected
  );

  const total_ListImages = URL_href_Tab.length;
  let nextDisplayIndex;

  if (displayingIndexSelected === total_ListImages - 1) {
    nextDisplayIndex = 0;
  } else {
    nextDisplayIndex = displayingIndexSelected + 1;
  }
  //===========================================

  // Cible le conteneur des médias dans le DOM
  const mediaContainer = document.querySelector('.div-container-media');
  const newUrlTarget = URL_href_Tab[nextDisplayIndex];
  urlMediaSelected = newUrlTarget;
  console.log(newUrlTarget);
  mediaContainer.innerHTML = ' ';

  // AFFCIHAGE DU BON MÉDIA DANS LE BLOC IMAGE
  displayCorrectMedia(mediaContainer, newUrlTarget);
}

/*
--------------------------------------------------------------------
FONCTION BACK PRÉCÉDENTE
--------------------------------------------------------------------
*/

function backBtn(e, URL_href_Tab) {
  e.preventDefault();
  console.log("Le bouton 'BACK' est cliqué");

  //===========================================



  const displayingIndexSelected = URL_href_Tab.findIndex(
    (image) => image === urlMediaSelected
  );

  const total_ListImages = URL_href_Tab.length;
  let backDisplayIndex;

  if (displayingIndexSelected === 0) {
    backDisplayIndex = total_ListImages - 1;
  } else {
    backDisplayIndex = displayingIndexSelected - 1;
  }
  //===========================================

  // Cible le conteneur des médias dans le DOM
  const mediaContainer = document.querySelector('.div-container-media');
  const newUrlTarget = URL_href_Tab[backDisplayIndex];
  urlMediaSelected = newUrlTarget;
  console.log(newUrlTarget);
  mediaContainer.innerHTML = ' ';

  // AFFCIHAGE DU BON MÉDIA DANS LE BLOC IMAGE
  displayCorrectMedia(mediaContainer, newUrlTarget);
}
