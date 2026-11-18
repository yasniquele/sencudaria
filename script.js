const telaInicial = document.querySelector("#tela-inicial");
const telaInstrucoes = document.querySelector("#tela-instrucoes");
const telaJogo = document.querySelector("#tela-jogo");
const telaFinal = document.querySelector("#tela-final");

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");

const epoca = document.querySelector("#epoca");
const tituloEpoca = document.querySelector("#titulo-epoca");
const numeroPergunta = document.querySelector("#numero-pergunta");
const contador = document.querySelector("#contador");
const barraProgresso = document.querySelector("#barra-progresso");

const caixaFeedback = document.querySelector("#caixa-feedback");
const tituloFeedback = document.querySelector("#titulo-feedback");
const textoFeedback = document.querySelector("#texto-feedback");
const botaoContinuar = document.querySelector("#botao-continuar");

const TOTAL = 15;

const perguntas = [
{
    epoca: "COMBATE ÀS FAKE NEWS",
    titulo: "Verificando informações",
    enunciado: "Qual é a melhor forma de saber se uma notícia é verdadeira?",
    alternativas: [
        { texto: "Verificar a fonte da notícia.", correta: true, explicacao: "Sempre confira a fonte." },
        { texto: "Compartilhar imediatamente.", correta: false, explicacao: "Não compartilhe antes de verificar." },
        { texto: "Acreditar apenas no título.", correta: false, explicacao: "O título pode ser enganoso." }
    ]
},
{
    epoca: "COMBATE ÀS FAKE NEWS",
    titulo: "Redes Sociais",
    enunciado: "Antes de compartilhar uma notícia você deve:",
    alternativas: [
        { texto: "Ler a notícia inteira.", correta: true, explicacao: "Leia antes de compartilhar." },
        { texto: "Compartilhar sem ler.", correta: false, explicacao: "Isso pode espalhar fake news." },
        { texto: "Acreditar apenas na imagem.", correta: false, explicacao: "Imagens também podem ser falsas." }
    ]
},
{
    epoca: "COMBATE ÀS FAKE NEWS",
    titulo: "Fontes",
    enunciado: "Qual é uma fonte mais confiável?",
    alternativas: [
        { texto: "Site oficial.", correta: true, explicacao: "Sites oficiais são mais confiáveis." },
        { texto: "Mensagem de WhatsApp.", correta: false, explicacao: "Mensagens podem ser falsas." },
        { texto: "Corrente da internet.", correta: false, explicacao: "Correntes não garantem veracidade." }
    ]
},
{
    epoca: "COMBATE ÀS FAKE NEWS",
    titulo: "Boatos",
    enunciado: "O que fazer ao encontrar uma notícia duvidosa?",
    alternativas: [
        { texto: "Pesquisar em outras fontes.", correta: true, explicacao: "Compare diferentes fontes." },
        { texto: "Compartilhar rapidamente.", correta: false, explicacao: "Isso espalha boatos." },
        { texto: "Ignorar a fonte.", correta: false, explicacao: "A fonte é importante." }
    ]
},
{
    epoca: "COMBATE ÀS FAKE NEWS",
    titulo: "Pensamento crítico",
    enunciado: "Uma informação muito chamativa deve:",
    alternativas: [
        { texto: "Ser verificada.", correta: true, explicacao: "Confira antes de acreditar." },
        { texto: "Ser compartilhada.", correta: false, explicacao: "Primeiro verifique." },
        { texto: "Ser aceita sem dúvidas.", correta: false, explicacao: "Questione sempre." }
    ]
},
{
    epoca: "COMBATE ÀS FAKE NEWS",
    titulo: "Internet",
    enunciado: "Nem tudo que está na internet é:",
    alternativas: [
        { texto: "Verdadeiro.", correta: true, explicacao: "Nem tudo é confiável." },
        { texto: "Falso.", correta: false, explicacao: "Existem informações verdadeiras." },
        { texto: "Importante.", correta: false, explicacao: "Isso não responde à pergunta." }
    ]
},
{
    epoca: "COMBATE ÀS FAKE NEWS",
    titulo: "Compartilhamento",
    enunciado: "Quem pode espalhar fake news?",
    alternativas: [
        { texto: "Qualquer pessoa.", correta: true, explicacao: "Todos devem ter responsabilidade." },
        { texto: "Somente jornalistas.", correta: false, explicacao: "Não apenas eles." },
        { texto: "Somente políticos.", correta: false, explicacao: "Qualquer pessoa pode compartilhar." }
    ]
},
{
    epoca: "COMBATE ÀS FAKE NEWS",
    titulo: "Imagens",
    enunciado: "Uma imagem na internet pode:",
    alternativas: [
        { texto: "Ser editada.", correta: true, explicacao: "Imagens podem ser manipuladas." },
        { texto: "Ser sempre verdadeira.", correta: false, explicacao: "Nem sempre." },
        { texto: "Nunca ser modificada.", correta: false, explicacao: "Pode ser alterada." }
    ]
},
{
    epoca: "COMBATE ÀS FAKE NEWS",
    titulo: "Responsabilidade",
    enunciado: "Ao descobrir uma notícia falsa você deve:",
    alternativas: [
        { texto: "Não compartilhá-la.", correta: true, explicacao: "Ajude a impedir sua divulgação." },
        { texto: "Espalhá-la.", correta: false, explicacao: "Isso aumenta a desinformação." },
        { texto: "Guardar para depois.", correta: false, explicacao: "O correto é não divulgar." }
    ]
},
{
    epoca: "COMBATE ÀS FAKE NEWS",
    titulo: "Verificação",
    enunciado: "Qual atitude demonstra pensamento crítico?",
    alternativas: [
        { texto: "Comparar várias fontes.", correta: true, explicacao: "Sempre compare informações." },
        { texto: "Acreditar na primeira mensagem.", correta: false, explicacao: "Pode ser falsa." },
        { texto: "Compartilhar sem conferir.", correta: false, explicacao: "Verifique antes." }
    ]
},
{
    epoca: "COMBATE ÀS FAKE NEWS",
    titulo: "Título",
    enunciado: "Você deve acreditar apenas no título?",
    alternativas: [
        { texto: "Não.", correta: true, explicacao: "Leia toda a notícia." },
        { texto: "Sim.", correta: false, explicacao: "O título pode enganar." },
        { texto: "Às vezes, sem ler.", correta: false, explicacao: "Leia sempre." }
    ]
},
{
    epoca: "COMBATE ÀS FAKE NEWS",
    titulo: "Autor",
    enunciado: "É importante saber quem escreveu a notícia?",
    alternativas: [
        { texto: "Sim.", correta: true, explicacao: "Verifique o autor." },
        { texto: "Não.", correta: false, explicacao: "A autoria é importante." },
        { texto: "Só se for famosa.", correta: false, explicacao: "Sempre verifique." }
    ]
},
{
    epoca: "COMBATE ÀS FAKE NEWS",
    titulo: "Sites",
    enunciado: "Qual site inspira mais confiança?",
    alternativas: [
        { texto: "Um site oficial.", correta: true, explicacao: "É mais confiável." },
        { texto: "Qualquer blog desconhecido.", correta: false, explicacao: "Pode conter informações falsas." },
        { texto: "Uma corrente de mensagens.", correta: false, explicacao: "Não é uma fonte confiável." }
    ]
},
{
    epoca: "COMBATE ÀS FAKE NEWS",
    titulo: "Checagem",
    enunciado: "O que significa checar uma informação?",
    alternativas: [
        { texto: "Confirmar se ela é verdadeira.", correta: true, explicacao: "Isso evita fake news." },
        { texto: "Compartilhar.", correta: false, explicacao: "Primeiro confirme." },
        { texto: "Ignorar.", correta: false, explicacao: "Verifique a informação." }
    ]
},
{
    epoca: "COMBATE ÀS FAKE NEWS",
    titulo: "Missão concluída",
    enunciado: "Qual é a melhor maneira de combater as fake news?",
    alternativas: [
        { texto: "Verificar antes de compartilhar.", correta: true, explicacao: "Essa é a melhor atitude." },
        { texto: "Compartilhar rapidamente.", correta: false, explicacao: "Isso espalha notícias falsas." },
        { texto: "Acreditar em tudo.", correta: false, explicacao: "Questione e confirme as informações." }
    ]
}
];
let atual = 0;
let pontuacao = 0;
let respondeu = false;
let energia = 100;
let maiorNivel = 0;
let erros = 0;
let destinoDepoisDoFeedback = null;

