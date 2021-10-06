
let name = document.querySelector(".profile__name");
let about = document.querySelector(".profile__about");

let editName = document.querySelector(".edit-profile__name");
let editAbout = document.querySelector(".edit-profile__about");

let editProfile = document.querySelector(".edit-profile");
let overlay = document.querySelector(".overlay");

let edit = document.querySelector(".profile__edit-button");
let save = document.querySelector(".edit-profile__save-button");
let cancel = document.querySelector(".edit-profile__cancel-button");


function editClick() {
  editName.value = name.textContent;
  editAbout.value = about.textContent;
  editProfile.classList.add("edit-profile_show");
  overlay.classList.add("overlay_show");
}
edit.addEventListener("click", editClick); 

function saveClick() {
  name.textContent = editName.value;
  about.textContent = editAbout.value;
  editProfile.classList.remove("edit-profile_show");
  overlay.classList.remove("overlay_show");
}
save.addEventListener("click", saveClick); 


function cancelClick() {
  editProfile.classList.remove("edit-profile_show");
  overlay.classList.remove("overlay_show");
}
cancel.addEventListener("click", cancelClick);
