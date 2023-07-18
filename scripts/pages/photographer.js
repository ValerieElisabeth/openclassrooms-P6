// Variable globale pour stocker les médias filtrés
let filteredMedias = [];

window.addEventListener('load', async function () {
  await constructorPhotographerPage();
});

async function constructorPhotographerPage() {
  const fetchDatasPhotographersJSON = await getFetchDatasPhotographersJSON();
  const dataTabPhotographers = fetchDatasPhotographersJSON.photographers;
  const dataTabMediasJSON = fetchDatasPhotographersJSON.media;

  const urlSearchParams = new URLSearchParams(window.location.search);
  const getId_URL = parseInt(urlSearchParams.get('id'));

  const onePhotographerDatas = dataTabPhotographers.find(
    (onePhotographerDatas) => onePhotographerDatas.id === getId_URL
  );

  const displayName = document.querySelector('main');
  const model = photographerFactory(onePhotographerDatas);
  const headerDomModel = model.displayHeaderDOMPhotographer();
  displayName.appendChild(headerDomModel);

  const scrollingMenuSection_Id = document.querySelector('#scrolling-menu-id');
  const modelScrolling = mediaFactory(onePhotographerDatas, dataTabMediasJSON);
  const scrollingDOMModel = modelScrolling.displayScrollingMenu();
  scrollingMenuSection_Id.appendChild(scrollingDOMModel);

  const statisticalsWindow_Id = document.querySelector('#statisticals-window');
  const modelStatistics = mediaFactory(onePhotographerDatas, dataTabMediasJSON);
  const totalLikes = dataTabMediasJSON.reduce((total, media) => {
    if (media.photographerId === getId_URL) {
      return total + media.likes;
    }
    return total;
  }, 0);
  const statisticalsDOMModel = modelStatistics.displayStatResults(totalLikes);
  statisticalsWindow_Id.appendChild(statisticalsDOMModel);

  const photographerNameClass = document.querySelector(
    '.modal-03Container-Header-Class'
  );
  const formDomModel = model.displayModalDOMPhotographerName();
  photographerNameClass.appendChild(formDomModel);

  filteredMedias = dataTabMediasJSON.filter(
    (media) => media.photographerId === getId_URL
  );

  const scrollingMenuSelect = document.querySelector(
    '#scrolling-menu-id select'
  );
  if (scrollingMenuSelect) {
    scrollingMenuSelect.addEventListener('change', function () {
      const sortMedias = scrollingMenuSelect.value;
      // Passer onePhotographerDatas en argument
      filterMedia(sortMedias, onePhotographerDatas);
      displayGallery(onePhotographerDatas);
    });
  }

  displayGallery(onePhotographerDatas);
}

function displayGallery(onePhotographer) {
  const gallerySection = document.querySelector('.grid-gallery-container');
  gallerySection.innerHTML = '';

  const displayedMedias = filteredMedias.filter(
    (media) => media.photographerId === onePhotographer.id
  );

  displayedMedias.forEach((allGalleryImages) => {
    const galleryModel = mediaFactory(onePhotographer, allGalleryImages);
    const galleryImagesDOM = galleryModel.displayGalleryDOM();
    gallerySection.appendChild(galleryImagesDOM);
  });
}

function filterMedia(sortMedias, onePhotographerDatas) {
  let sortedMedias = [...filteredMedias];

  if (sortMedias.toLowerCase() === 'popularité') {
    sortedMedias.sort((a, b) => b.likes - a.likes);
  } else if (sortMedias.toLowerCase() === 'date') {
    sortedMedias.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } else if (sortMedias.toLowerCase() === 'titre') {
    sortedMedias.sort((a, b) => a.title.localeCompare(b.title));
  }

  filteredMedias = sortedMedias;

  // Mettre à jour filteredMedias après le tri
  displayGallery(onePhotographerDatas);
}