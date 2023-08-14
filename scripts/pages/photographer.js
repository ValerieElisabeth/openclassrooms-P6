/*
LA FONCTION : constructorPhotographerPage()
SE CHARGE DE CONSTRUIRE ET D'AFFICHER TOUS LES ÉLÉMENTS DE MA PAGE : Photographe.html,
EN RÉCUPÉRANT CHAQUE MORCEAU DE LA PAGE.
(1) On stocke notre requete Ftech dans la variable : fetchDatasPhotographersJSON.
(2) On stock le tableau d'objets : "photographers" ds la variable : "dataTabPhotographers"
(3) On stock le tableau d'objets : "media" ds la variable : "dataTabMediasJSON"
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
  const dataTabPhotographers = fetchDatasPhotographersJSON.photographers; // (2)
  const dataTabMediasJSON = fetchDatasPhotographersJSON.media; // (3)

  const urlSearchParams = new URLSearchParams(window.location.search); // (4)
  const getId_URL = parseInt(urlSearchParams.get('id')); // (5)

  // (7)
  const onePhotographerDatas = dataTabPhotographers.find(
    (onePhotographerDatas) => onePhotographerDatas.id === getId_URL
  );

  //-------------------------------------------------------------------
  // PHOTOGRAHE CHOISI PAR L'UTILISATEUR -----------------------------
  // Filtrer les médias pour n'inclure que ceux du photographe choisi

  const filterMediaOfOnePhotographer = dataTabMediasJSON.filter(
    (media) => media.photographerId === getId_URL
  );

  //-------------------------------------------------------------------
  // AFFICHAGE DU HEADER DE PRÉSENTATION DU PHOTOGRAPHE rattaché sur le "main" :
  const displayName = document.querySelector('main');
  const model = photographerFactory(onePhotographerDatas);
  const headerDomModel = model.displayHeaderDOMPhotographer();
  displayName.appendChild(headerDomModel);

  // AFFICHAGE DU MENU "SELECT" DÉROULANT rattaché sur l'ID : scrolling-menu-id :
  const scrollingMenuSection_Id = document.querySelector('#scrolling-menu-id');
  const modelScrolling = mediaFactory(onePhotographerDatas, dataTabMediasJSON);
  const scrollingDOMModel = modelScrolling.displayScrollingMenu();
  scrollingMenuSection_Id.appendChild(scrollingDOMModel);

  //-------------------------------------------------------------------
  // AFFICHAGE DES STATISTIQUES rattaché sur l'ID : scrolling-menu-id :
  // en utilisant directement la variable : filterMediaOfOnePhotographer
  const totalLikes = filterMediaOfOnePhotographer.reduce(
    (total, media) => total + media.likes,
    0
  );

  const statisticalsWindow_Id = document.querySelector('#statisticals-window');
  const modelStatistics = mediaFactory(onePhotographerDatas, dataTabMediasJSON);
  const statisticalsDOMModel = modelStatistics.displayStatResults(totalLikes);
  statisticalsWindow_Id.appendChild(statisticalsDOMModel);

  //-------------------------------------------------------------------
  // AFFICHAGE DU NOM DU PHOTOGRAPHE DANS LA MODALE rattaché à la classe : modal-03Container-Header-Class :
  const photographerNameClass = document.querySelector(
    '.modal-03Container-Header-Class'
  );
  const formDomModel = model.displayModalDOMPhotographerName();
  photographerNameClass.appendChild(formDomModel);

  //-------------------------------------------------------------------
  // Appel de la fonction : displayGallery()
  // qui filtre le tableau des medias en fonction de l'id du photographe

  await displayGallery(
    onePhotographerDatas,
    filterMediaOfOnePhotographer.sort((a, b) => {
      return b.likes - a.likes;
    })
  );

  //-------------------------------------------------------------------
  // Appel de la fonction : filterMedia()
  await filterMedia(onePhotographerDatas, filterMediaOfOnePhotographer);
} // fin de la fonction : constructorPhotographerPage()

//-------------------------------------------------------------------
// FONCTION : displayGallery() affiche la galerie d'un photographe sur la page web
async function displayGallery(onePhotographer, onePhotographerMedias) {
  //
  // La classe ciblée dans le DOM.
  const classe_Cliblee = document.querySelector('.grid-gallery-container');

  //
  classe_Cliblee.textContent = '';
  onePhotographerMedias.forEach((allGalleryImages) => {
    //
    // Création d'un objet de ma media Factory
    const mediaFactoryInstance = mediaFactory(
      onePhotographer,
      allGalleryImages
    );

    // Appel la méthode = displayGalleryDOM()
    const model_GalleryImagesDOM = mediaFactoryInstance.displayGalleryDOM();

    // Ajouter la méthode au DOM
    // La classe ciblée devient le PARENT de mon MODÉLE
    classe_Cliblee.appendChild(model_GalleryImagesDOM);
  });
}

//-------------------------------------------------------------------
// FONCTION : filterMedia() qui gère le scrollingMenu
async function filterMedia(onePhotographerDatas, sortDatasMedia) {
  document.querySelectorAll('.select-items div').forEach((element) => {
    element.addEventListener('click', async (e) => {
      console.log(e.target);
      const sortMedias = e.target.textContent;
      sortDatasMedia.sort((a, b) => {
        if (sortMedias === 'Popularité') {
          return b.likes - a.likes;
        }

        if (sortMedias === 'Date') {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }

        if (sortMedias === 'Titre') {
          return a.title.localeCompare(b.title);
        }
      });
      await displayGallery(onePhotographerDatas, sortDatasMedia);
    });
  });

  const scrollingMenuSection_Id = document.querySelector(
    '#scrolling-menu-id',
    'select'
  );

  scrollingMenuSection_Id.addEventListener('change', async function (e) {});
  console.log(sortDatasMedia);
}


constructorPhotographerPage();