// Guarda a ordem das alternativas exibidas em cada pergunta.
let alternativasEmbaralhadasAtuais = [];

function mostrarTela(telaEscolhida) {
    document.querySelectorAll(".tela").forEach(tela => {
        tela.classList.remove("ativa");
    });

    telaEscolhida.classList.add("ativa");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function criarTelaMissao() {
    let telaMissao = document.querySelector("#tela-missao");

    if (telaMissao) return telaMissao;

    telaMissao = document.createElement("section");
    telaMissao.id = "tela-missao";
    telaMissao.className = "tela";

    telaMissao.innerHTML = `
        <div class="ampulheta" aria-hidden="true">🛡️</div>
        <p class="etiqueta">BRIEFING DA MISSÃO</p>
        <h2>Defenda a verdade</h2>
        <p class="descricao">
            Você será responsável por investigar informações suspeitas,
            identificar fontes confiáveis e impedir que notícias falsas
            sejam compartilhadas.
        </p>
        <button id="botao-comecar-missao" class="botao botao-principal">
            <span>▶</span> COMEÇAR DESAFIO
        </button>
        <button id="botao-cancelar-missao" class="botao botao-secundario">
            VOLTAR AO INÍCIO
        </button>
    `;

    telaInicial.parentNode.insertBefore(telaMissao, telaInicial.nextSibling);

    configurarBotoesTelaMissao(telaMissao);

    return telaMissao;
}

function configurarBotoesTelaMissao(telaMissao) {
    const botaoComecar = telaMissao.querySelector("#botao-comecar-missao");
    const botaoCancelar = telaMissao.querySelector("#botao-cancelar-missao");

    if (botaoComecar) { 
        botaoComecar.addEventListener("click", iniciarJogo);
    }

    if (botaoCancelar) {
        botaoCancelar.addEventListener("click", () => mostrarTela(telaInicial));
    }
}

function configurarHistoriaRecolhivel() {
    if (document.querySelector("#historia-recolhivel")) return;

    const historia = document.createElement("details");
    historia.id = "historia-recolhivel";
    historia.className = "historia-recolhivel";

    historia.innerHTML = `
        <summary>📜 História da missão</summary>

        <div class="texto-historia">
            <p>
               
            </p> Estamos no ano de 2015. Uma onda de fake news começou a se espalhar pela internet e pelas redes sociais. Milhares de pessoas estão sendo enganadas por informações falsas. Sua missão é identificar as notícias verdadeiras, combater a desinformação e ajudar a proteger a sociedade. Cada resposta correta impede que uma fake news continue se espalhando. Boa sorte!
            </p>

            <p>
                
            </p>

            <p>
               

            <p class="frase-historia">
               
            </p>
        </div>
    `;

    const cabecalho = telaJogo.querySelector(".cabecalho-jogo");

    if (cabecalho) {
        telaJogo.insertBefore(historia, cabecalho);
    } else {
        telaJogo.prepend(historia);
    }

    if (!document.querySelector("#estilo-historia-recolhivel")) {
        const estilo = document.createElement("style");
        estilo.id = "estilo-historia-recolhivel";

        estilo.textContent = `
            .historia-recolhivel {
                margin: 0 0 20px;
                border: 1px solid var(--dourado, #FFC857);
                border-radius: 8px;
                background: rgba(8, 18, 37, 0.95);
                overflow: hidden;
                text-align: left;
            }

            .historia-recolhivel summary {
                padding: 14px 18px;
                color: var(--ciano, #5CE1E6);
                cursor: pointer;
                font-weight: bold;
                letter-spacing: 1px;
                list-style: none;
            }

            .historia-recolhivel summary::-webkit-details-marker {
                display: none;
            }

            .historia-recolhivel summary::after {
                content: "+";
                float: right;
                color: var(--dourado, #FFC857);
                font-size: 20px;
            }

            .historia-recolhivel[open] summary::after {
                content: "−";
            }

            .historia-recolhivel .texto-historia {
                padding: 0 18px 12px;
                border-top: 1px solid rgba(255, 200, 87, 0.25);
                color: var(--branco, #F4F1E8);
                line-height: 1.6;
            }

            .historia-recolhivel .texto-historia p {
                margin: 12px 0;
            }

            .historia-recolhivel .frase-historia {
                color: var(--ciano, #5CE1E6);
                font-weight: bold;
            }
        `;

        document.head.appendChild(estilo);
    }
}

function iniciarJogo() {
    atual = 0;
    pontuacao = 0;
    respondeu = false;
    energia = 100;
    maiorNivel = 0;
    erros = 0;
    destinoDepoisDoFeedback = null;
    alternativasEmbaralhadasAtuais = [];

    configurarHistoriaRecolhivel();
    mostrarTela(telaJogo);
    atualizarEnergia();
    mostrarPergunta();
}

function atualizarEnergia() {
    let indicador = document.querySelector("#energia-temporal");

    if (!indicador) {
        indicador = document.createElement("p");
        indicador.id = "energia-temporal";
        indicador.className = "etiqueta";

        const progresso = document.querySelector(".progresso");

        if (progresso) {
            progresso.after(indicador);
        } else {
            telaJogo.prepend(indicador);
        }
    }

    indicador.textContent = `ENERGIA TEMPORAL: ${energia}%`;
}

// Embaralhamento de Fisher-Yates.
// A resposta correta mantém sua propriedade "correta: true".
function embaralharAlternativas(alternativas) {
    const lista = [...alternativas];

    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [lista[i], lista[j]] = [lista[j], lista[i]];
    }

    return lista;
}

