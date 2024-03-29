let numero1 = Number(prompt("Digite um numero"));

let compoNumeroDigitado = document.getElementById("numero-digitado");
compoNumeroDigitado.innerText = `Numero digitado foi ${numero1}`;

let respostaCampo = document.getElementById("resposta");
respostaCampo.innerHTML = `<h4> A raiz do seu numero é: ${Math.sqrt(numero1)} </h4>`
respostaCampo.innerHTML += `<h4> Seu numero é inteiro: ${Number.isInteger(numero1)} </h4>`
respostaCampo.innerHTML += `<h4> Não é um numero: ${Number.isNaN(numero1)} </h4>`
respostaCampo.innerHTML += `<h4> Arrendondar para baixo ${Math.floor(numero1)} </h4>`
respostaCampo.innerHTML += `<h4> Arrendondar para cima ${Math.ceil(numero1)} </h4>`
respostaCampo.innerHTML += `<h4> Com duas casas decimais ${numero1.toFixed(2)} </h4>`

