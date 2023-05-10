function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  const getPortrait = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    //
    //Création d'un lien <a> qui fait office de container parent, aqui engloble l'image et le h2.
    const aElement = document.createElement('a');
    aElement.setAttribute('href', './photographer.html?id=' + id);

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
  };
}
