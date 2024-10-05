/*
    Archivo: main.js
    Descripción: Scripts básicos para mejorar la funcionalidad y experiencia de usuario del portfolio personal.
*/

// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    // Añade la clase "loaded" al body para indicar que la página se ha cargado completamente
    document.body.classList.add("loaded");
    /*
        La clase "loaded" puede usarse en el CSS para aplicar estilos o animaciones
        que se activan una vez que la página está lista. Ejemplo: transiciones de opacidad.
    */

    // Selecciona el switch de tema
    const themeSwitch = document.getElementById("themeSwitch");

    // Verifica si hay un tema guardado en el localStorage
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        themeSwitch.checked = currentTheme === "dark"; // Marca el switch si el tema es oscuro
    }

    // Escucha el cambio en el switch de tema
    themeSwitch.addEventListener("change", function () {
        if (this.checked) {
            // Si el switch está activado, añade la clase 'dark' y guarda el tema en localStorage
            document.body.classList.add("dark");
            document.body.classList.remove("light");
            localStorage.setItem("theme", "dark");
        } else {
            // Si el switch está desactivado, añade la clase 'light' y guarda el tema en localStorage
            document.body.classList.add("light");
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    });
});
