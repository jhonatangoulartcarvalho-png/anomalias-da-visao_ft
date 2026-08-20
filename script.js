// ==================================================
// VISÃO EM FOCO — JAVASCRIPT FINAL
// ==================================================

document.addEventListener("DOMContentLoaded", () => {

    // ==================================================
    // LOADER
    // ==================================================

    const loader = document.querySelector(".loader");

    setTimeout(() => {
        if (loader) {
            loader.classList.add("hidden");
        }
    }, 900);


    // ==================================================
    // MENU MOBILE
    // ==================================================

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            nav.classList.toggle("mobile-open");

            menuToggle.setAttribute(
                "aria-expanded",
                nav.classList.contains("mobile-open")
            );

        });


        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("mobile-open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    // ==================================================
    // TEMA
    // ==================================================

    const themeToggle =
        document.querySelector("#themeToggle");

    const savedTheme =
        localStorage.getItem("vision-theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }

    function updateThemeIcon() {

        if (!themeToggle) return;

        themeToggle.textContent =
            document.body.classList.contains("light-mode")
                ? "☀️"
                : "🌙";

    }

    updateThemeIcon();


    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle(
                "light-mode"
            );

            localStorage.setItem(
                "vision-theme",
                document.body.classList.contains("light-mode")
                    ? "light"
                    : "dark"
            );

            updateThemeIcon();

        });

    }


    // ==================================================
    // ACESSIBILIDADE
    // ==================================================

    const accessibilityToggle =
        document.querySelector("#accessibilityToggle");

    const accessibilityPanel =
        document.querySelector("#accessibilityPanel");

    const accessibilityClose =
        document.querySelector(".accessibility-close");


    if (accessibilityToggle) {

        accessibilityToggle.addEventListener(
            "click",
            () => {

                accessibilityPanel?.classList.toggle(
                    "active"
                );

            }
        );

    }


    if (accessibilityClose) {

        accessibilityClose.addEventListener(
            "click",
            () => {

                accessibilityPanel?.classList.remove(
                    "active"
                );

            }
        );

    }


    // ==================================================
    // TAMANHO DA FONTE
    // ==================================================

    let fontSize =
        Number(
            localStorage.getItem(
                "vision-font-size"
            )
        ) || 100;


    function applyFontSize() {

        document.documentElement.style.fontSize =
            fontSize + "%";

        localStorage.setItem(
            "vision-font-size",
            fontSize
        );

    }

    applyFontSize();


    const fontPlus =
        document.querySelector("[data-font-plus]");

    const fontMinus =
        document.querySelector("[data-font-minus]");

    const fontNormal =
        document.querySelector("[data-font-normal]");


    fontPlus?.addEventListener("click", () => {

        fontSize =
            Math.min(
                fontSize + 10,
                140
            );

        applyFontSize();

    });


    fontMinus?.addEventListener("click", () => {

        fontSize =
            Math.max(
                fontSize - 10,
                80
            );

        applyFontSize();

    });


    fontNormal?.addEventListener("click", () => {

        fontSize = 100;

        applyFontSize();

    });


    // ==================================================
    // ALTO CONTRASTE
    // ==================================================

    const contrastButton =
        document.querySelector("[data-contrast]");


    if (
        localStorage.getItem(
            "vision-contrast"
        ) === "true"
    ) {

        document.body.classList.add(
            "high-contrast"
        );

    }


    contrastButton?.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "high-contrast"
            );

            localStorage.setItem(
                "vision-contrast",
                document.body.classList.contains(
                    "high-contrast"
                )
            );

        }
    );


    // ==================================================
    // LEITOR DE TEXTO
    // ==================================================

    const speechButton =
        document.querySelector("[data-speech]");


    speechButton?.addEventListener(
        "click",
        () => {

            if (
                !("speechSynthesis" in window)
            ) {

                alert(
                    "Seu navegador não oferece leitura de texto."
                );

                return;

            }


            speechSynthesis.cancel();


            const text =
                document.body.innerText;


            const speech =
                new SpeechSynthesisUtterance(
                    text
                );


            speech.lang = "pt-BR";

            speech.rate = .95;

            speech.pitch = 1;


            speechSynthesis.speak(
                speech
            );

        }
    );


    // ==================================================
    // LIBRAS
    // ==================================================

    const librasButton =
        document.querySelector("#librasButton");

    const librasPanel =
        document.querySelector("#librasPanel");

    const librasClose =
        document.querySelector("#librasClose");


    librasButton?.addEventListener(
        "click",
        () => {

            librasPanel?.classList.toggle(
                "active"
            );

        }
    );


    librasClose?.addEventListener(
        "click",
        () => {

            librasPanel?.classList.remove(
                "active"
            );

        }
    );


    // ==================================================
    // LABORATÓRIO VISUAL
    // ==================================================

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
            !visionPreview ||
            !visionType ||
            !visionIntensity
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
                intensity + "%";

        }


        const preview =
            visionPreview.querySelector(
                ".preview-content"
            );


        if (!preview) return;


        preview.style.filter = "none";


        if (type === "miopia") {

            preview.style.filter =
                `blur(${intensity / 12}px)`;

        }


        if (type === "hipermetropia") {

            preview.style.filter =
                `blur(${intensity / 15}px)`;

        }


        if (type === "astigmatismo") {

            preview.style.filter =
                `blur(${intensity / 18}px)`;

            preview.style.transform =
                `skew(${intensity / 100}deg)`;

        }


        if (type === "presbiopia") {

            preview.style.filter =
                `blur(${intensity / 14}px)`;

        }


        if (type === "catarata") {

            preview.style.filter =
                `blur(${intensity / 16}px) brightness(.8)`;

        }


        if (type === "daltonismo") {

            preview.style.filter =
                `grayscale(${intensity}%)`;

        }


        if (type === "normal") {

            preview.style.filter =
                "none";

            preview.style.transform =
                "none";

        }

    }


    visionType?.addEventListener(
        "change",
        updateVision
    );


    visionIntensity?.addEventListener(
        "input",
        updateVision
    );


    resetVision?.addEventListener(
        "click",
        () => {

            if (visionType) {
                visionType.value = "normal";
            }

            if (visionIntensity) {
                visionIntensity.value = 50;
            }

            updateVision();

        }
    );


    updateVision();


    // ==================================================
    // DISCO DE NEWTON
    // ==================================================

    const newtonDisk =
        document.querySelector("#newtonDisk");

    const newtonStart =
        document.querySelector("#newtonStart");

    const newtonStop =
        document.querySelector("#newtonStop");

    const newtonReset =
        document.querySelector("#newtonReset");

    const newtonSpeed =
        document.querySelector("#newtonSpeed");


    function updateNewtonSpeed() {

        if (
            !newtonDisk ||
            !newtonSpeed
        ) {
            return;
        }


        const speed =
            Number(
                newtonSpeed.value
            );


        const duration =
            Math.max(
                .15,
                3 - (speed / 40)
            );


        newtonDisk.style.animationDuration =
            duration + "s";

    }


    newtonStart?.addEventListener(
        "click",
        () => {

            newtonDisk?.classList.add(
                "spinning"
            );

            updateNewtonSpeed();

        }
    );


    newtonStop?.addEventListener(
        "click",
        () => {

            newtonDisk?.classList.remove(
                "spinning"
            );

        }
    );


    newtonReset?.addEventListener(
        "click",
        () => {

            newtonDisk?.classList.remove(
                "spinning"
            );

            if (newtonSpeed) {
                newtonSpeed.value = 50;
            }

            updateNewtonSpeed();

        }
    );


    newtonSpeed?.addEventListener(
        "input",
        updateNewtonSpeed
    );


    // ==================================================
    // QUIZ
    // ==================================================

    const quizSubmit =
        document.querySelector("#quizSubmit");

    const quizResult =
        document.querySelector("#quizResult");


    quizSubmit?.addEventListener(
        "click",
        () => {

            const questions =
                document.querySelectorAll(
                    ".quiz-question"
                );


            let score = 0;

            let answered = 0;


            questions.forEach(question => {

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

                    score++;

                }

            });


            if (answered < questions.length) {

                quizResult.textContent =
                    "⚠️ Responda todas as questões.";

                return;

            }


            const percentage =
                Math.round(
                    (score / questions.length) * 100
                );


            quizResult.innerHTML = `
                <strong>
                    🎯 Resultado: ${score}/${questions.length}
                </strong>
                <br>
                Você acertou ${percentage}% do quiz.
            `;


            localStorage.setItem(
                "vision-quiz-score",
                score
            );

        }
    );


    // ==================================================
    // FAQ
    // ==================================================

    document
        .querySelectorAll(".faq-question")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const item =
                        button.closest(
                            ".faq-item"
                        );


                    item?.classList.toggle(
                        "active"
                    );


                    const symbol =
                        button.querySelector(
                            "span"
                        );


                    if (symbol) {

                        symbol.textContent =
                            item.classList.contains(
                                "active"
                            )
                                ? "−"
                                : "+";

                    }

                }
            );

        });


    // ==================================================
    // VOLTAR AO TOPO
    // ==================================================

    const backToTop =
        document.querySelector("#backToTop");


    window.addEventListener(
        "scroll",
        () => {

            if (!backToTop) return;


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


    backToTop?.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    // ==================================================
    // ANIMAÇÕES AO ROLAR
    // ==================================================

    const revealElements =
        document.querySelectorAll(
            ".section, .card, .anomaly-card, .about-content"
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
                    threshold: .12
                }
            );


        revealElements.forEach(
            element => {

                observer.observe(
                    element
                );

            }
        );

    }


    // ==================================================
    // ANO AUTOMÁTICO
    // ==================================================

    document
        .querySelectorAll(
            "[data-current-year]"
        )
        .forEach(element => {

            element.textContent =
                new Date().getFullYear();

        });


    // ==================================================
    // ACESSIBILIDADE DE IMAGENS
    // ==================================================

    document
        .querySelectorAll("img")
        .forEach(image => {

            if (
                !image.hasAttribute("alt")
            ) {

                image.alt =
                    "Imagem relacionada à visão";

            }

        });


    // ==================================================
    // ESC FECHA PAINÉIS
    // ==================================================

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key !== "Escape"
            ) {
                return;
            }


            librasPanel?.classList.remove(
                "active"
            );


            accessibilityPanel?.classList.remove(
                "active"
            );

        }
    );


    console.log(
        "👁️ VISÃO EM FOCO — SITE CARREGADO!"
    );
    // ==================================================
