/*
------------------------------------------------------------------------
               OUVERTURE & FERMETURE DE LA MODALE 
------------------------------------------------------------------------ 
*/
const modal_01Container_ID = document.querySelector('.modal-01Container-Class');

function displayModal() {
  modal_01Container_ID.classList.remove('d-none');
  modal_01Container_ID.classList.add('d-block');
}

function closeModal() {
  modal_01Container_ID.classList.remove('d-block');
  modal_01Container_ID.classList.add('d-none');
}

/*
------------------------------------------------------------------------
                          HEADER MODALE               
                  NOM PERSONNALISÉ DU PHOTOGRAPHE
------------------------------------------------------------------------ 
*/

// 1) Créer les éléments header de la modale.
modal_01Container_ID.classList.add('background-modal-container');

const modal_02Container = document.querySelector('.modal-02Container-Class');
modal_01Container_ID.classList.add('d-none');

const modal_03Container_Header_Class = document.querySelector(
  '.modal-03Container-Header-Class'
);

const modal_04Container_Div_Element = document.createElement('div');
modal_04Container_Div_Element.classList.add(
  'modal_04Container-div-Class',
  'd-flex',
  'ai-c'
);

const h2_Contact_Element = document.querySelector('.h2-Contact-Element');

const div_ImageContainer_Element = document.createElement('div');
div_ImageContainer_Element.classList.add('div-img-container');

// FERMETURE DE LA MODALE au click sur l'icone de la croix.
const img_Element = document.createElement('img');
img_Element.setAttribute('src', 'assets/icons/close.svg');
img_Element.addEventListener('click', closeModal);

/*
------------------------------------------------------------------------
                              FORMULAIRE
------------------------------------------------------------------------ 
*/

//
//
// FORMULAIRE --------------------------------------
// 2) Créer les éléments de la balise <form> de la modale.
const form_Modal_Element = document.querySelector('form');

// NOM DU PHOTOHRAPHE

// PRÉNOM
const lastName_Label = document.querySelector('.lastName-label');
lastName_Label.setAttribute('for', 'lastName');
lastName_Label.setAttribute('aria-labelledby', 'lastName');
lastName_Label.setAttribute('aria-label', 'Écrire votre prénom');
const lastName_Input = document.querySelector('#lastName');
lastName_Input.classList.add('text-control');
lastName_Input.setAttribute('type', 'text');

// NOM input
const firstName_Label = document.querySelector('.firstName-label');
firstName_Label.setAttribute('for', 'firstName');
firstName_Label.setAttribute('aria-labelledby', 'firstName');
firstName_Label.setAttribute('aria-label', 'Écrire votre nom');
const firstName_Input = document.querySelector('#firstName');
firstName_Input.classList.add('text-control');
firstName_Input.setAttribute('type', 'text');

// ADRESSE E-MAIL input
const email_Label = document.querySelector('.email-label');
email_Label.setAttribute('for', 'email');
email_Label.setAttribute('aria-labelledby', 'email');
email_Label.setAttribute('aria-label', 'Écrire votre adresse e-mail');
const email_Input = document.querySelector('#email');
email_Input.classList.add('text-control');
email_Input.setAttribute('type', 'email');
email_Input.setAttribute('aria-require', 'true');

// MESSAGE input
const message_Label = document.querySelector('.message-label');
message_Label.setAttribute('for', 'message');
message_Label.setAttribute('aria-labelledby', 'message');
message_Label.setAttribute('aria-label', 'Écrire votre message');
const message_Input = document.querySelector('#message');
message_Input.classList.add('text-control');
message_Input.setAttribute('type', 'textArea');
message_Input.classList.add('text-area');
message_Input.rows = '20';

// 3) Lier la modale au DOM.
modal_01Container_ID.appendChild(modal_02Container);
modal_02Container.appendChild(modal_03Container_Header_Class);
modal_02Container.appendChild(form_Modal_Element);
modal_03Container_Header_Class.appendChild(modal_04Container_Div_Element);
modal_04Container_Div_Element.appendChild(h2_Contact_Element);
modal_04Container_Div_Element.appendChild(div_ImageContainer_Element);
div_ImageContainer_Element.appendChild(img_Element);

