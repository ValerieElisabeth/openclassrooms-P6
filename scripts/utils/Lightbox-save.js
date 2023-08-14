const section_lightbox = document.querySelector('.lightbox');
section_lightbox.classList.add(
  'container-02',
  'd-flex',
  'ai-c',
  'jc-c',
  'section-lightbox'
);

// Container Principal
const container01 = document.createElement('div');
container01.classList.add('d-flex', 'fd-r', 'container02');

// Bouton Précédent
const navContainerLeft = document.createElement('div');
navContainerLeft.classList.add('nav-container', 'd-flex', 'ai-fe', 'jc-c');
const a_Left_Elemnts = document.createElement('a');
const i_Left_Element = document.createElement('i');
i_Left_Element.classList.add('fa-sharp', 'fa-solid', 'fa-chevron-left');

// Image de la Lightbox
const imgLightboxContainer = document.createElement('div');
imgLightboxContainer.classList.add('d-flex', 'fd-c', 'jc-sb');
const imgDivContainer = document.createElement('div');
imgDivContainer.classList.add('image-container');
const image = document.createElement('img');
image.setAttribute('src', onePhotographerDatas);
image.setAttribute('alt', title);
const p_Element = document.createElement('p');

// Bouton Suivant
const navContainerRight = document.createElement('div');
navContainerRight.classList.add(
  'nav-container',
  'd-flex',
  'fd-c',
  'jc-sb',
  'ai-c'
);
const button_Element = document.createElement('button');
const i_CLose_Element = document.createElement('i');
i_CLose_Element.classList.add('fa-sharp', 'fa-solid', 'fa-xmark');
const a_Right_Element = document.createElement('a');
const i_Right_Element = document.createElement('i');
i_Right_Element.classList.add('fa-sharp', 'fa-solid', 'fa-chevron-right');

// Rattachement au DOM
section_lightbox.appendChild(container01);
container01.appendChild(navContainerLeft);
container01.appendChild(imgLightboxContainer);
container01.appendChild(navContainerRight);
navContainerLeft.appendChild(a_Left_Elemnts);
a_Left_Elemnts.appendChild(i_Left_Element);

imgLightboxContainer.appendChild(imgDivContainer);
imgLightboxContainer.appendChild(p_Element);
imgDivContainer.appendChild(image);

navContainerRight.appendChild(button_Element);
navContainerRight.appendChild(a_Right_Element);
button_Element.appendChild(i_CLose_Element);
a_Right_Element.appendChild(i_Right_Element);