// INTERAÇÃO DAS ANOMALIAS
// ==================================================

const anomalyCards =
    document.querySelectorAll(
        ".anomaly-card"
    );


anomalyCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            anomalyCards.forEach(
                otherCard => {

                    if (
                        otherCard !== card
                    ) {

                        otherCard.classList.remove(
                            "selected"
                        );

                    }

                }
            );


            card.classList.toggle(
                "selected"
            );

        }
    );

});


// ==================================================
// EFEITO DE MOVIMENTO NOS CARDS
// ==================================================

anomalyCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const rotateX =
                ((y / rect.height) - .5) * -6;


            const rotateY =
                ((x / rect.width) - .5) * 6;


            card.style.transform =
                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

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
    // ==================================================
// MENU MOBILE — ESTILO
// ==================================================

const mobileStyle = document.createElement("style");

mobileStyle.textContent = `
@media (max-width: 1100px) {

    nav.mobile-open {

        position: absolute;

        top: var(--header-height);

        left: 0;

        width: 100%;

        padding: 25px;

        display: flex;

        flex-direction: column;

        align-items: center;

        gap: 20px;

        background: rgba(5, 8, 22, .97);

        backdrop-filter: blur(20px);

        border-bottom: 1px solid var(--border);

    }

    nav.mobile-open a {

        font-size: 15px;

        padding: 8px 20px;

    }

}
`;

