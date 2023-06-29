function scrollingMenuFactory(data) {
  const { id, photographerId, title, image, video, likes, date, price } = data;

  function displayScrollingMenu() {
    const sectionElement = document.createElement('section');
    sectionElement.classList.add('scrolling-menu-class', 'd-flex', 'fd-r', 'mb-20');

    const h3Element = document.createElement('h3');
    h3Element.classList.add('select-label');
    h3Element.textContent = 'Trier par';

    const customSelectElement = document.createElement('div');
    customSelectElement.classList.add('custom-select');

    const selectElement = document.createElement('select');
    const optionValues = ['Popularité', 'Date', 'Titre'];

    optionValues.forEach((optionValue) => {
      const optionElement = document.createElement('option');
      optionElement.value = optionValue.toLowerCase();
      optionElement.textContent = optionValue;
      selectElement.appendChild(optionElement);
    });

    const selectedOptionElement = document.createElement('div');
    selectedOptionElement.classList.add('select-selected');
    selectedOptionElement.innerHTML = selectElement.options[0].innerHTML;
    customSelectElement.appendChild(selectedOptionElement);

    const optionsContainerElement = document.createElement('div');
    optionsContainerElement.classList.add('select-items', 'select-hide');
    optionValues.forEach((optionValue, index) => {
      const optionElement = document.createElement('div');
      optionElement.innerHTML = optionValue;
      optionElement.addEventListener('click', function (e) {
        selectElement.selectedIndex = index;
        selectedOptionElement.innerHTML = this.innerHTML;
        selectedOptionElement.click();
      });
      optionsContainerElement.appendChild(optionElement);
    });
    customSelectElement.appendChild(optionsContainerElement);

    selectedOptionElement.addEventListener('click', function (e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle('select-hide');
      this.classList.toggle('select-arrow-active');
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

    document.addEventListener('click', closeAllSelect);

    sectionElement.appendChild(h3Element);
    sectionElement.appendChild(customSelectElement);

    return sectionElement;
  }

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
