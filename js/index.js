 
const menuBurguer = document.querySelector('#menu-burguer-icon'); 
const navBurguer = document.querySelector('#menu-burguer'); 
const form = document.querySelector('#form');
const inputLink = document.querySelector('#input-link');
const inputSubmit = document.querySelector('#input-submit');
const containerInputLink = document.querySelector('#container-input-link');
const containerInputSubmit = document.querySelector('#container-input-submit');
const resultado = document.querySelector('#resultado');
let urls = [];
document.addEventListener('DOMContentLoaded', () => {
  urls = JSON.parse(localStorage.getItem('urls')) || [];
  insertarHtml(urls);
  menuBurguer.addEventListener('click', menuBurguerClick);
  form.addEventListener('submit', inputSubmitClick);
});

function inputSubmitClick(e) {
  e.preventDefault();

  
  const alerta = document.querySelector('.text-small');
  const urlsI = {
    id: Date.now(),
    url: inputLink.value,
  }

  if(!alerta) {
    const parrafoError = document.createElement('p');
    parrafoError.classList.add('text-red', 'margin-none', 'text-small' );
    parrafoError.textContent = 'Please add a link'

  
    if(urlsI.url.length === 0) {
      inputLink.classList.add('border-red', 'text-red');
      inputSubmit.classList.add('margin-bottom');
      containerInputLink.appendChild(parrafoError);
    } else {
      urls.push(urlsI);
      consultarAPI(urlsI.url);
      
    }
    setTimeout(() => {
      inputLink.classList.remove('border-red', 'text-red');
      inputSubmit.classList.remove('margin-bottom');
      parrafoError.remove();
    }, 3000);
  }
  form.reset();
}

function consultarAPI(urlInput) {
  const url = `https://api.shrtco.de/v2/shorten?url=${urlInput}/very/long/link.html`;
  const urlShort = {
    urlShort: ''
  }

  fetch(url)
        .then(response => response.json())
        .then(data => {
          urlShort.urlShort = data.result.short_link;
          Object.assign(urls[urls.length - 1], urlShort);
          insertarHtml(urls);
        })
        .catch(error => console.log(error));
}

function insertarHtml(datos) {
  console.log(datos)
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
  datos.forEach(dato => {
    const {  url, urlShort } = dato;
    
    const urlsMax = url.slice(0, 60);

    const div = document.createElement('div');
    div.classList.add('container-resultado');
    div.innerHTML = `
      <p>${urlsMax}</p>
      <div class="container-copy">
        <a href="${url}">${urlShort}</a>
        <div class="copy-x">
          <input class="input-submit button-copy" type="submit" value="Copy" id="input-submit-copy">
          <i class="far fa-times-circle icon-close" id="icon-close"></i>
        </div>
      </div>
    `;
    resultado.appendChild(div);
  });

  sincronizarStorage();

}
function sincronizarStorage() {
  localStorage.setItem('urls', JSON.stringify(urls));
}

function menuBurguerClick(e) {
  e.preventDefault();
  navBurguer.classList.toggle('active');
}

