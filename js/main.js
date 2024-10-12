// Selección del switch de tema y el cuerpo del documento
const themeSwitch = document.querySelector('#themeSwitch');
const body = document.body;

// Evento para el cambio de tema
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        addDarkTheme();  // Agrega el tema oscuro
        body.classList.add('dark-mode');  // Agrega la clase para el tema oscuro
    } else {
        removeDarkTheme();  // Elimina el tema oscuro
        body.classList.remove('dark-mode');  // Elimina la clase para el tema oscuro
    }
});

// Función para añadir el archivo dark.css
function addDarkTheme() {
    let darkTheme = document.createElement('link');
    darkTheme.rel = 'stylesheet';
    darkTheme.href = 'css/dark.css';  // Asegúrate de que la ruta sea correcta
    darkTheme.id = 'dark-theme';  // Asigna un ID para poder eliminarlo después
    document.head.appendChild(darkTheme);  // Agrega el enlace al head
}

// Función para eliminar el archivo dark.css
function removeDarkTheme() {
    const darkTheme = document.getElementById('dark-theme');
    if (darkTheme) {
        darkTheme.remove();  // Elimina el enlace del head
    }
}

// Función para verificar si un elemento está en la vista
const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  
  // Animar elementos al desplazarse
  const animateOnScroll = () => {
    const headers = document.querySelectorAll('#habilidades h4');
    const cols = document.querySelectorAll('#habilidades .col-md-12');
  
    headers.forEach((header) => {
      if (isElementInViewport(header)) {
        header.classList.add('fade-in-left');
      }
    });
  
    cols.forEach((col) => {
      if (isElementInViewport(col)) {
        col.classList.add('fade-in-bottom');
      }
    });
  };
  
  // Detectar el desplazamiento
  window.addEventListener('scroll', animateOnScroll);

  // Función para observar elementos
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); // Esto permite que se repita la animación al hacer scroll
      }
    });
  });
  
  // Selecciona el h4 y las columnas para observarlos
  const fadeInLeftElements = document.querySelectorAll('.fade-in-left');
  const fadeInBottomElements = document.querySelectorAll('.fade-in-bottom');
  
  // Observa los elementos para activar la animación
  fadeInLeftElements.forEach(el => observer.observe(el));
  fadeInBottomElements.forEach(el => observer.observe(el));