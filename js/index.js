// Function para alterar a cor da Navbar quando a mesma não estiver dentro do header
window.addEventListener('scroll', navBarColor)
function navBarColor() {
  let wH = window.innerHeight;
  let nav = document.querySelector('nav')

  if (scrollY > wH - 50) {
    nav.style.background = "#2b4068"
  }
  else {
    nav.style.background = '#2d75fb0c'
  }

}

// Function para retornar o menu hamburger após o click em uma ancora
let input = document.querySelector("input#checkbox")
let li = document.querySelectorAll('nav ul li a')
li.forEach(function (item){
  item.onclick = () =>{
    input.checked = false
  }
})

// Function para chamar o mmapa da API google maps
let map
function initMap() {
  var coordenadas = { lat: -5.047545025626878, lng: -42.75877203768939 };

  map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 11,
    center: coordenadas
  });
}

initMap()