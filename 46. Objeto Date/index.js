function zeroEsqueda(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(date){
    const dia = zeroEsqueda(date.getDate());
    const mes = zeroEsqueda(date.getMonth() +1);
    const ano = zeroEsqueda(date.getFullYear());
    const hora = zeroEsqueda(date.getHours());
    const min = zeroEsqueda(date.getMinutes());
    const seg = zeroEsqueda(date.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const date = new Date();
const dateBrasil = formataData(date);
console.log(dateBrasil);
