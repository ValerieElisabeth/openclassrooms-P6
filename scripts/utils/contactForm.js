function displayModal() {
  const modal = document.querySelector('#contact-modal');
  modal.classList.remove('d-none');
  modal.classList.add('d-block');
}

function closeModal() {
  const modal = document.querySelector('#contact-modal');
  modal.classList.remove('d-block');
  modal.classList.add('d-none');
}

//
// HEADER MODALE -----------------------------------
// 1) Créer les éléments header de la modale.
const modalPrincipalContainer = document.querySelector('#contact-modal');
const modalSecondaryContainer = document.querySelector('.modal');
modalPrincipalContainer.classList.add('d-none');

const headerModal_Class = document.querySelector('.header-modal-class');

const h2_Element = document.querySelector('h2');
const img_Element = document.createElement('img');


img_Element.setAttribute('src', 'assets/icons/close.svg');
img_Element.addEventListener('click', () => {
  closeModal();
});

// FORMULAIRE --------------------------------------
// 2) Créer les éléments de la balise <form> de la modale.
const form_ModalElement = document.querySelector('.form-modal');

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
modalPrincipalContainer.appendChild(modalSecondaryContainer);
modalSecondaryContainer.appendChild(headerModal_Class);
modalSecondaryContainer.appendChild(form_ModalElement);

headerModal_Class.appendChild(h2_Element);
headerModal_Class.appendChild(img_Element);

