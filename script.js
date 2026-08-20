/* =========================================================
   VISÃO EM FOCO — SCRIPT PRINCIPAL
========================================================= */


/* =========================================================
   01 — ELEMENTOS
========================================================= */

const body = document.body;

const botaoTema = document.getElementById("botaoTema");
const botaoAcessibilidade = document.getElementById("botaoAcessibilidade");
const botaoMenu = document.getElementById("botaoMenu");

const painelAcessibilidade =
    document.getElementById("painelAcessibilidade");

const fecharPainel =
    document.getElementById("fecharPainel");

const modalLibras =
    document.getElementById("modalLibras");

const abrirLibras =
    document.getElementById("abrirLibras");

const painelLibras =
    document.getElementById("painelLibras");

const fecharLibras =
    document.getElementById("fecharLibras");


/* =========================================================
   02 — TEMA ESCURO
========================================================= */

if (botaoTema) {

    botaoTema.addEventListener("click", () => {

        body.classList.toggle("tema-escuro");

        const escuro =
            body.classList.contains("tema-escuro");

        botaoTema.textContent =
            escuro ? "☀" : "☼";

        localStorage.setItem(
            "temaEscuro",
            escuro
        );

    });

}


/* Recuperar tema salvo */

if (
    localStorage.getItem("temaEscuro") === "true"
) {

    body.classList.add("tema-escuro");

    if (botaoTema) {
        botaoTema.textContent = "☀";
    }

}


/* =========================================================
   03 — PAINEL DE ACESSIBILIDADE
========================================================= */

if (botaoAcessibilidade) {

    botaoAcessibilidade.addEventListener(
        "click",
        () => {

            painelAcessibilidade.classList.toggle(
                "aberto"
            );

        }
    );

}


if (fecharPainel) {

    fecharPainel.addEventListener(
        "click",
        () => {

            painelAcessibilidade.classList.remove(
                "aberto"
            );

        }
    );

}


/* =========================================================
   04 — MENU MOBILE
========================================================= */

if (botaoMenu) {

    botaoMenu.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "menu-aberto"
            );

        }
    );

}


/* =========================================================
   05 — ANATOMIA DO OLHO
========================================================= */

const nomeParte =
    document.getElementById("nomeParte");

const descricaoParte =
    document.getElementById("descricaoParte");

const botoesPartes =
    document.querySelectorAll(".parte");

const pontosOlho =
    document.querySelectorAll(".ponto");


const partesOlho = {

    cornea: {

        nome: "Córnea",

        descricao:
            "A córnea é a camada transparente localizada na parte frontal do olho. Ela ajuda a proteger o olho e participa da focalização da luz."
    },

    iris: {

        nome: "Íris",

        descricao:
            "A íris é a região colorida do olho. Ela controla a quantidade de luz que entra através da pupila."
    },

    pupila: {

        nome: "Pupila",

        descricao:
            "A pupila é a abertura localizada no centro da íris. Seu tamanho muda de acordo com a quantidade de luz."
    },

    retina: {

        nome: "Retina",

        descricao:
            "A retina fica na parte interna posterior do olho e contém células sensíveis à luz que ajudam a transformar estímulos luminosos em sinais nervosos."
    }

};


function mostrarParte(parte) {

    if (!partesOlho[parte]) {
        return;
    }

    nomeParte.textContent =
        partesOlho[parte].nome;

    descricaoParte.textContent =
        partesOlho[parte].descricao;


    botoesPartes.forEach(
        botao => {

            botao.classList.toggle(
                "ativa",
                botao.dataset.parte === parte
            );

        }
    );

}


botoesPartes.forEach(
    botao => {

        botao.addEventListener(
            "click",
            () => {

                mostrarParte(
                    botao.dataset.parte
                );

            }
        );

    }
);


pontosOlho.forEach(
    ponto => {

        ponto.addEventListener(
            "click",
            () => {

                mostrarParte(
                    ponto.dataset.parte
                );

            }
        );

    }
);


/* =========================================================
   06 — ANOMALIAS DA VISÃO
========================================================= */

const cardsAnomalias =
    document.querySelectorAll(".card-anomalia");

const nomeAnomalia =
    document.getElementById("nomeAnomalia");

