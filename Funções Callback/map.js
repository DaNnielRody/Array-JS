//Um aluno recebeu um ponto extra nas suas notas. Adicione esse ponto nas notas da seguinte lista:

const notas = [10, 9.5, 8, 7, 6];

const pontoExtra = 1;

// const notasAtualizadas = notas.map(nota => {
//     if (nota >= 10) {
//          return 10
//     } else {
//         return nota + pontoExtra;
//     }
// });

const notasAtualizadas = notas.map(nota => {
    return nota + pontoExtra >= 10 ? 10 : nota + pontoExtra;
});

console.log(notasAtualizadas);

// notas.forEach(nota => {
//     nota += pontoExtra;
//     console.log(nota);
// });

