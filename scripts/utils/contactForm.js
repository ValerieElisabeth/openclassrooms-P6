/* CODE DE NOMMAGE ----------------
name_Element = élément créer.
name_Class = Classe ciblée.
 */

//
// OUVERTURE & FERMETURE DE LA MODALE ----------------

function displayModal() {
  const modal_01Container = document.querySelector('#modal-01Container-Class');
  modal_01Container.classList.remove('d-none');
  modal_01Container.classList.add('d-block');
}

function closeModal() {
  const modalPrincipalContainer = document.querySelector(
    '#modal-01Container-Class'
  );
  modal_01Container.classList.remove('d-block');
  modal_01Container.classList.add('d-none');
}

//
// HEADER MODALE -----------------------------------
// 1) Créer les éléments header de la modale.
const modal_01Container = document.querySelector('#modal-01Container-Class');

const modal_02Container = document.querySelector('.modal-02Container-Class');
modal_01Container.classList.add('d-none');

const modal_03Container_Header_Class = document.querySelector(
  '.modal-03Container-Header-Class'
);

const modal_04Container_Div_Element = document.createElement('div');
modal_04Container_Div_Element.classList.add('modal_04Container-div-Class');
modal_04Container_Div_Element.classList.add('d-flex');
modal_04Container_Div_Element.classList.add('ai-c');

const h2_Contact_Element = document.querySelector('.h2-Contact-Element');

const div_ImageContainer_Element = document.createElement('div');
div_ImageContainer_Element.classList.add('div-img-container');
const img_Element = document.createElement('img');

img_Element.setAttribute('src', 'assets/icons/close.svg');

img_Element.addEventListener('click', () => {
  closeModal();
});

// FORMULAIRE --------------------------------------
// 2) Créer les éléments de la balise <form> de la modale.
const form_Modal_Element = document.querySelector('.form-modal');

// NOM DU PHOTOHRAPHE

// PRÉNOM
const lastName_Label = document.querySelector('.lastName-label');
lastName_Label.setAttribute('for', 'lastName');
lastName_Label.setAttribute('aria-labelledby', 'lastName');
lastName_Label.setAttribute('aria-label', 'Écrire votre prénom');
const lastName_Input = document.querySelector('#lastName');
lastName_Input.setAttribute('type', 'text');

// NOM input
const firstName_Label = document.querySelector('.firstName-label');
firstName_Label.setAttribute('for', 'firstName');
firstName_Label.setAttribute('aria-labelledby', 'firstName');
firstName_Label.setAttribute('aria-label', 'Écrire votre nom');
const firstName_Input = document.querySelector('#firstName');
firstName_Input.setAttribute('type', 'text');

// ADRESSE E-MAIL input
const email_Label = document.querySelector('.email-label');
email_Label.setAttribute('for', 'email');
email_Label.setAttribute('aria-labelledby', 'email');
email_Label.setAttribute('aria-label', 'Écrire votre adresse e-mail');
const email_Input = document.querySelector('#email');
email_Input.setAttribute('type', 'email');
email_Input.setAttribute('aria-require', 'true');

// MESSAGE input
const message_Label = document.querySelector('.message-label');
message_Label.setAttribute('for', 'message');
message_Label.setAttribute('aria-labelledby', 'message');
message_Label.setAttribute('aria-label', 'Écrire votre message');
const message_Input = document.querySelector('#message');
message_Input.setAttribute('type', 'textArea');
message_Input.classList.add('text-area');
message_Input.rows = '20';

// BOUTON input
const submitBtn = document.querySelector('button');

// 3) Lier la modale au DOM.
modal_01Container.appendChild(modal_02Container);
modal_02Container.appendChild(modal_03Container_Header_Class);
modal_02Container.appendChild(form_Modal_Element);

modal_03Container_Header_Class.appendChild(modal_04Container_Div_Element);

modal_04Container_Div_Element.appendChild(h2_Contact_Element);
modal_04Container_Div_Element.appendChild(div_ImageContainer_Element);
div_ImageContainer_Element.appendChild(img_Element);
