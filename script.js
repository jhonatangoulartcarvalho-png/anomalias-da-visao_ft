document.addEventListener("DOMContentLoaded", () => {

    console.log("👁️ Visão em Foco iniciado!");

    // ==========================================
    // LOADER
    // ==========================================

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.classList.add("hidden");

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);

    }


    // ==========================================
    // ANO AUTOMÁTICO
    // ==========================================

    const year = document.querySelector(
        "[data-current-year]"
    );

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // ==========================================
    // SISTEMA ONLINE
    // ==========================================

    console.log("✅ Sistema carregado!");

});
