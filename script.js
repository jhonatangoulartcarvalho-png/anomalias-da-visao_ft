/* ==================================================
   VISÃO EM FOCO — SCRIPT.JS
================================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* ==================================================
       LOADER
    ================================================== */

    const loader = document.getElementById("loader");

    document.body.classList.add("no-scroll");

    setTimeout(() => {

        if (loader) {
            loader.classList.add("hidden");
        }

        document.body.classList.remove("no-scroll");

    }, 1800);



    /* ==================================================
       MENU MOBILE
    ================================================== */

    const menuButton =
        document.getElementById("menuButton");

    const navigation =
        document.getElementById("navigation");


    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            navigation.classList.toggle("active");

        });


        navigation
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navigation.classList.remove("active");

                });

            });

    }



    /* ==================================================
       LABORATÓRIO VISUAL
    ================================================== */

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
            "Esta é uma representação de uma visão sem o efeito das condições simuladas.",

        miopia:
            "Na simulação de miopia, objetos distantes aparecem desfocados.",

        hipermetropia:
            "Na simulação de hipermetropia, principalmente objetos próximos podem aparecer desfocados.",

        astigmatismo:
            "Na simulação de astigmatismo, a imagem pode apresentar distorção e perda de nitidez.",

        presbiopia:
            "Na simulação de presbiopia, a dificuldade de foco para perto é representada por desfoque.",

        catarata:
            "Na simulação de catarata, a imagem fica mais embaçada e com menor nitidez.",

        daltonismo:
            "Na simulação de daltonismo, algumas diferenças de cores são reduzidas."

    };


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
            Number(visionIntensity.value);


        if (intensityValue) {

            intensityValue.textContent =
                `${intensity}%`;

        }


        visionPreview.className =
            "vision-preview";


        if (type !== "normal") {

            visionPreview.classList.add(type);

        }


        visionPreview.style.setProperty(
            "--vision-intensity",
            `${intensity / 100}`
        );


        if (visionDescription) {

            visionDescription.textContent =
                descriptions[type];

        }


        const previewContent =
            visionPreview.querySelector(
                ".preview-content"
            );


        if (!previewContent) {
            return;
        }


        let blur = 0;

        let opacity = 1;

        let grayscale = 0;

        let scale = 1;


        switch (type) {

            case "miopia":

                blur =
                    intensity * 0.12;

                break;


            case "hipermetropia":

                blur =
                    intensity * 0.055;

                break;


            case "astigmatismo":

                blur =
                    intensity * 0.025;

                scale =
                    1 + intensity * 0.0007;

                break;


            case "presbiopia":

                blur =
                    intensity * 0.07;

                break;


            case "catarata":

                blur =
                    intensity * 0.13;

                opacity =
                    1 - intensity * 0.003;

                break;


            case "daltonismo":

                grayscale =
                    intensity * 0.008;

                break;


            default:

                break;

        }


        previewContent.style.filter =
            `blur(${blur}px) grayscale(${grayscale})`;

        previewContent.style.opacity =
            opacity;

        previewContent.style.transform =
            `scale(${scale})`;

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



    /* ==================================================
       DISCO DE NEWTON
    ================================================== */

    const newtonDisk =
        document.getElementById("newtonDisk");

    const newtonButton =
        document.getElementById("newtonButton");


    if (newtonButton && newtonDisk) {

        newtonButton.addEventListener(
            "click",
            () => {

                newtonDisk.classList.toggle(
                    "spinning"
                );


                if (
                    newtonDisk.classList.contains(
                        "spinning"
                    )
                ) {

                    newtonButton.textContent =
                        "■ Parar disco";

                } else {

                    newtonButton.textContent =
                        "▶ Girar disco";

                }

            }
        );

    }



    /* ==================================================
       QUIZ
    ================================================== */

    const quizButton =
        document.getElementById("quizButton");

    const quizResult =
        document.getElementById("quizResult");


    if (quizButton && quizResult) {

        quizButton.addEventListener(
            "click",
            () => {

                const questions = [
                    "q1",
                    "q2",
                    "q3"
                ];


                let score = 0;

                let answered = 0;


                questions.forEach(question => {

                    const selected =
                        document.querySelector(
                            `input[name="${question}"]:checked`
                        );


                    if (selected) {

                        answered++;

                        score +=
                            Number(selected.value);

                    }

                });


                if (answered < questions.length) {

                    quizResult.textContent =
                        "Responda todas as questões antes de ver o resultado.";

                    return;

                }


                if (score === 3) {

                    quizResult.textContent =
                        "🎉 Excelente! Você acertou 3 de 3 questões.";

                } else if (score === 2) {

                    quizResult.textContent =
                        "👏 Muito bom! Você acertou 2 de 3 questões.";

                } else if (score === 1) {

                    quizResult.textContent =
                        "👍 Você acertou 1 de 3. Continue estudando!";

                } else {

                    quizResult.textContent =
                        "📚 Você não acertou nenhuma. Que tal revisar o conteúdo?";

                }

            }
        );

    }



    /* ==================================================
       ALTO CONTRASTE
    ================================================== */

    const contrastButton =
        document.getElementById("contrastButton");


    if (contrastButton) {

        contrastButton.addEventListener(
            "click",
            () => {

                document.body.classList.toggle(
                    "high-contrast"
                );

            }
        );

    }



    /* ==================================================
       AUMENTAR FONTE
    ================================================== */

    const fontButton =
        document.getElementById("fontButton");


    let fontSizeLevel = 0;


    if (fontButton) {

        fontButton.addEventListener(
            "click",
            () => {

                fontSizeLevel++;

                if (fontSizeLevel > 3) {
                    fontSizeLevel = 0;
                }


                document.body.dataset.fontSize =
                    fontSizeLevel;


                const sizes = [
                    "1",
                    "1.05",
                    "1.1",
                    "1.15"
                ];


                document.documentElement.style
                    .fontSize =
                    `${sizes[fontSizeLevel]}rem`;

            }
        );

    }



    /* ==================================================
       LIBRAS
    ================================================== */

    const librasButton =
        document.getElementById("librasButton");

    const librasPanel =
        document.getElementById("librasPanel");


    if (librasButton && librasPanel) {

        librasButton.addEventListener(
            "click",
            () => {

                librasPanel.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });


                librasPanel.classList.toggle(
                    "active"
                );

            }
        );

    }



    /* ==================================================
       ANIMAÇÃO DE ENTRADA DAS SEÇÕES
    ================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".info-card, " +
            ".anomaly-card, " +
            ".physics-card, " +
            ".anatomy-item, " +
            ".quiz-question"
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

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


    animatedElements.forEach(element => {

        observer.observe(element);

    });



    /* ==================================================
       LOG
    ================================================== */

    console.log(
        "Visão em Foco iniciado com sucesso."
    );

});
