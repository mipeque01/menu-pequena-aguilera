// =========================
// LA PEQUEÑA AGUILERA
// script.js
// =========================

document.addEventListener("DOMContentLoaded", () => {

    // Animación de entrada
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = "1";
    }, 100);

    // Botón VER MENÚ
    const botonMenu = document.querySelector(".btn");

    if (botonMenu) {

        botonMenu.addEventListener("click", function (e) {

            e.preventDefault();

            const menu = document.querySelector("#menu");

            menu.scrollIntoView({
                behavior: "smooth"
            });

        });

    }

});