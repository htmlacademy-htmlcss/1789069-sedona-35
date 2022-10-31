const modalContainer = document.querySelector(".modal-container");
const navButton = document.querySelector(".button-nav");
const searchHotel = document.querySelector(".button-search-hotel");
const modalCloseButton = document.querySelector(".modal-close-button");

const wants =[navButton, searchHotel];

wants.forEach(item => item.addEventListener('click', (e) => {
  e.preventDefault();
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
