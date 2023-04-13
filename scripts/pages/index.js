async function getPhotographers() {
  // Requête fetch qui cible le fichier json : "photographers.json"
  const jsonTabResponse = await fetch('./data/photographers.json');
  if (!jsonTabResponse.ok) {
    console.lgo('Erreur lors de la récupération des photographes');
  }
  const data = await jsonTabResponse.json();
  console.log(data); // les données du fichier JSON sont récupérés sous forme de tableau, nommé : data

  // et bien retourner le tableau photographers seulement une fois récupéré
  return data;
}

console.log(getPhotographers());

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
  console.log(photographers)
}

init();
