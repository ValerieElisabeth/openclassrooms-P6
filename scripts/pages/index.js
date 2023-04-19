async function getPhotographers() {
  // Requête fetch qui cible le fichier json : "photographers.json"
  const jsonTabResponse = await fetch('./data/photographers.json');
  if (!jsonTabResponse.ok) {
    console.log('ERREUR récupération données des photographes');
    return;
  }

  // les données du fichier JSON sont récupérés sous forme d'un tableau, nommé : data
  const data = await jsonTabResponse.json();
  console.log(data); // TEST console

  // Retourner le tableau photographers.
  return data;
}

console.log(getPhotographers()); // TEST console


// Boucle forEach sur chaque élément du tableau "data"
async function displayData(data) {
  const photographersSection = document.querySelector('.photographer_section');

  data.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes par le nom de son tableau : "photographers"
  const { photographers } = await getPhotographers();
  displayData(photographers);
  console.log(photographers);
}

init();
