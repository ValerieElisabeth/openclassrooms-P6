/*
LA FONCTION : constructorPhotographerPage()
SE CHARGE DE CONSTRUIRE ET D'AFFICHER TOUS LES ÉLÉMENTS DE MA PAGE : Photographe.html,
EN RÉCUPÉRANT CHAQUE MORCEAU DE LA PAGE.
(1) On stocke notre requete Ftech dans la variable : fetchDatasPhotographersJSON.
(2) On cible le tableau d'objets qui nous intéresse : "photographers"
(3) La console confirme bien l'existence de notre tableau : "photographers"
(4) Utilisation de l'objet : "URLSearchParams" permet de récupérer des données depuis l'URL.
(5) On cible ensuite le paramètre de l'URL que nous voulons utiliser. Dans notre cas, c'est l'ID.
    Et grâce à la fonction : parseInt() le type Number de mon ID sera confirmé car par défaut,
    l'objet URLSearchParams, renvoi des strings.
(6) La console confirme que le type renvoyé de mon ID est un monbre, avec : "typeof"
(7) La méthode find() Permet de cibler 1 seul élément dans toutes les données d'un seul phototographe.
Nous ciblons donc l'ID et d'un photographe et il doit être égal à l'ID présent dans l'URL.
*/

async function constructorPhotographerPage() {
  const fetchDatasPhotographersJSON = await getFetchDatasPhotographersJSON(); // (1)
  const dataCibleJSONphotographers = fetchDatasPhotographersJSON.photographers; // (2)
  const dataCibleJSONmedias = fetchDatasPhotographersJSON.media;

  console.log('A l l    P H O T O G R A P H E R S   d a t a s'); // (3)
  console.log(dataCibleJSONphotographers); // (3)

  const urlSearchParams = new URLSearchParams(window.location.search); //s (4)
  const getId_URL = parseInt(urlSearchParams.get('id')); // (5)
  // console.log('TYPE OF ici : ');
  // console.log(typeof getId_URL); // (6)

  // (7) L'id du Photographe doit être égal à celui de l'URL.
  const onePhotographerDatas = dataCibleJSONphotographers.find(
    (onePhotographerDatas) => onePhotographerDatas.id === getId_URL
  );

  // TESTS DE RÉCUPÉRATIONS DES DONNÉES D'UN SEUL PHOTOGRAPHE-----------------
  // (8) Affiche uniquement le nom d'un photographe en console.
  // console.log('GET NAME ici : ');
  // console.log(onePhotographerDatas.name);

  // (9) Affiche toutes les données d'un seul photographe en console.
  // console.log('GET NAME ID ici : ');
  // console.log(onePhotographerDatas);

  /*
  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  CONSTRUCTION ET AFFICHAGE DU HEADER DE LA PAGE
  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

  (10) Selectionner le "main" pour y afficher un model de DOM stocké dans la Factory.
  (11) La constante "model" stock la Factory et les données du photographe récupérées dans l'URL (onePhotographerDatas).
  (12) On récupère la construction du DOM de la fonction : "displayHeaderDOMPhotographer();"
       et les données d'un photographe.
  (13) On rattache cette construction au "main" dans le DOM.
   */

  const displayName = document.querySelector('main'); // (10)
  const model = photographerFactory(onePhotographerDatas); // (11)
  const headerDomModel = model.displayHeaderDOMPhotographer(); // (12)
  displayName.appendChild(headerDomModel); // (13)

  /*
  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  RÉCUPÉRATION DES DONNÉES DEPUIS LE TABLEAU "media" ET AFFICHAGE DU DOM DU MENU DÉROULANT
  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
 */

  const scrollingMenuSection_Class =
    document.querySelector('#scrolling-menu-id');

  const modelScrolling = mediaFactory(dataCibleJSONmedias);
  const scrollingDomModel = modelScrolling.displayScrollingMenu();
  scrollingMenuSection_Class.appendChild(scrollingDomModel);
  

  /*
  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  CONSTRUCTION ET AFFICHAGE DU NOM DU PHOTOGRAPHE DANS LA MODAL
  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  (A) Cibler la classe : ".modal-03Container-Header-Class" dans la modale,
      qui affichera le nom du Photographe. 
  (B) On récupère la construction du DOM de la fonction : "displayFormNameDOMPhotographer();"
      et les données d'un photographe.
  (C) On rattache cette construction à la classe : au ".modal-03Container-Header-Class" dans le DOM.
  */

  const photographerNameClass = document.querySelector(
    '.modal-03Container-Header-Class'
  ); // (A)
  const formDomModel = model.displayModalDOMPhotographerName(); // (B)
  photographerNameClass.appendChild(formDomModel); // (c)

  /*
   (Z) ON APPALLE la fonction : displayGallery() qui est chargée d'afficher les photos du bon photographe.
   Pour cela, nous récupérons les données d'un photographe et dans le fichiers JSON, nous ciblons le tableau "media"
   Nous utilisons ensuite la fonction : "filter" afin de cibler photographerId, jusqu'à ce que celui-ci soit ÉGALE à l'ID,
   du photographe sélectionnée.
   Ainsi la fonction display Gallery, pourra afficher les bonnes photographies.
  */

  // Z
  displayGallery(
    onePhotographerDatas,
    fetchDatasPhotographersJSON.media.filter(
      (cibler) => cibler.photographerId === getId_URL
    )
  );
} // Fin de la fonction : constructorPhotographerPage().

constructorPhotographerPage();

/* 
-  -  -  -  -  -  -  -  -  -  -  -  -  -
AFFICHAGE et RÉCUPÉRATION DU DOM GALERIE
-  -  -  -  -  -  -  -  -  -  -  -  -  -
*/
async function displayGallery(onePhotographer, onePhotographerMediasmedias) {
  const gallerySection = document.querySelector('.grid-gallery-container');

  onePhotographerMediasmedias.forEach((allGalleryImages) => {
    const galleryModel = mediaFactory(allGalleryImages, onePhotographer.name);
    const galleryImagesDOM = galleryModel.getGalleryDOM();

    // On récupère le DOM
    console.log('Récupération du DOM GALLERY ICI: ');
    console.log(galleryImagesDOM);
    gallerySection.appendChild(galleryImagesDOM);
  });
}
