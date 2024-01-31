const botaoPlayPause = document.getElementById("play-pause");
const nomeCapitulo = document.getElementById("capitulo");
const audioCapitulo = document.getElementById("audio-capitulo");
const botaoVoltar = document.getElementById("anterior");
const botaoAvancar = document.getElementById("proximo");


const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.add("bi-play-circle-fill");
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
}

function tocarPausar() {
    if (taTocando === 0){
        tocarFaixa();
        taTocando = 1;
    }else {
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarFaixa() {
    nomeCapitulo.innerText = "Capitulo " + capituloAtual;
}

function avancarFaixa() {
    if (capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    }else {
        capituloAtual = capituloAtual + 1;
    }
    
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarFaixa();
}

function voltarFaixa() {
    if (capituloAtual === 1){
        capituloAtual = numeroCapitulos;
    }else {
        capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarFaixa();
}

botaoPlayPause.addEventListener("click", tocarPausar);
botaoAvancar.addEventListener("click", avancarFaixa);
botaoVoltar.addEventListener("click", voltarFaixa);
