// ==================================================
// VISÃO EM FOCO
// SCRIPT.JS
// ==================================================

document.addEventListener("DOMContentLoaded", () => {


    // ==================================================
    // MENU
    // ==================================================

    const menuButton =
        document.getElementById("menuButton");

    const nav =
        document.querySelector(".nav");


    if (menuButton && nav) {

        menuButton.addEventListener("click", () => {

            nav.classList.toggle("active");

        });


        document.querySelectorAll(".nav a")
            .forEach((link) => {

                link.addEventListener("click", () => {

                    nav.classList.remove("active");

                });

            });

    }


    // ==================================================
    // TEMA
    // ==================================================

    const themeButton =
        document.getElementById("themeButton");


    if (themeButton) {

        themeButton.addEventListener("click", () => {

            document.body.classList.toggle(
                "light-theme"
            );


            const light =
                document.body.classList.contains(
                    "light-theme"
                );


            themeButton.textContent =
                light ? "🌙" : "☀️";

        });

    }


    // ==================================================
    // LABORATÓRIO
    // ==================================================

    const visionType =
        document.getElementById("visionType");

    const visionIntensity =
        document.getElementById("visionIntensity");

    const intensityValue =
        document.getElementById("intensityValue");

    const visionPreview =
        document.getElementById("visionPreview");

    const visionDescription =
        document.getElementById("visionDescription");

    const resetVision =
        document.getElementById("resetVision");


    const descriptions = {

        normal:
            "Esta área simula uma visão sem efeitos.",

        miopia:
            "A simulação representa dificuldade para enxergar objetos distantes.",

        hipermetropia:
            "A simulação representa dificuldade para focalizar objetos próximos.",

        astigmatismo:
            "A simulação representa uma possível distorção da imagem.",

        presbiopia:
            "A simulação representa dificuldade de focalização para perto.",

        catarata:
            "A simulação representa redução da nitidez da visão.",

        daltonismo:
            "A simulação representa alteração na percepção de determinadas cores."

    };


    function updateVision() {

        if (!visionType || !visionIntensity) {
            return;
        }


        const type =
            visionType.value;

        const intensity =
            Number(visionIntensity.value);


        if (intensityValue) {

            intensityValue.textContent =
                intensity + "%";

        }


        if (visionPreview) {

            visionPreview.classList.remove(
                "vision-miopia",
                "vision-hipermetropia",
                "vision-astigmatismo",
                "vision-presbiopia",
                "vision-catarata",
                "vision-daltonismo"
            );


            if (type !== "normal") {

                visionPreview.classList.add(
                    "vision-" + type
                );

            }


            visionPreview.style.setProperty(
                "--vision-intensity",
                intensity / 100
            );

        }


        if (visionDescription) {

            visionDescription.textContent =
                descriptions[type];

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

        resetVision.addEventListener("click", () => {

            visionType.value =
                "normal";

            visionIntensity.value =
                50;

            updateVision();

        });

    }


    updateVision();


    // ==================================================
    // DISCO DE NEWTON
    // ==================================================

    const newtonButton =
        document.getElementById("newtonButton");

    const newtonDisk =
        document.getElementById("newtonDisk");


    if (newtonButton && newtonDisk) {

        newtonButton.addEventListener(
            "click",
            () => {

                newtonDisk.classList.toggle(
                    "spinning"
                );


                newtonButton.textContent =
                    newtonDisk.classList.contains(
                        "spinning"
                    )
                    ? "Parar disco"
                    : "Girar disco";

            }
        );

    }


    // ==================================================
    // QUIZ
    // ==================================================

    const quizButton =
        document.getElementById("quizButton");

    const quizResult =
        document.getElementById("quizResult");


    if (quizButton && quizResult) {

        quizButton.addEventListener(
            "click",
            () => {

                const questions =
                    document.querySelectorAll(
                        ".question"
                    );


                let score = 0;

                let answered = 0;


                questions.forEach((question) => {

                    const selected =
                        question.querySelector(
                            "input:checked"
                        );


                    if (selected) {

                        answered++;


                        if (
                            selected.value === "1"
                        ) {

                            score++;

                        }

                    }

                });


                if (answered < questions.length) {

                    quizResult.textContent =
                        "Responda todas as questões antes de ver o resultado.";

                    return;

                }


                quizResult.textContent =
                    `Você acertou ${score} de ${questions.length} questões!`;

            }
        );

    }


    // ==================================================
    // ACESSIBILIDADE
    // ==================================================

    const librasButton =
        document.getElementById("librasButton");


    if (librasButton) {

        librasButton.addEventListener(
            "click",
            () => {

                document.body.classList.toggle(
                    "accessibility-mode"
                );


                const active =
                    document.body.classList.contains(
                        "accessibility-mode"
                    );


                librasButton.textContent =
                    active
                    ? "Desativar acessibilidade"
                    : "Ativar acessibilidade";

            }
        );

    }


    // ==================================================
    // BARRA DE PROGRESSO
    // ==================================================

    const scrollProgress =
        document.getElementById("scrollProgress");


    function updateProgress() {

        if (!scrollProgress) {
            return;
        }


        const scrollTop =
            window.scrollY;

        const total =
            document.documentElement.scrollHeight
            - window.innerHeight;


        if (total <= 0) {

            scrollProgress.style.width =
                "0%";

            return;

        }


        const progress =
            (scrollTop / total) * 100;


        scrollProgress.style.width =
            progress + "%";

    }


    window.addEventListener(
        "scroll",
        updateProgress
    );


    updateProgress();


    // ==================================================
    // VOLTAR AO TOPO
    // ==================================================

    const backToTop =
        document.getElementById("backToTop");


    if (backToTop) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 500) {

                    backToTop.classList.add(
                        "visible"
                    );

                } else {

                    backToTop.classList.remove(
                        "visible"
                    );

                }

            }
        );


        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }

});