const descricaoAnomalia =
    document.getElementById("descricaoAnomalia");

const categoriaAnomalia =
    document.getElementById("categoriaAnomalia");


const dadosAnomalias = {

    miopia: {

        nome: "Miopia",

        categoria:
            "ERRO DE REFRAÇÃO",

        descricao:
            "Na miopia, objetos distantes podem parecer desfocados porque a imagem tende a se formar antes da retina."

    },

    hipermetropia: {

        nome: "Hipermetropia",

        categoria:
            "ERRO DE REFRAÇÃO",

        descricao:
            "Na hipermetropia, a focalização de objetos próximos pode ser mais difícil, especialmente em determinadas situações."

    },

    astigmatismo: {

        nome: "Astigmatismo",

        categoria:
            "ERRO DE REFRAÇÃO",

        descricao:
            "O astigmatismo está relacionado a uma curvatura irregular da córnea ou do cristalino e pode causar visão desfocada ou distorcida."

    },

    presbiopia: {

        nome: "Presbiopia",

        categoria:
            "ALTERAÇÃO DA ACOMODAÇÃO",

        descricao:
            "A presbiopia está relacionada à redução gradual da capacidade de focalizar objetos próximos, geralmente associada ao envelhecimento."

    },

    catarata: {

        nome: "Catarata",

        categoria:
            "ALTERAÇÃO DO CRISTALINO",

        descricao:
            "A catarata ocorre quando o cristalino fica opaco, podendo provocar visão embaçada e dificuldade para enxergar com nitidez."

    },

    daltonismo: {

        nome: "Daltonismo",

        categoria:
            "PERCEPÇÃO DAS CORES",

        descricao:
            "O daltonismo envolve diferenças na percepção de determinadas cores. Existem diferentes tipos e graus de alteração."

    }

};


cardsAnomalias.forEach(
    card => {

        card.addEventListener(
            "click",
            () => {

                const tipo =
                    card.dataset.tipo;

                const dados =
                    dadosAnomalias[tipo];

                if (!dados) {
                    return;
                }

                nomeAnomalia.textContent =
                    dados.nome;

                categoriaAnomalia.textContent =
                    dados.categoria;

                descricaoAnomalia.textContent =
                    dados.descricao;


                cardsAnomalias.forEach(
                    outroCard => {

                        outroCard.style.outline =
                            "none";

                    }
                );


                card.style.outline =
                    "2px solid #c7ff45";

            }
        );

    }
);


/* =========================================================
   07 — LABORATÓRIO VISUAL
========================================================= */

const tipoVisao =
    document.getElementById("tipoVisao");

const intensidade =
    document.getElementById("intensidade");

const valorIntensidade =
    document.getElementById("valorIntensidade");

const previewVisao =
    document.getElementById("previewVisao");

const nomeVisao =
    document.getElementById("nomeVisao");

const resetarVisao =
    document.getElementById("resetarVisao");


function aplicarVisao() {

    if (!tipoVisao || !intensidade) {
        return;
    }

    const tipo =
        tipoVisao.value;

    const valor =
        Number(intensidade.value);


    valorIntensidade.textContent =
        valor + "%";

    nomeVisao.textContent =
        tipoVisao.options[
            tipoVisao.selectedIndex
        ].text.toUpperCase();


    /* Remove filtros antigos */

    previewVisao.style.filter =
        "none";


    /* =========================================
       NORMAL
    ========================================= */

    if (tipo === "normal") {

        previewVisao.style.filter =
            "none";

    }


    /* =========================================
       MIOPIA
    ========================================= */

    else if (tipo === "miopia") {

        const blur =
            (valor / 100) * 7;

        previewVisao.style.filter =
            `blur(${blur}px)`;

    }


    /* =========================================
       HIPERMETROPIA
    ========================================= */

    else if (tipo === "hipermetropia") {

        const blur =
            (valor / 100) * 4;

        const brightness =
            1 + (valor / 100) * 0.12;

        previewVisao.style.filter =
            `blur(${blur}px) brightness(${brightness})`;

    }


    /* =========================================
       ASTIGMATISMO
    ========================================= */

    else if (tipo === "astigmatismo") {

        const blur =
            (valor / 100) * 3;

        previewVisao.style.filter =
            `blur(${blur}px)`;

        previewVisao.style.transform =
            `scaleX(${1 + valor / 1000})`;

    }


    /* =========================================
       PRESBIOPIA
    ========================================= */

    else if (tipo === "presbiopia") {

        const blur =
            (valor / 100) * 6;

        previewVisao.style.filter =
            `blur(${blur}px)`;

    }


    /* =========================================
       CATARATA
    ========================================= */

    else if (tipo === "catarata") {

        const blur =
            (valor / 100) * 3;

        const brightness =
            1 - (valor / 100) * 0.15;

        const contrast =
            1 - (valor / 100) * 0.25;

        previewVisao.style.filter =
            `blur(${blur}px) brightness(${brightness}) contrast(${contrast})`;

    }


    /* =========================================
       DALTONISMO
    ========================================= */

    else if (tipo === "daltonismo") {

        const intensidadeDaltonismo =
            valor / 100;

        const grayscale =
            intensidadeDaltonismo * 0.35;

        previewVisao.style.filter =
            `saturate(${1 - intensidadeDaltonismo * 0.6}) grayscale(${grayscale})`;

    }

}


