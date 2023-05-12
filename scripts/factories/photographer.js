function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  const getPortrait = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    /*
    (1) Création d'un lien <a> qui fait office de container parent, qui engloble l'image et le h2.
    (2) Le lien redirige vers la page : photographer.html
    */
    const aElement = document.createElement('a'); // (1)
    aElement.setAttribute('href', './photographer.html?id=' + id); // (2)

    // Création d'un container à l'image, afin de gérer l'agrandissement des portaits dans leur block
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('imgContainer');

    // Création balise <img> auquel on attribue la variable "portrait"
    const img = document.createElement('img');
    img.setAttribute('src', getPortrait);

    // Création balise <H2> auquel on attribue la variable "name"
    const h2 = document.createElement('h2');
    h2.textContent = name;

    // Container secondaire à la balise "article".
    // Il englobe toutes les données après le nom des photographes.
    const infosContainer = document.createElement('div');
    infosContainer.classList.add('infosContainer');

    //---------------------------------------------//

    // Container qui englobe la ville et le pays.
    const divCityCountryContainer = document.createElement('div');
    divCityCountryContainer.classList.add('divCityCountryContainer');

    // Création balise <p> auquel on attribue la variable "city"
    const pCity = document.createElement('p');
    pCity.textContent = city;

    // Création balise <p> auquel on attribue la variable "country"
    const pCountry = document.createElement('p');
    pCountry.textContent = country;

    //---------------------------------------------//

    // Container des autres informations
    const otherInfosContainer = document.createElement('div');
    otherInfosContainer.classList.add('otherInfosContainer');

    // Création balise <p> auquel on attribue la variable "tagline"
    const pTagline = document.createElement('p');
    pTagline.textContent = tagline;
    pTagline.classList.add('tagline');

    // Création balise <p> auquel on attribue la variable "price"
    const pPrice = document.createElement('p');
    pPrice.textContent = price + '€/jour';
    pPrice.classList.add('price');

    // Rattachement des éléments créé aux DOM.
    // Création de la balise <article> qui sera rattachée à la classe : "photographer_section" en CSS.
    const article = document.createElement('article');
    article.appendChild(aElement);
    aElement.appendChild(imgContainer);
    imgContainer.appendChild(img);
    article.appendChild(h2);
    article.appendChild(infosContainer);
    infosContainer.appendChild(divCityCountryContainer);
    divCityCountryContainer.appendChild(pCity);
    divCityCountryContainer.appendChild(pCountry);
    infosContainer.appendChild(otherInfosContainer);
    otherInfosContainer.appendChild(pTagline);
    otherInfosContainer.appendChild(pPrice);

    // La fonction retourne les valeurs contenue dans la balise <article>
    return article;
    //
  } // fin fonction : getUserCardDOM()

  function displayHeaderDOMPhotographer() {
    // MAIN --------------------------------------------
    // CONTRUCTION DE L'ENTÊTE DE LA PAGE DU PHOTOGRAPHE
    // 1) Créer les éléments du DOM.
    const headerContainer = document.createElement('section');
    headerContainer.classList.add('photograph-header');

    //---------------------------------------------//
    const infoContactContainer = document.createElement('div');
    infoContactContainer.classList.add('infoContactContainer');

    const nameH2 = document.createElement('div');
    nameH2.classList.add('h2');
    nameH2.classList.add('photographer-name');
    nameH2.innerText = name;

    const otherInfos = document.createElement('div');
    otherInfos.classList.add('otherInfos');

    // Container qui englobe la ville et le pays.
    const cityCountryContainer = document.createElement('div');
    cityCountryContainer.classList.add('cityCountryContainer');

    // Création balise <p> auquel on attribue la variable "city"
    const pCity = document.createElement('p');
    pCity.textContent = `${city},\u00A0`;

    // Création balise <p> auquel on attribue la variable "country"
    const pCountry = document.createElement('p');
    pCountry.textContent = country;

    // Création balise <p> auquel on attribue la variable "tagline"
    const pTagline = document.createElement('p');
    pTagline.textContent = tagline;
    pTagline.classList.add('pTagline');

    //---------------------------------------------//

    const button = document.createElement('button');
    button.classList.add('contact_button');
    button.innerText = 'Contactez-moi';
    button.addEventListener('click', () => {
      displayModal();
    });

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('apparenceContainer');
    const img = document.createElement('img');
    img.setAttribute('src', getPortrait);
    imgContainer.appendChild(img);

    //---------------------------------------------//
    // 2) Lier les éléments du DOM entre eux.
    const mainSection = document.querySelector('main');
    mainSection.appendChild(headerContainer);

    headerContainer.appendChild(infoContactContainer);
    infoContactContainer.appendChild(nameH2);
    infoContactContainer.appendChild(otherInfos);
    cityCountryContainer.appendChild(pCity);
    cityCountryContainer.appendChild(pCountry);
    otherInfos.appendChild(cityCountryContainer);
    otherInfos.appendChild(pTagline);

    headerContainer.appendChild(button);
    headerContainer.appendChild(imgContainer);
    imgContainer.appendChild(img);

    return mainSection;
  }

  return {
    name,
    id,
    city,
    country,
    tagline,
    price,
    getPortrait,
    getUserCardDOM,
    displayHeaderDOMPhotographer,
  };
}
