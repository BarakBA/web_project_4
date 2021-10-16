
let name = document.querySelector('[name="user-name"]');
let about = document.querySelector('[name="user-about"]');

let editName = document.querySelector(".edit-profile__name");
let editAbout = document.querySelector(".edit-profile__about");

let overlay = document.querySelector(".overlay");

let edit = document.querySelector(".profile__edit-button");
let save = document.querySelector(".edit-profile__save-button");
let cancel = document.querySelector(".edit-profile__cancel-button");


function editClick() {
  editName.value = name.textContent;
  editAbout.value = about.textContent;
  overlay.classList.add("overlay_show");
}

function saveClick() {
  name.textContent = editName.value;
  about.textContent = editAbout.value;
  overlay.classList.remove("overlay_show");
  event.preventDefault();
}

function cancelClick() {
  editProfile.classList.remove("edit-profile_show");
  overlay.classList.remove("overlay_show");
}

edit.addEventListener("click", editClick); 
save.addEventListener("submit", saveClick); 
cancel.addEventListener("click", cancelClick);
