/*
LA FONCTION : init()
(1) On stocke notre requete Ftech dans la variable : dataBase)
(2) On cible le tableau d'objets qui nous intéresse : "photographers"
(3) La console confirme bien l'existence de notre tabeau : "photographers"
(4) Utilisation de l'objet : URLSearch Params pour récupérer des données depuis l'URL.
(5) On cible ensuite le paramètre de l'URL que nous vouslons utiliser et dans notre cas c'est l'ID.
    Et grâce à la fonction : parseInt() le type Number de mon ID sera confirmé car l'objet URLSearchParams, renvoi des strings.
(6) La console confirme que le type renvoyé de mon ID est un monbre.
(7) Avec la méthode find(), on cible uniquement la donnée qui nous interesse avec une condition.
*/

async function init() {
  const dataBase = await fetchGetPhotographers(); // (1)
  const dataCible = dataBase.photographers; // (2)
  console.log(dataCible); // (3)

  const urlSearchParams = new URLSearchParams(window.location.search); // (4)
  const getId = parseInt(urlSearchParams.get('id')); // (5)
  console.log(typeof getId); // (6)

  const getNameId = dataCible.find(
    (onePhotographer) => onePhotographer.id === getId
  ); // (7)
  console.log(getNameId.name);

  const displayName = document.querySelector('main');
  const model = photographerFactory(getNameId);
  const headerDomModel = model.displayHeaderDOMPhotographer();
  displayName.appendChild(headerDomModel);
}
init();
//