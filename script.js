
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

function setInitialCards(cardsArray){
  ///////////////////////////////
}

setInitialCards(initialCards);////////////////////////////

const cardsContainer = document.querySelector(".picture-cards");
const cardTemplate = document.querySelector("#card").content;
function addCard(image, text){
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector(".card__image").src = image;
  cardElement.querySelector(".card__text").textContent = text;
  cardsContainer.prepend(cardElement);
}
//test V
addCard("https://code.s3.yandex.net/web-code/latemar.jpg", "Vanoise National Park");




const name = document.querySelector(".profile__name");
const about = document.querySelector(".profile__about");

const editName = document.querySelector('[name="user-name"]');
const editAbout = document.querySelector('[name="user-about"]');

const overlay = document.querySelector(".overlay");

const edit = document.querySelector(".profile__edit-button");
const save = document.querySelector(".edit-profile__save-button");
const cancel = document.querySelector(".edit-profile__cancel-button");

const update = document.querySelector('[name="update-profile"]')


function editClick() {
  editName.value = name.textContent;
  editAbout.value = about.textContent;
  overlay.classList.add("overlay_show");
}

function saveClick(event) {
  event.preventDefault();

  name.textContent = editName.value;
  about.textContent = editAbout.value;

  overlay.classList.remove("overlay_show");
}

function cancelClick() {
  overlay.classList.remove("overlay_show");
}

edit.addEventListener("click", editClick); 
update.addEventListener("submit", saveClick); 
cancel.addEventListener("click", cancelClick);
