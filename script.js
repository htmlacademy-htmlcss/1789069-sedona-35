let modalContainer = document.querySelector(".modal-container");
let navButton = document.querySelector(".button-nav");
let searchHotel = document.querySelector(".button-search-hotel");
let modalCloseButton = document.querySelector(".modal-close-button");

let wants =[navButton, searchHotel];

wants.forEach(item => item.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (!(modalContainer.classList.contains("modal-container-open"))) {
    modalContainer.classList.add("modal-container-open");
  }
}));


modalCloseButton.addEventListener('click', (e) => {
  e.preventDefault();
  if((modalContainer.classList.contains("modal-container-open"))) {
    modalContainer.classList.remove("modal-container-open");
  }
})
