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


  


//  GALERIA DE IMAGENES
  $(document).ready(function() {
    // Al hacer clic en una miniatura o en la imagen grande, abrir el modal y mostrar la imagen correspondiente
    $('.img-thumbnail').click(function() {
        var index = $(this).data('slide-to');
        $('#carouselExampleIndicators').carousel(index);
        updateCounter(); // Actualizar el contador
    });

    // Actualizar el contador cuando se cambie de imagen en el carrusel
    $('#carouselExampleIndicators').on('slid.bs.carousel', function() {
        updateCounter(); // Llamada a la función de actualización del contador cada vez que cambia la imagen
    });

    // Función para actualizar el contador de imágenes
    function updateCounter() {
        var currentIndex = $('#carouselExampleIndicators .active').index();
        var totalItems = $('.carousel-item').length - 1; // Restamos 1 para contar solo las imágenes, no la de índice 0
        $('#counter').text('Imagen ' + (currentIndex + 1) + ' de ' + totalItems);
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