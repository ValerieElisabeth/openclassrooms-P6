function openModalFunction() {
  //
  // création d'une modale de la galerie par dessus toute la page web.
  const body_Element = document.querySelector('body');

  // LIGHTBOX BACKDROP
  const lightbox_backdrop = document.createElement('div');
  lightbox_backdrop.classList.add(
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

  // CENTRAL CONTAINER : BLOC IMAGE CONTAINER <div> + LÉGENDE IMAGE <p>
  const center_Block_Lightbox_Container_02 = document.createElement('div');
  center_Block_Lightbox_Container_02.classList.add(
    'block-img-lightbox-container',
    'd-flex',
    'fd-c',
    'jc-sb'
  );

  //  BLOC IMAGE CONTAINER <div>
  const div_ImgContainer = document.createElement('div');
  div_ImgContainer.classList.add('div-image-container');

  // image
  const image = document.createElement('img');
  image.setAttribute('src', '/assets/images/logo.png');
  image.setAttribute('alt', "titre de l'image du Photographe dynamique ici");

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

  // RATTACHEMENT AU DOM
  body_Element.appendChild(lightbox_backdrop);
  lightbox_backdrop.appendChild(lightbox_Container_01);
  lightbox_Container_01.appendChild(backBtnContainer_02);
  backBtnContainer_02.appendChild(a_Back_Element);
  a_Back_Element.appendChild(i_Back_Element);
  lightbox_Container_01.appendChild(center_Block_Lightbox_Container_02);
  center_Block_Lightbox_Container_02.appendChild(div_ImgContainer);
  div_ImgContainer.appendChild(image);
  center_Block_Lightbox_Container_02.appendChild(p_Element);
  lightbox_Container_01.appendChild(nextBtnContainer_02);
  nextBtnContainer_02.appendChild(button_Close_Modal_Element);
  button_Close_Modal_Element.appendChild(i_CLose_Element);
  nextBtnContainer_02.appendChild(a_Next_Element);
  a_Next_Element.appendChild(i_Next_Element);
}

// MES ÉOUTEURS D'ÉVÈNEMENTS :
// Open modal
const open_Modal = document.querySelector('.open-modal');
open_Modal.addEventListener('click', openModalFunction);

// Fonction Close Modal en ciblant le parent qui est le Body, puis en supprimant un de ses enfants,
// Ici, la construction de notre Modale, en ciblant directement le Backdrop, comme enfant.
function closeModalFunction() {
  const lightbox_backdrop_Child = document.querySelector('.lightbox-backdrop');
  const parent_BackdropIsBody = lightbox_backdrop_Child.parentElement;
  parent_BackdropIsBody.removeChild(lightbox_backdrop_Child);
}

// const allLinksMedia_a = document.querySelectorAll(
//   '.grid-gallery-container .card-container a'
// );

// console.log(
//   'T O U T E S    L E S     I M A G E S     D E    LA   G A L E R I E'
// );

// console.log(allLinksMedia_a);
