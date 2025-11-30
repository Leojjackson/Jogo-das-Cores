const caixa1 = document.getElementById("caixa1");
const caixa2 = document.getElementById("caixa2");
const caixa3 = document.getElementById("caixa3");
const caixa4 = document.getElementById("caixa4");
const caixa5 = document.getElementById("caixa5");
const caixa6 = document.getElementById("caixa6");
const caixa7 = document.getElementById("caixa7");
const caixa8 = document.getElementById("caixa8");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

let tentativas = 0;
const limiteTentativas = 5; // limite de tentativas
const corCorreta = "amarelo"; // cor que o usuário deve adivinhar

function verificarCor(caixa) {
    if (tentativas < limiteTentativas) {
        tentativas++;
        if (caixa.classList.contains(corCorreta)) {
            alert("PARABÉNS! Você achou a cor AMARELA!");
            caixa.textContent = "PARABÉNS";
            caixa.style.paddingTop = "15px";
        } else {
            alert(`Você errou! A cor AMARELA não está aqui! Tentativa ${tentativas} de ${limiteTentativas}`);
            caixa.textContent = "ERROU! TENTE NOVAMENTE";
            caixa.style.paddingTop = "10px";
        }
    } else {
        alert("Limite de tentativas atingido! Fim de jogo.");
    }
}

// Adicionando eventos de clique para cada caixa
caixa1.addEventListener("click", () => verificarCor(caixa1));
caixa2.addEventListener("click", () => verificarCor(caixa2));
caixa3.addEventListener("click", () => verificarCor(caixa3));
caixa4.addEventListener("click", () => verificarCor(caixa4));
caixa5.addEventListener("click", () => verificarCor(caixa5));
caixa6.addEventListener("click", () => verificarCor(caixa6));
caixa7.addEventListener("click", () => verificarCor(caixa7));
caixa8.addEventListener("click", () => verificarCor(caixa8));

btn1.addEventListener("click", () => {
    alert("Ache a caixa com a cor AMARELA!!!");
});

btn2.addEventListener("click", (event) => {
    location.reload();
});
