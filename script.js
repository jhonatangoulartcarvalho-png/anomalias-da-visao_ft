```javascript
/* =========================================================
   VISÃO EM FOCO
   SCRIPT.JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTOS PRINCIPAIS
       ===================================================== */

    const body = document.body;

    const header =
        document.querySelector(".header");

    const menuButton =
        document.querySelector(".menu-button");

    const navigation =
        document.querySelector(".navigation");

    const backTop =
        document.querySelector(".back-top");

    const scrollProgress =
        document.querySelector(".scroll-progress span");


    /* =====================================================
       MENU MOBILE
       ===================================================== */

    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            navigation.classList.toggle("open");

            const opened =
                navigation.classList.contains("open");

            menuButton.setAttribute(
                "aria-expanded",
                opened
            );

            menuButton.textContent =
                opened ? "✕" : "☰";

        });


        navigation
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navigation.classList.remove("open");

                    menuButton.textContent = "☰";

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                });

            });

    }


    /* =====================================================
       HEADER + SCROLL
       ===================================================== */

    function updateScroll() {

        const scroll =
            window.scrollY;

        if (header) {

            header.classList.toggle(
                "scrolled",
                scroll > 40
            );

        }


        if (backTop) {

            backTop.classList.toggle(
                "show",
                scroll > 500
            );

        }


        if (scrollProgress) {

            const documentHeight =
                document.documentElement.scrollHeight
                - window.innerHeight;

            const percentage =
                documentHeight > 0
                    ? (scroll / documentHeight) * 100
                    : 0;

            scrollProgress.style.width =
                `${percentage}%`;

        }

    }

    window.addEventListener(
        "scroll",
        updateScroll,
        { passive: true }
    );

    updateScroll();


    /* =====================================================
       VOLTAR AO TOPO
       ===================================================== */

    if (backTop) {

        backTop.addEventListener(
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
       LINKS INTERNOS
       ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

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

                if (!target) {
                    return;
                }

                event.preventDefault();

                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;

                const position =
                    target.getBoundingClientRect().top
                    + window.scrollY
                    - headerHeight
                    - 15;

                window.scrollTo({
                    top: position,
                    behavior: "smooth"
                });

            });

        });


    /* =====================================================
       ACESSIBILIDADE
       ===================================================== */

    let fontScale = 1;

    const fontIncrease =
        document.querySelector("#fontIncrease");

    const fontDecrease =
        document.querySelector("#fontDecrease");

    const fontReset =
        document.querySelector("#fontReset");

    const contrastButton =
        document.querySelector("#contrastToggle");

    const readableButton =
        document.querySelector("#readableFont");

    const fontStatus =
        document.querySelector("#fontStatus");


    function updateFont() {

        fontScale =
            Math.max(
                0.85,
                Math.min(1.35, fontScale)
            );

        document.documentElement
            .style
            .setProperty(
                "--font-scale",
                fontScale
            );


        if (fontStatus) {

            fontStatus.textContent =
                `Tamanho da fonte: ${Math.round(
                    fontScale * 100
                )}%`;

        }

    }


    if (fontIncrease) {

        fontIncrease.addEventListener(
            "click",
            () => {

                fontScale += 0.1;

                updateFont();

            }
        );

    }


    if (fontDecrease) {

        fontDecrease.addEventListener(
            "click",
            () => {

                fontScale -= 0.1;

                updateFont();

            }
        );

    }


    if (fontReset) {

        fontReset.addEventListener(
            "click",
            () => {

                fontScale = 1;

                updateFont();

            }
        );

    }


    if (contrastButton) {

        contrastButton.addEventListener(
            "click",
            () => {

                body.classList.toggle(
                    "high-contrast"
                );

                const active =
                    body.classList.contains(
                        "high-contrast"
                    );

                contrastButton.setAttribute(
                    "aria-pressed",
                    active
                );

            }
        );

    }


    if (readableButton) {

        readableButton.addEventListener(
            "click",
            () => {

                body.classList.toggle(
                    "readable-font"
                );

                const active =
                    body.classList.contains(
                        "readable-font"
                    );

                readableButton.setAttribute(
                    "aria-pressed",
                    active
                );

            }
        );

    }


    updateFont();


    /* =====================================================
       LABORATÓRIO DE VISÃO
       ===================================================== */

    const visionType =
        document.querySelector("#visionType");

    const visionIntensity =
        document.querySelector("#visionIntensity");

    const intensityValue =
        document.querySelector("#intensityValue");

    const visionPreview =
        document.querySelector("#visionPreview");

    const resetVision =
        document.querySelector("#resetVision");


    function updateVision() {

        if (
            !visionType ||
            !visionIntensity ||
            !visionPreview
        ) {
            return;
        }


        const type =
            visionType.value;

        const intensity =
            Number(
                visionIntensity.value
            );


        if (intensityValue) {

            intensityValue.textContent =
                `${intensity}%`;

        }


        visionPreview.style.filter =
            "none";


        visionPreview.style.transform =
            "none";


        visionPreview.style.opacity =
            "1";


        switch (type) {

            case "miopia":

                visionPreview.style.filter =
                    `blur(${intensity / 18}px)`;

                break;


            case "hipermetropia":

                visionPreview.style.filter =
                    `blur(${intensity / 22}px)`;

                break;


            case "astigmatismo":

                visionPreview.style.filter =
                    `blur(${intensity / 28}px)`;

                visionPreview.style.transform =
                    `skewX(${intensity / 80}deg)`;

                break;


            case "presbiopia":

                visionPreview.style.filter =
                    `blur(${intensity / 20}px)`;

                break;


            case "catarata":

                visionPreview.style.filter =
                    `blur(${intensity / 30}px)`;

                visionPreview.style.opacity =
                    1 - intensity / 300;

                visionPreview.style.background =
                    `
                    linear-gradient(
                        rgba(230,220,180,
                        ${intensity / 180}),
                        rgba(210,200,160,
                        ${intensity / 180})
                    ),
                    linear-gradient(
                        180deg,
                        #173e63,
                        #07110c
                    )
                    `;

                break;


            case "daltonismo":

                visionPreview.style.filter =
                    `saturate(${1 - intensity / 150})`;

                break;


            default:

                visionPreview.style.filter =
                    "none";

                break;

        }

    }


    if (visionType) {

        visionType.addEventListener(
            "change",
            updateVision
        );

    }


    if (visionIntensity) {

        visionIntensity.addEventListener(
            "input",
            updateVision
        );

    }


    if (resetVision) {

        resetVision.addEventListener(
            "click",
            () => {

                if (visionType) {
                    visionType.value =
                        "normal";
                }

                if (visionIntensity) {
                    visionIntensity.value =
                        "50";
                }

                updateVision();

            }
        );

    }


    updateVision();


    /* =====================================================
       ANATOMIA DO OLHO
       ===================================================== */

    const partButtons =
        document.querySelectorAll(
            ".part-buttons button"
        );

    const anatomyTitle =
        document.querySelector(
            "#anatomyTitle"
        );

    const anatomyDescription =
        document.querySelector(
            "#anatomyDescription"
        );


    const anatomyData = {

        cornea: {
            title: "Córnea",
            text:
                "A córnea é a camada transparente localizada na parte frontal do olho. Ela ajuda a proteger o olho e participa da focalização da luz."
        },

        iris: {
            title: "Íris",
            text:
                "A íris é a região colorida do olho. Ela controla a quantidade de luz que entra através da pupila."
        },

        pupil: {
            title: "Pupila",
            text:
                "A pupila é a abertura no centro da íris. Seu tamanho varia conforme a quantidade de luz presente no ambiente."
        },

        retina: {
            title: "Retina",
            text:
                "A retina contém células sensíveis à luz. Ela transforma os estímulos luminosos em sinais que serão enviados ao cérebro."
        }

    };


    partButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                partButtons
                    .forEach(item =>
                        item.classList.remove(
                            "active"
                        )
                    );

                button.classList.add(
                    "active"
                );


                const part =
                    button.dataset.part;

                const information =
                    anatomyData[part];

                if (!information) {
                    return;
                }


                if (anatomyTitle) {

                    anatomyTitle.textContent =
                        information.title;

                }


                if (anatomyDescription) {

                    anatomyDescription.textContent =
                        information.text;

                }

            }
        );

    });


    /* =====================================================
       HOTSPOTS DO OLHO
       ===================================================== */

    const hotspots =
        document.querySelectorAll(
            ".hotspot"
        );


    hotspots.forEach(hotspot => {

        hotspot.addEventListener(
            "click",
            () => {

                const part =
                    hotspot.dataset.part;

                const button =
                    document.querySelector(
                        `.part-buttons button[data-part="${part}"]`
                    );

                if (button) {
                    button.click();
                }

            }
        );

    });


    /* =====================================================
       ANOMALIAS
       ===================================================== */

    const anomalyCards =
        document.querySelectorAll(
            ".anomaly-card"
        );

    const anomalyTitle =
        document.querySelector(
            "#anomalyTitle"
        );

    const anomalyDescription =
        document.querySelector(
            "#anomalyDescription"
        );

    const anomalyLabel =
        document.querySelector(
            "#anomalyLabel"
        );


    const anomalies = {

        miopia: {
            title: "Miopia",
            description:
                "A miopia dificulta a visão de objetos distantes. A imagem tende a se formar antes da retina.",
            label: "ERRO DE REFRAÇÃO"
        },

        hipermetropia: {
            title: "Hipermetropia",
            description:
                "A hipermetropia pode dificultar principalmente a visão de objetos próximos.",
            label: "ERRO DE REFRAÇÃO"
        },

        astigmatismo: {
            title: "Astigmatismo",
            description:
                "O astigmatismo está relacionado a uma curvatura irregular da córnea ou do cristalino, podendo causar visão distorcida ou desfocada.",
            label: "ERRO DE REFRAÇÃO"
        },

        presbiopia: {
            title: "Presbiopia",
            description:
                "A presbiopia está relacionada à redução da capacidade de focalização para objetos próximos que ocorre naturalmente com o envelhecimento.",
            label: "ALTERAÇÃO VISUAL"
        },

        catarata: {
            title: "Catarata",
            description:
                "A catarata ocorre quando o cristalino fica progressivamente opaco, podendo deixar a visão menos nítida.",
            label: "ALTERAÇÃO DO CRISTALINO"
        },

        daltonismo: {
            title: "Daltonismo",
            description:
                "O daltonismo envolve diferenças na percepção de determinadas cores. Existem diferentes tipos e intensidades.",
            label: "PERCEPÇÃO DAS CORES"
        }

    };


    function selectAnomaly(card) {

        anomalyCards
            .forEach(item =>
                item.classList.remove(
                    "active"
                )
            );

        card.classList.add("active");


        const type =
            card.dataset.anomaly;

        const data =
            anomalies[type];

        if (!data) {
            return;
        }


        if (anomalyTitle) {
            anomalyTitle.textContent =
                data.title;
        }

        if (anomalyDescription) {
            anomalyDescription.textContent =
                data.description;
        }

        if (anomalyLabel) {
            anomalyLabel.textContent =
                data.label;
        }

    }


    anomalyCards.forEach(card => {

        card.addEventListener(
            "click",
            () => selectAnomaly(card)
        );

        card.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    selectAnomaly(card);

                }

            }
        );

    });


    /* =====================================================
       DISCO DE NEWTON
       ===================================================== */

    const newtonDisc =
        document.querySelector(
            ".newton-disc"
        );

    const spinButton =
        document.querySelector(
            "#spinNewton"
        );


    if (spinButton && newtonDisc) {

        let rotation = 0;

        spinButton.addEventListener(
            "click",
            () => {

                rotation += 1440;

                newtonDisc.style.transform =
                    `rotate(${rotation}deg)`;

            }
        );

    }


    /* =====================================================
       QUIZ
       ===================================================== */

    const quiz =
        document.querySelector(
            "#visionQuiz"
        );

    const quizButton =
        document.querySelector(
            "#finishQuiz"
        );

    const quizResult =
        document.querySelector(
            "#quizResult"
        );

    const scoreNumber =
        document.querySelector(
            "#scoreNumber"
        );

    const scoreBar =
        document.querySelector(
            ".score-bar span"
        );


    if (quizButton && quiz) {

        quizButton.addEventListener(
            "click",
            () => {

                const questions =
                    quiz.querySelectorAll(
                        ".question"
                    );

                let correct = 0;

                let answered = 0;


                questions.forEach(
                    question => {

                        const selected =
                            question.querySelector(
                                "input:checked"
                            );

                        if (!selected) {
                            return;
                        }

                        answered++;


                        if (
                            selected.dataset.correct ===
                            "true"
                        ) {

                            correct++;

                        }

                    }
                );


                if (answered < questions.length) {

                    if (quizResult) {

                        quizResult.style.display =
                            "block";

                        quizResult.textContent =
                            `Responda todas as ${questions.length} questões antes de finalizar.`;

                    }

                    return;

                }


                const percentage =
                    Math.round(
                        (correct /
                        questions.length) * 100
                    );


                if (scoreNumber) {

                    scoreNumber.textContent =
                        `${percentage}%`;

                }


                if (scoreBar) {

                    scoreBar.style.width =
                        `${percentage}%`;

                }


                if (quizResult) {

                    quizResult.style.display =
                        "block";

                    quizResult.textContent =
                        `Você acertou ${correct} de ${questions.length} questões!`;

                }

            }
        );

    }


    /* =====================================================
       MODAL LIBRAS
       ===================================================== */

    const librasModal =
        document.querySelector(
            ".libras-modal"
        );

    const openLibras =
        document.querySelectorAll(
            "[data-open-libras]"
        );

    const closeLibras =
        document.querySelectorAll(
            "[data-close-libras]"
        );


    function openLibrasModal() {

        if (!librasModal) {
            return;
        }

        librasModal.classList.add(
            "active"
        );

        body.classList.add(
            "no-scroll"
        );

        librasModal.setAttribute(
            "aria-hidden",
            "false"
        );

    }


    function closeLibrasModal() {

        if (!librasModal) {
            return;
        }

        librasModal.classList.remove(
            "active"
        );

        body.classList.remove(
            "no-scroll"
        );

        librasModal.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    openLibras.forEach(button => {

        button.addEventListener(
            "click",
            openLibrasModal
        );

    });


    closeLibras.forEach(button => {

        button.addEventListener(
            "click",
            closeLibrasModal
        );

    });


    if (librasModal) {

        librasModal.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    librasModal
                ) {

                    closeLibrasModal();

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeLibrasModal();

            }

        }
    );


    /* =====================================================
       ANIMAÇÃO AO ENTRAR NA TELA
       ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".process-card, .anomaly-card, .question, .anatomy-info, .libras-card"
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

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

                    }
                );

            },
            {
                threshold: .12
            }
        );


    animatedElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity .6s ease, transform .6s ease";

        observer.observe(element);

    });


    /* =====================================================
       DATA ATUAL NO FOOTER
       ===================================================== */

    const year =
        document.querySelector(
            "#currentYear"
        );

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       TECLA TAB — ACESSIBILIDADE
       ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Tab"
            ) {

                body.classList.add(
                    "keyboard-user"
                );

            }

        }
    );


    /* =====================================================
       FINALIZAÇÃO
       ===================================================== */

    console.log(
        "VISÃO EM FOCO — site carregado com sucesso."
    );

});
```

