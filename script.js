
let name = document.querySelector(".profile__name");
let about = document.querySelector(".profile__about");

let editName = document.querySelector('[name="user-name"]');
let editAbout = document.querySelector('[name="user-about"]');

let overlay = document.querySelector(".overlay");

let edit = document.querySelector(".profile__edit-button");
let save = document.querySelector(".edit-profile__save-button");
let cancel = document.querySelector(".edit-profile__cancel-button");

let update = document.querySelector('[name="update-profile"]')


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
