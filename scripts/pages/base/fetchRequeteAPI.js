/*
LA FONCTION : fecthGetPhotographers()
(1) Est une requête "fetch" qui cible le fichier json : "photographers.json"
(2) Toutes les données du fichier JSON sont stockées dans la constante nommé : data, sous la forme d'un tableau.
(3) La fonction retourne les données du tableau.
*/

async function fecthGetPhotographers() {
  const response = await fetch('./data/photographers.json'); // (1)
  const data = await response.json(); // (2)
  return data; // (3)
}