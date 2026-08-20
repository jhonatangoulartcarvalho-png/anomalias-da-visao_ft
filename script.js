// ==================================================
// VISÃO EM FOCO
// SCRIPT.JS — DO ZERO
// ==================================================


document.addEventListener("DOMContentLoaded", () => {


    // ==================================================
    // MENU MOBILE
    // ==================================================

    const menuButton =
        document.getElementById("menuButton");

    const nav =
        document.querySelector(".nav");


    if (menuButton && nav) {

        menuButton.addEventListener("click", () => {

            nav.classList.toggle("active");

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


    function updateVision() {

        if (!visionType ||
            !visionIntensity ||
            !intensityValue ||
            !visionPreview) {

            return;

        }


        const type =
            visionType.value;

        const intensity =
            Number(visionIntensity.value);


        intensityValue.textContent =
            intensity + "%";


        // Remove efeitos anteriores

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


        if (visionDescription) {

            const descriptions = {

                normal:
                    "Visão sem aplicação de efeitos.",

                miopia:
                    "A simulação representa dificuldade para visualizar objetos distantes.",

                hipermetropia:
                    "A simulação representa dificuldade de focalização de objetos próximos.",

                astigmatismo:
                    "A simulação representa uma possível distorção da imagem.",

                presbiopia:
                    "A simulação representa dificuldade de focalização para perto.",

                catarata:
                    "A simulação representa uma visão com menor nitidez.",

                daltonismo:
                    "A simulação representa uma alteração na percepção de determinadas cores."

            };


            visionDescription.textContent =
                descriptions[type] || descriptions.normal;

        }


        // Intensidade do efeito

        visionPreview.style.setProperty(
            "--vision-intensity",
            intensity / 100
        );

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

                visionType.value =
                    "normal";

                visionIntensity.value =
                    50;

                updateVision();

            }
        );

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

                let score = 0;

                const questions =
                    document.querySelectorAll(
                        ".question"
                    );


                questions.forEach(
                    (question) => {

                        const selected =
                            question.querySelector(
                                "input:checked"
                            );


                        if (
                            selected &&
                            selected.value === "1"
                        ) {

                            score++;

                        }

                    }
                );


                quizResult.textContent =
                    `Você acertou ${score} de ${questions.length} questões.`;

            }
        );

    }



    // ==================================================
    // FECHAR MENU AO CLICAR EM UM LINK
    // ==================================================

    const navLinks =
        document.querySelectorAll(
            ".nav a"
        );


    navLinks.forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    if (nav) {

                        nav.classList.remove(
                            "active"
                        );

                    }

                }
            );

        }
    );

});
