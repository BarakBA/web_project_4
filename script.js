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
const cardsContainer = document.querySelector(".picture-cards");
const cardTemplate = document.querySelector("#card").content;


const editProfile = document.querySelector(".profile__edit-button");
const overlayEditProfile = document.querySelector('[name="edit-profile-overlay"]');
const updateProfileForm = document.querySelector('[name="update-profile"]');
const name = document.querySelector(".profile__name");
const about = document.querySelector(".profile__about");
const editName = document.querySelector('[name="user-name"]');
const editAbout = document.querySelector('[name="user-about"]');
const cancelEdit = document.querySelector('[name="close-edit-form"]');


const addCard = document.querySelector(".profile__add-card-button");
const overlayAddCard = document.querySelector('[name="add-card-overlay"]');
const addCardForm = document.querySelector('[name="add-card"]');
const newCardTitle = document.querySelector('[name="card-title"]');
const newCardImgLink = document.querySelector('[name="card-img-link"]');
const cancelNewCard = document.querySelector('[name="close-new-card-form"]');


const overlayPic = document.querySelector('[name="big-picture"]');


function newCard(image, text){
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector(".card__image").src = image;
  cardElement.querySelector(".card__text").textContent = text;
  cardsContainer.prepend(cardElement);


  const likeButton = document.querySelector(".card__like-button");
  likeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("card__like-button_filled");
  });

  const delCardButton = document.querySelector(".card__del-button");
  delCardButton.addEventListener("click", function (evt) {
    evt.target.closest(".card").remove();
  });

  const img = document.querySelector(".card__image");
  img.addEventListener("click", function (evt) {
    evt.target.classList.add(".big-picture");/************* */
  });
}
function setInitialCards(cardsArray){
  for(let i = initialCards.length - 1; i >=0; i--){
    newCard(cardsArray[i].link, cardsArray[i].name);
  }
}
setInitialCards(initialCards);

function editProfileClick() {
  editName.value = name.textContent;
  editAbout.value = about.textContent;
  overlayEditProfile.classList.add("overlay_show");
}
function saveClick(event) {
  event.preventDefault();

  name.textContent = editName.value;
  about.textContent = editAbout.value;

  overlayEditProfile.classList.remove("overlay_show");
}

function showCardForm() { 
  newCardImgLink.value = "";
  newCardTitle.value = "";
  overlayAddCard.classList.add("overlay_show");
}
function createCard(){
  event.preventDefault();

  newCard(newCardImgLink.value ,newCardTitle.value);
  overlayAddCard.classList.remove("overlay_show");
}

function cancelClick() {
  overlayEditProfile.classList.remove("overlay_show");
  overlayAddCard.classList.remove("overlay_show");
}


editProfile.addEventListener("click", editProfileClick); 
updateProfileForm.addEventListener("submit", saveClick); 
addCardForm.addEventListener("submit", createCard);
cancelEdit.addEventListener("click", cancelClick);
cancelNewCard.addEventListener("click", cancelClick)
addCard.addEventListener("click", showCardForm);
