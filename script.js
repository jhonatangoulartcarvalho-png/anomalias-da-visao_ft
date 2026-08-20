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
// ==========================================
// PARTE 6 — DISCO DE NEWTON
// ==========================================


// ==========================================
// ELEMENTOS
// ==========================================

const newtonDisk =
    document.querySelector(
        "#newtonDisk, .newton-disk, .disco-newton"
    );


const newtonStart =
    document.querySelector(
        "#newtonStart, #startNewton, [data-newton-start]"
    );


const newtonStop =
    document.querySelector(
        "#newtonStop, #stopNewton, [data-newton-stop]"
    );


const newtonReset =
    document.querySelector(
        "#newtonReset, #resetNewton, [data-newton-reset]"
    );


const newtonSpeed =
    document.querySelector(
        "#newtonSpeed, #speedNewton, [data-newton-speed]"
    );


// ==========================================
// VELOCIDADE PADRÃO
// ==========================================

let newtonAnimationSpeed = 1;


// ==========================================
// INICIAR
// ==========================================

if (newtonStart) {

    newtonStart.addEventListener(
        "click",
        () => {

            if (!newtonDisk) {
                return;
            }


            newtonDisk.classList.add(
                "spinning"
            );


            newtonDisk.style.animationPlayState =
                "running";

        }
    );

}


// ==========================================
// PARAR
// ==========================================

if (newtonStop) {

    newtonStop.addEventListener(
        "click",
        () => {

            if (!newtonDisk) {
                return;
            }


            newtonDisk.style.animationPlayState =
                "paused";

        }
    );

}


// ==========================================
// RESET
// ==========================================

if (newtonReset) {

    newtonReset.addEventListener(
        "click",
        () => {

            if (!newtonDisk) {
                return;
            }


            newtonDisk.classList.remove(
                "spinning"
            );


            newtonDisk.style.animationPlayState =
                "paused";


            newtonDisk.style.animationDuration =
                "3s";


            newtonAnimationSpeed = 1;

        }
    );

}


// ==========================================
// CONTROLE DE VELOCIDADE
// ==========================================

if (newtonSpeed) {

    newtonSpeed.addEventListener(
        "input",
        () => {

            if (!newtonDisk) {
                return;
            }


            const value =
                Number(
                    newtonSpeed.value
                );


            /*
             Quanto maior o valor,
             mais rápida fica a rotação.
            */

            const duration =
                Math.max(
                    0.2,
                    5 - (value / 25)
                );


            newtonDisk.style.animationDuration =
                duration + "s";


            newtonAnimationSpeed =
                value;

        }
    );

}


// ==========================================
// DUPLO CLIQUE NO DISCO
// ==========================================

if (newtonDisk) {

    newtonDisk.addEventListener(
        "dblclick",
        () => {

            newtonDisk.classList.toggle(
                "spinning"
            );


            if (
                newtonDisk.classList.contains(
                    "spinning"
                )
            ) {

                newtonDisk.style.animationPlayState =
                    "running";

            } else {

                newtonDisk.style.animationPlayState =
                    "paused";

            }

        }
    );

}


// ==========================================
// ACESSIBILIDADE
// ==========================================

if (newtonDisk) {

    newtonDisk.setAttribute(
        "role",
        "img"
    );


    newtonDisk.setAttribute(
        "aria-label",
        "Disco de Newton"
    );

}


console.log(
    "🌈 Parte 6 carregada!"
);
// ==========================================
// PARTE 7 — QUIZ
// ==========================================

const quiz =
    document.querySelector(
        "#quiz, .quiz, .quiz-container"
    );


if (quiz) {

    const submitButton =
        quiz.querySelector(
            "button[type='submit'], .quiz-submit, #quizSubmit"
        );


    const result =
        quiz.querySelector(
            ".quiz-result, #quizResult, .result"
        );


    if (submitButton) {

        submitButton.addEventListener(
            "click",
            () => {

                const questions =
                    quiz.querySelectorAll(
                        "input[type='radio']"
                    );


                const groups = new Set();


                questions.forEach(
                    input => {

                        if (input.name) {

                            groups.add(
                                input.name
                            );

                        }

                    }
                );


                let score = 0;
                let answered = 0;


                groups.forEach(
                    name => {

                        const selected =
                            quiz.querySelector(
                                `input[name="${name}"]:checked`
                            );


                        if (selected) {

                            answered++;


                            if (
                                selected.dataset.correct ===
                                "true"
                            ) {

                                score++;

                            }

                        }

                    }
                );


                const total =
                    groups.size;


                if (
                    result
                ) {

                    if (
                        answered < total
                    ) {

                        result.textContent =
                            `Responda todas as perguntas. (${answered}/${total})`;

                        return;

                    }


                    result.innerHTML =
                        `
                        <strong>
                            Resultado: ${score}/${total}
                        </strong>
                        <br>
                        Você acertou
                        ${total > 0
                            ? Math.round(
                                score / total * 100
                            )
                            : 0
                        }%.
                        `;

                }

            }
        );

    }

}


