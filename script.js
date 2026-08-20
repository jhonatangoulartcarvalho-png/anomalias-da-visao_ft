/* =========================================================
   VISÃO EM FOCO
   SCRIPT.JS
   PARTE 1 — SISTEMA PRINCIPAL
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTOS PRINCIPAIS
       ===================================================== */

    const body = document.body;

    const loader = document.querySelector(".loader");

    const menuToggle =
        document.querySelector(".menu-toggle");

    const nav =
        document.querySelector(".nav");

    const header =
        document.querySelector(".header");

    const backToTop =
        document.querySelector(".back-to-top");

    const accessibilityPanel =
        document.querySelector(".accessibility-panel");


    /* =====================================================
       LOADER
       ===================================================== */

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (loader) {
                loader.classList.add("hidden");
            }

        }, 700);

    });


    /* =====================================================
       MENU MOBILE
       ===================================================== */

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            nav.classList.toggle("active");

            menuToggle.classList.toggle("active");

        });


        /* Fecha o menu ao clicar em um link */

        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");

                menuToggle.classList.remove("active");

            });

        });

    }


    /* =====================================================
       HEADER AO ROLAR
       ===================================================== */

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* =====================================================
       VOLTAR AO TOPO
       ===================================================== */

    function updateBackToTop() {

        if (!backToTop) return;

        if (window.scrollY > 600) {

            backToTop.classList.add("visible");

        } else {

            backToTop.classList.remove("visible");

        }

    }

    window.addEventListener(
        "scroll",
        updateBackToTop
    );

    updateBackToTop();


    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       TEMA CLARO / ESCURO
       ===================================================== */

    const themeButtons =
        document.querySelectorAll(
            "[data-theme]"
        );


    function applyTheme(theme) {

        if (theme === "light") {

            body.classList.add("light-mode");

        } else {

            body.classList.remove("light-mode");

        }

        localStorage.setItem(
            "vision-theme",
            theme
        );

    }


    const savedTheme =
        localStorage.getItem(
            "vision-theme"
        );


    if (savedTheme) {

        applyTheme(savedTheme);

    }


    themeButtons.forEach(button => {

        button.addEventListener("click", () => {

            const theme =
                button.dataset.theme;

            applyTheme(theme);

        });

    });


    /* =====================================================
       ACESSIBILIDADE
       ===================================================== */

    const accessibilityButton =
        document.querySelector(
            "[data-accessibility]"
        );

    const accessibilityClose =
        document.querySelector(
            ".accessibility-panel-close"
        );


    if (
        accessibilityButton &&
        accessibilityPanel
    ) {

        accessibilityButton.addEventListener(
            "click",
            () => {

                accessibilityPanel.classList.toggle(
                    "active"
                );

            }
        );

    }


    if (
        accessibilityClose &&
        accessibilityPanel
    ) {

        accessibilityClose.addEventListener(
            "click",
            () => {

                accessibilityPanel.classList.remove(
                    "active"
                );

            }
        );

    }


    /* =====================================================
       TEXTO MAIOR
       ===================================================== */

    const increaseText =
        document.querySelector(
            "[data-increase-text]"
        );

    const decreaseText =
        document.querySelector(
            "[data-decrease-text]"
        );

    const normalText =
        document.querySelector(
            "[data-normal-text]"
        );


    if (increaseText) {

        increaseText.addEventListener(
            "click",
            () => {

                body.classList.add(
                    "large-text"
                );

                localStorage.setItem(
                    "vision-large-text",
                    "true"
                );

            }
        );

    }


    if (decreaseText) {

        decreaseText.addEventListener(
            "click",
            () => {

                body.classList.remove(
                    "large-text"
                );

                localStorage.removeItem(
                    "vision-large-text"
                );

            }
        );

    }


    if (normalText) {

        normalText.addEventListener(
            "click",
            () => {

                body.classList.remove(
                    "large-text"
                );

                localStorage.removeItem(
                    "vision-large-text"
                );

            }
        );

    }


    if (
        localStorage.getItem(
            "vision-large-text"
        ) === "true"
    ) {

        body.classList.add(
            "large-text"
        );

    }


    /* =====================================================
       ALTO CONTRASTE
       ===================================================== */

    const contrastButton =
        document.querySelector(
            "[data-contrast]"
        );


    if (contrastButton) {

        contrastButton.addEventListener(
            "click",
            () => {

                body.classList.toggle(
                    "high-contrast"
                );

                const enabled =
                    body.classList.contains(
                        "high-contrast"
                    );

                localStorage.setItem(
                    "vision-contrast",
                    enabled
                );

            }
        );

    }


    if (
        localStorage.getItem(
            "vision-contrast"
        ) === "true"
    ) {

        body.classList.add(
            "high-contrast"
        );

    }


    /* =====================================================
       REDUZIR ANIMAÇÕES
       ===================================================== */

    const animationButton =
        document.querySelector(
            "[data-animation]"
        );


    if (animationButton) {

        animationButton.addEventListener(
            "click",
            () => {

                body.classList.toggle(
                    "no-animation"
                );

                const disabled =
                    body.classList.contains(
                        "no-animation"
                    );

                localStorage.setItem(
                    "vision-animation",
                    disabled
                );

            }
        );

    }


    if (
        localStorage.getItem(
            "vision-animation"
        ) === "true"
    ) {

        body.classList.add(
            "no-animation"
        );

    }


    /* =====================================================
       FECHAR PAINEL AO CLICAR FORA
       ===================================================== */

    document.addEventListener(
        "click",
        (event) => {

            if (
                accessibilityPanel &&
                accessibilityButton &&
                !accessibilityPanel.contains(
                    event.target
                ) &&
                !accessibilityButton.contains(
                    event.target
                )
            ) {

                accessibilityPanel.classList.remove(
                    "active"
                );

            }

        }
    );


    /* =====================================================
       NAVEGAÇÃO SUAVE
       ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) return;

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    /* =====================================================
       LOG DO SISTEMA
       ===================================================== */

    console.log(
        "%c VISÃO EM FOCO ",
        "background:#5ee7ff;color:#050816;font-weight:bold;padding:5px 10px;border-radius:5px;"
    );

    console.log(
        "Sistema carregado com sucesso."
    );

});
