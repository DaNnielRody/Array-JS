// Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala:

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// const mediaSalaJS = salaJS.reduce((total, numero) => {
//     return (total + numero);
//     
// });

// const mediaSalaJava = salaJava.reduce((total, numero) => {
//     return (total + numero);
// });

// const mediaSalaPython = salaPython.reduce((total, numero) => {
//     return (total + numero);
// });

function calculaNotas(notasDaSala) {
    const somaDasNotas =
        notasDaSala.reduce((total, nota) => {
        return total + nota;
    }, 0)

    const media = somaDasNotas / notasDaSala.length;

    return console.log(`A média da sua turma foi de: ${media}`);
}

calculaNotas(salaJS);
calculaNotas(salaJava);
calculaNotas(salaPython);