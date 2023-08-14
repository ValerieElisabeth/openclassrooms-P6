// ECOUTEUR D'évènement
const cible_images = document.querySelectorAll(
  '.grid-gallery-container article div img'
);
console.log(
  'T O UT E S    L E S     I M A G E S     D E    LA   G A L E R I E'
);
console.log(cible_images);

//
// création d'une modale de la galerie par desuus toute la page web.
const body_Element = document.querySelector('body');
const lightbox_backdrop = document.createElement('div');
lightbox_backdrop.classList.add('lightbox-backdrop', 'd-flex', 'ai-c', 'jc-c');

const lightbox_Container_01 = document.createElement('div');
lightbox_Container_01.classList.add(
  'lightbox-container',
  'd-flex',
  'ai-c',
  'jc-c'
);
lightbox_Container_01.innerText = 'lightbox container';

const backBtnContainer_02 = document.createElement('div');
backBtnContainer_02.classList.add('back-btn-container');
backBtnContainer_02.innerText = 'CONTAINER PRÉCÉDENT';

const div_Lightbox_Container_02 = document.createElement('div');
div_Lightbox_Container_02.classList.add('img-lightbox-container');
div_Lightbox_Container_02.innerText = 'DIV IMAGE CONTAINER';

const nextBtnContainer_02 = document.createElement('div');
nextBtnContainer_02.classList.add('next-btn-container');
nextBtnContainer_02.innerText = 'CONTAINER SUIVANT';

body_Element.appendChild(lightbox_backdrop);
lightbox_backdrop.appendChild(lightbox_Container_01);
lightbox_Container_01.appendChild(backBtnContainer_02);
lightbox_Container_01.appendChild(div_Lightbox_Container_02);
lightbox_Container_01.appendChild(nextBtnContainer_02);

// cible_images.addEventListener('click', () => {});
