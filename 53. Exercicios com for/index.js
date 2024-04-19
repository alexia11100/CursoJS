// titulo, descrição, status

const listaDeTarefas = [
    {titulo:"Estudar pra prova", descricao: "Estudar para prova de matemática na segunda", status: "pendente"},
    {titulo:"Comprar cama", descricao: "Ligar na loja e encomendar uma cama nova", status: "feito"},
    {titulo:"Consertar pc", descricao: "Levar pc ao conserto hoje", status: "feito"}
];
const conteudoPagina = document.querySelector("#conteudo");

for(let i = 0; i < listaDeTarefas.length; i++){
    const htmlGerado = `<p>${listaDeTarefas[i].titulo} - ${listaDeTarefas[i].descricao} - ${listaDeTarefas[i].status}</p>`;
    conteudoPagina.innerHTML += htmlGerado;
}