/*
---------------------------------------------------------------------------------------------- 
                                    LE FORMULAIRE
                                Ouverture et Fermeture
----------------------------------------------------------------------------------------------  
(1) On cible la classe: "modal-01Container-Class" qui gère l'affichage de l'OVERLAY => modal => formulaire.
(2) On cible ensuite les 2 boutons :"Je M'inscris" ayant la classe "modal-btn" un pour la (version MOBILE)
et un pour la (version DESCKTOP).
(3) On place sur eux, un écouteur d'évènement, qui au click, va ajouter une classe :  "modal--open",
à côté de la classe : "modal-01Container-Class" qui gère l'OVERLAY. La modale S'OUVRIRA, via une boucle forEach, grâce à la classe :
"modal--open" qui sera ajoutée. Cette classe sera pré-stylée en CSS avec un display block pour faire apparaitre le bloc de la modale.
*/

const modalbg = document.querySelector('.modal-01Container-Class'); // (1)
const modalBtn = document.querySelectorAll('.modal-btn'); // (2)

// Lance l'ouverture de la modale avec l'écouteur d'évènement au click de l'utilisateur,
// en ciblant les classes "modal-btn".
modalBtn.forEach((ciblerBtn) => {
  ciblerBtn.addEventListener('click', launchModal);
});

// OUVERTURE DE LA MODALE
function launchModal() {
  modalbg.classList.add('d-block'); // (3)
  modalbg.classList.remove('d-none');
}

// FONCTION DE FERMETURE DE LA MODALE via le bouton "X"
function closeModal() {
  modalbg.classList.add('d-none');
  modalbg.classList.remove('d-block');
}

/*
------------------------------------------------------------------------------------------------
                    LES FONCTIONS TEST ES VALIDATION DU FORMULAIRE
                            (par des valeurs Booléennes)
------------------------------------------------------------------------------------------------
*/

//
// ---- TEST : NOM ET PRÉNOM -------------------------------------------------------------------

function testString(string) {
  const stringPattern =
    /^[\wÀ-ÖØ-öø-ÿéèêëôöûüçñ]{2,}(?:[\s-][\wÀ-ÖØ-öø-ÿéèêëôöûüçñ]{2,}){0,2}$/i;
  // console.log(stringPattern.test(string));
  return stringPattern.test(string);
}
// testString('JEAN-MARIE');

//
// ---- TEST : ADRESSE E-MAIL -------------------------------------------------------------------

function testEmail(string) {
  const emailPattern =
    // /^[a-z0-9\.]+[@]{1}[[a-z0-9]+[.]{1}[a-z]{2,10}$/;
    /^([a-z0-9\.]+)?@[a-z0-9]+(\.[a-z]{2,10}){1,2}$/i;
  // console.log(emailPattern.test(string));
  return emailPattern.test(string);
}

// testEmail('name580.jean@gmail.com');

/*
------------------------------------------------------------------------------------------------
                          FONCTIONS QUI GÈRENT LES MESSAGES D'ERREURS
------------------------------------------------------------------------------------------------    
 /*
 EXPLICATIONS :
(5) La fonction setAttribute(), permet de récupérer directement dans le fichier CSS, un attribut qui porte le nom :
"attr(data-error)". Celui-ci, contient le style CSS des nos messages d'erreurs et prévoit de les inclure ::after,
après, la div Parente de l'input.
(6) L'attribut CSS : "attr(data-error-visible)" permet que le message d'erreur passe d'une opacité de 0 à 100%, car sa valeur est true. 
 */

// FONCTION (A) Affiche les messages si l'input est vide.
function errorEmptyMessages(container, errorEmptyMsg) {
  container.setAttribute('data-error', errorEmptyMsg); // (5)
  container.setAttribute('data-error-visible', true); // (6)
}

// FONCTION (B) Affiche les messages personnalisés, si les conditions de sont pas remplies.
function errorPersoMessages(container, msgPerso) {
  container.setAttribute('data-error', msgPerso);
  container.setAttribute('data-error-visible', true);
}

