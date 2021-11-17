 
const menuBurguer = document.querySelector('#menu-burguer-icon'); 
const navBurguer = document.querySelector('#menu-burguer'); 
const form = document.querySelector('#form');
const inputLink = document.querySelector('#input-link');
const inputSubmit = document.querySelector('#input-submit');
const containerInputLink = document.querySelector('#container-input-link');
const containerInputSubmit = document.querySelector('#container-input-submit');

document.addEventListener('DOMContentLoaded', () => {
  menuBurguer.addEventListener('click', menuBurguerClick);
  form.addEventListener('submit', inputSubmitClick);
});

function inputSubmitClick(e) {
  e.preventDefault();

  const alerta = document.querySelector('.text-small');

  if(!alerta) {
    const parrafoError = document.createElement('p');
    parrafoError.classList.add('text-red', 'margin-none', 'text-small' );
    parrafoError.textContent = 'Please add a link'

  
    if(inputLink.value.length === 0) {
      inputLink.classList.add('border-red', 'text-red');
      inputSubmit.classList.add('margin-bottom');
      containerInputLink.appendChild(parrafoError);
    } 
    setTimeout(() => {
      inputLink.classList.remove('border-red', 'text-red');
      inputSubmit.classList.remove('margin-bottom');
      parrafoError.remove();
    }, 3000);
  }
  form.reset();
}

function menuBurguerClick(e) {
  e.preventDefault();
  navBurguer.classList.toggle('active');
}

