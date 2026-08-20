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
           /* =====================================================
       DISCO DE NEWTON
       ===================================================== */

    const newtonDisk =
        document.querySelector(".newton-disk");

    const newtonStart =
        document.querySelector("#newtonStart");

    const newtonStop =
        document.querySelector("#newtonStop");

    const newtonSpeed =
        document.querySelector("#newtonSpeed");

    const newtonSpeedValue =
        document.querySelector("#newtonSpeedValue");


    let newtonAnimation = null;


    function startNewtonDisk() {

        if (!newtonDisk) return;

        newtonDisk.classList.add(
            "spinning"
        );

    }


    function stopNewtonDisk() {

        if (!newtonDisk) return;

        newtonDisk.classList.remove(
            "spinning"
        );

    }


    if (newtonStart) {

        newtonStart.addEventListener(
            "click",
            startNewtonDisk
        );

    }


    if (newtonStop) {

        newtonStop.addEventListener(
            "click",
            stopNewtonDisk
        );

    }


    if (
        newtonSpeed &&
        newtonDisk
    ) {

        newtonSpeed.addEventListener(
            "input",
            () => {

                const speed =
                    Number(
                        newtonSpeed.value
                    );


                if (newtonSpeedValue) {

                    newtonSpeedValue.textContent =
                        speed + "%";

                }


                const duration =
                    Math.max(
                        .2,
                        3 - speed / 40
                    );


                newtonDisk.style.animationDuration =
                    duration + "s";

            }
        );

    }


    /* =====================================================
       QUIZ
       ===================================================== */

    const quizForm =
        document.querySelector(
            "#visionQuiz"
        );

    const quizResult =
        document.querySelector(
            ".quiz-result"
        );


    const quizAnswers = {

        q1: "b",
        q2: "a",
        q3: "c",
        q4: "b",
        q5: "a"

    };


    if (quizForm) {

        quizForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                let score = 0;

                let answered = 0;


                Object.keys(
                    quizAnswers
                ).forEach(question => {

                    const selected =
                        quizForm.querySelector(
                            `input[name="${question}"]:checked`
                        );


                    if (selected) {

                        answered++;


                        if (
                            selected.value ===
                            quizAnswers[question]
                        ) {

                            score++;

                        }

                    }

                });


                if (!quizResult)
                    return;


                if (answered === 0) {

                    quizResult.textContent =
                        "⚠️ Responda às questões antes de finalizar.";

                    quizResult.style.color =
                        "#ffcc00";

                    return;

                }


                const percentage =
                    Math.round(
                        (score / 5) * 100
                    );


                let message = "";


                if (percentage === 100) {

                    message =
                        "🏆 Excelente! Você acertou tudo!";

                }

                else if (percentage >= 80) {

                    message =
                        "🔥 Muito bom! Você domina o assunto.";

                }

                else if (percentage >= 60) {

                    message =
                        "👏 Bom trabalho! Você está no caminho certo.";

                }

                else if (percentage >= 40) {

                    message =
                        "📚 Você já sabe algumas coisas, mas pode estudar mais.";

                }

                else {

                    message =
                        "💡 Continue estudando! O conhecimento sobre visão é importante.";

                }


                quizResult.innerHTML = `
                    <strong>${message}</strong>
                    <br>
                    <span>
                        Você acertou
                        ${score} de 5 questões
                        (${percentage}%).
                    </span>
                `;


                quizResult.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }
        );

    }


    /* =====================================================
       BOTÃO REINICIAR QUIZ
       ===================================================== */

    const resetQuiz =
        document.querySelector(
            "#resetQuiz"
        );


    if (
        resetQuiz &&
        quizForm &&
        quizResult
    ) {

        resetQuiz.addEventListener(
            "click",
            () => {

                quizForm.reset();

                quizResult.innerHTML =
                    "Responda às questões para descobrir sua pontuação.";

            }
        );

    }


    /* =====================================================
       EFEITO DE CONTAGEM DOS NÚMEROS
       ===================================================== */

    const counters =
        document.querySelectorAll(
            "[data-counter]"
        );


    function animateCounter(
        element
    ) {

        const target =
            Number(
                element.dataset.counter
            );


        let current = 0;

        const duration = 1200;

        const start =
            performance.now();


        function update(time) {

            const progress =
                Math.min(
                    (time - start) /
                    duration,
                    1
                );


            current =
                Math.floor(
                    progress * target
                );


            element.textContent =
                current;


            if (progress < 1) {

                requestAnimationFrame(
                    update
                );

            }

        }


        requestAnimationFrame(
            update
        );

    }


    const counterObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        animateCounter(
                            entry.target
                        );

                        counterObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .5
            }
        );


    counters.forEach(counter => {

        counterObserver.observe(
            counter
        );
    /* =====================================================
       PARTE 5 — EXPERIÊNCIA AVANÇADA
       ===================================================== */


    /* =====================================================
       MENU ATIVO CONFORME A SEÇÃO
       ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navigationLinks =
        document.querySelectorAll(
            ".nav a[href^='#']"
        );


    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.id;

            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            const target =
                link.getAttribute(
                    "href"
                );


            if (
                target ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();


    /* =====================================================
       EFEITO 3D NOS CARDS
       ===================================================== */

    const interactiveCards =
        document.querySelectorAll(
            ".anomaly-card, .info-card, .process-card, .glossary-card"
        );


    interactiveCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                if (
                    window.innerWidth < 900
                ) return;


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                    centerY) * -3;


                const rotateY =
                    ((x - centerX) /
                    centerX) * 3;


                card.style.transform =
                    `
                    perspective(800px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-5px)
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });


    /* =====================================================
       EFEITO DE REVELAÇÃO
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            "[data-reveal]"
        );


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "revealed"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .15
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(
            element
        );

    });


    /* =====================================================
       ATALHOS DE TECLADO
       ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            /* ALT + H = voltar ao topo */

            if (
                event.altKey &&
                event.key.toLowerCase() === "h"
            ) {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }


            /* ALT + A = acessibilidade */

            if (
                event.altKey &&
                event.key.toLowerCase() === "a"
            ) {

                if (
                    accessibilityPanel
                ) {

                    accessibilityPanel.classList.toggle(
                        "active"
                    );

                }

            }


            /* ESC = fecha menu */

            if (
                event.key === "Escape"
            ) {

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

            }

        }
    );


    /* =====================================================
       FECHAR MENU AO REDIMENSIONAR
       ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 800 &&
                nav
            ) {

                nav.classList.remove(
                    "active"
                );

            }

        }
    );


    /* =====================================================
       ANO AUTOMÁTICO
       ===================================================== */

    const currentYear =
        new Date().getFullYear();


    document
        .querySelectorAll(
            "[data-current-year]"
        )
        .forEach(element => {

            element.textContent =
                currentYear;

        });


    /* =====================================================
       INDICADOR DE STATUS
       ===================================================== */

    const systemStatus =
        document.querySelector(
            "[data-system-status]"
        );


    if (systemStatus) {

        systemStatus.textContent =
            "SISTEMA ONLINE";

        systemStatus.classList.add(
            "online"
        );

    }


    /* =====================================================
       BOTÕES COM DATA-SCROLL
       ===================================================== */

    document
        .querySelectorAll(
            "[data-scroll]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const targetId =
                        button.dataset.scroll;


                    const target =
                        document.getElementById(
                            targetId
                        );


                    if (target) {

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });


    /* =====================================================
       PROTEÇÃO DE IMAGENS
       ===================================================== */

    document
        .querySelectorAll("img")
        .forEach(image => {

            image.addEventListener(
                "error",
                () => {

                    image.style.display =
                        "none";

                }
            );

        });


    /* =====================================================
       DETECÇÃO DE CONEXÃO
       ===================================================== */

    function updateConnectionStatus() {

        const connection =
            document.querySelector(
                "[data-connection]"
            );


        if (!connection)
            return;


        if (navigator.onLine) {

            connection.textContent =
                "● ONLINE";

            connection.classList.add(
                "online"
            );

            connection.classList.remove(
                "offline"
            );

        } else {

            connection.textContent =
                "● OFFLINE";

            connection.classList.add(
                "offline"
            );

            connection.classList.remove(
                "online"
            );

        }

    }


    window.addEventListener(
        "online",
        updateConnectionStatus
    );

    window.addEventListener(
        "offline",
        updateConnectionStatus
    );


    updateConnectionStatus();


    /* =====================================================
       ANIMAÇÃO DE DIGITAÇÃO
       ===================================================== */

    const typingElements =
        document.querySelectorAll(
            "[data-typing]"
        );


    typingElements.forEach(element => {

        const text =
            element.dataset.typing ||
            element.textContent;


        element.textContent = "";


        let index = 0;


        function typeText() {

            if (
                index >= text.length
            ) return;


            element.textContent +=
                text[index];


            index++;


            setTimeout(
                typeText,
                35
            );

        }


        typeText();

    });


    /* =====================================================
       SISTEMA FINALIZADO
       ===================================================== */

    console.log(
        "%c VISÃO EM FOCO — SISTEMA COMPLETO ",
        "background:#7c5cff;color:white;font-size:14px;font-weight:bold;padding:8px;border-radius:6px;"
    );

    console.log(
        "✓ Navegação carregada"
    );

    console.log(
        "✓ Acessibilidade carregada"
    );

    console.log(
        "✓ Simulador carregado"
    );

    console.log(
        "✓ Quiz carregado"
    );

    console.log(
        "✓ Disco de Newton carregado"
    );

    console.log(
        "✓ Sistema pronto"
       /* =====================================================
   PARTE 6 — SIMULADOR AVANÇADO
   ===================================================== */

const simulator = {
    type: document.querySelector("#visionType"),
    distance: document.querySelector("#objectDistance"),
    curvature: document.querySelector("#curvature"),
    result: document.querySelector("#simulationResult"),
    display: document.querySelector(".simulation-display")
};


/* =====================================================
   ATUALIZAÇÃO DO SIMULADOR
   ===================================================== */

function updateAdvancedSimulator() {

    if (!simulator.display) return;

    const type =
        simulator.type
            ? simulator.type.value
            : "normal";

    const distance =
        simulator.distance
            ? Number(simulator.distance.value)
            : 50;

    const curvature =
        simulator.curvature
            ? Number(simulator.curvature.value)
            : 50;


    /* Remove efeitos anteriores */

    simulator.display.classList.remove(
        "sim-miopia",
        "sim-hipermetropia",
        "sim-astigmatismo",
        "sim-presbiopia",
        "sim-normal"
    );


    /* =================================================
       MIopia
       ================================================= */

    if (type === "miopia") {

        simulator.display.classList.add(
            "sim-miopia"
        );

    }


    /* =================================================
       HIPERMETROPIA
       ================================================= */

    else if (
        type === "hipermetropia"
    ) {

        simulator.display.classList.add(
            "sim-hipermetropia"
        );

    }


    /* =================================================
       ASTIGMATISMO
       ================================================= */

    else if (
        type === "astigmatismo"
    ) {

        simulator.display.classList.add(
            "sim-astigmatismo"
        );

    }


    /* =================================================
       PRESBIOPIA
       ================================================= */

    else if (
        type === "presbiopia"
    ) {

        simulator.display.classList.add(
            "sim-presbiopia"
        );

    }


    /* =================================================
       VISÃO NORMAL
       ================================================= */

    else {

        simulator.display.classList.add(
            "sim-normal"
        );

    }


    /* =================================================
       RESULTADO
       ================================================= */

    if (simulator.result) {

        simulator.result.innerHTML = `
            <strong>Simulação atualizada</strong>
            <br>
            Tipo: ${type}
            <br>
            Distância: ${distance}
            <br>
            Curvatura: ${curvature}
        `;

    }

}


/* =====================================================
   EVENTOS
   ===================================================== */

if (simulator.type) {

    simulator.type.addEventListener(
        "change",
        updateAdvancedSimulator
    );

}


if (simulator.distance) {

    simulator.distance.addEventListener(
        "input",
        updateAdvancedSimulator
    );

}


if (simulator.curvature) {

    simulator.curvature.addEventListener(
        "input",
        updateAdvancedSimulator
    );

}


/* Inicializa */

updateAdvancedSimulator();


/* =====================================================
   BOTÃO RESET
   ===================================================== */

const simulatorReset =
    document.querySelector(
        "#resetSimulator"
    );


if (simulatorReset) {

    simulatorReset.addEventListener(
        "click",
        () => {

            if (simulator.type) {

                simulator.type.value =
                    "normal";

            }


            if (simulator.distance) {

                simulator.distance.value =
                    50;

            }


            if (simulator.curvature) {

                simulator.curvature.value =
                    50;

            }


            updateAdvancedSimulator();

        }
    );

}


/* =====================================================
   VALORES DOS SLIDERS
   ===================================================== */

document
    .querySelectorAll(
        'input[type="range"]'
    )
    .forEach(slider => {

        const output =
            document.querySelector(
                `[data-output="${slider.id}"]`
            );


        if (!output) return;


        slider.addEventListener(
            "input",
            () => {

                output.textContent =
                    slider.value;

            }
        );

    });


/* =====================================================
   STATUS DO SIMULADOR
   ===================================================== */

const simulatorStatus =
    document.querySelector(
        "[data-simulator-status]"
    );


if (simulatorStatus) {

    simulatorStatus.textContent =
        "SIMULADOR ONLINE";

    simulatorStatus.classList.add(
        "online"
    );

}
   /* =====================================================
   PARTE 7 — PROGRESSO E CONQUISTAS
   ===================================================== */

const progressSystem = {

    progress: Number(
        localStorage.getItem(
            "vision-progress"
        )
    ) || 0,

    activities: JSON.parse(
        localStorage.getItem(
            "vision-activities"
        ) || "[]"
    ),

    achievements: JSON.parse(
        localStorage.getItem(
            "vision-achievements"
        ) || "[]"
    )

};


/* =====================================================
   ELEMENTOS
   ===================================================== */

const progressBars =
    document.querySelectorAll(
        "[data-progress]"
    );

const progressNumbers =
    document.querySelectorAll(
        "[data-progress-number]"
    );

const achievementContainer =
    document.querySelector(
        ".achievements"
    );

const resetProgressButton =
    document.querySelector(
        "[data-reset-progress]"
    );


/* =====================================================
   ATUALIZAR PROGRESSO
   ===================================================== */

function updateProgress(value) {

    value = Math.max(
        0,
        Math.min(100, value)
    );


    progressSystem.progress =
        Math.round(value);


    localStorage.setItem(
        "vision-progress",
        progressSystem.progress
    );


    /* Barras */

    progressBars.forEach(bar => {

        bar.style.width =
            progressSystem.progress + "%";

        bar.setAttribute(
            "aria-valuenow",
            progressSystem.progress
        );

    });


    /* Números */

    progressNumbers.forEach(number => {

        number.textContent =
            progressSystem.progress + "%";

    });


    checkAchievements();

}


/* =====================================================
   REGISTRAR ATIVIDADE
   ===================================================== */

function registerActivity(
    activity
) {

    if (
        !progressSystem.activities
            .includes(activity)
    ) {

        progressSystem.activities.push(
            activity
        );


        localStorage.setItem(
            "vision-activities",
            JSON.stringify(
                progressSystem.activities
            )
        );


        calculateProgress();

    }

}


/* =====================================================
   CALCULAR PROGRESSO
   ===================================================== */

function calculateProgress() {

    const totalActivities = 10;

    const completed =
        progressSystem.activities.length;


    const percentage =
        (completed /
        totalActivities) * 100;


    updateProgress(
        percentage
    );

}


/* =====================================================
   REGISTRAR SEÇÕES VISITADAS
   ===================================================== */

document
    .querySelectorAll(
        "section[id]"
    )
    .forEach(section => {

        const sectionObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                registerActivity(
                                    "section-" +
                                    section.id
                                );

                                sectionObserver
                                    .unobserve(
                                        section
                                    );

                            }

                        }
                    );

                },
                {
                    threshold: .45
                }
            );


        sectionObserver.observe(
            section
        );

    });


/* =====================================================
   REGISTRAR QUIZ
   ===================================================== */

if (quizForm) {

    quizForm.addEventListener(
        "submit",
        () => {

            registerActivity(
                "quiz-completed"
            );

        }
    );

}


/* =====================================================
   REGISTRAR SIMULADOR
   ===================================================== */

if (simulator.type) {

    simulator.type.addEventListener(
        "change",
        () => {

            registerActivity(
                "simulator-used"
            );

        }
    );

}


/* =====================================================
   CONQUISTAS
   ===================================================== */

const achievements = {

    explorer: {
        id: "explorer",
        title: "🔎 Explorador",
        description:
            "Visitou diferentes áreas do site."
    },

    simulator: {
        id: "simulator",
        title: "🧪 Cientista Visual",
        description:
            "Utilizou o simulador de visão."
    },

    quiz: {
        id: "quiz",
        title: "🧠 Desafio Completo",
        description:
            "Concluiu o quiz."
    },

    newton: {
        id: "newton",
        title: "🌈 Pesquisador da Luz",
        description:
            "Experimentou o Disco de Newton."
    },

    master: {
        id: "master",
        title: "🏆 Especialista da Visão",
        description:
            "Alcançou 100% de progresso."
    }

};


/* =====================================================
   VERIFICAR CONQUISTAS
   ===================================================== */

function checkAchievements() {

    /* Explorador */

    if (
        progressSystem.activities
            .length >= 4
    ) {

        unlockAchievement(
            "explorer"
        );

    }


    /* Simulador */

    if (
        progressSystem.activities
            .includes("simulator-used")
    ) {

        unlockAchievement(
            "simulator"
        );

    }


    /* Quiz */

    if (
        progressSystem.activities
            .includes("quiz-completed")
    ) {

        unlockAchievement(
            "quiz"
        );

    }


    /* Disco */

    if (
        progressSystem.activities
            .includes("newton-used")
    ) {

        unlockAchievement(
            "newton"
        );

    }


    /* Mestre */

    if (
        progressSystem.progress >= 100
    ) {

        unlockAchievement(
            "master"
        );

    }


    renderAchievements();

}


/* =====================================================
   LIBERAR CONQUISTA
   ===================================================== */

function unlockAchievement(
    id
) {

    if (
        !progressSystem.achievements
            .includes(id)
    ) {

        progressSystem.achievements
            .push(id);


        localStorage.setItem(
            "vision-achievements",
            JSON.stringify(
                progressSystem.achievements
            )
        );


        showAchievementNotification(
            achievements[id]
        );

    }

}


/* =====================================================
   MOSTRAR CONQUISTAS
   ===================================================== */

function renderAchievements() {

    if (!achievementContainer)
        return;


    achievementContainer.innerHTML = "";


    Object.values(
        achievements
    ).forEach(achievement => {

        const unlocked =
            progressSystem.achievements
                .includes(
                    achievement.id
                );


        const card =
            document.createElement(
                "div"
            );


        card.className =
            "achievement-card " +
            (
                unlocked
                    ? "unlocked"
                    : "locked"
            );


        card.innerHTML = `

            <div class="achievement-icon">
                ${unlocked ? "🏆" : "🔒"}
            </div>

            <div>

                <h3>
                    ${achievement.title}
                </h3>

                <p>
                    ${achievement.description}
                </p>

            </div>

        `;


        achievementContainer.appendChild(
            card
        );

    });

}


/* =====================================================
   NOTIFICAÇÃO DE CONQUISTA
   ===================================================== */

function showAchievementNotification(
    achievement
) {

    const notification =
        document.createElement(
            "div"
        );


    notification.className =
        "achievement-notification";


    notification.innerHTML = `

        <div class="notification-icon">
            🏆
        </div>

        <div>

            <strong>
                Nova conquista!
            </strong>

            <span>
                ${achievement.title}
            </span>

        </div>

    `;


    document.body.appendChild(
        notification
    );


    setTimeout(() => {

        notification.classList.add(
            "show"
        );

    }, 50);


    setTimeout(() => {

        notification.classList.remove(
            "show"
        );


        setTimeout(() => {

            notification.remove();

        }, 400);

    }, 3500);

}


/* =====================================================
   DISCO DE NEWTON → CONQUISTA
   ===================================================== */

if (newtonStart) {

    newtonStart.addEventListener(
        "click",
        () => {

            registerActivity(
                "newton-used"
            );

        }
    );

}


/* =====================================================
   RESETAR TODO O PROGRESSO
   ===================================================== */

if (resetProgressButton) {

    resetProgressButton.addEventListener(
        "click",
        () => {

            const confirmation =
                confirm(
                    "Tem certeza que deseja apagar todo o progresso?"
                );


            if (!confirmation)
                return;


            progressSystem.progress = 0;

            progressSystem.activities = [];

            progressSystem.achievements = [];


            localStorage.removeItem(
                "vision-progress"
            );

            localStorage.removeItem(
                "vision-activities"
            );

            localStorage.removeItem(
                "vision-achievements"
            );


            updateProgress(0);

            renderAchievements();

        }
    );

}


/* =====================================================
   INICIALIZAÇÃO
   ===================================================== */

updateProgress(
    progressSystem.progress
);

renderAchievements();
    );
    });
    });
