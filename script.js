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
// ==========================================
// PARTE 3 — TEMA E ACESSIBILIDADE
// ==========================================


// ==========================================
// TEMA CLARO / ESCURO
// ==========================================

const themeButton = document.querySelector(
    "[data-theme], #themeToggle, .theme-toggle"
);


// Recuperar tema salvo
const savedTheme =
    localStorage.getItem("vision-theme");


if (savedTheme === "light") {

    document.body.classList.add(
        "light-mode"
    );

}


if (themeButton) {

    themeButton.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light-mode"
            );


            const isLight =
                document.body.classList.contains(
                    "light-mode"
                );


            localStorage.setItem(
                "vision-theme",
                isLight
                    ? "light"
                    : "dark"
            );

        }
    );

}


// ==========================================
// PAINEL DE ACESSIBILIDADE
// ==========================================

const accessibilityButton =
    document.querySelector(
        "[data-accessibility], #accessibilityToggle"
    );


const accessibilityPanel =
    document.querySelector(
        ".accessibility-panel, #accessibilityPanel"
    );


const accessibilityClose =
    document.querySelector(
        ".accessibility-close"
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


// ==========================================
// ALTO CONTRASTE
// ==========================================

const contrastButton =
    document.querySelector(
        "[data-contrast]"
    );


if (contrastButton) {

    contrastButton.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "high-contrast"
            );


            const enabled =
                document.body.classList.contains(
                    "high-contrast"
                );


            localStorage.setItem(
                "vision-contrast",
                enabled
            );

        }
    );

}


// Recuperar contraste salvo

if (
    localStorage.getItem(
        "vision-contrast"
    ) === "true"
) {

    document.body.classList.add(
        "high-contrast"
    );

}


// ==========================================
// AUMENTAR FONTE
// ==========================================

const fontPlus =
    document.querySelector(
        "[data-font-plus]"
    );


const fontMinus =
    document.querySelector(
        "[data-font-minus]"
    );


const fontNormal =
    document.querySelector(
        "[data-font-normal]"
    );


let fontSize =
    Number(
        localStorage.getItem(
            "vision-font-size"
        )
    ) || 100;


function updateFontSize() {

    document.body.style.fontSize =
        fontSize + "%";


    localStorage.setItem(
        "vision-font-size",
        fontSize
    );

}


if (fontPlus) {

    fontPlus.addEventListener(
        "click",
        () => {

            fontSize =
                Math.min(
                    fontSize + 10,
                    140
                );


            updateFontSize();

        }
    );

}


if (fontMinus) {

    fontMinus.addEventListener(
        "click",
        () => {

            fontSize =
                Math.max(
                    fontSize - 10,
                    80
                );


            updateFontSize();

        }
    );

}


if (fontNormal) {

    fontNormal.addEventListener(
        "click",
        () => {

            fontSize = 100;

            updateFontSize();

        }
    );

}


updateFontSize();


// ==========================================
// NAVEGAÇÃO POR TECLADO
// ==========================================

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Tab") {

            document.body.classList.add(
                "keyboard-navigation"
            );

        }

    }
);


document.addEventListener(
    "mousedown",
    () => {

        document.body.classList.remove(
            "keyboard-navigation"
        );

    }
);


console.log("♿ Parte 3 carregada!");
// ==========================================
// PARTE 4 — INTERAÇÕES DAS SEÇÕES
// ==========================================


// ==========================================
// BOTÕES DE SAIBA MAIS
// ==========================================

const moreButtons = document.querySelectorAll(
    "button"
);

moreButtons.forEach(button => {

    const text =
        button.textContent
            .toLowerCase()
            .trim();

    if (
        text.includes("saiba mais") ||
        text.includes("ver mais") ||
        text.includes("detalhes")
    ) {

        button.addEventListener(
            "click",
            () => {

                const card =
                    button.closest(
                        "article, .card, .anomaly, .info-card, div"
                    );

                if (!card) return;

                card.classList.toggle(
                    "expanded"
                );

            }
        );

    }

});


