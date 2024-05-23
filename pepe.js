// ***************
// FONDO DEL NABAR
// ***************
const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 50;
  
    // Agregar o quitar la clase 'scrolled' al elemento 'inicio'
    const inicioElement = document.getElementById('inicio');
    if (scrollY > scrollThreshold) {
      inicioElement.classList.add('scrolled');
    } else {
      inicioElement.classList.remove('scrolled');
    }
  };
  // Agregar el EventListener al DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    // Llamamos a handleScroll inicialmente para manejar el estado inicial
    handleScroll();
    // Agregar el EventListener de scroll
    window.addEventListener('scroll', handleScroll);
  });
  
  
  
  
  // ***************
  // MENU Y PRECIOS
  // ***************
  function handleMenuItemClick(menuItem) {
    // Obtén todos los elementos con la clase 'menu-button'
    var menuButtons = document.querySelectorAll('.menu-button');
  
    // Quita la clase 'selected' de todos los elementos del menú
    menuButtons.forEach(function(button) {
      button.classList.remove('selected');
    });
  
    // Agrega la clase 'selected' solo al botón clicado
    var clickedButton = document.querySelector('.menu-button[data-menu="' + menuItem + '"]');
    clickedButton.classList.add('selected');
  }
  
  
  
  
  
  function handleMenuItemClick(menuItem) {
    // Obtén todos los elementos con la clase 'content-item'
    var contentItems = document.querySelectorAll('.content-item');
  
    // Oculta todos los elementos de contenido
    contentItems.forEach(function(item) {
      item.style.display = 'none';
    });
  
    // Muestra solo el elemento de contenido correspondiente al menú seleccionado
    var activeContent = document.querySelector('#' + menuItem);
    if (activeContent) {
      activeContent.style.display = 'block';
    }
  
    // Obtén todos los elementos con la clase 'menu-button'
    var menuButtons = document.querySelectorAll('.menu-button');
  
    // Quita la clase 'selected' de todos los elementos del menú
    menuButtons.forEach(function(button) {
      button.classList.remove('selected');
    });
  
    // Agrega la clase 'selected' solo al botón clicado
    var clickedButton = document.querySelector('.menu-button[data-menu="' + menuItem + '"]');
    clickedButton.classList.add('selected');
  }
  
  
  
  // *****************
  // BOTON DEL CORAZON
  // *****************
  const likeButtons = document.querySelectorAll(".card__btn");
  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("card__btn--like");
    });
  });
  
  
  
  
  // ***********
  // PROMOCIONES
  // ***********
  const fechaFinalizacion = new Date('2024-01-20T23:59:59');
  // Comienza la lógica del contador regresivo
  function actualizarContador() {
    const ahora = new Date().getTime();
    const tiempoRestante = fechaFinalizacion - ahora;
  
    const days = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const hours = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((tiempoRestante % (1000 * 60)) / 1000);
  
    // Actualiza los elementos HTML con los valores calculados
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  
    // Verifica si la promoción ha finalizado
    if (tiempoRestante < 0) {
      document.getElementById('tiempo-restante').innerText = 'La promoción ha finalizado';
    }
  }
  
  // Actualiza el contador cada segundo
  setInterval(actualizarContador, 1000);
  
  // Llama a la función inicial para configurar el contador al cargar la página
  actualizarContador();
  
  
  