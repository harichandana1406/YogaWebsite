'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
const loginForm=document.getElementById("login-form");
const loginButton=document.querySelector(".submit");
const loginErrorMsg=document.getElementById("login-error-msg");

loginButton.addEventListener("click",(e)=> {
    e.preventDefault();
    const username=loginForm.username.value;
    const password=loginForm.password.value;

    if(username==="One" && password==="mantra123")
    {
       alert("you have successfully logged in.");
        location.reload();
    }
    else{
        loginErrorMsg.style.opacity=1;
    }

})
$(".modal").modal();
function toggleModal() {
 
  alert("Sorry! The Link you're looking for is currently in development phase.So wait for some time till it comes live!");
 
}
/*
 var instance = M.Modal.getInstance($("#modal3"));
  instance.open();
*/