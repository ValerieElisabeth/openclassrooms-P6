function scrollingMenuFactory(data) {
  // Destructuration de l'objet data pour obtenir les variables souhaitées
  const { id, photographerId, title, image, video, likes, date, price } = data;

  function displayScrollingMenu() {
    // Création de l'élément section
    const sectionElement = document.createElement('section');
    sectionElement.classList.add(
      'scrolling-menu-class',
      'd-flex',
      'fd-r',
      'mb-20'
    );

    // Cibler le titre du selecteur :
    const h3Element = document.createElement('h3');
    h3Element.classList.add('select-label');

    // Création de l'élément div avec la classe select-container :
    const customSelectElement = document.createElement('div');
    customSelectElement.classList.add('select-container');

    // Création de l'élément select et ses options 'Popularité', 'Date' et 'Titre'
    const selectElement = document.createElement('select');
    const optionValues = ['Popularité', 'Date', 'Titre'];

    optionValues.forEach((optionValue) => {
      const optionElement = document.createElement('option');
      optionElement.value = optionValue.toLowerCase();
      optionElement.textContent = optionValue;
      selectElement.appendChild(optionElement);
    });

    // Création de l'élément div avec la classe select-selected :
    const selectedOptionElement = document.createElement('div');
    selectedOptionElement.classList.add('select-selected');
    selectedOptionElement.innerHTML = selectElement.options[0].innerHTML;
    customSelectElement.appendChild(selectedOptionElement);

    // Création de l'élément div avec les options du menu déroulant :
    const optionsContainerElement = document.createElement('div');
    optionsContainerElement.classList.add('select-items', 'select-hide');

    optionValues.forEach((optionValue, index) => {
      const optionElement = document.createElement('div');
      optionElement.innerHTML = optionValue;

      // Gestion de la sélection d'une option :
      optionElement.addEventListener('click', function (e) {
        selectElement.selectedIndex = index;
        selectedOptionElement.innerHTML = this.innerHTML;
        selectedOptionElement.click();
      });

      optionsContainerElement.appendChild(optionElement);
    });

    customSelectElement.appendChild(optionsContainerElement);

    // Gestion de l'ouverture et de la fermeture du menu déroulant :
    selectedOptionElement.addEventListener('click', function (e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle('select-hide');
      this.classList.toggle('select-arrow-active');
      customSelectElement.classList.toggle('open');
    });

    function closeAllSelect(element) {
      const optionContainers = document.querySelectorAll('.select-items');
      const selectedOptions = document.querySelectorAll('.select-selected');

      Array.from(selectedOptions).forEach((selectedOption) => {
        if (element !== selectedOption) {
          selectedOption.classList.remove('select-arrow-active');
        }
      });

      Array.from(optionContainers).forEach((optionContainer) => {
        if (optionContainer.previousElementSibling !== element) {
          optionContainer.classList.add('select-hide');
        }
      });
    }

    // Fermer tous les menus déroulants lorsqu'un clic est effectué en dehors.
    document.addEventListener('click', closeAllSelect);

    // Ajout des éléments à la section
    sectionElement.appendChild(h3Element);
    sectionElement.appendChild(customSelectElement);

    // Retourne la section qui contient toute la construction du select.
    return sectionElement;
  }

  // Retourne un objet avec les propriétés et la fonction displayScrollingMenu
  return {
    id,
    photographerId,
    title,
    image,
    video,
    likes,
    date,
    price,
    displayScrollingMenu,
  };
}
