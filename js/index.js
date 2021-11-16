
const menuBurguer = document.querySelector('#menu-burguer-icon'); 

document.addEventListener('DOMContentLoaded', () => {
  menuBurguer.addEventListener('click', menuBurguerClick);
});

function menuBurguerClick(e) {
  e.preventDefault();
  console.log('hola')
}