function atualizarImagemNivel(numeroNivel) {
    const imagem = document.querySelector("#imagem-historia");
    const legenda = document.querySelector("#legenda-imagem");

    // Se o HTML não tiver imagens, o jogo continua funcionando normalmente.
    if (!imagem) return;

    const nomes = {
        1: "Mundo dos dinossauros",
        2: "Vulcões pré-históricos",
        3: "Tiranossauro rex",
        4: "Primeiros seres humanos",
        5: "Pinturas rupestres",
        6: "Cidade futurista",
        7: "Robôs inteligentes",
        8: "Inteligência artificial",
        9: "Viagem espacial",
        10: "Mundo tecnológico",
        11: "Europa em 1939",
        12: "Início da guerra",
        13: "Resistência europeia",
        14: "Dia D",
        15: "Fim da guerra",
        16: "Brasil em 1964",
        17: "Censura e imprensa",
        18: "Movimento estudantil",
        19: "Diretas Já",
        20: "Redemocratização"
    };

    const nome = nomes[numeroNivel];

    if (!nome) return;

    imagem.src = `imagens/nivel${numeroNivel}.jpg`;
    imagem.alt = nome;

    if (legenda) {
        legenda.textContent = nome;
    }
}

function mostrarPergunta() {
    if (maiorNivel >= TOTAL) {
        mostrarResultado();
        return;
    }

    respondeu = false;

    const pergunta = perguntas[atual];

    epoca.textContent = pergunta.epoca;
    tituloEpoca.textContent = pergunta.titulo;
    numeroPergunta.textContent = `DESAFIO ${maiorNivel + 1} DE ${TOTAL}`;
    contador.textContent = `SALTO ${String(maiorNivel + 1).padStart(2, "0")}`;

    barraProgresso.style.width = `${(maiorNivel / TOTAL) * 100}%`;

    caixaPerguntas.textContent = pergunta.enunciado;
    caixaAlternativas.replaceChildren();
    caixaFeedback.hidden = true;

    // CORREÇÃO PRINCIPAL:
    // As alternativas são embaralhadas a cada vez que a pergunta aparece.
    alternativasEmbaralhadasAtuais = embaralharAlternativas(
        pergunta.alternativas
    );

    // Atualiza a imagem, caso o HTML tenha os elementos de imagem.
    atualizarImagemNivel(atual + 1);

    alternativasEmbaralhadasAtuais.forEach(alternativa => {
        const botao = document.createElement("button");

        botao.type = "button";
        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            selecionarResposta(alternativa, botao);
        });

        caixaAlternativas.appendChild(botao);
    });

    atualizarEnergia();
}

