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
      alert("Ache a caixa com a cor PRETA!!!");
    });

    caixa1.addEventListener("click", (event) => {
      if (caixa1.classList != "amarelo") {
        alert("Voçê errou! PRETO nao está aqui!");
        caixa1.classList.add("azul");
      }
    });

    caixa2.addEventListener("click", (event) => {
      if (caixa2.classList != "preto") {
        alert("Voçê errou! AMARELO nao está aqui!");
        caixa2.classList.add("preto");
      }
    });

    caixa3.addEventListener("click", (event) => {
      if (caixa3.classList != "amarelo") {
        caixa3.classList.add("verde");
        alert("Voçê errou! AMARELO nao está aqui!");
      }
    });

    caixa4.addEventListener("click", (event) => {
      if (caixa4.classList != "amarelo") {
        alert("Voçê errou! AMARELO nao está aqui!");
        caixa4.classList.add("roxo");
      }
    });

    caixa5.addEventListener("click", () =>{
      if(caixa5.classList != "amarelo"){
        alert("Voçê errou! AMARELO nao está aqui!!");
            caixa5.classList.add("rosa");
      }
    })

    caixa6.addEventListener("click", (event) => {
      if(caixa6.classList != "amarelo"){
        alert("PARABÉNS VOCÊ ACHOU!!!");
        caixa6.classList.add("amarelo");
      }
    })
    caixa7.addEventListener("click", () => {
      if(caixa7.classList != "amarelo") {
        alert("Voçê errou! AMARELO nao está aqui!!");
        caixa7.classList.add("laranja")
      }
    })

    caixa8.addEventListener('click', (event) =>{
      if(caixa8.classList != "amarelo"){
        alert("Voçê errou! AMARELO nao está aqui!");
        caixa8.classList.add("azul_claro")
      }
    })

    

    btn2.addEventListener("click", (event) => {
      location.reload();
    });