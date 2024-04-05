const formulario = document.querySelector("#formulario");
const peso = formulario.querySelector("#peso");
const altura = formulario.querySelector("#altura");
const resultado = document.querySelector("#resultado");

function tratarSubmit(evento){
  evento.preventDefault();
  const pesoValor = parseFloat(peso.value);
  const alturaValor = parseFloat(altura.value);
  resultado.innerHTML = "";

  if (validarCampos(pesoValor, alturaValor, resultado)){
    calcularIMC(pesoValor, alturaValor, resultado);
  }
}

function validarCampos(pesoValor, alturaValor, resultado){
  if (isNaN(pesoValor)){
    resultado.innerHTML = `<p class="paragrafo-resultado bad">Peso deve ser um numero</p>`;
    return false;
  }
  
  if (isNaN(alturaValor)){
    resultado.innerHTML = `<p class="paragrafo-resultado bad">Altura deve ser um numero</p>`;
    return false;
  }

  return true;
}

function calcularIMC(pesoValor, alturaValor, resultado){
  const imc = (pesoValor / (alturaValor**2)).toFixed(2);

  if (imc < 18.5){
    resultado.innerHTML = `<p class="paragrafo-resultado">RESULTADO ${imc} - MAGREZA</p>`;
  } else if (imc >= 18.5 && imc <= 24.9){
    resultado.innerHTML = `<p class="paragrafo-resultado">RESULTADO ${imc} - NORMAL</p>`;
  } else if (imc >= 25.0 && imc <= 29.9){
    resultado.innerHTML = `<p class="paragrafo-resultado">RESULTADO ${imc} - SOBREPESO</p>`;
  } else if (imc >= 30.0 && imc <= 39.9){
    resultado.innerHTML = `<p class="paragrafo-resultado">RESULTADO ${imc} - OBESIDADE</p>`;
  } else{
    resultado.innerHTML = `<p class="paragrafo-resultado">RESULTADO ${imc} - OBESIDADE GRAVE</p>`;
  }
}

formulario.addEventListener('submit', tratarSubmit);