document.head.appendChild(mobileStyle);
    // ==================================================
// LABORATÓRIO — EFEITOS VISUAIS AVANÇADOS
// ==================================================

const labPreview =
    document.querySelector("#visionPreview");

const labType =
    document.querySelector("#visionType");

const labIntensity =
    document.querySelector("#visionIntensity");


function applyVisionEffect() {

    if (!labPreview || !labType || !labIntensity) {
        return;
    }

    const content =
        labPreview.querySelector(".preview-content");

    if (!content) {
        return;
    }

    const intensity =
        Number(labIntensity.value);

    const type =
        labType.value;

    content.style.transform = "";
    content.style.filter = "";
    content.style.textShadow = "";


    switch (type) {

        case "miopia":

            content.style.filter =
                `blur(${intensity / 10}px)`;

            break;


        case "hipermetropia":

            content.style.filter =
                `blur(${intensity / 14}px)`;

            break;


        case "astigmatismo":

            content.style.filter =
                `blur(${intensity / 16}px)`;

            content.style.transform =
                `scaleX(${1 + intensity / 1000})`;

            break;


        case "presbiopia":

            content.style.filter =
                `blur(${intensity / 12}px)`;

            break;


        case "catarata":

            content.style.filter =
                `blur(${intensity / 15}px)
                 brightness(${1 - intensity / 250})`;

            content.style.textShadow =
                `0 0 ${intensity / 3}px rgba(255,255,255,.5)`;

            break;


        case "daltonismo":

            content.style.filter =
                `grayscale(${intensity}%)`;

            break;


        default:

            content.style.filter = "none";
            content.style.transform = "none";
            content.style.textShadow = "none";

    }

}