// FONCTION (C) Efface les messages inscrit dans le container Parent.
function removeMessages(container) {
  container.removeAttribute('data-error');
  container.removeAttribute('data-error-visible');
}

/* INITIALISATION des messages d'erreurss'ils étaient vide.
------------------------------------------------------------------------------------- */
const errorEmptyMsg = 'Ce champ ne peut pas être vide'; // (3a)
const errorMinimumString = 'Vous devez entrer 2 caractères ou plus'; // (3b)
const errorEmail = 'Vous devez saisir une adresse e-mail valide';

let msgPerso;
let inputName;

/*
------------------------------------------------------------------------------------------------
                    FONCTION DE VÉRIFICATION DE LA VALIDATION DES INPUTS
------------------------------------------------------------------------------------------------  
*/

const form = document.querySelector('.form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  /*
------------------------------------------------------------------------------------------------
À la soumission du formulaire, on considère par défaut que tous les inputs sont valides,
et à la vérification, des inputs, si l'un d'eux vaux fasle, la soumission ne pourra pas se faire.
------------------------------------------------------------------------------------------------  
*/

  let allInputsValid = true;

  /*
  EXPLICATIONS :
  (1) On cible 1 champs par (cas) 'case' via la boucle forEach déclaré précédement.
  (2) On cible les container parents de chaque classes ciblées: "firstName", "lastName"...
      c.a.d : les "div" ayant la classe : formData.
  */
  const allInputs = document.querySelectorAll('.form .formData input');
  allInputs.forEach((ciblerInput) => {
    inputName = document.querySelector(`#${ciblerInput.id}`); // (1)
    const inputContainer = inputName.parentNode; // (2)
    // console.log(ciblerInput.id);

    switch (ciblerInput.id) {
      // --------------------------------------------------------------------------//
      // TEST DES CHAMPS "firstName" & "lastNAme" ---------------------------------//
      // --------------------------------------------------------------------------//

      case 'firstName':
      case 'lastName':
        //
        if (!ciblerInput.value) {
          allInputsValid = false;
          errorEmptyMessages(inputContainer, errorEmptyMsg);
          //
        } else if (!testString(ciblerInput.value)) {
          allInputsValid = false;
          errorPersoMessages(inputContainer, errorMinimumString);
          //
        } else {
          removeMessages(inputContainer);
        }
        break;

      // ---------------------------------------------------------------------------//
      // TEST DU CHAMPS "email" ----------------------------------------------------//
      // ---------------------------------------------------------------------------//

      case 'email':
        if (!ciblerInput.value) {
          allInputsValid = false;
          errorEmptyMessages(inputContainer, errorEmptyMsg);
          //
        } else if (!testEmail(ciblerInput.value)) {
          allInputsValid = false;
          errorPersoMessages(inputContainer, errorEmail);
          //
        } else {
          removeMessages(inputContainer);
        }
        break;
    }
  });

  if (allInputsValid) {
    validate();
  }
});
/*
------------------------------------------------------------------------------------------------
                          FONCTION FINALE DE VALIDATION 
------------------------------------------------------------------------------------------------  
*/

function validate() {
  // BOUTON input : "ENVOYER et RÉINITIALISE LA PAGE WEB"
  const submitBtn = document.querySelector('.submit');
  submitBtn.addEventListener('click', () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const photographerId = parseInt(urlSearchParams.get('id'));
    window.location.href = `./photographer.html?id=` + photographerId;
    form.reset(); //(1) à remettre après les essais
    form.classList.add('d-none'); // (2)
    modal_01Container_ID.classList.add('d-none'); // (2)
  });
  //
  /* // A : EFFACER LE FORMULAIRE :
  ---------------------------------------------------------------------------------------------
  (1) cible la classe : "form" pour initialiser ou remettre à zéro les inputs du formulaire, avec la fonction : "reset()"
  (2) Cache le formulaire en lui ajoutant une classe CSS display none.
  */
} // fin function validate()