if (tipoVisao) {

    tipoVisao.addEventListener(
        "change",
        aplicarVisao
    );

}


if (intensidade) {

    intensidade.addEventListener(
        "input",
        aplicarVisao
    );

}


if (resetarVisao) {

    resetarVisao.addEventListener(
        "click",
        () => {

            tipoVisao.value =
                "normal";

            intensidade.value =
                50;

            previewVisao.style.transform =
                "none";

            aplicarVisao();

        }
    );

}


/* =========================================================
   08 — QUIZ
========================================================= */

const finalizarQuiz =
    document.getElementById("finalizarQuiz");

const pontuacao =
    document.getElementById("pontuacao");

const mensagemQuiz =
    document.getElementById("mensagemQuiz");

const perguntas =
    document.querySelectorAll(".pergunta");


if (finalizarQuiz) {

    finalizarQuiz.addEventListener(
        "click",
        () => {

            let acertos = 0;

            let respondidas = 0;


            perguntas.forEach(
                pergunta => {

                    const respostaCorreta =
                        pergunta.dataset.resposta;

                    const marcada =
                        pergunta.querySelector(
                            "input:checked"
                        );


                    if (marcada) {

                        respondidas++;

                        if (
                            marcada.value ===
                            respostaCorreta
                        ) {

                            acertos++;

                        }

                    }

                }
            );


            if (respondidas < perguntas.length) {

                mensagemQuiz.textContent =
                    "Responda todas as perguntas antes de finalizar.";

                return;

            }


            const porcentagem =
                Math.round(
                    (acertos / perguntas.length) * 100
                );


            pontuacao.textContent =
                porcentagem + "%";


            if (porcentagem === 100) {

                mensagemQuiz.textContent =
                    "Excelente! Você acertou tudo.";

            }

            else if (porcentagem >= 66) {

                mensagemQuiz.textContent =
                    "Muito bom! Você está dominando o assunto.";

            }

            else if (porcentagem >= 33) {

                mensagemQuiz.textContent =
                    "Bom começo! Continue explorando o conteúdo.";

            }

            else {

                mensagemQuiz.textContent =
                    "Vale revisar o conteúdo e tentar novamente.";

            }


            window.scrollTo({

                top:
                    document.getElementById("quiz").offsetTop - 80,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================================
   09 — TAMANHO DA FONTE
========================================================= */

const diminuirFonte =
    document.getElementById("diminuirFonte");

const aumentarFonte =
    document.getElementById("aumentarFonte");

const resetarFonte =
    document.getElementById("resetarFonte");

let tamanhoFonte = 16;


function atualizarFonte() {

    body.classList.remove(
        "fonte-grande",
        "fonte-muito-grande"
    );


    if (tamanhoFonte >= 21) {

        body.classList.add(
            "fonte-muito-grande"
        );

    }

    else if (tamanhoFonte >= 18) {

        body.classList.add(
            "fonte-grande"
        );

    }

}


if (aumentarFonte) {

    aumentarFonte.addEventListener(
        "click",
        () => {

            tamanhoFonte += 2;

            if (tamanhoFonte > 22) {
                tamanhoFonte = 22;
            }

            atualizarFonte();

        }
    );

}


if (diminuirFonte) {

    diminuirFonte.addEventListener(
        "click",
        () => {

            tamanhoFonte -= 2;

            if (tamanhoFonte < 14) {
                tamanhoFonte = 14;
            }

            if (tamanhoFonte < 18) {

                body.classList.remove(
                    "fonte-grande",
                    "fonte-muito-grande"
                );

            }

        }
    );

}


if (resetarFonte) {

    resetarFonte.addEventListener(
        "click",
        () => {

            tamanhoFonte = 16;

            body.classList.remove(
                "fonte-grande",
                "fonte-muito-grande"
            );

        }
    );

}


/* =========================================================
   10 — FONTE MAIS LEGÍVEL
========================================================= */

const fonteLegivel =
    document.getElementById("fonteLegivel");


if (fonteLegivel) {

    fonteLegivel.addEventListener(
        "click",
        () => {

            body.classList.toggle(
                "fonte-legivel"
            );

        }
    );

}


/* =========================================================
   11 — ALTO CONTRASTE
========================================================= */

const altoContraste =
    document.getElementById("altoContraste");


if (altoContraste) {

    altoContraste.addEventListener(
        "click",
        () => {

            body.classList.toggle(
                "alto-contraste"
            );

        }
    );

}


/* =========================================================
   12 — LIBRAS
========================================================= */

function abrirModalLibras() {

    if (!modalLibras) {
        return;
    }

    modalLibras.classList.add(
        "aberto"
    );

    body.style.overflow =
        "hidden";

}


function fecharModalLibras() {

    if (!modalLibras) {
        return;
    }

    modalLibras.classList.remove(
        "aberto"
    );

    body.style.overflow =
        "";

}


if (abrirLibras) {

    abrirLibras.addEventListener(
        "click",
        abrirModalLibras
    );

}


if (painelLibras) {

    painelLibras.addEventListener(
        "click",
        abrirModalLibras
    );

}


if (fecharLibras) {

    fecharLibras.addEventListener(
        "click",
        fecharModalLibras
    );

}


/* Fechar clicando fora */

if (modalLibras) {

    modalLibras.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                modalLibras
            ) {

                fecharModalLibras();

            }

        }
    );

}


/* Fechar com ESC */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            fecharModalLibras();

            painelAcessibilidade.classList.remove(
                "aberto"
            );

        }

    }
);


