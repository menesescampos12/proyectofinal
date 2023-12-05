//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }

}

let currentIndex = 0;
  const totalImages = document.querySelectorAll('.carousel-image').length;

  function showSlide(index) {
    const imageContainer = document.getElementById('image-container');
    const slideWidth = document.querySelector('.carousel-image').clientWidth;
    imageContainer.style.transform = `translateX(${-index * slideWidth}px)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showSlide(currentIndex);
  }

  // Cambio automático de imágenes cada 3 segundos
  setInterval(() => {
    nextSlide();
  }, 3000);



  // Mostrar una bienvenida cuando la página se cargue
window.onload = function () {
    alert('bienvenidos')
}

// Mostrar una bienvenida cuando la página se cargue
window.onload = function () {
    alert('¡Bienvenido a nuestra tiendaa "Bodega Aurrera"! Esperamos que disfrutes de nuestros servicios.');
}

const destacado  = document.getElementById("container")
    console.log(container);

    const elementsByClassName = document.getElementsByClassName("container");
    console.log(elementsByClassName);