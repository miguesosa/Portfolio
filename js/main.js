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
