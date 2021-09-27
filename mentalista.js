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
    resultado2.innerHTML = "Já pensei em outro número(ou no mesmo)," + "<br>" + "Podemos jogar novamente, chute outro número";
    i = 0;
    numeroEleven = parseInt(Math.random(0, 1) * 11);
  } else if (numeroDigitado != numeroEleven && i > 1) {
    resultado.innerHTML = "O número foi " + numeroEleven + " =(";
    resultado2.innerHTML = "Já pensei em outro número(ou no mesmo)," + "<br>" + "Podemos jogar novamente, chute outro número";
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
      resultado.innerHTML = "Te dou mais " + (tentativas - i) + " chances";
      if (numeroEleven > numeroDigitado) {
        resultado2.innerHTML = "Dica: Pensei em um número maior";
      } else {
        resultado2.innerHTML = "Dica: Pensei em um número menor";
      }
    }
  }
  console.log(numeroEleven);
}
