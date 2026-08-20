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
// ==========================================
// PARTE 2 — MENU E NAVEGAÇÃO
// ==========================================


// MENU MOBILE
const menuButton = document.querySelector(
    ".menu-toggle, .hamburger, [data-menu]"
);

const nav = document.querySelector(
    "nav"
);


if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("active");
        menuButton.classList.toggle("active");

        const isOpen =
            nav.classList.contains("active");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

}


// FECHAR MENU AO CLICAR EM UM LINK

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("active");
        }

        if (menuButton) {
            menuButton.classList.remove("active");
        }

    });

});


// ROLAGEM SUAVE

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetId =
            link.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// HEADER AO ROLAR

const header =
    document.querySelector("header");


function updateHeader() {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);


updateHeader();


// BOTÃO VOLTAR AO TOPO

const topButton =
    document.querySelector(
        ".back-to-top, #backToTop, [data-top]"
    );


if (topButton) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                topButton.classList.add(
                    "show"
                );

            } else {

                topButton.classList.remove(
                    "show"
                );

            }

        },
        { passive: true }
    );


    topButton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


console.log("🧭 Parte 2 carregada!");
});
