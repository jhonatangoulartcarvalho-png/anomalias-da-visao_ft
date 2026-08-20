document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // TELA DE CARREGAMENTO
    // ==============================

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hidden");

        }, 1500);

    }


    // ==============================
    // MENU
    // ==============================

    const menuButton =
        document.getElementById("menuButton");

    const navigation =
        document.getElementById("navigation");


    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            navigation.classList.toggle("active");

        });

    }

});
