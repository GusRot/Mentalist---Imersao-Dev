let i = 0;
let numeroEleven = parseInt(Math.random(0, 1) * 11);

function Chutar() {
    var numeroDigitado = document.getElementById("valordigitado").value;
    var tentativas = 3;

    if (numeroDigitado > 10 || numeroDigitado < 0 || numeroDigitado == "") {
        resultado.innerHTML = "Esqueceu que escolhi um numero 0 a 10 ?";
        resultado2.innerHTML = "Tente de novo";
    } else if (numeroDigitado == numeroEleven) {
        resultado.innerHTML = "Impressionante! Leu a minha mente :D";
        resultado2.innerHTML =
            "Já pensei em outro número(ou no mesmo)," +
            "<br>" +
            "Podemos jogar novamente, chute outro número";
        i = 0;
        numeroEleven = parseInt(Math.random(0, 1) * 11);
    } else if (numeroDigitado != numeroEleven && i > 1) {
        resultado.innerHTML = "O número foi " + numeroEleven + " =(";
        resultado2.innerHTML =
            "Já pensei em outro número(ou no mesmo)," +
            "<br>" +
            "Podemos jogar novamente, chute outro número";
        i = 0;
        numeroEleven = parseInt(Math.random(0, 1) * 11);
    } else {
        i++;
        if (i > 1) {
            resultado.innerHTML = "Te dou mais " + (tentativas - i) + " chance";
            if (numeroEleven > numeroDigitado) {
                resultado2.innerHTML = "Dica: Pensei em um número maior";
            } else {
                resultado2.innerHTML = "Dica: Pensei em um número menor";
            }
        } else {
            resultado.innerHTML =
                "Te dou mais " + (tentativas - i) + " chances";
            if (numeroEleven > numeroDigitado) {
                resultado2.innerHTML = "Dica: Pensei em um número maior";
            } else {
                resultado2.innerHTML = "Dica: Pensei em um número menor";
            }
        }
    }
    console.log(numeroEleven);
}

window.onload = function () {
    const root = document.getElementById("root");

    root.innerHTML = `<main class="container">
    <h1 class="page-title">
      Mentalista
    </h1>
    <img src="imagens/logo-imersao-mentalista.svg" class="page-logo" alt=""><br>
    <p class="page-subtitle">
        Eleven escolheu um número, 
      </p>
      <p class="page-subtitle">
        Você foi desafiado a acertá-lo.
      </p>
    <p class="page-subtitle">
      Digite um número de 0 a 10
    </p>
    <input type="number" id="valordigitado" /><br>
    <button type="submit" onclick="Chutar()">Chutar</button>
    <h2 class="resultado" id="resultado"></h2>
    <h2 class="resultado" id="resultado2"></h2>
  </main>
  <a href="https://alura.com.br/" target="_blank">
    <img src="imagens/alura-logo.svg" alt="" class="alura-logo">
  </a>
  <p class="alura">OBS: O HTML e CSS foram aproveitados pela imersão DEV da Alura</p>`;
};
