/*
LA FONCTION : init()
(1) On stocke notre requete Ftech dans la variable : dataBase.
(2) On cible le tableau d'objets qui nous intéresse : "photographers"
(3) La console confirme bien l'existence de notre tableau : "photographers"
(4) Utilisation de l'objet : "URLSearchParams" permet de récupérer des données depuis l'URL.
(5) On cible ensuite le paramètre de l'URL que nous voulons utiliser. Dans notre cas, c'est l'ID.
    Et grâce à la fonction : parseInt() le type Number de mon ID sera confirmé car par défaut,
    l'objet URLSearchParams, renvoi des strings.
(6) La console confirme que le type renvoyé de mon ID est un monbre, avec : "typeof"
(7) Avec la méthode find(), on cible uniquement la donnée qui nous interesse avec une condition.
*/

async function init() {
  const dataBase = await fetchGetPhotographers(); // (1)
  const dataCible = dataBase.photographers; // (2)
  console.log(dataCible); // (3)

  const urlSearchParams = new URLSearchParams(window.location.search); // (4)
  const getId = parseInt(urlSearchParams.get('id')); // (5)
  console.log(typeof getId); // (6)

  // (7)
  const getNameId = dataCible.find(
    (onePhotographer) => onePhotographer.id === getId
  );

  // (8) Affiche uniquement le nom d'un photographe en console.
  console.log(getNameId.name);

  // (9) Affiche toutes les données d'un photographe en console.
  console.log(getNameId);

  /*
  (10) Selectionner le "main" pour y afficher un model de DOM stocké dans la Factory.
  (11) La constante "model" stock la Factory et les données de l'URL récupérée en argument.
  (12) On récupère la construction du DOM de la fonction : "displayHeaderDOMPhotographer();"
  (13) On rattache cette construction au "main" du DOM
   */

  const displayName = document.querySelector('main'); // (10)
  const model = photographerFactory(getNameId); // (11)
  const headerDomModel = model.displayHeaderDOMPhotographer(); // (12)
  displayName.appendChild(headerDomModel); // (13)

  //
  // AFFICHER LE NOM DU PHOTOGRAPHE DANS LA MODAL -----------------
  /*
  (A) Cibler la classe dans la modale, qui affichera le nom du Photographe.
  (B) La constante "modelForm" stock toutes les données de la Factory.
  (C) On récupère la construction du DOM de la fonction : "displayFormNameDOMPhotographer();"
  (D) On rattache au DOM final, cette construction au 1ère élément qu'on à ciblé (A).
   */

  // (A)
  const photographerNameClass = document.querySelector(
    '.modal-03Container-Header-Class'
  );
  const modelForm = photographerFactory(getNameId); // (B)
  const formDomModel = modelForm.displayModalDOMPhotographerName(); // (C)
  photographerNameClass.appendChild(formDomModel);
}
init();
//