labType?.addEventListener(
    "change",
    applyVisionEffect
);


labIntensity?.addEventListener(
    "input",
    applyVisionEffect
);


applyVisionEffect();
    // ==================================================
// CONTADORES ANIMADOS
// ==================================================

const counters =
    document.querySelectorAll("[data-counter]");

counters.forEach(counter => {

    const target =
        Number(counter.dataset.counter);

    let current = 0;

    const duration = 1200;

    const startTime = performance.now();

    function animateCounter(currentTime) {

        const progress =
            Math.min(
                (currentTime - startTime) / duration,
                1
            );

        current =
            Math.floor(
                progress * target
            );

        counter.textContent = current;

        if (progress < 1) {

            requestAnimationFrame(
                animateCounter
            );

        } else {

            counter.textContent = target;

        }

    }

    requestAnimationFrame(
        animateCounter
    );
// ==================================================
// LINK ATIVO DO MENU
// ==================================================

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll("nav a[href^='#']");


function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionBottom =
            sectionTop + section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");


        if (
            target === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveLink
);


updateActiveLink();
});
    // ==================================================
// PAUSAR ANIMAÇÕES
// ==================================================

const motionButton =
    document.querySelector("[data-motion]");

if (motionButton) {

    motionButton.addEventListener("click", () => {

        document.body.classList.toggle(
            "reduced-motion"
        );

        const paused =
            document.body.classList.contains(
                "reduced-motion"
            );

        motionButton.textContent =
            paused
                ? "▶️ Retomar animações"
                : "⏸️ Pausar animações";

    });

}
    // ==================================================
// COPIAR TEXTO
// ==================================================

const copyButtons =
    document.querySelectorAll("[data-copy]");