function selecionarResposta(alternativaEscolhida, botaoEscolhido) {
    if (respondeu) return;

    respondeu = true;

    const botoes = caixaAlternativas.querySelectorAll("button");

    // Desabilita todos os botões para impedir múltiplas respostas.
    botoes.forEach(botao => {
        botao.disabled = true;
    });

    // Destaca a alternativa correta usando a ordem embaralhada.
    alternativasEmbaralhadasAtuais.forEach((alternativa, indice) => {
        if (alternativa.correta) {
            botoes[indice].classList.add("correta");
        }
    });

    if (alternativaEscolhida.correta) {
        pontuacao++;
        energia = Math.min(100, energia + 10);
        maiorNivel++;

        tituloFeedback.textContent = "Coordenadas estabilizadas! ✦";

        botaoEscolhido.classList.add("correta");

        if (maiorNivel >= TOTAL) {
            destinoDepoisDoFeedback = "final";

            textoFeedback.textContent =
                alternativaEscolhida.explicacao +
                " Todos os fragmentos foram recuperados. A linha temporal está estável!";
        } else {
            destinoDepoisDoFeedback = escolherProximoDestino(atual);

            textoFeedback.textContent =
                alternativaEscolhida.explicacao +
                " A máquina recuperou energia. Preparando um novo salto temporal...";
        }
    } else {
        erros++;
        energia = Math.max(0, energia - 20);

        tituloFeedback.textContent = "Falha temporal! Recuando...";

        botaoEscolhido.classList.add("errada");

        destinoDepoisDoFeedback = Math.max(0, atual - 1);

        textoFeedback.textContent =
            alternativaEscolhida.explicacao +
            " A Cronos perdeu estabilidade e está recuando para uma época anterior. " +
            "Você precisa superar um desafio temporal antes de continuar.";
    }

    atualizarEnergia();
    caixaFeedback.hidden = false;

    botaoContinuar.textContent =
        destinoDepoisDoFeedback === "final"
            ? "RESTAURAR A LINHA TEMPORAL →"
            : alternativaEscolhida.correta
                ? "INICIAR PRÓXIMO SALTO →"
                : "BUSQUE MAIS INFORMAÇÕES →";
}