/* =========================================================
   13 — LINKS DO MENU
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(
    link => {

        link.addEventListener(
            "click",
            event => {

                const destino =
                    link.getAttribute("href");

                const elemento =
                    document.querySelector(destino);


                if (!elemento) {
                    return;
                }


                event.preventDefault();


                elemento.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });


                body.classList.remove(
                    "menu-aberto"
                );

            }
        );

    }
);


/* =========================================================
   14 — ANIMAÇÃO AO ENTRAR NA TELA
========================================================= */

const elementosAnimados =
    document.querySelectorAll(
        ".card-anomalia, .processo article, .detalhes-anomalia"
    );


const observador =
    new IntersectionObserver(
        elementos => {

            elementos.forEach(
                elemento => {

                    if (
                        elemento.isIntersecting
                    ) {

                        elemento.target.classList.add(
                            "visivel"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


elementosAnimados.forEach(
    elemento => {

        elemento.style.opacity = "0";

        elemento.style.transform =
            "translateY(25px)";

        elemento.style.transition =
            "opacity .7s ease, transform .7s ease";

        observador.observe(elemento);

    }
);


/* =========================================================
   15 — CLASSE DE ANIMAÇÃO
========================================================= */

const estiloAnimacao =
    document.createElement("style");

estiloAnimacao.textContent = `

    .card-anomalia.visivel,
    .processo article.visivel,
    .detalhes-anomalia.visivel {

        opacity: 1 !important;

        transform:
            translateY(0) !important;

    }

`;

document.head.appendChild(
    estiloAnimacao
);


/* =========================================================
   16 — INICIALIZAÇÃO
========================================================= */

aplicarVisao();

mostrarParte("cornea");


console.log(
    "VISÃO EM FOCO iniciado com sucesso."
);