// ==========================================
// LINKS INTERNOS
// ==========================================

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        event => {

            const id =
                link.getAttribute("href");

            if (
                !id ||
                id === "#"
            ) return;

            const target =
                document.querySelector(id);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


// ==========================================
// ANIMAÇÃO DAS SEÇÕES
// ==========================================

const sections =
    document.querySelectorAll(
        "section"
    );


if (
    "IntersectionObserver" in window
) {

    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "section-visible"
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.1
            }
        );


    sections.forEach(
        section => {

            sectionObserver.observe(
                section
            );

        }
    );

}


// ==========================================
// ESC FECHA MENUS
// ==========================================

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        ) return;


        document
            .querySelectorAll(
                ".active"
            )
            .forEach(element => {

                if (
                    element !== document.body
                ) {

                    element.classList.remove(
                        "active"
                    );

                }

            });

    }
);


console.log(
    "✨ Parte 4 carregada!"
);
// ==========================================
// PARTE 5 — LABORATÓRIO / SIMULADOR
// ==========================================


// ==========================================
// ELEMENTOS DO SIMULADOR
// ==========================================

const visionSelect =
    document.querySelector(
        "#visionType"
    );

const intensitySlider =
    document.querySelector(
        "#visionIntensity"
    );

const intensityValue =
    document.querySelector(
        "#intensityValue"
    );

const visionPreview =
    document.querySelector(
        "#visionPreview"
    );

const resetVision =
    document.querySelector(
        "#resetVision"
    );


// ==========================================
// ATUALIZAR SIMULAÇÃO
// ==========================================

function updateVisionSimulation() {

    // Se o simulador não existir,
    // não faz nada.

    if (!visionPreview) {
        return;
    }


    const type =
        visionSelect
            ? visionSelect.value
            : "normal";


    const intensity =
        intensitySlider
            ? Number(
                intensitySlider.value
            )
            : 50;


    // Remove efeitos anteriores

    visionPreview.classList.remove(
        "normal",
        "miopia",
        "hipermetropia",
        "astigmatismo",
        "presbiopia",
        "catarata",
        "daltonismo"
    );


    // Adiciona o efeito escolhido

    visionPreview.classList.add(
        type
    );


    // Atualiza o número da intensidade

    if (intensityValue) {

        intensityValue.textContent =
            intensity + "%";

    }


    // ======================================
    // EFEITOS VISUAIS
    // ======================================

    let blur = 0;

    let brightness = 1;

    let contrast = 1;


    switch (type) {

        case "miopia":

            blur =
                intensity * 0.04;

            break;


        case "hipermetropia":

            blur =
                intensity * 0.03;

            break;


        case "astigmatismo":

            blur =
                intensity * 0.025;

            contrast =
                0.9;

            break;


        case "presbiopia":

            blur =
                intensity * 0.035;

            break;


        case "catarata":

            blur =
                intensity * 0.04;

            brightness =
                0.8;

            contrast =
                0.75;

            break;


        case "daltonismo":

            contrast =
                0.9;

            break;


        default:

            blur = 0;

            break;

    }


    // ======================================
    // APLICA O EFEITO
    // ======================================

    if (
        type === "daltonismo"
    ) {

        visionPreview.style.filter =
            `grayscale(${intensity * 0.7}%)`;

    }

    else {

        visionPreview.style.filter =
            `blur(${blur}px)
             brightness(${brightness})
             contrast(${contrast})`;

    }

}


// ==========================================
// ALTERAÇÃO DO TIPO DE VISÃO
// ==========================================

if (visionSelect) {

    visionSelect.addEventListener(
        "change",
        updateVisionSimulation
    );

}


// ==========================================
// ALTERAÇÃO DA INTENSIDADE
// ==========================================

if (intensitySlider) {

    intensitySlider.addEventListener(
        "input",
        updateVisionSimulation
    );

}


// ==========================================
// BOTÃO RESET
// ==========================================

if (resetVision) {

    resetVision.addEventListener(
        "click",
        () => {

            if (visionSelect) {

                visionSelect.value =
                    "normal";

            }


            if (intensitySlider) {

                intensitySlider.value =
                    50;

            }


            updateVisionSimulation();

        }
    );

}


// ==========================================
// INICIALIZAÇÃO
// ==========================================

updateVisionSimulation();


console.log(
    "🧪 Parte 5 carregada!"
);

