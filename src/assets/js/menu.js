// Obtén el botón de menú y el contenedor del menú
const menuButton = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// Agrega un evento de clic al botón
menuButton.addEventListener('click', function() {
  // Alterna la visibilidad del menú
  menu.classList.toggle('hidden');
});
