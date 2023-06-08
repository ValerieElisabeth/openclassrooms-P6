function mediaFactory(data) {
  const { id, photographerId, title, image, likes, date, price } = data;

  const getGallery = `assets/images/' ${(id, image)}`;

  function getGalleryDOM() {
    const article = document.createElement('article');
    article.classList.add('card-container');
    article.classList.add('d-flex');
    article.classList.add('fd-c');
    article.classList.add('jc-sb');

    // Création d'un container pour l'image, afin de gérer l'agrandissement des portaits dans leur block
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    imgContainer.classList.add('d-flex');
    imgContainer.classList.add('ai-c');
    imgContainer.classList.add('jc-c');

    // Création balise <img> auquel on attribue la variable "getGallery"
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', getGallery);
    imgElement.setAttribute('aria-label', title);
    imgElement.setAttribute('alt', 'galerie image du photographe ');

    // Container secondaire à la balise "article".
    // Il englobe toutes les informations sous l'image.
    const infosContainer = document.createElement('div');
    infosContainer.classList.add('infos-container');
    infosContainer.classList.add('d-flex');
    infosContainer.classList.add('fd-r');
    infosContainer.classList.add('jc-sb');

    // Création balise <H2> auquel on attribue la variable "name"
    const h2Element = document.createElement('h2');
    h2Element.classList.add('picture-title');
    h2Element.classList.add('h2-element-title-img');
    h2Element.textContent = title;

    const noteContainer = document.createElement('div');
    noteContainer.classList.add('note-container');
    noteContainer.classList.add('d-flex');
    noteContainer.classList.add('fd-r');
    noteContainer.classList.add('jc-sb');

    // Création balise <p> auquel on attribue la variable "city"
    const pNote = document.createElement('p');
    pNote.classList.add('p-note');
    pNote.textContent = likes;

    // Création balise <p> auquel on attribue la variable "tagline"
    const pHeart = document.createElement('p');
    pHeart.classList.add('p-heart');

    // RATTACHER LES ÉLÉMENTS AU DOM
    article.appendChild(imgContainer);
    article.appendChild(infosContainer);
    imgContainer.appendChild(imgElement);
    infosContainer.appendChild(h2Element);
    infosContainer.appendChild(noteContainer);
    noteContainer.appendChild(pNote);
    noteContainer.appendChild(pHeart);

    // La fonction retourne un DOM, mis en page, dans la balise <article>.
    return article;
  } // fin fonction()

  return {
    id,
    photographerId,
    title,
    image,
    likes,
    date,
    price,
    getGalleryDOM,
  };
}
