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
    /* =====================================================
       PESQUISA DAS ANOMALIAS
       ===================================================== */

    const searchInput =
        document.querySelector("#anomalySearch");

    const anomalyCards =
        document.querySelectorAll(".anomaly-card");


    function searchAnomalies() {

        if (!searchInput) return;

        const search =
            searchInput.value
                .toLowerCase()
                .trim();


        anomalyCards.forEach(card => {

            const text =
                card.textContent.toLowerCase();

            if (text.includes(search)) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            searchAnomalies
        );

    }


    /* =====================================================
       FILTROS
       ===================================================== */

    const filterButtons =
        document.querySelectorAll(
            ".filter-button"
        );


    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                filterButtons.forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


                button.classList.add(
                    "active"
                );


                const filter =
                    button.dataset.filter;


                anomalyCards.forEach(card => {

                    const category =
                        card.dataset.category;


                    if (
                        filter === "all" ||
                        category === filter
                    ) {

                        card.classList.remove(
                            "hidden"
                        );

                    } else {

                        card.classList.add(
                            "hidden"
                        );

                    }

                });

            }
        );

    });


    /* =====================================================
       MODAIS DAS ANOMALIAS
       ===================================================== */

    const modal =
        document.querySelector(".modal");

    const modalTitle =
        document.querySelector(
            ".modal-title"
        );

    const modalText =
        document.querySelector(
            ".modal-text"
        );

    const modalClose =
        document.querySelector(
            ".modal-close"
        );


    const anomalyData = {

        miopia: {
            title: "Miopia",
            text:
                "Na miopia, objetos próximos podem ser vistos com mais nitidez enquanto objetos distantes apresentam dificuldade de foco. Isso acontece quando a imagem tende a se formar antes da retina."
        },

        hipermetropia: {
            title: "Hipermetropia",
            text:
                "Na hipermetropia, existe dificuldade principalmente para focalizar objetos próximos. O sistema óptico do olho precisa ajustar o foco para que a imagem seja formada corretamente na retina."
        },

        astigmatismo: {
            title: "Astigmatismo",
            text:
                "O astigmatismo está relacionado a uma curvatura irregular da córnea ou de outras estruturas ópticas do olho, podendo causar distorção ou dificuldade de nitidez."
        },

        daltonismo: {
            title: "Daltonismo",
            text:
                "O daltonismo envolve diferenças na percepção de determinadas cores. Ele está relacionado ao funcionamento dos cones presentes na retina."
        },

        catarata: {
            title: "Catarata",
            text:
                "A catarata ocorre quando o cristalino perde transparência, podendo deixar a visão mais embaçada e reduzir a passagem adequada da luz."
        },

        glaucoma: {
            title: "Glaucoma",
            text:
                "O glaucoma é um conjunto de condições que pode afetar o nervo óptico. A detecção e o acompanhamento por profissionais de saúde são importantes."
        },

        presbiopia: {
            title: "Presbiopia",
            text:
                "A presbiopia está relacionada à redução progressiva da capacidade de acomodação do olho, dificultando a focalização de objetos próximos."
        },

        ambliopia: {
            title: "Ambliopia",
            text:
                "A ambliopia é uma alteração do desenvolvimento visual em que um dos olhos, ou às vezes ambos, não desenvolve adequadamente a capacidade de enxergar com nitidez."
        },

        estrabismo: {
            title: "Estrabismo",
            text:
                "No estrabismo, os olhos podem não permanecer alinhados na mesma direção. Existem diferentes tipos e causas, sendo importante uma avaliação especializada."
        }

    };


    function openModal(type) {

        if (
            !modal ||
            !modalTitle ||
            !modalText
        ) return;


        const data =
            anomalyData[type];


        if (!data) return;


        modalTitle.textContent =
            data.title;

        modalText.textContent =
            data.text;


        modal.classList.add(
            "active"
        );


        document.body.style.overflow =
            "hidden";

    }


    function closeModal() {

        if (!modal) return;


        modal.classList.remove(
            "active"
        );


        document.body.style.overflow =
            "";

    }


    document
        .querySelectorAll(
            "[data-anomaly]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    openModal(
                        button.dataset.anomaly
                    );

                }
            );

        });


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeModal
        );

    }


    if (modal) {

        modal.addEventListener(
            "click",
            event => {

                if (
                    event.target === modal
                ) {

                    closeModal();

                }

            }
        );

    }


    /* ESC FECHA MODAL */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeModal();

            }

        }
    );


    /* =====================================================
       FAQ
       ===================================================== */

    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );


    faqItems.forEach(item => {

        const question =
            item.querySelector(
                ".faq-question"
            );


        const answer =
            item.querySelector(
                ".faq-answer"
            );


        if (!question || !answer)
            return;


        question.addEventListener(
            "click",
            () => {


                const isActive =
                    item.classList.contains(
                        "active"
                    );


                faqItems.forEach(other => {

                    other.classList.remove(
                        "active"
                    );


                    const otherAnswer =
                        other.querySelector(
                            ".faq-answer"
                        );


                    if (otherAnswer) {

                        otherAnswer.style.maxHeight =
                            null;

                    }

                });


                if (!isActive) {

                    item.classList.add(
                        "active"
                    );


                    answer.style.maxHeight =
                        answer.scrollHeight +
                        "px";

                }

            }
        );

    });


    /* =====================================================
       ANIMAÇÃO AO ENTRAR NA TELA
       ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".info-card, .process-card, .anomaly-card, .glossary-card, .section-heading"
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .12
            }
        );


    animatedElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";

        observer.observe(element);

      /* =====================================================
       SIMULADOR DE ANOMALIAS DA VISÃO
       ===================================================== */

    const visionSelect =
        document.querySelector("#visionType");

    const visionSimulation =
        document.querySelector(
            ".vision-simulation"
        );

    const simulationTitle =
        document.querySelector(
            "#simulationTitle"
        );

    const simulationDescription =
        document.querySelector(
            ".simulation-description"
        );


    const visionData = {

        normal: {
            title: "Visão normal",

            description:
                "Esta simulação representa uma visão sem alterações ópticas aplicadas.",

            className: ""
        },


        miopia: {
            title: "Simulação de miopia",

            description:
                "Na simulação, objetos mais distantes aparecem desfocados.",

            className:
                "visao-miopia"
        },


        hipermetropia: {
            title: "Simulação de hipermetropia",

            description:
                "A imagem apresenta uma alteração de nitidez, especialmente para objetos próximos.",

            className:
                "visao-hipermetropia"
        },


        astigmatismo: {
            title: "Simulação de astigmatismo",

            description:
                "A imagem apresenta distorções que representam alterações no foco provocadas pela curvatura irregular dos meios ópticos.",

            className:
                "visao-astigmatismo"
        },


        daltonismo: {
            title: "Simulação de daltonismo",

            description:
                "As cores da cena são alteradas para representar, de forma simplificada, diferenças na percepção cromática.",

            className:
                "visao-daltonismo"
        },


        catarata: {
            title: "Simulação de catarata",

            description:
                "A cena fica mais difusa e com menor contraste, representando de forma simplificada a perda de transparência do cristalino.",

            className:
                "visao-catarata"
        }

    };


    function updateVisionSimulation(
        type
    ) {

        if (!visionSimulation)
            return;


        const data =
            visionData[type];


        if (!data)
            return;


        /* Remove todas as classes anteriores */

        Object.values(
            visionData
        ).forEach(item => {

            if (item.className) {

                visionSimulation.classList.remove(
                    item.className
                );

            }

        });


        /* Adiciona a nova condição */

        if (data.className) {

            visionSimulation.classList.add(
                data.className
            );

        }


        /* Atualiza título */

        if (simulationTitle) {

            simulationTitle.textContent =
                data.title;

        }


        /* Atualiza descrição */

        if (
            simulationDescription
        ) {

            simulationDescription.textContent =
                data.description;

        }

    }


    if (visionSelect) {

        visionSelect.addEventListener(
            "change",
            () => {

                updateVisionSimulation(
                    visionSelect.value
                );

            }
        );


        updateVisionSimulation(
            visionSelect.value ||
            "normal"
        );

    }


    /* =====================================================
       CONTROLE DE INTENSIDADE
       ===================================================== */

    const intensitySlider =
        document.querySelector(
            "#visionIntensity"
        );

    const intensityValue =
        document.querySelector(
            "#intensityValue"
        );


    if (
        intensitySlider &&
        visionSimulation
    ) {

        intensitySlider.addEventListener(
            "input",
            () => {

                const value =
                    Number(
                        intensitySlider.value
                    );


                if (intensityValue) {

                    intensityValue.textContent =
                        value + "%";

                }


                visionSimulation.style.setProperty(
                    "--vision-intensity",
                    value
                );


                applyVisionIntensity(
                    value
                );

            }
        );

    }


    function applyVisionIntensity(
        value
    ) {

        if (!visionSimulation)
            return;


        const type =
            visionSelect
                ? visionSelect.value
                : "normal";


        const intensity =
            value / 100;


        switch (type) {

            case "miopia":

                visionSimulation.style.filter =
                    `blur(${1 + intensity * 8}px)`;

                break;


            case "hipermetropia":

                visionSimulation.style.filter =
                    `blur(${.5 + intensity * 5}px)
                     contrast(${1 - intensity * .25})`;

                break;


            case "astigmatismo":

                visionSimulation.style.filter =
                    `blur(${1 + intensity * 4}px)`;

                visionSimulation.style.transform =
                    `scaleX(${1 + intensity * .08})`;

                break;


            case "daltonismo":

                visionSimulation.style.filter =
                    `grayscale(${intensity * .7})
                     sepia(${intensity * .25})`;

                break;


            case "catarata":

                visionSimulation.style.filter =
                    `blur(${1 + intensity * 6}px)
                     brightness(${1 + intensity * .15})
                     contrast(${1 - intensity * .35})`;

                break;


            default:

                visionSimulation.style.filter =
                    "none";

                visionSimulation.style.transform =
                    "none";

                break;

        }

    }


    /* =====================================================
       BOTÃO RESET DO SIMULADOR
       ===================================================== */

    const resetSimulation =
        document.querySelector(
            "#resetSimulation"
        );


    if (resetSimulation) {

        resetSimulation.addEventListener(
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


                if (intensityValue) {

                    intensityValue.textContent =
                        "50%";

                }


                if (visionSimulation) {

                    visionSimulation.className =
                        "vision-simulation";

                    visionSimulation.style.filter =
                        "none";

                    visionSimulation.style.transform =
                        "none";

                }


                updateVisionSimulation(
                    "normal"
                );

            }
        );

    }
    });
