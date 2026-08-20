document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================================
       VISÃO EM FOCO
       SCRIPT PRINCIPAL
       ===================================================== */


    /* =====================================================
       ELEMENTOS GERAIS
       ===================================================== */

    const body = document.body;

    const header =
        document.querySelector("header");

    const menuButton =
        document.querySelector(
            ".menu-toggle, .hamburger, [data-menu]"
        );

    const nav =
        document.querySelector(
            "nav"
        );


    /* =====================================================
       LOADER
       ===================================================== */

    function hideLoader() {

        const loaders =
            document.querySelectorAll(
                ".loader, #loader, .loading-screen"
            );


        loaders.forEach(loader => {

            loader.classList.add("hidden");

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.pointerEvents = "none";


            setTimeout(() => {

                loader.style.display =
                    "none";

            }, 700);

        });

    }


    window.addEventListener(
        "load",
        hideLoader
    );


    setTimeout(
        hideLoader,
        1500
    );


    /* =====================================================
       MENU MOBILE
       ===================================================== */

    if (menuButton && nav) {

        menuButton.addEventListener(
            "click",
            () => {

                nav.classList.toggle(
                    "active"
                );

                menuButton.classList.toggle(
                    "active"
                );


                const opened =
                    nav.classList.contains(
                        "active"
                    );


                menuButton.setAttribute(
                    "aria-expanded",
                    opened
                );

            }
        );

    }


    /* Fechar menu ao clicar em um link */

    document
        .querySelectorAll(
            "nav a"
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    if (nav) {

                        nav.classList.remove(
                            "active"
                        );

                    }

                    if (menuButton) {

                        menuButton.classList.remove(
                            "active"
                        );

                    }

                }
            );

        });


    /* =====================================================
       ROLAGEM SUAVE
       ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const id =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !id ||
                        id === "#"
                    ) return;


                    const target =
                        document.querySelector(
                            id
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });


    /* =====================================================
       HEADER AO ROLAR
       ===================================================== */

    function updateHeader() {

        if (!header) return;


        if (window.scrollY > 50) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    updateHeader();


    /* =====================================================
       BOTÃO VOLTAR AO TOPO
       ===================================================== */

    let topButton =
        document.querySelector(
            ".back-to-top, #backToTop, [data-top]"
        );


    if (topButton) {

        window.addEventListener(
            "scroll",
            () => {

                topButton.classList.toggle(
                    "show",
                    window.scrollY > 500
                );

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


    /* =====================================================
       TEMA CLARO / ESCURO
       ===================================================== */

    const themeButtons =
        document.querySelectorAll(
            "[data-theme], #themeToggle, .theme-toggle"
        );


    const savedTheme =
        localStorage.getItem(
            "vision-theme"
        );


    if (
        savedTheme === "light"
    ) {

        body.classList.add(
            "light-mode"
        );

    }


    themeButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                body.classList.toggle(
                    "light-mode"
                );


                const light =
                    body.classList.contains(
                        "light-mode"
                    );


                localStorage.setItem(
                    "vision-theme",
                    light
                        ? "light"
                        : "dark"
                );

            }
        );

    });


    /* =====================================================
       ACESSIBILIDADE
       ===================================================== */

    const accessibilityPanel =
        document.querySelector(
            ".accessibility-panel, #accessibilityPanel"
        );


    const accessibilityButton =
        document.querySelector(
            "[data-accessibility], #accessibilityToggle"
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


    /* =====================================================
       TAMANHO DA FONTE
       ===================================================== */

    const increaseFont =
        document.querySelector(
            "[data-font-plus]"
        );

    const decreaseFont =
        document.querySelector(
            "[data-font-minus]"
        );

    const normalFont =
        document.querySelector(
            "[data-font-normal]"
        );


    let fontScale =
        Number(
            localStorage.getItem(
                "vision-font-scale"
            )
        ) || 100;


    function applyFontScale() {

        body.style.fontSize =
            fontScale + "%";


        localStorage.setItem(
            "vision-font-scale",
            fontScale
        );

    }


    if (increaseFont) {

        increaseFont.addEventListener(
            "click",
            () => {

                fontScale =
                    Math.min(
                        fontScale + 10,
                        140
                    );


                applyFontScale();

            }
        );

    }


    if (decreaseFont) {

        decreaseFont.addEventListener(
            "click",
            () => {

                fontScale =
                    Math.max(
                        fontScale - 10,
                        80
                    );


                applyFontScale();

            }
        );

    }


    if (normalFont) {

        normalFont.addEventListener(
            "click",
            () => {

                fontScale = 100;

                applyFontScale();

            }
        );

    }


    applyFontScale();


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


                localStorage.setItem(
                    "vision-contrast",
                    body.classList.contains(
                        "high-contrast"
                    )
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
       LEITURA EM VOZ ALTA
       ===================================================== */

    const speechButton =
        document.querySelector(
            "[data-speech], #speechButton"
        );


    if (
        speechButton &&
        "speechSynthesis" in window
    ) {

        speechButton.addEventListener(
            "click",
            () => {

                if (
                    speechSynthesis.speaking
                ) {

                    speechSynthesis.cancel();

                    speechButton.textContent =
                        "🔊 Ouvir página";

                    return;

                }


                const text =
                    document.body.innerText;


                const speech =
                    new SpeechSynthesisUtterance(
                        text
                    );


                speech.lang =
                    "pt-BR";


                speech.rate =
                    0.9;


                speech.onend = () => {

                    speechButton.textContent =
                        "🔊 Ouvir página";

                };


                speechSynthesis.speak(
                    speech
                );


                speechButton.textContent =
                    "⏹ Parar leitura";

            }
        );

    }


    /* =====================================================
       ASSISTENTE DE LIBRAS
       ===================================================== */

    const librasButtons =
        document.querySelectorAll(
            "[data-libras]"
        );


    const librasPanel =
        document.querySelector(
            ".libras-panel"
        );


    librasButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                if (librasPanel) {

                    librasPanel.classList.toggle(
                        "active"
                    );

                }

            }
        );

    });


    const librasClose =
        document.querySelector(
            ".libras-close"
        );


    if (librasClose) {

        librasClose.addEventListener(
            "click",
            () => {

                if (librasPanel) {

                    librasPanel.classList.remove(
                        "active"
                    );

                }

            }
        );

    }


    /* =====================================================
       FAQ
       ===================================================== */

    document
        .querySelectorAll(
            ".faq-question, .faq-item button, [data-faq]"
        )
        .forEach(question => {

            question.addEventListener(
                "click",
                () => {

                    const item =
                        question.closest(
                            ".faq-item"
                        );


                    if (!item) return;


                    const answer =
                        item.querySelector(
                            ".faq-answer"
                        );


                    const opened =
                        item.classList.contains(
                            "active"
                        );


                    document
                        .querySelectorAll(
                            ".faq-item.active"
                        )
                        .forEach(other => {

                            if (
                                other !== item
                            ) {

                                other.classList.remove(
                                    "active"
                                );

                            }

                        });


                    item.classList.toggle(
                        "active",
                        !opened
                    );


                    if (answer) {

                        answer.style.maxHeight =
                            !opened
                                ? answer.scrollHeight + "px"
                                : "0px";

                    }

                }
            );

        });


    /* =====================================================
       FILTRO DE ANOMALIAS
       ===================================================== */

    const filterButtons =
        document.querySelectorAll(
            "[data-filter]"
        );


    const anomalyCards =
        document.querySelectorAll(
            "[data-category], .anomaly-card"
        );


    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const filter =
                    button.dataset.filter;


                filterButtons.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                anomalyCards.forEach(card => {

                    const category =
                        card.dataset.category;


                    if (
                        filter === "all" ||
                        !category ||
                        category === filter
                    ) {

                        card.style.display =
                            "";

                    } else {

                        card.style.display =
                            "none";

                    }

                });

            }
        );

    });


    /* =====================================================
       PESQUISA
       ===================================================== */

    const searchInput =
        document.querySelector(
            "#searchInput, [data-search]"
        );


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            () => {

                const query =
                    searchInput.value
                        .toLowerCase()
                        .trim();


                document
                    .querySelectorAll(
                        ".anomaly-card, .info-card, .glossary-card"
                    )
                    .forEach(card => {

                        const text =
                            card.innerText
                                .toLowerCase();


                        card.style.display =
                            !query ||
                            text.includes(
                                query
                            )
                                ? ""
                                : "none";

                    });

            }
        );

    }


    /* =====================================================
       SIMULADOR DE VISÃO
       ===================================================== */

    const visionType =
        document.querySelector(
            "#visionType, [data-vision-type]"
        );


    const visionIntensity =
        document.querySelector(
            "#visionIntensity, [data-vision-intensity]"
        );


    const simulation =
        document.querySelector(
            ".vision-simulation, .simulation-display, #visionSimulation"
        );


    const intensityLabel =
        document.querySelector(
            "#intensityValue, [data-intensity-value]"
        );


    function updateSimulation() {

        if (!simulation) return;


        const type =
            visionType
                ? visionType.value
                : "normal";


        const intensity =
            visionIntensity
                ? Number(
                    visionIntensity.value
                )
                : 50;


        simulation.classList.remove(
            "miopia",
            "hipermetropia",
            "astigmatismo",
            "presbiopia",
            "daltonismo",
            "catarata",
            "normal"
        );


        simulation.classList.add(
            type
        );


        if (intensityLabel) {

            intensityLabel.textContent =
                intensity + "%";

        }


        let blur = 0;


        if (type === "miopia") {

            blur =
                intensity * 0.06;

        }

        else if (
            type === "hipermetropia"
        ) {

            blur =
                intensity * 0.045;

        }

        else if (
            type === "astigmatismo"
        ) {

            blur =
                intensity * 0.035;

        }

        else if (
            type === "presbiopia"
        ) {

            blur =
                intensity * 0.04;

        }

        else if (
            type === "catarata"
        ) {

            blur =
                intensity * 0.05;

        }


        if (
            type === "daltonismo"
        ) {

            simulation.style.filter =
                `grayscale(${intensity * 0.7}%)`;

        }

        else {

            simulation.style.filter =
                `blur(${blur}px)`;

        }

    }


    if (visionType) {

        visionType.addEventListener(
            "change",
            updateSimulation
        );

    }


    if (visionIntensity) {

        visionIntensity.addEventListener(
            "input",
            updateSimulation
        );

    }


    updateSimulation();


    /* =====================================================
       RESET DO SIMULADOR
       ===================================================== */

    const resetSimulation =
        document.querySelector(
            "#resetSimulation, [data-reset-simulation]"
        );


    if (resetSimulation) {

        resetSimulation.addEventListener(
            "click",
            () => {

                if (visionType) {

                    visionType.value =
                        "normal";

                }


                if (visionIntensity) {

                    visionIntensity.value =
                        50;

                }


                updateSimulation();

            }
        );

    }


    /* =====================================================
       DISCO DE NEWTON
       ===================================================== */

    const newtonDisk =
        document.querySelector(
            ".newton-disk, #newtonDisk"
        );


    const newtonStart =
        document.querySelector(
            "#newtonStart, [data-newton-start]"
        );


    const newtonStop =
        document.querySelector(
            "#newtonStop, [data-newton-stop]"
        );


    const newtonSpeed =
        document.querySelector(
            "#newtonSpeed, [data-newton-speed]"
        );


    if (newtonStart) {

        newtonStart.addEventListener(
            "click",
            () => {

                if (newtonDisk) {

                    newtonDisk.classList.add(
                        "spinning"
                    );

                }

            }
        );

    }


    if (newtonStop) {

        newtonStop.addEventListener(
            "click",
            () => {

                if (newtonDisk) {

                    newtonDisk.classList.remove(
                        "spinning"
                    );

                }

            }
        );

    }


    if (
        newtonSpeed &&
        newtonDisk
    ) {

        newtonSpeed.addEventListener(
            "input",
            () => {

                const value =
                    Number(
                        newtonSpeed.value
                    );


                const duration =
                    Math.max(
                        0.25,
                        4 - value / 30
                    );


                newtonDisk.style.animationDuration =
                    duration + "s";

            }
        );

    }


    /* =====================================================
       QUIZ
       ===================================================== */

    const quiz =
        document.querySelector(
            "#visionQuiz, .quiz-form"
        );


    const quizResult =
        document.querySelector(
            ".quiz-result, #quizResult"
        );


    if (quiz) {

        quiz.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const questions =
                    quiz.querySelectorAll(
                        "input[type='radio']"
                    );


                const groups =
                    {};


                questions.forEach(input => {

                    if (
                        !groups[
                            input.name
                        ]
                    ) {

                        groups[
                            input.name
                        ] = true;

                    }

                });


                const total =
                    Object.keys(
                        groups
                    ).length;


                let answered = 0;


                Object.keys(
                    groups
                ).forEach(name => {

                    if (
                        quiz.querySelector(
                            `input[name="${name}"]:checked`
                        )
                    ) {

                        answered++;

                    }

                });


                if (
                    quizResult &&
                    answered < total
                ) {

                    quizResult.innerHTML =
                        "⚠️ Responda todas as perguntas.";

                    return;

                }


                /*
                   Procura automaticamente
                   pelas alternativas marcadas
                   como corretas.
                */

                let score = 0;


                quiz
                    .querySelectorAll(
                        "input[type='radio']:checked"
                    )
                    .forEach(answer => {

                        if (
                            answer.dataset.correct ===
                            "true" ||
                            answer.value ===
                            answer.dataset.answer
                        ) {

                            score++;

                        }

                    });


                if (quizResult) {

                    const percentage =
                        total
                            ? Math.round(
                                score /
                                total *
                                100
                            )
                            : 0;


                    quizResult.innerHTML = `
                        <strong>
                            Resultado: ${score}/${total}
                        </strong>
                        <br>
                        Você acertou ${percentage}%.
                    `;

                }

            }
        );

    }


    /* =====================================================
       ANIMAÇÃO AO ENTRAR NA TELA
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section, .anomaly-card, .info-card, .process-card, .glossary-card"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            observer.observe(
                element
            );

        });

    }


    /* =====================================================
       CARDS COM EFEITO DE MOVIMENTO
       ===================================================== */

    document
        .querySelectorAll(
            ".anomaly-card, .info-card"
        )
        .forEach(card => {

            card.addEventListener(
                "mouseenter",
                () => {

                    card.classList.add(
                        "card-hover"
                    );

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.classList.remove(
                        "card-hover"
                    );

                }
            );

        });


    /* =====================================================
       BOTÕES DE EXPANSÃO
       ===================================================== */

    document
        .querySelectorAll(
            "[data-expand]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const target =
                        document.querySelector(
                            button.dataset.expand
                        );


                    if (!target) return;


                    target.classList.toggle(
                        "expanded"
                    );

                }
            );

        });


    /* =====================================================
       ANO AUTOMÁTICO
       ===================================================== */

    document
        .querySelectorAll(
            "[data-current-year]"
        )
        .forEach(element => {

            element.textContent =
                new Date()
                    .getFullYear();

        });


    /* =====================================================
       NAVEGAÇÃO ATIVA
       ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            'nav a[href^="#"]'
        );


    function updateActiveSection() {

        let current = "";


        sections.forEach(section => {

            const top =
                section.offsetTop - 200;


            if (
                window.scrollY >= top
            ) {

                current =
                    section.id;

            }

        });


        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute(
                    "href"
                ) === "#" + current
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveSection,
        { passive: true }
    );


    updateActiveSection();


    /* =====================================================
       ESC FECHA PAINÉIS
       ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key !== "Escape"
            ) return;


            if (nav) {

                nav.classList.remove(
                    "active"
                );

            }


            if (
                accessibilityPanel
            ) {

                accessibilityPanel.classList.remove(
                    "active"
                );

            }


            if (librasPanel) {

                librasPanel.classList.remove(
                    "active"
                );

            }

        }
    );


    /* =====================================================
       ACESSIBILIDADE DE IMAGENS
       ===================================================== */

    document
        .querySelectorAll(
            "img"
        )
        .forEach(image => {

            if (
                !image.hasAttribute(
                    "alt"
                )
            ) {

                image.setAttribute(
                    "alt",
                    "Imagem relacionada ao conteúdo sobre anomalias da visão"
                );

            }

        });


    /* =====================================================
       REDUÇÃO DE MOVIMENTO
       ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (
        reducedMotion.matches
    ) {

        body.classList.add(
            "reduced-motion"
        );

    }


    /* =====================================================
       STATUS DO SISTEMA
       ===================================================== */

    document
        .querySelectorAll(
            "[data-status]"
        )
        .forEach(status => {

            status.textContent =
                "● SISTEMA ONLINE";

            status.classList.add(
                "online"
            );

        });


    /* =====================================================
       CONSOLE
       ===================================================== */

    console.log(
        "👁️ Visão em Foco carregado com sucesso."
    );

    console.log(
        "✓ Menu"
    );

    console.log(
        "✓ Acessibilidade"
    );

    console.log(
        "✓ Simulador"
    );

    console.log(
        "✓ Disco de Newton"
    );

    console.log(
        "✓ Quiz"
    );

    console.log(
        "✓ FAQ"
    );

    console.log(
        "✓ Navegação"
    );

});
