const codigoCorreto = "2006";

let codigoDigitado = "";

const botoes = document.querySelectorAll(".numero");
const pontos = document.querySelectorAll(".ponto");
const mensagem = document.querySelector(".mensagem");
const botaoAbrir = document.querySelector(".abrir");

function atualizarVisor() {

  pontos.forEach((ponto, index) => {

    if(index < codigoDigitado.length){
      ponto.classList.add("ativo");
    } else {
      ponto.classList.remove("ativo");
    }

  });

}

botoes.forEach(botao => {

  botao.addEventListener("click", () => {

    if(codigoDigitado.length < 4){

      codigoDigitado += botao.textContent;

      atualizarVisor();

      mensagem.textContent = "";
      mensagem.className = "mensagem";

    }

  });

});

botaoAbrir.addEventListener("click", () => {

  if(codigoDigitado.length < 4){

    mensagem.textContent = "Digite os 4 dígitos!";
    mensagem.className = "mensagem erro";

    return;
  }

  if(codigoDigitado === codigoCorreto){

    mensagem.textContent = "✅ Cofre aberto com sucesso!";
    mensagem.className = "mensagem sucesso";

  } else {

    mensagem.textContent = "❌ Código incorreto!";
    mensagem.className = "mensagem erro";

  }

  codigoDigitado = "";
  atualizarVisor();

});