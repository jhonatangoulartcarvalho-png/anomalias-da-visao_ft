/* =========================================================
   ANOMALIAS DA VISÃO
   SCRIPT.JS — INTERAÇÕES DO SITE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CONFIGURAÇÕES GERAIS
       ===================================================== */

    const body = document.body;

    // Preferências salvas
    const temaSalvo = localStorage.getItem("tema");
    const tamanhoFonte = localStorage.getItem("tamanhoFonte");

    if (temaSalvo === "dark") {
        body.classList.add("dark-mode");
    }

    if (tamanhoFonte) {
        body.style.fontSize = tamanhoFonte;
    }


    /* =====================================================
       LOADER
       ===================================================== */

    const loader = document.querySelector(".loader");

    if (loader) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                loader.classList.add("hidden");

                setTimeout(() => {
                    loader.remove();
                }, 500);

            }, 700);
        });
    }


    /* =====================================================
       MENU MOBILE
       ===================================================== */

    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav a");

    if (menuButton && nav) {

        menuButton.addEventListener("click", () => {
            nav.classList.toggle("active");
            menuButton.classList.toggle("active");

            const aberto = nav.classList.contains("active");

            menuButton.setAttribute(
                "aria-expanded",
                aberto ? "true" : "false"
            );
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                menuButton.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }


    /* =====================================================
       SCROLL SUAVE
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const destino = document.querySelector(
                link.getAttribute("href")
            );

            if (destino) {
                event.preventDefault();

                destino.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    /* =====================================================
       HEADER AO ROLAR
       ===================================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 80) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });


    /* =====================================================
       BOTÃO VOLTAR AO TOPO
       ===================================================== */

    const topButton = document.querySelector(
        "#backToTop, .back-to-top"
    );

    if (topButton) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {
                topButton.classList.add("show");
            } else {
                topButton.classList.remove("show");
            }

        });

        topButton.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       MODO ESCURO
       ===================================================== */

    const themeButton = document.querySelector(
        "#themeToggle, .theme-toggle"
    );

    if (themeButton) {

        themeButton.addEventListener("click", () => {

            body.classList.toggle("dark-mode");

            const modoEscuro =
                body.classList.contains("dark-mode");

            localStorage.setItem(
                "tema",
                modoEscuro ? "dark" : "light"
            );

            themeButton.setAttribute(
                "aria-label",
                modoEscuro
                    ? "Ativar modo claro"
                    : "Ativar modo escuro"
            );

        });

    }


    /* =====================================================
       ACESSIBILIDADE — TAMANHO DA FONTE
       ===================================================== */

    const aumentarFonte =
        document.querySelector("#increaseFont");

    const diminuirFonte =
        document.querySelector("#decreaseFont");

    const fonteNormal =
        document.querySelector("#resetFont");

    let escalaFonte = 1;


    function atualizarFonte() {

        escalaFonte = Math.max(
            0.8,
            Math.min(1.5, escalaFonte)
        );

        body.style.fontSize =
            `${escalaFonte}em`;

        localStorage.setItem(
            "tamanhoFonte",
            `${escalaFonte}em`
        );
    }


    if (aumentarFonte) {

        aumentarFonte.addEventListener("click", () => {
            escalaFonte += 0.1;
            atualizarFonte();
        });

    }


    if (diminuirFonte) {

        diminuirFonte.addEventListener("click", () => {
            escalaFonte -= 0.1;
            atualizarFonte();
        });

    }


    if (fonteNormal) {

        fonteNormal.addEventListener("click", () => {

            escalaFonte = 1;

            body.style.fontSize = "1em";

            localStorage.setItem(
                "tamanhoFonte",
                "1em"
            );

        });

    }


    /* =====================================================
       ALTO CONTRASTE
       ===================================================== */

    const contrasteButton =
        document.querySelector("#highContrast");

    if (contrasteButton) {

        contrasteButton.addEventListener("click", () => {

            body.classList.toggle("high-contrast");

            const ativo =
                body.classList.contains("high-contrast");

            localStorage.setItem(
                "altoContraste",
                ativo
            );

        });

    }

    if (localStorage.getItem("altoContraste") === "true") {
        body.classList.add("high-contrast");
    }


    /* =====================================================
       MENU DE ACESSIBILIDADE
       ===================================================== */

    const accessibilityButton =
        document.querySelector("#accessibilityButton");

    const accessibilityPanel =
        document.querySelector("#accessibilityPanel");

    if (accessibilityButton && accessibilityPanel) {

        accessibilityButton.addEventListener("click", () => {

            accessibilityPanel.classList.toggle("active");

        });

    }


    /* =====================================================
       PESQUISA DE ANOMALIAS
       ===================================================== */

    const searchInput =
        document.querySelector("#searchInput");

    const cards =
        document.querySelectorAll(
            ".anomaly-card, .card-anomalia"
        );

    if (searchInput) {

        searchInput.addEventListener("input", () => {

            const pesquisa =
                searchInput.value
                    .toLowerCase()
                    .trim();

            cards.forEach(card => {

                const texto =
                    card.textContent.toLowerCase();

                if (texto.includes(pesquisa)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }

            });

        });

    }


    /* =====================================================
       FILTROS
       ===================================================== */

    const filtros =
        document.querySelectorAll("[data-filter]");

    filtros.forEach(filtro => {

        filtro.addEventListener("click", () => {

            const categoria =
                filtro.dataset.filter;

            cards.forEach(card => {

                const tipo =
                    card.dataset.category;

                if (
                    categoria === "todos" ||
                    !categoria ||
                    tipo === categoria
                ) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

            filtros.forEach(item => {
                item.classList.remove("active");
            });

            filtro.classList.add("active");

        });

    });


    /* =====================================================
       MODAIS
       ===================================================== */

    const modalButtons =
        document.querySelectorAll("[data-modal]");

    modalButtons.forEach(button => {

        button.addEventListener("click", () => {

            const id =
                button.dataset.modal;

            const modal =
                document.getElementById(id);

            if (modal) {

                modal.classList.add("active");

                document.body.style.overflow = "hidden";

            }

        });

    });


    document.querySelectorAll(
        ".modal-close, .close-modal"
    ).forEach(button => {

        button.addEventListener("click", () => {

            const modal =
                button.closest(".modal");

            if (modal) {

                modal.classList.remove("active");

                document.body.style.overflow = "";

            }

        });

    });


    document.querySelectorAll(".modal").forEach(modal => {

        modal.addEventListener("click", event => {

            if (event.target === modal) {

                modal.classList.remove("active");

                document.body.style.overflow = "";

            }

        });

    });


    /* =====================================================
       FAQ
       ===================================================== */

    const faqItems =
        document.querySelectorAll(
            ".faq-item, .accordion-item"
        );

    faqItems.forEach(item => {

        const pergunta =
            item.querySelector(
                ".faq-question, .accordion-header"
            );

        if (!pergunta) return;

        pergunta.addEventListener("click", () => {

            const aberto =
                item.classList.contains("active");

            faqItems.forEach(outro => {
                outro.classList.remove("active");
            });

            if (!aberto) {
                item.classList.add("active");
            }

        });

    });


    /* =====================================================
       SIMULADOR DE ANOMALIAS DA VISÃO
       ===================================================== */

    const seletorVisao =
        document.querySelector("#visionSelect");

    const simulacao =
        document.querySelector("#visionSimulation");

    const descricaoSimulacao =
        document.querySelector("#visionDescription");


    const efeitosVisuais = {

        normal: {
            classe: "visao-normal",
            texto:
                "Visão normal: imagem formada corretamente na retina."
        },

        miopia: {
            classe: "visao-miopia",
            texto:
                "Miopia: dificuldade para enxergar objetos distantes."
        },

        hipermetropia: {
            classe: "visao-hipermetropia",
            texto:
                "Hipermetropia: dificuldade principalmente para focar objetos próximos."
        },

        astigmatismo: {
            classe: "visao-astigmatismo",
            texto:
                "Astigmatismo: a imagem pode apresentar distorções ou falta de nitidez."
        },

        daltonismo: {
            classe: "visao-daltonismo",
            texto:
                "Daltonismo: alteração na percepção de determinadas cores."
        },

        catarata: {
            classe: "visao-catarata",
            texto:
                "A catarata pode causar visão embaçada e redução da nitidez."
        }

    };


    if (seletorVisao) {

        seletorVisao.addEventListener("change", () => {

            const valor =
                seletorVisao.value;

            if (!simulacao) return;

            Object.values(efeitosVisuais)
                .forEach(efeito => {
                    simulacao.classList.remove(
                        efeito.classe
                    );
                });

            const efeito =
                efeitosVisuais[valor];

            if (efeito) {

                simulacao.classList.add(
                    efeito.classe
                );

                if (descricaoSimulacao) {
                    descricaoSimulacao.textContent =
                        efeito.texto;
                }

            }

        });

    }


    /* =====================================================
       SLIDER DO SIMULADOR
       ===================================================== */

    const slider =
        document.querySelector("#visionIntensity");

    const valorSlider =
        document.querySelector("#intensityValue");

    if (slider) {

        slider.addEventListener("input", () => {

            const valor =
                slider.value;

            if (valorSlider) {
                valorSlider.textContent =
                    `${valor}%`;
            }

            if (simulacao) {

                simulacao.style.setProperty(
                    "--intensidade",
                    `${valor / 100}`
                );

            }

        });

    }


    /* =====================================================
       QUIZ
       ===================================================== */

    const quizForm =
        document.querySelector("#quizForm");

    const quizResultado =
        document.querySelector("#quizResult");


    if (quizForm) {

        quizForm.addEventListener("submit", event => {

            event.preventDefault();

            const perguntas =
                quizForm.querySelectorAll(
                    "[data-correct]"
                );

            let acertos = 0;

            perguntas.forEach(pergunta => {

                const resposta =
                    pergunta.querySelector(
                        "input:checked"
                    );

                if (
                    resposta &&
                    resposta.value ===
                    pergunta.dataset.correct
                ) {

                    acertos++;

                }

            });

            if (quizResultado) {

                quizResultado.innerHTML =
                    `
                    <strong>Resultado:</strong>
                    Você acertou ${acertos} de
                    ${perguntas.length} questões.
                    `;

                quizResultado.classList.add("show");

            }

        });

    }


    /* =====================================================
       LEITOR DE TEXTO
       ===================================================== */

    const readButton =
        document.querySelector(
            "#readPage, #readText"
        );

    if (readButton) {

        readButton.addEventListener("click", () => {

            if (!("speechSynthesis" in window)) {

                alert(
                    "Seu navegador não oferece suporte à leitura de texto."
                );

                return;

            }

            window.speechSynthesis.cancel();

            const texto =
                document.querySelector(
                    "main"
                )?.innerText ||
                document.body.innerText;

            const fala =
                new SpeechSynthesisUtterance(texto);

            fala.lang = "pt-BR";
            fala.rate = 0.95;

            window.speechSynthesis.speak(fala);

        });

    }


    /* =====================================================
       PARAR LEITOR
       ===================================================== */

    const stopRead =
        document.querySelector("#stopReading");

    if (stopRead) {

        stopRead.addEventListener("click", () => {

            if ("speechSynthesis" in window) {
                window.speechSynthesis.cancel();
            }

        });

    }


    /* =====================================================
       ASSISTENTE DE LIBRAS
       ===================================================== */

    const librasButton =
        document.querySelector(
            "#librasButton, .libras-button"
        );

    const librasPanel =
        document.querySelector(
            "#librasPanel, .libras-panel"
        );


    if (librasButton && librasPanel) {

        librasButton.addEventListener("click", () => {

            librasPanel.classList.toggle("active");

        });

    }


    /* =====================================================
       CONTROLE DO ASSISTENTE
       ===================================================== */

    const librasClose =
        document.querySelector(
            "#librasClose, .libras-close"
        );

    if (librasClose && librasPanel) {

        librasClose.addEventListener("click", () => {

            librasPanel.classList.remove("active");

        });

    }


    /*
       OBSERVAÇÃO:
       O JavaScript abaixo cria a interface para o
       assistente. Para tradução REAL em Libras, é
       necessário integrar uma solução específica de
       tradução/intérprete em Libras.
    */


    /* =====================================================
       DISCO DE NEWTON
       ===================================================== */

    const disco =
        document.querySelector(
            "#newtonDisk, .newton-disk"
        );

    const botaoDisco =
        document.querySelector(
            "#spinNewton, .spin-newton"
        );

    let discoGirando = false;


    if (botaoDisco && disco) {

        botaoDisco.addEventListener("click", () => {

            discoGirando = !discoGirando;

            if (discoGirando) {

                disco.classList.add("spinning");

                botaoDisco.textContent =
                    "Parar disco";

            } else {

                disco.classList.remove("spinning");

                botaoDisco.textContent =
                    "Girar disco";

            }

        });

    }


    /* =====================================================
       GRÁFICO SIMPLES DE ACUIDADE VISUAL
       ===================================================== */

    const grafico =
        document.querySelector(
            "#visionChart"
        );


    if (grafico) {

        const ctx =
            grafico.getContext("2d");

        const largura =
            grafico.width;

        const altura =
            grafico.height;


        function desenharGrafico() {

            ctx.clearRect(
                0,
                0,
                largura,
                altura
            );

            ctx.beginPath();

            ctx.moveTo(
                40,
                altura - 40
            );

            ctx.lineTo(
                largura - 20,
                altura - 40
            );

            ctx.moveTo(
                40,
                altura - 40
            );

            ctx.lineTo(
                40,
                20
            );

            ctx.stroke();


            const dados = [
                80,
                65,
                90,
                55,
                75,
                95
            ];

            const distancia =
                (largura - 80) /
                (dados.length - 1);


            ctx.beginPath();

            dados.forEach((valor, index) => {

                const x =
                    40 +
                    index * distancia;

                const y =
                    altura -
                    40 -
                    (valor / 100) *
                    (altura - 70);


                if (index === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }

            });

            ctx.stroke();

        }

        desenharGrafico();

    }


    /* =====================================================
       CONTADORES ANIMADOS
       ===================================================== */

    const contadores =
        document.querySelectorAll(
            "[data-counter]"
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    const elemento =
                        entry.target;

                    const destino =
                        Number(
                            elemento.dataset.counter
                        );

                    let atual = 0;

                    const incremento =
                        Math.max(
                            1,
                            Math.ceil(
                                destino / 80
                            )
                        );


                    const intervalo =
                        setInterval(() => {

                            atual += incremento;

                            if (atual >= destino) {

                                atual = destino;

                                clearInterval(
                                    intervalo
                                );

                            }

                            elemento.textContent =
                                atual;

                        }, 20);


                    observer.unobserve(elemento);

                });

            },
            {
                threshold: 0.5
            }
        );


    contadores.forEach(contador => {
        observer.observe(contador);
    });


    /* =====================================================
       BARRAS DE PROGRESSO
       ===================================================== */

    const progressBars =
        document.querySelectorAll(
            "[data-progress]"
        );


    const progressObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;

                    const barra =
                        entry.target;

                    const valor =
                        barra.dataset.progress;

                    barra.style.width =
                        `${valor}%`;

                    progressObserver.unobserve(
                        barra
                    );

                });

            },
            {
                threshold: 0.4
            }
        );


    progressBars.forEach(barra => {
        progressObserver.observe(barra);
    });


    /* =====================================================
       TOOLTIPS
       ===================================================== */

    document.querySelectorAll(
        "[data-tooltip]"
    ).forEach(elemento => {

        elemento.addEventListener(
            "mouseenter",
            () => {

                elemento.setAttribute(
                    "title",
                    elemento.dataset.tooltip
                );

            }
        );

    });


    /* =====================================================
       ANIMAÇÃO AO ENTRAR NA TELA
       ===================================================== */

    const elementosAnimados =
        document.querySelectorAll(
            ".animate-on-scroll"
        );


    const animationObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        animationObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    elementosAnimados.forEach(elemento => {
        animationObserver.observe(elemento);
    });


    /* =====================================================
       NOTIFICAÇÕES
       ===================================================== */

    window.mostrarNotificacao = function (
        mensagem,
        tipo = "info"
    ) {

        const notificacao =
            document.createElement("div");

        notificacao.className =
            `notification ${tipo}`;

        notificacao.innerHTML =
            `
            <span>${mensagem}</span>
            <button aria-label="Fechar">
                ×
            </button>
            `;


        document.body.appendChild(
            notificacao
        );


        setTimeout(() => {
            notificacao.classList.add(
                "show"
            );
        }, 10);


        const fechar =
            notificacao.querySelector(
                "button"
            );


        fechar.addEventListener(
            "click",
            () => {

                notificacao.classList.remove(
                    "show"
                );

                setTimeout(() => {
                    notificacao.remove();
                }, 300);

            }
        );


        setTimeout(() => {

            if (document.body.contains(notificacao)) {

                notificacao.classList.remove(
                    "show"
                );

                setTimeout(() => {
                    notificacao.remove();
                }, 300);

            }

        }, 5000);

    };


    /* =====================================================
       FAVORITOS
       ===================================================== */

    const favoritos =
        document.querySelectorAll(
            ".favorite-button"
        );


    favoritos.forEach(botao => {

        botao.addEventListener("click", () => {

            botao.classList.toggle("favorited");

            const ativo =
                botao.classList.contains(
                    "favorited"
                );

            botao.setAttribute(
                "aria-pressed",
                ativo
            );

        });

    });


    /* =====================================================
       DETECTOR DE CONEXÃO
       ===================================================== */

    function atualizarConexao() {

        const status =
            document.querySelector(
                "#connectionStatus"
            );

        if (!status) return;

        if (navigator.onLine) {

            status.textContent =
                "● Online";

            status.classList.add(
                "online"
            );

            status.classList.remove(
                "offline"
            );

        } else {

            status.textContent =
                "● Offline";

            status.classList.add(
                "offline"
            );

            status.classList.remove(
                "online"
            );

        }

    }


    window.addEventListener(
        "online",
        atualizarConexao
    );

    window.addEventListener(
        "offline",
        atualizarConexao
    );

    atualizarConexao();


    /* =====================================================
       DATA E HORA
       ===================================================== */

    const clock =
        document.querySelector(
            "#liveClock"
        );


    function atualizarRelogio() {

        if (!clock) return;

        const agora =
            new Date();

        clock.textContent =
            agora.toLocaleString(
                "pt-BR"
            );

    }


    atualizarRelogio();

    setInterval(
        atualizarRelogio,
        1000
    );


    /* =====================================================
       EASTER EGG
       ===================================================== */

    let cliques = 0;

    const logo =
        document.querySelector(
            ".logo"
        );


    if (logo) {

        logo.addEventListener(
            "click",
            () => {

                cliques++;

                if (cliques === 5) {

                    mostrarNotificacao(
                        "👁️ Você encontrou um segredo do projeto!",
                        "success"
                    );

                    cliques = 0;

                }

            }
        );

    }


    /* =====================================================
       TECLA ESC
       ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                document.querySelectorAll(
                    ".modal.active"
                ).forEach(modal => {

                    modal.classList.remove(
                        "active"
                    );

                });


                if (librasPanel) {

                    librasPanel.classList.remove(
                        "active"
                    );

                }


                if (accessibilityPanel) {

                    accessibilityPanel.classList.remove(
                        "active"
                    );

                }


                document.body.style.overflow = "";

            }

        }
    );


    /* =====================================================
       INICIALIZAÇÃO
       ===================================================== */

    console.log(
        "👁️ Anomalias da Visão — sistema carregado!"
    );

    console.log(
        "♿ Recursos de acessibilidade ativados."
    );

    console.log(
        "🤟 Interface do assistente de Libras carregada."
    );

});