function escolherProximoDestino(indiceAtual) {
    const rotas = {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        11: 12,
        12: 13,
        13: 14,
        14: 15,
        15: 16,
        16: 17,
        17: 18,
        18: 19
    };

    return rotas[indiceAtual] ?? 0;
}

function continuarViagem() {
    if (destinoDepoisDoFeedback === "final") {
        mostrarResultado();
        return;
    }

    if (destinoDepoisDoFeedback !== null) {
        atual = destinoDepoisDoFeedback;
    }

    destinoDepoisDoFeedback = null;
    mostrarPergunta();
}

function mostrarResultado() {
    mostrarTela(telaFinal);
    barraProgresso.style.width = "100%";

    document.querySelector("#pontuacao-final").textContent =
        `${pontuacao}/${TOTAL}`;

    const percentual = (pontuacao / (TOTAL + erros)) * 100;

    let mensagem;
    let titulo;

    if (erros === 0) {
        titulo = "Guardião do tempo!";
        mensagem =
            "Impressionante! Você restaurou a linha temporal sem cometer erros. " +
            "Seu conhecimento ajudou a salvar passado, presente e futuro.";
    } else if (percentual >= 70) {
        titulo = "Explorador temporal!";
        mensagem =
            "Você enfrentou falhas e recuos, mas conseguiu restaurar a linha temporal. " +
            "Cada desafio trouxe uma nova descoberta.";
    } else if (percentual >= 40) {
        titulo = "Sobrevivente do tempo!";
        mensagem =
            "Sua viagem foi cheia de desvios. Continue estudando as épocas históricas " +
            "para dominar a Cronos na próxima missão.";
    } else {
        titulo = "A linha temporal continua instável...";
        mensagem =
            "Você chegou ao fim da missão, mas ainda há muito para aprender. " +
            "Volte a explorar as épocas e tente restaurar o futuro novamente.";
    }

    document.querySelector("#titulo-final").textContent = titulo;
    document.querySelector("#mensagem-final").textContent = mensagem;

    let resumo = document.querySelector("#resumo-temporal");

    if (!resumo) {
        resumo = document.createElement("p");
        resumo.id = "resumo-temporal";
        resumo.className = "descricao";

        document.querySelector("#pontuacao-final").parentNode.after(resumo);
    }

    resumo.textContent = `Erros temporais: ${erros} | Energia final: ${energia}%`;
}

document.querySelector("#botao-iniciar")
    .addEventListener("click", () => {
        mostrarTela(criarTelaMissao());
    });

configurarBotoesTelaMissao(criarTelaMissao());

document.querySelector("#botao-como-jogar")
    .addEventListener("click", () => mostrarTela(telaInstrucoes));

document.querySelector("#botao-voltar")
    .addEventListener("click", () => mostrarTela(telaInicial));

botaoContinuar.addEventListener("click", continuarViagem);

document.querySelector("#botao-reiniciar")
    .addEventListener("click", iniciarJogo);

document.querySelector("#botao-inicio-final")
    .addEventListener("click", () => mostrarTela(telaInicial));