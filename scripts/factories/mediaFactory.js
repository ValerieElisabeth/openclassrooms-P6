function mediaFactory(datasPhotographers, datasMedia) {
  // JSON : photographers
  const { name, id, city, country, tagline, priceByDay, portrait } =
    datasPhotographers;
  // JSON : media
  const {
    pictureId,
    photographerId,
    title,
    image,
    video,
    likes,
    date,
    picturePrice,
  } = datasMedia;

  // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //

  function displayGalleryDOM() {
    const article = document.createElement('article');
    article.classList.add('card-container');
    article.classList.add('d-flex');
    article.classList.add('fd-c');
    article.classList.add('jc-sb');

    // Création d'un container pour l'image, afin de gérer l'agrandissement des portaits dans leur block
    const mediaContainer = document.createElement('div');
    mediaContainer.classList.add('img-container');
    mediaContainer.classList.add('d-flex');
    mediaContainer.classList.add('ai-c');
    mediaContainer.classList.add('jc-c');

    // Vérifier si c'est une image ou une vidéo
    if (image) {
      const getGallery = `assets/images/${name}/${image}`;

      // Création balise <img> auquel on attribue la variable "getGallery"
      const imgElement = document.createElement('img');
      imgElement.classList.add('img-size');
      imgElement.setAttribute('src', getGallery);
      imgElement.setAttribute('aria-label', title);
      imgElement.setAttribute('alt', 'galerie image du photographe');

      // Ajouter l'élément image au container multimédia
      mediaContainer.appendChild(imgElement);
      //
    } else if (video) {
      const getVideo = `assets/images/${name}/${video}`;

      // Création balise <video> auquel on attribue la variable "getGallery"
      const videoElement = document.createElement('video');
      videoElement.classList.add('video-size');
      videoElement.setAttribute('aria-label', title);
      videoElement.setAttribute('alt', 'galerie vidéo du photographe');
      videoElement.setAttribute('autoplay', true);
      videoElement.setAttribute('controls', true);

      const sourceElement = document.createElement('source');
      sourceElement.setAttribute('src', getVideo);
      sourceElement.setAttribute('type', 'video/mp4');
      videoElement.appendChild(sourceElement);
      // Ajouter l'élément vidéo au container multimédia
      mediaContainer.appendChild(videoElement);
    }

    // Container secondaire à la balise "article".
    // Il englobe toutes les informations sous l'image.
    const infosContainer = document.createElement('div');
    infosContainer.classList.add(
      'infos-container',
      'd-flex',
      'fd-r',
      'jc-sb',
      'ai-c'
    );

    // Création balise <H2> auquel on attribue la variable "name"
    const h2Element = document.createElement('h2');
    h2Element.classList.add('picture-title', 'h2-element-title-img');
    h2Element.textContent = title;

    const noteContainer = document.createElement('div');
    noteContainer.classList.add('note-container', 'd-flex', 'fd-r', 'jc-sb');

    // Création balise <p> auquel on attribue la variable "city"
    const pNote = document.createElement('p');
    pNote.classList.add('p-note', 'd-flex', 'jc-c', 'ai-c');
    pNote.textContent = likes;

    // Création balise <p> auquel on attribue la variable "tagline"
    const pHeart = document.createElement('p');
    pHeart.classList.add('p-heart', 'd-flex', 'jc-c', 'ai-c');

    // Création balise <i> l'icône du coeur.
    const iElement = document.createElement('i');
    iElement.classList.add('fa-sharp', 'fa-solid', 'fa-heart');

    // RATTACHER LES ÉLÉMENTS AU DOM
    article.appendChild(mediaContainer);
    article.appendChild(infosContainer);
    // mediaContainer.appendChild(imgElement);
    infosContainer.appendChild(h2Element);
    infosContainer.appendChild(noteContainer);
    noteContainer.appendChild(pNote);
    noteContainer.appendChild(pHeart);
    pHeart.appendChild(iElement);

    // La fonction retourne un DOM, mis en page, dans la balise <article>.
    return article;
  } // fin fonction : displayGalleryDOM()

  // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //

  function displayScrollingMenu() {
    // Création de la section principal auquel sera rattaché tous les autres éléments.
    const sectionElement = document.createElement('section');
    sectionElement.classList.add(
      'scrolling-menu-container',
      'd-flex',
      'fd-r',
      'mb-20'
    );

    // Cibler le titre du selecteur :
    const h3Element = document.createElement('h3');
    h3Element.innerText = 'Trier par';
    h3Element.classList.add('select-label');

    // Création de l'élément div avec la classe select-container :
    const customSelectElement = document.createElement('div');
    customSelectElement.classList.add('select-container');

    // Création de l'élément select et ses options 'Popularité', 'Date' et 'Titre'
    const selectElement = document.createElement('select');
    const allOptionsValues = ['Popularité', 'Date', 'Titre'];

    allOptionsValues.forEach((optionValue) => {
      const optionElement = document.createElement('option');
      optionElement.value = optionValue.toLowerCase();
      optionElement.textContent = optionValue;
      selectElement.appendChild(optionElement);
    });

    // Création de l'élément div avec la classe select-selected :
    const selectedOptionElement = document.createElement('div');
    selectedOptionElement.classList.add('select-selected');
    selectedOptionElement.innerHTML = selectElement.options[0].innerHTML;
    customSelectElement.appendChild(selectedOptionElement);

    // Création d'une DIV container avec les options du menu déroulant :
    const optionsContainerElement = document.createElement('div');
    optionsContainerElement.classList.add('select-items', 'select-hide');

    allOptionsValues.forEach((optionValue, index) => {
      const optionElement = document.createElement('div');
      optionElement.innerHTML = optionValue;

      // Gestion de la sélection d'une option :
      optionElement.addEventListener('click', function (e) {
        selectElement.selectedIndex = index;
        selectedOptionElement.innerHTML = this.innerHTML;
        selectedOptionElement.click();
      });

      optionsContainerElement.appendChild(optionElement);
    });

    customSelectElement.appendChild(optionsContainerElement);

    // Gestion de l'ouverture et de la fermeture du menu déroulant :
    selectedOptionElement.addEventListener('click', function (e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle('select-hide');
      this.classList.toggle('select-arrow-active');
      customSelectElement.classList.toggle('open');
    });

    function closeAllSelect(element) {
      const optionContainers = document.querySelectorAll('.select-items');
      const selectedOptions = document.querySelectorAll('.select-selected');

      Array.from(selectedOptions).forEach((selectedOption) => {
        if (element !== selectedOption) {
          selectedOption.classList.remove('select-arrow-active');
        }
      });

      Array.from(optionContainers).forEach((optionContainer) => {
        if (optionContainer.previousElementSibling !== element) {
          optionContainer.classList.add('select-hide');
        }
      });
    }

    // Fermer tous les menus déroulants lorsqu'un clic est effectué en dehors.
    document.addEventListener('click', closeAllSelect);

    // Ajout des éléments à la section
    sectionElement.appendChild(h3Element);
    sectionElement.appendChild(customSelectElement);

    // Retourne la section qui contient toute la construction du select.
    return sectionElement;
  } // fin fonction : displayScrollingMenu()

  // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //

  function displayStatResults(totalLikes) {
    // Construction de la section des statistiques
    const statisticalsWindowContainer = document.createElement('div');
    statisticalsWindowContainer.classList.add(
      'statisticals',
      'container-04',
      'p-fixed',
      'd-flex',
      'jc-sb',
      'ai-c'
    );

    const div_Element = document.createElement('div');
    div_Element.classList.add('d-flex', 'jc-sb');
    //

    const p_iDisplayContainer = document.createElement('p');
    p_iDisplayContainer.classList.add('d-flex', 'ai-c', 'jc-c');

    const i_Element = document.createElement('i');
    i_Element.classList.add(
      'i-heart-stats',
      'fa-sharp',
      'fa-solid',
      'fa-heart'
    );

    //
    const p_ElementTotalLikes = document.createElement('p');
    p_ElementTotalLikes.classList.add('stats-p', 'd-flex', 'ai-c', 'jc-c');
    p_ElementTotalLikes.textContent = totalLikes;

    const p_ElementPriceDay = document.createElement('p');
    p_ElementPriceDay.classList.add('stats-p');
    p_ElementPriceDay.textContent = priceByDay + '€/jour';

    statisticalsWindowContainer.appendChild(div_Element);
    div_Element.appendChild(p_ElementTotalLikes);
    statisticalsWindowContainer.appendChild(p_ElementPriceDay);
    div_Element.appendChild(p_iDisplayContainer);
    p_iDisplayContainer.appendChild(i_Element);

    return statisticalsWindowContainer;
  }

  return {
    name,
    id,
    city,
    country,
    tagline,
    priceByDay,
    portrait,
    //
    pictureId,
    photographerId,
    title,
    image,
    video,
    likes,
    date,
    picturePrice,
    displayGalleryDOM,
    displayScrollingMenu,
    displayStatResults,
  };
}
