const caixa = document.getElementById("caixa");
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

btn1.addEventListener("click", (event) => {
  alert("Ache a caixa com a cor AMARELA!!!");
  btn1.style.display = "none";
});

caixa1.addEventListener("click", (event) => {
  if (caixa1.classList != "amarelo") {
    alert("Voçê errou! AMARELO nao está aqui!");
    caixa1.textContent = "ERROU! TENTE NOVAMENTE";
    caixa1.style.paddingTop = "10px";
    caixa1.classList.add("azul");
  }
});

caixa2.addEventListener("click", (event) => {
  if (caixa2.classList != "preto") {
    alert("Voçê errou! AMARELO nao está aqui!");
    caixa2.textContent = "ERROU! TENTE NOVAMENTE";
    caixa2.style.paddingTop = "10px";
    caixa2.classList.add("preto");
  }
});

caixa3.addEventListener("click", (event) => {
  if (caixa3.classList != "amarelo") {
    caixa3.classList.add("verde");
    alert("Voçê errou! AMARELO nao está aqui!");
    caixa3.textContent = "ERROU! TENTE NOVAMENTE";
    caixa3.style.paddingTop = "10px";
  }
});

caixa4.addEventListener("click", (event) => {
  if (caixa4.classList != "amarelo") {
    alert("Voçê errou! AMARELO nao está aqui!");
    caixa4.classList.add("vermelho");
    caixa4.textContent = "ERROU! TENTE NOVAMENTE";
    caixa4.style.paddingTop = "10px";
  }
});

caixa5.addEventListener("click", () => {
  if (caixa5.classList != "amarelo") {
    alert("Voçê errou! AMARELO nao está aqui!!");
    caixa5.classList.add("rosa");
    caixa5.textContent = "ERROU! TENTE NOVAMENTE";
    caixa5.style.paddingTop = "10px";
  }
});

caixa6.addEventListener("click", (event) => {
  if (caixa6.classList != "amarelo") {
    alert("PARABÉNS VOCÊ ACHOU!!!");
    caixa6.classList.add("amarelo");
    caixa6.textContent = "PARABÉNS";
    caixa6.style.paddingTop = "15px";
  }
});
caixa7.addEventListener("click", (event) => {
  if (caixa7.classList != "amarelo") {
    alert("Voçê errou! AMARELO nao está aqui!!");
    caixa7.classList.add("laranja");
    caixa7.textContent = "ERROU! TENTE NOVAMENTE";
    caixa7.style.paddingTop = "10px";
  }
});

caixa8.addEventListener("click", (event) => {
  if (caixa8.classList != "amarelo") {
    alert("Voçê errou! AMARELO nao está aqui!");
    caixa8.classList.add("azul_claro");
    caixa8.textContent = "ERROU! TENTE NOVAMENTE";
    caixa8.style.paddingTop = "10px";
  }
});

btn2.addEventListener("click", (event) => {
  location.reload();
  
});