console.log(
    "🧠 Parte 7 carregada!"
);
// ==========================================
// PARTE 8 — FAQ
// ==========================================

const faqItems =
    document.querySelectorAll(
        ".faq-item"
    );


faqItems.forEach(item => {

    const question =
        item.querySelector(
            ".faq-question, button, .faq-title"
        );


    const answer =
        item.querySelector(
            ".faq-answer, .faq-content, .faq-text"
        );


    if (!question) return;


    question.addEventListener(
        "click",
        () => {

            const isOpen =
                item.classList.contains(
                    "active"
                );


            // Fecha todos os outros

            faqItems.forEach(
                other => {

                    if (
                        other !== item
                    ) {

                        other.classList.remove(
                            "active"
                        );

                    }

                }
            );


            // Abre/fecha o selecionado

            if (isOpen) {

                item.classList.remove(
                    "active"
                );

            } else {

                item.classList.add(
                    "active"
                );

            }


            // Ajusta a altura

            faqItems.forEach(
                current => {

                    const currentAnswer =
                        current.querySelector(
                            ".faq-answer, .faq-content, .faq-text"
                        );


                    if (
                        !currentAnswer
                    ) return;


                    if (
                        current.classList.contains(
                            "active"
                        )
                    ) {

                        currentAnswer.style.maxHeight =
                            currentAnswer.scrollHeight +
                            "px";

                    } else {

                        currentAnswer.style.maxHeight =
                            "0px";

                    }

                }
            );

        }
    );

});


console.log(
    "❓ Parte 8 carregada!"
);
// ==========================================
// PARTE 9 — PROGRESSO E CONQUISTAS
// ==========================================


// ==========================================
// SISTEMA DE PROGRESSO
// ==========================================

const progressBar =
    document.querySelector(
        "#progressBar, .progress-bar"
    );


const progressText =
    document.querySelector(
        "#progressText, .progress-text"
    );


let progress =
    Number(
        localStorage.getItem(
            "vision-progress"
        )
    ) || 0;


function updateProgress() {

    progress =
        Math.max(
            0,
            Math.min(
                100,
                progress
            )
        );


    if (progressBar) {

        progressBar.style.width =
            progress + "%";

    }


    if (progressText) {

        progressText.textContent =
            progress + "%";

    }


    localStorage.setItem(
        "vision-progress",
        progress
    );

}


updateProgress();


// ==========================================
// AUMENTAR PROGRESSO
// ==========================================

function addProgress(value) {

    progress += value;

    updateProgress();

    checkAchievements();

}


// ==========================================
// MARCAR SEÇÕES VISITADAS
// ==========================================

const visitedSections =
    JSON.parse(
        localStorage.getItem(
            "vision-sections"
        ) || "[]"
    );


document
    .querySelectorAll(
        "section[id]"
    )
    .forEach(section => {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }


                            const id =
                                section.id;


                            if (
                                !visitedSections.includes(
                                    id
                                )
                            ) {

                                visitedSections.push(
                                    id
                                );


                                localStorage.setItem(
                                    "vision-sections",
                                    JSON.stringify(
                                        visitedSections
                                    )
                                );


                                addProgress(5);

                            }


                            observer.unobserve(
                                section
                            );

                        }
                    );

                },
                {
                    threshold: 0.3
                }
            );


        observer.observe(
            section
        );

    });


// ==========================================
// CONQUISTAS
// ==========================================

const achievements = {

    explorer: {
        name: "🔎 Explorador",
        description:
            "Visitou diferentes áreas do site."
    },

    scientist: {
        name: "🧪 Cientista",
        description:
            "Explorou o laboratório."
    },

    quiz: {
        name: "🧠 Conhecedor",
        description:
            "Concluiu o quiz."
    },

    vision: {
        name: "👁️ Especialista em Visão",
        description:
            "Alcançou 100% de progresso."
    }

};


let unlockedAchievements =
    JSON.parse(
        localStorage.getItem(
            "vision-achievements"
        ) || "[]"
    );


function unlockAchievement(id) {

    if (
        unlockedAchievements.includes(
            id
        )
    ) {
        return;
    }


    if (
        !achievements[id]
    ) {
        return;
    }


    unlockedAchievements.push(
        id
    );


    localStorage.setItem(
        "vision-achievements",
        JSON.stringify(
            unlockedAchievements
        )
    );


    showAchievement(
        achievements[id]
    );

}


// ==========================================
// NOTIFICAÇÃO
// ==========================================

function showAchievement(
    achievement
) {

    const notification =
        document.createElement(
            "div"
        );


    notification.className =
        "achievement-notification";


    notification.innerHTML = `
        <strong>
            🏆 Conquista desbloqueada!
        </strong>
        <br>
        ${achievement.name}
        <br>
        <small>
            ${achievement.description}
        </small>
    `;


    document.body.appendChild(
        notification
    );


    setTimeout(
        () => {

            notification.classList.add(
                "hide"
            );


            setTimeout(
                () => {

                    notification.remove();

                },
                500
            );

        },
        4000
    );

}


