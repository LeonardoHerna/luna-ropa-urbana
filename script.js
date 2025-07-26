

function mostrarDetalle(id, event, datosProducto) {
  event.preventDefault();

  // Rellenar información
  document.getElementById('detalleTitulo').textContent = datosProducto.titulo;
  document.getElementById('detalleImagen').src = datosProducto.imagen;
  document.getElementById('detalleImagen').alt = datosProducto.titulo;
  document.getElementById('detalleDescripcion').textContent = datosProducto.descripcion;

  document.getElementById('detalleTalles').textContent = datosProducto.talles.join(', ');
  document.getElementById('detalleColores').textContent = datosProducto.colores.join(', ');
  document.getElementById('detalleMaterial').textContent = datosProducto.material;
  document.getElementById('detallePrecio').textContent = datosProducto.precio;

  // Botón de WhatsApp con mensaje automático
  const mensaje = `Hola, estoy interesado/a en el producto: ${datosProducto.titulo}`;
  document.getElementById('btnWhatsapp').onclick = () => {
    window.open(`https://wa.me/59897431589?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  // Rellenar productos relacionados
  const contenedorRelacionados = document.getElementById('detalleRelacionados');
  contenedorRelacionados.innerHTML = '';
  datosProducto.relacionados.forEach(producto => {
    const card = document.createElement('div');
    card.className = 'relacionado-item';
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.titulo}">
      <p>${producto.titulo}</p>
      <p>${producto.precio}</p>
    `;

    const btnVer = document.createElement('button');
btnVer.classList.add('carousel-btn');
btnVer.textContent = "Ver más";
btnVer.onclick = function(event) {
  mostrarDetalle('detalleProducto', event, producto);
};

card.appendChild(btnVer);
contenedorRelacionados.appendChild(card);
  
  });

  // Mostrar panel
  const panel = document.getElementById(id);
  panel.classList.remove('oculto');
  setTimeout(() => {
    panel.classList.add('abierto');
  }, 10);
}

function cerrarDetalle(id) {
  const panel = document.getElementById(id);
  panel.classList.remove('abierto');
  setTimeout(() => {
    panel.classList.add('oculto');
  }, 300);
}


/*Mover carrusel*/

function moverCarrusel(direccion) {
  const contenedor = document.getElementById("detalleRelacionados");
  const desplazamiento = 150 * direccion; // píxeles a mover

  contenedor.scrollBy({
    left: desplazamiento,
    behavior: "smooth"
  });
}



/*Carrusel de testimonios*/const slides = document.querySelectorAll('.testimonial');
const slide = document.querySelectorAll('.testimonial');
let indexActual = 0;
let autoplayTimer = null;

// Funciones de navegación manual (ya las tenías)
document.getElementById('nextTest').addEventListener('click', () => {
  slides[indexActual].classList.remove('active');
  indexActual = (indexActual + 1) % slides.length;
  slides[indexActual].classList.add('active');
});
document.getElementById('prevTest').addEventListener('click', () => {
  slides[indexActual].classList.remove('active');
  indexActual = (indexActual - 1 + slides.length) % slides.length;
  slides[indexActual].classList.add('active');
});

// ✨ Agregamos autoplay con setInterval
function iniciarAutoplay() {
  autoplayTimer = setInterval(() => {
    document.getElementById('nextTest').click();
  }, 5000); // cambia cada 5 segundos
}

// ✋ Pausar autoplay al hacer hover sobre el slider
const slider = document.querySelector('.testimonial-slider');
slider.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
slider.addEventListener('mouseleave', iniciarAutoplay);

// Iniciar autoplay automáticamente
iniciarAutoplay();



