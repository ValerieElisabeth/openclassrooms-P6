function displayModal() {
  const modal = document.getElementById('contact_modal');
  modal.classList.remove('d-none');
  modal.classList.add('d-block');
}

function closeModal() {
  const modal = document.getElementById('contact_modal');
  modal.classList.remove('d-block');
  modal.classList.add('d-none');
}

//
// HEADER MODALE -----------------------------------
// 1a) Créer les éléments header de la modale.
const body = document.querySelector('body');
const modalPrincipalContainer = document.createElement('div');
modalPrincipalContainer.id = 'contact_modal';
modalPrincipalContainer.classList.add('d-none');

const modalSecondaryContainer = document.createElement('div');
modalSecondaryContainer.classList.add('modal');
const headerModal = document.createElement('header');
const h2Modal = document.createElement('h2');
h2Modal.innerText = 'Contactez-moi';
const closeModalImg = document.createElement('img');
closeModalImg.setAttribute('src', 'assets/icons/close.svg');
closeModalImg.addEventListener('click', () => {
  closeModal();
});

// 1b) Lier les éléments de header de la modale entre eux.
body.appendChild(modalPrincipalContainer);
modalPrincipalContainer.appendChild(modalSecondaryContainer);
modalSecondaryContainer.appendChild(headerModal);
headerModal.appendChild(h2Modal);
headerModal.appendChild(closeModalImg);

//
// 2a) Créer les éléments de la balise <form> de la modale.
const form = document.createElement('form');
const containerLabel = document.createElement('div');

const firstNameLabel = document.createElement('label');
firstNameLabel.innerText = 'Prénom';
const firstNameInput = document.createElement('input');
firstNameInput.placeholder = 'Prénom';

const lastNameLabel = document.createElement('label');
lastNameLabel.innerText = 'Nom';
const lastNameInput = document.createElement('input');
lastNameInput.placeholder = 'Nom';

const eMailLabel = document.createElement('label');
eMailLabel.innerText = 'Email';
const eMailInput = document.createElement('input');
eMailInput.setAttribute('type', 'email');
eMailInput.placeholder = 'email@gmail.com';

const msgLabel = document.createElement('label');
msgLabel.innerText = 'Votre message';
msgLabel.setAttribute('type', 'textArea');
const msgInput = document.createElement('textArea');
msgInput.classList.add('text-area');
msgInput.rows = '20';

const submitBtn = document.createElement('button');
submitBtn.innerText = 'Envoyer';
submitBtn.classList.add('contact_button');

// 2b) Lier les éléments de la balise <form> de la modle entre eux.
modalSecondaryContainer.appendChild(form);
form.appendChild(containerLabel);
form.appendChild(submitBtn);
containerLabel.appendChild(firstNameLabel);
containerLabel.appendChild(firstNameInput);
containerLabel.appendChild(lastNameLabel);
containerLabel.appendChild(lastNameInput);
containerLabel.appendChild(eMailLabel);
containerLabel.appendChild(eMailInput);
containerLabel.appendChild(msgLabel);
containerLabel.appendChild(msgInput);
