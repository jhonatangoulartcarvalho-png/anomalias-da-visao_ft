document.addEventListener("DOMContentLoaded", function () {

    console.log("Visão em Foco carregado!");

    const loader = document.querySelector(".loader");

    if (loader) {
        loader.classList.add("hidden");

        setTimeout(function () {
            loader.style.display = "none";
        }, 600);
    }

});