copyButtons.forEach(button => {

    button.addEventListener("click", async () => {

        const text =
            button.dataset.copy;

        if (!text) return;

        try {

            await navigator.clipboard.writeText(text);

            const original =
                button.textContent;

            button.textContent =
                "✓ Copiado!";

            setTimeout(() => {

                button.textContent =
                    original;

            }, 1500);

        } catch (error) {

            console.log(
                "Não foi possível copiar:",
                error
            );

        }

    });

    // ==================================================
// DISCO DE NEWTON — GIRAR
// ==================================================

const newtonButton =
    document.querySelector("#newtonStart");

const newtonDisk =
    document.querySelector("#newtonDisk");

if (newtonButton && newtonDisk) {

    newtonButton.addEventListener("click", () => {

        newtonDisk.classList.toggle("spinning");

        if (newtonDisk.classList.contains("spinning")) {
            newtonButton.textContent = "⏹ Parar disco";
        } else {
            newtonButton.textContent = "▶ Girar disco";
        }

    });

}
    // ==================================================
// VOLTAR AO TOPO
// ==================================================

const backToTop = document.querySelector("#backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
    // ==================================================
// LEITOR DE TEXTO
// ==================================================

const speechButton =
    document.querySelector("[data-speech]");

if (speechButton) {

    speechButton.addEventListener("click", () => {

        if (!("speechSynthesis" in window)) {

            alert(
                "Seu navegador não suporta leitura de texto."
            );

            return;
        }

        // Se já estiver lendo, para
        if (speechSynthesis.speaking) {

            speechSynthesis.cancel();

            speechButton.textContent =
                "🔊 Ler página";

            return;
        }

        const text =
            document.body.innerText;

        const speech =
            new SpeechSynthesisUtterance(text);

        speech.lang = "pt-BR";

        speech.rate = 0.9;

        speech.pitch = 1;

        speech.onend = () => {

            speechButton.textContent =
                "🔊 Ler página";

        };

        speechSynthesis.speak(speech);

        speechButton.textContent =
            "⏹ Parar leitura";

    });

}
    // ==================================================
// FAQ — ABRIR E FECHAR
// ==================================================

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const item =
            question.closest(".faq-item");

        if (!item) return;

        const alreadyOpen =
            item.classList.contains("active");


        // Fecha os outros
        document
            .querySelectorAll(".faq-item.active")
            .forEach(openItem => {

                if (openItem !== item) {

                    openItem.classList.remove(
                        "active"
                    );

                    const icon =
                        openItem.querySelector(
                            ".faq-question span"
                        );

                    if (icon) {
                        icon.textContent = "+";
                    }

                }

            });


        // Abre/fecha o atual
        item.classList.toggle("active");


        const icon =
            question.querySelector("span");

        if (icon) {

            icon.textContent =
                item.classList.contains("active")
                    ? "−"
                    : "+";

        }

    });

// ==================================================
// QUIZ — RESULTADO
// ==================================================

const quizButton =
    document.querySelector("#quizSubmit");

const quizResult =
    document.querySelector("#quizResult");

if (quizButton && quizResult) {

    quizButton.addEventListener("click", () => {

        const questions =
            document.querySelectorAll(
                ".quiz-question"
            );

        let score = 0;
        let answered = 0;


        questions.forEach(question => {

            const selected =
                question.querySelector(
                    "input:checked"
                );

            if (!selected) return;

            answered++;


            if (
                selected.dataset.correct === "true"
            ) {

                score++;

            }

        });


        if (
            questions.length > 0 &&
            answered < questions.length
        ) {

            quizResult.textContent =
                "⚠️ Responda todas as questões antes de finalizar.";

            return;

        }


        if (questions.length === 0) {

            quizResult.textContent =
                "Nenhuma questão encontrada.";

            return;

        }


        const percentage =
            Math.round(
                (score / questions.length) * 100
            );


        let message;


        if (percentage === 100) {

            message =
                "🏆 Perfeito! Você acertou tudo!";

        } else if (percentage >= 70) {

            message =
                "👏 Muito bom! Você mandou bem!";

        } else if (percentage >= 50) {

            message =
                "👍 Bom trabalho! Dá para melhorar um pouco.";

        } else {

            message =
                "📚 Continue estudando! Você vai conseguir.";

        }


        quizResult.innerHTML = `
            <strong>${message}</strong>
            <br>
            Você acertou
            <strong>${score}/${questions.length}</strong>
            questões (${percentage}%).
        `;

    });

}
    // ==================================================
// MODO CLARO / ESCURO
// ==================================================

const themeButton =
    document.querySelector("#themeToggle");

if (themeButton) {

    // Recupera o tema salvo
    const savedTheme =
        localStorage.getItem("vision-theme");

    if (savedTheme === "light") {

        document.body.classList.add(
            "light-mode"
        );

    }


    function updateThemeButton() {

        const light =
            document.body.classList.contains(
                "light-mode"
            );

        themeButton.textContent =
            light ? "☀️" : "🌙";

        themeButton.setAttribute(
            "aria-label",
            light
                ? "Ativar modo escuro"
                : "Ativar modo claro"
        );

    }


    updateThemeButton();


    themeButton.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light-mode"
            );


            const light =
                document.body.classList.contains(
                    "light-mode"
                );


            localStorage.setItem(
                "vision-theme",
                light
                    ? "light"
                    : "dark"
            );


            updateThemeButton();

        }
    );

}
});
