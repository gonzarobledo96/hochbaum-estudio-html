
// PARRAFO OCULTO
document.addEventListener('DOMContentLoaded', function() {
  const mostrarParrafoBtn = document.getElementById('mostrar-parrafo');
  const parrafoOculto = document.getElementById('parrafo-oculto');

  // Ocultar el párrafo al cargar la página
  parrafoOculto.style.display = 'none';

  mostrarParrafoBtn.addEventListener('click', () => {
      if (parrafoOculto.style.display === 'none') {
          parrafoOculto.style.display = 'block';
          mostrarParrafoBtn.innerHTML = 'Leer menos <i class="fa-solid fa-arrow-up"></i>';
      } else {
          parrafoOculto.style.display = 'none';
          mostrarParrafoBtn.innerHTML = 'Leer descripción completa <i class="fa-solid fa-arrow-down"></i>';
      }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  baguetteBox.run('.compact-gallery', {
      animation: 'slideIn'
  });

  // Modificar el título y eliminar la numeración
  var gallery = document.querySelector('.compact-gallery');
  var overlay = gallery.querySelector('.baguetteBox-overlay');

  if (overlay) {
      // Modificar el título
      var titleElement = overlay.querySelector('.baguetteBox-title');
      if (titleElement) {
          titleElement.textContent = 'Título personalizado';  // Cambiar por el título deseado
      }

      // Eliminar la numeración (opcional)
      var overlayBottomBar = overlay.querySelector('.baguetteBox-bottomBar');
      if (overlayBottomBar) {
          overlayBottomBar.style.display = 'none';  // Ocultar la barra inferior que contiene la numeración
      }
  }
});



// ***************
// FONDO DEL NABAR
// ***************
$(document).ready(function() {
  $(window).scroll(function() {
    var navbar = $('.navbar');
    if ($(this).scrollTop() > 0) {
      navbar.addClass('navbar-scroll');
    } else {
      navbar.removeClass('navbar-scroll');
    }
  });
});