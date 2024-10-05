const themeSwitch = document.querySelector('#themeSwitch');
const body = document.body;

// Evento para el cambio de tema


themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});

// Función para añadir el archivo dark.css
function addDarkTheme() {
  let darkTheme = document.createElement('link');
  darkTheme.rel = 'stylesheet';
  darkTheme.href = 'css/dark.css';  // Asegúrate de que la ruta sea correcta
  darkTheme.id = 'dark-theme';
  document.head.appendChild(darkTheme);
}

// Función para eliminar el archivo dark.css
function removeDarkTheme() {
  const darkTheme = document.getElementById('dark-theme');
  if (darkTheme) {
    darkTheme.remove();
  }
}
