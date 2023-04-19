function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;
  const setPicture = `assets/photographers/${portrait}`;
 

  function getUserCardDOM() {
    // Création balise <article> à la classe : "photographer_section".
    const article = document.createElement('article');

    // Boucle sur les images
    

    // Création balise <img> auquel on attribue la variable "portrait"
    const img = document.createElement('img');
    img.setAttribute('src', setPicture);

    // Création balise <H2> auquel on attribue la variable "name"
    const h2 = document.createElement('h2');
    h2.textContent = name;

    // Création balise <p> auquel on attribue la variable "city"
    const pCity = document.createElement('p');
    pCity.textContent = city;

    // Création balise <p> auquel on attribue la variable "country"
    const pCountry = document.createElement('p');
    pCountry.textContent = country;

    // Création balise <p> auquel on attribue la variable "tagline"
    const pTagline = document.createElement('p');
    pTagline.textContent = tagline;

    // Création balise <p> auquel on attribue la variable "price"
    const pPrice = document.createElement('p');
    pPrice.textContent = price;

    // Rattachement des éléments créé aux DOM.
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(pCity);
    article.appendChild(pCountry);
    article.appendChild(pTagline);
    article.appendChild(pPrice);

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
    setPicture,
    getUserCardDOM,
  };
}

/*
    "name": "Mimi Keel",
    "id": 243,
    "city": "London",
    "country": "UK",
    "tagline": "Voir le beau dans le quotidien",
    "price": 400,
    "portrait": "MimiKeel.jpg"

 */
