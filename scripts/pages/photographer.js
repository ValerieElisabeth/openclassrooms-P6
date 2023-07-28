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

  //
  // AFFICHAGE DU HEADER DE PRÉSENTATION DU PHOTOGRAPHE rattaché sur le "main" :
  const displayName = document.querySelector('main');
  const model = photographerFactory(onePhotographerDatas);
  const headerDomModel = model.displayHeaderDOMPhotographer();
  displayName.appendChild(headerDomModel);

  // A   S U P P R I M E R
  // AFFICHAGE DU MENU "SELECT" DÉROULANT rattaché sur l'ID : scrolling-menu-id :

  const scrollingMenuSection_Id = document.querySelector('#scrolling-menu-id');
  const modelScrolling = mediaFactory(onePhotographerDatas, dataTabMediasJSON);
  const scrollingDOMModel = modelScrolling.displayScrollingMenu();
  scrollingMenuSection_Id.appendChild(scrollingDOMModel);

  //
  // AFFICHAGE DES STATISTIQUES rattaché sur l'ID : scrolling-menu-id :

  const filteredMedias = dataTabMediasJSON.filter(
    (media) => media.photographerId === getId_URL
  );
  const totalLikes = filteredMedias.reduce(
    (total, media) => total + media.likes,
    0
  );
  console.log('T O T A L   L I K E S');
  console.log(totalLikes);

  const statisticalsWindow_Id = document.querySelector('#statisticals-window');
  const modelStatistics = mediaFactory(onePhotographerDatas, dataTabMediasJSON);
  const statisticalsDOMModel = modelStatistics.displayStatResults(totalLikes);
  statisticalsWindow_Id.appendChild(statisticalsDOMModel);

  //
  // AFFICHAGE DU NOM DU PHOTOGRAPHE DANS LA MODALE rattaché à la classe : modal-03Container-Header-Class :
  const photographerNameClass = document.querySelector(
    '.modal-03Container-Header-Class'
  );
  const formDomModel = model.displayModalDOMPhotographerName();
  photographerNameClass.appendChild(formDomModel);

  //
  // Appel de la fonction : displayGallery()
  // qui filtre le tableau des medias en fonction de l'id du photographe
  await displayGallery(
    onePhotographerDatas,
    dataTabMediasJSON
      .filter((cibler) => cibler.photographerId === getId_URL)
      .sort((a, b) => {
        return b.likes - a.likes;
      })
  );

  filterMedia(
    onePhotographerDatas,
    dataTabMediasJSON.filter((cibler) => cibler.photographerId === getId_URL)
  );
}

//
// Fonction qui affiche la galerie d'un photographe sur la page web
async function displayGallery(onePhotographer, onePhotographerMedias) {
  const gallerySection = document.querySelector('.grid-gallery-container');
  gallerySection.textContent = '';
  onePhotographerMedias.forEach((allGalleryImages) => {
    const galleryModel = mediaFactory(onePhotographer, allGalleryImages);
    const galleryImagesDOM = galleryModel.displayGalleryDOM();
    gallerySection.appendChild(galleryImagesDOM);
  });
}
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
// FONCTION : filterMedia()

async function filterMedia(onePhotographerDatas, sortDatasMedia) {
  const scrollingMenuSection_Id = document.querySelector(
    '#scrolling-menu-id',
    'select'
  );

  scrollingMenuSection_Id.addEventListener('change', async function (e) {
    const sortMedias = e.target.value;
    sortDatasMedia.sort((a, b) => {
      if (sortMedias === 'popularite') {
        return b.likes - a.likes;
      }

      if (sortMedias === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }

      if (sortMedias === 'title') {
        return a.title.localeCompare(b.title);
      }
    });
    await displayGallery(onePhotographerDatas, sortDatasMedia);
  });
  console.log(sortDatasMedia);
}

constructorPhotographerPage();
