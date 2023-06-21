/*
LA FONCTION : init()
Récupère uniquement les données liées au tableau d'objets : "photographers" (pas les "media")
du fichier JSON, depuis la fonction : getFetchDatasPhotographersJSON()
Et affiche ces données, en faisant appel à la fonction : displayData.
*/
async function initIndex() {
  const dataBase = await getFetchDatasPhotographersJSON();
  const dataCible = dataBase.photographers;
  displayData(dataCible);
}
initIndex();
//

/*
LA FONCTION : displayData() affiche les données de chaque photographe :
(1) En récupérant uniquement les données liées au tableau d'objets : "photographers"
via le paramètre : NameDataCible de la fonction displayData(dataCible), définie dans int().
(2) On boucle sur "photgraphers" et avec ses données on construit le DOM via : getUserCardDOM().
*/

// (1) "dataCible" = "NameDataCible" = "photographers"
async function displayData(NameDataCible) {
  const photographersSection = document.querySelector('.photographer_section');

  // (2)
  NameDataCible.forEach((allPhotographers) => {
    const photographerModel = photographerFactory(allPhotographers);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}
