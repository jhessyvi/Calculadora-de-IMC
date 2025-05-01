function Calcular() {
    let resultado = document.getElementById("resultado");
    let pesoInput = document.getElementById("Peso");
    let alturaInput = document.getElementById("Altura");
  
    let peso = parseFloat(pesoInput.value);
    let altura = parseFloat(alturaInput.value);
  
    let calculo = peso / altura ** 2;
    resultado.textContent = calculo.toFixed(2);

    if (calculo < 18.5) {
        resultado.textContent += " - Abaixo do peso";
    } else if (calculo >= 18.5 && calculo < 24.9) {
        resultado.textContent += " - Peso normal";
    } else if (calculo >= 25 && calculo < 29.9) {
        resultado.textContent += " - Sobrepeso";
    } else if (calculo >=30 && calculo <34.9){
        resultado.textContent += " - Obesidade grau 1";
    } else if (calculo >=35 && calculo <39.9){
        resultado.textContent += " - Obesidade grau 2";
    } else if (calculo >40){
        resultado.textContent += " - Obesidade grau 3";}
  }
  