// ==========================================
// VERIFICAR CONQUISTAS
// ==========================================

function checkAchievements() {

    if (
        visitedSections.length >= 4
    ) {

        unlockAchievement(
            "explorer"
        );

    }


    if (
        document.querySelector(
            "#visionType"
        )
    ) {

        unlockAchievement(
            "scientist"
        );

    }


    if (
        progress >= 100
    ) {

        unlockAchievement(
            "vision"
        );

    }

}


// ==========================================
// QUIZ CONCLUÍDO
// ==========================================

const quizElement =
    document.querySelector(
        "#quiz, .quiz"
    );


if (quizElement) {

    quizElement.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "button"
                );


            if (!button) {
                return;
            }


            if (
                button.textContent
                    .toLowerCase()
                    .includes(
                        "finalizar"
                    )
            ) {

                unlockAchievement(
                    "quiz"
                );

            }

        }
    );

}


checkAchievements();


console.log(
    "🏆 Parte 9 carregada!"
);
// ==========================================
// PARTE 10 — ASSISTENTE DE LIBRAS
// ==========================================


// BOTÃO DO ASSISTENTE

const librasButton =
    document.querySelector(
        "[data-libras], #librasButton, .libras-button"
    );


// PAINEL

const librasPanel =
    document.querySelector(
        ".libras-panel, #librasPanel"
    );


// BOTÃO FECHAR

const librasClose =
    document.querySelector(
        ".libras-close, #librasClose"
    );


// ==========================================
// ABRIR ASSISTENTE
// ==========================================

if (librasButton) {

    librasButton.addEventListener(
        "click",
        () => {

            if (!librasPanel) {
                return;
            }


            librasPanel.classList.toggle(
                "active"
            );


            const opened =
                librasPanel.classList.contains(
                    "active"
                );


            librasButton.setAttribute(
                "aria-expanded",
                opened
            );

        }
    );

}


// ==========================================
// FECHAR ASSISTENTE
// ==========================================

if (librasClose) {

    librasClose.addEventListener(
        "click",
        () => {

            if (!librasPanel) {
                return;
            }


            librasPanel.classList.remove(
                "active"
            );


            if (librasButton) {

                librasButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

}


// ==========================================
// FECHAR CLICANDO FORA
// ==========================================

document.addEventListener(
    "click",
    event => {

        if (
            !librasPanel ||
            !librasButton
        ) {
            return;
        }


        const clickedInside =
            librasPanel.contains(
                event.target
            );


        const clickedButton =
            librasButton.contains(
                event.target
            );


        if (
            !clickedInside &&
            !clickedButton
        ) {

            librasPanel.classList.remove(
                "active"
            );

        }

    }
);


// ==========================================
// ESC FECHA O ASSISTENTE
// ==========================================

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        ) {
            return;
        }


        if (librasPanel) {

            librasPanel.classList.remove(
                "active"
            );

        }

    }
);


// ==========================================
// STATUS DO ASSISTENTE
// ==========================================

const librasStatus =
    document.querySelector(
        "[data-libras-status]"
    );


if (librasStatus) {

    librasStatus.textContent =
        "Assistente de Libras disponível";

}


console.log(
    "🤟 Parte 10 carregada!"
);
// ==========================================
// PARTE 11 — FINALIZAÇÃO
// ==========================================


// ==========================================
// ANIMAÇÃO AO ENTRAR NA TELA
// ==========================================

const revealElements =
    document.querySelectorAll(
        ".section, .card, .anomaly-card, .info-card, .about-content"
    );


if (
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );

}


// ==========================================
// IMAGENS — ACESSIBILIDADE
// ==========================================

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
                "Imagem relacionada às anomalias da visão"
            );

        }

    });


// ==========================================
// ANO AUTOMÁTICO
// ==========================================

document
    .querySelectorAll(
        "[data-current-year]"
    )
    .forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });


// ==========================================
// PREFERÊNCIA DE MOVIMENTO
// ==========================================

const reducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (
    reducedMotion.matches
) {

    document.body.classList.add(
        "reduced-motion"
    );

}


// ==========================================
// TECLA ESC
// ==========================================

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        ) {
            return;
        }


        document
            .querySelectorAll(
                ".active"
            )
            .forEach(element => {

                element.classList.remove(
                    "active"
                );

            });

    }
);


// ==========================================
// STATUS FINAL
// ==========================================

console.log(
    "================================"
);

console.log(
    "👁️ VISÃO EM FOCO"
);

console.log(
    "✅ JavaScript carregado"
);

console.log(
    "✅ Sistema pronto"
);

console.log(
    "================================"
);
