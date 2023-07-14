/*
LA FONCTION : constructorIndex()
Récupère uniquement les données liées au tableau d'objets : "photographers" (pas les "media")
du fichier JSON, depuis la fonction : getFetchDatasPhotographersJSON()
Et affiche ces données, en faisant appel à la fonction : displayData.
*/
async function constructorIndex() {
  const dataBase = await getFetchDatasPhotographersJSON();
  const dataCible_Photographers = dataBase.photographers;
  displayData(dataCible_Photographers);
}
constructorIndex();
//

/*
LA FONCTION : displayData() affiche les données de chaque photographe :
(1) En récupérant uniquement les données liées au tableau d'objets : "photographers"
via le paramètre : "dataCible_Photographers" de la fonction displayData(dataCible_Photographers), définie dans initIndex.
(2) On boucle sur "photgraphers" et avec ses données on construit le DOM via : displayPhotographerCardDOM().
*/

// (1) "dataCible_Photographer" = Le tableau des photographes
async function displayData(dataCible_Photographers) {
  const photographersSection = document.querySelector('.photographer_section');

  // (2)
  dataCible_Photographers.forEach((allPhotographers) => {
    const photographerModel = photographerFactory(allPhotographers);
    const userCardDOM = photographerModel.displayPhotographerCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}
