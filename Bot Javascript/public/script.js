const botaoEnviar = document.getElementById("enviar");
const caixaMensgaem = document.getElementById("texto");
const chat = document.getElementById("mensagens");

const socket = io();

botaoEnviar.addEventListener("click", () => {
    if (caixaMensgaem.value !== ""){
        socket.emit("nova mensagem", caixaMensgaem.value);
        caixaMensgaem.value = "";
    }
})

socket.addEventListener("nova mensagem", (msg) => {
    const elementoMensagem = document.createElement("li"); //Criando tag <li>
    elementoMensagem.textContent = msg; //<li>Cheguei,bora call</li>
    elementoMensagem.classList.add("mensagem"); //<li class="mensagem">Cheguei,bora call</li>
    chat.appendChild(elementoMensagem); //<div id="mensagem"><li class="mensagem">Cheguei,bora call</li></div>
})