function registrarPessoa() {
    const form = document.querySelector('.formulario');

    const pessoas = [];

    function recebeDadosForm(evento){
        evento.preventDefault();
        console.log("Pessoa clicou");

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }

        pessoas.push(pessoa);
        console.log(pessoas);

        const resultadoLista = document.querySelector('.resultadoLista');
        resultadoLista.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }
    form.addEventListener('submit', recebeDadosForm);

}

registrarPessoa();