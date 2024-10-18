// Selección del switch de tema y el cuerpo del documento
const themeSwitch = document.querySelector('#themeSwitch');
const body = document.body;

// Función para aplicar el tema oscuro
const applyDarkTheme = () => {
    addDarkTheme();  // Agrega el tema oscuro
    body.classList.add('dark-mode');  // Agrega la clase para el tema oscuro
};

// Función para eliminar el tema oscuro
const removeDarkTheme = () => {
    const darkTheme = document.getElementById('dark-theme');
    if (darkTheme) {
        darkTheme.remove();  // Elimina el enlace del head
    }
    body.classList.remove('dark-mode');  // Elimina la clase para el tema oscuro
};

// Evento para el cambio de tema
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        applyDarkTheme();  // Aplica el tema oscuro si el switch está activado
    } else {
        removeDarkTheme();  // Elimina el tema oscuro si el switch está desactivado
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

// Función para aplicar el tema del sistema al cargar la página
const applySystemTheme = () => {
    const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkThemeMediaQuery.matches) {
        themeSwitch.checked = true;  // Si el sistema está en tema oscuro, activa el switch
        applyDarkTheme();  // Aplica el tema oscuro
    } else {
        themeSwitch.checked = false;  // Si no, desactiva el switch
        removeDarkTheme();  // Elimina el tema oscuro
    }
};

// Detectar cambios en el tema del sistema
const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkThemeMediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
        themeSwitch.checked = true;  // Actualiza el switch
        applyDarkTheme();  // Aplica el tema oscuro
    } else {
        themeSwitch.checked = false;  // Actualiza el switch
        removeDarkTheme();  // Elimina el tema oscuro
    }
});

// Llama a la función para aplicar el tema del sistema al cargar la página
document.addEventListener('DOMContentLoaded', applySystemTheme);

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
