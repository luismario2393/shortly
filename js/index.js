 
const menuBurguer = document.querySelector('#menu-burguer-icon'); 
const navBurguer = document.querySelector('#menu-burguer'); 

document.addEventListener('DOMContentLoaded', () => {
  menuBurguer.addEventListener('click', menuBurguerClick);
});

function menuBurguerClick(e) {
  e.preventDefault();
  navBurguer.classList.toggle('active');
}

